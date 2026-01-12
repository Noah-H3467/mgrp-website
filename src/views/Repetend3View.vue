<script setup lang="ts">
import RepetendCard from '../components/RepetendCard.vue'
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL

const phenotikiData = {
  name: 'Phenotiki',
  description: [
    'An open software and hardware platform for affordable and easy image-based phenotyping of rosette-shaped plants, published in 2017.',
    'Phenotiki was designed to be easy to install and deploy, making advanced plant research accessible to more institutions and researchers.',
    'This project emerged from research papers and represents a significant contribution to plant biology research methodologies.',
  ],
  links: [
    { text: 'Research Paper', url: 'https://onlinelibrary.wiley.com/doi/epdf/10.1111/tpj.13472' },
  ],
}
</script>

<template>
  <main class="repetend-view">
    <PageHero
      :title="phenotikiData.name"
      :lead="'Image-based plant phenotyping platform'"
      :image-src="BASE + 'images/raspberry-pis.webp'"
      image-alt="Phenotiki platform"
    />
    <RepetendCard v-bind="phenotikiData" />
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}
</style>
