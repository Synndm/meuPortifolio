"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Profile Photo Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary via-primary/50 to-transparent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/50">
              {/* foto de perfil */}
              <Image
                src="https://avatars.githubusercontent.com/u/183969058?v=4"
                alt="Foto de perfil"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-muted-foreground">Ativo</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-primary text-sm font-medium">
                  Desenvolvedor Front-End
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Josiel (Synndm)
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Criando interfaces{" "}
                <span className="text-primary font-medium">modernas</span> e{" "}
                <span className="text-primary font-medium">funcionais</span>
              </p>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Aplicações responsivas, otimizadas e acessíveis, com foco em performance, organização de código e criação de soluções intuitivas para experiência ao usuário.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://github.com/Synndm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/0josielsilva1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
