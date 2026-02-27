<template>
    <div v-if="item" class="max-w-3xl mx-auto px-6 py-20">
      <router-link to="/software" class="text-sm font-bold text-indigo-600 mb-8 block">← Back to Software</router-link>
      
      <header class="mb-12">
        <span class="pillar-badge bg-slate-100 text-slate-600">{{ item.category }}</span>
        <h1 class="text-4xl font-black mt-4 mb-6">{{ item.name }}</h1>
        <p class="text-lg text-slate-600 leading-relaxed">{{ item.description }}</p>
      </header>
  
      <div class="flex gap-4 mb-16">
        <a v-if="item.url" :href="item.url" class="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm">Launch Application</a>
        <a v-if="item.repo" :href="item.repo" class="px-6 py-2 border rounded-lg font-bold text-sm text-slate-600">Repository</a>
        <span v-if="item.doi" class="px-6 py-2 bg-slate-50 text-slate-400 rounded-lg text-sm font-mono">DOI: {{ item.doi }}</span>
      </div>
  
      <section v-if="item.study_case" class="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
        <h2 class="text-xs font-black uppercase text-indigo-400 mb-2">Study Case</h2>
        <h3 class="text-2xl font-bold text-indigo-900 mb-4">{{ item.study_case.name }}</h3>
        <p class="text-indigo-800/80">{{ item.study_case.description || 'Description coming soon...' }}</p>
      </section>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { researchData as data } from '../data.js'
  
  const route = useRoute()
  const item = computed(() => data.artifacts.find(a => a.id === route.params.id))
  </script>