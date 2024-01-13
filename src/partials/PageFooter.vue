<template>
  <footer class="border-t border-slate-200 pt-8 dark:border-slate-800">
    <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div class="mb-4 md:mb-0">
        <div class="shrink-0 flex flex-col md:flex-row items-center">
          <!-- Logo -->
          <a class="inline-flex mb-2 md:mb-0" href="index.html" aria-label="Cruip">
            <img src="../images/logo.svg" width="70" height="32" alt="Docs" />
          </a>
          <div class="text-sm text-slate-500 ml-4">Copyright © Rengo<span class="md:hidden lg:inline"> 2024 All rights reserved.</span></div>
        </div>
      </div>
      <!-- Social links -->
      <ul class="inline-flex space-x-2">
        <li>
          <a class="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="https://twitter.com/StatusRengo" aria-label="Twitter">
            <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>