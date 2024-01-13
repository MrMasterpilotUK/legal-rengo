<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

      <!-- Page content -->
      <main class="grow">
      
        <section class="relative">
      
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
      
            <!-- Main content -->
            <div>
  
              <!-- Sidebar -->
              <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
      
              <!-- Page container -->
              <div class="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                <div class="pt-24 md:pt-28 pb-8 md:pl-6 lg:pl-12">
      
                  <!-- Page header -->
                  <div class="h-16 flex items-center mb-6">
                    <span class="h4 text text-red-500">Terms of Services</span>
                  </div>
      
                  <article class="flex xl:space-x-12">
      
                    <!-- Main area -->
                    <div class="min-w-0">
      
                      <!-- Mobile hamburger + breadcrumbs -->
                      <div class="md:hidden flex items-center mb-8">
                        <!-- Hamburger button -->
                        <MenuButton :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
                        <!-- Breadcrumbs -->
                        <div class="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
                          <span class="text-slate-600 dark:text-slate-400">Documentation</span>
                          <svg class="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                          </svg>
                          <span class="text-slate-800 font-medium truncate dark:text-slate-200">Fundamentals</span>
                        </div>
                      </div>
      
                      <!-- Article content -->
                      <PageContent />
      
                      <!-- Feedback -->
                      <Feedback />
      
                      <!-- Page navigation -->
                      <PageNavigation :prevArticle="prevArticle" :nextArticle="nextArticle" />
      
                      <!-- Content footer -->
                      <PageFooter />
      
                    </div>
      
                    <!-- Secondary navigation -->
                    <SecondaryNav />
      
                  </article>
      
                </div>
              </div>
      
            </div>
      
          </div>
      
        </section>
      
      </main>

  </div>
</template>

<script>
import { ref } from 'vue'

import Header from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'
import MenuButton from '../partials/MenuButton.vue'
import PageContent from '../partials/DocumentationContent.vue'
import Feedback from '../partials/Feedback.vue'
import PageNavigation from '../partials/PageNavigation.vue'
import PageFooter from '../partials/PageFooter.vue'
import SecondaryNav from '../partials/DocumentationNav.vue'

export default {
  name: 'Documentation',
  components: {
    Header,
    Sidebar,
    MenuButton,
    PageContent,
    Feedback,
    PageNavigation,
    PageFooter,
    SecondaryNav,
  },
  setup() {

    const sidebarOpen = ref(false)

    const prevArticle = ref(null)
    const nextArticle = ref({
      title: 'Privacy Policy',
      link: '/privacy-policy'
    })

    return {
      sidebarOpen,
      prevArticle,
      nextArticle,
    }
  }  
}
</script>