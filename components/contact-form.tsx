"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"

const formCopy: Record<Locale, any> = {
  vi: {
    success: "Gửi Thành Công!",
    successDesc: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
    name: "Họ và Tên *",
    phone: "Số Điện Thoại *",
    email: "Email",
    company: "Công Ty",
    productType: "Loại Sản Phẩm Quan Tâm",
    selectProductType: "Chọn loại sản phẩm",
    message: "Nội Dung Yêu Cầu *",
    messagePlaceholder: "Vui lòng mô tả loại thép, mác thép, kích thước và số lượng cần mua...",
    placeholders: {
      name: "Nguyễn Văn A",
      phone: "0912 345 678",
      email: "email@congty.com",
      company: "Tên công ty",
    },
    productTypes: ["Thép Khuôn Mẫu", "Thép Công Cụ", "Thép Ổ Bi", "Thép Hợp Kim", "Khác"],
    submitting: "Đang Gửi...",
    submit: "Gửi Yêu Cầu Báo Giá",
  },
  en: {
    success: "Sent Successfully!",
    successDesc: "Thank you for contacting us. We will get back to you shortly.",
    name: "Full Name *",
    phone: "Phone Number *",
    email: "Email",
    company: "Company",
    productType: "Interested Product Type",
    selectProductType: "Select product type",
    message: "Request Details *",
    messagePlaceholder: "Please describe steel type, grade, dimensions and quantity...",
    placeholders: {
      name: "John Doe",
      phone: "+84 912 345 678",
      email: "email@company.com",
      company: "Company name",
    },
    productTypes: ["Mold Steel", "Tool Steel", "Bearing Steel", "Alloy Steel", "Other"],
    submitting: "Sending...",
    submit: "Send Request",
  },
  zh: {
    success: "提交成功！",
    successDesc: "感谢您的联系，我们会尽快回复。",
    name: "姓名 *",
    phone: "联系电话 *",
    email: "邮箱",
    company: "公司",
    productType: "意向产品类型",
    selectProductType: "选择产品类型",
    message: "需求内容 *",
    messagePlaceholder: "请描述钢材类型、牌号、尺寸及采购数量...",
    placeholders: {
      name: "张三",
      phone: "+86 138 0000 0000",
      email: "name@company.cn",
      company: "公司名称",
    },
    productTypes: ["模具钢", "工具钢", "轴承钢", "合金钢", "其他"],
    submitting: "提交中...",
    submit: "提交询价",
  },
  ja: {
    success: "送信完了！",
    successDesc: "お問い合わせありがとうございます。できるだけ早くご返信します。",
    name: "お名前 *",
    phone: "電話番号 *",
    email: "メール",
    company: "会社名",
    productType: "関心のある製品",
    selectProductType: "製品を選択",
    message: "お問い合わせ内容 *",
    messagePlaceholder: "鋼種、規格、寸法、数量をご記入ください...",
    placeholders: {
      name: "山田 太郎",
      phone: "+81 90-1234-5678",
      email: "name@company.co.jp",
      company: "会社名",
    },
    productTypes: ["金型鋼", "工具鋼", "軸受鋼", "合金鋼", "その他"],
    submitting: "送信中...",
    submit: "見積依頼を送信",
  },
  ko: {
    success: "전송 완료!",
    successDesc: "문의해 주셔서 감사합니다. 빠르게 답변드리겠습니다.",
    name: "이름 *",
    phone: "전화번호 *",
    email: "이메일",
    company: "회사명",
    productType: "관심 제품 유형",
    selectProductType: "제품 유형 선택",
    message: "요청 내용 *",
    messagePlaceholder: "강재 종류, 강종, 규격, 수량을 입력해 주세요...",
    placeholders: {
      name: "홍길동",
      phone: "+82 10-1234-5678",
      email: "name@company.co.kr",
      company: "회사명",
    },
    productTypes: ["금형강", "공구강", "베어링강", "합금강", "기타"],
    submitting: "전송 중...",
    submit: "견적 요청 보내기",
  },
}

export function ContactForm() {
  const { locale } = useLocale()
  const t = formCopy[locale]
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
        <h3 className="text-xl font-semibold text-foreground mb-2">{t.success}</h3>
        <p className="text-muted-foreground">
          {t.successDesc}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">
            {t.name}
          </label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t.placeholders.name}
            className="bg-background border-input"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">
            {t.phone}
          </label>
          <Input
            required
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t.placeholders.phone}
            className="bg-background border-input"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">
            {t.email}
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.placeholders.email}
            className="bg-background border-input"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">
            {t.company}
          </label>
          <Input
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder={t.placeholders.company}
            className="bg-background border-input"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1 block">
            {t.productType}
        </label>
        <Select 
          value={formData.productType} 
          onValueChange={(value) => setFormData({ ...formData, productType: value })}
        >
          <SelectTrigger className="bg-background border-input">
            <SelectValue placeholder={t.selectProductType} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="die-steel">{t.productTypes[0]}</SelectItem>
            <SelectItem value="tool-steel">{t.productTypes[1]}</SelectItem>
            <SelectItem value="bearing-steel">{t.productTypes[2]}</SelectItem>
            <SelectItem value="alloy-steel">{t.productTypes[3]}</SelectItem>
            <SelectItem value="other">{t.productTypes[4]}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-1 block">
            {t.message}
        </label>
        <Textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t.messagePlaceholder}
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
            {t.submitting}
          </>
        ) : (
          t.submit
        )}
      </Button>
    </form>
  )
}
