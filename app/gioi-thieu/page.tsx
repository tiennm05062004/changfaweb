"use client"

import Image from "next/image"
import { Building2, Globe, Award, Users, CheckCircle, Factory, Truck, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleMapEmbed } from "@/components/google-map"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"

const aboutCopy: Record<Locale, any> = {
  vi: {
    heroTag: "Về Chúng Tôi",
    heroTitle: "CHANGFA Steel - Đối Tác Tin Cậy Trong Ngành Thép",
    heroDesc: "Với hơn 10 năm kinh nghiệm, chúng tôi tự hào là nhà cung cấp vật liệu kim loại công nghiệp hàng đầu, mang đến sản phẩm chất lượng cao nhất.",
    expYears: "Năm Kinh Nghiệm",
    companyTitle: "Giới Thiệu Công Ty TNHH CHANGFA",
    p1: "Công ty TNHH CHANGFA là đơn vị hàng đầu trong lĩnh vực cung cấp thép và các kim loại đặc biệt phục vụ trong ngành khuôn mẫu, cơ khí chế tạo máy móc, thiết bị, công cụ.",
    p2: "Với đội ngũ kỹ thuật tay nghề cao và máy móc hiện đại, CHANGFA đã trở thành đối tác trong chuỗi cung ứng của nhiều tập đoàn lớn.",
    p3: "Quan điểm kinh doanh của chúng tôi là Hợp Tác Cùng Phát Triển, luôn hướng tới giải pháp tối ưu và bền vững cho khách hàng.",
    capabilityTag: "Năng Lực",
    capabilityTitle: "Tại Sao Chọn CHANGFA Steel?",
    historyTag: "Lịch Sử",
    historyTitle: "Hành Trình Phát Triển",
    locationTag: "Vị Trí",
    locationTitle: "Địa Chỉ Của Chúng Tôi",
    nowLabel: "Hiện Tại",
    stats: ["Văn Phòng", "Quốc Gia Xuất Khẩu", "Năm Kinh Nghiệm", "Khách Hàng"],
    capabilities: [
      ["Nhà Máy Hiện Đại", "Trang bị đầy đủ máy móc cắt, phay, mài từ các thương hiệu hàng đầu như Makino, Mazak."],
      ["Giao Hàng Nhanh", "Hệ thống kho bãi rộng lớn, đảm bảo giao hàng nhanh chóng trên toàn quốc."],
      ["Chất Lượng Đảm Bảo", "Mọi sản phẩm đều được kiểm tra chất lượng nghiêm ngặt trước khi xuất kho."],
      ["Chứng Chỉ Quốc Tế", "Đạt tiêu chuẩn DIN, AISI, JIS, GB và các tiêu chuẩn quốc tế khác."],
    ],
    timeline: [
      ["Thành Lập Tại Trung Quốc", "Guangzhou ChangFeng Steel Co., Ltd được thành lập, trở thành nhà xuất khẩu thép của Baogang Group."],
      ["Mở Rộng Thị Trường Đông Nam Á", "Bắt đầu xuất khẩu sang các nước Đông Nam Á, xây dựng mạng lưới khách hàng rộng khắp."],
      ["Thành Lập CHANGFA Steel Vietnam", "Công ty TNHH CHANGFA Steel được thành lập tại Việt Nam, với văn phòng và nhà máy tại Hà Nội."],
      ["Phát Triển Bền Vững", "Tiếp tục mở rộng quy mô, nâng cao chất lượng dịch vụ và phục vụ hơn 500 khách hàng."],
    ],
  },
  en: { heroTag: "About Us", heroTitle: "CHANGFA Steel - Trusted Steel Partner", heroDesc: "With over 10 years of experience, we are a leading supplier of industrial metal materials.", expYears: "Years Experience", companyTitle: "About CHANGFA Co., Ltd.", p1: "CHANGFA is a leading supplier of steel and specialty metals for mold and machinery manufacturing.", p2: "With a highly skilled technical team and modern equipment, CHANGFA serves major global supply chains.", p3: "Our principle is collaborative growth, delivering optimal and sustainable solutions.", capabilityTag: "Capabilities", capabilityTitle: "Why Choose CHANGFA Steel?", historyTag: "History", historyTitle: "Development Journey", locationTag: "Locations", locationTitle: "Our Addresses", nowLabel: "Now", stats: ["Offices", "Export Countries", "Years Experience", "Customers"], capabilities: [["Modern Factory", "Fully equipped with advanced cutting, milling and grinding machines."], ["Fast Delivery", "Large warehouse system ensures nationwide delivery."], ["Quality Assurance", "All products are strictly inspected before dispatch."], ["International Standards", "Compliant with DIN, AISI, JIS, GB and other global standards."]], timeline: [["Founded in China", "Guangzhou ChangFeng Steel Co., Ltd was established and became a steel exporter of Baogang Group."], ["Expanded in Southeast Asia", "Started exports to Southeast Asia and built a broad customer network."], ["Founded CHANGFA Steel Vietnam", "CHANGFA Steel Vietnam was established with offices and factory in Hanoi."], ["Sustainable Growth", "Continuing to scale operations and serve more than 500 customers."]] },
  zh: { heroTag: "关于我们", heroTitle: "CHANGFA Steel - 值得信赖的钢材伙伴", heroDesc: "十余年经验，专注工业金属材料供应。", expYears: "经验年限", companyTitle: "CHANGFA 公司介绍", p1: "CHANGFA 是模具与机械制造领域的钢材与特种金属供应商。", p2: "凭借专业团队与现代设备，CHANGFA 服务于多个全球供应链。", p3: "我们坚持合作共赢，为客户提供可持续最优方案。", capabilityTag: "能力", capabilityTitle: "为什么选择 CHANGFA?", historyTag: "历程", historyTitle: "发展历程", locationTag: "位置", locationTitle: "我们的地址", nowLabel: "当前", stats: ["办公室", "出口国家", "经验年限", "客户"], capabilities: [["现代工厂", "配备先进切割、铣削和磨削设备。"], ["快速交付", "大型仓储系统保障快速交货。"], ["质量保障", "所有产品出货前严格检验。"], ["国际标准", "符合 DIN、AISI、JIS、GB 等标准。"]], timeline: [["中国成立", "广州长丰钢铁成立并成为宝钢集团出口合作伙伴。"], ["拓展东南亚市场", "开始向东南亚出口并建立广泛客户网络。"], ["成立越南 CHANGFA", "在越南河内设立办公室与工厂。"], ["持续发展", "持续扩张并服务超过500家客户。"]] },
  ja: { heroTag: "私たちについて", heroTitle: "CHANGFA Steel - 信頼できる鋼材パートナー", heroDesc: "10年以上の実績を持つ産業用金属材料サプライヤーです。", expYears: "経験年数", companyTitle: "CHANGFA 会社紹介", p1: "CHANGFA は金型・機械製造向けの鋼材と特殊金属を提供しています。", p2: "高度な技術チームと最新設備でグローバル供給網に対応。", p3: "共創共栄の理念で最適かつ持続可能な提案を行います。", capabilityTag: "強み", capabilityTitle: "CHANGFA が選ばれる理由", historyTag: "沿革", historyTitle: "成長の歩み", locationTag: "拠点", locationTitle: "所在地", nowLabel: "現在", stats: ["拠点", "輸出国", "経験年数", "顧客"], capabilities: [["先進工場", "切断・フライス・研削設備を完備。"], ["迅速配送", "大規模倉庫網で迅速に配送。"], ["品質保証", "出荷前に厳格な品質検査を実施。"], ["国際規格", "DIN・AISI・JIS・GB などに準拠。"]], timeline: [["中国で創業", "広州長豊鋼鉄を設立し、宝鋼グループの輸出パートナーに。"], ["東南アジアへ展開", "東南アジアへの輸出を開始し顧客基盤を拡大。"], ["CHANGFA Vietnam 設立", "ベトナム・ハノイに拠点と工場を設立。"], ["持続的成長", "事業を拡大し500社超の顧客に対応。"]] },
  ko: { heroTag: "회사 소개", heroTitle: "CHANGFA Steel - 신뢰할 수 있는 철강 파트너", heroDesc: "10년 이상 경험의 산업용 금속 소재 전문 공급업체입니다.", expYears: "경력 연수", companyTitle: "CHANGFA 회사 소개", p1: "CHANGFA는 금형 및 기계 제조용 철강·특수금속을 공급합니다.", p2: "숙련된 기술 인력과 현대 설비로 글로벌 공급망을 지원합니다.", p3: "상생 협력 철학으로 최적의 지속 가능한 솔루션을 제공합니다.", capabilityTag: "역량", capabilityTitle: "왜 CHANGFA인가", historyTag: "연혁", historyTitle: "성장 여정", locationTag: "위치", locationTitle: "주소 안내", nowLabel: "현재", stats: ["사무소", "수출 국가", "경력 연수", "고객사"], capabilities: [["현대식 공장", "절단·밀링·연마 설비를 완비했습니다."], ["빠른 납품", "대형 창고 시스템으로 빠른 납품 지원."], ["품질 보증", "출고 전 엄격한 품질 검사를 수행."], ["국제 규격", "DIN, AISI, JIS, GB 등 국제 규격 준수."]], timeline: [["중국 설립", "광저우 창펑 스틸 설립, 바오강 그룹 수출 파트너."], ["동남아 시장 확장", "동남아 수출을 시작해 고객 네트워크 확대."], ["CHANGFA 베트남 설립", "하노이에 법인과 공장을 설립."], ["지속 성장", "규모를 확장하며 500개 이상 고객사 지원."]] },
}

const capabilityIcons = [
  {
    icon: Factory,
  },
  {
    icon: Truck,
  },
  {
    icon: Shield,
  },
  {
    icon: CheckCircle,
  }
]

export default function AboutPage() {
  const { locale } = useLocale()
  const t = {
    ...aboutCopy.vi,
    ...aboutCopy[locale],
    capabilities: aboutCopy[locale].capabilities ?? aboutCopy.vi.capabilities,
    timeline: aboutCopy[locale].timeline ?? aboutCopy.vi.timeline,
  }
  const stats = [
    { icon: Building2, value: "2", label: t.stats[0] },
    { icon: Globe, value: "20+", label: t.stats[1] },
    { icon: Award, value: "10+", label: t.stats[2] },
    { icon: Users, value: "500+", label: t.stats[3] },
  ]
  const capabilities = capabilityIcons.map((item, index) => ({
    ...item,
    title: t.capabilities[index]?.[0] ?? "",
    description: t.capabilities[index]?.[1] ?? "",
  }))
  const locationTitles: Record<Locale, [string, string, string]> = {
    vi: ["Kho xưởng số 1", "Kho xưởng số 2", "VPĐKKD"],
    en: ["Warehouse 1", "Warehouse 2", "Registered Office"],
    zh: ["一号仓库", "二号仓库", "注册办公室"],
    ja: ["倉庫1", "倉庫2", "登記オフィス"],
    ko: ["창고 1", "창고 2", "법인 등록 사무소"],
  }
  const locationAddresses: Record<Locale, [string, string, string]> = {
    vi: ["Km1, Quốc lộ 3, Phù Đổng, TP. Hà Nội", "Số 288, đường TS5, KCN Tiên Sơn, Từ Sơn, Bắc Ninh", "Số 3, ngách 103/4, đường Lý Sơn, Tổ 32, Phường Bồ Đề, Thành phố Hà Nội, Việt Nam"],
    en: ["Km1, National Highway 3, Phu Dong, Hanoi", "No. 288, TS5 Road, Tien Son Industrial Park, Tu Son, Bac Ninh", "No. 3, Alley 103/4, Ly Son Street, Lot 32, Bo De Ward, Hanoi, Vietnam"],
    zh: ["3号国道 Km1，扶董，河内", "北宁省慈山市先山工业园 TS5 路 288 号", "越南河内市菩提坊李山路 103/4 巷 3 号，32 组"],
    ja: ["国道3号 Km1、フードン、ハノイ", "バクニン省トゥーソン市ティエンソン工業団地 TS5 通り 288 番", "ベトナム・ハノイ市ボーデー地区、リーソン通り 103/4 路地 3 号、32 組"],
    ko: ["국도 3호선 Km1, 푸동, 하노이", "박닌성 뜨선시 띠엔선 산업단지 TS5 도로 288번", "베트남 하노이 보데 지역, 리선 거리 103/4 골목 3번, 32구역"],
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
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              {t.heroTag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/factory.jpg"
                  alt="CHANGFA Steel Factory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">{t.expYears}</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t.companyTitle}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.p1}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.p2}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.p3}
              </p>
              <div className="flex flex-wrap gap-3">
                {["DIN", "AISI", "JIS", "GB"].map((std) => (
                  <span key={std} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium">
                    Tiêu chuẩn {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">{t.capabilityTag}</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                {t.capabilityTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <cap.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground">{cap.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company History */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">{t.historyTag}</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                {t.historyTitle}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-primary pl-8 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <span className="text-primary font-semibold">2008</span>
                    <h3 className="font-semibold text-foreground mt-1">{t.timeline[0][0]}</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {t.timeline[0][1]}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <span className="text-primary font-semibold">2015</span>
                    <h3 className="font-semibold text-foreground mt-1">{t.timeline[1][0]}</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {t.timeline[1][1]}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <span className="text-primary font-semibold">2020</span>
                    <h3 className="font-semibold text-foreground mt-1">{t.timeline[2][0]}</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {t.timeline[2][1]}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-accent rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <span className="text-accent font-semibold">{t.nowLabel}</span>
                    <h3 className="font-semibold text-foreground mt-1">{t.timeline[3][0]}</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {t.timeline[3][1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <div className="text-center mb-8">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">{t.locationTag}</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                {t.locationTitle}
              </h2>
            </div>
            <GoogleMapEmbed locations={locations} height="450px" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
