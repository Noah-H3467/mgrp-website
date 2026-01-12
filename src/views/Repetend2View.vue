<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const piholeData = {
  name: 'Pi-hole',
  description: [
    'A network-wide ad blocker that provides a less common approach to blocking ads and network management.',
    'Pi-hole is software designed to be run on Linux hardware, which includes Raspberry Pi, making it an accessible solution for home network optimization.',
  ],
  links: [
    { text: 'Pi-hole Website', url: 'https://pi-hole.net/' },
    { text: 'GitHub Repository', url: 'https://github.com/pi-hole/pi-hole' },
  ],
}
</script>

<template>
  <main class="repetend-view">
    <PageHero
      :title="piholeData.name"
      :lead="'Network-wide ad blocker for Raspberry Pi'"
      :image-src="BASE + 'images/raspberry-pis.webp'"
      image-alt="Pi-hole network diagram"
    />
    <RepetendCard v-bind="piholeData" />
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}
</style>
