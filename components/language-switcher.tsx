"use client"

import { Locale } from "@/lib/i18n"
import { useLocale } from "@/components/locale-provider"

interface LanguageOption {
  locale: Locale
  flag: string
  label: string
}

const languageOptions: LanguageOption[] = [
  { locale: "vi", flag: "🇻🇳", label: "Tiếng Việt" },
  { locale: "en", flag: "🇬🇧", label: "English" },
  { locale: "zh", flag: "🇨🇳", label: "中文" },
  { locale: "ja", flag: "🇯🇵", label: "日本語" },
  { locale: "ko", flag: "🇰🇷", label: "한국어" },
]

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLocale()

  return (
    <div className={`notranslate flex items-center ${compact ? "gap-2 py-2" : "gap-2"}`} translate="no">
      {languageOptions.map((option) => (
        <button
          key={option.locale}
          type="button"
          onClick={() => setLocale(option.locale)}
          className={`rounded-md border px-2.5 py-1.5 text-base leading-none transition-colors ${
            locale === option.locale
              ? "border-primary bg-primary/10"
              : "border-border hover:bg-muted"
          }`}
          aria-label={option.label}
          title={option.label}
        >
          {option.flag}
        </button>
      ))}
    </div>
  )
}
