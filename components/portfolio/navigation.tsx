"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Sobre", href: "#sobre", number: "01" },
  { name: "Projetos", href: "#projetos", number: "02" },
  { name: "Tecnologias", href: "#tecnologias", number: "03" },
  { name: "Experiência", href: "#experiencia", number: "04" },
  { name: "Contato", href: "#contato", number: "05" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-lg shadow-background/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold group"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <span className="text-primary">{"<"}</span>
          <span className="text-foreground group-hover:text-primary transition-colors">Dev</span>
          <span className="text-primary">{" />"}</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50 group"
              >
                <span className="text-primary font-mono text-xs mr-1">{item.number}.</span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume Button - Desktop */}
        <Button
          variant="outline"
          size="sm"
          className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a href="/curriculo_josiel_ti_ats.pdf" target="_blank" rel="noopener noreferrer">
            Ver currículo
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <ul className="space-y-6 text-center">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="block text-2xl text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  <span className="text-primary font-mono text-sm block mb-1">
                    {item.number}.
                  </span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
              Currículo
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
