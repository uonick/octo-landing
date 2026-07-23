export type Platform = 'mac' | 'windows' | 'linux'

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
