"use client"

import { X, Phone } from "lucide-react"
import Image from "next/image"

interface PropertyModalProps {
  isOpen: boolean
  property: {
    price: string
    desc: string
    area: string
    image: string
    rooms?: number
    floor?: number
    year?: number
  } | null
  onClose: () => void
}

export function PropertyModal({ isOpen, property, onClose }: PropertyModalProps) {
  if (!isOpen || !property) return null

  const phoneNumber = "+79173604464"
  const phoneLink = `tel:${phoneNumber}`

  return (
    <div className="fixed inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-100 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-3xl">
        {/* Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl font-light">
            <span className="font-semibold text-primary">Подробнее</span> об объекте
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-xl transition duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="relative h-72 rounded-2xl overflow-hidden bg-muted border border-white/10">
            <Image
              src={property.image || "/placeholder.svg?height=400&width=400&query=real estate"}
              alt={property.desc}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Price and Area */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-light">Цена</p>
              <p className="text-3xl sm:text-4xl font-light text-primary">{property.price}</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-sm mb-2 font-light">Площадь</p>
              <p className="text-3xl sm:text-4xl font-light">{property.area}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-muted-foreground text-sm mb-3 font-light">Описание</p>
            <p className="text-foreground leading-relaxed font-light">{property.desc}</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-3 gap-4 p-5 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl">
            <div className="text-center">
              <p className="text-muted-foreground text-xs font-light mb-2">Комнаты</p>
              <p className="font-light text-2xl text-primary">{property.rooms || "2"}</p>
            </div>
            <div className="text-center border-x border-white/10">
              <p className="text-muted-foreground text-xs font-light mb-2">Этаж</p>
              <p className="font-light text-2xl text-primary">{property.floor || "5"}</p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-xs font-light mb-2">Год</p>
              <p className="font-light text-2xl text-primary">{property.year || "2023"}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-col sm:flex-row pt-4">
            <a
              href={phoneLink}
              className="inline-flex items-center justify-center flex-1 px-6 py-3 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-primary hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 font-medium hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2 inline" />
              Позвонить
            </a>
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl text-foreground hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 font-light"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
