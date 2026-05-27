"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, Mail, Download, Sparkles, Code2, Boxes, Rocket } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

const PHRASES = [
  "Building scalable solutions.",
  "Engineering ideas into reality.",
  "Focused on real-world products.",
  "Thinking beyond code.",
  "Backend first. Product driven.",
  "Building with purpose.",
  "Learning. Building. Evolving.",
  "Creating technology with vision.",
]

export function Hero() {
  const { t, downloadCV } = useLanguage()
  const ref = useReveal<HTMLDivElement>()
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div ref={ref} className="reveal grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-7 max-w-2xl">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-border/60 bg-card/40 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("hero.eyebrow")}
              </span>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Gabriel Oliveira / 18 Anos
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                <span className="block">{t("hero.title").split("&")[0].trim()}</span>
              </h1>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg max-w-xl">
                {t("hero.headline")}
              </p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground/80 max-w-xl">
                {t("hero.sub")}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Sparkles, key: "hero.badge.opentowork" },
                { icon: Rocket, key: "hero.badge.freelance" },
                { icon: Boxes, key: "hero.badge.products" },
                { icon: Code2, key: "hero.badge.backend" },
                { icon: Sparkles, key: "hero.badge.engineering" },
              ].map((b, i) => (
                <span
                  key={b.key}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-all hover:border-primary/40 hover:text-foreground",
                  )}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <b.icon className="h-3 w-3 text-primary" />
                  {t(b.key)}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] glow-blue"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{t("hero.cta.projects")}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-card/60"
              >
                <Mail className="h-4 w-4" />
                {t("hero.cta.contact")}
              </button>
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                {t("hero.cta.cv")}
              </button>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative mx-auto lg:mx-0">
            <div className="relative w-[280px] sm:w-[340px] lg:w-[380px]">
              {/* Glow rings */}
              <div className="absolute -inset-8 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 glow-blue">
                <Image
                  src="/gabriel-profile.jpg"
                  alt="Gabriel Oliveira"
                  fill
                  priority
                  sizes="(max-width: 1024px) 340px, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/70 px-3 py-2 backdrop-blur">
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-semibold text-foreground">Gabriel Oliveira</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      SE Student · Brazil
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative cards */}
              <div className="absolute -right-6 top-12 hidden sm:flex flex-col items-start rounded-xl border border-border/60 glass px-3 py-2 shadow-xl">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  Stack
                </span>
                <span className="text-xs font-semibold text-foreground">Java · Spring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Long bio */}
        <p className="mt-16 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t("hero.long")}
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4">
          {[
            { value: "4+", key: "hero.stat.projects" },
            { value: "Java", key: "hero.stat.backend" },
            { value: "End-to-End", key: "hero.stat.fullstack" },
            { value: "∞", key: "hero.stat.learning" },
          ].map((s) => (
            <div
              key={s.key}
              className="group relative bg-card/60 p-6 transition-colors hover:bg-card backdrop-blur"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t(s.key)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y border-border/60 bg-card/30 backdrop-blur overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 py-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
          {[...PHRASES, ...PHRASES].map((p, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{p}</span>
              <span className="h-1 w-1 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
