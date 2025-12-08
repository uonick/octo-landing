import { version } from '../../../package.json'

type DownloadLinks = {
  mac: string
  linux: string
  windows: string
}

export const getDownloadLinks = (): DownloadLinks => {
  const github = import.meta.env.VITE_GITHUB_DOWNLOAD_LINK
  return {
    mac: github.replaceAll('%version%', version).replace('%ext%', 'dmg'),
    linux: github.replaceAll('%version%', version).replace('%ext%', 'deb'),
    windows: github.replaceAll('%version%', version).replace('%ext%', 'exe')
  }
}

export const getVersion = (): string => version

