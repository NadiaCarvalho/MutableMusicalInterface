<template>
    <div class="max-w-6xl mx-auto px-6 py-16">
      <h1 class="text-4xl font-bold mb-12 text-center">Software & Artifacts</h1>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="item in data.artifacts" :key="item.id" class="research-card">
          <div class="flex justify-between mb-4">
            <span class="text-[10px] font-bold uppercase tracking-widest text-indigo-500">{{ item.category }}</span>
          </div>
          <h3 class="text-xl font-bold mb-4">{{ item.name }}</h3>
          <p class="text-sm text-slate-500 mb-6 line-clamp-3">{{ item.description }}</p>
          
          <router-link :to="'/software/' + item.id" class="text-xs font-bold text-indigo-600 hover:underline uppercase tracking-tighter">
            View Documentation →
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { researchData as data } from '../data.js'
  </script>