<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const issData = {
  name: 'ISS Mimic',
  description: [
    'NASA Engineers make Raspberrry Pi powered ISS Mimic - “Mechatronic Instantiated Model, Interactively Controlled.”',
    'I actually got to see this contraption in demo at the FIRST World Championships',
    'Scaled down version of ISS, mirrors what the real station does in orbit by receiving data.',
    '“1/100th scale for 1/100,000,000th cost”',
    "As of publication, NASA was working towards making a kit of parts for sale for those without a 3d printer or time to print the pieces, with a discount for educators. This project connects to Raspberry Pi's underlying educational and inspiration roots, and if NASA enjoys working with Raspberry Pi products, then perhaps the Raspberry Pi team succeded in their four technical goals for their Raspberry Pi hardware, as discussed in the Expository Essay.",
  ],
  links: [
    { text: 'Raspberry Pi Q&A with NASA engineers', url: 'https://www.raspberrypi.com/news/qa-with-nasa-engineers-behind-raspberry-pi-powered-iss-mimic/' },
  ],
}
</script>

<template>
  <main class="repetend-view">
    <PageHero
      :title="'Repetend 2'"
      :lead="'Scaled-down International Space Station built with Raspberry Pi'"
      :image-src="BASE + '/images/iss-mimic.png'"
      image-alt="Scaled ISS mimic model"
    />
    <RepetendCard v-bind="issData" />
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}
</style>
