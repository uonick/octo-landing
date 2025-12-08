<template>
  <section id="faqs" class="py-16 lg:py-24 max-w-6xl mx-auto px-5 md:px-0">
    <div class="text-neutral-400">
      <div class="max-w-xl text-center mx-auto px-5 md:px-0">
        <h2 class="text-neutral-50 text-2xl font-semibold sm:text-3xl tracking-tight">Вопросы и ответы</h2>
        <p class="mt-3 text-sm text-neutral-400">
          Если не нашли подходящий ответ, всегда можно спросить на
          <a href="https://github.com/uonick/octo-workspace/issues" class="text-neutral-300 underline-offset-4 hover:text-neutral-50 hover:underline transition-colors">GitHub</a>
        </p>
      </div>
      <div class="mt-12">
        <div
          class="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3 duration-1000 delay-300 opacity-1"
        >
          <div class="space-y-3 p-6 rounded-lg border border-neutral-800/50 bg-neutral-900/30 transition-all hover:border-neutral-700/50 hover:bg-neutral-900/50">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-50 tracking-tight">
                Где хранятся мои данные?
              </div>
              <p class="mt-3 text-neutral-400 leading-relaxed">
                Ваши данные строго конфиденциальны и хранятся исключительно на вашем устройстве.
                Никакая синхронизация с облаками или другими серверами не осуществляется. Безопасность
                ваших данных — наш приоритет
              </p>
            </div>
          </div>
          <div class="space-y-3 p-6 rounded-lg border border-neutral-800/50 bg-neutral-900/30 transition-all hover:border-neutral-700/50 hover:bg-neutral-900/50">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-50 tracking-tight">
                Приложение собирает данные?
              </div>
              <p class="mt-3 text-neutral-400 leading-relaxed">
                Нет, приложение не собирает ваши данные. Подключение к интернету происходит при запросе
                обновлений раз в 30 минут и при старте приложения. Без интернета, проверку обновлений
                придется выполнять самостоятельно
              </p>
            </div>
          </div>
          <div class="space-y-3 p-6 rounded-lg border border-neutral-800/50 bg-neutral-900/30 transition-all hover:border-neutral-700/50 hover:bg-neutral-900/50">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-50 tracking-tight">
                Почему приложение бесплатное?
              </div>
              <p class="mt-3 text-neutral-400 leading-relaxed">
                Проект начался как решение для одного пользователя, но затем мы решили делиться им
                бесплатно с широкой аудиторией. Наша цель — сделать его доступным для всех
              </p>
            </div>
          </div>
          <div class="space-y-3 p-6 rounded-lg border border-neutral-800/50 bg-neutral-900/30 transition-all hover:border-neutral-700/50 hover:bg-neutral-900/50">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-50 tracking-tight">
                Приложению можно доверять?
              </div>
              <p class="mt-3 text-neutral-400 leading-relaxed">
                Да, каждая версия приложения проходит проверку от Apple (для компьютеров с macOS). Вы
                также можете самостоятельно
                <a href="https://www.virustotal.com/gui/home/upload" class="text-neutral-300 underline-offset-4 hover:text-neutral-50 hover:underline transition-colors" target="_blank"
                  >загрузить ee</a
                >
                для дополнительной проверки. Наша цель - обеспечить вам безопасность и надежность
              </p>
            </div>
          </div>
          <div class="space-y-3 p-6 rounded-lg border border-neutral-800/50 bg-neutral-900/30 transition-all hover:border-neutral-700/50 hover:bg-neutral-900/50">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-50 tracking-tight">
                Планируется-ли сделать его платным?
              </div>
              <p class="mt-3 text-neutral-400 leading-relaxed">
                Нет, такие планы отсутствуют. Приложение изначально создавалось с учетом бесплатного
                доступа для пользователей
              </p>
            </div>
          </div>
          <div class="space-y-3 p-6 rounded-lg border border-neutral-800/50 bg-neutral-900/30 transition-all hover:border-neutral-700/50 hover:bg-neutral-900/50">
            <div class="group">
              <div class="flex items-center justify-between font-semibold text-neutral-50 tracking-tight">
                Для кого подойдет приложение?
              </div>
              <p class="mt-3 text-neutral-400 leading-relaxed">
                Для фрилансеров, которые хотят контролировать свое время и финансы. Приложение поможет
                отслеживать время работы, выставлять счета и акты, хранить заметки и следить за оплатой.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

