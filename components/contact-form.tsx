"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", company: "", productType: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Gửi Thành Công!</h3>
        <p className="text-muted-foreground">
          Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </div>
    )
  }

  return (
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
          Loại Sản Phẩm Quan Tâm
        </label>
        <Select 
          value={formData.productType} 
          onValueChange={(value) => setFormData({ ...formData, productType: value })}
        >
          <SelectTrigger className="bg-background border-input">
            <SelectValue placeholder="Chọn loại sản phẩm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="die-steel">Thép Khuôn Mẫu</SelectItem>
            <SelectItem value="tool-steel">Thép Công Cụ</SelectItem>
            <SelectItem value="bearing-steel">Thép Ổ Bi</SelectItem>
            <SelectItem value="alloy-steel">Thép Hợp Kim</SelectItem>
            <SelectItem value="other">Khác</SelectItem>
          </SelectContent>
        </Select>
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
      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Đang Gửi...
          </>
        ) : (
          "Gửi Yêu Cầu Báo Giá"
        )}
      </Button>
    </form>
  )
}
