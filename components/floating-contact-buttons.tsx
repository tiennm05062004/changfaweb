"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, Facebook } from "lucide-react"

const contacts = [
  {
    href: "https://zalo.me/0981063023",
    label: "Zalo",
    className: "bg-blue-500 hover:bg-blue-600",
    icon: MessageCircle,
    shake: true,
    imageSrc: "/images/zalo-logo.png",
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    className: "bg-[#1877F2] hover:bg-[#166FE5]",
    icon: Facebook,
    shake: false,
    imageSrc: "",
  },
  {
    href: "tel:0981063023",
    label: "Hotline",
    className: "bg-emerald-500 hover:bg-emerald-600",
    icon: Phone,
    shake: true,
    imageSrc: "",
  },
]

export function FloatingContactButtons() {
  return (
    <div className="fixed left-4 bottom-6 z-[60] flex flex-col gap-3.5">
      {contacts.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={item.label}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-colors ${item.className} ${item.shake ? "contact-shake" : ""}`}
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-20" />
          {item.imageSrc ? (
            <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white">
              <Image src={item.imageSrc} alt={item.label} width={44} height={44} className="h-11 w-11 object-contain" />
            </span>
          ) : (
            <item.icon className="relative h-6 w-6" />
          )}
        </Link>
      ))}
    </div>
  )
}
