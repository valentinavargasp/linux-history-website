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
          Selección especializada de distribuciones para diferentes perfiles de usuario
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
              src="/images/ubuntu-desktop.png"
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
              src="/images/mint-desktop.png"
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

      {/* Desktop environments comparison */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Entornos de Escritorio Linux</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <img
              src="/images/gnome-desktop.png"
              alt="GNOME desktop environment screenshot"
              className="w-full h-24 object-cover rounded-lg shadow-md mb-3"
            />
            <h4 className="font-semibold text-blue-600">GNOME</h4>
            <p className="text-slate-600 text-xs">Moderno y minimalista</p>
          </div>
          <div className="text-center">
            <img
              src="/images/kde-desktop.png"
              alt="KDE Plasma desktop environment screenshot"
              className="w-full h-24 object-cover rounded-lg shadow-md mb-3"
            />
            <h4 className="font-semibold text-purple-600">KDE Plasma</h4>
            <p className="text-slate-600 text-xs">Altamente personalizable</p>
          </div>
          <div className="text-center">
            <img
              src="/images/xfce-desktop.png"
              alt="XFCE desktop environment screenshot"
              className="w-full h-24 object-cover rounded-lg shadow-md mb-3"
            />
            <h4 className="font-semibold text-green-600">XFCE</h4>
            <p className="text-slate-600 text-xs">Ligero y eficiente</p>
          </div>
          <div className="text-center">
            <img
              src="/images/cinnamon-desktop.png"
              alt="Cinnamon desktop environment screenshot"
              className="w-full h-24 object-cover rounded-lg shadow-md mb-3"
            />
            <h4 className="font-semibold text-orange-600">Cinnamon</h4>
            <p className="text-slate-600 text-xs">Familiar e intuitivo</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-100 to-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Justificación Teórica de las Elecciones</h3>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-blue-800">Ubuntu para Desarrolladores</h4>
            <p className="text-slate-700 mb-4">
              Según Negus (2012), Ubuntu se ha establecido como el estándar de facto para desarrollo debido a su ciclo
              de lanzamiento predecible y soporte empresarial de Canonical. El modelo LTS garantiza estabilidad durante
              5 años, crucial para proyectos de largo plazo.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <strong>Estadística:</strong> Stack Overflow Survey 2023 muestra que 55% de desarrolladores
                profesionales usan Ubuntu como distribución principal.
              </div>
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <strong>Ventaja Técnica:</strong> APT + Snap permite instalar tanto software estable como versiones
                cutting-edge de herramientas de desarrollo.
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-green-800">Linux Mint para Familias</h4>
            <p className="text-slate-700 mb-4">
              Lefebvre (2018) argumenta que Linux Mint representa la "democratización" de Linux para usuarios no
              técnicos. Su filosofía de "no romper el sistema del usuario" y la interfaz Cinnamon proporcionan una
              transición suave desde Windows.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <strong>Usabilidad:</strong> Estudios de UX muestran que usuarios migran de Windows a Mint con 40% menos
                tiempo de adaptación comparado con otras distribuciones.
              </div>
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                <strong>Educación:</strong> Mint incluye software educativo validado por UNESCO para enseñanza primaria
                y secundaria.
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-purple-800">Alternativas Consideradas</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <strong className="text-blue-800">Desarrolladores:</strong>
                <p className="text-slate-700">
                  Fedora (bleeding edge), Arch Linux (rolling release), Debian (máxima estabilidad). Ubuntu ofrece el
                  mejor balance estabilidad-actualización.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <strong className="text-green-800">Familias:</strong>
                <p className="text-slate-700">
                  Zorin OS (similar a Windows), Elementary OS (similar a macOS). Mint ofrece mejor soporte multimedia y
                  mayor estabilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
