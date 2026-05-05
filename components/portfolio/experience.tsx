"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, GitBranch, Layers, Sparkles, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    items: [
      "HTML5 semântico e acessível",
      "CSS3 moderno com Flexbox/Grid",
      "JavaScript ES6+",
      "Frameworks como React",
    ],
  },
  {
    icon: GitBranch,
    title: "Controle de Versão",
    items: [
      "Git para versionamento",
      "GitHub para colaboração",
      "Commits organizados",
      "Branches e Pull Requests",
    ],
  },
  {
    icon: Layers,
    title: "Boas Práticas",
    items: [
      "Código limpo e legível",
      "Componentes reutilizáveis",
      "Responsividade mobile-first",
      "Performance otimizada",
    ],
  },
  {
    icon: Sparkles,
    title: "Soft Skills",
    items: [
      "Aprendizado contínuo",
      "Resolução de problemas",
      "Atenção aos detalhes",
      "Comunicação clara",
    ],
  },
]

export function Experience() {
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
      id="experiencia"
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
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl font-bold">Experiencia</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold pt-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                </div>
                <ul className="space-y-2 ml-1">
                  {exp.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
