<template>
  <body
    class="
      bg-white
      border-gray-200
      px-2
      sm:px-4
      py-2.5
      rounded
      dark:bg-gray-900
    "
  >
    <nav
      class="
        bg-white
        border-gray-200
        px-2
        sm:px-4
        py-2.5
        rounded
        dark:bg-gray-900
      "
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="https://kanteen.com" class="flex items-center">
          <img
            src="https://i.ibb.co/99jTRzj/Kanteen-logo-3.png"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >Kanteen</span
          >
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="
              flex flex-col
              p-4
              mt-4
              border border-gray-100
              rounded-lg
              bg-gray-50
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-white
              dark:bg-gray-800
              md:dark:bg-gray-900
              dark:border-gray-700
            "
          >
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-white
                  bg-blue-700
                  rounded
                  md:bg-transparent md:text-blue-700 md:p-0
                  dark:text-white
                "
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                "
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                "
                >Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                "
                >Pricing</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                "
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="grid">
      <div class="justify-content-center">
        <h1 class="p-4 mt-9 text-6xl text-white">
          This page are made from Vue + Tailwind
        </h1>
        <div class="p-4">
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <div id="card" class="flex">
        <div
          class="
            max-w-sm
            bg-white
            border border-gray-200
            rounded-lg
            shadow
            dark:bg-gray-800 dark:border-gray-700
            m-6
          "
          v-for="item in items"
          v-bind:key="item"
        >
          <a href="#" class="bg-purple-300">
            <img class="rounded-t-lg object-cover" v-bind:src="item.foto" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="
                  mb-2
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  dark:text-white
                "
              >
                {{ item.message }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="
                inline-flex
                items-center
                px-3
                py-2
                text-sm
                font-medium
                text-center text-white
                bg-blue-700
                rounded-lg
                hover:bg-blue-800
                focus:ring-4 focus:outline-none focus:ring-blue-300
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
export default {
  name: "Home",

  data() {
    return {
      title: "Fahmi affan",
      items: [
        {
          foto:
            "https://media.istockphoto.com/id/478470378/id/vektor/koleksi-gambar-sketsa-makanan.jpg?s=612x612&w=is&k=20&c=u_fLi6JFk-_vd_0fABfco9HJlUGdCWyxC5l-51krBmQ=",
          message: "Chitato",
        },
        {
          foto:
            "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1608983819/iwtinvrdf1iwfzc7y6sr.jpg",
          message: "Soto",
        },
      ],
    };
  },
};
</script>

<style>
body {
  height: max-content;
}
</style>
