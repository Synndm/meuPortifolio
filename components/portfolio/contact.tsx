"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react"

export function Contact() {
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
      id="contato"
      className="py-24 lg:py-32 px-6 lg:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm">05. E agora?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Vamos Conversar
            </h2>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Estou sempre aberto a novas oportunidades, projetos interessantes ou 
            apenas um bate-papo sobre tecnologia. Minha caixa de entrada esta 
            sempre aberta!
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              asChild
            >
              <a href="https://wa.me/5591982185014">
                <Send className="h-4 w-4 mr-2" />
                Whatsapp
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/Synndm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/0josielsilva1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:josielsillva7@gmail.com"
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
