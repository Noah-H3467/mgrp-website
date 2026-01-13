<script setup lang="ts">
import PageHero from "../components/PageHero.vue"
import NewsItem from "../components/NewsItem.vue"

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="about">
    <PageHero
      :title="'Expository Essay'"
      :lead="''"
      :image-src="BASE + '/images/raspberry-pie.jpg'"
      image-alt="Raspberry Pi"
    />

    <section class="news">
      <h2></h2>
      <div class="news-items">
        <NewsItem
          title="Introducing Raspberry Pi (not the dessert)"
          date="Written: 25 November 2025"
          :embed-src="'https://docs.google.com/document/d/1bAxy70DAjxiCzWZLW5Y1Zzz7YfVaSP2Fy3rxNgPKyAg/edit?tab=t.0'"
        >
          <!-- additional body content can go here -->
        </NewsItem>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about {
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
