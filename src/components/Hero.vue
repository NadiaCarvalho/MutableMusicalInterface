<template>
  <header class="hero">
    <h1>{{ data.title }}</h1>
    <p>Towards a Co-Creative Electroacoustic Practice</p>
    <div class="actions">
      <a :href="data.githubList" class="btn primary">View GitHub Collection</a>
    </div>
  </header>
</template>

<script setup>
import { researchData as data } from '../data.js'
</script>