"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react"
import Image from "next/image"
import { motion, type Variants } from "motion/react"
import { easeOut } from "@/components/portfolio/motion"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Photo Section */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeOut }}
          >
            <div className="relative animate-float">
              <div className="absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.6)_35%,rgba(192,38,211,0.25)_50%,transparent_68%)] opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              {/* rotating ring */}
              <div className="absolute -inset-[3px] rounded-full overflow-hidden">
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,#a855f7_25%,#e879f9_40%,transparent_55%,transparent_100%)] animate-spin-slow" />
              </div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#0d0818]">
                {/* foto de perfil */}
                <Image
                  src="https://avatars.githubusercontent.com/u/183969058?v=4"
                  alt="Foto de perfil"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: easeOut }}
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-card/95 px-3 py-1.5 rounded-full border border-border"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full" />
              </span>
              <span className="text-xs text-muted-foreground">Disponível</span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex-1 space-y-8 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="space-y-4">
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30"
              >
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-primary text-sm font-medium">
                  Desenvolvedor Front-End
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
              >
                Josiel <span className="text-gradient">(Synndm)</span>
              </motion.h1>

              <motion.p variants={item} className="text-xl md:text-2xl text-muted-foreground">
                Criando interfaces{" "}
                <span className="text-primary font-medium">modernas</span> e{" "}
                <span className="text-primary font-medium">funcionais</span>
              </motion.p>
            </div>

            <motion.p
              variants={item}
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
            Aplicações responsivas, otimizadas e acessíveis, com foco em performance, organização de código e criação de soluções intuitivas para experiência ao usuário.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-shadow"
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="bg-transparent border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contato
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://github.com/Synndm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary hover:-translate-y-0.5 transition-all text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/0josielsilva1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary hover:-translate-y-0.5 transition-all text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToProjects}
        aria-label="Rolar para os projetos"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-primary/40 justify-center pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.span
          className="w-1 h-2 rounded-full bg-primary"
          animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>
    </section>
  )
}
