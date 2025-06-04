import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Cpu, Network, BarChart3 } from "lucide-react"

export function Supercomputers() {
  const advantages = [
    {
      title: "Eficiencia de Recursos",
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      description: "Linux permite una gestión optimizada de recursos como la memoria y la CPU, esenciales en entornos HPC. Características como el uso de 'huge pages' para una mejor gestión de la memoria y la afinidad de CPU para asignar procesos a núcleos específicos mejoran significativamente el rendimiento.",
      details: [
      ],
    },
    {
      title: "Escalabilidad",
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      description: "La arquitectura modular de Linux facilita su escalabilidad desde sistemas pequeños hasta supercomputadoras con miles de nodos. Herramientas como SLURM permiten una gestión eficiente de trabajos en entornos con una gran cantidad de nodos.",
      details: [
      ],
    },
    {
      title: "Computación Paralela",
      icon: <Network className="h-8 w-8 text-purple-500" />,
      description: "Linux ofrece soporte nativo para paradigmas de computación paralela, esenciales en HPC. Bibliotecas como MPI y OpenMP permiten la ejecución eficiente de tareas en múltiples núcleos y nodos.",
      details: [
      ],
    },
    {
      title: "Herramientas Especializadas",
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      description: "El ecosistema de Linux incluye una amplia gama de herramientas y bibliotecas optimizadas para HPC, como compiladores especializados y bibliotecas matemáticas de alto rendimiento.",
      details: [
      ],
    },
  ]

  const topSupercomputers = [
    {
      name: "Frontier (ORNL)",
      country: "Estados Unidos",
      performance: "1.102 ExaFLOPS",
      os: "SUSE Linux Enterprise Server",
      application: "Investigación energética y climática",
    },
    {
      name: "Fugaku (RIKEN)",
      country: "Japón",
      performance: "442 PetaFLOPS",
      os: "Red Hat Enterprise Linux",
      application: "Simulación molecular y COVID-19",
    },
    {
      name: "LUMI (CSC)",
      country: "Finlandia",
      performance: "379 PetaFLOPS",
      os: "SUSE Linux Enterprise Server",
      application: "Investigación europea multidisciplinaria",
    },
    {
      name: "Leonardo (CINECA)",
      country: "Italia",
      performance: "250 PetaFLOPS",
      os: "CentOS Linux",
      application: "Simulación científica e IA",
    },
  ]

  return (
    <section id="supercomputadoras" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Linux en Supercomputadoras</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Las supercomputadoras utilizan en su inmensa mayoría sistemas operativos basados en GNU/Linux. De hecho, según el ranking TOP500, las 500 supercomputadoras más potentes del mundo utilizan Linux o alguna de sus variantes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {advantages.map((advantage, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                {advantage.icon}
                <span className="text-xl">{advantage.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">{advantage.description}</p>
              <ul className="space-y-2">
                {advantage.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      
    </section>
  )
}
