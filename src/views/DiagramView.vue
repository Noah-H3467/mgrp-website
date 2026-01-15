<script setup lang="ts">
import PageHero from "../components/PageHero.vue"
import NewsItem from "../components/NewsItem.vue"

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="analysis">
    <PageHero
      :title="'Diagram'"
      :lead="'To the left: Raspberry Pis over the years'"
      :image-src="BASE + '/images/products.png'"
      image-alt="Raspberry Pi boards"
    />

    <section class="news">
      <h2></h2>
      <div class="news-items">
        <NewsItem
          title="Development Boards (pre-built circuit boards with a controller with the necessary hardware to provide a platform for prototyping, testing, and developing projects.)"
          date="Diagram created: 2 December 2025"
          :image-src="BASE + '/images/development-board-comparison.png'"
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
