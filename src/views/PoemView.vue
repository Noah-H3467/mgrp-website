<script setup lang="ts">
import PageHero from "../components/PageHero.vue"

const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="analysis">
    <PageHero
      :title="'Poem'"
      :lead="'Rondeau Redouble'"
      :image-src="BASE + '/images/raspberry-pi-2.jpg'"
      image-alt="Raspberry Pi"
    />

    <section class="poem">
      <h2>Lying Down and By</h2>
      <article class="poem-content">
        <h4>(Revised January 13, 2026)</h4>

        <p>
          Lying down and by came my Raspberry Pi<br />
          On my table for years, since then—<br />
          For all that time I didn't give it a try -<br />
          Now that I wanted to, I didn’t know when
        </p>

        <p>
          In 2006, Eben Upton then<br />
          Saw the state of computing education was awry<br />
          He had an idea, scrambled in 2011—<br />
          Lying down and by came my Raspberry Pi
        </p>

        <p>
          Then sophomore year I learned to code in Py-<br />
          -thon and the keyboard became my fountain pen<br />
          I coded for Robotics, but forgot to try Raspberry Pi—<br />
          On my table for years since then
        </p>

        <p>
          From debugging my code over and over again<br />
          Turns out I like to use my mind's eye<br />
          Still regretting that I didn't stick with it way back when<br />
          For all that time I didn't give it a try
        </p>

        <p>
          At first it was tough, but I learned to fly<br />
          Understanding Java, OOP, and next web dev<br />
          Learned Arduino, and next, Raspberry Pi?<br />
          Now that I wanted to, I didn’t know when—
        </p>

        <p>
          For I was stuck grinding school, teams, apps, past 12 am.<br />
          During Winter Break, I had time! To oversimplify—<br />
          My Pi browsed slowly, I couldn’t update it again!<br />
          So for now, I’ll leave my old Raspberry Pi<br />
          Lying down and by
        </p>
      </article>
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

/* Poem styling */
.poem {
  margin-top: 2.5rem;
}

.poem h2 {
  text-align: center;
  margin-bottom: 1.25rem;
  font-size: 1.75rem;
  color: var(--color-heading);
}

.poem-content {
  max-width: 780px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-body);
}

.poem-content p {
  margin: 1.25rem 0;
  white-space: pre-wrap;
}
</style>
