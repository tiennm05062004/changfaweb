"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"
import {
  getLocalizedCategoriesBySlugs,
  getLocalizedProductCategories,
  getLocalizedProductCategoryGroups,
} from "@/lib/localized-products"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const productPageCopy: Record<Locale, any> = {
  vi: {
    heroTag: "Sản Phẩm",
    heroTitle: "Danh Mục Sản Phẩm",
    heroDesc: "Thép khuôn, thép chế tạo, thép công cụ; sản phẩm khác: đồng, nhôm, titan, inox.",
    items: "mục",
    others: "khác",
    viewDetail: "Xem chi tiết",
    allProductsTag: "Tất Cả Sản Phẩm",
    allProductsTitle: "Danh Sách Sản Phẩm",
    steelGrades: "Mác thép:",
    productDetail: "Chi tiết sản phẩm",
    ctaTitle: "Cần Tư Vấn Sản Phẩm?",
    ctaDesc: "Đội ngũ kỹ thuật của chúng tôi sẵn sàng tư vấn giúp bạn lựa chọn loại thép phù hợp nhất cho nhu cầu sản xuất.",
    contactNow: "Liên Hệ Ngay",
  },
  en: {
    heroTag: "Products",
    heroTitle: "Product Categories",
    heroDesc: "Mold steel, engineering steel, tool steel and others: copper, aluminum, titanium, stainless steel.",
    items: "items",
    others: "more",
    viewDetail: "View details",
    allProductsTag: "All Products",
    allProductsTitle: "Product List",
    steelGrades: "Steel grades:",
    productDetail: "Product details",
    ctaTitle: "Need Product Consultation?",
    ctaDesc: "Our technical team is ready to help you choose the best steel grade for your production needs.",
    contactNow: "Contact Now",
  },
  zh: {
    heroTag: "产品",
    heroTitle: "产品分类",
    heroDesc: "模具钢、机械钢、工具钢及其他：铜、铝、钛、不锈钢。",
    items: "项",
    others: "其他",
    viewDetail: "查看详情",
    allProductsTag: "全部产品",
    allProductsTitle: "产品列表",
    steelGrades: "钢种:",
    productDetail: "产品详情",
    ctaTitle: "需要产品咨询？",
    ctaDesc: "我们的技术团队可协助您选择最适合生产需求的钢材。",
    contactNow: "立即联系",
  },
  ja: {
    heroTag: "製品",
    heroTitle: "製品カテゴリ",
    heroDesc: "金型鋼、機械構造用鋼、工具鋼、その他：銅・アルミ・チタン・ステンレス。",
    items: "件",
    others: "その他",
    viewDetail: "詳細を見る",
    allProductsTag: "すべての製品",
    allProductsTitle: "製品一覧",
    steelGrades: "鋼種:",
    productDetail: "製品詳細",
    ctaTitle: "製品相談が必要ですか？",
    ctaDesc: "技術チームが用途に最適な鋼種選定をサポートします。",
    contactNow: "今すぐ連絡",
  },
  ko: {
    heroTag: "제품",
    heroTitle: "제품 카테고리",
    heroDesc: "금형강, 기계강, 공구강 및 기타: 구리, 알루미늄, 티타늄, 스테인리스.",
    items: "개",
    others: "기타",
    viewDetail: "자세히 보기",
    allProductsTag: "전체 제품",
    allProductsTitle: "제품 목록",
    steelGrades: "강종:",
    productDetail: "제품 상세",
    ctaTitle: "제품 상담이 필요하신가요?",
    ctaDesc: "기술팀이 생산 요구에 맞는 최적의 강종 선택을 도와드립니다.",
    contactNow: "지금 문의",
  },
}

export default function ProductsPage() {
  const { locale } = useLocale()
  const t = productPageCopy[locale]
  const productCategories = getLocalizedProductCategories(locale)
  const productCategoryGroups = getLocalizedProductCategoryGroups(locale)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/steel-products.jpg"
            alt="Steel Products"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              {t.heroTag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Categories by group */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16 mb-16">
            {productCategoryGroups.map((group) => {
              const categories = getLocalizedCategoriesBySlugs(locale, group.slugs)
              if (categories.length === 0) return null
              return (
                <div key={group.title}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground">{group.title}</h2>
                    {group.description && (
                      <p className="text-muted-foreground mt-1">{group.description}</p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/san-pham/danh-muc/${category.slug}`}
                        className="group"
                      >
                        <Card className="product-hover-card h-full bg-card border-border hover:shadow-xl transition-all duration-300 overflow-hidden">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={category.image}
                              alt={category.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                              <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                              <p className="text-muted-foreground text-sm">{category.products.length} {t.items}</p>
                            </div>
                          </div>
                          <CardContent className="pt-4">
                            <p className="text-muted-foreground mb-4">{category.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {category.products.slice(0, 3).map((product) => (
                                <Badge key={product.id} variant="secondary" className="bg-secondary text-secondary-foreground">
                                  {product.name}
                                </Badge>
                              ))}
                              {category.products.length > 3 && (
                                <Badge variant="outline" className="border-border text-muted-foreground">
                                  +{category.products.length - 3} {t.others}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                              <span>{t.viewDetail}</span>
                              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* All Products */}
          <div>
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">{t.allProductsTag}</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                {t.allProductsTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.flatMap(category =>
                category.products.map((product) => (
                  <Link key={product.id} href={`/san-pham/${product.slug}`}>
                    <Card className="product-hover-card h-full bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">
                              {product.category}
                            </Badge>
                            <CardTitle className="text-foreground">{product.name}</CardTitle>
                          </div>
                        </div>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">{t.steelGrades}</p>
                          <div className="flex flex-wrap gap-1">
                            {product.grades.map((grade) => (
                              <Badge key={grade} variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                                {grade}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" className="w-full group">
                          <span>{t.productDetail}</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/lien-he">{t.contactNow}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a
                href="tel:0981063023"
                style={{ color: 'black', textDecoration: 'none' }}
              >
                HOTLINE: 0981-063-023
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
