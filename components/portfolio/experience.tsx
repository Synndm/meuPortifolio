"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"
import {
  Briefcase,
  GraduationCap,
  Code2,
  Server,
  Rocket,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import { Reveal, easeOut } from "@/components/portfolio/motion"

const timeline = [
  {
    icon: Briefcase,
    period: "2026 — Atual",
    title: "Desenvolvedor Full Stack",
    place: "Newt Tech · Prestador de Serviços PJ",
    items: [
      "Entreguei pelo menos 3 projetos web em produção, entre sistemas, websites e landing pages, dentro dos prazos e critérios de aceite.",
      "Criei e integrei pelo menos 3 APIs REST conectando sistemas a serviços externos, da interface ao back-end.",
      "Resolvi mais de 10 bugs e chamados de correção, otimizando performance e evoluindo soluções em produção.",
      "Construí interfaces responsivas e componentizadas, validadas em desktop, tablet e celular.",
    ],
  },
  {
    icon: GraduationCap,
    period: "Fev/2025 — Em andamento",
    title: "Desenvolvimento Full Stack Java",
    place: "EBAC · Escola Britânica de Artes Criativas e Tecnologia",
    items: [
      "Formação em front-end moderno e, agora, aprofundando o back-end com Java.",
    ],
  },
  {
    icon: GraduationCap,
    period: "Ago/2024 — Jul/2027 (previsão)",
    title: "Gestão da Tecnologia da Informação",
    place: "Uniasselvi · Graduação",
    items: [],
  },
]

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    items: [
      "React, Next.js e TypeScript",
      "HTML5 semântico e acessível",
      "Tailwind CSS, SASS e Bootstrap",
      "Componentização e responsividade",
    ],
  },
  {
    icon: Server,
    title: "Back-end (aprendendo)",
    items: [
      "APIs REST com Node.js e Express",
      "Integração com APIs de terceiros",
      "Primeiros passos com PostgreSQL",
      "Java em formação na EBAC",
    ],
  },
  {
    icon: Rocket,
    title: "Versionamento e Deploy",
    items: [
      "Git e GitHub no dia a dia",
      "Front-end publicado na Vercel",
      "Back-end publicado no Render",
      "Configuração de domínio próprio",
    ],
  },
  {
    icon: Sparkles,
    title: "Soft Skills",
    items: [
      "Levantamento de requisitos com o cliente",
      "Planejamento e entregas por etapas",
      "Resolução de problemas",
      "Comunicação clara e aprendizado contínuo",
    ],
  },
]

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="experiencia" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl font-bold">Experiência</h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </Reveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mb-20 pl-10 md:pl-14">
          {/* track + animated progress line */}
          <div className="absolute left-[15px] md:left-[23px] top-2 bottom-2 w-px bg-border" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[15px] md:left-[23px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-violet-400 via-fuchsia-400 to-purple-600"
          />

          <div className="space-y-10">
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.title}
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: easeOut }}
              >
                {/* dot */}
                <div className="absolute -left-10 md:-left-14 top-1 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#120b1f] border border-primary/40 flex items-center justify-center text-primary">
                  <entry.icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>

                <div className="group p-6 rounded-xl bg-card/90 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <span className="text-primary font-mono text-xs">{entry.period}</span>
                    {index === 0 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        atual
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {entry.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${entry.items.length > 0 ? "mb-4" : ""}`}>{entry.place}</p>

                  {entry.items.length > 0 && (
                    <ul className="space-y-2">
                      {entry.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: easeOut }}
              className="group p-6 rounded-xl bg-card/90 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-purple-900/30 transition-[border-color,box-shadow] duration-500"
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
                {exp.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
