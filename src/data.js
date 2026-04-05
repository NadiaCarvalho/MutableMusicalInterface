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
      description: "BroadcastJSB transforms the J.S. Bach corpus into a fluid, navigable territory. Designed as a vintage analog radio, this interactive web application allows users to 'detune' original Bach compositions by turning a dial, seamlessly navigating a 256-dimensional AI-generated space. As users introduce drift, the system dynamically reharmonizes the music. Depending on the selected decoder strategy, the application can generate localized common-tone substitutions, calculate synthetic geometric midpoints, or propel the harmonic sequence into highly chromatic, high-entropy territories while strictly preserving the directional voice-leading of the original style",
      "study_case": {
        "name": "BWV 269",
        "description": "An evaluation of the first phrase of J.S. Bach's Chorale BWV 269 in G Major to illustrate embodied music analysis within the BroadcastJSB system. The original 15-slice progression, moving from a tonic to a dominant half cadence, acts as a baseline to explore how different sampling strategies can dynamically dismantle, preserve, or extrapolate functional syntax and tonal momentum across varying levels of spatial interference.",
        "examples": [
          {
            "id": "bwv269-original",
            "name": "BWV 269 (Original)",
            "type": "video&image",
            "url_video": "[INSERT_VIDEO_URL_HERE]",
            "url_image": "https://drive.google.com/file/d/1xY7ngfeqwicvP37AjHc5NVhBC4pCMarV/preview",
            "description": "Original score of the initial phrase of J.S. Bach's Chorale BWV 269 in G Major, demonstrating a functionally varied common-practice progression."
          },
          {
            "id": "bwv269-midpoint",
            "name": "BWV 269 (MIDPOINT Strategy)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1eD10DaPqhgjxGzlV-hWc4y0iopWpptmT/preview",
            "url_image": "https://drive.google.com/file/d/1W3ACF_5OQhPZ-T8ABd3d8MhjSdZvqigd/preview",
            "description": "Synthetic transition generated via the MIDPOINT (Linear Interpolation) strategy, illustrating a 'latent dead zone' where the straight-line mathematical average becomes trapped within a statistically dense subdominant cluster, neutralizing the original cadential tension."
          },
          {
            "id": "bwv269-near-v01",
            "name": "BWV 269 (NEAR Strategy v=0.1)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1PwJBuPMkmXKM6S3QYC89MJuYjav_-14i/preview",
            "url_image": "https://drive.google.com/file/d/1LEtxQVLXVMYfWa4jPXKwMThRurpGcPR2/preview",
            "description": "At v=0.1, the system exhibits high structural fidelity, preserving the underlying functional syntax with only minor localized variation (e.g., substituting iii6 with vi4)."
          },
          {
            "id": "bwv269-near-v05",
            "name": "BWV 269 (NEAR Strategy v=0.5)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1Zgw2FqJqXZ2zQ_j2SOMJ_GlIeOnZx0Bo/preview",
            "url_image": "https://drive.google.com/file/d/12tnNs84u_PmAjvd2TDLdvJl7Bh0_Ysgj/preview",
            "description": "At v=0.5, a moderate spatial expansion introduces further stylistically coherent structural substitutions."
          },
          {
            "id": "bwv269-near-v09",
            "name": "BWV 269 (NEAR Strategy v=0.9)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1gA0a5Q8DeqMmauRD-arC-TAtrkaTGwyH/preview",
            "url_image": "https://drive.google.com/file/d/1v5UH3TFhOsp_SlcUMTZ90njO8cXJTpuB/preview",
            "description": "At v=0.9, the progression grows substantially more complex, sampling dense, highly chromatic vertical sonorities (e.g., ii∅65♭3 and IV6♭5) that strictly belong to the established corpus."
          },
          {
            "id": "bwv269-near-v10",
            "name": "BWV 269 (NEAR Strategy v=1.0)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1xYxJnsPxOr_JUazX851lzOCnenxWYIry/preview",
            "url_image": "https://drive.google.com/file/d/1yJWHRK7qzCsZyP1e1_jpkzGlBqBSmLgU/preview",
            "description": "At v=1.0, stylistic integrity completely breaks down; structural coherence dissolves, and the final cadential resolution is neutralized by functionally ambiguous, high-entropy aggregates such as ♭iii742."
          },
          {
            "id": "bwv269-vector-v01",
            "name": "BWV 269 (VECTOR Strategy v=0.1)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1FU6gi4vYINeXzq0NwLjAW21K0eTGyoZG/preview",
            "url_image": "https://drive.google.com/file/d/1Jv-r517TtTbJxsQz4Xn_ISySo9JAz2ff/preview",
            "description": "At v=0.1, the progression exhibits immediate structural divergence, establishing a new functional path (e.g., shifting from I to VI by the second chord)."
          },
          {
            "id": "bwv269-vector-v05",
            "name": "BWV 269 (VECTOR Strategy v=0.5)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1rOye_tejMtbAEhYPM8p0aG2EIdza2xdg/preview",
            "url_image": "https://drive.google.com/file/d/1LSTG-qUNlL_U8YSOSNR1w61wUzTKPY2C/preview",
            "description": "At v=0.5, the sustained angular displacement propels the harmony into denser, highly chromatic regions of the manifold, generating intentional momentum sonorities such as ♭II6♯53 and vii∅6543."
          },
          {
            "id": "bwv269-vector-v09",
            "name": "BWV 269 (VECTOR Strategy v=0.9)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1Ra0_ly5uQM8RtdlmBETmndmb1cT0RCvT/preview",
            "url_image": "https://drive.google.com/file/d/1HQKHiGxbfUyRfKFOmPv2bZw1eMOv5H4C/preview",
            "description": "At v=0.9, the continuous geometric extrapolation forces the sequence into a specific mathematical 'sink' or functionally ambiguous 'interstation noise' region."
          },
          {
            "id": "bwv269-vector-v10",
            "name": "BWV 269 (VECTOR Strategy v=1.0)",
            "type": "video&image",
            "url_video": "https://drive.google.com/file/d/1xGDXB7J2VlbX1VrBVG778MD_8LlsQQlJ/preview",
            "url_image": "https://drive.google.com/file/d/1U2zD1C4pBDzLmTDLsE6Eq-ncnCfVzFMH/preview",
            "description": "At v=1.0, the trajectory reliably converges on the high-entropy aggregate ♯vi◦♭642, fully dissolving the traditional boundaries of the established diatonic grammar."
          }
        ]
      }
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
        description: "Echoes of the Unseen is a 10-minute AI-mediated co-improvisation for tenor saxophone and live electronics, conceived and performed by Jorge Sousa and Nádia Carvalho. The work explores the boundaries of AI-driven improvisational music by utilizing the Aethra system to navigate timbre latent spaces, building upon a remixed pre-recorded track based on Jesús Villa-Rojo’s Lamento (1989). To manage the vulnerability of free improvisation, the performance is guided by an 'auto-score' and structured around a one-knob control paradigm (the closeness parameter), which dictates the system's fidelity to the original audio. Furthermore, the performance incorporates a visual engine developed in TouchDesigner, which projects the system's algorithmic navigation as a 2D point cloud to serve as a cognitive bridge for the audience.",
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
            performance_place: "Aveiro, Portugal",
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
            performance_place: "Albacete, Spain",
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
            performance_place: "Coimbra, Portugal",
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
            performance_place: "Palmela, Portugal",
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
            performance_place: "Évora, Portugal",
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
            performance_place: "Lagoa, Portugal",
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
            performance_place: "Aveiro, Portugal",
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