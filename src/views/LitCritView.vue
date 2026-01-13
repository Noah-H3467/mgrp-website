<script setup lang="ts">
import PageHero from "../components/PageHero.vue"
import NewsItem from "../components/NewsItem.vue"

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="analysis">
    <PageHero
      :title="'Literary Criticism'"
      :lead="'on a related story'"
      :image-src="BASE + '/images/joe.png'"
      image-alt="A Logic Named Joe book cover"
    />

    <section class="news">
      <h2></h2>
      <div class="news-items">
        <NewsItem
          title="Literary Criticism on 'A Logic Named Joe'"
          date="Originally written: 19 December 2025"
          :embed-src="'https://docs.google.com/document/d/1DoLAX6jWFKhknb3Hsc6b3lcLYkZLesFrsjGprg1fWj8/edit?tab=t.f45u5kf61jp'"
        >
          <!-- additional body content can go here -->
        </NewsItem>
        <h5>TODO: Will include a polished connection between the two topics here.</h5>
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
