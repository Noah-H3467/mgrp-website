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
      :image-src="BASE + '/images/raspberry-pi-2.jpg'"
      image-alt="Raspberry Pi"
    />

    <section class="news">
      <div class="news-items">
        <NewsItem
          title="by Noah Haskell"
          date="Written: 15 January 2026"
          :embed-src="'https://docs.google.com/document/d/1ocX_Coeo1Hlmrz0hN6Zm-YbA6D-zScTmhn63iTVs4j0/edit?tab=t.0'"
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
