import { Locale } from "@/lib/i18n"

export interface ServiceSection {
  title: string
  subtitle: string
  intro: string
  highlights: Array<{
    title: string
    items: string[]
  }>
  processTitle: string
  steps: string[]
  noteTitle?: string
  notes?: string[]
}

export interface ServiceItem {
  slug: string
  image: string
  translations: Record<Locale, {
    name: string
    shortDescription: string
    detailLabel: string
    section: ServiceSection
  }>
}

export const servicePageCopy: Record<Locale, {
  heroTag: string
  heroTitle: string
  heroDesc: string
  ctaTitle: string
  ctaDesc: string
  contactNow: string
  viewDetail: string
}> = {
  vi: {
    heroTag: "Dịch Vụ",
    heroTitle: "Dịch Vụ Gia Công Kim Loại Công Nghiệp",
    heroDesc: "CHANGFA cung cấp 4 nhóm dịch vụ chính gồm gia công CNC, phay, mài và xử lý nhiệt, đáp ứng yêu cầu chất lượng cho sản xuất trong nước và xuất khẩu.",
    ctaTitle: "Cần tư vấn dịch vụ gia công?",
    ctaDesc: "Gửi yêu cầu để đội ngũ kỹ thuật hỗ trợ báo giá, tư vấn vật liệu và phương án gia công phù hợp.",
    contactNow: "Liên Hệ Ngay",
    viewDetail: "Xem chi tiết",
  },
  en: {
    heroTag: "Services",
    heroTitle: "Industrial Metal Processing Services",
    heroDesc: "CHANGFA provides four core services: CNC machining, milling, grinding and heat treatment for industrial production.",
    ctaTitle: "Need service consultation?",
    ctaDesc: "Send your request for quotation, material advice and suitable processing plans.",
    contactNow: "Contact Now",
    viewDetail: "View details",
  },
  zh: {
    heroTag: "服务",
    heroTitle: "工业金属加工服务",
    heroDesc: "CHANGFA 提供 CNC 加工、铣削、磨削与热处理四大核心服务。",
    ctaTitle: "需要加工服务咨询？",
    ctaDesc: "提交需求即可获取报价、材料建议与工艺方案。",
    contactNow: "立即联系",
    viewDetail: "查看详情",
  },
  ja: {
    heroTag: "サービス",
    heroTitle: "産業用金属加工サービス",
    heroDesc: "CHANGFA は CNC 加工、フライス、研削、熱処理の4つの主要サービスを提供します。",
    ctaTitle: "加工サービスのご相談はこちら",
    ctaDesc: "見積依頼を送信いただければ、材料選定と加工方案をご提案します。",
    contactNow: "今すぐ連絡",
    viewDetail: "詳細を見る",
  },
  ko: {
    heroTag: "서비스",
    heroTitle: "산업용 금속 가공 서비스",
    heroDesc: "CHANGFA는 CNC 가공, 밀링, 연마, 열처리의 4가지 핵심 서비스를 제공합니다.",
    ctaTitle: "가공 서비스 상담이 필요하신가요?",
    ctaDesc: "요청을 보내주시면 견적, 소재 선정, 가공 방안을 함께 안내해 드립니다.",
    contactNow: "지금 문의",
    viewDetail: "자세히 보기",
  },
}

export const servicesData: ServiceItem[] = [
  {
    slug: "gia-cong-cnc",
    image: "/images/factory.jpg",
    translations: {
      vi: {
        name: "Dịch vụ Gia công CNC",
        shortDescription: "Gia công CNC chuyên nghiệp với độ chính xác cao, đáp ứng các chi tiết cơ khí phức tạp.",
        detailLabel: "Chi tiết sản phẩm",
        section: {
          title: "DỊCH VỤ GIA CÔNG CNC",
          subtitle: "Dịch vụ gia công CNC tại Công ty TNHH Thép ChangFa",
          intro: "Công ty TNHH Thép Chang Fa tự hào cung cấp dịch vụ gia công CNC chuyên nghiệp, đáp ứng mọi nhu cầu của khách hàng. Với hệ thống máy móc hiện đại, đội ngũ kỹ thuật viên tay nghề cao và nhiều năm kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng:",
          highlights: [
            { title: "Sản phẩm chất lượng cao", items: ["Độ chính xác cao, đáp ứng mọi yêu cầu kỹ thuật.", "Bề mặt sản phẩm nhẵn mịn, sáng bóng."] },
            { title: "Giá cả cạnh tranh", items: ["Cung cấp báo giá chi tiết, cạnh tranh trên thị trường.", "Có nhiều chương trình ưu đãi cho khách hàng thân thiết."] },
            { title: "Dịch vụ chuyên nghiệp", items: ["Tư vấn miễn phí về kỹ thuật gia công CNC thép.", "Tiếp nhận đơn hàng nhanh chóng, giao hàng đúng hẹn."] },
          ],
          processTitle: "Quy trình gia công CNC tại ChangFa",
          steps: [
            "Tiếp nhận yêu cầu: Khách hàng cung cấp bản vẽ hoặc thông tin chi tiết về sản phẩm cần gia công.",
            "Tư vấn kỹ thuật: Kỹ thuật viên ChangFa sẽ tư vấn cho khách hàng về phương pháp gia công phù hợp nhất, đảm bảo chất lượng và hiệu quả.",
            "Lập trình và gia công: Sử dụng phần mềm hiện đại để lập trình và gia công sản phẩm gia công CNC.",
            "Kiểm tra và nghiệm thu: Sản phẩm sau khi gia công được kiểm tra kỹ lưỡng về độ chính xác kích thước, chất lượng bề mặt.",
            "Giao hàng: Sản phẩm được đóng gói cẩn thận và giao hàng đến tay khách hàng.",
          ],
        },
      },
      en: {
        name: "CNC Machining Service",
        shortDescription: "Professional CNC machining for complex parts with high precision.",
        detailLabel: "Service details",
        section: {
          title: "CNC MACHINING SERVICE",
          subtitle: "CNC machining service at ChangFa Steel Co., Ltd.",
          intro: "ChangFa Steel provides professional CNC machining service with modern equipment and experienced technicians.",
          highlights: [
            { title: "High quality output", items: ["High dimensional accuracy.", "Smooth and consistent surface finish."] },
            { title: "Competitive pricing", items: ["Clear and competitive quotations.", "Preferential support for loyal customers."] },
            { title: "Professional service", items: ["Free technical consultation.", "Fast order handling and on-time delivery."] },
          ],
          processTitle: "CNC process at ChangFa",
          steps: ["Receive drawing and requirements.", "Advise suitable machining method.", "Programming and machining.", "Inspection and acceptance.", "Packing and delivery."],
        },
      },
      zh: {
        name: "CNC 加工服务",
        shortDescription: "专业 CNC 加工，适用于复杂零件与高精度需求。",
        detailLabel: "服务详情",
        section: {
          title: "CNC 加工服务",
          subtitle: "ChangFa 钢铁 CNC 加工服务",
          intro: "ChangFa 提供专业 CNC 加工服务，满足多种复杂零件加工需求。",
          highlights: [
            { title: "高质量产品", items: ["尺寸精度高。", "表面质量稳定。"] },
            { title: "有竞争力的价格", items: ["报价清晰透明。", "老客户可享优惠。"] },
            { title: "专业服务", items: ["提供技术咨询。", "快速接单并按时交付。"] },
          ],
          processTitle: "ChangFa CNC 加工流程",
          steps: ["接收图纸与需求。", "技术评估与方案建议。", "编程与加工。", "检验与验收。", "包装与交付。"],
        },
      },
      ja: {
        name: "CNC 加工サービス",
        shortDescription: "高精度が求められる複雑部品向けの CNC 加工サービス。",
        detailLabel: "サービス詳細",
        section: {
          title: "CNC 加工サービス",
          subtitle: "CHANGFA の CNC 加工サービス",
          intro: "CHANGFA は最新設備と経験豊富な技術者により、高品質な CNC 加工を提供します。",
          highlights: [
            { title: "高品質", items: ["高い寸法精度。", "安定した表面品質。"] },
            { title: "競争力のある価格", items: ["明確な見積。", "継続顧客向け優遇。"] },
            { title: "プロ対応", items: ["技術相談に対応。", "迅速な受注と納期対応。"] },
          ],
          processTitle: "CHANGFA の CNC 加工フロー",
          steps: ["図面・要求確認。", "技術提案。", "プログラム作成と加工。", "検査・確認。", "梱包・納品。"],
        },
      },
      ko: {
        name: "CNC 가공 서비스",
        shortDescription: "고정밀이 필요한 복잡 부품을 위한 CNC 가공 서비스.",
        detailLabel: "서비스 상세",
        section: {
          title: "CNC 가공 서비스",
          subtitle: "CHANGFA의 CNC 가공 서비스",
          intro: "CHANGFA는 최신 설비와 숙련된 기술진으로 전문 CNC 가공 서비스를 제공합니다.",
          highlights: [
            { title: "고품질 제품", items: ["높은 치수 정밀도.", "안정적인 표면 품질."] },
            { title: "경쟁력 있는 가격", items: ["명확한 견적 제공.", "기존 고객 우대."] },
            { title: "전문 서비스", items: ["기술 상담 지원.", "빠른 접수와 납기 대응."] },
          ],
          processTitle: "CHANGFA CNC 가공 절차",
          steps: ["도면과 요구사항 접수.", "기술 검토 및 제안.", "프로그램 작성 및 가공.", "검사 및 검수.", "포장 및 납품."],
        },
      },
    },
  },
  {
    slug: "phay",
    image: "/images/steel-products.jpg",
    translations: {
      vi: {
        name: "Dịch vụ Phay",
        shortDescription: "Dịch vụ phay thép chuyên nghiệp với hệ thống máy phay hiện đại và độ chính xác ổn định.",
        detailLabel: "Chi tiết sản phẩm",
        section: {
          title: "DỊCH VỤ PHAY",
          subtitle: "Công ty TNHH Thép CHANG FA tự hào cung cấp dịch vụ phay thép chuyên nghiệp",
          intro: "Công ty TNHH Thép CHANG FA tự hào cung cấp dịch vụ phay thép chuyên nghiệp, đáp ứng mọi nhu cầu của khách hàng. Với hệ thống máy móc hiện đại, đội ngũ kỹ thuật viên tay nghề cao và nhiều năm kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng:",
          highlights: [
            { title: "Sản phẩm chất lượng cao", items: ["Độ chính xác cao, đáp ứng mọi yêu cầu kỹ thuật.", "Bề mặt sản phẩm nhẵn mịn, sáng bóng.", "Sản phẩm bền bỉ, chịu tải trọng cao."] },
            { title: "Giá cả cạnh tranh", items: ["Cung cấp báo giá chi tiết, cạnh tranh trên thị trường.", "Có nhiều chương trình ưu đãi cho khách hàng thân thiết."] },
            { title: "Dịch vụ chuyên nghiệp", items: ["Tư vấn miễn phí về kỹ thuật phay thép.", "Tiếp nhận đơn hàng nhanh chóng, giao hàng đúng hẹn.", "Chế độ bảo hành sản phẩm chu đáo."] },
          ],
          processTitle: "Quy trình phay thép tại ChangFa",
          steps: [
            "Tiếp nhận yêu cầu: Khách hàng cung cấp bản vẽ hoặc thông tin chi tiết về sản phẩm cần phay.",
            "Tư vấn kỹ thuật: Kỹ thuật viên ChangFa sẽ tư vấn cho khách hàng về phương pháp phay phù hợp nhất, đảm bảo chất lượng và hiệu quả.",
            "Lập trình và gia công: Sử dụng phần mềm hiện đại để lập trình và gia công sản phẩm trên hệ thống máy phay CNC.",
            "Kiểm tra và nghiệm thu: Sản phẩm sau khi gia công được kiểm tra kỹ lưỡng về độ chính xác, kích thước, chất lượng bề mặt.",
            "Giao hàng: Sản phẩm được đóng gói cẩn thận và giao hàng đến tay khách hàng đúng hẹn.",
          ],
          noteTitle: "Ngoài dịch vụ phay thép, ChangFa còn cung cấp nhiều dịch vụ gia công cơ khí khác như",
          notes: ["Cắt cưa kim loại", "Mài, tiện, doa kim loại", "Hàn kim loại", "Gia công cơ khí chính xác"],
        },
      },
      en: { name: "Milling Service", shortDescription: "Steel milling service with stable tolerance control and consistent finish.", detailLabel: "Service details", section: { title: "MILLING SERVICE", subtitle: "Professional steel milling service", intro: "ChangFa provides professional steel milling service with modern machines and skilled technicians.", highlights: [{ title: "Quality", items: ["High precision.", "Smooth surface.", "Stable performance."] }, { title: "Pricing", items: ["Competitive quotations.", "Preferential offers."] }, { title: "Support", items: ["Technical consultation.", "Fast processing and delivery.", "Careful after-sales support."] }], processTitle: "Milling process", steps: ["Receive drawings.", "Technical consultation.", "Programming and milling.", "Inspection.", "Delivery."], noteTitle: "Additional machining services", notes: ["Metal sawing", "Grinding, turning, boring", "Metal welding", "Precision machining"] } },
      zh: { name: "铣削服务", shortDescription: "钢材铣削服务，稳定控制尺寸精度与表面质量。", detailLabel: "服务详情", section: { title: "铣削服务", subtitle: "专业钢材铣削服务", intro: "ChangFa 提供专业钢材铣削服务，满足多种加工需求。", highlights: [{ title: "高质量", items: ["精度稳定。", "表面光洁。", "产品耐用。"] }, { title: "价格优势", items: ["报价清晰。", "可提供优惠支持。"] }, { title: "专业支持", items: ["提供技术咨询。", "快速交付。", "售后支持完善。"] }], processTitle: "铣削流程", steps: ["接收图纸。", "技术评估。", "编程与铣削。", "检验。", "交付。"], noteTitle: "其他机械加工服务", notes: ["金属锯切", "磨削、车削、镗削", "焊接", "精密机械加工"] } },
      ja: { name: "フライスサービス", shortDescription: "寸法精度と仕上がりを安定して管理するフライス加工。", detailLabel: "サービス詳細", section: { title: "フライスサービス", subtitle: "鋼材向けフライス加工サービス", intro: "CHANGFA は多様な要求に対応するフライス加工サービスを提供します。", highlights: [{ title: "品質", items: ["高精度。", "良好な表面仕上げ。", "安定した耐久性。"] }, { title: "価格", items: ["明確な見積。", "優遇対応。"] }, { title: "対応力", items: ["技術相談。", "迅速な納品。", "丁寧なサポート。"] }], processTitle: "フライス加工フロー", steps: ["図面受領。", "技術提案。", "プログラム作成と加工。", "検査。", "納品。"], noteTitle: "その他の機械加工サービス", notes: ["金属切断", "研削・旋削・中ぐり", "溶接", "精密加工"] } },
      ko: { name: "밀링 서비스", shortDescription: "치수 정밀도와 표면 품질을 안정적으로 관리하는 밀링 가공.", detailLabel: "서비스 상세", section: { title: "밀링 서비스", subtitle: "전문 철강 밀링 서비스", intro: "CHANGFA는 다양한 요구에 대응하는 전문 밀링 서비스를 제공합니다.", highlights: [{ title: "품질", items: ["높은 정밀도.", "우수한 표면 품질.", "안정적인 내구성."] }, { title: "가격", items: ["명확한 견적.", "우대 조건 제공."] }, { title: "전문 지원", items: ["기술 상담.", "빠른 납기.", "사후 지원."] }], processTitle: "밀링 공정", steps: ["도면 접수.", "기술 검토.", "프로그램 작성 및 가공.", "검사.", "납품."], noteTitle: "추가 기계가공 서비스", notes: ["금속 절단", "연마·선반·보링", "용접", "정밀 기계가공"] } },
    },
  },
  {
    slug: "mai",
    image: "/images/die-steel.jpg",
    translations: {
      vi: {
        name: "Dịch vụ Mài",
        shortDescription: "Dịch vụ mài thép chuyên nghiệp, kiểm soát tốt độ chính xác kích thước và bề mặt.",
        detailLabel: "Chi tiết sản phẩm",
        section: {
          title: "DỊCH VỤ MÀI",
          subtitle: "Dịch vụ Mài thép tại Công ty TNHH Thép ChangFa",
          intro: "Công ty TNHH Thép ChangFa tự hào cung cấp dịch vụ mài thép chuyên nghiệp, đáp ứng mọi nhu cầu của khách hàng. Với hệ thống máy móc hiện đại, đội ngũ kỹ thuật viên tay nghề cao và nhiều năm kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng:",
          highlights: [
            { title: "Sản phẩm chất lượng cao", items: ["Độ chính xác cao, đáp ứng mọi yêu cầu kỹ thuật.", "Bề mặt sản phẩm nhẵn mịn, sáng bóng.", "Sản phẩm bền bỉ, chịu tải trọng cao."] },
            { title: "Giá cả cạnh tranh", items: ["Cung cấp báo giá chi tiết, cạnh tranh trên thị trường.", "Có nhiều chương trình ưu đãi cho khách hàng thân thiết."] },
            { title: "Dịch vụ chuyên nghiệp", items: ["Tư vấn miễn phí về kỹ thuật mài thép.", "Tiếp nhận đơn hàng nhanh chóng, giao hàng đúng hẹn.", "Chế độ bảo hành sản phẩm chu đáo."] },
          ],
          processTitle: "Quy trình mài thép tại ChangFa",
          steps: [
            "Tiếp nhận yêu cầu: Khách hàng cung cấp thông tin chi tiết về sản phẩm cần mài, bao gồm kích thước, vật liệu, độ chính xác yêu cầu, v.v.",
            "Tư vấn kỹ thuật: Kỹ thuật viên ChangFa sẽ tư vấn cho khách hàng về phương pháp mài phù hợp nhất, đảm bảo chất lượng và hiệu quả.",
            "Cố định sản phẩm: Sản phẩm được cố định chắc chắn trên máy mài để đảm bảo an toàn và độ chính xác trong quá trình mài.",
            "Gia công: Sử dụng các loại đá mài để mài theo yêu cầu.",
            "Kiểm tra và nghiệm thu: Sản phẩm sau khi mài được kiểm tra kỹ lưỡng về độ chính xác, kích thước, chất lượng bề mặt.",
            "Giao hàng: Sản phẩm được đóng gói cẩn thận và giao hàng đến tay khách hàng.",
          ],
          noteTitle: "Dịch vụ mài thép của ChangFa phù hợp với nhiều loại thép khác nhau, bao gồm",
          notes: ["Thép công cụ", "Thép khuôn", "Thép gió", "Thép không gỉ", "Thép carbon"],
        },
      },
      en: { name: "Grinding Service", shortDescription: "Steel grinding service for dimensional accuracy and smooth surfaces.", detailLabel: "Service details", section: { title: "GRINDING SERVICE", subtitle: "Professional steel grinding service", intro: "ChangFa provides professional steel grinding for various technical requirements.", highlights: [{ title: "Quality", items: ["High dimensional accuracy.", "Smooth surface finish.", "Reliable performance."] }, { title: "Competitive pricing", items: ["Detailed quotations.", "Customer support offers."] }, { title: "Professional service", items: ["Grinding consultation.", "Fast order handling.", "After-sales support."] }], processTitle: "Grinding process", steps: ["Receive requirements.", "Technical consultation.", "Fix the workpiece.", "Grinding operation.", "Inspection.", "Delivery."], noteTitle: "Applicable steel groups", notes: ["Tool steel", "Mold steel", "High speed steel", "Stainless steel", "Carbon steel"] } },
      zh: { name: "磨削服务", shortDescription: "钢材磨削服务，满足尺寸精度与表面光洁度要求。", detailLabel: "服务详情", section: { title: "磨削服务", subtitle: "专业钢材磨削服务", intro: "ChangFa 提供专业磨削服务，满足多种精密加工需求。", highlights: [{ title: "质量", items: ["高尺寸精度。", "表面平整光洁。", "性能稳定。"] }, { title: "价格", items: ["报价清晰。", "提供客户优惠。"] }, { title: "服务", items: ["技术咨询。", "快速响应。", "售后支持。"] }], processTitle: "磨削流程", steps: ["接收要求。", "技术建议。", "工件固定。", "实施磨削。", "检验。", "交付。"], noteTitle: "适用钢种", notes: ["工具钢", "模具钢", "高速钢", "不锈钢", "碳钢"] } },
      ja: { name: "研削サービス", shortDescription: "寸法精度と表面品質を重視した研削サービス。", detailLabel: "サービス詳細", section: { title: "研削サービス", subtitle: "鋼材向け研削サービス", intro: "CHANGFA は高精度な研削サービスを提供します。", highlights: [{ title: "品質", items: ["高い寸法精度。", "滑らかな表面。", "安定した品質。"] }, { title: "価格", items: ["明確な見積。", "優遇対応。"] }, { title: "対応", items: ["技術相談。", "迅速対応。", "丁寧なフォロー。"] }], processTitle: "研削フロー", steps: ["要求受付。", "技術検討。", "ワーク固定。", "研削加工。", "検査。", "納品。"], noteTitle: "対応鋼種", notes: ["工具鋼", "金型鋼", "高速度鋼", "ステンレス鋼", "炭素鋼"] } },
      ko: { name: "연마 서비스", shortDescription: "정밀 치수와 매끄러운 표면 품질을 위한 연마 서비스.", detailLabel: "서비스 상세", section: { title: "연마 서비스", subtitle: "전문 철강 연마 서비스", intro: "CHANGFA는 다양한 정밀 가공 요구에 맞는 연마 서비스를 제공합니다.", highlights: [{ title: "품질", items: ["높은 치수 정밀도.", "매끄러운 표면.", "안정적인 품질."] }, { title: "가격", items: ["상세 견적 제공.", "고객 우대 혜택."] }, { title: "서비스", items: ["기술 상담.", "빠른 대응.", "사후 지원."] }], processTitle: "연마 공정", steps: ["요구사항 접수.", "기술 검토.", "제품 고정.", "연마 가공.", "검사.", "납품."], noteTitle: "적용 가능 강종", notes: ["공구강", "금형강", "고속도강", "스테인리스강", "탄소강"] } },
    },
  },
  {
    slug: "xu-ly-nhiet",
    image: "/images/hero-steel.jpg",
    translations: {
      vi: {
        name: "Dịch vụ Xử lý nhiệt",
        shortDescription: "Dịch vụ xử lý nhiệt theo yêu cầu nhằm nâng cao cơ tính, độ cứng và độ bền làm việc của vật liệu.",
        detailLabel: "Chi tiết sản phẩm",
        section: {
          title: "DỊCH VỤ XỬ LÝ NHIỆT",
          subtitle: "Dịch vụ xử lý nhiệt tại Công ty TNHH Thép ChangFa",
          intro: "Công ty TNHH Thép ChangFa cung cấp dịch vụ xử lý nhiệt chuyên nghiệp cho các loại thép đặc biệt, thép khuôn, thép gió, thép không gỉ, v.v. Với nhiều năm kinh nghiệm trong lĩnh vực xử lý nhiệt, đội ngũ kỹ thuật viên tay nghề cao và hệ thống máy móc hiện đại, chúng tôi cam kết mang đến cho khách hàng:",
          highlights: [
            {
              title: "Sản phẩm chất lượng cao",
              items: [
                "Đảm bảo các thông số kỹ thuật về độ cứng, độ dẻo dai, độ bền, v.v. của sản phẩm sau khi xử lý nhiệt.",
                "Giúp sản phẩm tăng tuổi thọ sử dụng, chịu tải trọng cao và hoạt động hiệu quả.",
              ],
            },
            {
              title: "Giá cả cạnh tranh",
              items: [
                "Cung cấp báo giá chi tiết, cạnh tranh trên thị trường.",
                "Có nhiều chương trình ưu đãi cho khách hàng thân thiết.",
              ],
            },
            {
              title: "Dịch vụ chuyên nghiệp",
              items: [
                "Tư vấn miễn phí về quy trình xử lý nhiệt phù hợp cho từng loại thép và ứng dụng.",
                "Tiếp nhận đơn hàng nhanh chóng, giao hàng đúng hẹn.",
                "Chế độ bảo hành sản phẩm chu đáo.",
              ],
            },
          ],
          processTitle: "Quy trình xử lý nhiệt tại ChangFa",
          steps: [
            "Tiếp nhận yêu cầu: Khách hàng cung cấp thông tin chi tiết về sản phẩm cần xử lý nhiệt, bao gồm loại thép, kích thước, yêu cầu về độ cứng, độ dẻo dai, v.v.",
            "Tư vấn kỹ thuật: Kỹ thuật viên ChangFa sẽ tư vấn cho khách hàng về quy trình xử lý nhiệt phù hợp nhất, đảm bảo chất lượng và hiệu quả.",
            "Vệ sinh sản phẩm: Sản phẩm được vệ sinh sạch sẽ để loại bỏ bụi bẩn, dầu mỡ, v.v. trước khi xử lý nhiệt.",
            "Gia công: Sản phẩm được nung nóng trong lò theo thời gian và nhiệt độ phù hợp với quy trình xử lý nhiệt đã chọn.",
            "Làm nguội: Sản phẩm được làm nguội theo phương pháp phù hợp để đảm bảo đạt được các tính chất mong muốn.",
            "Kiểm tra và nghiệm thu: Sản phẩm sau khi xử lý nhiệt được kiểm tra kỹ lưỡng về độ cứng, độ dẻo dai, độ bền, v.v.",
            "Giao hàng: Sản phẩm được đóng gói cẩn thận và giao hàng đến tay khách hàng đúng hẹn.",
          ],
          noteTitle: "ChangFa cung cấp nhiều dịch vụ xử lý nhiệt khác nhau, bao gồm",
          notes: [
            "Ủ tôi luyện: Giúp loại bỏ ứng suất bên trong, tăng độ dẻo dai cho sản phẩm.",
            "Làm nguội: Giúp tăng độ cứng, độ bền cho sản phẩm.",
            "Ủ tôi luyện + làm nguội: Giúp sản phẩm đạt được độ cứng, độ dẻo dai và độ bền tối ưu.",
            "Ủ mềm: Giúp giảm độ cứng, tăng độ dẻo dai cho sản phẩm.",
            "Ủ bình thường hóa: Giúp đồng nhất cấu trúc vi mô của sản phẩm.",
          ],
        },
      },
      en: { name: "Heat Treatment Service", shortDescription: "Heat treatment service to improve hardness, strength and working performance.", detailLabel: "Service details", section: { title: "HEAT TREATMENT SERVICE", subtitle: "Heat treatment solutions at CHANGFA", intro: "CHANGFA provides heat treatment for engineering and tool steels to optimize hardness and performance.", highlights: [{ title: "Objectives", items: ["Improve hardness and mechanical properties.", "Stabilize microstructure and increase service life."] }, { title: "Quality control", items: ["Close monitoring of temperature cycles.", "Hardness and surface checks after treatment."] }, { title: "Technical support", items: ["Recommend suitable heat treatment route.", "Coordinate with machining stages for cost and schedule optimization."] }], processTitle: "Heat treatment process", steps: ["Receive technical requirements.", "Evaluate property targets.", "Set proper heat cycle.", "Perform treatment and inspection.", "Deliver after quality confirmation."] } },
      zh: { name: "热处理服务", shortDescription: "通过热处理提升材料硬度、强度与工作性能。", detailLabel: "服务详情", section: { title: "热处理服务", subtitle: "CHANGFA 定制热处理方案", intro: "CHANGFA 为工程钢与工具钢提供热处理服务，以优化硬度与使用性能。", highlights: [{ title: "处理目标", items: ["提高硬度与机械性能。", "稳定金相组织并提升寿命。"] }, { title: "质量控制", items: ["严格监控热处理制度。", "处理后检测硬度与表面状态。"] }, { title: "技术支持", items: ["建议合适的热处理方案。", "与机加工环节协同优化进度与成本。"] }], processTitle: "热处理流程", steps: ["接收技术要求。", "评估性能目标。", "制定热处理制度。", "执行处理与检测。", "确认质量后交付。"] } },
      ja: { name: "熱処理サービス", shortDescription: "材料の硬度・強度・耐久性を高める熱処理サービス。", detailLabel: "サービス詳細", section: { title: "熱処理サービス", subtitle: "CHANGFA の熱処理ソリューション", intro: "CHANGFA は機械構造用鋼・工具鋼向けに熱処理サービスを提供します。", highlights: [{ title: "目的", items: ["硬度と機械特性の向上。", "組織安定化と寿命向上。"] }, { title: "品質管理", items: ["熱処理条件を厳密管理。", "処理後の硬度・表面確認。"] }, { title: "技術支援", items: ["適切な熱処理方法を提案。", "他工程と連携して納期・コスト最適化。"] }], processTitle: "熱処理フロー", steps: ["技術条件の確認。", "目標特性の評価。", "熱処理条件設定。", "処理と検査。", "品質確認後に納品。"] } },
      ko: { name: "열처리 서비스", shortDescription: "재료의 경도, 강도, 내구성을 높이는 열처리 서비스.", detailLabel: "서비스 상세", section: { title: "열처리 서비스", subtitle: "CHANGFA 맞춤 열처리 솔루션", intro: "CHANGFA는 구조용강 및 공구강에 대해 열처리 서비스를 제공합니다.", highlights: [{ title: "처리 목표", items: ["경도와 기계적 성질 향상.", "조직 안정화와 수명 향상."] }, { title: "품질 관리", items: ["열처리 조건을 엄격히 관리.", "처리 후 경도와 표면 상태 점검."] }, { title: "기술 지원", items: ["적합한 열처리 방안 제안.", "다른 가공 공정과 연계해 비용·일정 최적화."] }], processTitle: "열처리 공정", steps: ["기술 요구사항 접수.", "목표 물성 평가.", "열처리 조건 설정.", "처리 및 검사.", "품질 확인 후 납품."] } },
    },
  },
]

export function getLocalizedServices(locale: Locale) {
  return servicesData.map((service) => ({
    slug: service.slug,
    image: service.image,
    ...service.translations[locale],
  }))
}

export function getLocalizedServiceBySlug(locale: Locale, slug: string) {
  const service = servicesData.find((item) => item.slug === slug)
  if (!service) return undefined
  return {
    slug: service.slug,
    image: service.image,
    ...service.translations[locale],
  }
}
