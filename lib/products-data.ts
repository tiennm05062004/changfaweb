export interface Product {
  id: string
  name: string
  slug: string
  category: string
  categorySlug: string
  grades: string[]
  description: string
  fullDescription: string
  applications: string[]
  specifications: {
    hardness?: string
    composition?: string
    standard?: string[]
  }
  image: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
  products: Product[]
}

/** Nhóm danh mục hiển thị trên trang chủ / sản phẩm */
export const productCategoryGroups: {
  title: string
  description?: string
  slugs: string[]
}[] = [
  {
    title: "Theo dòng sản phẩm",
    description: "Thép khuôn, thép chế tạo, thép công cụ, sản phẩm khác",
    slugs: ["thep-khuon", "thep-che-tao", "thep-cong-cu", "san-pham-khac"],
  },
]

export function getCategoriesBySlugs(slugs: string[]): ProductCategory[] {
  const set = new Set(slugs)
  return productCategories.filter((c) => set.has(c.slug))
}

export const productCategories: ProductCategory[] = [
  {
    id: "thep-khuon",
    name: "Thép khuôn",
    slug: "thep-khuon",
    description:
      "Khuôn nhựa, dập nguội, dập nóng: S50C, P20, SKD11, SKD61, H13… và các mác tương đương.",
    image: "/images/die-steel.jpg",
    products: [
      {
        id: "thep-khuon-nhua",
        name: "Thép khuôn nhựa",
        slug: "thep-khuon-nhua",
        category: "Thép khuôn",
        categorySlug: "thep-khuon",
        grades: ["S50C", "S55C", "P20", "2083", "NaK80"],
        description:
          "Dùng cho khuôn ép nhựa; độ bóng, độ bền và khả năng gia công theo yêu cầu khuôn.",
        fullDescription:
          "Nhóm thép khuôn nhựa phục vụ sản xuất khuôn ép nhựa, đùn, thổi… Các mác như S50C, S55C, P20, 2083, NaK80 được lựa chọn tùy ứng dụng (độ cứng, đánh bóng, chống ăn mòn theo môi trường nhựa). CHANGFA hỗ trợ tư vấn mác và quy cách phù hợp bản vẽ.",
        applications: ["Khuôn ép nhựa", "Khuôn đùn", "Khuôn thổi", "Chi tiết khuôn cần độ bóng cao"],
        specifications: {
          hardness: "Theo mác và nhiệt luyện (tham khảo bảng kỹ thuật từng loại)",
          composition: "Theo tiêu chuẩn từng mác (carbon / hợp kim công cụ)",
          standard: ["DIN", "AISI", "JIS", "GB"],
        },
        image: "/images/die-steel.jpg",
      },
      {
        id: "thep-khuon-dap-nguoi",
        name: "Thép khuôn dập nguội",
        slug: "thep-khuon-dap-nguoi",
        category: "Thép khuôn",
        categorySlug: "thep-khuon",
        grades: ["Cr12MoV", "SKD11", "D2"],
        description: "Độ cứng cao, chống mài mòn, phù hợp khuôn dập cắt, uốn ở nhiệt độ thường.",
        fullDescription:
          "Thép khuôn dập nguội (Cr12MoV, SKD11, D2…) được dùng cho khuôn dập cắt, dao cắt, chi tiết chịu mài mòn cao. Sau nhiệt luyện đạt độ cứng và độ bền phù hợp từng loại khuôn.",
        applications: ["Khuôn dập cắt", "Khuôn uốn", "Dao cắt công nghiệp", "Chi tiết chịu mài mòn"],
        specifications: {
          hardness: "58–62 HRC (tham khảo theo mác và xử lý)",
          composition: "C, Cr cao (thép công cụ / khuôn dập nguội)",
          standard: ["DIN", "AISI", "JIS", "GB"],
        },
        image: "/images/die-steel.jpg",
      },
      {
        id: "thep-khuon-dap-nong",
        name: "Thép khuôn dập nóng",
        slug: "thep-khuon-dap-nong",
        category: "Thép khuôn",
        categorySlug: "thep-khuon",
        grades: ["SKD61", "H13", "1.2344", "SKT4", "DAC-MAGIC", "FDAC"],
        description: "Chịu nhiệt cao, độ bền nhiệt tốt, dùng khuôn dập nóng, đúc áp lực.",
        fullDescription:
          "Nhóm thép khuôn dập nóng (SKD61, H13, 1.2344, SKT4, DAC-MAGIC, FDAC…) phục vụ khuôn làm việc ở nhiệt độ cao: dập nóng, đúc nhôm/kẽm, ép đùn… Tư vấn mác theo chu kỳ nhiệt và áp lực thực tế.",
        applications: ["Khuôn dập nóng", "Khuôn đúc áp lực", "Khuôn ép đùn nhôm", "Chi tiết chịu nhiệt"],
        specifications: {
          hardness: "44–52 HRC (theo mác và nhiệt luyện)",
          composition: "Cr, Mo, V (thép công cụ nhiệt)",
          standard: ["DIN", "AISI", "JIS"],
        },
        image: "/images/die-steel.jpg",
      },
    ],
  },
  {
    id: "thep-che-tao",
    name: "Thép chế tạo",
    slug: "thep-che-tao",
    description:
      "Thép hợp kim kết cấu và chế tạo chi tiết máy: carbon, Cr–Mo, độ bền cao.",
    image: "/images/steel-products.jpg",
    products: [
      {
        id: "thep-s45c",
        name: "Thép S45C",
        slug: "thep-s45c",
        category: "Thép chế tạo",
        categorySlug: "thep-che-tao",
        grades: ["S45C", "C45", "1045"],
        description: "Thép carbon trung bình, dễ gia công, giá thành hợp lý.",
        fullDescription:
          "Thép S45C phổ biến trong chế tạo chi tiết máy: trục, bánh răng, bulông… Cân bằng giữa độ cứng và độ dẻo, dễ nhiệt luyện.",
        applications: ["Trục", "Bánh răng", "Bu lông", "Chi tiết máy thông dụng"],
        specifications: {
          hardness: "18–23 HRC (thường), 50–55 HRC (tôi)",
          composition: "C: 0.42–0.48%, Si, Mn",
          standard: ["JIS", "DIN", "AISI"],
        },
        image: "/images/steel-products.jpg",
      },
      {
        id: "thep-scm420",
        name: "Thép SCM420",
        slug: "thep-scm420",
        category: "Thép chế tạo",
        categorySlug: "thep-che-tao",
        grades: ["SCM420", "20CrMo", "4118"],
        description: "Thép hợp kim Cr–Mo, thấm carbon tốt.",
        fullDescription:
          "SCM420 dùng cho chi tiết cần bề mặt cứng, lõi dẻo: bánh răng, trục cam… sau thấm carbon và nhiệt luyện.",
        applications: ["Bánh răng", "Trục cam", "Chi tiết thấm carbon"],
        specifications: {
          hardness: "Bề mặt 58–62 HRC, lõi 30–40 HRC",
          composition: "C, Cr, Mo thấp",
          standard: ["JIS", "DIN", "AISI"],
        },
        image: "/images/steel-products.jpg",
      },
      {
        id: "thep-scm440",
        name: "Thép SCM440",
        slug: "thep-scm440",
        category: "Thép chế tạo",
        categorySlug: "thep-che-tao",
        grades: ["SCM440", "42CrMo", "4140"],
        description: "Độ bền cao, chịu mỏi tốt.",
        fullDescription:
          "SCM440 (42CrMo) cho chi tiết chịu tải động: trục khuỷu, trục truyền, bánh răng lớn.",
        applications: ["Trục khuỷu", "Trục truyền", "Bánh răng lớn"],
        specifications: {
          hardness: "28–32 HRC (tôi và ram)",
          composition: "C, Cr, Mo",
          standard: ["JIS", "DIN", "AISI", "GB"],
        },
        image: "/images/steel-products.jpg",
      },
      {
        id: "thep-ket-cau-hop-kim",
        name: "Thép kết cấu hợp kim",
        slug: "thep-ket-cau-hop-kim",
        category: "Thép chế tạo",
        categorySlug: "thep-che-tao",
        grades: ["40Cr", "35CrMo", "42CrMo"],
        description: "Độ bền cao, chịu tải, nhiệt luyện tốt.",
        fullDescription:
          "Thép kết cấu hợp kim cho chi tiết máy chịu lực, yêu cầu độ bền và độ tin cậy cao.",
        applications: ["Chi tiết chịu lực", "Trục", "Bánh răng", "Kết cấu cơ khí"],
        specifications: {
          hardness: "28–35 HRC",
          composition: "C, Cr, Mo",
          standard: ["GB", "DIN", "AISI"],
        },
        image: "/images/steel-products.jpg",
      },
      {
        id: "thep-carbon",
        name: "Thép carbon",
        slug: "thep-carbon",
        category: "Thép chế tạo",
        categorySlug: "thep-che-tao",
        grades: ["S20C", "S35C", "S50C"],
        description: "Giá thành hợp lý, gia công tốt, ứng dụng đa dạng.",
        fullDescription:
          "Thép carbon (S20C, S35C, S50C…) dùng cho chi tiết máy thông dụng và kết cấu.",
        applications: ["Chi tiết máy", "Kết cấu", "Trục nhỏ", "Phôi gia công"],
        specifications: {
          hardness: "Theo mác",
          composition: "C, Si, Mn",
          standard: ["JIS", "DIN", "AISI", "GB"],
        },
        image: "/images/steel-products.jpg",
      },
    ],
  },
  {
    id: "thep-cong-cu",
    name: "Thép công cụ",
    slug: "thep-cong-cu",
    description: "Thép công cụ phục vụ dao cụ, chi tiết thấm carbon và ứng dụng công cụ cắt.",
    image: "/images/steel-products.jpg",
    products: [
      {
        id: "thep-suj2",
        name: "Thép SUJ2",
        slug: "thep-suj2",
        category: "Thép công cụ",
        categorySlug: "thep-cong-cu",
        grades: ["SUJ2", "GCr15", "52100"],
        description: "Thép ổ bi chrome cao, độ cứng và chống mài mòn tốt.",
        fullDescription:
          "SUJ2 dùng cho vòng bi, bi thép, con lăn và chi tiết yêu cầu độ cứng bề mặt cao sau nhiệt luyện.",
        applications: ["Vòng bi", "Bi thép", "Con lăn", "Chi tiết chịu mài mòn"],
        specifications: {
          hardness: "60–65 HRC",
          composition: "C cao, Cr",
          standard: ["JIS", "DIN", "AISI", "GB"],
        },
        image: "/images/steel-products.jpg",
      },
      {
        id: "thep-scm415",
        name: "Thép SCM415",
        slug: "thep-scm415",
        category: "Thép công cụ",
        categorySlug: "thep-cong-cu",
        grades: ["SCM415", "15CrMo", "4115"],
        description: "Thấm carbon, bề mặt cứng — lõi dẻo.",
        fullDescription:
          "SCM415 cho chi tiết cần lớp bề mặt cứng: bánh răng, trục ổ bi, linh kiện chịu mài mòn.",
        applications: ["Bánh răng chịu tải", "Trục ổ bi", "Chi tiết thấm carbon"],
        specifications: {
          hardness: "Bề mặt 58–62 HRC, lõi 28–35 HRC",
          composition: "C thấp, Cr, Mo",
          standard: ["JIS", "DIN"],
        },
        image: "/images/steel-products.jpg",
      },
    ],
  },
  {
    id: "san-pham-khac",
    name: "Sản phẩm khác",
    slug: "san-pham-khac",
    description: "Inox, nhôm, titan, đồng — vật liệu kim loại phi thép theo yêu cầu.",
    image: "/images/steel-products.jpg",
    products: [
      {
        id: "dong",
        name: "Đồng",
        slug: "dong",
        category: "Sản phẩm khác",
        categorySlug: "san-pham-khac",
        grades: ["C11000", "C26000", "…"],
        description: "Đồng và hợp kim đồng phục vụ điện, khuôn, chi tiết dẫn nhiệt.",
        fullDescription:
          "Cung cấp đồng đỏ, đồng thau… theo quy cách và chứng chỉ khi có.",
        applications: ["Khuôn dẫn nhiệt", "Điện", "Chi tiết cơ khí"],
        specifications: {
          standard: ["ASTM", "JIS"],
        },
        image: "/images/steel-products.jpg",
      },
      {
        id: "nhom",
        name: "Nhôm",
        slug: "nhom",
        category: "Sản phẩm khác",
        categorySlug: "san-pham-khac",
        grades: ["6061", "7075", "…"],
        description: "Nhôm hợp kim và nhôm tấm phục vụ cơ khí nhẹ, khuôn, chi tiết chính xác.",
        fullDescription:
          "Hỗ trợ báo giá và quy cách nhôm theo ứng dụng: khuôn, khung, chi tiết CNC.",
        applications: ["Khuôn nhẹ", "Khung", "Gia công CNC"],
        specifications: {
          standard: ["AMS", "GB", "JIS"],
        },
        image: "/images/steel-products.jpg",
      },
      {
        id: "titan",
        name: "Titan",
        slug: "titan",
        category: "Sản phẩm khác",
        categorySlug: "san-pham-khac",
        grades: ["Gr2", "Gr5", "…"],
        description: "Titan hợp kim — tỷ trọng thấp, chống ăn mòn tốt trong nhiều môi trường.",
        fullDescription:
          "Tư vấn mác titan theo yêu cầu kỹ thuật và khả năng cung ứng.",
        applications: ["Hàng không", "Y tế", "Hóa chất", "Chi tiết đặc biệt"],
        specifications: {
          standard: ["ASTM"],
        },
        image: "/images/steel-products.jpg",
      },
      {
        id: "inox",
        name: "Inox",
        slug: "inox",
        category: "Sản phẩm khác",
        categorySlug: "san-pham-khac",
        grades: ["SUS304", "SUS316", "SUS420", "…"],
        description: "Thép không gỉ phục vụ thực phẩm, hóa chất, trang trí…",
        fullDescription:
          "Cung cấp inox các dòng austenitic, martensitic… theo tiêu chuẩn và quy cách. Tư vấn mác phù hợp môi trường và gia công.",
        applications: ["Thiết bị thực phẩm", "Hóa chất", "Trang trí", "Chi tiết chống ăn mòn"],
        specifications: {
          hardness: "Theo mác",
          composition: "Cr, Ni, Mo (tùy loại)",
          standard: ["JIS", "AISI", "DIN"],
        },
        image: "/images/steel-products.jpg",
      },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  for (const category of productCategories) {
    const product = category.products.find((p) => p.slug === slug)
    if (product) return product
  }
  return undefined
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug)
}

export function getAllProducts(): Product[] {
  return productCategories.flatMap((c) => c.products)
}
