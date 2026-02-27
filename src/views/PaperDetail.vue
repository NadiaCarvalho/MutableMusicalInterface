<template>
    <div v-if="paper" class="max-w-4xl mx-auto px-6 py-16">
      <router-link to="/publications" class="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors mb-8 inline-block">
        ← BACK TO PUBLICATIONS
      </router-link>
  
      <header class="mb-12 border-b border-slate-100 pb-12">
        <div class="flex items-center gap-3 mb-6">
          <span :class="['px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest', 
            paper.pillar.includes('Tonal') ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700']">
            {{ paper.pillar }}
          </span>
          <span class="text-slate-400 text-xs font-mono">{{ paper.venue }} • {{ paper.year }}</span>
        </div>
        
        <h1 class="text-4xl font-black text-slate-900 leading-tight mb-6">
          {{ paper.title }}
        </h1>
        
        <p class="text-lg text-slate-500 italic">
          {{ paper.author }}
        </p>
      </header>
  
      <div class="grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 space-y-12">
          <section>
            <h2 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Reference & DOI</h2>
            <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p class="font-mono text-sm text-slate-700 break-all mb-4">
                doi: {{ paper.doi }}
              </p>
              <a :href="'https://doi.org/' + paper.doi" target="_blank" 
                 class="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline">
                View Official Publication ↗
              </a>
            </div>
          </section>
  
          <section v-if="paper.colab">
            <h2 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Computational Reproducibility</h2>
            <div class="space-y-4">
              <template v-if="Array.isArray(paper.colab)">
                <div v-for="(link, index) in paper.colab" :key="index" 
                     class="flex items-center justify-between p-4 border border-orange-100 bg-orange-50/30 rounded-xl">
                  <span class="text-sm font-medium text-orange-900">Notebook #{{ index + 1 }}</span>
                  <a :href="link" target="_blank" class="px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition">
                    OPEN IN COLAB
                  </a>
                </div>
              </template>
              <template v-else>
                <div class="flex items-center justify-between p-4 border border-orange-100 bg-orange-50/30 rounded-xl">
                  <span class="text-sm font-medium text-orange-900">Research Notebook</span>
                  <a :href="paper.colab" target="_blank" class="px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition">
                    OPEN IN COLAB
                  </a>
                </div>
              </template>
            </div>
          </section>
        </div>
  
        <aside class="space-y-8">
          <section v-if="paper.github">
            <h2 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Repository</h2>
            <a :href="paper.github" target="_blank" 
               class="flex items-center gap-3 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition">
              <span class="text-2xl">📁</span>
              <div class="overflow-hidden">
                <p class="text-xs font-bold text-slate-900 truncate">Source Code</p>
                <p class="text-[10px] text-slate-400 truncate">GitHub Repository</p>
              </div>
            </a>
          </section>
  
          <div class="p-6 bg-indigo-900 rounded-2xl text-white shadow-xl shadow-indigo-200">
            <h4 class="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Pillar Context</h4>
            <p class="text-xs leading-relaxed" style="color:honeydew;">
              This research contributes to the <strong>{{ paper.pillar }}</strong> of the Mutable Interface framework.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { researchData } from '../data.js'
  
  const route = useRoute()
  const paper = computed(() => researchData.publications.find(p => p.id === route.params.id))
  </script>