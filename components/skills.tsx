"use client"

import * as React from "react"
import {
  Coffee,
  Leaf,
  Boxes,
  ShieldCheck,
  Network,
  Database,
  Container,
  FileCode2,
  Palette,
  Braces,
  FileType2,
  Component,
  Sparkles,
  Wind,
  GitBranch,
  Github,
  Terminal,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"
import { useReveal } from "@/hooks/use-reveal"

const groups: {
  key: string
  items: { name: string; icon: React.ElementType }[]
}[] = [
  {
    key: "skills.backend",
    items: [
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: Leaf },
      { name: "Maven", icon: Boxes },
      { name: "JWT", icon: ShieldCheck },
      { name: "REST APIs", icon: Network },
      { name: "MySQL", icon: Database },
      { name: "Docker", icon: Container },
    ],
  },
  {
    key: "skills.frontend",
    items: [
      { name: "HTML", icon: FileCode2 },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: FileType2 },
      { name: "React", icon: Component },
      { name: "Next.js", icon: Sparkles },
      { name: "TailwindCSS", icon: Wind },
    ],
  },
  {
    key: "skills.tools",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Docker", icon: Container },
      { name: "Linux", icon: Terminal },
    ],
  },
]

export function Skills() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div ref={ref} className="reveal">
          <SectionHeader
            eyebrow={t("skills.eyebrow")}
            title={t("skills.title")}
            description={t("skills.desc")}
          />
        </div>

        <div className="mt-16 space-y-8">
          {groups.map((g, gi) => (
            <div key={g.key} className="grid gap-6 lg:grid-cols-[200px_1fr] lg:gap-12">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-primary">0{gi + 1}.</span>
                <h3 className="text-lg font-semibold tracking-tight">{t(g.key)}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {g.items.map((it, i) => (
                  <div
                    key={`${g.key}-${it.name}-${i}`}
                    className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5 hover:bg-card/70"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                    </div>
                    <div className="relative flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:ring-primary/50 group-hover:bg-primary/15">
                        <it.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium tracking-tight">{it.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
