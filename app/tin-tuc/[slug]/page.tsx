import { notFound } from "next/navigation"
import { newsItems } from "@/lib/news-data"
import { NewsDetailClient } from "./news-detail-client"

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }))
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = newsItems.find((item) => item.slug === slug)
  if (!post) {
    notFound()
  }

  return <NewsDetailClient slug={slug} />
}
