"use client"

import Image from "next/image"
import Link from "next/link"
import { Cog, Factory, Wrench, Ruler, ShieldCheck, Truck, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const serviceContent: Record<Locale, any> = {
  vi: {
    heroTag: "Dịch Vụ",
    heroTitle: "Dịch Vụ Gia Công Kim Loại Công Nghiệp",
    heroDesc: "CHANGFA cung cấp các dịch vụ gia công phay, mài, CNC và các giải pháp kỹ thuật đồng bộ, đáp ứng yêu cầu chất lượng cho sản xuất trong nước và xuất khẩu.",
    ctaTitle: "Cần tư vấn dịch vụ gia công?",
    ctaDesc: "Gửi yêu cầu để đội ngũ kỹ thuật hỗ trợ báo giá, tư vấn vật liệu và phương án gia công phù hợp.",
    contactNow: "Liên Hệ Ngay",
    services: [
      ["Gia công phay", "Gia công phay mặt, phay rãnh, phay định hình trên nhiều loại vật liệu kim loại với độ chính xác cao."],
      ["Gia công mài", "Mài phẳng, mài tinh bề mặt và xử lý dung sai kích thước theo yêu cầu kỹ thuật của từng chi tiết."],
      ["Gia công CNC", "Gia công CNC cho chi tiết cơ khí phức tạp, đảm bảo độ lặp lại ổn định và chất lượng đồng đều."],
      ["Cắt quy cách theo bản vẽ", "Hỗ trợ cắt phôi theo kích thước đặt hàng và bản vẽ kỹ thuật, tối ưu vật tư cho sản xuất."],
      ["Kiểm tra chất lượng", "Kiểm soát bề mặt và kích thước trước khi giao hàng, đảm bảo đúng thông số và yêu cầu đầu ra."],
      ["Giao hàng và hỗ trợ kỹ thuật", "Hỗ trợ giao hàng theo tiến độ và tư vấn kỹ thuật lựa chọn vật liệu phù hợp ứng dụng thực tế."],
    ],
  },
  en: {
    heroTag: "Services",
    heroTitle: "Industrial Metal Processing Services",
    heroDesc: "CHANGFA provides milling, grinding, CNC processing and integrated technical solutions for domestic and export production.",
    ctaTitle: "Need service consultation?",
    ctaDesc: "Send your request for quotation, material advice and suitable processing plans.",
    contactNow: "Contact Now",
    services: [
      ["Milling", "Face milling, slot milling and profile milling for various metals with high precision."],
      ["Grinding", "Surface grinding and tolerance finishing according to technical requirements."],
      ["CNC Machining", "CNC machining for complex parts with stable repeatability and consistent quality."],
      ["Cut-to-size", "Support for cut-to-size material based on technical drawings and order dimensions."],
      ["Quality Inspection", "Surface and dimensional checks before delivery to ensure required outputs."],
      ["Delivery & Technical Support", "Scheduled delivery and technical consultation for material selection."],
    ],
  },
  zh: {
    heroTag: "服务",
    heroTitle: "工业金属加工服务",
    heroDesc: "CHANGFA 提供铣削、磨削、CNC 加工及一体化技术方案，满足内销与出口品质要求。",
    ctaTitle: "需要加工服务咨询？",
    ctaDesc: "提交需求即可获取报价、材料建议与工艺方案。",
    contactNow: "立即联系",
    services: [
      ["铣削加工", "提供端面铣、槽铣与成形铣加工，适用于多种金属材料，精度稳定。"],
      ["磨削加工", "支持平面磨与精磨处理，按图纸要求控制尺寸公差与表面质量。"],
      ["CNC 加工", "适用于复杂机械零件，确保批量加工的一致性与重复精度。"],
      ["按图下料", "可按订单尺寸与技术图纸切割毛坯，帮助优化材料利用率。"],
      ["质量检测", "发货前进行尺寸与外观检查，确保参数与交付标准一致。"],
      ["交付与技术支持", "支持按进度交付，并提供材料选型与应用技术咨询。"],
    ],
  },
  ja: {
    heroTag: "サービス",
    heroTitle: "産業用金属加工サービス",
    heroDesc: "CHANGFA はフライス、研削、CNC 加工と技術提案を一体で提供し、国内外の品質要求に対応します。",
    ctaTitle: "加工サービスのご相談はこちら",
    ctaDesc: "見積依頼を送信いただければ、材料選定と加工方案をご提案します。",
    contactNow: "今すぐ連絡",
    services: [
      ["フライス加工", "平面・溝・形状フライスに対応し、多様な金属材を高精度で加工します。"],
      ["研削加工", "平面研削と仕上げ研削に対応し、図面要求に合わせて寸法公差を管理します。"],
      ["CNC 加工", "複雑な機械部品の加工に対応し、量産時の再現性と品質を確保します。"],
      ["図面寸法切断", "注文寸法と図面に基づく切断で、材料ロスを最小化します。"],
      ["品質検査", "出荷前に外観・寸法を検査し、仕様に適合した品質を保証します。"],
      ["納品・技術サポート", "納期に合わせた出荷と、材料選定に関する技術支援を提供します。"],
    ],
  },
  ko: {
    heroTag: "서비스",
    heroTitle: "산업용 금속 가공 서비스",
    heroDesc: "CHANGFA는 밀링, 연마, CNC 가공과 통합 기술 솔루션을 제공해 내수·수출 품질 요구를 충족합니다.",
    ctaTitle: "가공 서비스 상담이 필요하신가요?",
    ctaDesc: "요청을 보내주시면 견적, 소재 선정, 가공 방안을 함께 안내해 드립니다.",
    contactNow: "지금 문의",
    services: [
      ["밀링 가공", "평면·홈·형상 밀링 가공을 고정밀로 제공하며 다양한 금속 소재에 대응합니다."],
      ["연마 가공", "평면 연마 및 정밀 연마를 통해 도면 기준의 공차와 표면 품질을 확보합니다."],
      ["CNC 가공", "복잡한 기계 부품 가공에 적합하며, 반복 생산 시 안정적인 품질을 보장합니다."],
      ["도면 규격 절단", "주문 치수와 도면 기준 절단으로 소재 활용 효율을 높입니다."],
      ["품질 검사", "출고 전 치수·외관 검사를 통해 납품 기준 충족 여부를 확인합니다."],
      ["납품 및 기술 지원", "일정 기반 납품과 함께 소재 선정 관련 기술 컨설팅을 제공합니다."],
    ],
  },
}

const services = [
  {
    icon: Cog,
    title: "Gia công phay",
    image: "/images/steel-products.jpg",
    description:
      "Gia công phay mặt, phay rãnh, phay định hình trên nhiều loại vật liệu kim loại với độ chính xác cao.",
  },
  {
    icon: Wrench,
    title: "Gia công mài",
    image: "/images/die-steel.jpg",
    description:
      "Mài phẳng, mài tinh bề mặt và xử lý dung sai kích thước theo yêu cầu kỹ thuật của từng chi tiết.",
  },
  {
    icon: Factory,
    title: "Gia công CNC",
    image: "/images/factory.jpg",
    description:
      "Gia công CNC cho chi tiết cơ khí phức tạp, đảm bảo độ lặp lại ổn định và chất lượng đồng đều.",
  },
  {
    icon: Ruler,
    title: "Cắt quy cách theo bản vẽ",
    image: "/images/hero-steel.jpg",
    description:
      "Hỗ trợ cắt phôi theo kích thước đặt hàng và bản vẽ kỹ thuật, tối ưu vật tư cho sản xuất.",
  },
  {
    icon: ShieldCheck,
    title: "Kiểm tra chất lượng",
    image: "/images/die-steel.jpg",
    description:
      "Kiểm soát bề mặt và kích thước trước khi giao hàng, đảm bảo đúng thông số và yêu cầu đầu ra.",
  },
  {
    icon: Truck,
    title: "Giao hàng và hỗ trợ kỹ thuật",
    image: "/images/steel-products.jpg",
    description:
      "Hỗ trợ giao hàng theo tiến độ và tư vấn kỹ thuật lựa chọn vật liệu phù hợp ứng dụng thực tế.",
  },
]

export default function ServicesPage() {
  const { locale } = useLocale()
  const t = serviceContent[locale]
  const localizedServices = services.map((service, index) => ({
    ...service,
    title: t.services[index][0],
    description: t.services[index][1],
  }))

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{t.heroTag}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localizedServices.map((service) => (
              <Card key={service.title} className="product-hover-card bg-card border-border">
                <div className="relative h-44 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.ctaTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/lien-he">
              {t.contactNow}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
