<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const astroPiData = {
  name: 'Astro Pi',
  description: [
    'TODO: Describe what the Astro Pi hardware is',
    'Then the scope of the project',
    'Young people get to send python code to one of two Astro Pis in the ISS.',
    'It is one of the cool, educational STEM programs that the Raspberry Pi Foundation supports. Check out the infographic for more',
  ],
  links: [
    { text: 'The European Space Agency: What is an Astro Pi?', url: 'https://www.esa.int/Education/AstroPI/What_is_an_Astro_Pi' },
    { text: 'Raspberry Pi Blog: Astro Pi - 10 years', url: 'https://www.raspberrypi.org/blog/astro-pi-is-10-a-decade-of-your-code-in-space/' },
  ],
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
