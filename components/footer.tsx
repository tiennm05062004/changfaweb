"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { getLocalizedProductCategories } from "@/lib/localized-products"
import { Locale, withLocale } from "@/lib/i18n"

const footerLabels: Record<Locale, {
  description: string
  pages: string
  home: string
  about: string
  products: string
  services: string
  contact: string
  productTitle: string
  contactTitle: string
  rights: string
  countryVn: string
  countryCn: string
  address: string
  hotline: string
  msHien: string
  msThu: string
}> = {
  vi: {
    description: "CHANGFA Steel - Nhà cung cấp vật liệu kim loại công nghiệp hàng đầu.",
    pages: "Trang",
    home: "Trang Chủ",
    about: "Giới Thiệu",
    products: "Sản Phẩm",
    services: "Dịch Vụ",
    contact: "Liên Hệ",
    productTitle: "Sản Phẩm",
    contactTitle: "Liên Hệ",
    rights: "All rights reserved.",
    countryVn: "Việt Nam",
    countryCn: "Trung Quốc",
    address: "Số 03, Lý Sơn, Ngọc Thụy, Long Biên, Hà Nội",
    hotline: "HOTLINE: 0981-063-023",
    msHien: "Ms. Hiền: 0975-330-960",
    msThu: "Ms. Thu: 0964-160-594",
  },
  en: {
    description: "CHANGFA Steel - Leading industrial metal material supplier.",
    pages: "Pages",
    home: "Home",
    about: "About",
    products: "Products",
    services: "Services",
    contact: "Contact",
    productTitle: "Products",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    countryVn: "Vietnam",
    countryCn: "China",
    address: "No. 03, Ly Son, Ngoc Thuy, Long Bien, Hanoi",
    hotline: "Hotline: 0981-063-023",
    msHien: "Ms. Hien: 0975-330-960",
    msThu: "Ms. Thu: 0964-160-594",
  },
  zh: {
    description: "CHANGFA Steel - 领先的工业金属材料供应商。",
    pages: "页面",
    home: "首页",
    about: "关于我们",
    products: "产品",
    services: "服务",
    contact: "联系我们",
    productTitle: "产品",
    contactTitle: "联系我们",
    rights: "版权所有。",
    countryVn: "越南",
    countryCn: "中国",
    address: "越南河内市龙边郡玉瑞坊李山路03号",
    hotline: "热线: 0981-063-023",
    msHien: "Hiền 女士: 0975-330-960",
    msThu: "Thu 女士: 0964-160-594",
  },
  ja: {
    description: "CHANGFA Steel - 工業用金属材料の主要サプライヤー。",
    pages: "ページ",
    home: "ホーム",
    about: "会社概要",
    products: "製品",
    services: "サービス",
    contact: "お問い合わせ",
    productTitle: "製品",
    contactTitle: "お問い合わせ",
    rights: "無断転載を禁じます。",
    countryVn: "ベトナム",
    countryCn: "中国",
    address: "ハノイ市ロンビエン区ゴックトゥイ、リーソン通り3番地",
    hotline: "ホットライン: 0981-063-023",
    msHien: "ヒエン: 0975-330-960",
    msThu: "トゥー: 0964-160-594",
  },
  ko: {
    description: "CHANGFA Steel - 산업용 금속 소재 선도 공급업체.",
    pages: "페이지",
    home: "홈",
    about: "회사소개",
    products: "제품",
    services: "서비스",
    contact: "문의",
    productTitle: "제품",
    contactTitle: "문의",
    rights: "모든 권리 보유.",
    countryVn: "베트남",
    countryCn: "중국",
    address: "하노이 롱비엔구 응옥투이, 리선 거리 03번지",
    hotline: "핫라인: 0981-063-023",
    msHien: "히엔: 0975-330-960",
    msThu: "투: 0964-160-594",
  },
}

export function Footer() {
  const { locale } = useLocale()
  const t = footerLabels[locale]
  const localizedCategories = getLocalizedProductCategories(locale)

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Thông tin công ty */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="CHANGFA Steel"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
              <span className="font-bold tracking-wide">
                <span className="text-red-600">CHANG</span>
                <span className="text-blue-600">FA</span>
              </span>
            </div>
            <p className="text-background/80 mb-4 text-pretty text-sm">
              {t.description}
            </p>
            <div className="flex items-center gap-2 text-background/80 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{t.address}</span>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.pages}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={withLocale("/", locale)} className="text-background/80 hover:text-accent transition-colors text-sm">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={withLocale("/gioi-thieu", locale)} className="text-background/80 hover:text-accent transition-colors text-sm">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href={withLocale("/san-pham", locale)} className="text-background/80 hover:text-accent transition-colors text-sm">
                  {t.products}
                </Link>
              </li>
              <li>
                <Link href={withLocale("/dich-vu", locale)} className="text-background/80 hover:text-accent transition-colors text-sm">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link href={withLocale("/lien-he", locale)} className="text-background/80 hover:text-accent transition-colors text-sm">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Danh mục sản phẩm */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.productTitle}</h4>
            <ul className="space-y-2">
              {localizedCategories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={withLocale(`/san-pham/danh-muc/${category.slug}`, locale)} 
                    className="text-background/80 hover:text-accent transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:0981063023" className="hover:text-accent transition-colors text-sm">
                  {t.hotline}
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:0975330960" className="hover:text-accent transition-colors text-sm">
                  {t.msHien}
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:0964160594" className="hover:text-accent transition-colors text-sm">
                  {t.msThu}
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:changfasteel@gmail.com" className="hover:text-accent transition-colors text-sm">
                  changfasteel@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} CHANGFA Steel Co., Ltd. {t.rights}
          </p>
          <div className="flex items-center gap-4 text-background/60 text-sm">
            <span>{t.countryVn}</span>
            <span>|</span>
            <span>{t.countryCn}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}