import { detectPlatform } from '../lib/download-platform'

export const initDownloadButtons = (): void => {
  const platform = detectPlatform()

  document.querySelectorAll<HTMLElement>('[data-download-platform]').forEach((element) => {
    element.hidden = element.dataset.downloadPlatform !== platform
  })
}

initDownloadButtons()
