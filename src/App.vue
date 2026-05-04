<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="page-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
</script>

<style scoped>
.page-content {
  max-width: 1140px;
  margin: 0 auto;
  padding: 1.1rem 1rem 3rem;
}
</style>