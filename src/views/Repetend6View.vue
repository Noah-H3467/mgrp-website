<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const haxophoneData = {
  name: 'Haxophone',
  description: [
    'Small travel digital saxophone under $300 that provides a satisfactory user experience. Features the same fingering as a real saxophone.',
    'The hardware is a HAT (Hardware attached on top) product for a Raspberry Pi single board computer. The software is free to use.',
    'The haxophone isn\'t intended to replace the saxophone, it\'s simply for scenarios where it is inconvenient to bring or set up a real saxophone.',
    'I play the saxophone, and seeing this project makes me more interested in Raspberry Pi because that I could actually use this in my life.',
  ],
  links: [
    { text: 'Hardware Repository', url: 'https://github.com/cardonabits/haxo-hw' },
    { text: 'Software Repository', url: 'https://github.com/cardonabits/haxo-rs' },
    { text: 'Crowd Supply Page', url: 'https://www.crowdsupply.com/cardona-bits/haxophone' },
  ],
}
</script>

<template>
  <main class="repetend-view">
    <PageHero
      :title="'Repetend 6'"
      :lead="'A travel digital saxophone attachment on Raspberry Pi'"
      :image-src="BASE + '/images/haxophone-pcb.jpg'"
      image-alt="Haxophone Printed Circuit Board front and back view"
    />
    <RepetendCard v-bind="haxophoneData" />
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}
</style>
