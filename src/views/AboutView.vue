<script setup lang="ts">
import PageHero from "../components/PageHero.vue"
import NewsItem from "../components/NewsItem.vue"

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="about">
    <PageHero
      :title="'Repetend? Expository Essay'"
      :lead="''"
      :image-src="BASE + 'images/raspberry-pis.webp'"
      image-alt="Raspberry Pi"
    />

    <section class="news">
      <h2></h2>
      <div class="news-items">
        <NewsItem
          title="Introducing Raspberry Pi (not the dessert)"
          date="Written: 25 November 2025"
          :embed-src="'https://docs.google.com/document/d/1LoYsTzEkFZ9-lFhUFp8pghRQGFXHimfCNfa1SuQDtsc/edit?tab=t.ukqo33urx1gl'"
        >
          <!-- additional body content can go here -->
          <img :src="BASE + 'images/ADC_2.jpg'" alt="" class="news-image" />
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
