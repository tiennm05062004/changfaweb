import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Phone, Mail, CheckCircle, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { productCategories, getProductBySlug, getAllProducts } from "@/lib/products-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm - CHANGFA Steel",
    }
  }

  return {
    title: `${product.name} - CHANGFA Steel | ${product.grades.join(", ")}`,
    description: `${product.fullDescription.slice(0, 160)}...`,
  }
}

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get related products from same category
  const category = productCategories.find(c => c.slug === product.categorySlug)
  const relatedProducts = category?.products.filter(p => p.id !== product.id).slice(0, 3) || []

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-secondary/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/san-pham" className="hover:text-primary transition-colors">
              Sản Phẩm
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/san-pham/danh-muc/${product.categorySlug}`} className="hover:text-primary transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {product.category}
              </Badge>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Steel Grades */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Mác Thép Có Sẵn</h3>
                <div className="flex flex-wrap gap-2">
                  {product.grades.map((grade) => (
                    <Badge 
                      key={grade} 
                      variant="secondary" 
                      className="bg-secondary text-secondary-foreground px-4 py-2 text-sm"
                    >
                      {grade}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Ứng Dụng</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/lien-he">Yêu Cầu Báo Giá</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:0981063023" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    0981-063-023
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {product.specifications.hardness && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Độ Cứng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.specifications.hardness}</p>
                </CardContent>
              </Card>
            )}
            {product.specifications.composition && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Thành Phần</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{product.specifications.composition}</p>
                </CardContent>
              </Card>
            )}
            {product.specifications.standard && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Tiêu Chuẩn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.specifications.standard.map((std) => (
                      <Badge key={std} variant="outline" className="border-border">
                        {std}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Sản Phẩm Liên Quan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/san-pham/${relatedProduct.slug}`}>
                    <Card className="product-hover-card h-full bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all group">
                      <div className="relative h-40 overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {relatedProduct.grades.slice(0, 3).map((grade) => (
                            <Badge key={grade} variant="secondary" className="text-xs">
                              {grade}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-primary text-sm font-medium">
                          <span>Xem chi tiết</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Cần Hỗ Trợ Kỹ Thuật?</h3>
                <p className="text-primary-foreground/80">
                  Đội ngũ kỹ thuật viên của chúng tôi sẵn sàng tư vấn lựa chọn thép phù hợp cho dự án của bạn.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="mailto:changfasteel@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:0981063023" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Gọi Ngay
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
