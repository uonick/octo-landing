export const initReveal = (): void => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        entry.target.setAttribute('data-revealed', '')
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.12 }
  )

  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
}

initReveal()
