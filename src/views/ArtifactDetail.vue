<template>
  <div v-if="item" class="max-w-4xl mx-auto px-6 py-20">
    <router-link to="/software"
      class="text-sm font-bold text-indigo-600 mb-8 block hover:translate-x-[-4px] transition-transform">
      ← Back to Software
    </router-link>

    <header class="mb-12">
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
          {{ item.pillar }}
        </span>
        <span class="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider">
          {{ item.category }}
        </span>
      </div>
      <h1 class="text-5xl font-black mb-6 leading-tight text-slate-900">{{ item.name }}</h1>
      <p class="text-xl text-slate-600 leading-relaxed max-w-3xl">{{ item.description }}</p>
    </header>

    <div class="flex flex-wrap gap-4 mb-16">
      <a v-if="item.url" :href="item.url" target="_blank"
        class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
        Launch Application
      </a>
      <a v-if="item.repo" :href="item.repo" target="_blank"
        class="px-6 py-3 border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-colors">
        View Repository
      </a>
      <div v-if="item.doi"
        class="px-6 py-3 bg-slate-50 border border-slate-100 text-slate-500 rounded-xl text-sm font-mono">
        DOI: <a :href="'https://doi.org/' + item.doi" class="hover:text-indigo-600 underline" target="_blank">{{
    item.doi }}</a>
      </div>
    </div>

    <section v-if="item.media_documentation?.length" class="mb-24 space-y-8">
      <div class="border-b border-slate-100 pb-4">
        <h4 class="text-sm font-black uppercase text-slate-400 tracking-widest">Software Documentation</h4>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(doc, dIdx) in item.media_documentation" :key="dIdx"
          class="flex flex-col p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-300 hover:bg-white transition-all group shadow-sm">
          <div class="mb-6 space-y-2">
            <h5 class="font-black text-slate-900 text-xl group-hover:text-indigo-600 transition-colors">
              {{ doc.name }}
            </h5>
            <p class="text-slate-500 text-sm leading-relaxed">
              {{ doc.description }}
            </p>
          </div>

          <div class="mt-auto overflow-hidden rounded-[1.8rem] bg-black aspect-video shadow-2xl border border-white/5">
            <iframe v-if="doc.url.includes('youtube') || doc.url.includes('vimeo')" :src="doc.url" class="w-full h-full"
              frameborder="0" allowfullscreen>
            </iframe>
            <iframe v-else-if="doc.url.includes('drive.google')" :src="doc.url" class="w-full h-full" frameborder="0">
            </iframe>
            <video v-else controls :src="doc.url" class="w-full h-full object-cover"></video>
          </div>
        </div>
      </div>
    </section>

    <div v-if="normalizedStudyCases.length > 1"
      class="flex border-b border-slate-100 mb-12 overflow-x-auto no-scrollbar">
      <button v-for="(sc, index) in normalizedStudyCases" :key="index" @click="activeTab = index"
        class="px-8 py-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap"
        :class="activeTab === index ? 'border-indigo-600 text-indigo-600 bg-indigo-50/30' : 'border-transparent text-slate-400 hover:text-slate-600'">
        {{ sc.name }}
      </button>
    </div>

    <div v-if="activeCase" class="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section class="space-y-16">
        <div class="border-b border-slate-100 pb-10">
          <h2 class="text-xs font-black uppercase text-indigo-500 mb-2 tracking-widest">Case Study Analysis</h2>
          <h3 class="text-3xl font-bold text-slate-900 mb-6">{{ activeCase.name }}</h3>
          <p class="text-slate-600 leading-relaxed text-lg whitespace-pre-wrap">{{ activeCase.description }}</p>
        </div>

        <div v-if="activeCase.examples?.length" class="space-y-8">
          <h4 class="text-sm font-black uppercase text-slate-400 tracking-widest">Media Examples</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(ex, exIndex) in activeCase.examples" :key="exIndex" @click="openExampleModal(ex)"
              class="flex flex-col p-8 bg-slate-50 rounded-[2rem] border border-slate-100 cursor-pointer hover:border-indigo-300 hover:bg-white transition-all group shadow-sm">

              <div class="mb-6 flex justify-between items-start">
                <div class="space-y-1">
                  <p
                    class="font-bold text-slate-800 text-lg leading-tight group-hover:text-indigo-600 transition-colors">
                    {{ ex.name }}</p>
                  <p class="text-sm text-slate-500 leading-relaxed">{{ ex.description }}</p>
                </div>
                <span
                  class="text-indigo-400 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest ml-4 whitespace-nowrap">Fullscreen
                  ↗</span>
              </div>

              <div class="mt-auto space-y-4" @click.stop>
                <div v-if="ex.type.includes('image')"
                  class="overflow-hidden rounded-2xl bg-white border border-slate-200 aspect-video shadow-md">
                  <iframe v-if="(ex.url_image || ex.url)?.includes('drive.google')" :src="ex.url_image || ex.url"
                    class="w-full h-full" frameborder="0"></iframe>
                  <img v-else :src="ex.url_image || ex.url" class="w-full h-full object-contain p-2" />
                </div>

                <div v-if="ex.type.includes('video')"
                  class="overflow-hidden rounded-2xl bg-black aspect-video shadow-md">
                  <iframe
                    v-if="(ex.url_video || ex.url)?.includes('youtube') || (ex.url_video || ex.url)?.includes('drive.google') || (ex.url_video || ex.url)?.includes('vimeo')"
                    :src="ex.url_video || ex.url" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
                  <video v-else controls :src="ex.url_video || ex.url" class="w-full h-full object-cover"></video>
                </div>

                <div v-if="ex.type.includes('audio')"
                  class="overflow-hidden rounded-2xl bg-white border border-slate-200 aspect-video shadow-md">
                  <iframe
                    v-if="(ex.url_audio || ex.url)?.includes('youtube') || (ex.url_audio || ex.url)?.includes('drive.google') || (ex.url_audio || ex.url)?.includes('vimeo')"
                    :src="ex.url_audio || ex.url" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
                  <audio v-else controls :src="ex.url" class="w-full h-12 opacity-90"></audio>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-12" v-if="activeCase.performances?.length">
          <h4 class="text-sm font-black uppercase text-slate-400 tracking-widest">Performance History</h4>
          <div
            class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

            <div v-for="(perf, pIndex) in activeCase.performances" :key="pIndex" :id="'performance-' + perf.id"
              class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

              <div
                class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 group-hover:bg-indigo-500 text-white transition-all shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div
                class="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <time class="font-mono text-xs font-bold text-indigo-500">{{ perf.date }}</time>
                  <span class="text-[10px] font-bold text-slate-400 uppercase tracking-tight text-right">{{
    perf.performance_place }}</span>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3 leading-tight">{{ perf.event }}</h4>
                <p class="text-sm text-slate-500 leading-relaxed mb-6">{{ perf.description }}</p>

                <a v-if="perf.url" :href="perf.url" target="_blank"
                  class="text-sm text-indigo-500 font-bold hover:underline inline-block mb-6">External Link ↗</a>

                <div class="flex flex-wrap gap-3 pt-6 border-t border-slate-50">
                  <button v-if="perf.media_links?.photos?.length" @click="openPerformanceModal(perf)"
                    class="text-[10px] font-bold px-3 py-2 bg-indigo-50 hover:bg-indigo-600 hover:text-white transition-all rounded-lg text-indigo-600 uppercase">
                    📸 {{ perf.media_links.photos.length }} Photos
                  </button>
                  <button v-if="perf.media_links?.videos?.length" @click="openPerformanceModal(perf)"
                    class="text-[10px] font-bold px-3 py-2 bg-slate-100 hover:bg-slate-600 hover:text-white transition-all rounded-lg text-slate-500 uppercase">
                    🎬 {{ perf.media_links.videos.length }} Videos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Teleport to="body">
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { researchData as data } from '../data.js'

const route = useRoute()
const activeTab = ref(0)

// Find Artifact
const item = computed(() => data.artifacts.find(a => a.id === route.params.id) || null)

// Ensure study_cases is always an array
const normalizedStudyCases = computed(() => {
  if (!item.value) return []
  if (item.value.study_cases) return item.value.study_cases
  if (item.value.study_case) return [item.value.study_case]
  return []
})

const activeCase = computed(() => normalizedStudyCases.value[activeTab.value] || null)

// Modal Logic
const selectedContent = ref(null)
const contentType = ref(null)

const openExampleModal = (ex) => {
  selectedContent.value = ex
  contentType.value = 'example'
}

const openPerformanceModal = (perf) => {
  selectedContent.value = perf
  contentType.value = 'performance'
}

const closeModal = () => {
  selectedContent.value = null
  contentType.value = null
}

// Body Scroll Lock
watch(selectedContent, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : 'auto'
  }
})

const currentPlayingUrl = ref(null)
let audioInstance = null

const toggleAudio = (url) => {
  // Use the import.meta.env.BASE_URL to handle the '/MutableMusicalInterface/' prefix
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  console.log("Loading Audio from:", fullUrl);

  if (currentPlayingUrl.value === url && audioInstance) {
    audioInstance.pause();
    currentPlayingUrl.value = null;
    return;
  }

  if (audioInstance) {
    audioInstance.pause();
    audioInstance.currentTime = 0;
  }

  audioInstance = new Audio(fullUrl);

  audioInstance.play()
    .then(() => {
      currentPlayingUrl.value = url;
    })
    .catch(err => {
      console.error("Playback failed:", fullUrl, err);
      currentPlayingUrl.value = null;
    });

  audioInstance.onended = () => {
    currentPlayingUrl.value = null;
  };
}

// Clean up audio if user closes modal or leaves page
onBeforeUnmount(() => {
  if (audioInstance) {
    audioInstance.pause()
    audioInstance = null
  }
})

// Helper for the table headers
const getFlattenedSubheaders = (headers) => {
  return headers.reduce((acc, h) => {
    if (h.subLabels) return [...acc, ...h.subLabels]
    return [...acc, ' ']
  }, [])
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Custom animate-in utility */
.animate-in {
  animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>