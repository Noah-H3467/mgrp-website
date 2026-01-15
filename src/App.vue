<script setup lang="ts">
import { ref } from 'vue' // Line 26: ref creates a reactive reference for primitive / object state
import { RouterLink, RouterView } from 'vue-router' // RouterLink/RouterView provide route navigation & outlet

// Section type describes each "repetend" row and optional child link
type Section = {
  id: number
  title: string
  child?: { label: string; to: string }
}

// sections list drives the sidebar rows and their sub-links
const sections: Section[] = [
  { id: 1, title: 'Repetend 1', child: { label: 'Infographic', to: '/infographic' } },
  { id: 2, title: 'Repetend 2', child: { label: 'Expository Essay', to: '/about' } },
  { id: 3, title: 'Repetend 3', child: { label: 'Diagram', to: '/diagram' } },
  { id: 4, title: 'Repetend 4', child: { label: 'Analytical Essay', to: '/analysis' } },
  { id: 5, title: 'Repetend 5', child: { label: 'Short Story Lit Crit', to: '/lit-crit' } },
  { id: 6, title: 'Repetend 6', child: { label: 'Poem', to: '/poem' } },
  { id: 7, title: 'Repetend 7', child: { label: 'Lesson', to: '/tutorial' } },
  { id: 8, title: 'Repetend 8', child: { label: 'Glossary', to: '/glossary' } }
]

// open tracks which repetend rows are expanded (true) or collapsed (false)
const open = ref<Record<number, boolean>>({})
sections.forEach(s => (open.value[s.id] = false))

/**
 * Toggle expansion for a repetend row.
 * Keeps logic simple so that keyboard + screen reader use works via aria-expanded.
 */
function toggle(id: number) {
  open.value[id] = !open.value[id]
}
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar" aria-label="Primary navigation">
      <div class="sidebar-inner">
        <nav class="navbar" aria-label="Site sections">
          <div class="nav-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/proposal">Dear Reader</RouterLink>

            <ul class="section-list" role="list">
              <li v-for="s in sections" :key="s.id" class="section-item">
                <div class="repetend-row">
                  <button
                    class="toggle-btn"
                    :aria-expanded="String(!!open[s.id])"
                    :aria-controls="`sub-${s.id}`"
                    @click="toggle(s.id)"
                    :title="open[s.id] ? 'Collapse' : 'Expand'"
                  >
                    <span class="chev" :class="{ open: open[s.id] }" aria-hidden="true">▾</span>
                  </button>

                  <RouterLink :to="`/repetend/${s.id}`" class="repetend-link">{{ s.title }}</RouterLink>
                </div>

                <div
                  v-if="s.child"
                  :id="`sub-${s.id}`"
                  class="sub-links"
                  v-show="open[s.id]"
                  role="group"
                  :aria-hidden="!open[s.id]"
                >
                  <RouterLink :to="s.child.to" class="sub-link">{{ s.child.label }}</RouterLink>
                </div>
              </li>
            </ul>

            <RouterLink to="/reflection">Self Reflection</RouterLink>
            <RouterLink to="/references">References</RouterLink>
          </div>
        </nav>
      </div>
    </aside>

    <main class="content">
      <div class="wrapper">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background: var(--color-background);
}

/* Sidebar
   Make the sidebar itself scrollable when content exceeds viewport height.
   Keeping height:100vh and adding overflow-y:auto ensures the list (and expanded sub-links)
   can be scrolled independently of the main content.
*/
.sidebar {
  width: 240px;
  border-right: 1px solid var(--color-border);
  z-index: 100;
  position: sticky;
  top: 0;
  height: 100vh;
  background: var(--color-background);

  /* This enables vertical scrolling within the element only if the content exceeds the element's height. If the content fits, no scrollbar appears. */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* provides native-feeling, momentum-based scrolling on iOS devices and other WebKit-based browsersS */
  overscroll-behavior: contain; /* avoid scrolling the main page when sidebar reaches end */
}

.sidebar-inner {
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

/* Content area */
.content {
  flex: 1;
  min-width: 0;
}

.wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

/* Nav */
.navbar {
  display: flex;
  flex-direction: column;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* section list / repetend rows */
.section-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.section-item {
  display: block;
}

.repetend-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* toggle button */
.toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  transition: transform 0.15s ease;
}

.chev {
  font-size: 0.85rem;
  display: inline-block;
  transform: rotate(-90deg);
  transition: transform 0.18s ease;
  color: var(--color-text);
}

.chev.open {
  transform: rotate(0deg);
  color: var(--color-heading);
}

/* links */
nav a,
.repetend-link,
.sub-link {
  color: var(--color-text);
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 0.25rem;
  border-left: 4px solid transparent;
  transition: all 0.18s ease;
  display: inline-block;
}

.repetend-link {
  flex: 1;
}

.sub-links {
  margin-left: 1.6rem;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

nav a:hover,
nav a.router-link-active,
.repetend-link:hover,
.repetend-link.router-link-active,
.sub-link:hover,
.sub-link.router-link-active {
  color: var(--color-heading);
  border-left-color: var(--color-heading);
  background: rgba(0, 0, 0, 0.02);
}

/* Responsive: collapse to top bar on small screens */
@media (max-width: 768px) {
  .app-layout {
    flex-direction: column;
  }

  .sidebar {
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
    overflow-y: visible; /* allow normal page scroll on small screens */
  }

  .sidebar-inner {
    padding: 0.5rem 1rem;
  }

  .nav-links {
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0.25rem 0;
    align-items: center;
  }

  .section-list {
    flex-direction: row;
    gap: 0.75rem;
  }

  .repetend-row {
    gap: 0.25rem;
  }

  .toggle-btn {
    display: none;
  }

  .sub-links {
    display: none !important;
  }

  nav a {
    border-left: none;
    border-bottom: 2px solid transparent;
    padding: 0.5rem 0.25rem;
  }

  nav a:hover,
  nav a.router-link-active {
    border-bottom-color: var(--color-heading);
    background: transparent;
  }

  .wrapper {
    padding: 1rem;
  }
}
</style>
