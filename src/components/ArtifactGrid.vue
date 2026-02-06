<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      <div 
        v-for="item in artifacts" 
        :key="item.id" 
        class="research-card group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
      >
        <div class="flex justify-between items-start mb-6">
          <span 
            class="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest"
            :class="item.pillar === 'Tonal' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'"
          >
            {{ item.pillar }} Pillar
          </span>
          <span v-if="item.doi" class="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">
            DOI: {{ item.doi }}
          </span>
        </div>
  
        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {{ item.name }}
        </h3>
        <p class="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
          {{ item.description }}
        </p>
  
        <div class="flex flex-wrap gap-4 pt-4 border-t border-slate-50 mt-auto">
          <a 
            v-if="item.url" 
            :href="item.url" 
            target="_blank"
            class="text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            Interactive Tool ↗
          </a>
          <a 
            v-if="item.repo" 
            :href="'https://' + item.repo" 
            target="_blank"
            class="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600"
          >
            Source Code
          </a>
          <a 
            v-if="item.colab" 
            :href="item.colab" 
            target="_blank"
            class="text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-800"
          >
            Google Colab
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { researchData } from '../data.js'
  
  // Flattening your different lists for a uniform display
  const artifacts = computed(() => [
    ...researchData.apps.map(a => ({ ...a, type: 'Software' })),
    ...researchData.datasets.map(d => ({ ...d, type: 'Dataset', pillar: 'Timbre' }))
  ])
  </script>