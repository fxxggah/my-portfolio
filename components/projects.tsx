"use client"

import * as React from "react"
import { ArrowUpRight, Github, ImageIcon, Sparkles, GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  titleKey: string
  shortKey: string
  longKey: string
  statusKey: "projects.status.dev" | "projects.status.mvp" | "projects.status.done"
  statusTone: "dev" | "mvp" | "done"
  highlights: string[]
  stack: string[]
  github?: string
  demo?: string
  tcc?: boolean
}

const projects: Project[] = [
  {
    id: "katallo",
    titleKey: "p1.title",
    shortKey: "p1.short",
    longKey: "p1.long",
    statusKey: "projects.status.dev",
    statusTone: "dev",
    highlights: ["JWT Authentication", "Google OAuth", "Shopping Cart", "WhatsApp Integration", "Modern fullstack"],
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Java", "Spring Boot", "JWT", "MySQL", "Docker"],
  },
  {
    id: "clickjob",
    titleKey: "p2.title",
    shortKey: "p2.short",
    longKey: "p2.long",
    statusKey: "projects.status.mvp",
    statusTone: "mvp",
    tcc: true,
    highlights: ["Job system", "Applications", "JWT Security", "Layered architecture", "REST API"],
    stack: ["Next.js", "React", "TypeScript", "Java", "Spring Boot", "JWT", "MySQL"],
  },
  {
    id: "stock",
    titleKey: "p3.title",
    shortKey: "p3.short",
    longKey: "p3.long",
    statusKey: "projects.status.done",
    statusTone: "done",
    highlights: ["Java 17", "Spring Boot", "Docker", "Layered arch.", "Automated tests"],
    stack: ["Java 17", "Spring Boot", "MySQL", "Docker", "JUnit"],
  },
  {
    id: "auth",
    titleKey: "p4.title",
    shortKey: "p4.short",
    longKey: "p4.long",
    statusKey: "projects.status.done",
    statusTone: "done",
    highlights: ["JWT", "Refresh Token", "Spring Security", "Docker", "MySQL"],
    stack: ["Java", "Spring Boot", "JWT", "MySQL", "Docker"],
  },
]

const toneClass: Record<Project["statusTone"], string> = {
  dev: "bg-amber-500/10 text-amber-400 ring-amber-500/30",
  mvp: "bg-primary/15 text-primary ring-primary/30",
  done: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30",
}

export function Projects() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div ref={ref} className="reveal">
          <SectionHeader
            eyebrow={t("projects.eyebrow")}
            title={t("projects.title")}
            description={t("projects.desc")}
          />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur transition-all duration-500 hover:border-primary/40 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/10 via-card to-background">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-muted-foreground/70">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-card/60 backdrop-blur">
                      <ImageIcon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                      {t("projects.imageSoon")}
                    </span>
                  </div>
                </div>
                {/* Glow corner */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ring-1 backdrop-blur text-[10px] font-mono uppercase tracking-wider",
                      toneClass[p.statusTone],
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    {t(p.statusKey)}
                  </span>
                  {p.tcc && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground ring-1 ring-border/60 backdrop-blur">
                      <GraduationCap className="h-3 w-3" />
                      {t("projects.tcc")}
                    </span>
                  )}
                </div>
                <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
                  / 0{idx + 1}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{t(p.titleKey)}</h3>
                  <p className="mt-1 text-sm text-primary/90">{t(p.shortKey)}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(p.longKey)}</p>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                    {t("projects.highlights")}
                  </div>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        <Sparkles className="h-2.5 w-2.5 text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary ring-1 ring-primary/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-2">
                  <a
                    href={p.github ?? "#"}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/40 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:bg-card/70"
                  >
                    <Github className="h-3.5 w-3.5" />
                    {t("projects.viewGithub")}
                  </a>
                  <a
                    href={p.demo ?? "#"}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3.5 py-1.5 text-xs font-medium text-primary ring-1 ring-primary/30 transition-all hover:bg-primary/25"
                  >
                    {t("projects.viewDemo")}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
