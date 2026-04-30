"use client"

import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { getLocalizedNews, getLocalizedNewsBySlug, newsPageCopy } from "@/lib/news-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function NewsDetailClient({ slug }: { slug: string }) {
  const { locale } = useLocale()
  const t = newsPageCopy[locale]
  const post = getLocalizedNewsBySlug(locale, slug)

  if (!post) {
    return null
  }

  const related = getLocalizedNews(locale).filter((item) => item.slug !== slug).slice(0, 2)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-24">
        <div className="relative h-[38vh] min-h-[280px] md:h-[45vh]">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10">
              <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground w-fit mb-4">
                {t.tag}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">{post.title}</h1>
              <div className="mt-4 inline-flex items-center text-sm text-white/90">
                <CalendarDays className="w-4 h-4 mr-2" />
                {post.date}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{post.summary}</p>

            <div className="grid gap-4 mb-10">
              {post.highlights.map((highlight) => (
                <Card key={highlight} className="border-primary/30 bg-primary/5">
                  <CardContent className="py-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm md:text-base text-foreground">{highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <article className="prose prose-zinc max-w-none dark:prose-invert">
              {post.content.map((paragraph) => (
                <p key={paragraph} className="text-base md:text-lg leading-8 text-foreground mb-6">
                  {paragraph}
                </p>
              ))}
            </article>

            <div className="mt-10">
              <Button asChild variant="outline">
                <Link href="/tin-tuc">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t.backToNews}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-14">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.relatedTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((item) => (
                  <Link key={item.slug} href={`/tin-tuc/${item.slug}`} className="group block">
                    <Card className="overflow-hidden transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                      <div className="relative h-48">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-5">
                        <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                        <h3 className="text-lg font-semibold leading-snug line-clamp-2 group-hover:text-primary">{item.title}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
