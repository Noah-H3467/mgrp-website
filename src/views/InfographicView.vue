<script setup lang="ts">
import PageHero from "../components/PageHero.vue"
import NewsItem from "../components/NewsItem.vue"

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="analysis">
    <PageHero
      :title="'Infographic'"
      :lead="''"
      :image-src="BASE + '/images/upton-and-pi.webp'"
      image-alt="Upton and Pi"
    />

    <section class="news">
      <h2></h2>
      <div class="news-items">
        <NewsItem
          title="What is Raspberry Pi? It's a line of computers - and an organization."
          date="Written: November 2025"
          :image-src="BASE + '/images/infographic.png'"
        >
        </NewsItem>
        <iframe width="900" height="600" src="https://www.youtube.com/embed/UCt6d0SCxO4" title="Eben Upton  - The Story of Raspberry Pi (24:07)" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="900" height="600" src="https://www.youtube.com/embed/eZ74x6dVYes" title="Raspberry Pi Explained in 100 Seconds" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>Early prototypes</h3>
        <img :src= "BASE + '/images/raspberry-pi-prototype-1.png'">
        <img :src= "BASE + '/images/raspberry-pi-prototype-2.png'">
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
