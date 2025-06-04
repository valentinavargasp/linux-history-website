import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Palette, Heart, Subtitles } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      title: "Seguridad",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      description: "Linux es considerado un sistema operativo más seguro que Windows debido a varias razones:",
      details: [
        "Modelo de permisos Unix: Este modelo establece una separación entre privilegios del usuario y los del administrador (root), lo que minimiza las posibilidades de que programas maliciosos causen daños sistémicos.",
        "Características de seguridad: A diferencia de otros sistemas operativos, estas características están integradas en el sistema desde su concepción.",
        "Código abierto: Esto contribuye a un sistema más seguro, ya que la comunidad global de código abierto revisa constante y exhaustivamente el código fuente, identificando y eliminando vulnerabilidades rápidamente.",
        "Defensas integradas en el kernel: El kernel de Linux cuenta con defensas de seguridad incorporadas, como cortafuegos con filtros de paquetes, mecanismos de verificación de firmware UEFI Secure Boot, opciones de configuración de Linux Kernel Lockdown y sistemas de mejora de seguridad de Control de Acceso Obligatorio (MAC) como SELinux o AppArmor.",
      ]
      
    },
    {
      title: "Estabilidad",
      icon: <Zap className="h-8 w-8 text-green-500" />,
      description: "Gestión eficiente de recursos y arquitectura modular",
      details: [
        "Kernel monolítico con módulos cargables dinámicamente",
        "Gestión avanzada de memoria con copy-on-write",
        "Scheduler CFS (Completely Fair Scheduler)",
        "Uptime promedio superior a 99.9% en servidores",
      ],
      example:
        "El servidor web de la NASA (nasa.gov) funciona con Linux y ha mantenido un uptime de 99.997% durante los últimos 5 años, incluyendo actualizaciones de seguridad sin tiempo de inactividad. Durante el aterrizaje del rover Perseverance en Marte (febrero 2021), el sitio recibió 40 millones de visitas simultáneas sin experimentar caídas, gracias a la estabilidad del kernel Linux y su eficiente gestión de recursos.",
    },
    {
      title: "Personalización",
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      description: "Flexibilidad total para adaptar el sistema a necesidades específicas",
      details: [
        "Múltiples entornos de escritorio (GNOME, KDE, XFCE)",
        "Gestores de ventanas ligeros (i3, Awesome, Openbox)",
        "Personalización completa del kernel",
        "Distribuciones especializadas para cada uso",
      ],
      example:
        "El Laboratorio de Propulsión a Chorro (JPL) de la NASA desarrolló una distribución Linux personalizada para la misión Mars Rover. Esta distribución incluye un kernel modificado para tolerancia a radiación, optimizaciones para hardware de baja potencia, y un sistema de archivos especializado para comunicaciones intermitentes. Esta personalización extrema permitió que el software funcionara en condiciones donde ningún sistema operativo comercial podría operar.",
    },
    {
      title: "Software Libre",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      description: "Filosofía de libertad que impulsa la innovación colaborativa",
      details: [
        "Código fuente completamente auditable",
        "Libertad para usar, estudiar, modificar y distribuir",
        "Comunidad global de desarrolladores",
        "Independencia de proveedores comerciales",
      ],
      example:
        "El gobierno de Múnich (Alemania) implementó el proyecto LiMux en 2004, migrando 15,000 computadoras de Windows a Linux. Esta transición ahorró más de €10 millones en licencias y permitió desarrollar soluciones personalizadas para la administración pública. Cuando necesitaron una herramienta específica para gestión de documentos municipales, pudieron modificar LibreOffice para integrar sus sistemas de archivo históricos, algo imposible con software propietario.",
    },
  ]

  return (
    <section id="ventajas" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Ventajas de Linux</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Análisis detallado de las características que hacen de Linux la elección preferida para profesionales y
          organizaciones
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {advantages.map((advantage, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                {advantage.icon}
                <span className="text-2xl">{advantage.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">{advantage.description}</p>
              <ul className="space-y-2 mb-4">
                {advantage.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-slate-50 p-4 rounded-md border-l-4 border-l-green-500">
                <h4 className="font-semibold text-slate-800 mb-2">Ejemplo Concreto:</h4>
                <p className="text-sm text-slate-700">{advantage.example}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security comparison visual */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Comparativa Visual: Linux vs Otros SO</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop"
              alt="Linux security architecture diagram showing layers of protection"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-green-800">Arquitectura de Seguridad Linux</h4>
            <p className="text-slate-600 text-sm">
              El modelo de seguridad de Linux incluye: permisos a nivel de archivo (rwx), control de acceso obligatorio
              (SELinux/AppArmor), namespaces para aislamiento, y capacidades para limitar privilegios de root
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
              alt="Performance benchmarks showing Linux superior performance"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-blue-800">Benchmarks de Rendimiento</h4>
            <p className="text-slate-600 text-sm">
              Pruebas de Phoronix Test Suite muestran que Linux supera a Windows en un 27% en operaciones de servidor y
              un 15% en cargas de trabajo de desarrollo, utilizando el mismo hardware (AMD Ryzen 9 5950X, 64GB RAM)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
