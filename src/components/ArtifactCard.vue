<template>
    <div class="card">
        <h3>{{ name }}</h3>
        <div class="links">
            <a v-if="url" :href="url">Live App</a>
            <a v-if="repo" :href="'https://' + repo">GitHub</a>
            <span v-if="doi" class="doi">DOI: {{ doi }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps(['name', 'url', 'repo', 'doi'])
</script>