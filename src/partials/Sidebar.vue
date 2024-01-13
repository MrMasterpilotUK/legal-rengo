<template>
  <div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-out duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >            
      <div v-show="sidebarOpen" class="md:hidden fixed inset-0 z-10 bg-slate-900 bg-opacity-20 transition-opacity" aria-hidden="true"></div>
    </transition>
  
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <aside
        id="sidebar"
        class="fixed left-0 top-0 bottom-0 w-64 h-screen border-r border-slate-200 md:left-auto md:shrink-0 z-10 md:!opacity-100 md:!block dark:border-slate-800 dark:bg-slate-900"
        ref="sidebar"
        v-show="sidebarOpen"
      >
        <!-- Gradient bg displaying on light layout only -->
        <div class="absolute inset-0 -left-[9999px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
  
        <div class="fixed top-0 bottom-0 w-64 px-4 sm:px-6 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar">
          <div class="pt-24 md:pt-28 pb-8">
  
            <!-- Docs nav -->
            <nav class="md:block">
              <ul class="text-sm">

                
                <!-- 1st level -->
                <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('documentation')">
                  <a
                    class="relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0  before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200"
                    :class="{ 'before:hidden': !currentRoute.fullPath.includes('documentation') }"
                    href="#0"
                    @click.prevent="parentLink.handleClick()"
                  >
                    <router-link to="/terms-service" custom v-slot="{ href, navigate, isExactActive }">
                    <span :href="href" @click="navigate">Terms of Services</span>
                      </router-link>
                  </a>
                </SidebarLinkGroup>


                <!-- 1st level -->
                <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('guides')">
                  <a
                    class="relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0  before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200"
                    :class="{ 'before:hidden': !currentRoute.fullPath.includes('guides') }"
                    href="#0"
                    @click.prevent="parentLink.handleClick()"
                  >
                    <router-link to="/privacy-policy" custom v-slot="{ href, navigate, isExactActive }">
                    <span :href="href" @click="navigate">Privacy Policy</span>
                      </router-link>
                  </a>
                </SidebarLinkGroup>


                <!-- 1st level -->
                <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('cookies')">
                  <a
                    class="relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0  before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200"
                    :class="{ 'before:hidden': !currentRoute.fullPath.includes('cookies') }"
                    href="#0"
                    @click.prevent="parentLink.handleClick()"
                  >
                    <router-link to="/cookies-policy" custom v-slot="{ href, navigate, isExactActive }">
                    <span :href="href" @click="navigate">Cookies Policy</span>
                      </router-link>
                  </a>
                </SidebarLinkGroup>

              </ul>
            </nav>
          </div>
        </div>
  

      
      </aside>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

import SidebarLinkGroup from '../utils/SidebarLinkGroup.vue'
import SidebarLinkSubgroup from '../utils/SidebarLinkSubgroup.vue'

export default {
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    SidebarLinkGroup,
    SidebarLinkSubgroup,
  },
  setup(props, { emit }) {

    const sidebar = ref(null)

    const currentRoute = useRouter().currentRoute.value

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value) return
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target)
      ) return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    } 

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })
    
    return {
      currentRoute,
      sidebar,
    }
  },  
}
</script>