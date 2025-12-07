"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin, Clock, Users, Phone, Menu, X, ChevronDown, Star } from "lucide-react"
import { PropertyModal } from "@/components/property-modal"
import { AnimatedClock } from "@/components/animated-clock"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property)
    setModalOpen(true)
  }

  const handleStartSearch = () => {
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })
  }

  const phoneNumber = "+79173604464"
  const phoneLink = `tel:${phoneNumber}`

  const allProperties = [
    {
      id: 1,
      price: "12.5M ₽",
      desc: "Роскошная квартира с панорамным видом",
      area: "120 м²",
      category: "apartment",
      image: "/apartment-luxury.jpg",
      rooms: 3,
      floor: 15,
      year: 2023,
    },
    {
      id: 2,
      price: "8.9M ₽",
      desc: "Уютный дом в центре города",
      area: "85 м²",
      category: "apartment",
      image: "/apartment-cozy.jpg",
      rooms: 2,
      floor: 5,
      year: 2022,
    },
    {
      id: 3,
      price: "15M ₽",
      desc: "Люкс апартаменты с террасой",
      area: "180 м²",
      category: "penthouse",
      image: "/apartment-penthouse.jpg",
      rooms: 4,
      floor: 22,
      year: 2023,
    },
    {
      id: 4,
      price: "5.5M ₽",
      desc: "Стартовая квартира для молодых",
      area: "45 м²",
      category: "apartment",
      image: "/apartment-luxury.jpg",
      rooms: 1,
      floor: 3,
      year: 2021,
    },
    {
      id: 5,
      price: "18M ₽",
      desc: "Частный коттедж с участком",
      area: "250 м²",
      category: "house",
      image: "/apartment-cozy.jpg",
      rooms: 5,
      floor: 2,
      year: 2020,
    },
    {
      id: 6,
      price: "22M ₽",
      desc: "Элитный коттедж премиум класса",
      area: "320 м²",
      category: "house",
      image: "/apartment-penthouse.jpg",
      rooms: 6,
      floor: 3,
      year: 2023,
    },
  ]

  const filteredProperties =
    selectedCategory === "all" ? allProperties : allProperties.filter((p) => p.category === selectedCategory)

  const benefits = [
    { title: "Быстрая обработка", desc: "От просмотра до ключей за 7-14 дней" },
    { title: "Прозрачные цены", desc: "Без скрытых комиссий и доп. платежей" },
    { title: "Экспертная помощь", desc: "Профессионалы с опытом 15+ лет" },
    { title: "Гарантия безопасности", desc: "Полная юридическая поддержка" },
  ]

  const reviews = [
    {
      name: "Александр М.",
      text: "Спасибо за профессионализм! Вовремя помогли найти идеальную квартиру, всё прошло гладко.",
      rating: 5,
    },
    {
      name: "Елена К.",
      text: "Лучший опыт покупки недвижимости из всех, что когда-либо были. Рекомендую!",
      rating: 5,
    },
    {
      name: "Владимир И.",
      text: "Быстро, надёжно, честно. Ровно то, что обещали. Спасибо команде ВОВРЕМЯ!",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "Как быстро можно найти квартиру?",
      answer:
        "В среднем поиск занимает 5-7 дней. Наша база содержит 500+ актуальных объектов, отобранных по вашим параметрам.",
    },
    {
      question: "Какие документы нужны для покупки?",
      answer:
        "Минимум: паспорт и документ о доходах. Полный список подготовим при первой консультации. Мы помогаем с каждым шагом.",
    },
    {
      question: "Есть ли скрытые комиссии?",
      answer: "Нет. Все комиссии обсуждаются заранее и указаны в договоре. Мы придерживаемся принципа прозрачности.",
    },
    {
      question: "Можно ли арендовать квартиру?",
      answer: "Да, мы предоставляем услуги как по покупке, так и по аренде на любой срок от 1 месяца.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl bg-white/10 dark:bg-white/5 backdrop-blur-xl z-50 border border-white/20 dark:border-white/10 rounded-full shadow-xl">
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-primary font-bold text-xs border border-white/30">
              ВВ
            </div>
            <span className="font-light text-base sm:text-lg text-primary hidden sm:inline">ВОВРЕМЯ</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-light hover:text-primary transition-colors duration-300">
              Услуги
            </Link>
            <Link href="#properties" className="text-sm font-light hover:text-primary transition-colors duration-300">
              Объекты
            </Link>
            <Link href="#benefits" className="text-sm font-light hover:text-primary transition-colors duration-300">
              Преимущества
            </Link>
            <Link href="#reviews" className="text-sm font-light hover:text-primary transition-colors duration-300">
              Отзывы
            </Link>
            <Link href="#contact" className="text-sm font-light hover:text-primary transition-colors duration-300">
              Контакты
            </Link>
            <a
              href="tel:+79173604464"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-primary hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 font-medium text-xs hover:scale-105 active:scale-95"
            >
              Позвонить
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/5 dark:bg-white/5 border-t border-white/10 rounded-b-3xl">
            <div className="px-4 py-4 space-y-3 flex flex-col">
              <Link
                href="#services"
                className="text-sm font-light hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link
                href="#properties"
                className="text-sm font-light hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Объекты
              </Link>
              <Link
                href="#benefits"
                className="text-sm font-light hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Преимущества
              </Link>
              <Link
                href="#reviews"
                className="text-sm font-light hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Отзывы
              </Link>
              <Link
                href="#contact"
                className="text-sm font-light hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </Link>
              <a
                href="tel:+79173604464"
                className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-primary hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 font-medium text-xs hover:scale-105 active:scale-95"
              >
                Позвонить
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        className="relative pt-32 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/apartment-luxury.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 fade-in">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-pretty">
                Вовремя или
                <br />
                <span className="text-primary font-semibold">будет поздно!</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg font-light">
                Найди идеальную недвижимость быстро и легко. Мы помогаем на каждом этапе.
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4 flex-col sm:flex-row">
              <button
                onClick={handleStartSearch}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-primary hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 font-medium text-sm sm:text-base hover:scale-105 active:scale-95 group"
              >
                Начать поиск
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
              </button>
              <a
                href="tel:+79173604464"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-primary hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 font-medium text-sm sm:text-base hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 mr-2" />
                Позвонить
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <AnimatedClock />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {[
            { number: "500+", label: "Квартир" },
            { number: "98%", label: "Доволны" },
            { number: "5+", label: "Лет" },
            { number: "24/7", label: "Поддержка" },
          ].map((stat, i) => (
            <div key={i} className="text-center fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: "url('/apartment-cozy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/75 dark:bg-black/60 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-12 text-center text-pretty">
            Что мы <span className="font-semibold text-primary">предлагаем</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: MapPin,
                title: "Покупка",
                desc: "Подберем дом по параметрам и бюджету",
              },
              {
                icon: MapPin,
                title: "Аренда",
                desc: "Квартиры и дома на любой срок",
              },
              {
                icon: Clock,
                title: "Быстро",
                desc: "От просмотра к ключам за дни",
              },
              {
                icon: Users,
                title: "Консультация",
                desc: "Профессиональные советы и помощь",
              },
              {
                icon: MapPin,
                title: "Продажа",
                desc: "Быстро продадим вашу недвижимость",
              },
              {
                icon: Clock,
                title: "Инвестиции",
                desc: "Выгодные варианты для инвестирования",
              },
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 cursor-pointer transition-all duration-300 fade-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 text-pretty">
            Популярные <span className="font-semibold text-primary">объекты</span>
          </h2>

          <div className="flex gap-2 sm:gap-4 mb-12 overflow-x-auto pb-4">
            {[
              { id: "all", label: "Все" },
              { id: "apartment", label: "Квартиры" },
              { id: "house", label: "Дома" },
              { id: "penthouse", label: "Пентхаусы" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-6 py-2 rounded-full font-light text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "inline-flex items-center justify-center bg-white/20 dark:bg-white/15 backdrop-blur-md border border-white/40 dark:border-white/30 text-primary hover:bg-white/25 dark:hover:bg-white/20 hover:border-white/50 dark:hover:border-white/40 font-medium hover:scale-105 active:scale-95"
                    : "bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 font-light text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProperties.map((property, i) => (
              <div
                key={property.id}
                onClick={() => handlePropertyClick(property)}
                className="group cursor-pointer bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-0 overflow-hidden hover:border-white/40 dark:hover:border-white/30 transition-all duration-300 fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden bg-muted">
                  <Image
                    src={property.image || "/placeholder.svg?height=400&width=400&query=real estate apartment"}
                    alt={property.desc}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-3 sm:px-4 py-1 sm:py-2">
                    <span className="text-xs sm:text-sm font-light text-primary">{property.price}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3">
                  <div>
                    <p className="text-muted-foreground text-xs sm:text-sm font-light">{property.area}</p>
                    <p className="font-light text-sm sm:text-base">{property.desc}</p>
                  </div>
                  <a
                    href="tel:+79173604464"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-primary hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 font-medium text-xs sm:text-sm hover:scale-105 active:scale-95"
                  >
                    <Phone className="w-3 h-3 mr-2 inline" />
                    Узнать больше
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: "url('/apartment-penthouse.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/75 dark:bg-black/60 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-12 text-center text-pretty">
            Почему выбирают <span className="font-semibold text-primary">ВОВРЕМЯ</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/30 cursor-pointer transition-all duration-300 fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary font-light">
                  {i + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-light mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-12 text-center text-pretty">
            Что говорят клиенты <span className="font-semibold text-primary">о нас</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/30 transition-all duration-300 fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground mb-4 font-light">{review.text}</p>
                <p className="font-light text-primary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-12 text-center text-pretty">
            Часто задаваемые <span className="font-semibold text-primary">вопросы</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 sm:p-8 cursor-pointer hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/30 transition-all duration-300 fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
                onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-light text-foreground">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      expandedFAQ === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedFAQ === i && (
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4 font-light">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-pretty">
              Свяжитесь с <span className="font-semibold text-primary">нами</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-light">
              Позвоните прямо сейчас – мы готовы помочь найти вашу идеальную недвижимость
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79173604464"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-primary hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 font-medium text-base sm:text-lg hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 mr-3 inline" />
              {phoneNumber}
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12 pt-12 border-t border-white/10">
            <div className="space-y-2">
              <h3 className="font-light text-foreground">Адрес</h3>
              <p className="text-muted-foreground text-sm font-light">
                ул. Карла Маркса, 21
                <br />
                Уфа, 450000
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-light text-foreground">Часы работы</h3>
              <p className="text-muted-foreground text-sm font-light">
                Пн-Пт: 9:00 - 20:00
                <br />
                Сб-Вс: 10:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center font-light text-primary text-sm border border-white/30">
                ВВ
              </div>
              <div>
                <span className="font-light text-foreground">ВОВРЕМЯ</span>
                <p className="text-xs text-muted-foreground font-light">Агенство недвижимости</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right font-light">
              © 2025 ВОВРЕМЯ. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      <PropertyModal isOpen={modalOpen} property={selectedProperty} onClose={() => setModalOpen(false)} />
    </div>
  )
}
