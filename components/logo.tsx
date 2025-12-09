"use client"

import { useEffect, useState } from "react"

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeMap = {
    sm: { container: "w-20 h-8", text: "text-xs", radius: "rounded-lg" },
    md: { container: "w-24 h-10", text: "text-sm", radius: "rounded-lg" },
    lg: { container: "w-28 h-12", text: "text-base", radius: "rounded-xl" },
  }

  const sizes = sizeMap[size]

  const [rotation, setRotation] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours() % 12
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()

      setRotation({
        hours: hours * 30 + minutes * 0.5, // 360/12 = 30 degrees per hour
        minutes: minutes * 6 + seconds * 0.1, // 360/60 = 6 degrees per minute
        seconds: seconds * 6, // 360/60 = 6 degrees per second
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`${sizes.container} ${sizes.radius} bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/30 relative px-3`}
    >
      <div className="flex items-center gap-1.5">
        {/* Буква В */}
        <span className={`${sizes.text} font-bold text-primary`}>В</span>

        {/* Циферблат вместо О */}
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          {/* Внешний круг */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-primary/50"
          />

          {/* Часовые метки (12, 3, 6, 9) */}
          <line x1="20" y1="3" x2="20" y2="6" stroke="currentColor" strokeWidth="1" className="text-primary/60" />
          <line x1="20" y1="34" x2="20" y2="37" stroke="currentColor" strokeWidth="1" className="text-primary/60" />
          <line x1="3" y1="20" x2="6" y2="20" stroke="currentColor" strokeWidth="1" className="text-primary/60" />
          <line x1="34" y1="20" x2="37" y2="20" stroke="currentColor" strokeWidth="1" className="text-primary/60" />

          <line
            x1="20"
            y1="20"
            x2="20"
            y2="10"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-primary origin-center transition-transform duration-1000"
            strokeLinecap="round"
            style={{ transform: `rotate(${rotation.hours}deg)`, transformOrigin: "20px 20px" }}
          />

          <line
            x1="20"
            y1="20"
            x2="28"
            y2="20"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-primary/70 origin-center transition-transform duration-1000"
            strokeLinecap="round"
            style={{ transform: `rotate(${rotation.minutes}deg)`, transformOrigin: "20px 20px" }}
          />

          <line
            x1="20"
            y1="20"
            x2="25"
            y2="20"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary/40 origin-center transition-transform duration-1000"
            strokeLinecap="round"
            style={{ transform: `rotate(${rotation.seconds}deg)`, transformOrigin: "20px 20px" }}
          />

          {/* Центр */}
          <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-primary" />
        </svg>

        {/* Буквы ВРЕМЯ */}
        <span className={`${sizes.text} font-bold text-primary`}>ВРЕМЯ</span>
      </div>
    </div>
  )
}
