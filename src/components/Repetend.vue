<script setup lang="ts">
  import { computed } from 'vue'

  interface Link {
    text: string
    url: string
  }

  interface RepetendCardProps {
    // Name of the repetend (e.g., "Haxophone")
    name: string
    // Main description or array of descriptions
    description: string | string[]
    // Array of links with text and URL
    links?: Link[]
    // Image source URL (optional)
    imageSrc?: string
    // Alt text for image
    imageAlt?: string
  }

  const props = withDefaults(defineProps<RepetendCardProps>(), {
    links: () => [],
    imageSrc: undefined,
    imageAlt: 'Repetend image',
  })

  // Ensure description is always an array for consistent rendering
  const descriptions = computed(() => {
    return Array.isArray(props.description) ? props.description : [props.description]
  })
</script>

<template>
  <article class="repetend-card">
    <!-- Header with name -->
    <header class="repetend-header">
      <h1 class="repetend-name">{{ name }}</h1>
    </header>

    <!-- Image section (if provided) -->
    <section v-if="imageSrc" class="repetend-image-section">
      <img :src="imageSrc" :alt="imageAlt" class="repetend-image" />
    </section>

    <!-- Description section -->
    <section class="repetend-content">
      <div v-for="(desc, index) in descriptions" :key="index" class="description-block">
        <p class="description-text">{{ desc }}</p>
      </div>

      <!-- Links section (if provided) -->
      <nav v-if="links.length > 0" class="repetend-links">
        <h2 class="links-heading">Resources</h2>
        <ul class="links-list">
          <li v-for="(link, index) in links" :key="index" class="link-item">
            <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link">
              {{ link.text }}
              <span class="external-icon">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </article>
</template>

<style scoped>
.repetend-card {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.repetend-header {
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-border, #e0e0e0);
  padding-bottom: 1.5rem;
}

.repetend-name {
  font-size: 2.5rem;
  margin: 0;
  color: var(--color-heading, #1a1a1a);
  font-weight: 700;
}

.repetend-image-section {
  margin: 2rem 0;
  text-align: center;
}

.repetend-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 400px;
}

.repetend-content {
  margin-top: 2rem;
  line-height: 1.7;
}

.description-block {
  margin-bottom: 1.5rem;
}

.description-text {
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text, #333);
}

.repetend-links {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border, #e0e0e0);
}

.links-heading {
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  color: var(--color-heading, #1a1a1a);
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link-item {
  margin: 0;
}

.link {
  color: var(--color-link, #0066cc);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--color-link-hover, #0052a3);
  text-decoration: underline;
}

.external-icon {
  font-size: 0.9em;
  opacity: 0.7;
}

/* Responsive design */
@media (max-width: 768px) {
  .repetend-card {
    padding: 1.5rem;
  }

  .repetend-name {
    font-size: 1.8rem;
  }

  .description-text {
    font-size: 1rem;
  }

  .repetend-image {
    max-height: 300px;
  }
}
</style>

