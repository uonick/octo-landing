<template>
  <div class="duration-1000 delay-300 opacity-1">
    <div class="space-y-7 max-w-3xl mx-auto text-center px-5 sm:px-0">
      <h1
        class="text-3xl bg-clip-text text-transparent font-bold mx-auto sm:text-5xl from-slate-100 to-purple-300 bg-gradient-to-br tracking-tight"
      >
        Бесплатное приложение для работы на фрилансе
      </h1>
      <p class="max-w-xl mx-auto text-sm text-neutral-400 px-5 sm:px-0">
        Контролируйте ваше время и проекты, храните заметки, выставляйте счета и акты, следите за
        оплатой офлайн
      </p>
      <div class="flex justify-center font-medium text-white">
        <a
          class="inline-flex items-center justify-center gap-3 px-8 py-3 text-base font-medium text-white bg-purple-600 rounded-md transition-colors hover:bg-purple-500 active:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          :href="downloadLinks.mac"
          ><span>Скачать {{ version }} для macOS</span>
          <ArrowDownCircleIcon class="h-5 w-5" />
        </a>
      </div>
      <div class="flex justify-center text-sm text-neutral-400">
        а так же для&nbsp;<a :href="downloadLinks.windows" class="text-neutral-300 underline-offset-4 hover:text-neutral-50 hover:underline transition-colors">Windows</a
        >&nbsp;и&nbsp;<a :href="downloadLinks.linux" class="text-neutral-300 underline-offset-4 hover:text-neutral-50 hover:underline transition-colors">Linux</a>
      </div>
    </div>
    <div class="relative mt-16 sm:mt-28 flex justify-center items-center">
      <div
        class="absolute mx-auto blur-[160px] max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 from-10% via-75%"
      ></div>
      <div class="relative mx-auto">
        <a href="/img/screenshot.webp" target="_blank">
          <img
            alt="Screenshot"
            loading="lazy"
            width="1200"
            height="691"
            class="rounded-2xl"
            src="@/shared/assets/screenshot.webp"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDownCircleIcon } from '@heroicons/vue/20/solid'
import { getDownloadLinks, getVersion } from '@/shared/lib/download-links'

const version = getVersion()
const downloadLinks = getDownloadLinks()
</script>

