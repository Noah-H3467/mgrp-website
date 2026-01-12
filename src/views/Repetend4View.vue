<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const xrpData = {
  name: 'XRP - Experiential Robotics Platform',
  description: [
    'The XRP is a compact, cost-effective robotic platform designed to provide students, educators, and teams with an authentic and rigorous introduction to robotics programming.',
    'Built around the Raspberry Pi Pico W microcontroller, XRP delivers an experiential learning experience that is both comprehensive and accessible.',
    'Developed through collaboration between Worcester Polytechnic Institute (WPI) and DEKA Research & Development Corp., XRP aims to level the STEM playing field globally and create a future generation of STEM innovators and technology leaders.',
  ],
  links: [
    { text: 'Experiential Robotics Organization', url: 'https://experientialrobotics.org/' },
  ],
}
</script>

<template>
  <main class="repetend-view">
    <PageHero
      :title="xrpData.name"
      :lead="'Compact robotics platform for STEM education'"
      :image-src="BASE + 'images/raspberry-pis.webp'"
      image-alt="XRP robot"
    />
    <RepetendCard v-bind="xrpData" />
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}
</style>
