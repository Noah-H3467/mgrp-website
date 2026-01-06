<script setup lang="ts">
  import { RouterLink} from 'vue-router'
  const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="home">
    <section class="intro">
      <div class="intro-content">
        <div class="intro-text">
          <h1>Multigenre Research Project!</h1>
          <h3>
            Raspberry Pi: the Compact, Cheap, Computer
          </h3>
          <h4>by Noah Haskell</h4>
        </div>
        <div class="intro-image">
          <img :src="BASE + 'images/raspberry-pis.webp'" alt="Raspberry Pi" />
        </div>
      </div>
    </section>

    <section class="begin-tour">
      <h2>Begin Tour</h2>
      <div class="view">
        <RouterLink to="/proposal" class="view-link">Proposal</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.intro {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.intro-text {
  padding-right: 2rem;
}

.intro-text h1 {
  font-size: 3.5rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.intro-text h3 {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 400;
}

.intro-cta {
  display: flex;
  gap: 1rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.cta-button:not(.secondary) {
  background: var(--color-heading);
  color: var(--color-background);
}

.cta-button.secondary {
  background: var(--color-background-soft);
  color: var(--color-text);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.intro-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.begin-tour {
  padding: 4rem 0;
}

.begin-tour h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-heading);
}

.view {
  text-align: center;
  margin-top: 3rem;
}

.view-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  color: var(--color-heading);
  text-decoration: none;
  transition: all 0.2s ease;
}

.view-link:hover {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .intro-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .intro-text {
    padding-right: 0;
  }

  .intro-text h1 {
    font-size: 2.5rem;
  }

  .intro-text h3 {
    font-size: 1.25rem;
  }

  .intro-cta {
    justify-content: center;
  }

  .intro-image {
    order: -1;
  }

  .intro-image img {
    max-width: 300px;
  }
}

@media (max-width: 640px) {
  .home {
    padding: 1rem;
  }

  .intro {
    padding: 2rem 0;
  }

  .intro-cta {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
    text-align: center;
  }
}
</style>
