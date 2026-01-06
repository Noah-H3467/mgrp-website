<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  imageSrc: { type: String, default: '' },
  imageAlt: { type: String, default: '' }
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-image" v-if="imageSrc">
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
      <div class="hero-text">
        <h1>{{ title }}</h1>
        <p class="lead" v-if="lead">{{ lead }}</p>
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 0;
  background: var(--color-background-soft);
  border-radius: 5px;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 3rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding-left: 2rem;
}

.hero-text {
  padding-right: 4rem;
}

.lead {
  font-size: 1.25rem;
  color: var(--color-text);
  max-width: 800px;
  margin: 0 auto 2rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
}
</style>
