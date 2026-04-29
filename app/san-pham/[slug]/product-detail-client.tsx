"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Phone, Mail, CheckCircle, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"
import {
  getLocalizedProductBySlug,
  getLocalizedProductCategories,
} from "@/lib/localized-products"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const detailCopy: Record<Locale, any> = {
  vi: { home: "Trang Chủ", products: "Sản Phẩm", grades: "Mác Thép Có Sẵn", applications: "Ứng Dụng", quote: "Yêu Cầu Báo Giá", hardness: "Độ Cứng", composition: "Thành Phần", standard: "Tiêu Chuẩn", related: "Sản Phẩm Liên Quan", viewDetail: "Xem chi tiết", support: "Cần Hỗ Trợ Kỹ Thuật?", supportDesc: "Đội ngũ kỹ thuật viên của chúng tôi sẵn sàng tư vấn lựa chọn thép phù hợp cho dự án của bạn.", callNow: "Gọi Ngay" },
  en: { home: "Home", products: "Products", grades: "Available Grades", applications: "Applications", quote: "Request Quote", hardness: "Hardness", composition: "Composition", standard: "Standards", related: "Related Products", viewDetail: "View details", support: "Need Technical Support?", supportDesc: "Our technical team is ready to recommend the best steel grade for your project.", callNow: "Call Now" },
  zh: { home: "首页", products: "产品", grades: "可用牌号", applications: "应用", quote: "询价", hardness: "硬度", composition: "成分", standard: "标准", related: "相关产品", viewDetail: "查看详情", support: "需要技术支持？", supportDesc: "我们的技术团队可为您的项目推荐合适钢材。", callNow: "立即致电" },
  ja: { home: "ホーム", products: "製品", grades: "対応鋼種", applications: "用途", quote: "見積依頼", hardness: "硬度", composition: "成分", standard: "規格", related: "関連製品", viewDetail: "詳細を見る", support: "技術サポートが必要ですか？", supportDesc: "プロジェクトに最適な鋼種選定をサポートします。", callNow: "今すぐ電話" },
  ko: { home: "홈", products: "제품", grades: "가능 강종", applications: "적용 분야", quote: "견적 요청", hardness: "경도", composition: "성분", standard: "규격", related: "관련 제품", viewDetail: "자세히 보기", support: "기술 지원이 필요하신가요?", supportDesc: "프로젝트에 적합한 강종 선택을 지원합니다.", callNow: "지금 전화" },
}

export function ProductDetailClient({ slug }: { slug: string }) {
  const { locale } = useLocale()
  const t = detailCopy[locale]
  const product = getLocalizedProductBySlug(locale, slug)

  if (!product) {
    notFound()
  }

  const category = getLocalizedProductCategories(locale).find((c) => c.slug === product.categorySlug)
  const relatedProducts = category?.products.filter((p) => p.id !== product.id).slice(0, 3) || []

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">{t.home}</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/san-pham" className="hover:text-primary transition-colors">{t.products}</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/san-pham/danh-muc/${product.categorySlug}`} className="hover:text-primary transition-colors">{product.category}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.category}</Badge>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">{product.fullDescription}</p>
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">{t.grades}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.grades.map((grade) => <Badge key={grade} variant="secondary" className="bg-secondary text-secondary-foreground px-4 py-2 text-sm">{grade}</Badge>)}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">{t.applications}</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {product.applications.map((app, index) => <li key={index} className="flex items-center gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" /><span>{app}</span></li>)}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link href="/lien-he">{t.quote}</Link></Button>
                <Button asChild size="lg" variant="outline"><a href="tel:0981063023" className="flex items-center gap-2"><Phone className="h-4 w-4" />0981-063-023</a></Button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {product.specifications.hardness && <Card className="bg-card border-border"><CardHeader><CardTitle className="text-lg text-foreground">{t.hardness}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">{product.specifications.hardness}</p></CardContent></Card>}
            {product.specifications.composition && <Card className="bg-card border-border"><CardHeader><CardTitle className="text-lg text-foreground">{t.composition}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">{product.specifications.composition}</p></CardContent></Card>}
            {product.specifications.standard && <Card className="bg-card border-border"><CardHeader><CardTitle className="text-lg text-foreground">{t.standard}</CardTitle></CardHeader><CardContent><div className="flex flex-wrap gap-2">{product.specifications.standard.map((std) => <Badge key={std} variant="outline" className="border-border">{std}</Badge>)}</div></CardContent></Card>}
          </div>
          {relatedProducts.length > 0 && <div><h2 className="text-2xl font-bold text-foreground mb-6">{t.related}</h2><div className="grid md:grid-cols-3 gap-6">{relatedProducts.map((relatedProduct) => <Link key={relatedProduct.id} href={`/san-pham/${relatedProduct.slug}`}><Card className="product-hover-card h-full bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all group"><div className="relative h-40 overflow-hidden rounded-t-lg"><Image src={relatedProduct.image} alt={relatedProduct.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div><CardHeader><CardTitle className="text-foreground group-hover:text-primary transition-colors">{relatedProduct.name}</CardTitle></CardHeader><CardContent><div className="flex flex-wrap gap-1 mb-4">{relatedProduct.grades.slice(0, 3).map((grade) => <Badge key={grade} variant="secondary" className="text-xs">{grade}</Badge>)}</div><div className="flex items-center text-primary text-sm font-medium"><span>{t.viewDetail}</span><ArrowRight className="h-4 w-4 ml-1" /></div></CardContent></Card></Link>)}</div></div>}
        </div>
      </section>
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
              <div><h3 className="text-xl font-bold mb-2">{t.support}</h3><p className="text-primary-foreground/80">{t.supportDesc}</p></div>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><a href="mailto:changfasteel@gmail.com" className="flex items-center gap-2"><Mail className="h-4 w-4" />Email</a></Button>
                <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"><a href="tel:0981063023" className="flex items-center gap-2"><Phone className="h-4 w-4" />{t.callNow}</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
