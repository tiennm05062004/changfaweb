import { notFound } from "next/navigation"
import { isSupportedLocale, supportedLocales } from "@/lib/i18n"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  if (!isSupportedLocale(locale)) {
    notFound()
  }

  return children
}
