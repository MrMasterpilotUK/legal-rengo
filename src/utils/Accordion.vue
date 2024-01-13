<template>
  <li>
    <button
      class="flex items-center w-full text-slate-800 font-medium text-left dark:text-slate-200"
      @click.prevent="open = !open"
      :aria-expanded="open"
    >
      <div class="shrink-0 mr-3">
        <svg class="fill-slate-400 dark:fill-slate-500" :class="{ 'rotate-90': open }" xmlns="http://www.w3.org/2000/svg" width="8" height="12">
          <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z" />
        </svg>
      </div>
      <span>{{title}}</span>      
    </button>
    <div
      :class="{ 'hidden': !open }"
    >
      <div class="pl-5 mt-2">
        <slot />
      </div>
    </div>    
  </li>
</template>
<script>
export default {
  name: 'Dropdown',
  props: ['title', 'open'],
}
</script>