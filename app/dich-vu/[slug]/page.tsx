import { servicesData } from "@/lib/services-data"
import { ServiceDetailClient } from "./service-detail-client"

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ServiceDetailClient slug={slug} />
}
