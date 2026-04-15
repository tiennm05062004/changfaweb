import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { productCategories, productCategoryGroups, getCategoriesBySlugs } from "@/lib/products-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sản Phẩm - CHANGFA | Thép Khuôn, Thép Chế Tạo, Thép Công Cụ, Sản Phẩm Khác",
  description:
    "Thép khuôn, thép chế tạo, thép công cụ và sản phẩm khác: đồng, nhôm, titan, inox — CHANGFA.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/steel-products.jpg"
            alt="Steel Products"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Sản Phẩm
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              Danh Mục Sản Phẩm
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Thép khuôn, thép chế tạo, thép công cụ; sản phẩm khác: đồng, nhôm, titan, inox.
            </p>
          </div>
        </div>
      </section>

      {/* Categories by group */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16 mb-16">
            {productCategoryGroups.map((group) => {
              const categories = getCategoriesBySlugs(group.slugs)
              if (categories.length === 0) return null
              return (
                <div key={group.title}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground">{group.title}</h2>
                    {group.description && (
                      <p className="text-muted-foreground mt-1">{group.description}</p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/san-pham/danh-muc/${category.slug}`}
                        className="group"
                      >
                        <Card className="product-hover-card h-full bg-card border-border hover:shadow-xl transition-all duration-300 overflow-hidden">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={category.image}
                              alt={category.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                              <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                              <p className="text-muted-foreground text-sm">{category.products.length} mục</p>
                            </div>
                          </div>
                          <CardContent className="pt-4">
                            <p className="text-muted-foreground mb-4">{category.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {category.products.slice(0, 3).map((product) => (
                                <Badge key={product.id} variant="secondary" className="bg-secondary text-secondary-foreground">
                                  {product.name}
                                </Badge>
                              ))}
                              {category.products.length > 3 && (
                                <Badge variant="outline" className="border-border text-muted-foreground">
                                  +{category.products.length - 3} khác
                                </Badge>
                              )}
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
                </div>
              )
            })}
          </div>

          {/* All Products */}
          <div>
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Tất Cả Sản Phẩm</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                Danh Sách Sản Phẩm
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.flatMap(category =>
                category.products.map((product) => (
                  <Link key={product.id} href={`/san-pham/${product.slug}`}>
                    <Card className="product-hover-card h-full bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">
                              {product.category}
                            </Badge>
                            <CardTitle className="text-foreground">{product.name}</CardTitle>
                          </div>
                        </div>
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
                        <Button variant="outline" className="w-full group">
                          <span>Chi tiết sản phẩm</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần Tư Vấn Sản Phẩm?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Đội ngũ kỹ thuật của chúng tôi sẵn sàng tư vấn giúp bạn lựa chọn loại thép phù hợp nhất cho nhu cầu sản xuất.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/lien-he">Liên Hệ Ngay</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a
                href="tel:0981063023"
                style={{ color: 'black', textDecoration: 'none' }}
              >
                HOTLINE: 0981-063-023
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
