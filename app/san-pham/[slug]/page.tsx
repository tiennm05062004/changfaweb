import { Metadata } from "next"
import { Locale, defaultLocale } from "@/lib/i18n"
import {
  getLocalizedAllProducts,
  getLocalizedProductBySlug,
} from "@/lib/localized-products"
import { ProductDetailClient } from "./product-detail-client"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const locale = defaultLocale
  const product = getLocalizedProductBySlug(locale, slug)
  
  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm - CHANGFA Steel",
    }
  }

  return {
    title: `${product.name} - CHANGFA Steel | ${product.grades.join(", ")}`,
    description: `${product.fullDescription.slice(0, 160)}...`,
  }
}

export async function generateStaticParams() {
  return getLocalizedAllProducts("vi").map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  return <ProductDetailClient slug={slug} />
}
