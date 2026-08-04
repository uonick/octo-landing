import packageJson from '../../package.json'

const GITHUB_DOWNLOAD_LINK =
  'https://github.com/uonick/octo-workspace/releases/download/%version%/OctoWorkspace-%version%-install.%ext%'

export const APP_STORE_LINK =
  'https://apps.apple.com/ru/app/octoworkspace/id6794809306?l=en-GB&mt=12'

export type DownloadLinks = {
  mac: string
  appStore: string
  linux: string
  windows: string
}

export const getDownloadLinks = (): DownloadLinks => ({
  mac: GITHUB_DOWNLOAD_LINK.replaceAll('%version%', packageJson.version).replace('%ext%', 'dmg'),
  appStore: APP_STORE_LINK,
  linux: GITHUB_DOWNLOAD_LINK.replaceAll('%version%', packageJson.version).replace('%ext%', 'deb'),
  windows: GITHUB_DOWNLOAD_LINK.replaceAll('%version%', packageJson.version).replace('%ext%', 'exe'),
})

export const getVersion = (): string => packageJson.version
