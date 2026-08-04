import type { DownloadLinks } from './download-links'

export type Platform = 'mac' | 'windows' | 'linux'

export type SecondaryDownloadLink = {
  key: string
  href: string
  label: string
}

export const DEFAULT_PLATFORM: Platform = 'mac'

export const PLATFORMS: Platform[] = ['mac', 'windows', 'linux']

const PLATFORM_LABEL: Record<Platform, string> = {
  mac: 'macOS',
  windows: 'Windows',
  linux: 'Linux',
}

export const getPlatformLabel = (platform: Platform): string => PLATFORM_LABEL[platform]

export const getOtherPlatforms = (platform: Platform): Platform[] =>
  PLATFORMS.filter((item) => item !== platform)

export const buildPrimaryButtonLabel = (version: string, platform: Platform): string =>
  `Скачать ${version} для ${getPlatformLabel(platform)}`

export const getSecondaryDownloadLinks = (
  platform: Platform,
  downloadLinks: DownloadLinks,
): SecondaryDownloadLink[] => {
  const otherPlatforms = getOtherPlatforms(platform).map((otherPlatform) => ({
    key: otherPlatform,
    href: downloadLinks[otherPlatform],
    label: getPlatformLabel(otherPlatform),
  }))

  if (platform === 'mac') {
    return [
      { key: 'appStore', href: downloadLinks.appStore, label: 'App Store' },
      ...otherPlatforms,
    ]
  }

  return [
    ...otherPlatforms,
    { key: 'appStore', href: downloadLinks.appStore, label: 'App Store' },
  ]
}

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    platform?: string
  }
}

export const detectPlatform = (): Platform => {
  if (typeof navigator === 'undefined') {
    return DEFAULT_PLATFORM
  }

  const browserNavigator = navigator as NavigatorWithUserAgentData
  const userAgent = browserNavigator.userAgent.toLowerCase()
  const platform = (
    browserNavigator.userAgentData?.platform ??
    browserNavigator.platform ??
    ''
  ).toLowerCase()

  if (platform.includes('mac') || userAgent.includes('mac')) {
    return 'mac'
  }

  if (platform.includes('win') || userAgent.includes('windows')) {
    return 'windows'
  }

  if (platform.includes('linux') || userAgent.includes('linux') || userAgent.includes('x11')) {
    return 'linux'
  }

  return DEFAULT_PLATFORM
}
