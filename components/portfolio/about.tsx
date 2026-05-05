"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Zap, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Escrevo código organizado, legível e de fácil manutenção.",
  },
  {
    icon: Palette,
    title: "Design Moderno",
    description: "Interfaces atraentes com atenção aos detalhes visuais.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Aplicações rápidas e otimizadas para melhor experiência.",
  },
  {
    icon: Users,
    title: "Acessibilidade",
    description: "Produtos acessíveis para todos os usuários.",
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-24 lg:py-32 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl font-bold">Sobre Mim</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
                Transformando ideias em{" "}
                <span className="text-primary">experiências digitais</span>
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou um desenvolvedor front-end apaixonado por criar interfaces
                  que não apenas parecem bonitas, mas que também resolvem problemas
                  reais dos usuários.
                </p>
                <p>
                  Minha jornada na programação começou com a curiosidade de entender
                  como os sites funcionam. Hoje, com mais de{" "}
                  <span className="text-primary font-medium">20 projetos desenvolvidos</span>,
                  foco em escrever código limpo, acessível e performático.
                </p>
                <p>
                  Acredito que cada linha de código deve ter um propósito e contribuir
                  para uma experiência de usuário excepcional. Estou sempre aprendendo
                  novas tecnologias e buscando evoluir constantemente.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
