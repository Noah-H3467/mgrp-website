<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const astroPiData = {
  name: 'Astro Pi, a collaboration between the ESA and the Raspberry Pi Foundation',
  description: '',
  links: [
    { text: 'The European Space Agency: What is an Astro Pi?', url: 'https://www.esa.int/Education/AstroPI/What_is_an_Astro_Pi' },
    { text: 'Raspberry Pi Blog: Astro Pi - 10 years', url: 'https://www.raspberrypi.org/blog/astro-pi-is-10-a-decade-of-your-code-in-space/' },
  ],
  imageSrc: BASE + '/images/what-astro-pi-is.jpg',
  imageAlt: 'A small computer, enclosed in a flight case, with many different sensors that can be used to collect data. Each Astro Pi has a camera module (visible or infared).',
}
</script>

<template>
  <main class="repetend-view">
    <PageHero
      :title="'Repetend 1'"
      :lead="'Astro Pi — student code in space'"
      :image-src="BASE + '/images/astro-pi.webp'"
      image-alt="Astro Pi hardware"
    />
    <RepetendCard v-bind="astroPiData" />
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}
</style>
