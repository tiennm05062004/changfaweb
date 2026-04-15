"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock, Building2 } from "lucide-react"

const contactInfo = [
  {
    icon: Building2,
    title: "Văn Phòng Việt Nam",
    details: [
      "Số 03, Lý Sơn, Ngọc Thụy",
      "Long Biên, Hà Nội, Việt Nam"
    ]
  },
  {
    icon: MapPin,
    title: "Nhà Máy",
    details: [
      "KM1, Quốc lộ 3, Yên Viên",
      "Gia Lâm, Hà Nội"
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
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.")
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Liên Hệ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hãy liên hệ ngay để được tư vấn và báo giá tốt nhất cho nhu cầu vật liệu kim loại công nghiệp của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Họ và Tên *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="bg-background border-input"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Số Điện Thoại *
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0912 345 678"
                        className="bg-background border-input"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@company.com"
                        className="bg-background border-input"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Công Ty
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Tên công ty"
                        className="bg-background border-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Nội Dung Yêu Cầu *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Vui lòng mô tả loại thép, mác thép, kích thước và số lượng cần mua..."
                      className="bg-background border-input resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Gửi Yêu Cầu Báo Giá
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
