<template>
  <div class="sm:flex items-center justify-between py-8 space-y-6 sm:space-y-0 sm:space-x-4">
    <!-- Prev link -->
    <div v-if="prevArticle" class="sm:w-1/2 sm:flex flex-col items-start">
      <div>
        <div class="text-xs font-[650] text-blue-600 uppercase mb-1">Prev</div>
        <div>
          <router-link class="text-slate-800 font-[650] flex items-center dark:text-slate-200" :to="prevArticle.link">
            <svg class="fill-slate-400 shrink-0 mr-2 rotate-180 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
            </svg>
            <span>{{ prevArticle.title }}</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Next link -->
    <div v-if="nextArticle" class="sm:w-1/2 sm:flex flex-col items-end ml-auto">
      <div>
        <div class="text-xs font-[650] text-red-500 uppercase mb-1">Next</div>
        <div>
          <router-link class="text-slate-800 font-[650] flex items-center dark:text-slate-200" :to="nextArticle.link">
            <span>{{ nextArticle.title }}</span>
            <svg class="fill-slate-400 shrink-0 ml-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNavigation',
  props: ['prevArticle', 'nextArticle'],
}
</script>