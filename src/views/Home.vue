<template>
  <div class="max-w-4xl mx-auto py-24 px-6 text-center">
    <h1 class="text-5xl font-black mb-4">{{ data.title }}</h1>
    <p class="text-xl text-slate-500 mb-16">{{ data.subtitle }}</p>

    <div class="grid md:grid-cols-2 gap-8">
      <router-link to="/software" class="p-10 border-2 border-slate-100 rounded-3xl hover:border-indigo-500 hover:bg-indigo-50/30 transition-all group">
        <div class="text-4xl mb-4">🎹</div>
        <h2 class="text-2xl font-bold mb-2 group-hover:text-indigo-600">Software & Tools</h2>
        <p class="text-slate-500 text-sm">Explore interactive systems, autonomous agents, and datasets.</p>
      </router-link>

      <router-link to="/publications" class="p-10 border-2 border-slate-100 rounded-3xl hover:border-indigo-500 hover:bg-indigo-50/30 transition-all group">
        <div class="text-4xl mb-4">📄</div>
        <h2 class="text-2xl font-bold mb-2 group-hover:text-indigo-600">Publications</h2>
        <p class="text-slate-500 text-sm">Academic papers detailing the theoretical and empirical research.</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { researchData as data } from '../data.js'
</script>