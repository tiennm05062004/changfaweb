"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLocale } from "@/components/locale-provider"
import { getLocalizedProductCategories } from "@/lib/localized-products"
import { getLocalizedServices } from "@/lib/services-data"
import { Locale, withLocale } from "@/lib/i18n"

const navLabels: Record<Locale, { home: string; about: string; products: string; services: string; news: string; careers: string; contact: string; allProducts: string; contactNow: string; slogan: string }> = {
  vi: {
    home: "Trang Chủ",
    about: "Giới Thiệu",
    products: "Sản Phẩm",
    services: "Dịch Vụ",
    news: "Tin tức",
    careers: "Tuyển dụng",
    contact: "Liên Hệ",
    allProducts: "Tất Cả Sản Phẩm",
    contactNow: "Liên Hệ Ngay",
    slogan: "Thép Chất Lượng - Uy Tín Hàng Đầu",
  },
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    services: "Services",
    news: "News",
    careers: "Careers",
    contact: "Contact",
    allProducts: "All Products",
    contactNow: "Contact Now",
    slogan: "Quality Steel - Trusted Partner",
  },
  zh: {
    home: "首页",
    about: "关于我们",
    products: "产品",
    services: "服务",
    news: "新闻",
    careers: "招聘",
    contact: "联系我们",
    allProducts: "全部产品",
    contactNow: "立即联系",
    slogan: "高品质钢材 - 值得信赖",
  },
  ja: {
    home: "ホーム",
    about: "会社概要",
    products: "製品",
    services: "サービス",
    news: "ニュース",
    careers: "採用",
    contact: "お問い合わせ",
    allProducts: "すべての製品",
    contactNow: "今すぐ連絡",
    slogan: "高品質鋼材 - 信頼のパートナー",
  },
  ko: {
    home: "홈",
    about: "회사소개",
    products: "제품",
    services: "서비스",
    news: "뉴스",
    careers: "채용",
    contact: "문의",
    allProducts: "전체 제품",
    contactNow: "지금 문의",
    slogan: "고품질 강재 - 신뢰 파트너",
  },
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { locale: currentLocale } = useLocale()
  const t = navLabels[currentLocale]
  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/gioi-thieu" },
    {
      key: "products",
      href: "/san-pham",
      children: getLocalizedProductCategories(currentLocale).map((cat) => ({
        name: cat.name,
        href: `/san-pham/danh-muc/${cat.slug}`,
      })),
    },
    {
      key: "services",
      href: "/dich-vu",
      children: getLocalizedServices(currentLocale).map((service) => ({
        name: service.name,
        href: `/dich-vu/${service.slug}`,
      })),
    },
    { key: "news", href: "/tin-tuc" },
    { key: "careers", href: "/tuyen-dung" },
    { key: "contact", href: "/lien-he" },
  ]

  const isActive = (href: string) => {
    const localizedHref = withLocale(href, currentLocale)
    if (href === "/") {
      return pathname === localizedHref || pathname === "/"
    }
    return pathname.startsWith(localizedHref)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-3.5 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:0981063023" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span>0981-063-023</span>
            </a>
            <a href="mailto:changfasteel@gmail.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">changfasteel@gmail.com</span>
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href={withLocale("/", currentLocale)} className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="CHANGFA Steel"
              width={160}
              height={48}
              className="h-13 w-auto object-contain"
              priority
            />
            <span className="text-lg font-bold tracking-wide">
              <span className="text-red-600">CHANG</span>
              <span className="text-blue-600">FA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-base">
            {navItems.map((item) => (
              item.children ? (
                <DropdownMenu key={item.key}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 font-medium transition-colors ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}>
                    {t[item.key as keyof typeof t]}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href={withLocale(item.href, currentLocale)} className="cursor-pointer font-medium">
                        {t.allProducts}
                      </Link>
                    </DropdownMenuItem>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={withLocale(child.href, currentLocale)} className="cursor-pointer">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.key}
                  href={withLocale(item.href, currentLocale)}
                  className={`font-medium transition-colors ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {t[item.key as keyof typeof t]}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={withLocale("/lien-he", currentLocale)}>{t.contactNow}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.key}>
                  <Link
                    href={withLocale(item.href, currentLocale)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {t[item.key as keyof typeof t]}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={withLocale(child.href, currentLocale)}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <LanguageSwitcher compact />
              <Button 
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-2"
              >
                <Link href={withLocale("/lien-he", currentLocale)} onClick={() => setIsMenuOpen(false)}>
                  {t.contactNow}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
