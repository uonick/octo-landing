import packageJson from '../../package.json'

const GITHUB_DOWNLOAD_LINK =
  'https://github.com/uonick/octo-workspace/releases/download/%version%/OctoWorkspace-%version%-install.%ext%'

type DownloadLinks = {
  mac: string
  linux: string
  windows: string
}

export const getDownloadLinks = (): DownloadLinks => ({
  mac: GITHUB_DOWNLOAD_LINK.replaceAll('%version%', packageJson.version).replace('%ext%', 'dmg'),
  linux: GITHUB_DOWNLOAD_LINK.replaceAll('%version%', packageJson.version).replace('%ext%', 'deb'),
  windows: GITHUB_DOWNLOAD_LINK.replaceAll('%version%', packageJson.version).replace('%ext%', 'exe'),
})

export const getVersion = (): string => packageJson.version
