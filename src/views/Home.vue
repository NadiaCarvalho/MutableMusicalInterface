<template>
    <div class="min-h-screen bg-slate-50">
      <header class="bg-white border-b border-slate-200 py-20 px-6">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {{ data.title }}
          </h1>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explorando a transição da obra musical de um artefacto estático para uma 
            <span class="text-indigo-600 font-semibold">interface mutável</span> 
            através de Inteligência Artificial e sistemas co-criativos.
          </p>
          <div class="mt-10 flex flex-wrap justify-center gap-4">
            <a :href="data.githubList" target="_blank" class="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition">
              GitHub Collection
            </a>
            <a href="#publications" class="bg-white text-slate-900 border border-slate-300 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition">
              Ler Artigos
            </a>
          </div>
        </div>
      </header>
  
      <section class="max-w-6xl mx-auto py-20 px-6">
        <h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">Artefactos de Investigação</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="app in data.apps" :key="app.name" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div class="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ app.name }}</h3>
            <p class="text-slate-600 mb-6">Interface interativa para navegação em espaços latentes musicais.</p>
            <div class="flex gap-4">
              <a :href="app.url" class="text-indigo-600 font-semibold text-sm hover:underline">Launch App →</a>
              <a :href="'https://' + app.repo" class="text-slate-400 font-medium text-sm hover:text-slate-600">Repo</a>
            </div>
          </div>
  
          <div v-for="ds in data.datasets" :key="ds.name" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div class="text-emerald-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/vue" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ ds.name }}</h3>
            <p class="text-slate-600 mb-6">Recursos de dados abertos para treino de modelos de áudio e música.</p>
            <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">DOI: {{ ds.doi }}</span>
          </div>
        </div>
      </section>
  
      <section id="publications" class="bg-slate-900 text-white py-20 px-6">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold mb-12">Publicações Selecionadas</h2>
          
          <div class="space-y-6">
            <router-link 
              v-for="paper in data.publications" 
              :key="paper.id"
              :to="'/paper/' + paper.id"
              class="group block bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition border border-slate-700"
            >
              <div class="flex justify-between items-start">
                <div>
                  <span class="text-indigo-400 text-sm font-medium uppercase tracking-wider">{{ paper.venue }}</span>
                  <h3 class="text-xl font-bold mt-1 group-hover:text-indigo-300 transition">{{ paper.title }}</h3>
                </div>
                <span class="text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </router-link>
          </div>
        </div>
      </section>
  
      <footer class="py-10 text-center text-slate-400 text-sm">
        <p>&copy; 2026 Nádia Carvalho — {{ data.author }}</p>
        <p class="mt-2 italic">Doutoramento em Media Digitais (FEUP / INESC TEC)</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { researchData as data } from '../data.js'
  </script>
  
  <style scoped>
  /* Adicione aqui estilos específicos se não usar Tailwind */
  </style>