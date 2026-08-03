const ACTIVE_TAG_CLASS = [
  'bg-brand',
  'text-white',
  'shadow-[0_4px_16px_-4px_rgba(94,106,210,0.55)]',
]

const IDLE_TAG_CLASS = [
  'bg-surface-2',
  'text-ink-subtle',
  'hover:bg-surface-3',
  'hover:text-ink',
]

const setTagActive = (tag: HTMLElement, isActive: boolean): void => {
  tag.setAttribute('aria-pressed', String(isActive))
  ACTIVE_TAG_CLASS.forEach((className) => tag.classList.toggle(className, isActive))
  IDLE_TAG_CLASS.forEach((className) => tag.classList.toggle(className, !isActive))
}

const showPreview = (root: Element, previewId: string): void => {
  root.querySelectorAll('[data-hero-preview]').forEach((preview) => {
    const isActive = preview.getAttribute('data-hero-preview') === previewId
    preview.classList.toggle('opacity-100', isActive)
    preview.classList.toggle('pointer-events-auto', isActive)
    preview.classList.toggle('opacity-0', !isActive)
    preview.classList.toggle('pointer-events-none', !isActive)
    preview.toggleAttribute('aria-hidden', !isActive)
  })

  root.querySelectorAll<HTMLElement>('[data-hero-tag]').forEach((tag) => {
    setTagActive(tag, tag.getAttribute('data-hero-tag') === previewId)
  })
}

export const initHeroScreenshots = (): void => {
  document.querySelectorAll('[data-hero-screenshots]').forEach((root) => {
    const tags = root.querySelectorAll<HTMLElement>('[data-hero-tag]')

    tags.forEach((tag) => {
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
