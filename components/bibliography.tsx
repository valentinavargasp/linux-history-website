import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ExternalLink } from "lucide-react"

export function Bibliography() {
  const references = [
    {
      category: "Computación de Alto Rendimiento",
      items: [
        "Dongarra, J., Sterling, T., Simon, H., & Strohmaier, E. (2003). High-Performance Computing: Clusters, Constellations, MPPs, and Future Directions. Computing in Science & Engineering, 7(2), 51-59.",
        "Sterling, T., Anderson, M., & Brodowicz, M. (2018). High Performance Computing: Modern Systems and Practices. Morgan Kaufmann.",
        "Reed, D. A., & Dongarra, J. (2015). Exascale computing and big data. Communications of the ACM, 58(7), 56-68.",
      ],
    },
    {
      category: "Aplicaciones de Desarrollo Web",
      items: [
        "https://www.sudosu.com.ar/linux/herramientas-desarrollo/",
        ""
      ],
    },
    {
      category: "Inteligencia Artificial y Machine Learning",
      items: [
        "Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press.",
        "Chollet, F. (2017). Deep Learning with Python. Manning Publications.",
        "Géron, A. (2019). Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (2nd ed.). O'Reilly Media.",
      ],
    },
    {
      category: "Desarrollo Web y Ciberseguridad",
      items: [
        "Gourley, D., & Totty, B. (2002). HTTP: The Definitive Guide. O'Reilly Media.",
        "McClure, S., Scambray, J., & Kurtz, G. (2012). Hacking Exposed 7: Network Security Secrets and Solutions. McGraw-Hill Education.",
        "Kamp, P. H., & Watson, R. N. M. (2000). Jails: Confining the omnipotent root. Proceedings of the 2nd International SANE Conference.",
      ],
    },
    {
      category: "Fuentes Estadísticas y Reportes",
      items: [
        "Stack Overflow. (2023). Developer Survey 2023. Retrieved from https://survey.stackoverflow.co/2023/",
        "W3Techs. (2024). Usage Statistics of Operating Systems for Websites. Retrieved from https://w3techs.com/",
        "TOP500.org. (2024). TOP500 Supercomputer Sites. Retrieved from https://www.top500.org/",
        "NIST. (2023). National Vulnerability Database. Retrieved from https://nvd.nist.gov/",
        "Gartner. (2023). Market Guide for Cloud Infrastructure and Platform Services. Gartner Research.",
      ],
    },
    {
      category: "Documentación Técnica",
      items: [
        "The Linux Kernel Archives. (2024). Retrieved from https://www.kernel.org/",
        "GNU Operating System. (2024). Retrieved from https://www.gnu.org/",
        "Ubuntu Documentation. (2024). Retrieved from https://help.ubuntu.com/",
        "Red Hat Enterprise Linux Documentation. (2024). Retrieved from https://access.redhat.com/documentation/",
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
