import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Users, Monitor, Settings } from "lucide-react"

export function Distributions() {
  const developerDistro = {
    name: "Ubuntu 22.04 LTS",
    description: "Distribución ideal para desarrolladores de sistemas",
    advantages: [
      "LTS con 5 años de soporte garantizado",
      "Repositorios extensos con herramientas de desarrollo",
      "Snap packages para software actualizado",
      "Excelente soporte de hardware",
      "Comunidad activa y documentación extensa",
    ],
    tools: [
      "Visual Studio Code / JetBrains IDEs",
      "Docker y Kubernetes",
      "Git, Node.js, Python, Java",
      "Postman, DBeaver",
      "Terminal avanzado con Zsh/Oh-My-Zsh",
    ],
    desktop: "GNOME 42 con extensiones para productividad",
  }

  const familyDistro = {
    name: "Linux Mint 21 Cinnamon",
    description: "Distribución perfecta para uso familiar y educativo",
    advantages: [
      "Interfaz familiar similar a Windows",
      "Estabilidad basada en Ubuntu LTS",
      "Multimedia codecs incluidos",
      "Software educativo preinstalado",
      "Actualizaciones controladas y seguras",
    ],
    tools: [
      "LibreOffice Suite completa",
      "Firefox con controles parentales",
      "GIMP para edición de imágenes",
      "VLC Media Player",
      "Software educativo (GCompris, Scratch)",
    ],
    desktop: "Cinnamon - intuitivo y personalizable",
  }

  return (
    <section id="distribuciones" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Distribuciones de Linux</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Análisis de distribuciones de Linux para diferentes perfiles de usuario:
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Desarrollador */}
        <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span>Para Desarrollador</span>
            </CardTitle>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800">{developerDistro.name}</h3>
              <p className="text-blue-700">{developerDistro.description}</p>
            </div>
          </CardHeader>
          <div className="px-6 pb-4">
            <img
              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_720/https://lh5.googleusercontent.com/RsKMsgPupSewjRFBatU3I7vdxNaEzN5XvMHeTrXNcKuDxlaj_wEfoffmtjdVcpdKOW7j-wyuWveXkskxltZoAzlHGTMA8jlW4DscErI6h87TOhBFrjYTt8GYEIAL8T1927KUI4JCMJSygi6wOzWVTDvFVo0sjj2ESx_sxzsKd2NgB6zPrUAzGA2G9w"
              alt="Ubuntu desktop environment with development tools"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-blue-500" />
                Ventajas Principales
              </h4>
              <ul className="space-y-2">
                {developerDistro.advantages.map((advantage, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <Code2 className="h-5 w-5 mr-2 text-green-500" />
                Herramientas de Desarrollo
              </h4>
              <ul className="space-y-2">
                {developerDistro.tools.map((tool, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-purple-500" />
                Entorno de Escritorio
              </h4>
              <p className="text-slate-700">{developerDistro.desktop}</p>
            </div>
          </CardContent>
        </Card>

        {/* Familia */}
        <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <Users className="h-8 w-8 text-green-500" />
              <span>Para Familia</span>
            </CardTitle>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-green-800">{familyDistro.name}</h3>
              <p className="text-green-700">{familyDistro.description}</p>
            </div>
          </CardHeader>
          <div className="px-6 pb-4">
            <img
              src="https://www.linuxmint.com/pictures/screenshots/vanessa/thumb_cinnamon.png"
              alt="Linux Mint Cinnamon desktop with family-friendly applications"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-green-500" />
                Ventajas Principales
              </h4>
              <ul className="space-y-2">
                {familyDistro.advantages.map((advantage, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <Code2 className="h-5 w-5 mr-2 text-blue-500" />
                Software Incluido
              </h4>
              <ul className="space-y-2">
                {familyDistro.tools.map((tool, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-purple-500" />
                Entorno de Escritorio
              </h4>
              <p className="text-slate-700">{familyDistro.desktop}</p>
            </div>
          </CardContent>
        </Card>
      </div>

    </section>
  )
}
