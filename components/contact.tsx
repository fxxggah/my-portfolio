"use client"

import * as React from "react"
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { useReveal } from "@/hooks/use-reveal"

const links = [
  {
    key: "contact.email",
    icon: Mail,
    value: "gabrielsilvaoli07@gmail.com",
    href: "mailto:gabrielsilvaoli07@gmail.com",
  },
  {
    key: "contact.github",
    icon: Github,
    value: "github.com/fxxggah",
    href: "https://github.com/fxxggah",
  },
  {
    key: "contact.linkedin",
    icon: Linkedin,
    value: "/in/gabriel-oliveira-da-silva-btu",
    href: "https://www.linkedin.com/in/gabriel-oliveira-da-silva-btu",
  },
  {
    key: "contact.whatsapp",
    icon: MessageCircle,
    value: "+55 14 99601-6512",
    href: "https://wa.me/5514996016512",
  },
]

export function Contact() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8 backdrop-blur sm:p-12"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="relative">
            <SectionHeader
              eyebrow={t("contact.eyebrow")}
              title={t("contact.title")}
              description={t("contact.desc")}
              align="center"
            />

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {links.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-background/40 p-4 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/70 hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30 transition-all group-hover:ring-primary/60 group-hover:bg-primary/20">
                    <l.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {t(l.key)}
                    </div>
                    <div className="truncate text-sm font-medium text-foreground">{l.value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="mailto:gabrielsilvaoli07@gmail.com"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-blue transition-all hover:scale-[1.02]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Mail className="relative h-4 w-4" />
                <span className="relative">{t("contact.cta")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
