<template>
  <div id="site-wrapper" class="min-h-screen flex flex-col bg-white">
    <nav class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div class="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">

        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs group-hover:bg-indigo-700 transition">
            NC
          </div>
          <span class="font-bold tracking-tight text-slate-800">Thesis Portal</span>
        </router-link>

        <div class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
          <router-link to="/" class="hover:text-indigo-600 transition" active-class="text-indigo-600">Home</router-link>
          <a href="/#software" class="hover:text-indigo-600 transition">Software</a>
          <a href="/#papers" class="hover:text-indigo-600 transition">Papers</a>
          <a :href="data.githubCollection" target="_blank" class="flex items-center gap-1 hover:text-slate-900 transition">
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-slate-50 border-t border-slate-100 py-12">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h4 class="font-bold text-slate-900 mb-2">{{ data.title }}</h4>
          <p class="text-sm text-slate-500 max-w-sm">
            A PhD research project investigating the reconfiguration of musical works into navigable, co-creative interfaces.
          </p>
        </div>
        <div class="md:text-right">
          <p class="text-sm font-bold text-slate-900">{{ data.author }}</p>
          <p class="text-sm text-slate-500">{{ data.university }} · {{ data.year }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { researchData as data } from './data.js'
</script>

<style>
/* Smooth page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for a more refined look */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>