"use client"

import { useState, type ComponentType, type CSSProperties } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Coffee, Webhook } from "lucide-react"
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siVuedotjs,
  siTailwindcss,
  siSass,
  siBootstrap,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siGit,
  siGithub,
  siVite,
  siVercel,
  siRender,
  type SimpleIcon,
} from "simple-icons"
import { Reveal, easeOut } from "@/components/portfolio/motion"

type Category = "Front-end" | "Back-end & Dados" | "Ferramentas & Deploy"

type Technology = {
  name: string
  category: Category
  /** Brand color shown on hover */
  color: string
  /** Self-assessed proficiency, 0–100 */
  level: number
  icon: SimpleIcon | ComponentType<{ className?: string }>
  note?: string
}

const categories: ("Todas" | Category)[] = [
  "Todas",
  "Front-end",
  "Back-end & Dados",
  "Ferramentas & Deploy",
]

// Brands whose official color is black would vanish on the dark background.
const brand = (icon: SimpleIcon) => (icon.hex === "000000" || icon.hex === "181717" ? "#ffffff" : `#${icon.hex}`)

const technologies: Technology[] = [
  { name: "HTML5", level: 90, category: "Front-end", icon: siHtml5, color: brand(siHtml5) },
  { name: "CSS3", level: 85, category: "Front-end", icon: siCss, color: "#2965f1" },
  { name: "JavaScript", level: 80, category: "Front-end", icon: siJavascript, color: brand(siJavascript) },
  { name: "TypeScript", level: 65, category: "Front-end", icon: siTypescript, color: brand(siTypescript) },
  { name: "React", level: 70, category: "Front-end", icon: siReact, color: brand(siReact) },
  { name: "Next.js", level: 60, category: "Front-end", icon: siNextdotjs, color: brand(siNextdotjs) },
  { name: "Vue.js", level: 50, category: "Front-end", icon: siVuedotjs, color: brand(siVuedotjs) },
  { name: "Tailwind CSS", level: 75, category: "Front-end", icon: siTailwindcss, color: brand(siTailwindcss) },
  { name: "Sass", level: 75, category: "Front-end", icon: siSass, color: brand(siSass) },
  { name: "Bootstrap", level: 70, category: "Front-end", icon: siBootstrap, color: "#a07ae0" },
  { name: "Node.js", level: 35, category: "Back-end & Dados", icon: siNodedotjs, color: brand(siNodedotjs) },
  { name: "Express", level: 30, category: "Back-end & Dados", icon: siExpress, color: brand(siExpress) },
  { name: "PostgreSQL", level: 20, category: "Back-end & Dados", icon: siPostgresql, color: "#5b8def" },
  { name: "APIs REST", level: 40, category: "Back-end & Dados", icon: Webhook, color: "#c084fc" },
  { name: "Java", level: 20, category: "Back-end & Dados", icon: Coffee, color: "#f89820", note: "em formação" },
  { name: "Git", level: 85, category: "Ferramentas & Deploy", icon: siGit, color: brand(siGit) },
  { name: "GitHub", level: 85, category: "Ferramentas & Deploy", icon: siGithub, color: brand(siGithub) },
  { name: "Vite", level: 65, category: "Ferramentas & Deploy", icon: siVite, color: "#8b8dff" },
  { name: "Vercel", level: 70, category: "Ferramentas & Deploy", icon: siVercel, color: brand(siVercel) },
  { name: "Render", level: 45, category: "Ferramentas & Deploy", icon: siRender, color: brand(siRender) },
]

function TechIcon({ icon }: { icon: Technology["icon"] }) {
  if ("path" in icon) {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d={icon.path} />
      </svg>
    )
  }
  const Icon = icon
  return <Icon className="h-7 w-7" />
}

export function Technologies() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todas")

  const visible =
    active === "Todas" ? technologies : technologies.filter((t) => t.category === active)

  return (
    <section
      id="tecnologias"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl font-bold">Tecnologias</h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <Reveal className="space-y-6 lg:sticky lg:top-28">
            <h3 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
              Ferramentas que uso{" "}
              <span className="text-primary">diariamente</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Meu foco é o front-end: construo interfaces com React, Next.js e
              TypeScript e publico na Vercel. Agora estou dando os primeiros
              passos no back-end com Node.js, PostgreSQL e Java, e sigo
              aprendendo e expandindo meu conhecimento técnico.
            </p>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 pt-2" role="tablist" aria-label="Filtrar tecnologias">
              {categories.map((category) => {
                const isActive = active === category
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(category)}
                    className={`relative px-4 py-1.5 rounded-full text-sm border transition-colors duration-300 ${
                      isActive
                        ? "text-primary-foreground border-transparent"
                        : "text-muted-foreground border-border hover:text-foreground hover:border-primary/50"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tech-filter"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{category}</span>
                  </button>
                )
              })}
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              As barras indicam meu nível atual em cada ferramenta.
            </p>
          </Reveal>

          {/* Skills Grid */}
          <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 gap-3 content-start lg:min-h-[37rem]">
            <AnimatePresence mode="popLayout">
              {visible.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (index % 8) * 0.04, ease: easeOut }}
                  style={{ "--brand": tech.color } as CSSProperties}
                  className="group relative p-4 rounded-xl bg-card/90 border border-border hover:border-[color:var(--brand)]/60 hover:-translate-y-1 transition-[border-color,translate,box-shadow] duration-300 hover:shadow-[0_8px_30px_-12px_var(--brand)]"
                >
                  <div className="flex flex-col items-center text-center gap-2.5">
                    <div className="text-muted-foreground group-hover:text-[color:var(--brand)] transition-colors duration-300">
                      <TechIcon icon={tech.icon} />
                    </div>
                    <span className="font-medium text-xs sm:text-sm leading-tight">
                      {tech.name}
                    </span>
                    {tech.note && (
                      <span className="text-[10px] font-mono text-primary -mt-1">{tech.note}</span>
                    )}
                    {/* Skill level bar */}
                    <div
                      className="w-full h-1 bg-secondary rounded-full overflow-hidden mt-1"
                      role="meter"
                      aria-label={`Nível em ${tech.name}`}
                      aria-valuenow={tech.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (index % 8) * 0.05, ease: easeOut }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
