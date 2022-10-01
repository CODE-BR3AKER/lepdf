<template>
  <div class="border-t border-gray-200 bg-background z-40 w-full">
    <ul
      class="flex justify-around text-sm font-medium text-center text-gray-500"
    >
      <li class="mr-2">
        <nuxt-link
          to="/"
          class="inline-flex flex-col items-center p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 group"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path></svg
          >Accueil
        </nuxt-link>
      </li>
      <li class="mr-2">
        <nuxt-link
          to="/paths"
          class="inline-flex flex-col items-center p-4 text-main rounded-t-lg border-b-2 border-main active group"
          aria-current="page"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-main"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path></svg
          >Resources
        </nuxt-link>
      </li>
      <li class="mr-2">
        <nuxt-link
          to="/search"
          class="inline-flex flex-col items-center p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 group"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
            ></path></svg
          >Rechercher
        </nuxt-link>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex flex-col items-center p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 group"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.31152 0.75C1.44959 0.75 1.56152 0.861929 1.56152 1V1.55556C1.56152 1.69363 1.44959 1.80556 1.31152 1.80556C1.17345 1.80556 1.06152 1.69363 1.06152 1.55556V1C1.06152 0.861929 1.17345 0.75 1.31152 0.75ZM3.25597 0.75C3.39404 0.75 3.50597 0.861929 3.50597 1V4.33333C3.50597 4.4714 3.39404 4.58333 3.25597 4.58333C3.1179 4.58333 3.00597 4.4714 3.00597 4.33333V1C3.00597 0.861929 3.1179 0.75 3.25597 0.75ZM5.20041 0.75C5.33848 0.75 5.45041 0.861929 5.45041 1V2.11111C5.45041 2.24918 5.33848 2.36111 5.20041 2.36111C5.06234 2.36111 4.95041 2.24918 4.95041 2.11111V1C4.95041 0.861929 5.06234 0.75 5.20041 0.75ZM1.31152 2.41667C1.44959 2.41667 1.56152 2.5286 1.56152 2.66667V6C1.56152 6.13807 1.44959 6.25 1.31152 6.25C1.17345 6.25 1.06152 6.13807 1.06152 6V2.66667C1.06152 2.5286 1.17345 2.41667 1.31152 2.41667ZM5.20041 2.97222C5.33848 2.97222 5.45041 3.08415 5.45041 3.22222V6C5.45041 6.13807 5.33848 6.25 5.20041 6.25C5.06234 6.25 4.95041 6.13807 4.95041 6V3.22222C4.95041 3.08415 5.06234 2.97222 5.20041 2.97222ZM3.25597 5.19444C3.39404 5.19444 3.50597 5.30637 3.50597 5.44444V6C3.50597 6.13807 3.39404 6.25 3.25597 6.25C3.1179 6.25 3.00597 6.13807 3.00597 6V5.44444C3.00597 5.30637 3.1179 5.19444 3.25597 5.19444Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.50586 2.66664C5.50586 2.49789 5.36906 2.36108 5.2003 2.36108C5.03155 2.36108 4.89475 2.49789 4.89475 2.66664C4.89475 2.83539 5.03155 2.9722 5.2003 2.9722C5.36906 2.9722 5.50586 2.83539 5.50586 2.66664ZM5.2003 1.86108C5.6452 1.86108 6.00586 2.22174 6.00586 2.66664C6.00586 3.11154 5.6452 3.4722 5.2003 3.4722C4.75541 3.4722 4.39475 3.11154 4.39475 2.66664C4.39475 2.22174 4.75541 1.86108 5.2003 1.86108Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.56152 4.88893C3.56152 4.72018 3.42472 4.58337 3.25597 4.58337C3.08721 4.58337 2.95041 4.72018 2.95041 4.88893C2.95041 5.05768 3.08721 5.19449 3.25597 5.19449C3.42472 5.19449 3.56152 5.05768 3.56152 4.88893ZM3.25597 4.08337C3.70086 4.08337 4.06152 4.44403 4.06152 4.88893C4.06152 5.33383 3.70086 5.69449 3.25597 5.69449C2.81107 5.69449 2.45041 5.33383 2.45041 4.88893C2.45041 4.44403 2.81107 4.08337 3.25597 4.08337Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.61719 2.1111C1.61719 1.94234 1.48039 1.80554 1.31163 1.80554C1.14288 1.80554 1.00608 1.94234 1.00608 2.1111C1.00608 2.27985 1.14288 2.41665 1.31163 2.41665C1.48039 2.41665 1.61719 2.27985 1.61719 2.1111ZM1.31163 1.30554C1.75653 1.30554 2.11719 1.6662 2.11719 2.1111C2.11719 2.55599 1.75653 2.91665 1.31163 2.91665C0.866736 2.91665 0.506076 2.55599 0.506076 2.1111C0.506076 1.6662 0.866736 1.30554 1.31163 1.30554Z"
              fill="currentColor"
            />
          </svg>
          Réglages
        </a>
      </li>
    </ul>
  </div>
</template>
