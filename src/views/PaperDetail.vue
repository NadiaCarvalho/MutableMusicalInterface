<template>
    <div v-if="paper" class="paper-page container">
        <nav class="breadcrumb"><router-link to="/">← Back to Research</router-link></nav>

        <header class="paper-header">
            <span class="pillar-tag">{{ paper.pillar }} Pillar</span>
            <h1>{{ paper.title }}</h1>
            <p class="venue">{{ paper.venue }}</p>
        </header>

        <section class="abstract">
            <h2>Abstract</h2>
            <p>{{ paper.abstract }}</p>
            <a :href="'https://doi.org/' + paper.doi" target="_blank" class="doi-link">
                View Paper (DOI: {{ paper.doi }})
            </a>
        </section>

        <section class="related-artifacts">
            <h3>Connected Research Artifacts</h3>
            <div class="artifact-links">
                <div v-if="paper.app" class="artifact-item">
                    <strong>Interactive App:</strong> {{ paper.app }}
                </div>
                <div v-if="paper.dataset" class="artifact-item">
                    <strong>Dataset:</strong> {{ paper.dataset }}
                </div>
                <div v-if="paper.colab" class="artifact-item">
                    <strong>Google Colab:</strong> <code>{{ paper.colab }}</code>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { researchData } from '../data.js'

const props = defineProps(['id'])
const paper = computed(() =>
    researchData.publications.find(p => p.id === props.id)
)
</script>

<style scoped>
.pillar-tag {
    background: #e0e7ff;
    color: #4338ca;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
}

.doi-link {
    display: inline-block;
    margin-top: 1rem;
    color: #2563eb;
    font-weight: 600;
}

.artifact-links {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
}
</style>