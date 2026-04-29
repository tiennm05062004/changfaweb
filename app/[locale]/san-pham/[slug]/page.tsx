import ProductDetailPage, {
  generateMetadata as generateProductMetadata,
  generateStaticParams as generateProductParams,
} from "@/app/san-pham/[slug]/page"
import { supportedLocales } from "@/lib/i18n"

interface LocaleProductPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const productParams = await generateProductParams()
  return supportedLocales.flatMap((locale) =>
    productParams.map((param) => ({ locale, slug: param.slug })),
  )
}

export async function generateMetadata({ params }: LocaleProductPageProps) {
  const { slug } = await params
  return generateProductMetadata({ params: Promise.resolve({ slug }) })
}

export default async function LocaleProductPage({ params }: LocaleProductPageProps) {
  const { slug } = await params
  return ProductDetailPage({ params: Promise.resolve({ slug }) })
}
