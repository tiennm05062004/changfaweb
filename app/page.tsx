"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, CheckCircle, Building2, Globe, Award, Users, Factory, Truck, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleMapEmbed } from "@/components/google-map"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"
import {
  getLocalizedCategoriesBySlugs,
  getLocalizedProductCategoryGroups,
} from "@/lib/localized-products"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const homeCopy: Record<Locale, any> = {
  vi: {
    stats: ["Văn Phòng", "Quốc Gia Xuất Khẩu", "Năm Kinh Nghiệm", "Khách Hàng"],
    features: ["Nhà Máy Hiện Đại", "Giao Hàng Nhanh", "Chất Lượng Đảm Bảo"],
    featureDescriptions: [
      "Trang bị đầy đủ máy cắt, phay, mài từ các thương hiệu hàng đầu.",
      "Hệ thống kho bãi rộng lớn, đảm bảo giao hàng nhanh chóng trên toàn quốc.",
      "Mỗi sản phẩm đều được kiểm tra chất lượng nghiêm ngặt trước khi xuất kho.",
    ],
    heroAlt: "Nhà Máy Thép CHANGFA",
    heroText: "Nhà cung cấp vật liệu kim loại công nghiệp chất lượng cao phục vụ cho sản xuất trong nước và xuất khẩu.",
    viewProducts: "Xem Sản Phẩm",
    productsTitle: "Danh Mục Sản Phẩm",
    productsDesc: "Thép khuôn, thép chế tạo, thép công cụ và sản phẩm khác: đồng, nhôm, titan, inox.",
    items: "mục",
    viewDetail: "Xem chi tiết",
    viewAll: "Xem Tất Cả Sản Phẩm",
    aboutTag: "Về Chúng Tôi",
    aboutTitle: "Giới Thiệu Công Ty TNHH CHANGFA",
    aboutParagraphs: [
      "Công ty TNHH CHANGFA là đơn vị hàng đầu trong lĩnh vực cung cấp thép và các kim loại đặc biệt phục vụ trong ngành khuôn mẫu, cơ khí chế tạo máy móc, thiết bị, công cụ.",
      "Công ty TNHH CHANGFA với đội ngũ công nhân viên kỹ thuật tay nghề cao, máy móc, trang thiết bị hiện đại, năng lực sản xuất lớn, hiện đã trở thành một trong những đơn vị thuộc chuỗi cung ứng toàn cầu cho các tập đoàn lớn.",
      "Quan điểm kinh doanh của chúng tôi là Hợp Tác Cùng Phát Triển, vì vậy chúng tôi sẵn sàng hợp tác cùng quý khách hàng đưa ra nhiều giải pháp tối ưu nhất.",
    ],
    bullets: ["Tiêu chuẩn DIN, AISI, JIS, GB", "Kiểm tra chất lượng nghiêm ngặt", "Giao hàng nhanh toàn quốc", "Tư vấn kỹ thuật chuyên nghiệp"],
    learnMore: "Tìm Hiểu Thêm",
    whyChoose: "Tại sao chọn chúng tôi",
    advantages: "Ưu Điểm Của CHANGFA",
    locations: "Vị Trí",
    locationTitle: "Địa Chỉ Của Chúng Tôi",
    ctaTitle: "Bạn Sẵn Sàng Hợp Tác",
    ctaDesc: "Liên hệ ngay để được tư vấn và báo giá tốt nhất cho nhu cầu thép công nghiệp của bạn",
    contactNow: "Liên Hệ Ngay",
    hotline: "HOTLINE: 0981-063-023",
  },
  en: {
    stats: ["Offices", "Export Countries", "Years Experience", "Customers"],
    features: ["Modern Factory", "Fast Delivery", "Quality Assurance"],
    featureDescriptions: [
      "Fully equipped with modern cutting, milling and grinding machines.",
      "Large warehouse system ensuring fast nationwide delivery.",
      "Every product is strictly quality-checked before dispatch.",
    ],
    heroAlt: "CHANGFA Steel Factory",
    heroText: "High-quality industrial metal supplier for domestic manufacturing and export.",
    viewProducts: "View Products",
    productsTitle: "Product Categories",
    productsDesc: "Mold steel, engineering steel, tool steel and others: copper, aluminum, titanium, stainless steel.",
    items: "items",
    viewDetail: "View details",
    viewAll: "View All Products",
    aboutTag: "About Us",
    aboutTitle: "About CHANGFA Co., Ltd.",
    aboutParagraphs: [
      "CHANGFA is a leading supplier of steel and specialty metals for mold making and mechanical manufacturing.",
      "With a skilled technical team and modern equipment, CHANGFA is now part of global supply chains for major corporations.",
      "Our business philosophy is cooperative growth, delivering optimal solutions for long-term success.",
    ],
    bullets: ["DIN, AISI, JIS, GB standards", "Strict quality control", "Fast nationwide delivery", "Professional technical consulting"],
    learnMore: "Learn More",
    whyChoose: "Why Choose Us",
    advantages: "CHANGFA Advantages",
    locations: "Locations",
    locationTitle: "Our Addresses",
    ctaTitle: "Ready to Work Together?",
    ctaDesc: "Contact us now for the best consultation and quotation for your industrial steel needs.",
    contactNow: "Contact Now",
    hotline: "Hotline: 0981-063-023",
  },
  zh: {
    stats: ["办公室", "出口国家", "经验年限", "客户"],
    features: ["现代工厂", "快速交付", "质量保障"],
    featureDescriptions: [
      "配备先进切割、铣削与磨削设备。",
      "大型仓储系统，保障全国快速交付。",
      "每件产品出库前都经过严格质检。",
    ],
    heroAlt: "CHANGFA 钢铁工厂",
    heroText: "高品质工业金属材料供应商，服务国内制造与出口。",
    viewProducts: "查看产品",
    productsTitle: "产品分类",
    productsDesc: "模具钢、机械钢、工具钢及其他：铜、铝、钛、不锈钢。",
    items: "项",
    viewDetail: "查看详情",
    viewAll: "查看全部产品",
    aboutTag: "关于我们",
    aboutTitle: "CHANGFA 有限公司介绍",
    aboutParagraphs: [
      "CHANGFA 是模具与机械制造领域领先的钢材及特种金属供应商。",
      "凭借高技能团队与现代设备，CHANGFA 已进入多家大型集团全球供应链。",
      "我们坚持合作共赢，为客户提供最优方案，实现可持续发展。",
    ],
    bullets: ["DIN、AISI、JIS、GB 标准", "严格质量检测", "全国快速交付", "专业技术咨询"],
    learnMore: "了解更多",
    whyChoose: "为什么选择我们",
    advantages: "CHANGFA 优势",
    locations: "位置",
    locationTitle: "我们的地址",
    ctaTitle: "准备合作了吗？",
    ctaDesc: "立即联系，获取工业钢材需求的最佳咨询与报价。",
    contactNow: "立即联系",
    hotline: "热线: 0981-063-023",
  },
  ja: {
    stats: ["拠点", "輸出国", "経験年数", "顧客"],
    features: ["先進工場", "迅速配送", "品質保証"],
    featureDescriptions: [
      "切断・フライス・研削設備を完備しています。",
      "大規模倉庫網により全国へ迅速配送。",
      "全製品は出荷前に厳格な品質検査を実施。",
    ],
    heroAlt: "CHANGFA 鉄鋼工場",
    heroText: "国内製造と輸出向けの高品質産業用金属材料サプライヤーです。",
    viewProducts: "製品を見る",
    productsTitle: "製品カテゴリ",
    productsDesc: "金型鋼、機械構造用鋼、工具鋼、その他：銅、アルミ、チタン、ステンレス。",
    items: "件",
    viewDetail: "詳細を見る",
    viewAll: "すべての製品を見る",
    aboutTag: "私たちについて",
    aboutTitle: "CHANGFA 会社紹介",
    aboutParagraphs: [
      "CHANGFA は金型・機械製造分野向けの鋼材と特殊金属の主要サプライヤーです。",
      "高い技術力と最新設備により、大手企業のグローバルサプライチェーンに参入しています。",
      "共創共栄を理念に、最適なソリューションを提供します。",
    ],
    bullets: ["DIN / AISI / JIS / GB 規格", "厳格な品質管理", "全国迅速配送", "専門技術サポート"],
    learnMore: "詳細を見る",
    whyChoose: "選ばれる理由",
    advantages: "CHANGFA の強み",
    locations: "拠点",
    locationTitle: "所在地",
    ctaTitle: "協業を始めませんか？",
    ctaDesc: "産業用鋼材のご相談・お見積りは今すぐお問い合わせください。",
    contactNow: "今すぐ連絡",
    hotline: "ホットライン: 0981-063-023",
  },
  ko: {
    stats: ["사무소", "수출 국가", "경력 연수", "고객사"],
    features: ["현대식 공장", "빠른 납품", "품질 보증"],
    featureDescriptions: [
      "절단, 밀링, 연마 설비를 완비했습니다.",
      "대형 물류창고로 전국 빠른 납품이 가능합니다.",
      "모든 제품은 출고 전 엄격한 품질 검사를 거칩니다.",
    ],
    heroAlt: "CHANGFA 철강 공장",
    heroText: "국내 생산 및 수출을 위한 고품질 산업용 금속 소재 공급업체입니다.",
    viewProducts: "제품 보기",
    productsTitle: "제품 카테고리",
    productsDesc: "금형강, 기계강, 공구강 및 기타: 구리, 알루미늄, 티타늄, 스테인리스.",
    items: "개",
    viewDetail: "자세히 보기",
    viewAll: "전체 제품 보기",
    aboutTag: "회사 소개",
    aboutTitle: "CHANGFA 회사 소개",
    aboutParagraphs: [
      "CHANGFA는 금형 및 기계 제조 분야의 철강·특수금속 선도 공급업체입니다.",
      "숙련된 기술 인력과 현대 설비를 바탕으로 글로벌 공급망에 참여하고 있습니다.",
      "상생 협력을 바탕으로 고객에게 최적의 솔루션을 제공합니다.",
    ],
    bullets: ["DIN, AISI, JIS, GB 규격", "엄격한 품질 관리", "전국 빠른 납품", "전문 기술 컨설팅"],
    learnMore: "더 알아보기",
    whyChoose: "왜 CHANGFA인가",
    advantages: "CHANGFA의 강점",
    locations: "위치",
    locationTitle: "주소 안내",
    ctaTitle: "협업을 시작해볼까요?",
    ctaDesc: "산업용 철강 수요에 대한 상담과 견적을 지금 문의하세요.",
    contactNow: "지금 문의",
    hotline: "핫라인: 0981-063-023",
  },
}

export default function Home() {
  const { locale } = useLocale()
  const t = homeCopy[locale]
  const productCategoryGroups = getLocalizedProductCategoryGroups(locale)
  const stats = [
    { icon: Building2, value: "2", label: t.stats[0] },
    { icon: Globe, value: "20+", label: t.stats[1] },
    { icon: Award, value: "10+", label: t.stats[2] },
    { icon: Users, value: "500+", label: t.stats[3] },
  ]
  const features = [
    { icon: Factory, title: t.features[0], description: t.featureDescriptions[0] },
    { icon: Truck, title: t.features[1], description: t.featureDescriptions[1] },
    { icon: Shield, title: t.features[2], description: t.featureDescriptions[2] },
  ]
  const locationTitles: Record<Locale, [string, string, string]> = {
    vi: ["Kho xưởng số 1", "Kho xưởng số 2", "VPĐKKD"],
    en: ["Warehouse 1", "Warehouse 2", "Registered Office"],
    zh: ["一号仓库", "二号仓库", "注册办公室"],
    ja: ["倉庫1", "倉庫2", "登記オフィス"],
    ko: ["창고 1", "창고 2", "법인 등록 사무소"],
  }
  const locationAddresses: Record<Locale, [string, string, string]> = {
    vi: [
      "Km1, Quốc lộ 3, Phù Đổng, TP. Hà Nội",
      "Số 288, đường TS5, KCN Tiên Sơn, Từ Sơn, Bắc Ninh",
      "Số 3, ngách 103/4, đường Lý Sơn, Tổ 32, Phường Bồ Đề, Thành phố Hà Nội, Việt Nam",
    ],
    en: [
      "Km1, National Highway 3, Phu Dong, Hanoi",
      "No. 288, TS5 Road, Tien Son Industrial Park, Tu Son, Bac Ninh",
      "No. 3, Alley 103/4, Ly Son Street, Lot 32, Bo De Ward, Hanoi, Vietnam",
    ],
    zh: [
      "3号国道 Km1，扶董，河内",
      "北宁省慈山市先山工业园 TS5 路 288 号",
      "越南河内市菩提坊李山路 103/4 巷 3 号，32 组",
    ],
    ja: [
      "国道3号 Km1、フードン、ハノイ",
      "バクニン省トゥーソン市ティエンソン工業団地 TS5 通り 288 番",
      "ベトナム・ハノイ市ボーデー地区、リーソン通り 103/4 路地 3 号、32 組",
    ],
    ko: [
      "국도 3호선 Km1, 푸동, 하노이",
      "박닌성 뜨선시 띠엔선 산업단지 TS5 도로 288번",
      "베트남 하노이 보데 지역, 리선 거리 103/4 골목 3번, 32구역",
    ],
  }
  const locations = [
    { lat: 21.1009, lng: 105.9533, title: locationTitles[locale][0], address: locationAddresses[locale][0] },
    { lat: 21.1227, lng: 106.0453, title: locationTitles[locale][1], address: locationAddresses[locale][1] },
    { lat: 21.0498, lng: 105.8732, title: locationTitles[locale][2], address: locationAddresses[locale][2] },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 md:pt-56 md:pb-32 min-h-[78vh] md:min-h-[86vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-steel.jpg"
            alt={t.heroAlt}
            fill
            className="object-cover object-center scale-110"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-wide">
              <span className="text-red-600">CHANG</span>
              <span className="text-blue-600">FA</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-pretty">
              {t.heroText}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/san-pham">
                  {t.viewProducts}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/20">
                <a href="tel:0981063023" className="flex items-center gap-2" style={{ color: 'black', textDecoration: 'none' }}>
                  <Phone className="h-5 w-5" />
                  {t.hotline}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-6 py-14 bg-primary text-primary-foreground" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">{t.viewProducts}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              {t.productsTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.productsDesc}
            </p>
          </div>

          <div className="space-y-14 mb-8">
            {productCategoryGroups.map((group) => {
              const categories = getLocalizedCategoriesBySlugs(locale, group.slugs)
              if (categories.length === 0) return null
              return (
                <div key={group.title}>
                  <div className="mb-6 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{group.title}</h3>
                    {group.description && (
                      <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                      <Link key={category.id} href={`/san-pham/danh-muc/${category.slug}`} className="group">
                        <Card className="product-hover-card h-full bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all">
                          <div className="relative h-40 overflow-hidden rounded-t-lg">
                            <Image
                              src={category.image}
                              alt={category.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                              {category.name}
                            </CardTitle>
                            <CardDescription>{category.products.length} {t.items}</CardDescription>
                          </CardHeader>
                          <CardContent>
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

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/san-pham">
                {t.viewAll}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/factory.jpg"
                  alt="Nhà Máy Thép CHANGFA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">{t.stats[2]}</div>
              </div>
            </div>

            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">{t.aboutTag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">{t.aboutTitle}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.aboutParagraphs[0]}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.aboutParagraphs[1]}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.aboutParagraphs[2]}
              </p>
              <ul className="space-y-3 mb-8">
                {t.bullets.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/gioi-thieu">
                  {t.learnMore}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">{t.whyChoose}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              {t.advantages}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">{t.locations}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              {t.locationTitle}
            </h2>
          </div>
          <GoogleMapEmbed locations={locations} height="400px" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" data-reveal>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
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
                {t.hotline}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}