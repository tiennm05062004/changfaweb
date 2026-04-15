"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const productCategories = [
  {
    id: "die-steel",
    name: "Thép Khuôn Mẫu",
    products: [
      {
        name: "Thép Khuôn Nhựa",
        grades: ["P20", "718", "738", "S136", "NAK80"],
        description: "Dùng cho khuôn ép nhựa, yêu cầu độ bóng cao, khả năng đánh bóng tốt.",
        applications: "Khuôn ép nhựa, khuôn thổi, khuôn đùn"
      },
      {
        name: "Thép Khuôn Dập Nóng",
        grades: ["H13", "H11", "SKD61", "8407"],
        description: "Chịu nhiệt cao, độ dẻo dai tốt, khả năng chống mài mòn.",
        applications: "Khuôn đúc áp lực, khuôn rèn, khuôn ép đùn"
      },
      {
        name: "Thép Khuôn Dập Nguội",
        grades: ["D2", "DC53", "SKD11", "Cr12MoV"],
        description: "Độ cứng cao, chống mài mòn, độ bền uốn tốt.",
        applications: "Khuôn dập cắt, khuôn uốn, khuôn kéo"
      }
    ]
  },
  {
    id: "tool-steel",
    name: "Thép Công Cụ",
    products: [
      {
        name: "S45C",
        grades: ["S45C", "C45", "1045"],
        description: "Thép carbon trung bình, dễ gia công, giá thành hợp lý.",
        applications: "Trục, bánh răng, bu lông, đai ốc"
      },
      {
        name: "SCM420",
        grades: ["SCM420", "20CrMo", "4118"],
        description: "Thép hợp kim Crom-Molybden, thấm carbon tốt.",
        applications: "Bánh răng, trục cam, piston"
      },
      {
        name: "SCM440",
        grades: ["SCM440", "42CrMo", "4140"],
        description: "Độ bền cao, khả năng chịu mỏi tốt.",
        applications: "Trục khuỷu, trục truyền, bánh răng lớn"
      }
    ]
  },
  {
    id: "bearing-steel",
    name: "Thép Ổ Bi",
    products: [
      {
        name: "SUJ2",
        grades: ["SUJ2", "GCr15", "52100"],
        description: "Thép ổ bi chrome cao, độ cứng và chống mài mòn tuyệt vời.",
        applications: "Vòng bi, bi thép, con lăn"
      },
      {
        name: "SCM415",
        grades: ["SCM415", "15CrMo", "4115"],
        description: "Thép thấm carbon, độ cứng bề mặt cao, lõi dẻo dai.",
        applications: "Bánh răng chịu tải, trục ổ bi"
      }
    ]
  },
  {
    id: "alloy-steel",
    name: "Thép Hợp Kim",
    products: [
      {
        name: "Thép Kết Cấu Hợp Kim",
        grades: ["40Cr", "35CrMo", "42CrMo"],
        description: "Độ bền cao, chịu tải trọng lớn, khả năng nhiệt luyện tốt.",
        applications: "Chi tiết máy chịu lực, trục, bánh răng"
      },
      {
        name: "Thép Không Gỉ",
        grades: ["SUS304", "SUS316", "SUS420"],
        description: "Chống ăn mòn, thẩm mỹ cao, dễ vệ sinh.",
        applications: "Thiết bị y tế, công nghiệp thực phẩm"
      },
      {
        name: "Thép Carbon",
        grades: ["S20C", "S35C", "S50C"],
        description: "Giá thành kinh tế, dễ gia công, ứng dụng đa dạng.",
        applications: "Chi tiết máy thông dụng, kết cấu"
      }
    ]
  }
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Sản Phẩm</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Danh Mục Sản Phẩm Thép
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Chúng tôi cung cấp đa dạng các loại thép công nghiệp chất lượng cao, đáp ứng mọi nhu cầu sản xuất của khách hàng.
          </p>
        </div>

        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-12">
          <Image
            src="/images/steel-products.jpg"
            alt="Steel Products"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Thép Chất Lượng Cao</h3>
              <p className="text-muted-foreground max-w-lg">
                Tất cả sản phẩm đều được kiểm tra phân tích kim tương, độ cứng, dò khuyết tật siêu âm 
                và các quy trình kiểm tra nghiêm ngặt khác.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="die-steel" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto gap-2 bg-transparent">
            {productCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {productCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-foreground">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-2">Mác thép:</p>
                        <div className="flex flex-wrap gap-2">
                          {product.grades.map((grade) => (
                            <Badge key={grade} variant="secondary" className="bg-secondary text-secondary-foreground">
                              {grade}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Ứng dụng:</p>
                        <p className="text-sm text-muted-foreground">{product.applications}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
