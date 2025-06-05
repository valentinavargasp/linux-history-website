import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Globe, Lightbulb, Users } from "lucide-react"

export function Conclusion() {

  return (
    <section id="conclusion" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Conclusión</h2>
      </div>




      <div className="bg-slate-100 p-8 rounded-lg">

        <div className="space-y-6">
          <p className="text-slate-700 text-lg leading-relaxed">
            A lo largo de toda la investigación que realizamos durante el desarrollo de este trabajo, hemos aprendido que el sistema operativo GNU/Linux es mucho más que solo una alternativa entre las demás opciones; realmente es un universo lleno de posibilidades.
            Pudimos aprender sobre la historia de este sistema, desde sus comienzos hasta convertirse en lo que es hoy, y comprendimos el por qué es cada vez más elegido tanto en diferentes ámbitos.
          </p>

          <p className="text-slate-700 text-lg leading-relaxed">
            También pudimos analizar sus ventajas, sobre su seguridad, estabilidad y la capacidad de personalización. Lo que más nos llamó la atención fue, sin duda, la gran cantidad de opciones para distintos usos. Conocer las diferentes distribuciones especializadas para áreas como ciberseguridad, investigación científica, educación o inteligencia artificial nos demostró que es increíblemente versátil.
          </p>


          <p className="text-slate-700 text-lg leading-relaxed">
            Otro aspecto de gran valor, es la relevancia del software libre, y cómo esta filosofía ha influido notablemente en los avances tanto de Linux como en la tecnología en general. La colaboración y la libertad para modificar y compartir son pilares que fomentan una innovación constante y una comunidad increíblemente activa y dispuesta a ayudar. Entendemos que esto fue fundamental para que Linux sea lo que es hoy en día.
          </p>

          <p className="text-slate-700 text-lg leading-relaxed">
            Coincidimos entre las tres que este trabajo no solo nos ha enseñado sobre un sistema operativo, sino que también nos ha dado herramientas que creemos nos serán de gran utilidad. Definitivamente, desde ahora vamos a considerar la utilización de Linux tanto para crecer profesionalmente como para seguir aprovechando al máximo sus posibilidades.
          </p>

        </div>
      </div>
    </section>
  )
}
