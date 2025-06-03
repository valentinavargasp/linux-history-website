import { Header } from "@/components/header"
import { Timeline } from "@/components/timeline"
import { Advantages } from "@/components/advantages"
import { Applications } from "@/components/applications"
import { AISection } from "@/components/ai-section"
import { Distributions } from "@/components/distributions"
import { Supercomputers } from "@/components/supercomputers"
import { Conclusion } from "@/components/conclusion"
import { Bibliography } from "@/components/bibliography"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <Timeline />
        <Advantages />
        <Applications />
        <AISection />
        <Distributions />
        <Supercomputers />
        <Conclusion />
        <Bibliography />
      </main>
      <footer className="bg-slate-900 text-white py-6 text-center">
        <p className="text-sm">© 2025- Historia de Linux - Sistemas Operativos 2</p>
        <p className="text-sm">Ana Valentina Vargas. Ludmila Mansilla. Julieta Landra</p>
      </footer>
    </div>
  )
}
