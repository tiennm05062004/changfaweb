import {
  Product,
  ProductCategory,
  getAllProducts,
  getCategoriesBySlugs,
  getCategoryBySlug,
  getProductBySlug,
  productCategories,
  productCategoryGroups,
} from "@/lib/products-data"
import { Locale } from "@/lib/i18n"

type ProductText = {
  name: string
  category: string
  description: string
  fullDescription: string
  applications: string[]
}

const groupTranslations: Partial<Record<Locale, { title: string; description: string }>> = {
  en: { title: "Product Lines", description: "Mold steel, engineering steel, tool steel, and other metals" },
  zh: { title: "产品系列", description: "模具钢、机械钢、工具钢及其他金属" },
  ja: { title: "製品ライン", description: "金型鋼・機械鋼・工具鋼・その他金属" },
  ko: { title: "제품 라인", description: "금형강, 기계강, 공구강 및 기타 금속" },
}

const categoryTranslations: Partial<Record<Locale, Record<string, { name: string; description: string }>>> = {
  en: {
    "thep-khuon": { name: "Mold Steel", description: "Plastic mold, cold and hot forging grades with equivalent global standards." },
    "thep-che-tao": { name: "Engineering Steel", description: "Structural alloy steels for machine parts with high strength." },
    "thep-cong-cu": { name: "Tool Steel", description: "Tool steels for bearings, cutters and carburized applications." },
    "san-pham-khac": { name: "Other Metals", description: "Stainless steel, aluminum, titanium and copper materials by request." },
  },
  zh: {
    "thep-khuon": { name: "模具钢", description: "塑料模、冷冲压、热冲压等模具钢牌号。" },
    "thep-che-tao": { name: "机械结构钢", description: "适用于机械零部件的高强度合金结构钢。" },
    "thep-cong-cu": { name: "工具钢", description: "用于轴承、刀具及渗碳零件的工具钢。" },
    "san-pham-khac": { name: "其他金属", description: "不锈钢、铝、钛、铜等按需供应。" },
  },
  ja: {
    "thep-khuon": { name: "金型鋼", description: "樹脂・冷間・熱間向けの各種金型鋼。" },
    "thep-che-tao": { name: "機械構造用鋼", description: "機械部品向け高強度合金構造鋼。" },
    "thep-cong-cu": { name: "工具鋼", description: "軸受・切削工具・浸炭部品向け工具鋼。" },
    "san-pham-khac": { name: "その他金属", description: "ステンレス、アルミ、チタン、銅などを供給。" },
  },
  ko: {
    "thep-khuon": { name: "금형강", description: "플라스틱 금형, 냉간·열간 금형용 강재." },
    "thep-che-tao": { name: "기계 구조강", description: "기계 부품용 고강도 합금 구조강." },
    "thep-cong-cu": { name: "공구강", description: "베어링, 절삭공구, 침탄 부품용 공구강." },
    "san-pham-khac": { name: "기타 금속", description: "스테인리스, 알루미늄, 티타늄, 구리 소재 공급." },
  },
}

const productTranslations: Partial<Record<Locale, Record<string, ProductText>>> = {
  en: {
    "thep-khuon-nhua": { name: "Plastic Mold Steel", category: "Mold Steel", description: "For plastic injection molds with high polishability and durability.", fullDescription: "Plastic mold steel for injection, extrusion and blow molds. Grade is selected by hardness, polishability and corrosion resistance requirements.", applications: ["Injection molds", "Extrusion molds", "Blow molds", "High-polish mold parts"] },
    "thep-khuon-dap-nguoi": { name: "Cold Work Mold Steel", category: "Mold Steel", description: "High hardness and wear resistance for cold stamping tools.", fullDescription: "Used for punching dies, cutting tools and wear parts. Heat treatment delivers the required hardness and toughness.", applications: ["Punching dies", "Bending dies", "Industrial cutters", "Wear-resistant parts"] },
    "thep-khuon-dap-nong": { name: "Hot Work Mold Steel", category: "Mold Steel", description: "Heat-resistant steel for hot forging and die casting.", fullDescription: "Hot work grades for high-temperature cycles such as hot stamping, aluminum/zinc die casting and extrusion.", applications: ["Hot forging dies", "Die casting molds", "Aluminum extrusion dies", "Heat-resistant parts"] },
    "thep-s45c": { name: "S45C Steel", category: "Engineering Steel", description: "Medium carbon steel with good machinability and cost performance.", fullDescription: "Widely used for shafts, gears and common machine parts with balanced hardness and ductility.", applications: ["Shafts", "Gears", "Bolts", "General machine parts"] },
    "thep-scm420": { name: "SCM420 Steel", category: "Engineering Steel", description: "Cr-Mo alloy steel with strong carburizing performance.", fullDescription: "Suitable for hard surface and tough core components such as gears and camshafts after carburizing.", applications: ["Gears", "Camshafts", "Carburized parts"] },
    "thep-scm440": { name: "SCM440 Steel", category: "Engineering Steel", description: "High-strength steel with good fatigue resistance.", fullDescription: "Used in dynamically loaded parts such as crankshafts, transmission shafts and heavy gears.", applications: ["Crankshafts", "Transmission shafts", "Large gears"] },
    "thep-ket-cau-hop-kim": { name: "Alloy Structural Steel", category: "Engineering Steel", description: "High-strength steels for load-bearing components.", fullDescription: "For critical mechanical components requiring reliability and mechanical strength.", applications: ["Load-bearing parts", "Shafts", "Gears", "Mechanical structures"] },
    "thep-carbon": { name: "Carbon Steel", category: "Engineering Steel", description: "Cost-effective steel with broad machining applications.", fullDescription: "Carbon steel grades for common machine components and structures.", applications: ["Machine components", "Structures", "Small shafts", "Machining stock"] },
    "thep-suj2": { name: "SUJ2 Steel", category: "Tool Steel", description: "High-chromium bearing steel with excellent wear resistance.", fullDescription: "Used for bearing rings, steel balls and rollers requiring high surface hardness.", applications: ["Bearing rings", "Steel balls", "Rollers", "Wear-resistant parts"] },
    "thep-scm415": { name: "SCM415 Steel", category: "Tool Steel", description: "Carburizing steel with hard surface and tough core.", fullDescription: "For high-load gears and bearing shaft parts requiring surface hardness.", applications: ["Loaded gears", "Bearing shafts", "Carburized parts"] },
    dong: { name: "Copper", category: "Other Metals", description: "Copper and copper alloys for electrical and thermal applications.", fullDescription: "Supply of pure copper and brass with tailored dimensions and optional certificates.", applications: ["Thermal mold parts", "Electrical components", "Mechanical parts"] },
    nhom: { name: "Aluminum", category: "Other Metals", description: "Aluminum alloys and plates for lightweight mechanical parts.", fullDescription: "Support for quotation and sizing based on mold, frame and CNC part applications.", applications: ["Lightweight molds", "Frames", "CNC parts"] },
    titan: { name: "Titanium", category: "Other Metals", description: "Titanium alloys with low density and high corrosion resistance.", fullDescription: "Grade consultation based on technical requirements and supply capability.", applications: ["Aerospace", "Medical", "Chemical", "Special parts"] },
    inox: { name: "Stainless Steel", category: "Other Metals", description: "Stainless steel for food, chemical and decorative uses.", fullDescription: "Austenitic and martensitic stainless grades with recommendation by environment and process.", applications: ["Food equipment", "Chemical systems", "Decoration", "Corrosion-resistant parts"] },
  },
  zh: {
    "thep-khuon-nhua": { name: "塑料模具钢", category: "模具钢", description: "用于注塑模具，具备良好抛光性与耐用性。", fullDescription: "适用于注塑、挤出、吹塑模具。可根据硬度、抛光性和耐腐蚀要求选择牌号。", applications: ["注塑模具", "挤出模具", "吹塑模具", "高抛光模具零件"] },
    "thep-khuon-dap-nguoi": { name: "冷作模具钢", category: "模具钢", description: "高硬度、耐磨，适合冷冲压工况。", fullDescription: "用于冲裁模、切削刀具及耐磨零件。经热处理后可获得所需硬度与韧性。", applications: ["冲裁模", "折弯模", "工业刀具", "耐磨零件"] },
    "thep-khuon-dap-nong": { name: "热作模具钢", category: "模具钢", description: "耐高温，适用于热锻与压铸。", fullDescription: "适用于热冲压、铝锌压铸和挤压等高温循环工况。", applications: ["热锻模具", "压铸模具", "铝挤压模具", "耐热零件"] },
    "thep-s45c": { name: "S45C 钢", category: "机械结构钢", description: "中碳钢，易加工，性价比高。", fullDescription: "广泛用于轴、齿轮和通用机械零件，兼顾硬度与韧性。", applications: ["轴类", "齿轮", "螺栓", "通用机械零件"] },
    "thep-scm420": { name: "SCM420 钢", category: "机械结构钢", description: "Cr-Mo 合金钢，渗碳性能优异。", fullDescription: "适用于表面高硬、芯部韧性的零件，如齿轮和凸轮轴。", applications: ["齿轮", "凸轮轴", "渗碳零件"] },
    "thep-scm440": { name: "SCM440 钢", category: "机械结构钢", description: "高强度，抗疲劳性能好。", fullDescription: "适用于曲轴、传动轴和大型齿轮等动态受载零件。", applications: ["曲轴", "传动轴", "大型齿轮"] },
    "thep-ket-cau-hop-kim": { name: "合金结构钢", category: "机械结构钢", description: "高强度钢材，适用于承载部件。", fullDescription: "用于关键机械零件，满足可靠性与力学性能要求。", applications: ["承载零件", "轴类", "齿轮", "机械结构件"] },
    "thep-carbon": { name: "碳钢", category: "机械结构钢", description: "成本友好，应用范围广。", fullDescription: "用于常规机械零件与结构件加工制造。", applications: ["机械零件", "结构件", "小轴", "机加工毛坯"] },
    "thep-suj2": { name: "SUJ2 轴承钢", category: "工具钢", description: "高铬轴承钢，耐磨性能优异。", fullDescription: "用于轴承套圈、钢球和滚子，热处理后表面硬度高。", applications: ["轴承套圈", "钢球", "滚子", "耐磨零件"] },
    "thep-scm415": { name: "SCM415 钢", category: "工具钢", description: "渗碳钢，表硬里韧。", fullDescription: "适用于高负载齿轮与轴承轴类零件。", applications: ["重载齿轮", "轴承轴", "渗碳零件"] },
    dong: { name: "铜", category: "其他金属", description: "铜及铜合金，适用于电气和导热场景。", fullDescription: "供应紫铜、黄铜等材料，可按尺寸与要求提供。", applications: ["导热模具零件", "电气部件", "机械零件"] },
    nhom: { name: "铝", category: "其他金属", description: "铝合金与铝板，适用于轻量化部件。", fullDescription: "可按模具、框架和 CNC 零件应用提供报价与规格。", applications: ["轻量模具", "框架", "CNC 零件"] },
    titan: { name: "钛", category: "其他金属", description: "钛合金，密度低且耐腐蚀。", fullDescription: "可根据技术要求与供货条件推荐合适牌号。", applications: ["航空航天", "医疗", "化工", "特殊零件"] },
    inox: { name: "不锈钢", category: "其他金属", description: "用于食品、化工和装饰领域。", fullDescription: "提供奥氏体与马氏体等不锈钢牌号，并按工况推荐。", applications: ["食品设备", "化工系统", "装饰", "耐腐蚀零件"] },
  },
  ja: {
    "thep-khuon-nhua": { name: "樹脂金型鋼", category: "金型鋼", description: "射出成形金型向けで、研磨性と耐久性に優れます。", fullDescription: "射出・押出・ブロー金型に対応。硬度、研磨性、耐食性要件に応じて鋼種を選定します。", applications: ["射出成形金型", "押出金型", "ブロー金型", "高鏡面金型部品"] },
    "thep-khuon-dap-nguoi": { name: "冷間金型鋼", category: "金型鋼", description: "高硬度・高耐摩耗で冷間プレスに最適です。", fullDescription: "打ち抜き金型、切削工具、耐摩耗部品向け。熱処理で必要な硬度と靭性を確保します。", applications: ["打ち抜き金型", "曲げ金型", "工業用カッター", "耐摩耗部品"] },
    "thep-khuon-dap-nong": { name: "熱間金型鋼", category: "金型鋼", description: "高温耐性が高く、熱間鍛造やダイカストに適用。", fullDescription: "熱間プレス、アルミ・亜鉛ダイカスト、押出など高温サイクル用途に対応します。", applications: ["熱間鍛造金型", "ダイカスト金型", "アルミ押出金型", "耐熱部品"] },
    "thep-s45c": { name: "S45C 鋼", category: "機械構造用鋼", description: "中炭素鋼で加工性とコストバランスに優れます。", fullDescription: "シャフト、ギア、一般機械部品で幅広く使用され、硬さと延性のバランスが良好です。", applications: ["シャフト", "ギア", "ボルト", "一般機械部品"] },
    "thep-scm420": { name: "SCM420 鋼", category: "機械構造用鋼", description: "Cr-Mo 系合金鋼で浸炭性に優れます。", fullDescription: "表面硬化と芯部靭性が必要なギアやカムシャフト部品に適しています。", applications: ["ギア", "カムシャフト", "浸炭部品"] },
    "thep-scm440": { name: "SCM440 鋼", category: "機械構造用鋼", description: "高強度で疲労特性に優れます。", fullDescription: "クランクシャフト、伝達軸、大型ギアなど動的荷重部品に適用されます。", applications: ["クランクシャフト", "伝達軸", "大型ギア"] },
    "thep-ket-cau-hop-kim": { name: "合金構造鋼", category: "機械構造用鋼", description: "高強度で荷重部品に適した鋼材です。", fullDescription: "高い信頼性と機械特性が求められる重要部品向けです。", applications: ["荷重部品", "シャフト", "ギア", "機械構造部品"] },
    "thep-carbon": { name: "炭素鋼", category: "機械構造用鋼", description: "コスト効率が高く用途が広い鋼材です。", fullDescription: "一般機械部品および構造部材の加工に広く使用されます。", applications: ["機械部品", "構造部材", "小径シャフト", "加工素材"] },
    "thep-suj2": { name: "SUJ2 鋼", category: "工具鋼", description: "高クロム軸受鋼で耐摩耗性に優れます。", fullDescription: "軸受輪、鋼球、ローラーなど高表面硬度が必要な用途に使用されます。", applications: ["軸受輪", "鋼球", "ローラー", "耐摩耗部品"] },
    "thep-scm415": { name: "SCM415 鋼", category: "工具鋼", description: "浸炭鋼で表面硬度と芯部靭性を両立。", fullDescription: "高荷重ギアや軸受軸など、表面硬化が必要な部品向けです。", applications: ["高負荷ギア", "軸受軸", "浸炭部品"] },
    dong: { name: "銅", category: "その他金属", description: "電気・熱用途向けの銅および銅合金。", fullDescription: "純銅や真鍮などを、寸法要件に応じて供給可能です。", applications: ["熱伝導金型部品", "電装部品", "機械部品"] },
    nhom: { name: "アルミ", category: "その他金属", description: "軽量部品向けアルミ合金・板材。", fullDescription: "金型、フレーム、CNC 部品用途に応じた仕様提案が可能です。", applications: ["軽量金型", "フレーム", "CNC 部品"] },
    titan: { name: "チタン", category: "その他金属", description: "低密度で耐食性に優れるチタン合金。", fullDescription: "技術要件と供給条件に応じて最適なグレードをご提案します。", applications: ["航空宇宙", "医療", "化学", "特殊部品"] },
    inox: { name: "ステンレス鋼", category: "その他金属", description: "食品・化学・装飾用途向けステンレス。", fullDescription: "オーステナイト系、マルテンサイト系など用途に応じて提案します。", applications: ["食品設備", "化学設備", "装飾", "耐食部品"] },
  },
  ko: {
    "thep-khuon-nhua": { name: "플라스틱 금형강", category: "금형강", description: "사출 금형용으로 연마성·내구성이 우수합니다.", fullDescription: "사출, 압출, 블로우 금형에 적용 가능하며 경도·연마성·내식성 요구에 맞춰 강종을 선택합니다.", applications: ["사출 금형", "압출 금형", "블로우 금형", "고광택 금형 부품"] },
    "thep-khuon-dap-nguoi": { name: "냉간 금형강", category: "금형강", description: "고경도·내마모로 냉간 프레스에 적합합니다.", fullDescription: "펀칭 금형, 절삭 공구, 내마모 부품에 적용되며 열처리로 필요한 경도와 인성을 확보합니다.", applications: ["펀칭 금형", "벤딩 금형", "산업용 커터", "내마모 부품"] },
    "thep-khuon-dap-nong": { name: "열간 금형강", category: "금형강", description: "내열성이 높아 열간 단조·다이캐스팅에 적합합니다.", fullDescription: "열간 프레스, 알루미늄/아연 다이캐스팅, 압출 등 고온 사이클 공정에 대응합니다.", applications: ["열간 단조 금형", "다이캐스팅 금형", "알루미늄 압출 금형", "내열 부품"] },
    "thep-s45c": { name: "S45C 강", category: "기계 구조강", description: "중탄소강으로 가공성과 가격 경쟁력이 좋습니다.", fullDescription: "축, 기어, 일반 기계 부품에 널리 사용되며 경도와 연성의 균형이 우수합니다.", applications: ["축류", "기어", "볼트", "일반 기계 부품"] },
    "thep-scm420": { name: "SCM420 강", category: "기계 구조강", description: "Cr-Mo 합금강으로 침탄성이 우수합니다.", fullDescription: "표면 경도와 심부 인성이 필요한 기어, 캠샤프트 부품에 적합합니다.", applications: ["기어", "캠샤프트", "침탄 부품"] },
    "thep-scm440": { name: "SCM440 강", category: "기계 구조강", description: "고강도이며 피로 특성이 우수합니다.", fullDescription: "크랭크축, 전달축, 대형 기어 등 동적 하중 부품에 적용됩니다.", applications: ["크랭크축", "전달축", "대형 기어"] },
    "thep-ket-cau-hop-kim": { name: "합금 구조강", category: "기계 구조강", description: "고강도 하중 부품용 강재입니다.", fullDescription: "신뢰성과 기계적 특성이 중요한 핵심 부품에 적합합니다.", applications: ["하중 부품", "축류", "기어", "기계 구조물"] },
    "thep-carbon": { name: "탄소강", category: "기계 구조강", description: "비용 효율이 높고 활용 범위가 넓습니다.", fullDescription: "일반 기계 부품 및 구조물 가공에 폭넓게 사용됩니다.", applications: ["기계 부품", "구조물", "소형 축", "가공 소재"] },
    "thep-suj2": { name: "SUJ2 강", category: "공구강", description: "고크롬 베어링강으로 내마모성이 우수합니다.", fullDescription: "베어링 링, 강구, 롤러 등 높은 표면 경도가 필요한 용도에 사용됩니다.", applications: ["베어링 링", "강구", "롤러", "내마모 부품"] },
    "thep-scm415": { name: "SCM415 강", category: "공구강", description: "침탄강으로 표면 경도와 심부 인성을 확보합니다.", fullDescription: "고하중 기어 및 베어링 축과 같이 표면 경화가 필요한 부품에 적합합니다.", applications: ["고하중 기어", "베어링 축", "침탄 부품"] },
    dong: { name: "구리", category: "기타 금속", description: "전기·열전도 용도의 구리 및 구리 합금.", fullDescription: "순동, 황동 등을 규격 요구에 맞춰 공급할 수 있습니다.", applications: ["열전도 금형 부품", "전장 부품", "기계 부품"] },
    nhom: { name: "알루미늄", category: "기타 금속", description: "경량 부품용 알루미늄 합금 및 판재.", fullDescription: "금형, 프레임, CNC 부품 용도에 맞춘 규격 제안을 지원합니다.", applications: ["경량 금형", "프레임", "CNC 부품"] },
    titan: { name: "티타늄", category: "기타 금속", description: "저밀도·고내식 특성의 티타늄 합금.", fullDescription: "기술 요구와 공급 조건에 맞춰 적합한 등급을 제안합니다.", applications: ["항공우주", "의료", "화학", "특수 부품"] },
    inox: { name: "스테인리스강", category: "기타 금속", description: "식품·화학·장식 분야용 스테인리스.", fullDescription: "오스테나이트계, 마르텐사이트계 등 용도에 맞춰 제안합니다.", applications: ["식품 설비", "화학 설비", "장식", "내식 부품"] },
  },
}

function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === "vi") return product
  const translated = productTranslations[locale]?.[product.slug]
  if (!translated) {
    const genericText = {
      en: {
        category: "Industrial steel product",
        desc: "High-quality industrial material suitable for machining and manufacturing.",
        full: "This material is supplied according to project requirements with technical support from CHANGFA.",
        app: "Industrial manufacturing",
      },
      zh: {
        category: "工业钢材产品",
        desc: "适用于加工制造的高质量工业材料。",
        full: "该材料可按项目需求供应，并提供技术支持。",
        app: "工业制造",
      },
      ja: {
        category: "産業用鋼材製品",
        desc: "加工・製造向けの高品質産業材料です。",
        full: "本材料はプロジェクト要件に合わせて供給し、技術サポートを提供します。",
        app: "産業製造",
      },
      ko: {
        category: "산업용 강재 제품",
        desc: "가공 및 제조에 적합한 고품질 산업 소재입니다.",
        full: "프로젝트 요구사항에 맞춰 공급하며 기술 지원을 제공합니다.",
        app: "산업 제조",
      },
    }[locale as Exclude<Locale, "vi">]
    return {
      ...product,
      category: genericText.category,
      description: `${product.name}: ${genericText.desc}`,
      fullDescription: `${product.name}. ${genericText.full}`,
      applications: [genericText.app],
    }
  }
  return {
    ...product,
    name: translated.name,
    category: translated.category,
    description: translated.description,
    fullDescription: translated.fullDescription,
    applications: translated.applications,
  }
}

function localizeCategory(category: ProductCategory, locale: Locale): ProductCategory {
  if (locale === "vi") return category
  const translated = categoryTranslations[locale]?.[category.slug]
  return {
    ...category,
    name: translated?.name ?? category.name,
    description: translated?.description ?? category.description,
    products: category.products.map((product) => localizeProduct(product, locale)),
  }
}

export function getLocalizedProductCategories(locale: Locale): ProductCategory[] {
  return productCategories.map((category) => localizeCategory(category, locale))
}

export function getLocalizedCategoryBySlug(locale: Locale, slug: string): ProductCategory | undefined {
  const category = getCategoryBySlug(slug)
  if (!category) return undefined
  return localizeCategory(category, locale)
}

export function getLocalizedProductBySlug(locale: Locale, slug: string): Product | undefined {
  const product = getProductBySlug(slug)
  if (!product) return undefined
  return localizeProduct(product, locale)
}

export function getLocalizedAllProducts(locale: Locale): Product[] {
  return getAllProducts().map((product) => localizeProduct(product, locale))
}

export function getLocalizedCategoriesBySlugs(locale: Locale, slugs: string[]): ProductCategory[] {
  return getCategoriesBySlugs(slugs).map((category) => localizeCategory(category, locale))
}

export function getLocalizedProductCategoryGroups(locale: Locale) {
  if (locale === "vi") return productCategoryGroups
  const translated = groupTranslations[locale]
  if (!translated) return productCategoryGroups
  return productCategoryGroups.map((group) => ({
    ...group,
    title: translated.title,
    description: translated.description,
  }))
}
