"use client"

import Link from "next/link"
import Image from "next/image"
import { CalendarDays, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { getLocalizedNews, newsPageCopy } from "@/lib/news-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NewsPage() {
  const { locale } = useLocale()
  const t = newsPageCopy[locale]
  const posts = getLocalizedNews(locale)

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-44 pb-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-accent text-sm uppercase tracking-wider font-medium">{t.tag}</div>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-5">{t.title}</h1>
          <p className="text-primary-foreground/85 text-lg">{t.desc}</p>
        </div>
      </section>
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.title} className="bg-card border-border overflow-hidden">
              <div className="relative h-44">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.summary}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/tin-tuc/${post.slug}`}>
                    {t.readMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
