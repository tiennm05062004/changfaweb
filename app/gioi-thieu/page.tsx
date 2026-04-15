import { Metadata } from "next"
import Image from "next/image"
import { Building2, Globe, Award, Users, CheckCircle, Factory, Truck, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleMapEmbed } from "@/components/google-map"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Giới Thiệu - CHANGFA Steel | Nhà Cung Cấp Thép Công Nghiệp",
  description:
    "Công ty TNHH CHANGFA là đơn vị hàng đầu cung cấp thép và kim loại đặc biệt cho ngành khuôn mẫu, cơ khí chế tạo máy móc, thiết bị và công cụ.",
}

const stats = [
  { icon: Building2, value: "2", label: "Văn Phòng" },
  { icon: Globe, value: "20+", label: "Quốc Gia Xuất Khẩu" },
  { icon: Award, value: "10+", label: "Năm Kinh Nghiệm" },
  { icon: Users, value: "500+", label: "Khách Hàng" },
]

const capabilities = [
  {
    icon: Factory,
    title: "Nhà Máy Hiện Đại",
    description: "Trang bị đầy đủ máy móc cắt, phay, mài từ các thương hiệu hàng đầu như Makino, Mazak."
  },
  {
    icon: Truck,
    title: "Giao Hàng Nhanh",
    description: "Hệ thống kho bãi rộng lớn, đảm bảo giao hàng nhanh chóng trên toàn quốc."
  },
  {
    icon: Shield,
    title: "Chất Lượng Đảm Bảo",
    description: "Mọi sản phẩm đều được kiểm tra chất lượng nghiêm ngặt trước khi xuất kho."
  },
  {
    icon: CheckCircle,
    title: "Chứng Chỉ Quốc Tế",
    description: "Đạt tiêu chuẩn DIN, AISI, JIS, GB và các tiêu chuẩn quốc tế khác."
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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Về Chúng Tôi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
              CHANGFA Steel - Đối Tác Tin Cậy Trong Ngành Thép
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Với hơn 10 năm kinh nghiệm, chúng tôi tự hào là nhà cung cấp vật liệu kim loại công nghiệp hàng đầu, 
              mang đến những sản phẩm chất lượng cao nhất cho khách hàng.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/factory.jpg"
                  alt="CHANGFA Steel Factory"
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Giới Thiệu Công Ty TNHH CHANGFA</h2>
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
              <div className="flex flex-wrap gap-3">
                {["DIN", "AISI", "JIS", "GB"].map((std) => (
                  <span key={std} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium">
                    Tiêu chuẩn {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Năng Lực</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                Tại Sao Chọn CHANGFA Steel?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <cap.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground">{cap.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company History */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Lịch Sử</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                Hành Trình Phát Triển
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-primary pl-8 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <span className="text-primary font-semibold">2008</span>
                    <h3 className="font-semibold text-foreground mt-1">Thành Lập Tại Trung Quốc</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      Guangzhou ChangFeng Steel Co., Ltd được thành lập, trở thành nhà xuất khẩu thép của Baogang Group.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <span className="text-primary font-semibold">2015</span>
                    <h3 className="font-semibold text-foreground mt-1">Mở Rộng Thị Trường Đông Nam Á</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      Bắt đầu xuất khẩu sang các nước Đông Nam Á, xây dựng mạng lưới khách hàng rộng khắp.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <span className="text-primary font-semibold">2020</span>
                    <h3 className="font-semibold text-foreground mt-1">Thành Lập CHANGFA Steel Vietnam</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      Công ty TNHH CHANGFA Steel được thành lập tại Việt Nam, với văn phòng và nhà máy tại Hà Nội.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-accent rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <span className="text-accent font-semibold">Hiện Tại</span>
                    <h3 className="font-semibold text-foreground mt-1">Phát Triển Bền Vững</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      Tiếp tục mở rộng quy mô, nâng cao chất lượng dịch vụ và phục vụ hơn 500 khách hàng.
                    </p>
                  </div>
                </div>
              </div>
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

      <Footer />
    </main>
  )
}
