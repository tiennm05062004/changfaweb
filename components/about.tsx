"use client"

import Image from "next/image"
import { Building2, Globe, Award, Users } from "lucide-react"

const stats = [
  { icon: Building2, value: "2", label: "Văn Phòng" },
  { icon: Globe, value: "20+", label: "Quốc Gia Xuất Khẩu" },
  { icon: Award, value: "10+", label: "Năm Kinh Nghiệm" },
  { icon: Users, value: "500+", label: "Khách Hàng" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Về Chúng Tôi</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            CHANGFA Steel - Đối Tác Tin Cậy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Với hơn 10 năm kinh nghiệm trong ngành vật liệu kim loại công nghiệp, chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Năm Kinh Nghiệm</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nhà Xuất Khẩu Thép Của Baogang Group Tại Nam Trung Quốc
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Guangzhou ChangFeng Steel Co., Ltd là công ty xuất khẩu thép đặc biệt của Baogang Group tại Nam Trung Quốc. 
              Chúng tôi chuyên cung cấp thép khuôn nhựa, thép khuôn dập nóng, thép khuôn dập nguội, thép kết cấu hợp kim, 
              thép ổ bi, thép công cụ, thép không gỉ, thép carbon và nhiều loại thép khác.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tại Việt Nam, chúng tôi đã thành lập Công ty TNHH CHANGFA Steel. CHANGFA Steel Vietnam sẽ là trung tâm 
              chuyển giao tất cả các loại thép từ Trung Quốc, Nhật Bản, Hàn Quốc trong các lĩnh vực gia công khuôn mẫu, 
              công cụ, thiết bị công nghiệp.
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Vị Trí Của Chúng Tôi</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-primary text-primary-foreground">
                <h4 className="font-semibold">Văn Phòng Việt Nam</h4>
                <p className="text-sm opacity-90">Số 03, Lý Sơn, Ngọc Thụy, Long Biên, Hà Nội</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4747!2d105.8731!3d21.0553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6d2f5db7a9%3A0x2e5c5a5c5c5a5c5a!2sNgoc%20Thuy%2C%20Long%20Bien%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CHANGFA Steel Vietnam Office Location"
              />
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-primary text-primary-foreground">
                <h4 className="font-semibold">Nhà Máy Sản Xuất</h4>
                <p className="text-sm opacity-90">KM1, Quốc lộ 3, Yên Viên, Gia Lâm, Hà Nội</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.9!2d105.9361!3d21.0834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9da8c3c3c3c%3A0x1234567890abcdef!2sYen%20Vien%2C%20Gia%20Lam%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CHANGFA Steel Factory Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
