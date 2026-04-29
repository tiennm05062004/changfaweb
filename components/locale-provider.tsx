"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import {
  LOCALE_COOKIE_NAME,
  Locale,
  defaultLocale,
  isSupportedLocale,
  normalizeLocale,
} from "@/lib/i18n"

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)
const STORAGE_KEY = "site-locale"

function getLocaleFromCountryCode(countryCode?: string): Locale | null {
  if (!countryCode) return null
  const normalized = countryCode.toUpperCase()
  if (normalized === "VN") return "vi"
  if (normalized === "CN" || normalized === "TW" || normalized === "HK" || normalized === "MO") return "zh"
  if (normalized === "JP") return "ja"
  if (normalized === "KR") return "ko"
  return null
}

function getCountryCodeFromLanguageTag(tag?: string): string | null {
  if (!tag) return null
  const parts = tag.split("-")
  if (parts.length < 2) return null
  return parts[parts.length - 1] ?? null
}

function getLocaleFromTimezone(timezone?: string): Locale | null {
  if (!timezone) return null
  if (timezone.startsWith("Asia/Ho_Chi_Minh")) return "vi"
  if (timezone.startsWith("Asia/Shanghai") || timezone.startsWith("Asia/Hong_Kong") || timezone.startsWith("Asia/Taipei")) return "zh"
  if (timezone.startsWith("Asia/Tokyo")) return "ja"
  if (timezone.startsWith("Asia/Seoul")) return "ko"
  return null
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en"

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && isSupportedLocale(saved)) return saved

  const cookieLocale = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${LOCALE_COOKIE_NAME}=`))
    ?.split("=")[1]
  if (cookieLocale && isSupportedLocale(cookieLocale)) return cookieLocale

  const detectedFromLanguages =
    getLocaleFromCountryCode(getCountryCodeFromLanguageTag(navigator.language)) ||
    navigator.languages
      .map((lang) => getLocaleFromCountryCode(getCountryCodeFromLanguageTag(lang)))
      .find((locale): locale is Locale => locale !== null)
  if (detectedFromLanguages) return detectedFromLanguages

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const detectedFromTimezone = getLocaleFromTimezone(timezone)
  if (detectedFromTimezone) return detectedFromTimezone

  return "en"
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode
  initialLocale?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? defaultLocale)
  const [isLocaleReady, setIsLocaleReady] = useState(false)

  useEffect(() => {
    const initial = normalizeLocale(initialLocale ?? getInitialLocale())
    setLocaleState(initial)
    setIsLocaleReady(true)
  }, [initialLocale])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.cookie = `${LOCALE_COOKIE_NAME}=${locale};path=/;max-age=31536000`
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => {
        // Persist immediately so server refresh reads the new locale cookie.
        document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale};path=/;max-age=31536000`
        window.localStorage.setItem(STORAGE_KEY, nextLocale)
        document.documentElement.lang = nextLocale
        setLocaleState(nextLocale)
      },
    }),
    [locale],
  )

  if (!isLocaleReady) {
    return <div className="min-h-screen bg-background" />
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider")
  }
  return context
}
