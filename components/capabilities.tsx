"use client"

import Image from "next/image"
import { Cog, Ruler, Shield, Truck, Wrench, Zap } from "lucide-react"

const capabilities = [
  {
    icon: Cog,
    title: "Máy Cưa Đứng Cỡ Lớn",
    description: "Máy cưa đứng công suất lớn, cắt chính xác các khối thép kích thước lớn."
  },
  {
    icon: Ruler,
    title: "Máy Cưa Ngang",
    description: "Máy cưa ngang hiện đại, đảm bảo độ chính xác cao trong gia công."
  },
  {
    icon: Wrench,
    title: "Máy Phay",
    description: "Máy phay CNC tiên tiến, gia công bề mặt phẳng và định hình."
  },
  {
    icon: Zap,
    title: "Máy Mài",
    description: "Máy mài chính xác, đạt độ bóng và dung sai yêu cầu cao."
  },
  {
    icon: Shield,
    title: "Kiểm Tra Chất Lượng",
    description: "Phân tích kim tương, kiểm tra độ cứng, dò khuyết tật siêu âm."
  },
  {
    icon: Truck,
    title: "Giao Hàng Nhanh",
    description: "Hệ thống logistics chuyên nghiệp, giao hàng đúng hẹn toàn quốc."
  }
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Năng Lực</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Nhà Máy & Năng Lực Gia Công
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trang bị đầy đủ máy móc hiện đại, chúng tôi sẵn sàng đáp ứng mọi yêu cầu cắt và gia công của khách hàng.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/die-steel.jpg"
              alt="Processing Capabilities"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <cap.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-foreground font-medium">Kiểm Tra Chất Lượng</div>
            <p className="text-sm text-muted-foreground mt-2">
              Mọi sản phẩm đều trải qua quy trình kiểm tra nghiêm ngặt
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-foreground font-medium">Hỗ Trợ Kỹ Thuật</div>
            <p className="text-sm text-muted-foreground mt-2">
              Đội ngũ kỹ thuật sẵn sàng tư vấn mọi lúc
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">48h</div>
            <div className="text-foreground font-medium">Giao Hàng Nhanh</div>
            <p className="text-sm text-muted-foreground mt-2">
              Giao hàng trong vòng 48 giờ tại khu vực Hà Nội
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
