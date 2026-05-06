"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "Buscador de Endereço",
    description:
      "Aplicação desenvolvida para busca automática de endereços utilizando a API ViaCEP, permitindo consultar informações completas a partir do CEP de forma rápida e intuitiva.",
    image:
      "https://github.com/Synndm/buscar-endereco/blob/main/preview.png?raw=true",
    problem:
      "Facilitar a consulta de endereços através de uma interface simples, responsiva e eficiente.",
    technologies: ["Html5", "SCSS", "JQuery", "API ViaCEP"],
    github: "https://github.com/Synndm/buscar-endereco",
    demo: "https://synndm.github.io/buscar-endereco/",
    featured: true,
  },
  {
    title: "Restaurante Serliana",
    description:
      "Aplicação web inspirada na arquitetura e estética da era renascentista, desenvolvida para representar digitalmente um restaurante temático através de uma interface moderna, responsiva e visualmente imersiva. O projeto combina identidade clássica, experiência do usuário e apresentação elegante dos produtos.",
    image:
      "./restauranteserliana.png",
    problem:
      "Unir identidade visual temática e experiência digital moderna para tornar a navegação do cardápio mais atrativa e imersiva para os usuários.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Synndm/restaurante-interface",
    demo: "https://restaurante-serliana.vercel.app/",
    featured: true,
  },
  {
    title: "Landing Page de Aniversário",
    description:
      "Landing page desenvolvida para divulgação de aniversário com temática noturna/cyberpunk, com contagem regressiva em tempo real, animações e design responsivo.",
    image:
      "./landingpageaniversario.png",
    problem:
      "Tornar celebrações mais marcantes através de uma experiência digital personalizada, moderna e visualmente atrativa.",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    github: "https://github.com/Synndm/aniversario_synndm",
    demo: "aniversario-synndm.vercel.app",
    featured: true,
  },
  {
    title: "Sorteador de Números",
    description:
      "Plataforma interativa de perguntas e respostas com feedback instantâneo e pontuação.",
    image:
      "https://example.com",
    problem: "Tornar o aprendizado mais engajante através da gamificação.",
    technologies: ["HTML5","Grunt","LESS", "JavaScript"],
    github: "https://github.com/Synndm/sorteador_grunt",
    demo: "https://sorteador-grunt-gamma-vert.vercel.app/",
    featured: false,
  },
  {
    title: "Clone Disney+",
    description:
      "Clone da interface da Disney+ desenvolvido com foco em responsividade, fidelidade visual e experiência do usuário.",
    image:
      "./clonedisney.png",
    problem: "Explorar o desenvolvimento de interfaces modernas e escaláveis através da recriação de uma plataforma de streaming amplamente utilizada.",
    technologies: ["HTML5", "CSS3","Gulp","SASS", "JavaScript"],
    github: "https://github.com/Synndm/clone-disney-plus",
    demo: "https://clone-disney-plus-7vv6-2e98vdjsm-synndms-projects.vercel.app/",
    featured: false,
  },
  {
    title: "Galeria de Fotos",
    description:
      "Aplicação para adicionar imagens dinamicamente através de URLs, permitindo atualização em tempo real da galeria de forma simples e intuitiva.",
    image:
      "https://example.com",
    problem: "Permitir a adição dinâmica de imagens na galeria através de URLs de forma simples e interativa.",
    technologies: ["JQuery", "CSS3", "HTML5"],
    github: "https://github.com/Synndm/jquery-galeria-fotos",
    demo: " https://syn-jquery-galeria-fotos.vercel.app/",
    featured: false,
  },
]

function FeaturedProject({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0]
  index: number
  isVisible: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`relative grid lg:grid-cols-12 gap-4 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Project Image/Preview */}
      <div
        className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="relative group aspect-video rounded-xl overflow-hidden bg-secondary border border-border">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold text-primary/10">
              
            </span>
          </div>
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            <Button size="sm" variant="secondary" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Código
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visitar
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div
        className={`lg:col-span-5 ${isEven ? "lg:order-2 lg:text-right" : "lg:order-1"}`}
      >
        <div className="space-y-4">
          <p className="text-primary font-mono text-sm">Projeto em Destaque</p>
          <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>

          <div className={`bg-card p-6 rounded-xl border border-border shadow-xl ${isEven ? "lg:-ml-12" : "lg:-mr-12"} relative z-10`}>
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
                className="text-xs font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className={`flex gap-4 ${isEven ? "lg:justify-end" : ""}`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function OtherProject({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <Folder className="h-10 w-10 text-primary" />
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>

      <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h4>
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
  )
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="py-24 lg:py-32 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl font-bold">Projetos</h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Other Projects */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h3 className="text-xl font-semibold">Outros Projetos</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <OtherProject
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
