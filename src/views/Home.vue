<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans">
    <nav class="p-6 flex justify-between items-center border-b">
      <span class="font-bold tracking-tighter">NC / RESEARCH</span>
      <div class="space-x-6 text-sm font-medium">
        <a href="#software" class="hover:text-indigo-600">Software</a>
        <a href="#papers" class="hover:text-indigo-600">Publications</a>
        <a href="#resources" class="hover:text-indigo-600">Data</a>
      </div>
    </nav>

    <header class="max-w-4xl mx-auto py-24 px-6 text-center">
      <h1 class="text-5xl font-extrabold mb-6 leading-tight">{{ data.title }}</h1>
      <p class="text-xl text-slate-500 mb-10">{{ data.subtitle }}</p>
      <div class="flex justify-center gap-4">
        <a :href="data.githubCollection"
          class="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">GitHub Collection</a>
        <a href="#papers" class="border border-slate-300 px-8 py-3 rounded-full hover:bg-slate-50 transition">Read
          Papers</a>
      </div>
    </header>

    <section id="papers" class="bg-slate-50 py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-400">Publications</h2>
        <div class="space-y-4">
          <router-link v-for="paper in data.publications" :key="paper.id" :to="'/paper/' + paper.id"
            class="flex items-center justify-between p-6 bg-white rounded-lg border border-transparent hover:border-indigo-200 shadow-sm transition">
            <div>
              <span class="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{{ paper.pillar }}</span>
              <h3 class="text-lg font-bold mt-1">{{ paper.title }}</h3>
              <p class="text-slate-400 text-sm">{{ paper.venue }}</p>
            </div>
            <span class="text-slate-300">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <section id="artifacts" class="max-w-6xl mx-auto px-6 py-20">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold mb-4">Research Artifacts</h2>
        <p class="text-slate-500 max-w-2xl mx-auto">
          The practical realization of the "Mutable Interface" framework through interactive systems,
          high-dimensional datasets, and verifiable computational notebooks.
        </p>
      </div>

      <ArtifactGrid />
    </section>

    <!--<section id="software" class="max-w-6xl mx-auto py-20 px-6">
      <h2 class="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-400">Software Systems</h2>
      <div class="grid md:grid-cols-3 gap-10">
        <div v-for="app in data.apps" :key="app.id" class="group">
          <div class="h-1 bg-slate-100 mb-4 group-hover:bg-indigo-500 transition-colors"></div>
          <h3 class="text-xl font-bold mb-2">{{ app.name }}</h3>
          <p class="text-slate-600 text-sm mb-6 leading-relaxed">{{ app.description }}</p>
          <div class="flex gap-4 text-xs font-bold uppercase tracking-wider">
            <a v-if="app.url" :href="app.url" class="text-indigo-600">Launch Project</a>
            <a :href="app.repo" class="text-slate-400 hover:text-slate-600">Source Code</a>
          </div>
        </div>
      </div>
    </section>-->

    <!--<section id="resources" class="max-w-6xl mx-auto py-20 px-6">
      <h2 class="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-400">Datasets & Notebooks</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="ds in data.datasets" :key="ds.name" class="p-6 border rounded-lg hover:bg-slate-50 transition">
          <h3 class="font-bold">{{ ds.name }}</h3>
          <p class="text-sm text-slate-500 mb-4">{{ ds.description }}</p>
          <span class="text-[10px] font-mono bg-slate-100 p-1 rounded">DOI: {{ ds.doi }}</span>
        </div>
      </div>
    </section>-->

    <footer class="py-20 text-center border-t border-slate-100">
      <p class="text-sm text-slate-400">© {{ data.year }} {{ data.author }} — {{ data.university }}</p>
    </footer>
  </div>
</template>

<script setup>
import { researchData as data } from '../data.js'
</script>