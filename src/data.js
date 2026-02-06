export const researchData = {
  title: "The Musical Work as a Mutable Interface",
  author: "Nádia Carvalho",
  githubList: "https://github.com/stars/NadiaCarvalho/lists/phd-musicalwork-mutableinterface",
  apps: [
    { name: "BroadcastJSB", url: "https://nadiacarvalho.github.io/BroadcastJSB/", repo: "github.com/NadiaCarvalho/Broadcast.JSB" },
    { name: "Bach Latent Navigator", url: "https://nadiacarvalho.github.io/BachLatentNavigator/", repo: "github.com/NadiaCarvalho/BachLatentNavigator" }
  ],
  datasets: [
    { name: "Motiv Dataset", doi: "10.7910/DVN/RWCG4B" },
    { name: "SaxTimbre", doi: "10.7910/DVN/WSFBIJ" }
  ],
  colabs: [
    { name: "Unveiling Sax Timbre", file: "Unveriling_Sax_Timbre.ipynb" },
    { name: "MCM24 Latent Spaces", file: "MCM24_Latent_Spaces.ipynb" }
  ],
  publications: [
    {
      id: "tonal-vae-2023",
      title: "Exploring Latent Spaces of Tonal Music using Variational Autoencoders",
      venue: "AIMC 2023",
      doi: "2311.03621",
      abstract: "Investigates the alignment of VAE latent spaces with cognitive tonal distance spaces.",
      pillar: "Tonal",
      colab: "Latent_Tonal_Music.ipynb"
    },
    {
      id: "sampling-strategies-2024",
      title: "Exploring Sampling Strategies in Latent Spaces for Music Generation",
      venue: "SMC 2024",
      doi: "10.5281/zenodo.14336029",
      abstract: "Compares Linear Interpolation, k-NN, and k-NN with Angular Displacement.",
      pillar: "Tonal",
      app: "Bach Latent Navigator"
    },
    {
      id: "fourier-phase-2024",
      title: "Fourier (Common-Tone) Phase Spaces are in Tune with VAEs' Latent Space",
      venue: "MCM 2024",
      doi: "10.1007/978-3-031-60638-0_24",
      abstract: "Quantifies the geometric alignment between learned latent manifolds and DFT phase spaces.",
      pillar: "Tonal"
    },
    {
      id: "sax-timbre-rave-2024",
      title: "Unveiling the Timbre Landscape: A Layered Analysis of Tenor Saxophone in RAVE Models",
      venue: "SMC 2024",
      doi: "10.5281/zenodo.14362599",
      abstract: "Analyzes how RAVE models cluster extended saxophone techniques.",
      pillar: "Timbre",
      dataset: "SaxTimbre"
    }
  ]
}