export const supportedLocales = ["vi", "en", "zh", "ja", "ko"] as const

export type Locale = (typeof supportedLocales)[number]
export const LOCALE_COOKIE_NAME = "site-locale"

export const defaultLocale: Locale = "vi"

export function isSupportedLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0]
  if (segment && isSupportedLocale(segment)) {
    return segment
  }
  return defaultLocale
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    const stripped = segments.slice(1).join("/")
    return stripped ? `/${stripped}` : "/"
  }
  return pathname || "/"
}

export function withLocale(pathname: string, locale: Locale): string {
  void locale
  const normalized = stripLocalePrefix(pathname)
  return normalized === "" ? "/" : normalized
}

export function normalizeLocale(value?: string | null): Locale {
  if (value && isSupportedLocale(value)) {
    return value
  }
  return defaultLocale
}
