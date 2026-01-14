// ...existing code...
<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const hearWorldData = {
  name: 'Hear The World',
  description: [
    'Swiss software engineer and cloud architecture specialist Marco Gerber developed a ‘point-and-shoot’ device that provides a text and audio description of the user’s surroundings.',
    'His “Hear The World”device is based on the Raspberry Pi Zero 2 W.',
    'It is the AI in the project that can describe the environment, which can help people with visual or hearing impairments. Such clever projects showcase how people can utilize AI for the betterment of the world, a counterexample of sorts to the short story “A Logic Named Joe”.',
  ],
  links: [
    { text: 'Raspberry Pi article', url: 'https://www.raspberrypi.com/news/ai-enabled-hear-the-world-device-describes-its-surroundings/' },
  ],
}
</script>

<template>
  <main class="repetend-view">
    <PageHero
      :title="'Repetend 5'"
      :lead="'AI device that describes surroundings (assistive tech)'"
      :image-src="BASE + '/images/hear-the-world.jpeg'"
      image-alt="Hear The World device"
    />
    <RepetendCard v-bind="hearWorldData" />
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}
</style>
