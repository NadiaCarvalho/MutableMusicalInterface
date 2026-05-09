// src/store/dataStore.js
import { ref } from 'vue'

export const researchData = ref(null)
export const isLoading = ref(false)
export const error = ref(null)

const dataUrl = 'https://raw.githubusercontent.com/NadiaCarvalho/MutableMusicalInterface/main/src/data.json'

// 2. Export a function to trigger the fetch
export async function fetchResearchData() {
  // CRUCIAL: If we already have the data, don't fetch it again!
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