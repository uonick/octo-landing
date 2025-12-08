<template>
  <section>
    <div wrapperclassname="max-w-xs h-[13rem] top-12 inset-0" class="relative">
      <div
        class="absolute m-auto blur-[160px] max-w-xs h-[13rem] top-12 inset-0 bg-[linear-gradient(180deg,#7c3aed_0%,rgba(152,103,240,0.984375)_0.01%,rgba(237,78,80,0.2)_100%)]"
      ></div>
      <div class="relative">
        <div class="custom-screen py-28 relative">
          <div class="relative z-10 duration-1000 delay-300 opacity-1">
            <div class="max-w-xl mx-auto text-center px-5 lg:px-0">
              <h2
                class="text-neutral-50 text-2xl font-semibold sm:text-3xl from-sky-200 to-violet-500 bg-gradient-to-br text-transparent bg-clip-text tracking-tight"
              >
                Следи за финансами и временем в одном приложении
              </h2>
              <p class="mt-5 text-sm text-neutral-400">
                Простой интерфейс, никаких оплат или сторонних сервисов – приложение создано для
                удобства без лишних заморочек
              </p>
            </div>
            <div class="flex justify-center font-medium text-white py-5">
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
          <img
            alt="Background pattern"
            loading="lazy"
            width="2880"
            height="1358"
            decoding="async"
            class="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
            src="/img/bg.webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowDownCircleIcon } from '@heroicons/vue/20/solid'
import { getDownloadLinks, getVersion } from '@/shared/lib/download-links'

const version = getVersion()
const downloadLinks = getDownloadLinks()
</script>

