<template>
    <div class="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div class="mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <img src="../assets/mutable-icon.png" alt="Animated Logo" class="w-24 h-24 mx-auto" />
      </div>
  
      <h1 class="text-6xl font-black text-slate-200 mb-2">404</h1>
      <h2 class="text-2xl font-bold text-slate-800 mb-4">Out of Bounds</h2>
      
      <p class="text-slate-500 max-w-xs mx-auto mb-8 leading-relaxed">
        You've navigated to a coordinate in the latent space that contains no data. 
        The interface is currently immutable here.
      </p>
  
      <router-link 
        to="/" 
        class="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold text-sm hover:bg-indigo-700 transition-transform active:scale-95 shadow-lg shadow-indigo-200"
      >
        <span>Return to Origin</span>
      </router-link>
    </div>
  </template>
  
  <script setup>
  // No logic needed for a simple 404
  </script>
  
  <style scoped>
  /* Optional: Add a subtle 'drift' animation to the 404 text */
  h1 {
    animation: drift 10s ease-in-out infinite;
  }
  
  @keyframes drift {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(5px, -10px); }
  }
  </style>