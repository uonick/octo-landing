<template>
  <section class="py-16 lg:py-24 w-full max-w-6xl mx-auto px-5 md:px-0">
    <div id="features" class="text-neutral-300">
      <div class="max-w-xl mx-auto text-center duration-1000 delay-300 opacity-1 px-5 md:px-0">
        <h2 class="text-neutral-50 text-2xl font-semibold sm:text-3xl tracking-tight">
          Основные возможности приложения
        </h2>
        <p class="mt-3 text-sm text-neutral-400">
          Наш простой и интуитивно понятный интерфейс обеспечивает мгновенный обзор текущего статуса
          работ по каждому клиенту
        </p>
      </div>
      <div class="relative mt-12 duration-1000 delay-500 opacity-1">
        <ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <li
            class="group space-y-4 p-6 rounded-lg border border-neutral-800 bg-neutral-950/50 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/50"
          >
            <div
              class="w-10 h-10 flex items-center justify-center text-neutral-400 transition-colors group-hover:text-neutral-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-base font-semibold text-neutral-50 tracking-tight">Несколько клиентов</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Простой, но информативный интерфейс приложения обеспечивает мгновенное понимание
              статуса работ и финансов по каждому клиенту
            </p>
          </li>
          <li
            class="group space-y-4 p-6 rounded-lg border border-neutral-800 bg-neutral-950/50 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/50"
          >
            <div
              class="w-10 h-10 flex items-center justify-center text-neutral-400 transition-colors group-hover:text-neutral-50"
            >
              <DocumentCheckIcon class="h-5 w-5" />
            </div>
            <h3 class="text-base font-semibold text-neutral-50 tracking-tight">Счета и акты</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Забудьте о поиске шаблонов счетов в интернете или оплате сторонних сервисов.
              Приложение предоставляет удобные инструменты для создания счетов и сэкономит ваше
              время
            </p>
          </li>
          <li
            class="group space-y-4 p-6 rounded-lg border border-neutral-800 bg-neutral-950/50 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/50"
          >
            <div
              class="w-10 h-10 flex items-center justify-center text-neutral-400 transition-colors group-hover:text-neutral-50"
            >
              <ClockIcon class="w-5 h-5" />
            </div>
            <h3 class="text-base font-semibold text-neutral-50 tracking-tight">Время работы</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Эффективно контролируйте время работы, привязывая его к конкретным проектам и клиентам
              с помощью встроенных функций. Управление временем стало более прозрачным и удобным
            </p>
          </li>
          <li
            class="group space-y-4 p-6 rounded-lg border border-neutral-800 bg-neutral-950/50 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/50"
          >
            <div
              class="w-10 h-10 flex items-center justify-center text-neutral-400 transition-colors group-hover:text-neutral-50"
            >
              <CircleStackIcon class="w-5 h-5" />
            </div>
            <h3 class="text-base font-semibold text-neutral-50 tracking-tight">Локальная база данных</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Вся информация строго конфиденциальна и хранится исключительно на вашем устройстве.
              Никакие данные не передаются в сторонние источники. Ваши данные принадлежат только вам
            </p>
          </li>
          <li
            class="group space-y-4 p-6 rounded-lg border border-neutral-800 bg-neutral-950/50 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/50"
          >
            <div
              class="w-10 h-10 flex items-center justify-center text-neutral-400 transition-colors group-hover:text-neutral-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                ></path>
              </svg>
            </div>
            <h3 class="text-base font-semibold text-neutral-50 tracking-tight">Автономность</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              Приложение разработано с учетом возможности работы в автономном режиме, независимо от
              подключения к интернету или облачным сервисам
            </p>
          </li>
          <li
            class="group space-y-4 p-6 rounded-lg border border-neutral-800 bg-neutral-950/50 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/50"
          >
            <div
              class="w-10 h-10 flex items-center justify-center text-neutral-400 transition-colors group-hover:text-neutral-50"
            >
              <BellAlertIcon class="h-5 w-5" />
            </div>
            <h3 class="text-base font-semibold text-neutral-50 tracking-tight">Уведомления</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">
              С приложением вы не упустите оплату счетов клиентами или важную задачу, благодаря
              уведомлениям. Своевременное информирование обеспечивает надежное управление финансами
              и задачами
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BellAlertIcon,
  DocumentCheckIcon,
  CircleStackIcon,
  ClockIcon,
} from '@heroicons/vue/24/outline'
</script>

