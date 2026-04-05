<template>
  <div v-if="item" class="max-w-4xl mx-auto px-6 py-20">
    <router-link to="/software" class="text-sm font-bold text-indigo-600 mb-8 block">← Back to Software</router-link>
    
    <header class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">{{ item.pillar }}</span>
        <span class="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider">{{ item.category }}</span>
      </div>
      <h1 class="text-5xl font-black mb-6">{{ item.name }}</h1>
      <p class="text-xl text-slate-600 leading-relaxed max-w-2xl">{{ item.description }}</p>
    </header>

    <div class="flex flex-wrap gap-4 mb-20">
      <a v-if="item.url" :href="item.url" target="_blank" class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Launch Application</a>
      <a v-if="item.repo" :href="item.repo" target="_blank" class="px-6 py-3 border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-colors">View Repository</a>
      <div v-if="item.doi" class="px-6 py-3 bg-slate-50 border border-slate-100 text-slate-500 rounded-xl text-sm font-mono">
        DOI: <a :href="'https://doi.org/' + item.doi" class="hover:text-indigo-600 underline">{{ item.doi }}</a>
      </div>
    </div>

    <section v-if="item.study_case" class="space-y-16">
      <div class="border-b border-slate-100 pb-8">
        <h2 class="text-xs font-black uppercase text-indigo-500 mb-2 tracking-widest">Case Study</h2>
        <h3 class="text-3xl font-bold text-slate-900 mb-6">{{ item.study_case.name }}</h3>
        <p class="text-slate-600 leading-relaxed text-lg">{{ item.study_case.description }}</p>
      </div>

      <div v-if="item.study_case.examples?.length" class="space-y-8">
        <h4 class="text-sm font-black uppercase text-slate-400 tracking-widest">Media Examples</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(ex, index) in item.study_case.examples" :key="index" :id="'example-' + ex.id" class="flex flex-col p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <div class="mb-4">
              <span class="text-[10px] font-bold px-2 py-1 bg-white border border-slate-200 rounded text-slate-400 uppercase mb-2 inline-block">
                {{ ex.type }}
              </span>
              <p class="font-bold text-slate-800 leading-tight">{{ ex.name }}</p>
              <p class="text-xs text-slate-500 mt-1">{{ ex.description }}</p>
            </div>

            <div v-if="ex.type === 'video'" class="mt-auto overflow-hidden rounded-xl bg-black aspect-video">
              <iframe 
                v-if="ex.url.includes('youtube') || ex.url.includes('vimeo')"
                :src="ex.url" 
                class="w-full h-full" 
                frameborder="0" 
                allowfullscreen>
              </iframe>
              <video v-else controls :src="ex.url" class="w-full h-full object-cover"></video>
            </div>

            <div v-else-if="ex.type === 'audio'" class="mt-auto pt-4">
              <audio controls :src="ex.url" class="w-full h-10 opacity-90">
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-12">
        <h4 class="text-sm font-black uppercase text-slate-400 tracking-widest">Performance History</h4>
        <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          
          <div v-for="(perf, index) in item.study_case.performances" :key="index" :id="'performance-' + perf.id" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 group-hover:bg-indigo-500 text-white transition-all shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div class="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div class="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between mb-2">
                <time class="font-mono text-xs font-bold text-indigo-500">{{ perf.date }}</time>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{{ perf.performance_place }}</span>
              </div>
              <h4 class="text-lg font-bold text-slate-900 mb-2 leading-tight">{{ perf.event }}</h4>
              <p class="text-sm text-slate-500 leading-relaxed mb-4">{{ perf.description }}</p>

              <div class="flex gap-3 pt-4 border-t border-slate-50">
                <span v-if="perf.media_links?.photos?.length" class="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-500 uppercase">
                  📸 {{ perf.media_links.photos.length }} Photos
                </span>
                <span v-if="perf.media_links?.videos?.length" class="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-500 uppercase">
                  🎬 {{ perf.media_links.videos.length }} Videos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { researchData as data } from '../data.js'

const route = useRoute()
const item = computed(() => {
  return data.artifacts.find(a => a.id === route.params.id)
});
</script>