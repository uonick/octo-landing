import type { DownloadLinks } from '../lib/download-links'
import {
  buildPrimaryButtonLabel,
  detectPlatform,
  getSecondaryDownloadLinks,
  type Platform,
} from '../lib/download-platform'

type DownloadConfig = {
  version: string
  downloadLinks: DownloadLinks
}

const readDownloadConfig = (root: Element): DownloadConfig | null => {
  const rawConfig = root.getAttribute('data-download-config')
  if (!rawConfig) {
    return null
  }

  return JSON.parse(rawConfig) as DownloadConfig
}

const syncSecondaryLinks = (
  root: Element,
  platform: Platform,
  downloadLinks: DownloadLinks,
): void => {
  const secondaryLinks = getSecondaryDownloadLinks(platform, downloadLinks)
  const secondaryRoot = root.querySelector('[data-download-secondary]')
  if (!(secondaryRoot instanceof HTMLElement)) {
    return
  }

  const parts: string[] = ['а&nbsp;также&nbsp;']

  secondaryLinks.forEach((link, index) => {
    if (index > 0) {
      parts.push(index === secondaryLinks.length - 1 ? '&nbsp;и&nbsp;' : ',&nbsp;')
    }

    const externalAttributes =
      link.key === 'appStore' ? ' target="_blank" rel="noreferrer"' : ''

    parts.push(
      `<a data-download-secondary-link="${link.key}" href="${link.href}" class="font-medium text-brand underline-offset-4 transition-colors hover:underline"${externalAttributes}>${link.label}</a>`,
    )
  })

  secondaryRoot.innerHTML = parts.join('')
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

    syncSecondaryLinks(root, platform, config.downloadLinks)
  })
}

initDownloadButtons()
