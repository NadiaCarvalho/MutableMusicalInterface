<template>
    <div v-if="paper" class="max-w-3xl mx-auto px-6 py-24 min-h-screen">
        <router-link to="/" class="text-sm font-bold text-indigo-600 hover:underline mb-12 block">← RETURN TO
            OVERVIEW</router-link>

        <div class="mb-12">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ paper.pillar }}</span>
            <h1 class="text-4xl font-extrabold mt-2 mb-4 leading-tight">{{ paper.title }}</h1>
            <p class="text-xl text-slate-500">{{ paper.venue }}</p>
        </div>

        <div class="space-y-12">
            <section v-if="paper.doi" class="border-t pt-8">
                <h4 class="text-xs font-bold text-slate-400 uppercase mb-4">Official Publication</h4>
                <a :href="'https://doi.org/' + paper.doi" target="_blank"
                    class="text-lg text-indigo-600 font-medium flex items-center gap-2">
                    View via DOI: {{ paper.doi }} ↗
                </a>
            </section>

            <section v-if="paper.colab" class="bg-indigo-50 p-8 rounded-2xl">
                <h4 class="text-xs font-bold text-indigo-900 uppercase mb-4">Interactive Appendix</h4>
                <p class="text-indigo-800 mb-6">Explore the models and latent space visualizations from this paper
                    directly in your browser.</p>
                <div class="flex items-center gap-4">
                    <code class="text-xs bg-white/50 p-2 rounded">{{ paper.colab }}</code>
                    <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Open Google
                        Colab</button>
                </div>
            </section>
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