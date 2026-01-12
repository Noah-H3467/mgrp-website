<script setup lang="ts">
import PageHero from '../components/PageHero.vue'

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="repetend-view">
    <PageHero
      title="Repetend 5"
      lead="Coming soon..."
      :image-src="BASE + 'images/raspberry-pis.webp'"
      image-alt="Repetend 5"
    />
    <section class="placeholder">
      <p>Content to be added</p>
    </section>
  </main>
</template>

<style scoped>
.repetend-view {
  min-height: 100vh;
}

.placeholder {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  color: var(--color-text, #666);
  font-size: 1.1rem;
}
</style>
