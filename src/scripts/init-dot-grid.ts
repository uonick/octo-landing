type Rgba = Readonly<{ red: number; green: number; blue: number; alpha: number }>

type PulledDot = {
  column: number
  row: number
  offsetX: number
  offsetY: number
  targetOffsetX: number
  targetOffsetY: number
  brightness: number
  targetBrightness: number
}

const DOT_RADIUS = 1
const COVER_RADIUS = 3
const NEIGHBOR_REACH = 2
const FOLLOW_RATE = 9
const LIT_ALPHA_BOOST = 0.22
const LIT_RADIUS_BOOST = 0.12
const PULL_SHARE = 0.25
const SETTLED_OFFSET = 0.04
const SETTLED_BRIGHTNESS = 0.01
const MAX_FRAME_SECONDS = 0.05

const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')

const parseRgba = (value: string): Rgba | null => {
  const channels = value.match(/[\d.]+/g)?.map(Number)
  if (!channels || channels.length < 3 || channels.some(Number.isNaN)) {
    return null
  }

  const [red, green, blue, alpha = 1] = channels
  return { red, green, blue, alpha }
}

const isTransparent = (color: string): boolean =>
  color === 'transparent' || color === 'rgba(0, 0, 0, 0)'

const readCoverColor = (root: HTMLElement): string => {
  for (let element: HTMLElement | null = root; element; element = element.parentElement) {
    const color = getComputedStyle(element).backgroundColor
    if (!isTransparent(color)) {
      return color
    }
  }

  return getComputedStyle(document.documentElement).backgroundColor
}

const readDotColor = (canvas: HTMLCanvasElement): Rgba | null =>
  parseRgba(getComputedStyle(canvas).color)

const mountDotGrid = (root: HTMLElement, layer: HTMLElement, canvas: HTMLCanvasElement): void => {
  const context = canvas.getContext('2d')
  const initialDotColor = readDotColor(canvas)
  if (!context || !initialDotColor) {
    return
  }

  const pulledDots = new Map<string, PulledDot>()
  let dotColor: Rgba = initialDotColor
  let coverColor = readCoverColor(root)
  let spacing = 0
  let viewWidth = 0
  let viewHeight = 0
  let frame = 0

  const dotCenter = (index: number): number => spacing / 2 + index * spacing

  const draw = (): void => {
    context.clearRect(0, 0, viewWidth, viewHeight)
    const litAlpha = Math.min(0.92, dotColor.alpha + LIT_ALPHA_BOOST)

    for (const pulled of pulledDots.values()) {
      const centerX = dotCenter(pulled.column)
      const centerY = dotCenter(pulled.row)

      context.globalAlpha = 1
      context.fillStyle = coverColor
      context.beginPath()
      context.arc(centerX, centerY, COVER_RADIUS, 0, Math.PI * 2)
      context.fill()

      context.globalAlpha = dotColor.alpha + (litAlpha - dotColor.alpha) * pulled.brightness
      context.fillStyle = `rgb(${dotColor.red} ${dotColor.green} ${dotColor.blue})`
      context.beginPath()
      context.arc(
        centerX + pulled.offsetX,
        centerY + pulled.offsetY,
        DOT_RADIUS + LIT_RADIUS_BOOST * pulled.brightness,
        0,
        Math.PI * 2
      )
      context.fill()
    }

    context.globalAlpha = 1
  }

  const resize = (): void => {
    spacing = Number.parseFloat(getComputedStyle(layer).backgroundSize)
    viewWidth = layer.clientWidth
    viewHeight = layer.clientHeight
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 3)
    canvas.width = Math.max(1, Math.round(viewWidth * pixelRatio))
    canvas.height = Math.max(1, Math.round(viewHeight * pixelRatio))
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    draw()
  }

  const release = (): void => {
    for (const pulled of pulledDots.values()) {
      pulled.targetOffsetX = 0
      pulled.targetOffsetY = 0
      pulled.targetBrightness = 0
    }
  }

  const aim = (pointerX: number, pointerY: number): void => {
    release()
    const column = Math.round((pointerX - spacing / 2) / spacing)
    const row = Math.round((pointerY - spacing / 2) / spacing)
    const maxPull = spacing * PULL_SHARE

    for (let rowOffset = -NEIGHBOR_REACH; rowOffset <= NEIGHBOR_REACH; rowOffset += 1) {
      for (let columnOffset = -NEIGHBOR_REACH; columnOffset <= NEIGHBOR_REACH; columnOffset += 1) {
        const dotColumn = column + columnOffset
        const dotRow = row + rowOffset
        if (dotColumn < 0 || dotRow < 0) {
          continue
        }

        const deltaX = pointerX - dotCenter(dotColumn)
        const deltaY = pointerY - dotCenter(dotRow)
        const distance = Math.hypot(deltaX, deltaY)
        const pullRatio = distance === 0 ? 0 : Math.min(maxPull, distance) / distance
        const key = `${dotColumn}:${dotRow}`
        const pulled = pulledDots.get(key) ?? {
          column: dotColumn,
          row: dotRow,
          offsetX: 0,
          offsetY: 0,
          targetOffsetX: 0,
          targetOffsetY: 0,
          brightness: 0,
          targetBrightness: 0
        }

        pulled.targetOffsetX = deltaX * pullRatio
        pulled.targetOffsetY = deltaY * pullRatio
        pulled.targetBrightness = 1
        pulledDots.set(key, pulled)
      }
    }
  }

  const ease = (deltaSeconds: number): boolean => {
    const blend = 1 - Math.exp(-FOLLOW_RATE * deltaSeconds)
    let isMoving = false

    for (const [key, pulled] of pulledDots) {
      pulled.offsetX += (pulled.targetOffsetX - pulled.offsetX) * blend
      pulled.offsetY += (pulled.targetOffsetY - pulled.offsetY) * blend
      pulled.brightness += (pulled.targetBrightness - pulled.brightness) * blend

      const offsetGap = Math.hypot(
        pulled.targetOffsetX - pulled.offsetX,
        pulled.targetOffsetY - pulled.offsetY
      )
      const brightnessGap = Math.abs(pulled.targetBrightness - pulled.brightness)
      if (offsetGap >= SETTLED_OFFSET || brightnessGap >= SETTLED_BRIGHTNESS) {
        isMoving = true
        continue
      }

      if (pulled.targetBrightness === 0) {
        pulledDots.delete(key)
      }
    }

    return isMoving
  }

  const animate = (): void => {
    if (frame !== 0) {
      return
    }

    let last = performance.now()
    const step = (now: number): void => {
      const deltaSeconds = Math.min(MAX_FRAME_SECONDS, (now - last) / 1000)
      last = now
      const isMoving = ease(deltaSeconds)
      draw()
      frame = isMoving ? requestAnimationFrame(step) : 0
    }
    frame = requestAnimationFrame(step)
  }

  root.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') {
      return
    }

    const bounds = canvas.getBoundingClientRect()
    aim(event.clientX - bounds.left, event.clientY - bounds.top)
    animate()
  })

  root.addEventListener('pointerleave', () => {
    release()
    animate()
  })

  darkSchemeQuery.addEventListener('change', () => {
    dotColor = readDotColor(canvas) ?? dotColor
    coverColor = readCoverColor(root)
    draw()
  })

  new ResizeObserver(resize).observe(layer)
}

export const initDotGrids = (): void => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  document.querySelectorAll<HTMLElement>('[data-dot-grid]').forEach((root) => {
    const canvas = root.querySelector('[data-dot-grid-canvas]')
    const layer = canvas?.parentElement
    if (!(canvas instanceof HTMLCanvasElement) || !layer) {
      return
    }

    mountDotGrid(root, layer, canvas)
  })
}

initDotGrids()
