<script setup lang="ts">
import PageHero from "../components/PageHero.vue"
import NewsItem from "../components/NewsItem.vue"

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="analysis">
    <PageHero
      :title="'Analytical Essay'"
      :lead="''"
      :image-src="BASE + '/images/competitors.png'"
      image-alt="Raspberry Pi competitors"
    />

    <section class="news">
      <h2></h2>
      <div class="news-items">
        <NewsItem
          title="In the face of the AI driven RAM shortage is Raspberry Pi dead? An Analysis of Recent and Current Challenges"
          date="Revised: 13 January 2026"
          :embed-src="'https://docs.google.com/document/d/1Ofhg1bHZdxwR49lvPfgSBsAll6H6vKfeMC2Noya1ijM/edit?tab=t.4xv701lkz0k1'"
        >
          <!-- additional body content can go here -->
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
