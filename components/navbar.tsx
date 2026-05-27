"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Languages, Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const sections = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "skills", key: "nav.skills" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
]

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState("home")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      // determine active section
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id)
        if (!el) return { id: s.id, top: Number.POSITIVE_INFINITY }
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 120) }
      })
      offsets.sort((a, b) => a.top - b.top)
      if (offsets[0]) setActive(offsets[0].id)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl border border-transparent px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "glass-strong border-border/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.4)]"
              : "border-transparent",
          )}
        >
          <button
            onClick={() => handleNav("home")}
            className="group flex items-center gap-2.5"
            aria-label="Gabriel Oliveira — Home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30 transition-all group-hover:ring-primary/60 group-hover:bg-primary/15">
              <span className="absolute inset-0 rounded-lg bg-primary/40 blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
              <span className="relative font-mono text-xs font-semibold text-primary">G.</span>
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">Gabriel Oliveira</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Software Developer
              </span>
            </span>
          </button>

          <ul className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-background/40 px-1.5 py-1 backdrop-blur">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNav(s.id)}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                    active === s.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active === s.id && (
                    <span className="absolute inset-0 rounded-full bg-primary glow-blue" />
                  )}
                  <span className="relative">{t(s.key)}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground transition-all hover:text-foreground hover:border-primary/40"
              aria-label="Toggle language"
            >
              <Languages className="h-3.5 w-3.5" />
              <span>{language}</span>
            </button>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-all hover:text-foreground hover:border-primary/40"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-3.5 w-3.5" />
              ) : (
                <Moon className="h-3.5 w-3.5" />
              )}
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/40 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="glass-strong rounded-2xl border border-border/60 p-2">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNav(s.id)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    active === s.id
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  <span>{t(s.key)}</span>
                  <span className="font-mono text-[10px] text-muted-foreground/60">
                    0{sections.indexOf(s) + 1}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
