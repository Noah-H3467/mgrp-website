<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const plantsData = {
  name: 'Picoplant',
  description: [
    'This project by the Arm Software Developers team sends text message reminders to water a plant based on data from a soil moisture sensor.',
    'Specifically uses Pico with wiring tricks to use the Grow HAT instead of a full size Raspberry Pi to save energy',
    'Their choice to utilize a Pico explains why one particular Raspberry Pi product is more suitable than another (in this case, the microcontroller was more energy efficient).',
    'It is helpful to be aware of the differences between computer boards. The Diagram includes some popular examples.',
  ],
  links: [
    { text: 'Raspberry Pi article', url: 'https://www.raspberrypi.com/news/brilliant-beginner-builds/' },
    { text: 'Hackster project', url: 'https://www.hackster.io/sandeep-mistry/give-a-plant-a-personality-using-the-raspberry-pi-pico-w-23f701' },
  ],
}
</script>

<template>
  <main class="repetend-view">
    <PageHero
      :title="'Repetend 3'"
      :lead="'Plant monitoring with the Raspberry Pi Pico'"
      :image-src="BASE + '/images/pico-plants.jpeg'"
      image-alt="Raspberry Pi Pico with soil sensor"
    />
    <RepetendCard v-bind="plantsData" />
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}
</style>
