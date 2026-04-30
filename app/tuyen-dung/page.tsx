"use client"

import { Briefcase, MapPin, Clock3, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const recruitmentCopy: Record<Locale, any> = {
  vi: {
    tag: "Tuyển Dụng",
    title: "Gia Nhập Đội Ngũ CHANGFA",
    desc: "Chúng tôi luôn tìm kiếm những nhân sự giàu nhiệt huyết để cùng phát triển trong lĩnh vực thép công nghiệp.",
    applyNow: "Ứng tuyển ngay",
    jobs: [
      { title: "Nhân viên Kinh doanh vật liệu thép", location: "Hà Nội", type: "Toàn thời gian", time: "Cập nhật: 29/04/2026", summary: "Phát triển khách hàng mới, tư vấn giải pháp vật liệu và theo dõi đơn hàng B2B." },
      { title: "Kỹ thuật viên Gia công CNC", location: "Bắc Ninh", type: "Toàn thời gian", time: "Cập nhật: 25/04/2026", summary: "Vận hành máy CNC, kiểm tra chất lượng chi tiết và phối hợp cải tiến quy trình gia công." },
      { title: "Kỹ sư QA/QC", location: "Hà Nội", type: "Toàn thời gian", time: "Cập nhật: 20/04/2026", summary: "Thiết lập tiêu chuẩn kiểm soát chất lượng và giám sát quy trình nghiệm thu sản phẩm." },
      { title: "Head of IT", location: "Hà Nội", type: "Bán thời gian", time: "Cập nhật: 29/04/2026", summary: "Xây dựng chiến lược CNTT, dẫn dắt chuyển đổi số và tối ưu hệ thống vận hành nội bộ." },
    ],
  },
  en: {
    tag: "Careers",
    title: "Join CHANGFA Team",
    desc: "We are looking for motivated talents to grow together in industrial steel solutions.",
    applyNow: "Apply now",
    jobs: [
      { title: "Steel Sales Executive", location: "Hanoi", type: "Full-time", time: "Updated: 29/04/2026", summary: "Develop B2B customers, consult technical solutions and manage order lifecycle." },
      { title: "CNC Machining Technician", location: "Bac Ninh", type: "Full-time", time: "Updated: 25/04/2026", summary: "Operate CNC machines, inspect parts and optimize machining workflow." },
      { title: "QA/QC Engineer", location: "Hanoi", type: "Full-time", time: "Updated: 20/04/2026", summary: "Set quality standards and supervise product inspection process." },
      { title: "Head of IT", location: "Hanoi", type: "Part-time", time: "Updated: 29/04/2026", summary: "Define IT strategy, lead digital transformation and optimize internal systems." },
    ],
  },
  zh: {
    tag: "招聘",
    title: "加入 CHANGFA 团队",
    desc: "我们正在寻找有热情的人才，共同发展工业钢材事业。",
    applyNow: "立即申请",
    jobs: [
      { title: "钢材销售专员", location: "河内", type: "全职", time: "更新: 29/04/2026", summary: "开发 B2B 客户、提供选材建议并跟进订单。"},
      { title: "CNC 加工技术员", location: "北宁", type: "全职", time: "更新: 25/04/2026", summary: "操作 CNC 设备、检测零件并优化加工流程。"},
      { title: "QA/QC 工程师", location: "河内", type: "全职", time: "更新: 20/04/2026", summary: "建立质量标准并监督检验流程。"},
      { title: "IT 主管", location: "河内", type: "兼职", time: "更新: 29/04/2026", summary: "制定 IT 战略，推动数字化转型并优化内部系统。"},
    ],
  },
  ja: {
    tag: "採用",
    title: "CHANGFA で働く",
    desc: "産業用鋼材分野で共に成長できる人材を募集しています。",
    applyNow: "応募する",
    jobs: [
      { title: "鋼材営業担当", location: "ハノイ", type: "正社員", time: "更新: 29/04/2026", summary: "法人顧客開拓、技術提案、受注フォローを担当。"},
      { title: "CNC 加工技術者", location: "バクニン", type: "正社員", time: "更新: 25/04/2026", summary: "CNC 設備運用、部品検査、加工改善を担当。"},
      { title: "QA/QC エンジニア", location: "ハノイ", type: "正社員", time: "更新: 20/04/2026", summary: "品質基準の策定と検査工程の監督。"},
      { title: "Head of IT", location: "ハノイ", type: "パートタイム", time: "更新: 29/04/2026", summary: "IT 戦略の策定、DX 推進、社内システム最適化を担当。"},
    ],
  },
  ko: {
    tag: "채용",
    title: "CHANGFA와 함께하세요",
    desc: "산업용 철강 분야에서 함께 성장할 인재를 찾고 있습니다.",
    applyNow: "지원하기",
    jobs: [
      { title: "철강 영업 담당", location: "하노이", type: "정규직", time: "업데이트: 29/04/2026", summary: "B2B 고객 개발, 기술 제안, 주문 관리 업무 담당."},
      { title: "CNC 가공 기술자", location: "박닌", type: "정규직", time: "업데이트: 25/04/2026", summary: "CNC 장비 운용, 부품 검사, 공정 개선 수행."},
      { title: "QA/QC 엔지니어", location: "하노이", type: "정규직", time: "업데이트: 20/04/2026", summary: "품질 기준 수립 및 검사 프로세스 관리."},
      { title: "Head of IT", location: "하노이", type: "파트타임", time: "업데이트: 29/04/2026", summary: "IT 전략 수립, 디지털 전환 추진 및 내부 시스템 최적화 담당."},
    ],
  },
}

export default function CareersPage() {
  const { locale } = useLocale()
  const t = recruitmentCopy[locale]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-44 pb-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-accent text-sm uppercase tracking-wider font-medium">{t.tag}</div>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-5">{t.title}</h1>
          <p className="text-primary-foreground/85 text-lg">{t.desc}</p>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 space-y-6">
          {t.jobs.map((job: any) => (
            <Card key={job.title} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.type}</span>
                  <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" />{job.time}</span>
                </div>
                <p className="text-muted-foreground">{job.summary}</p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t.applyNow}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
