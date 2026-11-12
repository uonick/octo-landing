const showPreview = (root: Element, previewId: string): void => {
  root.querySelectorAll('[data-hero-preview]').forEach((preview) => {
    const isActive = preview.getAttribute('data-hero-preview') === previewId
    preview.setAttribute('aria-hidden', String(!isActive))
  })

  root.querySelectorAll('[data-hero-tag]').forEach((tag) => {
    const isActive = tag.getAttribute('data-hero-tag') === previewId
    tag.setAttribute('aria-pressed', String(isActive))
  })
}

export const initHeroScreenshots = (): void => {
  document.querySelectorAll('[data-hero-screenshots]').forEach((root) => {
    root.querySelectorAll('[data-hero-tag]').forEach((tag) => {
      tag.addEventListener('click', () => {
        const previewId = tag.getAttribute('data-hero-tag')
        if (!previewId) {
          return
        }

        showPreview(root, previewId)
      })
    })
  })
}

initHeroScreenshots()
