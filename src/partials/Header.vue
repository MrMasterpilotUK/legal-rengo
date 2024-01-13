<template>
  <header class="fixed w-full z-30">
    <div class="absolute inset-0 bg-white bg-opacity-70 border-b border-slate-200 backdrop-blur -z-10 dark:bg-slate-900 dark:border-slate-800" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="grow">
          <div class="flex items-center">
            <!-- Logo -->
            <router-link to="/" aria-label="Cruip">
              <img src="../images/logo.svg" width="70" height="70" alt="Docs" />
            </router-link>
          </div>
        </div>

        <!-- Desktop navigation -->
        

      </div>
    </div>
  </header>
</template>

<script>
import { ref, watch } from 'vue'
import SearchModal from '../partials/ModalSearch.vue'

export default {
  name: 'Header',
  components: {
    SearchModal,
  },
  setup() {

    const darkMode = ref(localStorage.getItem('dark-mode'))
    const searchModalOpen = ref(false)  

    watch(darkMode, () => {
      localStorage.setItem('dark-mode', darkMode.value)
      if (darkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })

    return {
      darkMode,
      searchModalOpen,
    }
  },
}
</script>