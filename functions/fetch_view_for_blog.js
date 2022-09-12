// Credit to Josh Comeau
const faunadb = require("faunadb");
exports.handler = async (event) => {
  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
    // region
    domain: "db.eu.fauna.com",
  });

  const { slug } = event.queryStringParameters;
  if (!slug) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow from anywhere
      },
      body: JSON.stringify({
        message: "Article slug not provided",
      }),
    };
  }

  const doesDocExist = await client.query(
    q.Exists(q.Match(q.Index("views_by_slug"), slug))
  );

  if (!doesDocExist) {
    await client.query(
      q.Create(q.Collection("views"), {
        data: { slug: slug, views: 1 },
      })
    );
  }

  const document = await client.query(
    q.Get(q.Match(q.Index("views_by_slug"), slug))
  );

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
    },
    body: JSON.stringify({
      views: document.data.views,
    }),
  };
};
