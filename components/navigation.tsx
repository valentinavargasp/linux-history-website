"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  const sections = [
    { id: "historia", label: "Historia" },
    { id: "ventajas", label: "Ventajas" },
    { id: "aplicaciones", label: "Aplicaciones" },
    { id: "ia", label: "IA" },
    { id: "distribuciones", label: "Distribuciones" },
    { id: "supercomputadoras", label: "Supercomputadoras" },
    { id: "conclusion", label: "Conclusión" },
    { id: "bibliografia", label: "Bibliografía" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Update active section
      const currentPos = window.scrollY + 100
      const sectionElements = sections.map((section) => ({
        id: section.id,
        offset: document.getElementById(section.id)?.offsetTop || 0,
      }))

      // Sort by closest to current position
      const currentSection = sectionElements
        .filter((section) => section.offset <= currentPos)
        .sort((a, b) => b.offset - a.offset)[0]

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto py-4 space-x-6 justify-center">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`whitespace-nowrap px-3 py-2 rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-100 text-blue-800 font-medium"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}
