import CategoryPage, {
  generateMetadata as generateCategoryMetadata,
  generateStaticParams as generateCategoryParams,
} from "@/app/san-pham/danh-muc/[slug]/page"
import { supportedLocales } from "@/lib/i18n"

interface LocaleCategoryPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const categoryParams = await generateCategoryParams()
  return supportedLocales.flatMap((locale) =>
    categoryParams.map((param) => ({ locale, slug: param.slug })),
  )
}

export async function generateMetadata({ params }: LocaleCategoryPageProps) {
  const { slug } = await params
  return generateCategoryMetadata({ params: Promise.resolve({ slug }) })
}

export default async function LocaleCategoryPage({ params }: LocaleCategoryPageProps) {
  const { slug } = await params
  return CategoryPage({ params: Promise.resolve({ slug }) })
}
