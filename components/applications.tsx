import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Shield, Microscope, Server, Database, Lock } from "lucide-react"

export function Applications() {
  const applications = [
    {
      title: "Desarrollo Web",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      description: "La gran mayoría de los sitios y aplicaciones en internet están alojados en servidores que corren Linux. Esto se debe a su conocida estabilidad, seguridad y eficiencia en el manejo de recursos, lo cual es vital cuando necesitas que un sitio esté disponible 24/7.",
      tools: [
        "Servidores Web: LAMP (Linux, Apache, MySQL y PHP), NGINX, HTTP Apache, Lighttpd, OpenLiteSpeed, H2O, entre otros.",
        "Lenguajes de programación: Python, JAVA, PHP, Ruby, JavaScript, HTML, CSS y SQL. También son comunes C, C++, y Go, tanto para el desarrollo web como para otros propósitos en Linux.",
        "Frameworks: Django (Python), Spring Boot (Java), Laravel (PHP), entre otros.",
      ]
    },
    {
      title: "Ciberseguridad",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      description: "Linux desempeña un papel crucial en la ciberseguridad, y esto es en gran parte por su notable flexibilidad, una seguridad de base bastante sólida (por cómo está hecho y ser de código abierto), y el acceso que te da a un montón de herramientas especializadas diseñadas justo para proteger sistemas, analizar amenazas o investigar incidentes.",
      tools: [
        "Evaluación de vulnerabilidad: OpenVAS, Nmap, Nessus, Nikto.",
        "Gestión de parches: KernelCare Enterprise.",
        "Herramientas de análisis de redes: Wireshark, tcpdump, netstat (o su sustituto moderno, ss), ufw (cortafuegos sin complicaciones).",
        "Detección y prevención de intrusiones: Snort, Suricata, OSSEC",
        "Detección y eliminación de malware: ClamAV, Chkrootkit.",
        "Herramientas de gestión del acceso: SELinux (Linux mejorado para la seguridad), AppArmor, OpenLDAP.",
        "Herramientas de cifrado: GnuPG (GNU Privacy Guard), OpenSSL, VeraCrypt.",
      ]
    },
 {
      title: "Ciencia y Educación",
      icon: <Microscope className="h-8 w-8 text-green-500" />, 
      description: "Investigación científica y educación avanzada",
      tools: [
        "Bioinformática: Linux es clave para analizar datos biológicos (ADN, proteínas) usando software especializado como BLAST o GATK.",
        "Análisis de Datos: Con Linux, se usan lenguajes como Python (con Pandas, NumPy) y R para procesar grandes volúmenes de datos, identificar patrones y realizar predicciones.",
        "Simulación Científica: Linux es fundamental para ejecutar software de simulación (ej. GROMACS para moléculas, OpenFOAM para fluidos) que modela fenómenos complejos, frecuentemente en supercomputadoras.",
        "Enseñanza de la Programación: Linux se usa en educación para enseñar a programar por ser gratuito y facilitar el acceso a herramientas de desarrollo (como compiladores GCC e intérpretes Python). Dispositivos como Raspberry Pi, con Linux, son populares para el aprendizaje."
      ],
      examples: [
        {
          company: "CERN",
          detail:
            "Gran Colisionador de Hadrones (LHC): El CERN utiliza Linux en prácticamente todos sus sistemas informáticos:\nSistema operativo estándar en sus supercomputadoras y centros de datos.\nLinux controla y procesa los datos de los experimentos del LHC, permitiendo gestionar terabytes de información de forma eficiente y segura."
        },
        {
          company: "NASA",
          detail:
            "La NASA usa Linux en múltiples misiones espaciales:\nRóveres en Marte (Curiosity y Perseverance) ejecutan sistemas operativos derivados de Linux.\nLinux es estándar en sus servidores para el análisis de datos científicos."
        }
      ]
    }
  ]

  return (
    <section id="aplicaciones" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Aplicaciones de Linux</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          En el mundo de la investigación científica y la educación, Linux se ha ganado un lugar destacado. Esto se debe a que es gratuito, lo que ya es una gran ventaja, pero también a su firme estabilidad operativa. Además, existe una enorme cantidad de herramientas científicas especializadas que funcionan muy bien en este entorno.
        </p>
      </div>

      <div className="space-y-8">
        {applications.map((app, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                {app.icon}
                <span>{app.title}</span>
              </CardTitle>
              <p className="text-slate-600">{app.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-800">Herramientas Principales</h4>
                  <ul className="space-y-2">
                    {app.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-start">
                        <Server className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-slate-700">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {app.examples && (
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-slate-800">Casos de Uso Reales</h4>
                    <div className="space-y-4">
                      {app.examples.map((example, idx) => (
                        <div key={idx} className="bg-slate-50 p-3 rounded-md border-l-4 border-l-green-500">
                          <h5 className="font-semibold text-green-800 flex items-center">
                            <Database className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {example.company}
                          </h5>
                          <p className="text-sm text-slate-700 mt-1">{example.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
