"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { productCategories } from "@/lib/products-data"

const navItems = [
  { name: "Trang Chủ", href: "/" },
  { name: "Giới Thiệu", href: "/gioi-thieu" },
  { 
    name: "Sản Phẩm", 
    href: "/san-pham",
    children: productCategories.map(cat => ({
      name: cat.name,
      href: `/san-pham/danh-muc/${cat.slug}`
    }))
  },
  { name: "Dịch Vụ", href: "/dich-vu" },
  { name: "Liên Hệ", href: "/lien-he" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:0981063023" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span>0981-063-023</span>
            </a>
            <a href="mailto:changfasteel@gmail.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">changfasteel@gmail.com</span>
            </a>
          </div>
          <span className="text-xs opacity-80">Thép Chất Lượng - Uy Tín Hàng Đầu</span>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 font-medium transition-colors ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}>
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href={item.href} className="cursor-pointer font-medium">
                        Tất Cả Sản Phẩm
                      </Link>
                    </DropdownMenuItem>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href} className="cursor-pointer">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/lien-he">Liên Hệ Ngay</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-2"
              >
                <Link href="/lien-he" onClick={() => setIsMenuOpen(false)}>
                  Liên Hệ Ngay
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
