export const researchData = {
  title: "The Musical Work as a Mutable Interface",
  subtitle: "Towards a Co-Creative Electroacoustic Practice",
  author: "Nádia Carvalho",
  university: "FEUP / INESC TEC",
  year: "2026",
  githubCollection: "https://github.com/stars/NadiaCarvalho/lists/phd-musicalwork-mutableinterface",
  
  // Artifacts includes Apps, Subapps, and Datasets for the ArtifactGrid component
  artifacts: [
    { 
      id: "broadcast-jsb",
      name: "BroadcastJSB", 
      pillar: "Tonal",
      category: "Software System",
      url: "https://nadiacarvalho.github.io/BroadcastJSB/", 
      repo: "https://github.com/NadiaCarvalho/Broadcast.JSB",
      description: "A topological instrument using a radio metaphor to navigate the latent space of J.S. Bach chorales."
    },
    { 
      id: "aethra",
      name: "Aethra", 
      pillar: "Timbre",
      category: "Autonomous Agent",
      repo: "https://github.com/NadiaCarvalho/Aethra",
      description: "A co-creative autonomous agent for real-time mixed music improvisation using RAVE and shared intentionality models."
    },
    { 
      id: "bach-latent-navigator",
      name: "Bach Latent Navigator", 
      pillar: "Tonal",
      category: "Web Platform",
      url: "https://nadiacarvalho.github.io/BachLatentNavigator/", 
      repo: "https://github.com/NadiaCarvalho/BachLatentNavigator",
      description: "Evaluation platform for sampling strategies (k-NN vs Linear Interpolation) in music manifolds."
    },
    { 
      id: "encodings-tonal",
      name: "Tonal Music Encodings", 
      pillar: "Tonal",
      category: "Web Platform",
      url: "https://nadiacarvalho.github.io/Latent-Tonal-Music/", 
      repo: "https://github.com/NadiaCarvalho/Latent-Tonal-Music/tree/website-encodings",
      description: "Interactive exploration of latent behavior and geometric properties of symbolic music encodings."
    },
    { 
      id: "motiv-dataset",
      name: "Motiv Dataset", 
      pillar: "Timbre",
      category: "Dataset",
      doi: "10.7910/DVN/RWCG4B", 
      description: "Trajectory dataset of saxophonic musical phrases and latent motion representations." 
    },
    { 
      id: "saxtimbre-dataset",
      name: "SaxTimbre", 
      pillar: "Timbre",
      category: "Dataset",
      doi: "10.7910/DVN/WSFBIJ", 
      description: "Comprehensive dataset of tenor saxophone extended techniques for RAVE model training." 
    }
  ],

  publications: [
    {
      id: "aimc-2023",
      title: "Exploring Latent Spaces of Tonal Music using Variational Autoencoders",
      author: "Carvalho, N., & Bernardes, G.",
      year: 2023,
      venue: "AIMC 2023",
      doi: "2311.03621",
      pillar: "Tonal Pillar",
      colab: "https://colab.research.google.com/drive/YOUR_LINK_HERE"
    },
    {
      id: "smc-2024-sampling",
      title: "Exploring Sampling Strategies in Latent Spaces for Music Generation",
      author: "Carvalho, N., & Bernardes, G.",
      year: 2024,
      venue: "SMC 2024",
      doi: "10.5281/zenodo.14336029",
      pillar: "Tonal Pillar"
    },
    {
      id: "mcm-2024-fourier",
      title: "Fourier Phase Spaces are in Tune with VAEs' Latent Space",
      author: "Carvalho, N., & Bernardes, G.",
      year: 2024,
      venue: "MCM 2024",
      doi: "10.1007/978-3-031-60638-0_24",
      pillar: "Tonal Pillar"
    },
    {
      id: "smc-2024-sax",
      title: "Unveiling the Timbre Landscape: Analysis of Tenor Saxophone in RAVE Models",
      author: "Carvalho, N., Sousa, J., Bernardes, G., & Portovedo, H.",
      year: 2024,
      venue: "SMC 2024",
      doi: "10.5281/zenodo.14362599",
      pillar: "Timbre Pillar"
    },
    {
      id: "amicad-2025-motiv",
      title: "Motiv: A Dataset of Latent Space Representations of Musical Phrase Motions",
      author: "Carvalho, N., Sousa, J., Bernardes, G., & Portovedo, H.",
      year: 2025,
      venue: "AM.ICAD 2025",
      doi: "10.1145/3771594.3771602",
      pillar: "Timbre Pillar"
    },
    {
      id: "ijpadm-2025-timbre",
      title: "Exploring Timbre Latent Spaces: Motion-Enhanced Sampling for Musical Co-Improvisation",
      author: "Carvalho, N., Sousa, J., Bernardes, G., & Portovedo, H.",
      year: 2025,
      venue: "International Journal of Performance Arts and Digital Media",
      doi: "10.1080/14794713.2025.2536409",
      pillar: "Timbre Pillar"
    }
  ]
}