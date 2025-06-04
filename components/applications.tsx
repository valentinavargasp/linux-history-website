import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Shield, Microscope, Server, Database, Lock } from "lucide-react"

export function Applications() {
  const applications = [
    {
      title: "Desarrollo Web",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      description: "Plataforma ideal para desarrollo web moderno",
      tools: [
        "LAMP/LEMP Stack (Linux, Apache/Nginx, MySQL, PHP)",
        "Node.js y frameworks como Express, Fastify",
        "Python con Django, Flask, FastAPI",
        "Ruby on Rails y Sinatra",
        "Contenedores Docker y Kubernetes",
      ],
      examples: [
        {
          company: "Netflix",
          detail:
            "Utiliza una infraestructura basada en Linux para servir contenido a más de 230 millones de usuarios. Su plataforma de microservicios ejecuta más de 700 servicios en Amazon EC2 con Linux, procesando 2 trillones de eventos diarios con Kafka en Linux.",
        },
        {
          company: "Facebook",
          detail:
            "Desarrolló HHVM (HipHop Virtual Machine) específicamente para Linux, mejorando el rendimiento de PHP en un 500%. Su infraestructura de más de 100,000 servidores Linux maneja 3.5 billones de usuarios activos mensuales.",
        },
        {
          company: "Google Cloud Run",
          detail:
            "Ejecuta contenedores sin estado en Linux, escalando automáticamente de cero a miles de instancias en segundos. Utiliza gVisor, un sandbox de aplicaciones para Linux que proporciona aislamiento de seguridad adicional.",
        },
      ],
    },
    {
      title: "Ciberseguridad",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      description: "Herramientas avanzadas para seguridad informática",
      tools: [
        "Kali Linux con 600+ herramientas de pentesting",
        "Wireshark para análisis de tráfico de red",
        "Metasploit Framework para pruebas de penetración",
        "OSSEC/Wazuh para detección de intrusiones",
        "ELK Stack para análisis de logs",
      ],
      examples: [
        {
          company: "NSA",
          detail:
            "Desarrolló SELinux (Security-Enhanced Linux) para implementar control de acceso obligatorio. Este sistema permite políticas de seguridad granulares que limitan el daño potencial de aplicaciones comprometidas. La NSA utiliza SELinux en sus sistemas clasificados para compartimentar información sensible.",
        },
        {
          company: "CERT Teams",
          detail:
            "Los equipos de respuesta a incidentes utilizan SIFT Workstation, una distribución Linux forense que incluye herramientas como Autopsy, Volatility y The Sleuth Kit. Durante la investigación del ataque SolarWinds en 2020, estas herramientas permitieron analizar memoria RAM y recuperar artefactos de malware que no eran detectables con herramientas comerciales.",
        },
        {
          company: "Fortune 500",
          detail:
            "El 78% de las empresas Fortune 500 utilizan sistemas SIEM basados en Linux como Splunk o ELK Stack. JP Morgan Chase procesa más de 150TB de logs diarios con una infraestructura ELK en Linux, detectando anomalías en tiempo real mediante machine learning.",
        },
      ],
    },
    {
      title: "Ciencia y Educación",
      icon: <Microscope className="h-8 w-8 text-green-500" />,
      description: "Investigación científica y educación avanzada",
      tools: [
        "R y RStudio para análisis estadístico",
        "Python científico (NumPy, SciPy, Pandas)",
        "MATLAB/Octave para cálculo numérico",
        "Bioconductor para bioinformática",
        "SAGE para matemáticas computacionales",
      ],
      examples: [
        {
          company: "CERN",
          detail:
            "El Gran Colisionador de Hadrones (LHC) utiliza Scientific Linux para controlar los detectores y analizar datos. El experimento ATLAS genera 1PB de datos por segundo que son filtrados y procesados por una grilla de computación con más de 170 centros de datos ejecutando Linux. El descubrimiento del bosón de Higgs en 2012 fue posible gracias a este procesamiento masivo en Linux.",
        },
        {
          company: "NASA",
          detail:
            "Utiliza Linux para simulaciones de misiones espaciales y procesamiento de imágenes. El rover Perseverance en Marte ejecuta un sistema basado en Linux con un kernel personalizado para resistir radiación. Las imágenes de Marte son procesadas con herramientas de código abierto como GDAL y OpenCV ejecutándose en clusters Linux.",
        },
        {
          company: "Universidades",
          detail:
            "El 95% de las universidades del top 100 mundial utilizan clusters HPC con Linux para investigación. La Universidad de Cambridge ejecuta el supercomputador Wilkes-3 con Linux, que permite simulaciones de plegamiento de proteínas que aceleraron la investigación de vacunas para COVID-19 en 2020.",
        },
      ],
    },
  ]

  return (
    <section id="aplicaciones" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Aplicaciones de Linux</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Casos de uso reales donde Linux demuestra su versatilidad y potencia
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Real world applications showcase */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Linux en Acción: Casos Reales</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop"
              alt="Netflix data center running Linux servers"
              className="w-full h-32 object-cover rounded-lg shadow-md mb-3"
            />
            <h4 className="font-semibold text-red-600">Netflix</h4>
            <p className="text-slate-600 text-xs">
              Streaming para 230M+ usuarios con Open Connect CDN basado en FreeBSD/Linux
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=400&h=300&fit=crop"
              alt="Google data center with Linux-powered servers"
              className="w-full h-32 object-cover rounded-lg shadow-md mb-3"
            />
            <h4 className="font-semibold text-blue-600">Google</h4>
            <p className="text-slate-600 text-xs">
              Procesa 8.5 mil millones de búsquedas diarias con servidores Linux personalizados
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop"
              alt="NASA mission control with Linux workstations"
              className="w-full h-32 object-cover rounded-lg shadow-md mb-3"
            />
            <h4 className="font-semibold text-purple-600">NASA</h4>
            <p className="text-slate-600 text-xs">
              Controla rovers en Marte con sistemas Linux resistentes a radiación
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1677108167538-f34574c6c651?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CERN Large Hadron Collider control systems"
              className="w-full h-32 object-cover rounded-lg shadow-md mb-3"
            />
            <h4 className="font-semibold text-green-600">CERN</h4>
            <p className="text-slate-600 text-xs">
              Analiza colisiones de partículas con una grid de 170 centros de datos Linux
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
