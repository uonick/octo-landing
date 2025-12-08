<template>
  <footer class="mt-20 w-full flex justify-center items-center">
    <div class="w-full max-w-7xl flex justify-center">
      <div class="text-neutral-500 text-center text-xs py-3 px-5 lg:px-0">
        2022-{{ currentYear }} ©<a href="https://uonick.com" class="hover:text-neutral-400 transition-colors">uonick</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { getCurrentYear } from '@/shared/lib/current-year'

const currentYear = getCurrentYear()
</script>

