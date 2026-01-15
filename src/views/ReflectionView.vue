<script setup lang="ts">
import NewsItem from "../components/NewsItem.vue"

</script>

<template>
  <main   min-width=80% class="about">
      <section class="hero">
        <h1>--------- Self Reflection ---------</h1>
      </section>


    <section class="news">
      <div class="news-items">
        <NewsItem
          title="by Noah Haskell"
          date="Written: 15 January 2026"
          :embed-src="'https://docs.google.com/document/d/1k5mwttJU6TEDrkR5qT8CrQP69XSeZM4TXUapxK4OAyI/edit?tab=t.0'"
        >
        </NewsItem>
      </div>
    </section>
  </main>
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
