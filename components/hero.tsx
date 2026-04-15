"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-steel.jpg"
          alt="CHANGFA Steel Factory"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Đối Tác Tin Cậy Của Baogang Group
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Thép Chất Lượng
            <span className="text-primary block">Cho Mọi Công Trình</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            CHANGFA Steel - Nhà cung cấp vật liệu kim loại công nghiệp hàng đầu từ Trung Quốc, Nhật Bản và Hàn Quốc. 
            Chuyên các loại thép khuôn mẫu, thép công cụ, thép hợp kim chất lượng cao.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("#products")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              Xem Sản Phẩm
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("#about")}
              className="border-border hover:bg-secondary"
            >
              Tìm Hiểu Thêm
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Tiêu chuẩn DIN, AISI, JIS, GB",
              "Kiểm tra siêu âm khuyết tật",
              "Dịch vụ cắt gia công"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
