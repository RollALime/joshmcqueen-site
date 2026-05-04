<script setup>
import ecologyImage from '../assets/images/EcologyPage1.png'
</script>

<template>
  <section class="page">
    <section class="hero-card ecology-hero">
      <div class="hero-main">
        <p class="section-label">Ecology</p>
        <h1 class="page-title">Understanding and improving complex systems — digital and natural.</h1>
        <p class="lead">
          I have an academic background in life sciences, wildlife biology and conservation, with a long-standing interest in entomology, freshwater ecology and biodiversity.
        </p>

        <div class="button-row">
          <a class="button-primary" href="/Josh-McQueen-Ecology-CV.pdf" download>
            Download Ecology CV
          </a>
        </div>
      </div>

      <div class="hero-art">
        <div class="ecology-hero-image">
          <img :src="ecologyImage" alt="Josh McQueen observing a dragonfly by the water" />
        </div>
      </div>
    </section>

    <section class="content-card wide-card">
      <h2 class="card-title">Background</h2>
      <p class="card-copy">
        I studied Molecular Genetics at the University of Dundee, including an honours project focused on Hymenoptera phylogeny using COI genetic markers. I later completed an MSc in Wildlife Biology & Conservation at Edinburgh Napier University, where my research investigated how riparian shading influenced the growth rates of riverflies.
      </p>
    </section>

    <section class="content-card wide-card">
      <h2 class="card-title">Field experience</h2>
      <p class="card-copy">
        My field experience comes primarily from academic study and project work, using a range of ecological sampling methods.
      </p>

      <div class="accordion-list">
        <details class="accordion-item">
          <summary>Sweep netting</summary>
          <p>
            Used during undergraduate and postgraduate fieldwork to collect terrestrial invertebrates from vegetation. This included searching for Hymenoptera specimens for potential genetic analysis.
          </p>
        </details>

        <details class="accordion-item">
          <summary>Freshwater invertebrate sampling</summary>
          <p>
            Used during my MSc research project on riverflies, including sampling aquatic larvae from freshwater environments to investigate ecological patterns linked to riparian shading.
          </p>
        </details>

        <details class="accordion-item">
          <summary>Light trapping</summary>
          <p>
            Used white sheet and light-based trapping methods to observe and collect nocturnal Lepidoptera during fieldwork training.
          </p>
        </details>

        <details class="accordion-item">
          <summary>Pitfall trapping</summary>
          <p>
            Used to sample ground-dwelling invertebrates as part of ecological field methods training.
          </p>
        </details>

        <details class="accordion-item">
          <summary>Bush beating</summary>
          <p>
            Used beating sheets to collect invertebrates from shrubs and vegetation for sorting and observation.
          </p>
        </details>
      </div>
    </section>

    <section class="grid-two">
      <article class="content-card">
        <h2 class="card-title">Technical skills</h2>
        <p class="card-copy">
          SQL, data analysis, reporting, ETL, JavaScript, Vue.js and Python familiarity, with an interest in applying technical skills to ecological data and recording.
        </p>
      </article>

      <article class="content-card">
        <h2 class="card-title">Interests</h2>
        <p class="card-copy">
          Entomology, freshwater ecology, species interactions, parasitism, symbiosis and plant–insect relationships.
        </p>
      </article>
    </section>

    <section class="content-card wide-card">
      <h2 class="card-title">What I’m looking for</h2>
      <p class="card-copy">
        I am interested in volunteering opportunities involving field recording, invertebrate identification, ecological surveys, practical conservation and ecological data support. I am particularly interested in opportunities where my technical and analytical background can complement field-based ecological work.
      </p>
    </section>

    <section class="content-card wide-card">
      <h2 class="card-title">Field observations</h2>
      <p class="card-copy">
        I plan to use this site to document selected ecological observations, including an observation from Sri Lanka involving an amphibian and a parasitic beetle larva. This section will grow over time.
      </p>
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
  max-width: 400px;
  aspect-ratio: 4 / 5;
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

.wide-card {
  max-width: none;
}

.accordion-list {
  display: grid;
  gap: 0.75rem;
  margin-top: 1rem;
}

.accordion-item {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.45);
  overflow: hidden;
}

.accordion-item summary {
  cursor: pointer;
  padding: 1rem;
  font-weight: 700;
  color: var(--brown);
}

.accordion-item p {
  margin: 0;
  padding: 0 1rem 1rem;
  color: var(--text-soft);
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