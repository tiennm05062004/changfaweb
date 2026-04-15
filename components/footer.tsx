import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { productCategories } from "@/lib/products-data"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Thông tin công ty */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="CHANGFA Steel"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
              <span className="font-bold tracking-wide">
                <span className="text-red-600">CHANG</span>
                <span className="text-blue-600">FA</span>
              </span>
            </div>
            <p className="text-background/80 mb-4 text-pretty text-sm">
              CHANGFA Steel - Nhà cung cấp vật liệu kim loại công nghiệp hàng đầu .
            </p>
            <div className="flex items-center gap-2 text-background/80 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Số 03, Lý Sơn, Ngọc Thụy, Long Biên, Hà Nội</span>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Trang</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-accent transition-colors text-sm">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="text-background/80 hover:text-accent transition-colors text-sm">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-background/80 hover:text-accent transition-colors text-sm">
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-background/80 hover:text-accent transition-colors text-sm">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-background/80 hover:text-accent transition-colors text-sm">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Danh mục sản phẩm */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Sản Phẩm</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/san-pham/danh-muc/${category.slug}`} 
                    className="text-background/80 hover:text-accent transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:0981063023" className="hover:text-accent transition-colors text-sm">
                  HOTLINE: 0981-063-023
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:0975330960" className="hover:text-accent transition-colors text-sm">
                  Ms. Hiền: 0975-330-960
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:0964160594" className="hover:text-accent transition-colors text-sm">
                  Ms. Thu: 0964-160-594
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:changfasteel@gmail.com" className="hover:text-accent transition-colors text-sm">
                  changfasteel@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} CHANGFA Steel Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-background/60 text-sm">
            <span>Việt Nam</span>
            <span>|</span>
            <span>Trung Quốc</span>
          </div>
        </div>
      </div>
    </footer>
  )
}