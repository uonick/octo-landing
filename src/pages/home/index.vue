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

import Header from '@/widgets/header-section/ui/header-section.vue'
import Hero from '@/widgets/hero-section/ui/hero-section.vue'
import Features from '@/widgets/features-section/ui/features-section.vue'
import CTA from '@/widgets/cta-section/ui/cta-section.vue'
import FAQ from '@/widgets/faq-section/ui/faq-section.vue'
import Footer from '@/widgets/footer-section/ui/footer-section.vue'
</script>

