"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { getLocalizedServiceBySlug } from "@/lib/services-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServiceDetailClient({ slug }: { slug: string }) {
  const { locale } = useLocale()
  const service = getLocalizedServiceBySlug(locale, slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-36 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Trang Chủ</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/dich-vu" className="hover:text-primary transition-colors">Dịch Vụ</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{service.name}</span>
          </nav>
        </div>
      </section>

      <section className="pt-10 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 mb-12 items-start">
            <div className="relative h-[320px] rounded-xl overflow-hidden bg-muted">
              <Image src={service.image} alt={service.name} fill className="object-cover" />
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider text-primary font-medium mb-2">{service.detailLabel}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.name}</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.shortDescription}</p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/lien-he">
                  Liên Hệ Ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">{service.section.title}</CardTitle>
              <p className="text-lg text-foreground/80">{service.section.subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{service.section.intro}</p>

              <div className="grid md:grid-cols-3 gap-4">
                {service.section.highlights.map((group) => (
                  <div key={group.title} className="rounded-lg border border-border bg-secondary/30 p-4">
                    <h3 className="font-semibold text-foreground mb-3">{group.title}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">{service.section.processTitle}</h3>
                <ol className="space-y-3 text-muted-foreground list-decimal pl-5">
                  {service.section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              {service.section.notes && (
                <div>
                  <h3 className="font-semibold text-foreground mb-3">{service.section.noteTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    {service.section.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
