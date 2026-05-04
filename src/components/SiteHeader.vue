<template>
  <header class="site-header">
    <div class="inner">
      <router-link to="/" class="site-title">Josh McQueen</router-link>

      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/ecology">Ecology</router-link>
        <router-link to="/it">IT</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(244, 239, 230, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(92, 68, 44, 0.1);
}

.inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.site-title {
  font-weight: 700;
  letter-spacing: 0.01em;
}

.nav {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.nav a {
  position: relative;
  color: var(--text-soft);
  padding-bottom: 0.2rem;
}

.nav a.router-link-active {
  color: var(--text);
}

.nav a.router-link-active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.15rem;
  height: 2px;
  border-radius: 2px;
  background: var(--terracotta);
}

@media (max-width: 640px) {
  .inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>