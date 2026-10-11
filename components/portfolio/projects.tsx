"use client"

import { useState, type MouseEvent } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Folder, Maximize2 } from "lucide-react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import { Reveal, easeOut } from "@/components/portfolio/motion"

type Project = {
  title: string
  description: string
  image?: string
  problem: string
  technologies: string[]
  github: string
  demo?: string
  featured: boolean
}

const projects: Project[] = [
  {
    title: "Pokédex",
    description:
      "Aplicação para explorar Pokémon consumindo a PokéAPI: busca por nome ou número, modal de detalhes com status base e habilidades, visualizador de sprites (incluindo shiny) e anotações por Pokémon salvas em uma API própria.",
    image: "/projects/pokedex.webp",
    problem:
      "Unir consumo de API pública e um backend próprio em uma interface responsiva e acessível por teclado.",
    technologies: ["React 19", "TypeScript", "Vite", "SCSS (BEM)", "PokéAPI"],
    github: "https://github.com/Synndm/Pokedex-test",
    demo: "https://busca-pokemons.vercel.app/",
    featured: true,
  },
  {
    title: "Ristorante Serliana",
    description:
      "Site de um restaurante italiano inspirado na estética renascentista, desenvolvido em parceria com a designer Bruna Brum. Tipografia clássica, cardápio, galeria, depoimentos e reserva de mesa em uma navegação elegante.",
    image: "/projects/serliana.webp",
    problem:
      "Traduzir uma identidade visual temática em uma experiência digital moderna, fiel ao design e responsiva.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Synndm/restaurante-interface",
    demo: "https://restaurante-serliana.vercel.app/",
    featured: true,
  },
  {
    title: "EBAC Tech Talks",
    description:
      "Landing page para um evento de tecnologia, com contagem regressiva em tempo real, trilhas de conteúdo, animações ao rolar a página e imagens otimizadas no build.",
    image: "/projects/tech-talks.webp",
    problem:
      "Comunicar as informações do evento de forma clara e incentivar a inscrição com uma página rápida e envolvente.",
    technologies: ["HTML5", "SASS", "JavaScript", "Parcel", "AOS"],
    github: "https://github.com/Synndm/ebac_tech_talks",
    demo: "https://ebac-tech-talks-henna-one.vercel.app/",
    featured: true,
  },
  {
    title: "Landing Page de Aniversário",
    description:
      "Landing page para divulgação de aniversário com temática noturna, contagem regressiva em tempo real, confetes animados e seções de música, drinks e convidados.",
    image: "/projects/aniversario.webp",
    problem:
      "Tornar celebrações mais marcantes através de uma experiência digital personalizada, moderna e visualmente atrativa.",
    technologies: ["HTML5", "SCSS", "JavaScript", "Parcel", "AOS"],
    github: "https://github.com/Synndm/aniversario_synndm",
    demo: "https://aniversario-synndm.vercel.app/",
    featured: true,
  },
  {
    title: "Pokédex Notes API",
    description:
      "API REST que guarda as anotações da Pokédex, com CRUD completo, validação de dados e tratamento de erros, isolando o banco de dados do front-end.",
    problem: "Centralizar validação e proteger as credenciais do banco fora do navegador.",
    technologies: ["Node.js", "Express", "TypeScript", "REST"],
    github: "https://github.com/Synndm/pokedex-notes-api",
    featured: false,
  },
  {
    title: "Buscador de Endereço",
    description:
      "Formulário de pedido que preenche o endereço automaticamente a partir do CEP usando a API ViaCEP, com visual em glassmorphism.",
    image: "/projects/buscador-endereco.webp",
    problem: "Facilitar a consulta de endereços com uma interface simples e eficiente.",
    technologies: ["HTML5", "SCSS", "jQuery", "ViaCEP"],
    github: "https://github.com/Synndm/buscar-endereco",
    demo: "https://synndm.github.io/buscar-endereco/",
    featured: false,
  },
  {
    title: "Clone Disney+",
    description:
      "Recriação da interface da Disney+ com foco em responsividade, fidelidade visual e organização do código com pré-processadores.",
    image: "/clonedisney.png",
    problem: "Praticar interfaces escaláveis recriando uma plataforma de streaming conhecida.",
    technologies: ["HTML5", "SASS", "Gulp", "JavaScript"],
    github: "https://github.com/Synndm/clone-disney-plus",
    featured: false,
  },
  {
    title: "I'm Batman",
    description:
      "Landing page temática do Batman com hero em tela cheia, atmosfera escura e navegação simples.",
    image: "/projects/batman.webp",
    problem: "Explorar composição visual e hierarquia tipográfica em uma página de impacto.",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/Synndm/bat_page_exercicio",
    demo: "https://bat-page-exercicio.vercel.app/",
    featured: false,
  },
  {
    title: "Calculadora Vue",
    description:
      "Calculadora aritmética reativa construída com a Composition API do Vue 3, com resultado calculado em tempo real.",
    problem: "Praticar reatividade e estado computado no Vue.",
    technologies: ["Vue 3", "Vite", "Composition API"],
    github: "https://github.com/Synndm/calculadora-vue",
    featured: false,
  },
  {
    title: "Lista de Tarefas Vue",
    description:
      "Aplicação de tarefas desenvolvida com Vue 3 e Bootstrap para organizar o dia a dia.",
    problem: "Praticar componentes e manipulação de listas no Vue.",
    technologies: ["Vue 3", "Vite", "Bootstrap"],
    github: "https://github.com/Synndm/todo-vue",
    featured: false,
  },
]

function hostname(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "")
}

/** Screenshot inside a browser window with 3D tilt and a cursor spotlight. */
function BrowserPreview({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), { stiffness: 160, damping: 18 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), { stiffness: 160, damping: 18 })
  const glowX = useTransform(x, (v) => `${v * 100}%`)
  const glowY = useTransform(y, (v) => `${v * 100}%`)
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${glowX} ${glowY}, rgba(192, 132, 252, 0.22), transparent 55%)`

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      {/* glow behind the frame */}
      <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.35)_0%,rgba(192,38,211,0.12)_45%,transparent_70%)] opacity-60 group-hover/card:opacity-100 transition-opacity duration-500" />

      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-xl overflow-hidden border border-primary/20 bg-[#120b1f] shadow-2xl shadow-purple-950/60"
      >
        {/* browser bar */}
        <div className="flex items-center gap-3 px-4 h-9 bg-[#1a1029] border-b border-primary/15">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 max-w-xs mx-auto h-5 rounded-md bg-black/30 text-[10px] text-muted-foreground font-mono flex items-center justify-center truncate px-2">
            {project.demo ? hostname(project.demo) : hostname(project.github)}
          </div>
          <div className="w-10" />
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="group/img relative block w-full aspect-video overflow-hidden cursor-zoom-in"
          aria-label={`Ampliar imagem do projeto ${project.title}`}
        >
          <img
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0818]/70 via-transparent to-transparent opacity-80" />
          <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-white/90 opacity-0 translate-y-2 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-300">
            <Maximize2 className="h-3 w-3" />
            Ampliar
          </span>
        </button>
      </motion.div>
    </div>
  )
}

function ProjectLinks({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <Button size="sm" variant="outline" className="bg-transparent border-primary/40 hover:bg-primary/10 hover:border-primary" asChild>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 mr-2" />
          Código
        </a>
      </Button>
      {project.demo && (
        <Button size="sm" className="shadow-lg shadow-purple-600/25" asChild>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visitar
          </a>
        </Button>
      )}
    </div>
  )
}

function FeaturedProject({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  const isEven = index % 2 === 0

  return (
    <div className="group/card relative grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
      {/* Project Image/Preview */}
      <motion.div
        className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0, x: isEven ? -60 : 60, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: easeOut }}
      >
        <BrowserPreview project={project} onOpen={onOpen} />
      </motion.div>

      {/* Project Info */}
      <motion.div
        className={`lg:col-span-5 ${isEven ? "lg:order-2 lg:text-right" : "lg:order-1"}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
      >
        <div className="space-y-4">
          <p className="text-primary font-mono text-sm">
            Projeto em Destaque · {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold group-hover/card:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <div
            className={`bg-card/95 p-6 rounded-xl border border-border shadow-xl shadow-black/30 ${isEven ? "lg:-ml-12" : "lg:-mr-12"} relative z-10 transition-colors duration-300 group-hover/card:border-primary/40`}
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
            <p className="text-primary text-xs mt-4 font-medium">
              Problema: {project.problem}
            </p>
          </div>

          <div className={`flex flex-wrap gap-2 ${isEven ? "lg:justify-end" : ""}`}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-primary/90 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <ProjectLinks project={project} className={isEven ? "lg:justify-end" : ""} />
        </div>
      </motion.div>
    </div>
  )
}

function OtherProject({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: easeOut }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col bg-card/90 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 overflow-hidden hover:shadow-2xl hover:shadow-purple-900/40"
    >
      {project.image ? (
        <button
          type="button"
          onClick={onOpen}
          className="relative aspect-[16/9] overflow-hidden cursor-zoom-in"
          aria-label={`Ampliar imagem do projeto ${project.title}`}
        >
          <img
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        </button>
      ) : (
        <div className="relative aspect-[16/9] overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900/40 via-transparent to-fuchsia-900/20">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#c084fc_1px,transparent_1px)] [background-size:16px_16px]" />
          <Folder className="relative h-14 w-14 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 pt-2">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <div className="flex gap-3 pt-1 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Código do projeto ${project.title}`}
            >
              <Github className="h-5 w-5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Visitar o projeto ${project.title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [preview, setPreview] = useState<Project | null>(null)

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projetos" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl font-bold">Projetos</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-xs" />
        </Reveal>

        {/* Featured Projects */}
        <div className="space-y-28 mb-28">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setPreview(project)}
            />
          ))}
        </div>

        {/* Other Projects */}
        <Reveal className="text-center mb-12">
          <h3 className="text-xl font-semibold">Outros Projetos</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Estudos e experimentos com diferentes tecnologias
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <OtherProject
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setPreview(project)}
            />
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <Button variant="outline" className="bg-transparent border-primary/40 hover:bg-primary/10 hover:border-primary" asChild>
            <a href="https://github.com/Synndm?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Ver todos no GitHub
            </a>
          </Button>
        </Reveal>
      </div>

      {/* Lightbox */}
      <Dialog open={preview !== null} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="sm:max-w-5xl p-0 overflow-hidden bg-[#120b1f] border-primary/30 gap-0">
          {preview && (
            <>
              <img
                src={preview.image}
                alt={`Captura de tela do projeto ${preview.title}`}
                className="w-full h-auto max-h-[75vh] object-contain bg-black"
              />
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <DialogTitle>{preview.title}</DialogTitle>
                  <DialogDescription className="mt-1">
                    {preview.technologies.join(" · ")}
                  </DialogDescription>
                </div>
                <ProjectLinks project={preview} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
