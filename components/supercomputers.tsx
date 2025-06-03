import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Cpu, Network, BarChart3 } from "lucide-react"

export function Supercomputers() {
  const advantages = [
    {
      title: "Eficiencia de Recursos",
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      description: "Gestión optimizada de memoria y CPU para cargas masivas",
      details: [
        "Scheduler CFS optimizado para miles de cores",
        "NUMA awareness para arquitecturas multi-socket",
        "Memory management avanzado con huge pages",
        "CPU affinity y isolation para aplicaciones críticas",
      ],
    },
    {
      title: "Escalabilidad",
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      description: "Capacidad de escalar desde cientos hasta millones de cores",
      details: [
        "Soporte nativo para clusters de 100,000+ nodos",
        "Sistemas de archivos distribuidos (Lustre, GPFS)",
        "Gestión de recursos con SLURM/PBS",
        "Escalabilidad lineal en aplicaciones MPI",
      ],
    },
    {
      title: "Computación Paralela",
      icon: <Network className="h-8 w-8 text-purple-500" />,
      description: "Soporte nativo para paradigmas de computación paralela",
      details: [
        "MPI (Message Passing Interface) optimizado",
        "OpenMP para paralelización de memoria compartida",
        "CUDA y ROCm para computación en GPU",
        "InfiniBand y Omni-Path para redes de alta velocidad",
      ],
    },
    {
      title: "Herramientas Especializadas",
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      description: "Ecosistema completo de herramientas HPC",
      details: [
        "Compiladores optimizados (Intel, GCC, LLVM)",
        "Bibliotecas matemáticas (Intel MKL, OpenBLAS)",
        "Profilers y debuggers (Intel VTune, Allinea)",
        "Monitoreo y telemetría en tiempo real",
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
          Análisis de por qué el 100% de las supercomputadoras TOP500 utilizan GNU/Linux
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

      {/* Supercomputer showcase */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Las Supercomputadoras Más Poderosas del Mundo
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
              alt="Frontier supercomputer at Oak Ridge National Laboratory"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-blue-800">Frontier (ORNL)</h4>
            <p className="text-slate-600 text-sm">Primera supercomputadora exascale del mundo</p>
            <div className="mt-2 text-xs text-slate-500">1.102 ExaFLOPS • SUSE Linux</div>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
              alt="Fugaku supercomputer at RIKEN Japan"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-green-800">Fugaku (RIKEN)</h4>
            <p className="text-slate-600 text-sm">Líder en investigación COVID-19 y simulación molecular</p>
            <div className="mt-2 text-xs text-slate-500">442 PetaFLOPS • Red Hat Linux</div>
          </div>
        </div>

        {/* Linux dominance visualization */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-100 px-6 py-3 rounded-full">
            <span className="text-3xl font-bold text-green-600 mr-3">100%</span>
            <span className="text-green-800 font-semibold">de las TOP500 supercomputadoras usan Linux</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">TOP Supercomputadoras Mundiales (2024)</h3>
        <div className="grid gap-6">
          {topSupercomputers.map((supercomp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">{supercomp.name}</h4>
                  <p className="text-slate-600">{supercomp.country}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{supercomp.performance}</div>
                  <div className="text-sm text-slate-600">Rendimiento</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">{supercomp.os}</div>
                  <div className="text-sm text-slate-600">Sistema Operativo</div>
                </div>
                <div>
                  <p className="text-slate-700 text-sm">{supercomp.application}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Análisis Teórico: Dominio de Linux en HPC</h3>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-blue-800">Evolución Histórica</h4>
            <p className="text-slate-700 mb-4">
              Dongarra et al. (2003) documentan la transición de Unix propietario a Linux en HPC. En 1993, ninguna
              supercomputadora usaba Linux. Para 2017, el 100% del TOP500 ejecutaba Linux, representando la migración
              tecnológica más completa en la historia de la computación.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-slate-600">TOP500 usa Linux (2017-2024)</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded">
                <div className="text-3xl font-bold text-green-600">1.1+</div>
                <div className="text-sm text-slate-600">ExaFLOPS alcanzados</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded">
                <div className="text-3xl font-bold text-purple-600">7M+</div>
                <div className="text-sm text-slate-600">Cores en Frontier</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-green-800">Ventajas Técnicas Específicas</h4>
            <p className="text-slate-700 mb-4">
              Sterling et al. (2018) explican que Linux domina HPC por tres factores críticos: personalización del
              kernel, soporte nativo para hardware especializado, y ecosistema de herramientas de desarrollo científico.
            </p>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <strong className="text-green-800">Kernel Customization:</strong>
                <p className="text-slate-700">
                  Capacidad de modificar el scheduler, memory management y drivers para hardware específico como
                  InfiniBand y GPU clusters.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <strong className="text-blue-800">Hardware Support:</strong>
                <p className="text-slate-700">
                  Soporte nativo para arquitecturas ARM64, POWER9, y aceleradores como NVIDIA A100, AMD MI250X.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <strong className="text-purple-800">Software Stack:</strong>
                <p className="text-slate-700">
                  Ecosistema completo: compiladores (GCC, Intel), bibliotecas (MKL, FFTW), y runtime (OpenMPI,
                  MVAPICH2).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-purple-800">Casos de Estudio Específicos</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <strong className="text-blue-800">Frontier (ORNL):</strong>
                <p className="text-slate-700 mb-2">
                  Primera supercomputadora exascale utiliza SUSE Linux Enterprise Server optimizado para AMD EPYC +
                  Radeon Instinct. Kernel personalizado para NUMA de 4 sockets.
                </p>
                <em className="text-blue-600">Aplicación: Simulación de fusión nuclear y cambio climático</em>
              </div>
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <strong className="text-green-800">Fugaku (RIKEN):</strong>
                <p className="text-slate-700 mb-2">
                  Utiliza Red Hat Enterprise Linux modificado para ARM64 A64FX. Implementa Tofu interconnect D
                  personalizado en el kernel.
                </p>
                <em className="text-green-600">Aplicación: Investigación COVID-19 y drug discovery</em>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-orange-800">Impacto Económico y Científico</h4>
            <p className="text-slate-700 mb-4">
              Según Reed y Dongarra (2015), el ecosistema Linux en HPC ha generado un ahorro estimado de $50 billones en
              costos de licenciamiento y ha acelerado la investigación científica en áreas críticas como cambio
              climático, medicina personalizada y energía renovable.
            </p>
            <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
              <strong>Ejemplo de Impacto:</strong> Las simulaciones climáticas que informaron el IPCC AR6 (2021) se
              ejecutaron en supercomputadoras Linux, procesando petabytes de datos atmosféricos y oceánicos.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
