"use client"

import { useEffect, useRef } from "react"

export function AnimatedClock() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const draw = () => {
      const now = new Date()
      const radius = canvas.width / 2
      const centerX = radius
      const centerY = radius

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw clock circle with blur effect
      ctx.filter = "blur(0.5px)"
      ctx.fillStyle = "rgba(107, 114, 207, 0.1)"
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius - 10, 0, 2 * Math.PI)
      ctx.fill()

      ctx.filter = "none"

      // Hour markers with blur
      ctx.globalAlpha = 0.5
      ctx.filter = "blur(0.3px)"
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = centerX + Math.sin(angle) * (radius - 30)
        const y1 = centerY - Math.cos(angle) * (radius - 30)
        const x2 = centerX + Math.sin(angle) * (radius - 15)
        const y2 = centerY - Math.cos(angle) * (radius - 15)

        ctx.strokeStyle = "rgba(107, 114, 207, 0.6)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      ctx.filter = "blur(0.5px)"

      const seconds = now.getSeconds()
      const secondAngle = ((seconds + now.getMilliseconds() / 1000) * 6 * Math.PI) / 180
      ctx.strokeStyle = "rgba(107, 114, 207, 0.4)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.sin(secondAngle) * (radius * 0.75), centerY - Math.cos(secondAngle) * (radius * 0.75))
      ctx.stroke()

      // Hour hand
      const hours = now.getHours() % 12
      const hourAngle = ((hours + now.getMinutes() / 60) * 30 * Math.PI) / 180
      ctx.strokeStyle = "rgba(107, 114, 207, 0.7)"
      ctx.lineWidth = 6
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.sin(hourAngle) * (radius * 0.5), centerY - Math.cos(hourAngle) * (radius * 0.5))
      ctx.stroke()

      // Minute hand
      const minutes = now.getMinutes()
      const minuteAngle = ((minutes + now.getSeconds() / 60) * 6 * Math.PI) / 180
      ctx.strokeStyle = "rgba(107, 114, 207, 0.5)"
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.sin(minuteAngle) * (radius * 0.7), centerY - Math.cos(minuteAngle) * (radius * 0.7))
      ctx.stroke()

      // Center dot
      ctx.globalAlpha = 0.8
      ctx.fillStyle = "rgba(107, 114, 207, 0.6)"
      ctx.beginPath()
      ctx.arc(centerX, centerY, 6, 0, 2 * Math.PI)
      ctx.fill()

      ctx.globalAlpha = 1
      ctx.filter = "none"

      animationId = requestAnimationFrame(draw)
    }

    const resizeCanvas = () => {
      const size = Math.min(window.innerWidth * 0.2, 150)
      canvas.width = size
      canvas.height = size
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-32 h-32 sm:w-40 sm:h-40 opacity-60 blur-sm"
      style={{ filter: "blur(0.5px)" }}
    />
  )
}
