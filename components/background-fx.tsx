"use client"

import * as React from "react"

/**
 * Subtle animated background:
 * - Radial blue glow orbs
 * - Grid pattern
 * - Lightweight floating particles on canvas
 */
export function BackgroundFx() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let w = (canvas.width = window.innerWidth * window.devicePixelRatio)
    let h = (canvas.height = window.innerHeight * window.devicePixelRatio)
    canvas.style.width = window.innerWidth + "px"
    canvas.style.height = window.innerHeight + "px"

    const count = Math.min(60, Math.floor(window.innerWidth / 24))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.5 + 0.2,
    }))

    const onResize = () => {
      w = canvas.width = window.innerWidth * window.devicePixelRatio
      h = canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
    }
    window.addEventListener("resize", onResize)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(120, 160, 255, ${p.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.25]" />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px] animate-float-orb" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px] animate-float-orb [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[140px] animate-float-orb [animation-delay:-12s]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  )
}
