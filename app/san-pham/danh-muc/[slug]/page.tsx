import { Metadata } from "next"
import { Locale, defaultLocale } from "@/lib/i18n"
import {
  getLocalizedCategoryBySlug,
  getLocalizedProductCategories,
} from "@/lib/localized-products"
import { CategoryPageClient } from "./category-page-client"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const locale = defaultLocale
  const category = getLocalizedCategoryBySlug(locale, slug)
  
  if (!category) {
    return {
      title: "Không tìm thấy danh mục - CHANGFA Steel",
    }
  }

  return {
    title: `${category.name} - CHANGFA Steel | Sản Phẩm Thép Công Nghiệp`,
    description: `Khám phá các sản phẩm ${category.name} chất lượng cao tại CHANGFA Steel. ${category.description}`,
  }
}

export async function generateStaticParams() {
  return getLocalizedProductCategories("vi").map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  return <CategoryPageClient slug={slug} />
}
