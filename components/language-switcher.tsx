"use client"

import { ChevronDown } from "lucide-react"
import { Locale } from "@/lib/i18n"
import { useLocale } from "@/components/locale-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

  const currentLanguage =
    languageOptions.find((option) => option.locale === locale) ?? languageOptions[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        translate="no"
        className={`flex items-center gap-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground transition-colors ${
          compact ? "notranslate w-full justify-between px-3 py-2" : "notranslate px-3 py-2"
        }`}
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.label}</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={compact ? "start" : "end"}
        className={compact ? "notranslate w-full min-w-[220px]" : "notranslate min-w-[220px]"}
      >
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.locale}
            onClick={() => {
              setLocale(option.locale)
            }}
            className="notranslate cursor-pointer"
            translate="no"
          >
            <span className="mr-2">{option.flag}</span>
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
