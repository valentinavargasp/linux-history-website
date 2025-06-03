import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Globe, Lightbulb, Users } from "lucide-react"

export function Conclusion() {
  const futureAspects = [
    {
      title: "Computación Cuántica",
      icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
      description: "Linux como plataforma para simuladores cuánticos y control de hardware cuántico",
    },
    {
      title: "Edge Computing",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      description: "Distribuciones ligeras para IoT y computación en el borde de la red",
    },
    {
      title: "Inteligencia Artificial",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      description: "Plataforma dominante para entrenamiento e inferencia de modelos de IA",
    },
    {
      title: "Sostenibilidad",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      description: "Eficiencia energética y reutilización de hardware legacy",
    },
  ]

  return (
    <section id="conclusion" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Conclusión</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Síntesis de argumentos para considerar Linux y reflexión sobre su futuro
        </p>
      </div>

      {/* Future of Linux visual */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Linux: Presente y Futuro</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop"
              alt="Linux powering IoT devices and smart cities"
              className="w-full h-40 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-blue-800">Internet de las Cosas</h4>
            <p className="text-slate-600 text-sm">Dispositivos conectados y ciudades inteligentes</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop"
              alt="Quantum computing systems running on Linux"
              className="w-full h-40 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-purple-800">Computación Cuántica</h4>
            <p className="text-slate-600 text-sm">Control de sistemas cuánticos y simulación</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop"
              alt="Space exploration missions powered by Linux"
              className="w-full h-40 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-green-800">Exploración Espacial</h4>
            <p className="text-slate-600 text-sm">Misiones a Marte y estaciones espaciales</p>
          </div>
        </div>

        {/* Linux ecosystem infographic */}
        <div className="mt-8 bg-slate-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-center text-slate-800">El Ecosistema Linux Hoy</h4>
          <div className="grid md:grid-cols-6 gap-4 text-center">
            <div className="p-3">
              <div className="h-12 w-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">S</span>
              </div>
              <div className="text-lg font-bold text-blue-600">96.3%</div>
              <div className="text-xs text-slate-600">Servidores Web</div>
            </div>
            <div className="p-3">
              <div className="h-12 w-12 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">M</span>
              </div>
              <div className="text-lg font-bold text-green-600">71%</div>
              <div className="text-xs text-slate-600">Móviles (Android)</div>
            </div>
            <div className="p-3">
              <div className="h-12 w-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">C</span>
              </div>
              <div className="text-lg font-bold text-purple-600">90%</div>
              <div className="text-xs text-slate-600">Cloud Público</div>
            </div>
            <div className="p-3">
              <div className="h-12 w-12 mx-auto mb-2 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">H</span>
              </div>
              <div className="text-lg font-bold text-red-600">100%</div>
              <div className="text-xs text-slate-600">Supercomputadoras</div>
            </div>
            <div className="p-3">
              <div className="h-12 w-12 mx-auto mb-2 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">D</span>
              </div>
              <div className="text-lg font-bold text-orange-600">95%</div>
              <div className="text-xs text-slate-600">Contenedores</div>
            </div>
            <div className="p-3">
              <div className="h-12 w-12 mx-auto mb-2 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-bold">I</span>
              </div>
              <div className="text-lg font-bold text-teal-600">85%</div>
              <div className="text-xs text-slate-600">Dispositivos IoT</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-lg mb-12">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Argumentos Principales para Adoptar Linux</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-800">Ventajas Técnicas</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700">
                  <strong>Seguridad Superior:</strong> Arquitectura robusta con actualizaciones rápidas y transparentes
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700">
                  <strong>Estabilidad Comprobada:</strong> Uptime superior al 99.9% en entornos de producción
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700">
                  <strong>Rendimiento Optimizado:</strong> Gestión eficiente de recursos y escalabilidad masiva
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700">
                  <strong>Personalización Total:</strong> Adaptable a cualquier necesidad específica
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-800">Ventajas Económicas y Sociales</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700">
                  <strong>Costo Cero:</strong> Sin licencias ni restricciones de uso
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700">
                  <strong>Independencia Tecnológica:</strong> Libertad de proveedores comerciales
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700">
                  <strong>Comunidad Global:</strong> Soporte colaborativo y conocimiento compartido
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-slate-700">
                  <strong>Transparencia:</strong> Código auditable y verificable
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">El Futuro de Linux</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureAspects.map((aspect, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-2 p-3 bg-slate-100 rounded-full w-fit">{aspect.icon}</div>
                <CardTitle className="text-lg">{aspect.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm text-center">{aspect.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-slate-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Reflexión Final</h3>

        <div className="space-y-6">
          <p className="text-slate-700 text-lg leading-relaxed">
            Linux representa más que un sistema operativo; es un paradigma que ha transformado la industria tecnológica
            y democratizado el acceso a herramientas de computación avanzadas. Su adopción masiva en servidores (96.3%),
            supercomputadoras (100%), y dispositivos móviles (Android) demuestra su versatilidad y robustez.
          </p>

          <p className="text-slate-700 text-lg leading-relaxed">
            La filosofía del software libre que sustenta Linux ha creado un ecosistema de innovación colaborativa sin
            precedentes. Como señala Torvalds (2001), "el software es como el sexo: es mejor cuando es libre",
            reflejando la importancia de la libertad tecnológica para el progreso humano.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <h4 className="text-xl font-semibold mb-3 text-blue-800">Proyección Futura</h4>
            <p className="text-slate-700 mb-4">
              Según Gartner (2023), se proyecta que para 2030, Linux dominará el 85% de la infraestructura cloud, el 95%
              de los sistemas de IA/ML, y será fundamental en tecnologías emergentes como computación cuántica y edge
              computing.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 bg-blue-50 rounded">
                <div className="text-xl font-bold text-blue-600">85%</div>
                <div className="text-xs text-slate-600">Cloud Infrastructure 2030</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded">
                <div className="text-xl font-bold text-green-600">95%</div>
                <div className="text-xs text-slate-600">AI/ML Systems 2030</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded">
                <div className="text-xl font-bold text-purple-600">100%</div>
                <div className="text-xs text-slate-600">Quantum Computing</div>
              </div>
            </div>
          </div>

          <p className="text-slate-700 text-lg leading-relaxed">
            Para usuarios, desarrolladores y organizaciones, Linux no es solo una opción técnica, sino una inversión en
            libertad, seguridad y sostenibilidad tecnológica. Su adopción representa un paso hacia la independencia
            digital y la participación en una comunidad global comprometida con la innovación abierta y colaborativa.
          </p>

          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-2">Recomendación Final</h4>
            <p className="text-lg">
              Linux no es solo el futuro de la computación; es el presente que está transformando nuestro mundo digital.
              La pregunta no es si adoptar Linux, sino cuándo y cómo hacerlo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
