"use client"

import * as React from "react"

export type Language = "pt" | "en"

type Dict = Record<string, string>

const pt: Dict = {
  // nav
  "nav.subtitle": "Desenvolvedor Backend",
  "nav.home": "Home",
  "nav.about": "Sobre",
  "nav.skills": "Skills",
  "nav.projects": "Projetos",
  "nav.contact": "Contato",

  // loading
  "loading.text": "Carregando portfólio",

  // photo
  "hero.subtitle": "Estudante de ES · Brasil",

  // hero
  "hero.eyebrow": "Disponível para novas oportunidades",
  "hero.title": "Desenvolvedor Backend",
  "hero.headline":
    "Transformando ideias em soluções reais através da engenharia de software.",
  "hero.sub":
    "Estudante de Engenharia de Software focado em backend, arquitetura de sistemas e desenvolvimento de soluções escaláveis.",
  "hero.long":
    "Tenho 18 anos e sou apaixonado por tecnologia. Atualmente foco meus estudos em backend com Java e Spring Boot, enquanto exploro o frontend moderno para desenvolver aplicações completas, escaláveis, e bem estruturadas. Mais do que apenas escrever código, busco entender negócios e como a tecnologia pode gerar resultado real.",
  "hero.cta.projects": "Ver Projetos",
  "hero.cta.contact": "Entrar em Contato",
  "hero.cta.cv": "Download CV",

  // badges
  "hero.badge.opentowork": "Disponível para Trabalho",
  "hero.badge.freelance": "Disponível para Freelance",
  "hero.badge.products": "Construindo Soluções Reais",
  "hero.badge.backend": "Foco em Backend",
  "hero.badge.engineering": "Mentalidade de Engenharia",

  "hero.stat.projects": "Projetos em Destaque",
  "hero.stat.backend": "Foco em Backend",
  "hero.stat.fullstack": "Projetos Full Stack",
  "hero.stat.learning": "Sempre Aprendendo",

  // carrosel
  "hero.marquee.1": "Construindo soluções escaláveis.",
  "hero.marquee.2": "Transformando ideias em realidade.",
  "hero.marquee.3": "Foco em produtos do mundo real.",
  "hero.marquee.4": "Pensando além do código.",
  "hero.marquee.5": "Backend primeiro. Foco em produto.",
  "hero.marquee.6": "Construindo com propósito.",
  "hero.marquee.7": "Aprendendo. Construindo. Evoluindo.",
  "hero.marquee.8": "Criando tecnologia com visão.",

  // about
  "about.eyebrow": "Sobre Mim",
  "about.title": "Engenharia, solução e tecnologia.",
  "about.p1":
    "Minha jornada na tecnologia começou movida pela vontade de trabalhar com o que eu amo e poder realmente agregar valor, rapidamente se transformou em uma ambição clara: construir soluções com a tecnologia.",
  "about.p2":
    "Atualmente sou estudante de Engenharia de Software e concentro meus estudos principalmente no ecossistema Java e Spring Boot, desenvolvendo aplicações backend, APIs REST seguras e arquiteturas escaláveis. Ao mesmo tempo, também exploro tecnologias frontend como React, Next.js e TypeScript para compreender o desenvolvimento de soluções de ponta a ponta.",
  "about.p3":
    "Tenho grande interesse em arquitetura de software, sistemas bem estruturados e construção de soluções digitais que realmente resolvam problemas. Gosto de enxergar além do código, entendendo também produto, escalabilidade e visão de negócio.",
  "about.p4":
    "Busco constantemente evolução técnica e profissional, com o objetivo de atuar em projetos de alto nível, oportunidades internacionais e desenvolvimento de soluções que gerem impacto real.",
  "about.p5":
    "Acredito que tecnologia vai muito além de ferramentas: ela é a capacidade de transformar ideias em realidade.",
  "about.quote": "Focado em backend e construindo com propósito.",
  "about.card.backend.title": "Engenharia de Backend",
  "about.card.backend.desc": "APIs REST seguras, escaláveis e bem estruturadas com Java e Spring Boot.",
  "about.card.fullstack.title": "Desenvolvimento Full Stack",
  "about.card.fullstack.desc": "Soluções completas de ponta a ponta, do banco de dados à interface.",
  "about.card.architecture.title": "Arquitetura de Software",
  "about.card.architecture.desc": "Sistemas em camadas, organizados, sustentáveis e prontos para crescer.",
  "about.card.product.title": "Visão de Produto",
  "about.card.product.desc": "Pensar além do código: negócio, usuário e impacto real.",

  // skills
  "skills.eyebrow": "Tecnologias & Ferramentas",
  "skills.title": "Stack moderna para construir produtos reais.",
  "skills.desc":
    "Tecnologias que utilizo para desenvolver aplicações modernas, escaláveis e focadas em soluções reais.",
  "skills.backend": "Backend",
  "skills.frontend": "Frontend",
  "skills.tools": "Ferramentas",

  // projects
  "projects.eyebrow": "Projetos Selecionados",
  "projects.title": "Construindo com propósito.",
  "projects.desc":
    "Uma seleção de projetos que refletem minha mentalidade de engenharia, foco em backend e visão de produto.",
  "projects.status.dev": "Fase de deploy",
  "projects.status.mvp": "MVP",
  "projects.status.done": "Concluído",
  "projects.tcc": "Projeto de TCC",
  "projects.viewGithub": "GitHub",
  "projects.imageSoon": "Imagem do projeto em breve",
  "projects.highlights": "Destaques",
  "p1.h1": "Autenticação JWT",
  "p1.h2": "Google OAuth",
  "p1.h3": "Carrinho de Compras",
  "p1.h4": "Integração WhatsApp",
  "p1.h5": "Fullstack Moderno",
  "p2.h1": "Sistema de Vagas",
  "p2.h2": "Candidaturas",
  "p2.h3": "Segurança com JWT",
  "p2.h4": "Arquitetura em Camadas",
  "p2.h5": "API REST",
  "p3.h1": "Java 17",
  "p3.h2": "Spring Boot",
  "p3.h3": "Docker",
  "p3.h4": "Arquitetura em Camadas",
  "p3.h5": "Testes Automatizados",
  "p4.h1": "JWT",
  "p4.h2": "Refresh Token",
  "p4.h3": "Spring Security",
  "p4.h4": "Docker",
  "p4.h5": "MySQL",
  "p1.title": "Katallo",
  "p1.short": "Plataforma para pequenos comércios venderem pelo WhatsApp.",
  "p1.long":
    "Katallo é uma plataforma projetada para conectar catálogos online diretamente ao WhatsApp. O projeto combina uma experiência moderna no frontend com um backend robusto responsável por autenticação, gerenciamento de produtos, categorias e analytics.",
  "p2.title": "ClickJob",
  "p2.short": "Plataforma para freelancers focada em conectar talentos e oportunidades.",
  "p2.long":
    "Plataforma fullstack desenvolvida como TCC para conectar profissionais freelancers e contratantes. O sistema integra frontend moderno e tipado com backend robusto estruturado em arquitetura em camadas.",
  "p3.title": "API REST — Gerenciamento de Estoque",
  "p3.short": "API REST para gerenciamento de estoque e produtos.",
  "p3.long":
    "API REST desenvolvida em Java 17 e Spring Boot focada no gerenciamento eficiente de produtos e categorias, aplicando boas práticas de arquitetura backend, testes automatizados e containerização.",
  "p4.title": "API de Autenticação",
  "p4.short": "API de autenticação JWT com tokens de acesso e refresh.",
  "p4.long":
    "API de autenticação desenvolvida com Spring Boot implementando autenticação JWT com Access Token e Refresh Token, seguindo boas práticas modernas de segurança e arquitetura backend.",

  // contact
  "contact.eyebrow": "Contato",
  "contact.title": "Vamos construir algo incrível juntos.",
  "contact.desc":
    "Estou aberto para oportunidades de estágio, freelas e projetos desafiadores. Se você procura alguém comprometido, ambicioso e apaixonado por tecnologia, vamos conversar.",
  "contact.email": "Email",
  "contact.github": "GitHub",
  "contact.linkedin": "LinkedIn",
  "contact.whatsapp": "WhatsApp",
  "contact.cta": "Enviar Email",

  // footer
  "footer.main": "Desenvolvido & Criado por Gabriel Oliveira.",
  "footer.sub": "Focado em engenharia de software, sistemas escaláveis e produtos para o mundo real.",
  "footer.rights": "Todos os direitos reservados.",
}

const en: Dict = {
  "nav.subtitle": "Backend Developer",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  "loading.text": "Initializing experience",

  "hero.subtitle": "ES Student · Brazil",

  "hero.eyebrow": "Available for new opportunities",
  "hero.title": "Backend Developer",
  "hero.headline":
    "Transforming ideas into real solutions through software engineering.",
  "hero.sub":
    "Software Engineering student focused on modern backend, system architecture and scalable product development.",
  "hero.long":
    "I'm 18 years old and passionate about technology, software engineering, and building real-world solutions. Currently, I'm focusing my studies on backend development with Java and Spring Boot, while exploring modern frontend development to create complete, scalable, and well-structured applications. More than just writing code, I seek to understand business and how technology can generate real results.",
  "hero.cta.projects": "View Projects",
  "hero.cta.contact": "Get in Touch",
  "hero.cta.cv": "Download CV",
  "hero.badge.opentowork": "Open to Work",
  "hero.badge.freelance": "Available for Freelance",
  "hero.badge.products": "Building Real Products",
  "hero.badge.backend": "Backend Focused",
  "hero.badge.engineering": "Engineering Mindset",
  "hero.stat.projects": "Real Projects",
  "hero.stat.backend": "Backend Focused",
  "hero.stat.fullstack": "Full Stack Projects",
  "hero.stat.learning": "Always Learning",

  "hero.marquee.1": "Building scalable solutions.",
  "hero.marquee.2": "Engineering ideas into reality.",
  "hero.marquee.3": "Focused on real-world products.",
  "hero.marquee.4": "Thinking beyond code.",
  "hero.marquee.5": "Backend first. Product driven.",
  "hero.marquee.6": "Building with purpose.",
  "hero.marquee.7": "Learning. Building. Evolving.",
  "hero.marquee.8": "Creating technology with vision.",

  "about.eyebrow": "About Me",
  "about.title": "Engineering, product and vision.",
  "about.p1":
    "My journey in technology began driven by the desire to work with what I love and to add real value, and quickly transformed into a clear ambition: to build real solutions through software engineering.",
  "about.p2":
    "I am currently a Software Engineering student and I focus my studies mainly on the Java and Spring Boot ecosystem, developing backend applications, secure REST APIs, and scalable architectures. At the same time, I also explore frontend technologies such as React, Next.js, and TypeScript to understand end-to-end solution development.",
  "about.p3":
    "I have a strong interest in software architecture, well-structured systems, and building digital solutions that truly solve problems. I like to look beyond the code, understanding the product, scalability, and business vision as well.",
  "about.p4":
    "I constantly seek technical and professional growth, aiming to work on high-level projects, international opportunities and solutions that generate real impact.",
  "about.p5": "I believe technology goes far beyond tools: it is the ability to turn ideas into reality.",
  "about.quote": "Backend first and building with purpose.",
  "about.card.backend.title": "Backend Engineering",
  "about.card.backend.desc": "Secure, scalable and well-structured REST APIs with Java and Spring Boot.",
  "about.card.fullstack.title": "Full Stack Development",
  "about.card.fullstack.desc": "End-to-end products, from database to interface.",
  "about.card.architecture.title": "Software Architecture",
  "about.card.architecture.desc": "Layered, organized, sustainable systems ready to scale.",
  "about.card.product.title": "Product Vision",
  "about.card.product.desc": "Thinking beyond code: business, users and real impact.",

  "skills.eyebrow": "Technologies & Tools",
  "skills.title": "Modern stack to build real products.",
  "skills.desc": "Technologies I use to build modern, scalable applications focused on real solutions.",
  "skills.backend": "Backend",
  "skills.frontend": "Frontend",
  "skills.tools": "Tools",

  "projects.eyebrow": "Selected Work",
  "projects.title": "Building with purpose.",
  "projects.desc":
    "A selection of projects that reflect my engineering mindset, backend focus and product vision.",
  "projects.status.dev": "Final phase of deployment",
  "projects.status.mvp": "MVP",
  "projects.status.done": "Completed",
  "projects.tcc": "TCC Project",
  "projects.viewGithub": "GitHub",
  "projects.imageSoon": "Image of the project coming soon.",
  "projects.highlights": "Highlights",
  "p1.h1": "JWT Authentication",
  "p1.h2": "Google OAuth",
  "p1.h3": "Shopping Cart",
  "p1.h4": "WhatsApp Integration",
  "p1.h5": "Modern fullstack",
  "p2.h1": "Job system",
  "p2.h2": "Applications",
  "p2.h3": "JWT Security",
  "p2.h4": "Layered architecture",
  "p2.h5": "REST API",
  "p3.h1": "Java 17",
  "p3.h2": "Spring Boot",
  "p3.h3": "Docker",
  "p3.h4": "Layered arch.",
  "p3.h5": "Automated tests",
  "p4.h1": "JWT",
  "p4.h2": "Refresh Token",
  "p4.h3": "Spring Security",
  "p4.h4": "Docker",
  "p4.h5": "MySQL",

  "p1.title": "Katallo",
  "p1.short": "Plataforma para pequenos comércios venderem pelo WhatsApp.",
  "p1.long":
    "Katallo é uma plataforma projetada para conectar catálogos online diretamente ao WhatsApp. O projeto combina uma experiência moderna no frontend com um backend robusto responsável por autenticação, gerenciamento de produtos, categorias e analytics.",

  "p2.title": "ClickJob",
  "p2.short": "Freelancer platform focused on connecting talent and opportunities.",
  "p2.long":
    "Fullstack platform developed as a graduation project to connect freelancers and clients. The system integrates a modern, typed frontend with a robust backend structured in a layered architecture.",

  "p3.title": "REST API — Stock Management",
  "p3.short": "REST API for stock and product management.",
  "p3.long":
    "REST API built with Java 17 and Spring Boot, focused on efficient management of products and categories, applying best practices of backend architecture, automated testing and containerization.",

  "p4.title": "Authentication API",
  "p4.short": "JWT authentication API with access and refresh tokens.",
  "p4.long":
    "Authentication API developed with Spring Boot implementing JWT Authentication with Access and Refresh Tokens, following modern security and backend architecture best practices.",

  "contact.eyebrow": "Contact",
  "contact.title": "Let's build something incredible together.",
  "contact.desc":
    "I'm open to internship opportunities, freelance work and challenging projects. If you're looking for someone committed, ambitious and passionate about technology — let's talk.",
  "contact.email": "Email",
  "contact.github": "GitHub",
  "contact.linkedin": "LinkedIn",
  "contact.whatsapp": "WhatsApp",
  "contact.cta": "Send Email",

  "footer.main": "Designed & Built by Gabriel Oliveira.",
  "footer.sub": "Focused on backend engineering, scalable systems and real-world products.",
  "footer.rights": "All rights reserved.",
}

const dictionaries: Record<Language, Dict> = { pt, en }

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
  downloadCV: () => void
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("pt")

  React.useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Language)) || null
    if (saved === "pt" || saved === "en") setLanguageState(saved)
  }, [])

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") localStorage.setItem("lang", lang)
  }, [])

  const toggleLanguage = React.useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === "pt" ? "en" : "pt"
      if (typeof window !== "undefined") localStorage.setItem("lang", next)
      return next
    })
  }, [])

  const t = React.useCallback(
    (key: string) => {
      return dictionaries[language][key] ?? key
    },
    [language],
  )

  const downloadCV = React.useCallback(() => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a")
      link.href = "/cv-gabriel-oliveira.pdf"
      link.download = "cv-gabriel-oliveira.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, downloadCV }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}