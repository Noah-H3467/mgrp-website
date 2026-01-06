<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  date: { type: String, default: '' },
  imageSrc: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  embedSrc: { type: String, default: '' },
  embedType: { type: String, default: '' }
})
</script>

<template>
  <article class="news-item">
    <h3>{{ title }}</h3>
    <div class="date" v-if="date">{{ date }}</div>

    <slot />

    <div v-if="embedSrc && (embedType === 'iframe' || embedSrc.includes('docs.google.com'))">
      <iframe class="gdocs" :src="embedSrc" width="640" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>

    <img v-else-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="news-image" />
  </article>
</template>

<style scoped>
.news-item {
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.news-item h3 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
}

.date {
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.gdocs{
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.news-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 5px;
  margin: 1.5rem auto;
  display: block;
}

@media (max-width: 768px) {
  .news-item {
    padding: 1.5rem;
  }

  .news-item h3 {
    font-size: 1.5rem;
  }
}
</style>
