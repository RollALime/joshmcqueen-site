<template>
  <section class="page">
    <section class="hero-card it-hero">
      <div class="hero-main">
        <p class="section-label">IT</p>
        <h1 class="page-title">IT</h1>
        <p class="lead">
          Analyst Developer with experience across higher education systems,
          data, service delivery and software.
        </p>
      </div>

      <div class="hero-panel">
        <div class="code-window">
          <div class="dots">
            <span></span><span></span><span></span>
          </div>
          <pre>// Case studies coming soon
const strengths = [
  'SQL',
  'JavaScript',
  'Vue.js',
  'Systems analysis',
  'Service delivery'
]</pre>
        </div>
      </div>
    </section>

    <section class="content-card intro-card">
      <h2 class="card-title">Case studies</h2>
      <p class="card-copy">
        Real examples of problems solved and value delivered.
      </p>
    </section>

    <section class="case-list">
      <article class="content-card case-card">
        <div>
          <div class="pill">Placeholder</div>
          <h3>Debugging and resolving an issue in a Vue application</h3>
          <p>
            Troubleshooting complex routing and environment issues in a live
            system.
          </p>
        </div>
        <button class="mini-button" type="button">View case study →</button>
      </article>

      <article class="content-card case-card">
        <div>
          <div class="pill">Placeholder</div>
          <h3>Implementing changes in a legacy system under constraints</h3>
          <p>
            Delivering change safely within a complex existing ecosystem.
          </p>
        </div>
        <button class="mini-button" type="button">View case study →</button>
      </article>

      <article class="content-card case-card">
        <div>
          <div class="pill">Placeholder</div>
          <h3>Collaborating across teams to resolve a production issue</h3>
          <p>
            Coordinating with colleagues and stakeholders to identify and fix a
            problem quickly.
          </p>
        </div>
        <button class="mini-button" type="button">View case study →</button>
      </article>
    </section>

    <section class="banner-strip">
      Clear thinking. Practical systems. Calm delivery.
    </section>
  </section>
</template>

<style scoped>
.it-hero {
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 1.2rem;
  padding: 1.5rem;
}

.hero-main {
  align-self: center;
}

.hero-panel {
  display: flex;
  align-items: center;
}

.code-window {
  width: 100%;
  min-height: 250px;
  padding: 1rem;
  border-radius: 24px;
  color: #e9efe8;
  background:
    radial-gradient(circle at top right, rgba(114, 133, 204, 0.22), transparent 28%),
    linear-gradient(180deg, #2e241d, #211913);
  box-shadow: 0 18px 35px rgba(40, 25, 15, 0.2);
}

.dots {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
}

pre {
  margin: 0;
  white-space: pre-wrap;
  font-family: "Courier New", monospace;
  line-height: 1.6;
  font-size: 0.95rem;
}

.intro-card {
  padding: 1.3rem 1.4rem;
}

.case-list {
  display: grid;
  gap: 1rem;
}

.case-card {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.35rem;
  align-items: center;
}

.case-card h3 {
  margin: 0.75rem 0 0.45rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.4rem;
}

.case-card p {
  margin: 0;
  color: var(--text-soft);
}

.mini-button {
  flex-shrink: 0;
  min-height: 42px;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(184, 111, 61, 0.35);
  border-radius: 12px;
  background: rgba(255,255,255,0.55);
  color: var(--terracotta-dark);
  font-weight: 700;
}

@media (max-width: 860px) {
  .it-hero,
  .case-card {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: flex-start;
  }

  .mini-button {
    width: 100%;
  }
}
</style>