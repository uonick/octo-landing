/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_DOWNLOAD_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
