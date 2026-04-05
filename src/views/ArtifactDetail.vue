<template>
  <div v-if="item" class="max-w-4xl mx-auto px-6 py-20">
    <router-link to="/software" class="text-sm font-bold text-indigo-600 mb-8 block">← Back to Software</router-link>

    <header class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">{{
    item.pillar }}</span>
        <span class="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider">{{
    item.category }}</span>
      </div>
      <h1 class="text-5xl font-black mb-6">{{ item.name }}</h1>
      <p class="text-xl text-slate-600 leading-relaxed max-w-2xl">{{ item.description }}</p>
    </header>

    <div class="flex flex-wrap gap-4 mb-20">
      <a v-if="item.url" :href="item.url" target="_blank"
        class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Launch
        Application</a>
      <a v-if="item.repo" :href="item.repo" target="_blank"
        class="px-6 py-3 border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-colors">View
        Repository</a>
      <div v-if="item.doi"
        class="px-6 py-3 bg-slate-50 border border-slate-100 text-slate-500 rounded-xl text-sm font-mono">
        DOI: <a :href="'https://doi.org/' + item.doi" class="hover:text-indigo-600 underline">{{ item.doi }}</a>
      </div>
    </div>

    <section v-if="item.study_case" class="space-y-16">
      <div class="border-b border-slate-100 pb-8">
        <h2 class="text-xs font-black uppercase text-indigo-500 mb-2 tracking-widest">Case Study</h2>
        <h3 class="text-3xl font-bold text-slate-900 mb-6">{{ item.study_case.name }}</h3>
        <p class="text-slate-600 leading-relaxed text-lg">{{ item.study_case.description }}</p>
      </div>

      <div v-if="item.study_case?.examples?.length" class="space-y-8">
        <h4 class="text-sm font-black uppercase text-slate-400 tracking-widest">Media Examples</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(ex, index) in item.study_case.examples" :key="index" @click="openModal(ex)"
            class="flex flex-col p-6 bg-slate-50 rounded-3xl border border-slate-100 cursor-pointer hover:border-indigo-300 hover:bg-white transition-all group shadow-sm">
            <div class="mb-6 flex justify-between items-start">
              <div>
                <p class="font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{{
    ex.name }}</p>
                <p class="text-xs text-slate-500 mt-1">{{ ex.description }}</p>
              </div>
              <span
                class="text-indigo-400 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest ml-2">Open
                Fullscreen ↗</span>
            </div>

            <div class="mt-auto" @click.stop>

              <div v-if="ex.type === 'video&image' || ex.type === 'image'"
                class="overflow-hidden rounded-xl bg-black aspect-video shadow-md">
                <iframe v-if="(ex.url_image || ex.url)?.includes('drive.google')" :src="ex.url_image"
                  class="w-full h-full" frameborder="0" allowfullscreen></iframe>
                <img v-else :src="ex.url_image || ex.url" class="w-full h-auto object-cover" />
              </div>
              <br v-if="ex.type === 'video&image'" />
              <div v-if="ex.type === 'video&image' || ex.type === 'video'"
                class="overflow-hidden rounded-xl bg-black aspect-video shadow-md">
                <iframe
                  v-if="(ex.url_video || ex.url)?.includes('youtube') || (ex.url_video || ex.url)?.includes('drive.google')"
                  :src="ex.url_video || ex.url" class="w-full h-full" frameborder="0" allowfullscreen>
                </iframe>
                <video v-else controls :src="ex.url_video || ex.url" class="w-full h-full object-cover"></video>
              </div>
              <div v-if="ex.type === 'audio'" class="pt-2">
                <audio controls :src="ex.url" class="w-full h-10 opacity-90"></audio>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="space-y-12" v-if="item.study_case.performances">
        <h4 class="text-sm font-black uppercase text-slate-400 tracking-widest">Performance History</h4>
        <div
          class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          <div v-for="(perf, index) in item.study_case.performances" :key="index" :id="'performance-' + perf.id"
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 group-hover:bg-indigo-500 text-white transition-all shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div class="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div
              class="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center justify-between mb-2">
                <time class="font-mono text-xs font-bold text-indigo-500">{{ perf.date }}</time>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{{ perf.performance_place
                  }}</span>
              </div>
              <h4 class="text-lg font-bold text-slate-900 mb-2 leading-tight">{{ perf.event }}</h4>
              <p class="text-sm text-slate-500 leading-relaxed mb-4">{{ perf.description }}</p>
              <div class="flex gap-3 pt-4 border-t border-slate-50">
                <span v-if="perf.media_links?.photos?.length"
                  class="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-500 uppercase">📸 {{
    perf.media_links.photos.length }} Photos</span>
                <span v-if="perf.media_links?.videos?.length"
                  class="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-500 uppercase">🎬 {{
    perf.media_links.videos.length }} Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="selectedExample" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div class="absolute inset-0 bg-slate-900/90 backdrop-blur-md" @click="closeModal"></div>

          <div class="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl">
            <button @click="closeModal"
              class="fixed md:absolute top-6 right-6 z-[110] w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-xl">✕</button>

            <div class="p-8 md:p-16">
              <header class="mb-10 max-w-2xl">
                <span
                  class="text-xs font-bold text-indigo-600 uppercase tracking-widest px-3 py-1 bg-indigo-50 rounded-full">{{
    selectedExample.type.replace('&', ' + ') }}</span>
                <h3 class="text-4xl font-black text-slate-900 mt-4 leading-tight">{{ selectedExample.name }}</h3>
                <p class="text-lg text-slate-500 mt-3">{{ selectedExample.description }}</p>
              </header>

              <div v-if="selectedExample.type === 'video&image'" class="grid lg:grid-cols-2 gap-8 items-start">
                <div class="aspect-video rounded-2xl border border-slate-100 overflow-hidden bg-slate-50 shadow-inner">
                  <iframe v-if="selectedExample.url_image?.includes('drive.google')" :src="selectedExample.url_image"
                    class="w-full h-full aspect-[3/4]" frameborder="0" allowfullscreen></iframe>
                  <img v-else :src="selectedExample.url_image" class="w-full h-auto object-contain" />
                </div>
                <div class="aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                  <iframe
                    v-if="selectedExample.url_video?.includes('youtube') || selectedExample.url_video?.includes('vimeo') || selectedExample.url_video?.includes('drive.google')"
                    :src="selectedExample.url_video" class="w-full h-full aspect-[3/4]" frameborder="0" allowfullscreen></iframe>
                  <video v-else controls :src="selectedExample.url_video" class="w-full h-full object-cover"></video>
                </div>
              </div>

              <div v-else-if="selectedExample.type === 'video'"
                class="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                <iframe
                  v-if="selectedExample.url?.includes('youtube') || selectedExample.url?.includes('vimeo') || selectedExample.url?.includes('drive.google')"
                  :src="selectedExample.url" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
                <video v-else controls :src="selectedExample.url" class="w-full h-full object-cover"></video>
              </div>

              <div v-else-if="selectedExample.type === 'audio'" class="max-w-2xl mx-auto py-12 text-center">
                <audio controls :src="selectedExample.url" class="w-full h-12 mb-4"></audio>
                <p class="text-slate-400 text-sm">Media Source: {{ selectedExample.url }}</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { researchData as data } from '../data.js'

const route = useRoute()
const item = computed(() => data.artifacts.find(a => a.id === route.params.id))

// Modal State
const selectedExample = ref(null)

const openModal = (ex) => {
  selectedExample.value = ex
}

const closeModal = () => {
  selectedExample.value = null
}

// Watch modal state to toggle body scroll
watch(selectedExample, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure the grid cards look clickable */
.research-card-clickable {
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.research-card-clickable:hover {
  transform: translateY(-2px);
}
</style>