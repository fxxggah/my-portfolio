"use client"

import * as React from "react"
import { useLanguage } from "@/components/language-provider"

export function LoadingScreen() {
  const [done, setDone] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const { t } = useLanguage()

  React.useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1400)
    const t2 = setTimeout(() => setHidden(true), 2000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-2xl border border-primary/40 animate-pulse-glow" />
          <div className="absolute inset-2 rounded-xl border border-primary/30" />
          <div className="absolute inset-4 rounded-lg bg-primary/80 glow-blue-strong" />
        </div>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>{t("loading.text")}</span>
          <span className="inline-flex gap-0.5">
            <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
            <span className="h-1 w-1 rounded-full bg-primary animate-pulse [animation-delay:120ms]" />
            <span className="h-1 w-1 rounded-full bg-primary animate-pulse [animation-delay:240ms]" />
          </span>
        </div>
      </div>
    </div>
  )
}
