import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ExternalLink } from "lucide-react"

export function Bibliography() {
  const references = [
    {
      category: "Fuentes de Línea de tiempo",
      items: [
        "Evolución de Linux: Cronología completa:https://tuxcare.com/es/blog/linux-evolution/",
        "Historia de linux https://es.wikipedia.org/wiki/Historia_de_Linux",
        "Video Historia de Linux: https://www.youtube.com/watch?v=dFAXmtLbTGI&ab_channel=DavidDwq",
        "Material otorgado por el docente"
      ],
    },
    {
      category: "Ventajas de linux",
      items: [
        "General: https://nelkodev.com/blog/la-fortaleza-de-linux-seguridad-y-estabilidad-descomplicadas/?utm_source=chatgpt.com https://www.seas.es/blog/informatica/que-es-el-sistema-linux-y-cuales-son-sus-ventajas/ https://linuxsecurity.com/features/how-secure-is-linux",
        "Entornos de escritorio: https://www.arsys.es/blog/entornos-escritorio-linux",
        "Paquetes en linux: https://4geeks.com/es/lesson/gestion-paquetes-software-linux",
        "Gestores de ventana: https://geekflare.com/es/linux-window-managers/",
        "Scripts: https://www.hostinger.com/ar/tutoriales/bash-script-linux",
        "Filosofía proyecto GNU: https://www.gnu.org/philosophy/philosophy.html",
        "Software Libre: https://es.wikipedia.org/wiki/Software_libre_en_educaci%C3%B3n",
        "https://chatia.app/ventajas-y-desventajas-del-software-libre-una-guia/",
        "https://blog.hubspot.es/website/software-libre",
        "Material otorgado por el docente",
      ],
    },
    {
      category: "Aplicaciones de Linux",
      items: [
        "https://www.sudosu.com.ar/linux/herramientas-desarrollo/",
        "Servidores web: https://www.cloudpanel.io/blog/linux-web-servers/#:~:text=%C2%BFQu%C3%A9%20es%20un%20servidor%20web,env%C3%ADa%20a%20su%20direcci%C3%B3n%20IP.",
        "Lenguajes de programacion: https://es.wikipedia.org/wiki/GNU/Linux#:~:text=La%20mayor%C3%ADa%20de%20las%20distribuciones,trav%C3%A9s%20de%20un%20repositorio%20com%C3%BAn",
        "Herramientas para ciberseguridad: https://tuxcare.com/es/blog/linux-security-tools/",
        "Educación: https://www.linuxjournal.com/content/how-linux-revolutionizing-education-open-source-learning",
      ],
    },
    {
      category: "Supercomputadoras",
      items: [
        "https://top500.org/lists/top500/2024/11/",
        "https://www.redhat.com/en/blog/how-red-hat-enterprise-linux-powers-worlds-fastest-supercomputer-and-future-exascale-computing",
        "https://www.linuxfoundation.org/blog/blog/20-years-of-top500-data-show-linuxs-role-in-supercomputing-breakthroughs"
      ],
    },
    {
      category: "Fuentes Estadísticas y Reportes",
      items: [
        "Stack Overflow. (2023). https://survey.stackoverflow.co/2023/",
        "W3Techs. (2024). https://w3techs.com/",
        "TOP500.org. (2024). https://www.top500.org/",
        "NIST. (2023). https://nvd.nist.gov/",
      ],
    },
    {
      category: "Documentación Técnica",
      items: [
        "The Linux Kernel Archives. https://www.kernel.org/",
        "GNU Operating System. https://www.gnu.org/",
        "Ubuntu Documentation. https://help.ubuntu.com/",
        "Red Hat Enterprise Linux Documentation. https://access.redhat.com/documentation/",
      ],
    },
  ]

  return (
    <section id="bibliografia" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center">
          <BookOpen className="h-10 w-10 mr-4 text-blue-500" />
          Bibliografía
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Fuentes especializadas utilizadas en este trabajo
        </p>
      </div>

      <div className="space-y-8">
        {references.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800 border-b border-slate-200 pb-2">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 font-semibold mr-3 mt-1 flex-shrink-0">{idx + 1}.</span>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                    {item.includes("Retrieved from") && (
                      <ExternalLink className="h-4 w-4 text-blue-500 ml-2 mt-1 flex-shrink-0" />
                    )}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>

    </section>
  )
}
