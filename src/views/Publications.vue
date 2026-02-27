<template>
    <div class="max-w-4xl mx-auto px-6 py-16">
      <h1 class="text-4xl font-bold mb-16 text-center">Research Publications</h1>
  
      <div v-for="pillar in ['Tonal Pillar', 'Timbre Pillar']" :key="pillar" class="mb-16">
        <h2 class="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 border-b pb-2">{{ pillar }}</h2>
        
        <div class="space-y-4">
          <router-link 
            v-for="paper in data.publications.filter(p => p.pillar === pillar)" 
            :key="paper.id"
            :to="'/paper/' + paper.id"
            class="block p-6 bg-white border border-slate-100 rounded-xl hover:border-indigo-300 transition"
          >
            <div class="flex justify-between items-start">
              <div>
                <p class="text-xs font-mono text-slate-400 mb-1">{{ paper.venue }} ({{ paper.year }})</p>
                <h3 class="text-lg font-bold">{{ paper.title }}</h3>
              </div>
              <span class="text-slate-300">→</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { researchData as data } from '../data.js'
  </script>