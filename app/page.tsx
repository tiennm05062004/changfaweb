import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, CheckCircle, Building2, Globe, Award, Users, Factory, Truck, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleMapEmbed } from "@/components/google-map"
import { productCategoryGroups, getCategoriesBySlugs } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: Building2, value: "2", label: "Văn Phòng" },
  { icon: Globe, value: "20+", label: "Quốc Gia Xuất Khẩu" },
  { icon: Award, value: "10+", label: "Năm Kinh Nghiệm" },
  { icon: Users, value: "500+", label: "Khách Hàng" },
]

const features = [
  {
    icon: Factory,
    title: "Nhà Máy Hiện Đại",
    description: "Trang bị đầy đủ máy cắt, phay, mài từ các thương hiệu hàng đầu."
  },
  {
    icon: Truck,
    title: "Giao Hàng Nhanh",
    description: "Hệ thống kho bãi rộng lớn, đảm bảo giao hàng nhanh chóng trên toàn quốc."
  },
  {
    icon: Shield,
    title: "Chất Lượng Đảm Bảo",
    description: "Mỗi sản phẩm đều được kiểm tra chất lượng nghiêm ngặt trước khi xuất kho."
  }
]

const locations = [
  {
    lat: 21.1009,
    lng: 105.9533,
    title: "Kho xưởng số 1",
    address: "Km1, Quốc lộ 3, Phù Đổng, TP. Hà Nội"
  },
  {
    lat: 21.1227,
    lng: 106.0453,
    title: "Kho xưởng số 2",
    address: "Số 288, đường TS5, KCN Tiên Sơn, Từ Sơn, Bắc Ninh"
  },
  {
    lat: 21.0498,
    lng: 105.8732,
    title: "VPĐKKD",
    address: "Số 3, ngách 103/4, đường Lý Sơn, Tổ 32, Phường Bồ Đề, Thành phố Hà Nội, Việt Nam"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-steel.jpg"
            alt="Nhà Máy Thép CHANGFA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-wide">
              CHANGFA
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              Nhà cung cấp vật liệu kim loại công nghiệp chất lượng cao phục vụ cho sản xuất trong nước và xuất khẩu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/san-pham">
                  Xem Sản Phẩm
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/20">
                <a href="tel:0981063023" className="flex items-center gap-2" style={{ color: 'black', textDecoration: 'none' }}>
                  <Phone className="h-5 w-5" />
                  HOTLINE: 0981-063-023
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Sản Phẩm</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Danh Mục Sản Phẩm
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thép khuôn, thép chế tạo, thép công cụ và sản phẩm khác: đồng, nhôm, titan, inox.
            </p>
          </div>

          <div className="space-y-14 mb-8">
            {productCategoryGroups.map((group) => {
              const categories = getCategoriesBySlugs(group.slugs)
              if (categories.length === 0) return null
              return (
                <div key={group.title}>
                  <div className="mb-6 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{group.title}</h3>
                    {group.description && (
                      <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                      <Link key={category.id} href={`/san-pham/danh-muc/${category.slug}`} className="group">
                        <Card className="product-hover-card h-full bg-card border-border hover:shadow-lg hover:border-primary/50 transition-all">
                          <div className="relative h-40 overflow-hidden rounded-t-lg">
                            <Image
                              src={category.image}
                              alt={category.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                              {category.name}
                            </CardTitle>
                            <CardDescription>{category.products.length} mục</CardDescription>
                          </CardHeader>
                          <CardContent>
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

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/san-pham">
                Xem Tất Cả Sản Phẩm
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30" data-reveal>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/factory.jpg"
                  alt="Nhà Máy Thép CHANGFA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Năm Kinh Nghiệm</div>
              </div>
            </div>

            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Về Chúng Tôi</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Giới Thiệu Công Ty TNHH CHANGFA</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Công ty TNHH CHANGFA là đơn vị hàng đầu trong lĩnh vực cung cấp thép và các kim loại đặc
                biệt phục vụ trong ngành khuôn mẫu, cơ khí chế tạo máy móc, thiết bị, công cụ.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Công ty TNHH CHANGFA với đội ngũ công nhân viên kỹ thuật tay nghề cao, máy móc, trang
                thiết bị hiện đại, năng lực sản xuất lớn, hiện đã trở thành một trong những đơn vị thuộc
                chuỗi cung ứng toàn cầu cho các tập đoàn lớn như: Honda, Toyota, Vinfast, Harley Davidson,
                Ducati, Piaggio, Samsung, Foxconn, Brother, Kyoceza.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Quan điểm kinh doanh của chúng tôi là Hợp Tác Cùng Phát Triển, vì vậy chúng tôi sẵn sàng
                hợp tác cùng quý khách hàng đưa ra nhiều giải pháp tối ưu nhất nhằm đem lại hiệu quả cao
                nhất để hướng tới sự phát triển bền vững, lâu dài.
              </p>
              <ul className="space-y-3 mb-8">
                {["Tiêu chuẩn DIN, AISI, JIS, GB", "Kiểm tra chất lượng nghiêm ngặt", "Giao hàng nhanh toàn quốc", "Tư vấn kỹ thuật chuyên nghiệp"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/gioi-thieu">
                  Tìm Hiểu Thêm
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Tại sao chọn chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Ưu Điểm Của CHANGFA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30" data-reveal>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Vị Trí</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Địa Chỉ Của Chúng Tôi
            </h2>
          </div>
          <GoogleMapEmbed locations={locations} height="400px" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" data-reveal>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bạn Sẵn Sàng Hợp Tác</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn và báo giá tốt nhất cho nhu cầu thép công nghiệp của bạn
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