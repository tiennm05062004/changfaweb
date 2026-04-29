"use client"

import { Mail, MapPin, Phone, Clock, Building2, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleMapEmbed } from "@/components/google-map"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

const contactInfo = [
  {
    icon: Building2,
    title: "VPĐKKD",
    details: [
      "Số 3, ngách 103/4, đường Lý Sơn, Tổ 32",
      "Phường Bồ Đề, Thành phố Hà Nội, Việt Nam"
    ]
  },
  {
    icon: MapPin,
    title: "Kho xưởng số 1",
    details: [
      "Km1, Quốc lộ 3, Phù Đổng",
      "TP. Hà Nội"
    ]
  },
  {
    icon: MapPin,
    title: "Kho xưởng số 2",
    details: [
      "Số 288, đường TS5, KCN Tiên Sơn",
      "Từ Sơn, Bắc Ninh"
    ]
  },
  {
    icon: Phone,
    title: "Hotline",
    details: [
      "HOTLINE: 0981-063-023",
      "Ms. Hiền: 0975-330-960",
      "Ms. Thu: 0964-160-594"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "changfasteel@gmail.com",
      "changfa01.vn@gmail.com"
    ]
  },
  {
    icon: Clock,
    title: "Giờ Làm Việc",
    details: [
      "Thứ 2 - Thứ 6: 8:00 - 17:30",
      "Thứ 7: 8:00 - 12:00"
    ]
  },
  {
    icon: MessageSquare,
    title: "Hỗ Trợ",
    details: [
      "Zalo: 0981-063-023",
      "WeChat: changfasteel"
    ]
  }
]

const locations = [
  {
    lat: 21.1009,
    lng: 105.9533,
    title: "Kho xưởng số 1",
    address: "Km1, Quốc lộ 3, Phù Đổng, TP. Hà Nội"
  },
  {
    lat: 21.1227,
    lng: 106.0453,
    title: "Kho xưởng số 2",
    address: "Số 288, đường TS5, KCN Tiên Sơn, Từ Sơn, Bắc Ninh"
  },
  {
    lat: 21.0498,
    lng: 105.8732,
    title: "VPĐKKD",
    address: "Số 3, ngách 103/4, đường Lý Sơn, Tổ 32, Phường Bồ Đề, Thành phố Hà Nội, Việt Nam"
  }
]

const contactCopy: Record<Locale, any> = {
  vi: {
    heroTag: "Liên Hệ",
    heroTitle: "Liên Hệ Với Chúng Tôi",
    heroDesc: "Hãy liên hệ ngay để được tư vấn và báo giá tốt nhất cho nhu cầu vật liệu kim loại công nghiệp của bạn. Đội ngũ kỹ thuật của chúng tôi luôn sẵn sàng hỗ trợ 24/7.",
    quoteTitle: "Gửi Yêu Cầu Báo Giá",
    quoteDesc: "Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong vòng 24 giờ.",
    locationTag: "Vị Trí",
    locationTitle: "Địa Chỉ Của Chúng Tôi",
    faqTitle: "Câu Hỏi Thường Gặp",
    faqs: [
      ["Làm thế nào để yêu cầu báo giá?", "Bạn có thể điền form trên trang này, gọi hotline hoặc gửi email với thông tin loại thép, mác, kích thước và số lượng."],
      ["Thời gian giao hàng là bao lâu?", "Hàng có sẵn giao 1-3 ngày làm việc. Đơn nhập khẩu thường 2-4 tuần tùy số lượng và chủng loại."],
      ["Có hỗ trợ gia công thép không?", "Có, chúng tôi hỗ trợ cắt, phay, tiện, mài, khoan và nhiệt luyện theo yêu cầu."],
      ["Chính sách thanh toán như thế nào?", "Hỗ trợ chuyển khoản, COD cho đơn nhỏ và chính sách công nợ cho khách hàng thường xuyên."],
    ],
  },
  en: {
    heroTag: "Contact",
    heroTitle: "Get In Touch",
    heroDesc: "Contact us now for the best consultation and quotation for your industrial metal needs. Our technical team is ready to support you.",
    quoteTitle: "Request a Quote",
    quoteDesc: "Fill in the form below, we will contact you within 24 hours.",
    locationTag: "Locations",
    locationTitle: "Our Addresses",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      ["How do I request a quotation?", "Fill out the form, call our hotline, or send an email with steel grade, dimensions and quantity."],
      ["How long is the delivery time?", "In-stock materials are delivered in 1-3 business days. Imported orders usually take 2-4 weeks."],
      ["Do you provide machining services?", "Yes. We provide cutting, milling, turning, grinding, drilling and heat treatment services."],
      ["What are your payment terms?", "We support bank transfer, COD for small orders and credit terms for regular customers."],
    ],
  },
  zh: {
    heroTag: "联系我们",
    heroTitle: "与我们联系",
    heroDesc: "立即联系我们，获取工业金属材料需求的最佳咨询与报价。",
    quoteTitle: "提交询价",
    quoteDesc: "填写下方信息，我们将在24小时内联系您。",
    locationTag: "位置",
    locationTitle: "我们的地址",
    faqTitle: "常见问题",
    faqs: [
      ["如何申请报价？", "填写表单、拨打热线或发送邮件并提供钢材牌号、尺寸和数量。"],
      ["交货周期多久？", "现货1-3个工作日，进口订单通常2-4周。"],
      ["是否提供加工服务？", "提供切割、铣削、车削、磨削、钻孔和热处理。"],
      ["付款方式有哪些？", "支持银行转账、小额订单货到付款及长期客户账期。"],
    ],
  },
  ja: {
    heroTag: "お問い合わせ",
    heroTitle: "お問い合わせはこちら",
    heroDesc: "産業用金属材料に関するご相談・お見積りはお気軽にご連絡ください。",
    quoteTitle: "見積依頼を送信",
    quoteDesc: "以下のフォームに入力してください。24時間以内にご連絡します。",
    locationTag: "拠点",
    locationTitle: "所在地",
    faqTitle: "よくある質問",
    faqs: [
      ["見積はどう依頼できますか？", "フォーム入力、ホットライン連絡、またはメールで鋼種・寸法・数量をお知らせください。"],
      ["納期はどのくらいですか？", "在庫品は1〜3営業日、輸入品は通常2〜4週間です。"],
      ["加工サービスはありますか？", "はい。切断、フライス、旋盤、研削、穴あけ、熱処理に対応しています。"],
      ["支払い条件は？", "銀行振込、小口注文の代金引換、継続顧客向け掛け払いに対応します。"],
    ],
  },
  ko: {
    heroTag: "문의",
    heroTitle: "문의하기",
    heroDesc: "산업용 금속 소재 상담과 견적이 필요하시면 지금 연락해 주세요.",
    quoteTitle: "견적 요청 보내기",
    quoteDesc: "아래 정보를 입력하시면 24시간 내 연락드립니다.",
    locationTag: "위치",
    locationTitle: "주소 안내",
    faqTitle: "자주 묻는 질문",
    faqs: [
      ["견적은 어떻게 요청하나요?", "폼 작성, 핫라인 전화 또는 이메일로 강종/규격/수량을 보내주세요."],
      ["납기는 얼마나 걸리나요?", "재고품은 1~3영업일, 수입품은 보통 2~4주 소요됩니다."],
      ["가공 서비스도 제공하나요?", "네. 절단, 밀링, 선반, 연마, 드릴링, 열처리를 지원합니다."],
      ["결제 조건은 어떻게 되나요?", "계좌이체, 소량 COD, 정기 고객 외상 조건을 지원합니다."],
    ],
  },
}

export default function ContactPage() {
  const { locale } = useLocale()
  const t = contactCopy[locale]
  const localizedDetails: Record<Locale, string[][]> = {
    vi: [
      ["Số 3, ngách 103/4, đường Lý Sơn, Tổ 32", "Phường Bồ Đề, Thành phố Hà Nội, Việt Nam"],
      ["Km1, Quốc lộ 3, Phù Đổng", "TP. Hà Nội"],
      ["Số 288, đường TS5, KCN Tiên Sơn", "Từ Sơn, Bắc Ninh"],
      ["HOTLINE: 0981-063-023", "Ms. Hiền: 0975-330-960", "Ms. Thu: 0964-160-594"],
      ["changfasteel@gmail.com", "changfa01.vn@gmail.com"],
      ["Thứ 2 - Thứ 6: 8:00 - 17:30", "Thứ 7: 8:00 - 12:00"],
      ["Zalo: 0981-063-023", "WeChat: changfasteel"],
    ],
    en: [
      ["No. 3, Alley 103/4, Ly Son Street, Lot 32", "Bo De Ward, Hanoi, Vietnam"],
      ["Km1, National Highway 3, Phu Dong", "Hanoi"],
      ["No. 288, TS5 Street, Tien Son Industrial Park", "Tu Son, Bac Ninh"],
      ["Hotline: 0981-063-023", "Ms. Hien: 0975-330-960", "Ms. Thu: 0964-160-594"],
      ["changfasteel@gmail.com", "changfa01.vn@gmail.com"],
      ["Mon - Fri: 8:00 - 17:30", "Sat: 8:00 - 12:00"],
      ["Zalo: 0981-063-023", "WeChat: changfasteel"],
    ],
    zh: [
      ["李山路103/4巷3号，32组", "越南河内市菩提坊"],
      ["3号国道 Km1, Phu Dong", "河内"],
      ["TS5路288号，先山工业园", "北宁省慈山市"],
      ["热线: 0981-063-023", "Hiền 女士: 0975-330-960", "Thu 女士: 0964-160-594"],
      ["changfasteel@gmail.com", "changfa01.vn@gmail.com"],
      ["周一至周五: 8:00 - 17:30", "周六: 8:00 - 12:00"],
      ["Zalo: 0981-063-023", "WeChat: changfasteel"],
    ],
    ja: [
      ["リーソン通り 103/4 路地3号, 32組", "ハノイ市ボーデー地区"],
      ["国道3号 Km1, Phu Dong", "ハノイ"],
      ["TS5通り 288番, ティエンソン工業団地", "バクニン省トゥーソン市"],
      ["ホットライン: 0981-063-023", "ヒエン: 0975-330-960", "トゥー: 0964-160-594"],
      ["changfasteel@gmail.com", "changfa01.vn@gmail.com"],
      ["月〜金: 8:00 - 17:30", "土: 8:00 - 12:00"],
      ["Zalo: 0981-063-023", "WeChat: changfasteel"],
    ],
    ko: [
      ["리선 거리 103/4 골목 3번, 32구역", "하노이 보데 지역"],
      ["국도 3호선 Km1, Phu Dong", "하노이"],
      ["TS5 도로 288번, 티엔손 산업단지", "박닌성 뜨선시"],
      ["핫라인: 0981-063-023", "히엔: 0975-330-960", "투: 0964-160-594"],
      ["changfasteel@gmail.com", "changfa01.vn@gmail.com"],
      ["월~금: 8:00 - 17:30", "토: 8:00 - 12:00"],
      ["Zalo: 0981-063-023", "WeChat: changfasteel"],
    ],
  }
  const labels: Record<Locale, [string, string, string, string, string, string, string]> = {
    vi: ["VPĐKKD", "Kho xưởng số 1", "Kho xưởng số 2", "Hotline", "Email", "Giờ Làm Việc", "Hỗ Trợ"],
    en: ["Registered Office", "Warehouse 1", "Warehouse 2", "Hotline", "Email", "Working Hours", "Support"],
    zh: ["注册办公室", "一号仓库", "二号仓库", "热线", "邮箱", "工作时间", "支持"],
    ja: ["登記オフィス", "倉庫1", "倉庫2", "ホットライン", "メール", "営業時間", "サポート"],
    ko: ["법인 등록 사무소", "창고 1", "창고 2", "핫라인", "이메일", "근무 시간", "지원"],
  }
  const localContactInfo = contactInfo.map((item, idx) => ({
    ...item,
    title: labels[locale][idx] ?? item.title,
    details: localizedDetails[locale][idx] ?? item.details,
  }))
  const locationTitles: Record<Locale, [string, string, string]> = {
    vi: ["Kho xưởng số 1", "Kho xưởng số 2", "VPĐKKD"],
    en: ["Warehouse 1", "Warehouse 2", "Registered Office"],
    zh: ["一号仓库", "二号仓库", "注册办公室"],
    ja: ["倉庫1", "倉庫2", "登記オフィス"],
    ko: ["창고 1", "창고 2", "법인 등록 사무소"],
  }
  const localizedLocations = locations.map((loc, idx) => ({
    ...loc,
    title: locationTitles[locale][idx] ?? loc.title,
    address: localizedDetails[locale][idx]?.join(", ") ?? loc.address,
  }))

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

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              {localContactInfo.map((info, index) => (
                <div key={index} className="flex gap-4 bg-card border border-border rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">{t.quoteTitle}</CardTitle>
                  <CardDescription>
                    {t.quoteDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
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
            <GoogleMapEmbed locations={localizedLocations} height="450px" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold text-foreground mt-2">
              {t.faqTitle}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {t.faqs.map((faq: [string, string]) => (
              <Card key={faq[0]} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{faq[0]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq[1]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
