<template>
  <section class="space-y-24">
    <Header />
    <Hero />
    <Features />
    <FAQ />
    <CTA />
    <Footer />
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomePage'
})

import Header from '@/widgets/header/ui/header.vue'
import Hero from '@/widgets/hero/ui/hero.vue'
import Features from '@/widgets/features/ui/features.vue'
import CTA from '@/widgets/cta/ui/cta.vue'
import FAQ from '@/widgets/faq/ui/faq.vue'
import Footer from '@/widgets/footer/ui/footer.vue'
</script>

