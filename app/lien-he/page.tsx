import { Metadata } from "next"
import { Mail, MapPin, Phone, Clock, Building2, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleMapEmbed } from "@/components/google-map"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Liên Hệ - CHANGFA Steel | Yêu Cầu Báo Giá Vật Liệu Kim Loại Công Nghiệp",
  description: "Liên hệ CHANGFA Steel để được tư vấn và báo giá các loại vật liệu kim loại công nghiệp. Hotline: 0981-063-023. Email: changfasteel@gmail.com",
}

const contactInfo = [
  {
    icon: Building2,
    title: "VPĐKKD",
    details: [
      "Số 3, ngách 103/4, đường Lý Sơn, Tổ 32",
      "Phường Bồ Đề, Thành phố Hà Nội, Việt Nam"
    ]
  },
  {
    icon: MapPin,
    title: "Kho xưởng số 1",
    details: [
      "Km1, Quốc lộ 3, Phù Đổng",
      "TP. Hà Nội"
    ]
  },
  {
    icon: MapPin,
    title: "Kho xưởng số 2",
    details: [
      "Số 288, đường TS5, KCN Tiên Sơn",
      "Từ Sơn, Bắc Ninh"
    ]
  },
  {
    icon: Phone,
    title: "Hotline",
    details: [
      "HOTLINE: 0981-063-023",
      "Ms. Hiền: 0975-330-960",
      "Ms. Thu: 0964-160-594"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "changfasteel@gmail.com",
      "changfa01.vn@gmail.com"
    ]
  },
  {
    icon: Clock,
    title: "Giờ Làm Việc",
    details: [
      "Thứ 2 - Thứ 6: 8:00 - 17:30",
      "Thứ 7: 8:00 - 12:00"
    ]
  },
  {
    icon: MessageSquare,
    title: "Hỗ Trợ",
    details: [
      "Zalo: 0981-063-023",
      "WeChat: changfasteel"
    ]
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

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Liên Hệ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Hãy liên hệ ngay để được tư vấn và báo giá tốt nhất cho nhu cầu vật liệu kim loại công nghiệp của bạn. 
              Đội ngũ kỹ thuật của chúng tôi luôn sẵn sàng hỗ trợ 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4 bg-card border border-border rounded-lg p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Gửi Yêu Cầu Báo Giá</CardTitle>
                  <CardDescription>
                    Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <div className="text-center mb-8">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Vị Trí</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                Địa Chỉ Của Chúng Tôi
              </h2>
            </div>
            <GoogleMapEmbed locations={locations} height="450px" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold text-foreground mt-2">
              Câu Hỏi Thường Gặp
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Làm thế nào để yêu cầu báo giá?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bạn có thể điền form trên trang này, gọi điện trực tiếp đến hotline 0981-063-023, 
                  hoặc gửi email đến changfasteel@gmail.com với thông tin chi tiết về loại thép, 
                  mác thép, kích thước và số lượng cần mua.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Thời gian giao hàng là bao lâu?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Với hàng có sẵn trong kho, chúng tôi có thể giao hàng trong vòng 1-3 ngày làm việc. 
                  Đối với đơn hàng nhập khẩu, thời gian thường từ 2-4 tuần tùy thuộc vào số lượng và 
                  loại thép.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Có hỗ trợ gia công thép không?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Có, chúng tôi cung cấp dịch vụ gia công thép với đầy đủ các công đoạn: cắt, phay, 
                  tiện, mài, khoan, nhiệt luyện. Nhà máy trang bị máy móc hiện đại từ các thương hiệu 
                  Makino, Mazak đảm bảo độ chính xác cao.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Chính sách thanh toán như thế nào?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chúng tôi hỗ trợ nhiều hình thức thanh toán: chuyển khoản ngân hàng, thanh toán 
                  khi nhận hàng (COD) cho đơn nhỏ, hoặc có thể thương lượng công nợ với khách hàng 
                  thường xuyên.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
