import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, GitBranch, Users, Globe } from "lucide-react"

export function Timeline() {
  const events = [
    {
      year: "1984",
      title: "Proyecto GNU",
      description: "Richard Stallman lanza el Proyecto GNU",
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-yellow-500",
      detail:
        "En 1983, Richard Stallman (RMS) lanzó el Proyecto GNU, con la ambiciosa meta de crear un sistema operativo completamente libre, similar a Unix, al que llamó GNU. Su principal motivación era asegurar la libertad de los usuarios para ejecutar, estudiar, redistribuir y modificar el software, marcando así la fundación del movimiento del software libre y estableciendo los principios filosóficos y técnicos para tal sistema.",
    },
    {
      year: "1991",
      title: "Nacimiento de Linux",
      description: "Linus Torvalds anuncia el primer kernel de Linux",
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-blue-500",
      detail:
        "El 25 de agosto de 1991, Linus Torvalds, publicó en el grupo de noticias comp.os.minix: 'Estoy creando un sistema operativo (gratuito, solo un hobby, no será grande y profesional como GNU)'. Este mensaje marcó el nacimiento del kernel Linux, inicialmente compatible solo con hardware AT y discos duros IDE.",
    },
    {
      year: "1992",
      title: "Licencia GPL",
      description: "Linux adopta la licencia GNU GPL, garantizando su libertad",
      icon: <Users className="h-6 w-6" />,
      color: "bg-green-500",
      detail:
        "En febrero de 1992, Torvalds cambió la licencia de Linux de una prohibición de distribución comercial a la GNU General Public License (GPL). Esta decisión crucial garantizó que Linux permanecería libre y que cualquier modificación debería compartirse con la comunidad, estableciendo las bases del movimiento de software libre moderno.",
    },
    {
      year: "1993",
      title: "Primeras Distribuciones",
      description: "Aparecen Slackware y Debian, las primeras distribuciones importantes",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-purple-500",
      detail:
        "Patrick Volkerding lanzó Slackware en abril de 1993, mientras que Ian Murdock anunció Debian en agosto del mismo año. Estas distribuciones pioneras establecieron dos filosofías diferentes: Slackware con su enfoque en la simplicidad y estabilidad, y Debian con su compromiso con el software libre y su sistema de paquetes avanzado que revolucionaría la gestión de software.",
    },
    {
      year: "2004",
      title: "Ubuntu Revolution",
      description: "Ubuntu democratiza Linux para usuarios domésticos",
      icon: <Users className="h-6 w-6" />,
      color: "bg-orange-500",
      detail:
        "Mark Shuttleworth fundó Canonical y lanzó Ubuntu 4.10 'Warty Warthog' en octubre de 2004. Con el lema 'Linux para seres humanos', Ubuntu revolucionó la accesibilidad de Linux con una instalación sencilla, ciclos de lanzamiento predecibles cada 6 meses, y soporte LTS de 5 años. Su enfoque en la experiencia de usuario atrajo a millones de nuevos usuarios a Linux.",
    },
    {
      year: "2007",
      title: "Android",
      description: "Google lanza Android basado en kernel Linux",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-green-600",
      detail:
        "En noviembre de 2007, Google anunció Android, un sistema operativo móvil basado en el kernel Linux. El primer dispositivo comercial, el HTC Dream (G1), se lanzó en 2008. Android representó la mayor expansión de Linux en la historia, llevando el kernel a miles de millones de dispositivos móviles y convirtiéndose en el sistema operativo más utilizado del mundo.",
    },
    {
      year: "2024",
      title: "Dominio Actual",
      description: "Linux domina servidores, supercomputadoras y dispositivos IoT",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-blue-600",
      detail:
        "En 2024, Linux impulsa el 96.3% de los servidores web principales, el 100% de las supercomputadoras TOP500, y más del 85% de los dispositivos IoT. El kernel 6.8 incluye más de 33 millones de líneas de código con contribuciones de más de 20,000 desarrolladores de 1,000+ empresas. Linux se ha convertido en la columna vertebral de la infraestructura digital global.",
    },
  ]

  return (
    <section id="historia" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Historia de Linux</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Un recorrido por los hitos más importantes en la evolución del sistema operativo más influyente de la era
          moderna
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500"></div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.year} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-800">{event.year}</span>
                      <div className={`p-2 rounded-full ${event.color} text-white`}>{event.icon}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-slate-600 mb-3">{event.description}</p>
                    <div className="bg-slate-50 p-3 rounded-md text-sm text-slate-700">{event.detail}</div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative z-10">
                <div className={`w-4 h-4 rounded-full ${event.color} border-4 border-white shadow-lg`}></div>
              </div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  )
}
