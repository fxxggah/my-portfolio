"use client"

import * as React from "react"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
            <span className="text-sm font-semibold tracking-tight">{t("footer.main")}</span>
            <span className="text-xs text-muted-foreground">{t("footer.sub")}</span>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/fxxggah", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/gabriel-oliveira-da-silva-btu",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:gabrielsilvaoli07@gmail.com", label: "Email" },
              { icon: MessageCircle, href: "https://wa.me/5514996016512", label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/40 text-muted-foreground backdrop-blur transition-all hover:text-primary hover:border-primary/40 hover:-translate-y-0.5"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border/40 pt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 md:flex-row md:text-left">
          <span>© {year} Gabriel Oliveira</span>
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  )
}
