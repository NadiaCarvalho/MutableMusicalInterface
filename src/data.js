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
      category: "Web Platform",
      url: "https://nadiacarvalho.github.io/BroadcastJSB/", 
      repo: "https://github.com/NadiaCarvalho/BroadcastJSB",
      description: "A topological instrument using a radio metaphor to navigate the latent space of J.S. Bach chorales."
    },
    { 
      id: "aethra",
      name: "Aethra", 
      pillar: "Timbre",
      category: "PD patch + Py4PD scripts",
      repo: "https://github.com/NadiaCarvalho/Aethra",
      description: "A co-creative autonomous agent for real-time mixed music improvisation using RAVE and shared intentionality models.",
      study_case: {
        name: "Echoes of the Unseen",
        description: "Echoes of the Unseen is a 10-minute AI-mediated co-improvisation for tenor saxophone and live electronics, conceived and performed by Jorge Sousa and Nádia Carvalho [1]. The work explores the boundaries of AI-driven improvisational music by utilizing the Aethra system to navigate timbre latent spaces, building upon a remixed pre-recorded track based on Jesús Villa-Rojo’s Lamento (1989). To manage the vulnerability of free improvisation, the performance is guided by an 'auto-score' and structured around a one-knob control paradigm (the closeness parameter), which dictates the system's fidelity to the original audio. Furthermore, the performance incorporates a visual engine developed in TouchDesigner, which projects the system's algorithmic navigation as a 2D point cloud to serve as a cognitive bridge for the audience.",
        examples: [
          { 
            id: "audio-1",
            name: "TEMPLATE AUDIO",
            type: "audio",
            url: "[INSERT_AUDIO_URL_HERE]",
            description: "[TEMPLATE_DESCRIPTION: e.g., Audio of Bla Bla.]"
          },
          {
            id: "video-1",
            name: "TEMPLATE VIDEO",
            type: "video",
            url: "[INSERT_VIDEO_URL_HERE]",
            description: "[TEMPLATE_DESCRIPTION: e.g., Video of Bla Bla.]"
          }
        ],
        performances: [
          {
            id: "casa-ciencias",
            event: "IX Encontro Internacional da Casa das Ciências",
            date: "8 July 2024",
            performance_place: "Aveiro, Portugal [1]",
            description: "An early-stage performance showcasing a basic version of the system focused on distance-based navigation. Without a proper notation guide, the performer had to rely solely on intuition to navigate the complex sound space, which made it difficult to predict the system's response.",
            media_links: {
              photos: [
                {
                  url: "[INSERT_PHOTO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Photograph of Jorge Sousa performing with the early distance-based Aethra interface at Casa das Ciências.]"
                }
              ],
              videos: [
                {
                  url: "[INSERT_VIDEO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Video clip showing the initial, intuitive interaction with the high-dimensional latent space.]"
                }
              ]
            }
          },
          {
            id: "conservatorio-castilla",
            event: "\"La interpretación como medio creativo en la era post-digital,\" Conservatorio Superior de Música de Castilla-La Mancha",
            date: "1 April 2025",
            performance_place: "Albacete, Spain [1]",
            description: "Evaluation of the preliminary system utilizing distance-based navigation. Observations from this event emphasized the need for a more refined way to interpret gestures and a structured framework to support the performer's intentions.",
            media_links: {
              photos: [
                {
                  url: "[INSERT_PHOTO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Image of the live setup at the Conservatorio Superior de Música.]"
                }
              ],
              videos: [
                {
                  url: "[INSERT_VIDEO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Archival footage discussing the performative challenges without an auto-score.]"
                }
              ]
            }
          },
          {
            id: "amicad",
            event: "Audio Mostly & ICAD Joint Conference (AM.ICAD), Casa das Artes de Coimbra",
            date: "1 July 2025",
            performance_place: "Coimbra, Portugal [1]",
            description: "This performance featured an upgraded system equipped with motion awareness. By using Hidden Markov Models (HMMs) as a navigation strategy, the system transformed from simply responding to inputs to actively engaging the performer. This event also marked the introduction of the first auto-score.",
            media_links: {
              photos: [
                {
                  url: "[INSERT_PHOTO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Photo capturing the introduction of the auto-score and the performer's interaction with the HMM-driven system.]"
                }
              ],
              videos: [
                {
                  url: "[INSERT_VIDEO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Conference presentation demonstrating the transition from distance-based to motion-aware navigation.]"
                }
              ]
            }
          },
          {
            id: "fisp",
            event: "FISP - Festival Internacional de Saxofones de Palmela",
            date: "7 July 2025",
            performance_place: "Palmela, Portugal [1]",
            description: "Continued deployment of the motion-aware Aethra system, testing the active dialogue between the human performer and the machine utilizing the foundational auto-score.",
            media_links: {
              photos: [
                {
                  url: "[INSERT_PHOTO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Live performance shot at the FISP festival.]"
                }
              ],
              videos: [
                {
                  url: "[INSERT_VIDEO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Performance excerpt displaying the system's new proactive musical agency.]"
                }
              ]
            }
          },
          {
            id: "enim",
            event: "ENIM - Encontro Nacional de Investigação em Música",
            date: "29 Nov 2025",
            performance_place: "Évora, Portugal [1]",
            description: "During this performance, the system reached its current state of maturity. The integration of the one-knob control paradigm and the multimodal TouchDesigner visual interface enabled the performer to seamlessly engage in a contextual navigation of the work's universe.",
            media_links: {
              photos: [
                {
                  url: "[INSERT_PHOTO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Image showcasing the mature TouchDesigner visual engine projected during the performance.]"
                }
              ],
              videos: [
                {
                  url: "[INSERT_VIDEO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Full demonstration of the one-knob control paradigm in a live setting.]"
                }
              ]
            }
          },
          {
            id: "lagoa",
            event: "\"Ressonâncias do Presente: música para saxofone e multimédia,\" Saxophone Recital, Auditorio Carlos do Carmo",
            date: "11 Fev 2026",
            performance_place: "Lagoa, Portugal [1]",
            description: "A recital that solidified Aethra as a robust, mutable interface that has officially moved past the development phase into a stable framework.",
            media_links: {
              photos: [
                {
                  url: "[INSERT_PHOTO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Final live recital photograph of 'Echoes of the Unseen' showcasing the complete performative ecosystem.]"
                }
              ],
              videos: [
                {
                  url: "[INSERT_VIDEO_URL_HERE]",
                  description: "[TEMPLATE_DESCRIPTION: e.g., Live recital recording from the Auditorio Carlos do Carmo.]"
                }
              ]
            }
          },
          {
            id: "recording",
            event: "Professional Studio Recording and Documentation",
            date: "Late July 2026",
            performance_place: "Aveiro, Portugal [1]",
            description: "A planned professional studio session to thoroughly record and document the artistic and technical insights derived from the mature Echoes of the Unseen system.",
          }
        ]
      }
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
      doi: "10.48550/arXiv.2311.03621",
      pillar: "Tonal Pillar",
      github: "https://github.com/NadiaCarvalho/Latent-Tonal-Music",
      colab: "https://github.com/NadiaCarvalho/Latent-Tonal-Music/blob/main/Latent_Tonal_Music.ipynb"
    },
    {
      id: "smc-2024-sampling",
      title: "Exploring Sampling Strategies in Latent Spaces for Music Generation",
      author: "Carvalho, N., & Bernardes, G.",
      year: 2024,
      venue: "SMC 2024",
      doi: "10.5281/zenodo.14336029",
      pillar: "Tonal Pillar",
      github: "https://github.com/NadiaCarvalho/SMC-BachLatentNavigation",
      colab: "https://github.com/NadiaCarvalho/SMC-BachLatentNavigation/blob/main/BachLatentNavigation.ipynb"
    },
    {
      id: "mcm-2024-fourier",
      title: "Fourier Phase Spaces are in Tune with VAEs' Latent Space",
      author: "Carvalho, N., & Bernardes, G.",
      year: 2024,
      venue: "MCM 2024",
      doi: "10.1007/978-3-031-60638-0_24",
      pillar: "Tonal Pillar",
      github: "https://github.com/NadiaCarvalho/MCM-Latent-Spaces",
      colab: "https://github.com/NadiaCarvalho/MCM-Latent-Spaces/blob/main/MCM24_Latent_Spaces.ipynb"
    },
    {
      id: "smc-2024-sax",
      title: "Unveiling the Timbre Landscape: Analysis of Tenor Saxophone in RAVE Models",
      author: "Carvalho, N., Sousa, J., Bernardes, G., & Portovedo, H.",
      year: 2024,
      venue: "SMC 2024",
      doi: "10.5281/zenodo.14362599",
      pillar: "Timbre Pillar",
      github: "https://github.com/NadiaCarvalho/SMC-TimbreLandscape",
      colab: "https://github.com/NadiaCarvalho/SMC-TimbreLandscape/blob/main/Code.ipynb"
    },
    {
      id: "amicad-2025-motiv",
      title: "Motiv: A Dataset of Latent Space Representations of Musical Phrase Motions",
      author: "Carvalho, N., Sousa, J., Bernardes, G., & Portovedo, H.",
      year: 2025,
      venue: "AM.ICAD 2025",
      doi: "10.1145/3771594.3771602",
      pillar: "Timbre Pillar",
      github: "https://github.com/NadiaCarvalho/Motiv-Dataset",
      colab: ["https://github.com/NadiaCarvalho/Motiv-Dataset/blob/main/Dataset_Construction_Visualization.ipynb", "https://github.com/NadiaCarvalho/Motiv-Dataset/blob/main/Dataset_Analysis.ipynb"]
    },
    {
      id: "ijpadm-2025-timbre",
      title: "Exploring Timbre Latent Spaces: Motion-Enhanced Sampling for Musical Co-Improvisation",
      author: "Carvalho, N., Sousa, J., Bernardes, G., & Portovedo, H.",
      year: 2025,
      venue: "International Journal of Performance Arts and Digital Media",
      doi: "10.1080/14794713.2025.2536409",
      pillar: "Timbre Pillar",
      github: "https://github.com/NadiaCarvalho/IJPA-LatentSpace",
      colab: ["https://github.com/NadiaCarvalho/IJPA-LatentSpace/blob/main/PhraseRecordingsAnalysis.ipynb", "https://github.com/NadiaCarvalho/IJPA-LatentSpace/blob/main/Experiment1_Mechanisms.ipynb"]
    }
  ]
}