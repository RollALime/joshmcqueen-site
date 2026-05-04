<script setup>
import ecologyImage from '../assets/images/EcologyPage1.png'
</script>

<template>
  <section class="page">
    <section class="hero-card ecology-hero">
      <div class="hero-main">
        <p class="section-label">Ecology</p>
        <h1 class="page-title">Ecology</h1>
        <p class="lead">
          Academic background, field experience and long-standing interests in
          ecology, entomology and biodiversity.
        </p>
      </div>

      <div class="hero-art">
        <div class="ecology-hero-image">
          <img :src="ecologyImage" alt="Josh McQueen observing a dragonfly by the water" />
        </div>
      </div>
    </section>

    <section class="grid-two">
      <article class="content-card">
        <h2 class="card-title">Background</h2>
        <p class="card-copy">
          BSc (Hons) Molecular Genetics, University of Dundee. MSc Wildlife
          Biology & Conservation, Edinburgh Napier University.
        </p>
      </article>

      <article class="content-card">
        <h2 class="card-title">Field experience</h2>
        <p class="card-copy">
          Sweep netting, freshwater invertebrate sampling, light trapping,
          pitfall trapping, bush beating and related survey techniques.
        </p>
      </article>

      <article class="content-card">
        <h2 class="card-title">Technical skills</h2>
        <p class="card-copy">
          SQL, data analysis, reporting, ETL, JavaScript, Vue.js and Python
          familiarity.
        </p>
      </article>

      <article class="content-card">
        <h2 class="card-title">Interests</h2>
        <p class="card-copy">
          Entomology, freshwater ecology, species interactions, parasitism,
          symbiosis and plant-insect relationships.
        </p>
      </article>
    </section>

    <section class="banner-strip">
      Bringing technical skills and a passion for nature together.
    </section>
  </section>
</template>

<style scoped>
.ecology-hero {
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 1.4rem;
  padding: 1.5rem;
}

.hero-main {
  align-self: center;
}

.hero-art {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ecology-hero-image {
  width: 100%;
  max-width: 430px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 28px;
  box-shadow: 0 14px 30px rgba(70, 45, 25, 0.16);
}

.ecology-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-card {
  padding: 1.4rem;
}

@media (max-width: 860px) {
  .ecology-hero {
    grid-template-columns: 1fr;
  }

  .ecology-hero-image {
    max-width: 320px;
  }
}
</style>