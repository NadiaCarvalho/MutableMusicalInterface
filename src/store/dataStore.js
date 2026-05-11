// src/store/dataStore.js
import { ref } from 'vue'

export const researchData = ref(null)
export const isLoading = ref(false)
export const error = ref(null)

const dataUrl = 'https://raw.githubusercontent.com/NadiaCarvalho/MutableMusicalInterface/main/src/data.json'

export async function fetchResearchData() {
  if (researchData.value) return

  isLoading.value = true
  error.value = null

  try {
    const response = await fetch(dataUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    researchData.value = await response.json()
  } catch (err) {
    console.error("Failed to fetch data:", err)
    error.value = "Could not load data. Please try again later."
  } finally {
    isLoading.value = false
  }
}

export async function fetchResearchDataLocal() {
  if (researchData.value) return

  isLoading.value = true
  error.value = null

  try {
    // 1. Dynamically import the file (works inside functions)
    const localModule = await import('../data.json')
    
    // 2. Bundlers like Vite usually put the JSON under the .default property
    researchData.value = localModule.default || localModule
    
    console.log("Mock data loaded:", researchData.value)

  } catch (err) {
    console.error("Error setting mock data:", err)
    error.value = "Could not load mock data."
  } finally {
    isLoading.value = false
  }
}