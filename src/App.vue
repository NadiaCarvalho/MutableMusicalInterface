<template>
  <nav class="navbar">
    <div class="logo">NC Thesis</div>
    <div class="nav-links">
      <a href="#tonal">Tonal</a>
      <a href="#timbre">Timbre</a>
      <a href="#papers">Publications</a>
    </div>
  </nav>

  <Home />

  <main class="container">
    <section id="tonal">
      <h2>Pillar 1: Tonal Dimensions (VAEs)</h2>
      <div class="grid">
        <ArtifactCard v-for="app in data.apps" :key="app.name" v-bind="app" />
      </div>
    </section>

    <section id="timbre">
      <h2>Pillar 2: Timbre & Gesture (RAVE)</h2>
      <div class="grid">
        <ArtifactCard v-for="ds in data.datasets" :key="ds.name" v-bind="ds" />
      </div>
      <div class="case-study">
        <h3>Case Study: "Echoes of the Unseen"</h3>
        <p>Documenting the transition from fixed tape to dynamic partner.</p>
      </div>
    </section>

    <section id="colabs">
      <h2>Interactive Appendices (Colabs)</h2>
      <ul>
        <li v-for="nb in data.colabs" :key="nb.name">
          {{ nb.name }} - <code>{{ nb.file }}</code>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import Home from './views/Home.vue'
import ArtifactCard from './components/ArtifactCard.vue'
import { researchData as data } from './data.js'
</script>