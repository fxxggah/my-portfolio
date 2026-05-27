"use client"

import * as React from "react"
import { Server, Layers3, Boxes, Lightbulb } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { useReveal } from "@/hooks/use-reveal"

const cards = [
  { icon: Server, title: "about.card.backend.title", desc: "about.card.backend.desc" },
  { icon: Layers3, title: "about.card.fullstack.title", desc: "about.card.fullstack.desc" },
  { icon: Boxes, title: "about.card.architecture.title", desc: "about.card.architecture.desc" },
  { icon: Lightbulb, title: "about.card.product.title", desc: "about.card.product.desc" },
]

export function About() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div ref={ref} className="reveal grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} />
            <div className="mt-8 hidden lg:block">
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Quote
                </div>
                <p className="mt-3 text-balance text-lg font-medium leading-relaxed">
                  &ldquo;Backend first. Product driven. Building with purpose.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span className="h-px w-6 bg-primary" />
                  <span>Gabriel Oliveira</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p>{t("about.p4")}</p>
            <p className="text-foreground font-medium">{t("about.p5")}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur transition-all hover:border-primary/40 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight">{t(c.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(c.desc)}</p>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
                  0{i + 1} / 04
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
