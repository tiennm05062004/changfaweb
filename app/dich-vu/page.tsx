"use client"

import Image from "next/image"
import Link from "next/link"
import { Cog, Factory, Wrench, Flame, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { getLocalizedServices, servicePageCopy } from "@/lib/services-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Factory,
    title: "Dịch vụ Gia công CNC",
    image: "/images/factory.jpg",
    description: "Gia công CNC cho chi tiết cơ khí phức tạp, đảm bảo độ lặp lại ổn định và chất lượng đồng đều.",
  },
  {
    icon: Cog,
    title: "Dịch vụ Phay",
    image: "/images/steel-products.jpg",
    description: "Dịch vụ phay thép chuyên nghiệp với độ chính xác cao và bề mặt ổn định.",
  },
  {
    icon: Wrench,
    title: "Dịch vụ Mài",
    image: "/images/die-steel.jpg",
    description: "Dịch vụ mài thép chuyên nghiệp, kiểm soát tốt kích thước và chất lượng bề mặt.",
  },
  {
    icon: Flame,
    title: "Dịch vụ Xử lý nhiệt",
    image: "/images/hero-steel.jpg",
    description: "Dịch vụ xử lý nhiệt theo yêu cầu nhằm nâng cao độ cứng và cơ tính vật liệu.",
  },
]

export default function ServicesPage() {
  const { locale } = useLocale()
  const t = servicePageCopy[locale]
  const localizedServices = getLocalizedServices(locale).map((service, index) => ({
    ...service,
    icon: services[index].icon,
  }))

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">{t.heroTag}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {localizedServices.map((service) => (
              <Link key={service.slug} href={`/dich-vu/${service.slug}`} className="group">
              <Card className="product-hover-card h-full bg-card border-border">
                <div className="relative h-44 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    <span>{t.viewDetail}</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.ctaTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.ctaDesc}
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/lien-he">
              {t.contactNow}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
