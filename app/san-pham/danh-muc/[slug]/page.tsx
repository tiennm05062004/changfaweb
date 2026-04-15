import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { productCategories, getCategoryBySlug } from "@/lib/products-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  
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
  return productCategories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/san-pham" className="hover:text-primary-foreground transition-colors">
              Sản Phẩm
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-foreground">{category.name}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Danh Mục
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              {category.name}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <Link key={product.id} href={`/san-pham/${product.slug}`}>
                <Card className="product-hover-card h-full bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Mác thép:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.grades.map((grade) => (
                          <Badge key={grade} variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                            {grade}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      <span>Xem chi tiết</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Other Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Danh Mục Khác</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {productCategories
                .filter(c => c.slug !== category.slug)
                .map((otherCategory) => (
                  <Link 
                    key={otherCategory.id} 
                    href={`/san-pham/danh-muc/${otherCategory.slug}`}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={otherCategory.image}
                        alt={otherCategory.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {otherCategory.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{otherCategory.products.length} sản phẩm</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
