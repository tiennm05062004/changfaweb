import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Cog, Factory, Wrench, Ruler, ShieldCheck, Truck, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dịch Vụ Gia Công - CHANGFA",
  description:
    "Dịch vụ gia công kim loại công nghiệp: gia công phay, mài, CNC và các dịch vụ kỹ thuật liên quan.",
}

const services = [
  {
    icon: Cog,
    title: "Gia công phay",
    image: "/images/steel-products.jpg",
    description:
      "Gia công phay mặt, phay rãnh, phay định hình trên nhiều loại vật liệu kim loại với độ chính xác cao.",
  },
  {
    icon: Wrench,
    title: "Gia công mài",
    image: "/images/die-steel.jpg",
    description:
      "Mài phẳng, mài tinh bề mặt và xử lý dung sai kích thước theo yêu cầu kỹ thuật của từng chi tiết.",
  },
  {
    icon: Factory,
    title: "Gia công CNC",
    image: "/images/factory.jpg",
    description:
      "Gia công CNC cho chi tiết cơ khí phức tạp, đảm bảo độ lặp lại ổn định và chất lượng đồng đều.",
  },
  {
    icon: Ruler,
    title: "Cắt quy cách theo bản vẽ",
    image: "/images/hero-steel.jpg",
    description:
      "Hỗ trợ cắt phôi theo kích thước đặt hàng và bản vẽ kỹ thuật, tối ưu vật tư cho sản xuất.",
  },
  {
    icon: ShieldCheck,
    title: "Kiểm tra chất lượng",
    image: "/images/die-steel.jpg",
    description:
      "Kiểm soát bề mặt và kích thước trước khi giao hàng, đảm bảo đúng thông số và yêu cầu đầu ra.",
  },
  {
    icon: Truck,
    title: "Giao hàng và hỗ trợ kỹ thuật",
    image: "/images/steel-products.jpg",
    description:
      "Hỗ trợ giao hàng theo tiến độ và tư vấn kỹ thuật lựa chọn vật liệu phù hợp ứng dụng thực tế.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Dịch Vụ</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              Dịch Vụ Gia Công Kim Loại Công Nghiệp
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              CHANGFA cung cấp các dịch vụ gia công phay, mài, CNC và các giải pháp kỹ thuật đồng bộ,
              đáp ứng yêu cầu chất lượng cho sản xuất trong nước và xuất khẩu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="product-hover-card bg-card border-border">
                <div className="relative h-44 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Cần tư vấn dịch vụ gia công?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Gửi yêu cầu để đội ngũ kỹ thuật hỗ trợ báo giá, tư vấn vật liệu và phương án gia công phù hợp.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/lien-he">
              Liên Hệ Ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
