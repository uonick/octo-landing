import {
  buildPrimaryButtonLabel,
  detectPlatform,
  getOtherPlatforms,
  getPlatformLabel,
  type Platform,
} from '../lib/download-platform'

type DownloadConfig = {
  version: string
  downloadLinks: Record<Platform, string>
}

const readDownloadConfig = (root: Element): DownloadConfig | null => {
  const rawConfig = root.getAttribute('data-download-config')
  if (!rawConfig) {
    return null
  }

  return JSON.parse(rawConfig) as DownloadConfig
}

export const initDownloadButtons = (): void => {
  document.querySelectorAll('[data-download-buttons]').forEach((root) => {
    const config = readDownloadConfig(root)
    if (!config) {
      return
    }

    const platform = detectPlatform()
    const primaryLink = root.querySelector('[data-download-primary]')
    const primaryLabel = root.querySelector('[data-download-primary-label]')

    if (!(primaryLink instanceof HTMLAnchorElement) || !(primaryLabel instanceof HTMLElement)) {
      return
    }

    primaryLink.href = config.downloadLinks[platform]
    primaryLabel.textContent = buildPrimaryButtonLabel(config.version, platform)

    const otherPlatforms = getOtherPlatforms(platform)
    const secondaryLinks = root.querySelectorAll('[data-download-secondary-link]')

    otherPlatforms.forEach((otherPlatform, index) => {
      const link = secondaryLinks[index]
      if (!(link instanceof HTMLAnchorElement)) {
        return
      }

      link.href = config.downloadLinks[otherPlatform]
      link.dataset.downloadSecondaryLink = otherPlatform
      link.textContent = getPlatformLabel(otherPlatform)
    })
  })
}

initDownloadButtons()
