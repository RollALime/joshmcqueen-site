<script setup>
import homeImage from '../assets/images/HomePage.png'
</script>

<template>
  <section class="page">
    <section class="hero-card hero-layout">
      <div class="hero-copy">
        <p class="section-label">Two strands, one purpose</p>
        <h1 class="page-title">Software, data, ecology, and invertebrates.</h1>

        <p class="lead">
          I’m Josh McQueen, an Analyst Developer at the University of Edinburgh.
          This site brings together my professional work in IT and my long-term
          interest in ecology and entomology.
        </p>

        <div class="button-row">
          <router-link to="/ecology" class="button-primary">Explore Ecology</router-link>
          <router-link to="/it" class="button-secondary">Explore IT</router-link>
        </div>
      </div>

      <div class="hero-image-wrap">
        <div class="hero-image">
          <img :src="homeImage" alt="Josh McQueen" />
        </div>
      </div>
    </section>

    <section class="grid-two">
      <router-link to="/ecology" class="feature-card ecology-card">
        <div class="icon-circle">🌿</div>
        <h2 class="card-title">Ecology</h2>
        <p class="card-copy">
          Wildlife biology, fieldwork, invertebrates and volunteering.
        </p>
        <span class="card-link">Explore ecology →</span>
      </router-link>

      <router-link to="/it" class="feature-card it-card">
        <div class="icon-circle">⌨️</div>
        <h2 class="card-title">IT</h2>
        <p class="card-copy">
          Software, data, systems and technical case studies.
        </p>
        <span class="card-link">Explore IT →</span>
      </router-link>
    </section>
  </section>
</template>

<style scoped>
.hero-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.5rem;
  padding: 1.6rem;
  overflow: hidden;
}

.feature-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  min-height: 180px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.hero-copy {
  padding: 0.3rem;
  align-self: center;
}

.hero-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 32px;
  box-shadow: 0 14px 30px rgba(89, 99, 63, 0.18);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 34px rgba(70, 45, 25, 0.12);
}

.ecology-card {
  background: linear-gradient(180deg, rgba(111, 122, 79, 0.95), rgba(91, 99, 63, 0.95));
  color: white;
}

.ecology-card .card-copy,
.it-card .card-copy {
  color: rgba(255, 255, 255, 0.82);
}

.ecology-card .card-title,
.it-card .card-title,
.ecology-card .card-link,
.it-card .card-link {
  color: white;
}

.it-card {
  background: linear-gradient(180deg, rgba(184, 111, 61, 0.95), rgba(151, 89, 47, 0.95));
  color: white;
}

.icon-circle {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.18);
  font-size: 1.2rem;
}

.card-link {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 700;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.4rem;
}

@media (max-width: 860px) {
  .hero-layout {
    grid-template-columns: 1fr;
  }

  .hero-image {
    max-width: 300px;
  }
}
</style>