<script setup lang="ts">
import PageHero from "../components/PageHero.vue"
import NewsItem from "../components/NewsItem.vue"

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="analysis">
    <PageHero
      :title="'Guide'"
      :lead="''"
      :image-src="BASE + 'images/raspberry-pis.webp'"
      image-alt="Raspberry Pi"
    />
    <!--TODO: change cover image-->

    <section class="news">
      <h2></h2>
      <div class="news-items">
        <NewsItem
          title="Getting started: Brief guide for setup and a couple of basic uses"
          date="Created: January 2026"
          :embed-src="''"
        >
        </NewsItem>
      </div>
    </section>
  </main>
</template>

<style scoped>
.analysis {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.news {
  margin-top: 4rem;
}

.news h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--color-heading);
}

.news-items {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.news-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 5px;
  margin: 1.5rem auto;
  display: block;
}
</style>
