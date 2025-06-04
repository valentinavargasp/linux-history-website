import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Palette, Heart } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      title: "Seguridad",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      description: "Linux es considerado un sistema operativo más seguro que Windows debido a varias razones:",
      details: [
        "Modelo de permisos Unix: Establece una separación entre privilegios del usuario y los del administrador (root), minimizando daños de programas maliciosos.",
        "Características de seguridad: Están integradas desde el diseño del sistema.",
        "Código abierto: La comunidad global revisa y corrige vulnerabilidades rápidamente.",
        "Defensas en el kernel: Cortafuegos, UEFI Secure Boot, Kernel Lockdown, SELinux, AppArmor, etc.",
      ],
      example: [
        "Herramientas para la protección del sistema: Cortafuegos y módulos de seguridad mejorada: Herramientas como SELinux y AppArmor ofrecen configuraciones sólidas y personalizables para fortalecer la seguridad del sistema.",
        "Estrategias para mitigar amenazas: se basan en actualizaciones rápidas de seguridad impulsadas por la comunidad, la transparencia del código abierto que evita \"puertas traseras\" y, fundamentalmente, en una configuración y administración correctas del sistema, ya que las fallas en estas áreas son la principal causa de vulnerabilidades.",
      ],
    },
    {
      title: "Estabilidad",
      icon: <Zap className="h-8 w-8 text-green-500" />,
      description: "Linux es considerado un sistema operativo estable y confiable principalmente por su arquitectura y el proceso de desarrollo comunitario.",
      details: [
        "Diseño inspirado en Unix: Su diseño se inspiró en Unix, conocido por su robustez y eficiencia.",
        "Arquitectura modular (multikernel): Está concebido para ejecutar varios núcleos, permitiendo que distintas partes del sistema operativo trabajen de manera independiente y cohesiva, reduciendo el riesgo de caídas del sistema completo.",
        "Gestión eficiente de recursos: Linux es altamente eficiente en el uso de recursos del sistema, lo que permite un rendimiento óptimo.",
        "Sistema de archivos resistente: El sistema de archivos de Linux es conocido por su resistencia a la corrupción y su eficiencia en el manejo de archivos.",
      ],
      example: [
        "Rol de la comunidad: El rol de la comunidad en Linux es fundamental, destacando por un riguroso proceso de pruebas al que se somete cada actualización antes de su lanzamiento estable, asegurando así la solidez del sistema. Además, la comunidad demuestra una impresionante velocidad para identificar y corregir fallos.",
      ],
    },
    {
      title: "Personalización",
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      description: "Linux ofrece una flexibilidad inigualable, permitiendo a los usuarios personalizar casi todos los aspectos del sistema.",
      details: [
        "Selección de entornos de escritorio: Elegir el entorno adecuado dependerá de tus necesidades, del hardware disponible y del tipo de tareas que realices a diario.",
        "Diversidad de distribuciones: Existe una amplia gama de distribuciones diseñadas para diferentes entornos y necesidades, como Ubuntu, Fedora, Debian y CentOS.",
        "Gestores de paquetes: son herramientas fundamentales para la gestión eficiente del software ya que simplifican la instalación, actualización y eliminación de paquetes de software en un servidor. Entre los gestores de paquetes más populares se encuentran: apt-get, yum, zypper, dnf.",
        "Gestores de ventana: es responsable de gestionar el comportamiento, la apariencia y la colocación de las ventanas de las aplicaciones en una pantalla. Estos son algunos: XMonad, bspwm, Awesome,  DynamicWindow Manger(dwm), entre otros.",
        "Creación de scripts: Bash (Bourne-Again Shell) es un intérprete de comandos de Unix. Este lee los comandos del shell e interactúa con el sistema operativo para ejecutarlos. Los scripts Bash pueden ayudarte con tu flujo de trabajo, ya que compilan muchos comandos largos en un único archivo de script ejecutable.",
      ],
example: [
  "Entornos de escritorio más populares:",
  "GNOME: Sencillo de usar, intuitivo y eficiente.",
  "KDE: Es conocido por ser el entorno más potente y personalizable del mundo Linux.",
  "XFCE: Es la elección preferida cuando se busca un entorno ligero, rápido y estable. Está pensado para equipos con pocos recursos.",
  "MATE: Combina ligereza, rendimiento y familiaridad, lo que lo convierte en una opción muy equilibrada.",
  "Incluye kernel modificado para radiación y sistema de archivos optimizado para comunicaciones intermitentes."
],

    },
{
  title: "Software Libre",
  icon: <Heart className="h-8 w-8 text-red-500" />,
  description: "Esta filosofía impulsa la innovación y la colaboración en Linux al permitir que su código fuente esté disponible para que cualquiera lo examine, modifique y distribuya. Las ventajas del software libre incluyen:",
  details: [
    "Transparencia: El código abierto significa que todo está a la vista para ser examinado. Esta transparencia fomenta una mayor seguridad e inspira confianza.",
    "Colaboración: La comunidad global revisa constantemente el código, identificando y eliminando vulnerabilidades.",
    "Accesibilidad: Cualquiera puede ver, modificar y distribuir el código fuente libremente.",
    "Independencia tecnológica: Evita la dependencia de proveedores específicos, otorgando mayor autonomía.",
    "Reducción de costos: Al no requerir licencias de uso, reduce significativamente los gastos en adquisición y mantenimiento de software.",
    "Fomento de la innovación: La naturaleza colaborativa impulsa la mejora continua y la adaptación a nuevas necesidades.",
    "Educación y desarrollo de habilidades: Facilita el aprendizaje y la comprensión profunda del funcionamiento del software.",
    "Apoyo a la economía local: Permite a las comunidades desarrollar soluciones adaptadas a su contexto, promoviendo el crecimiento local.",
    "Sostenibilidad y reutilización: Promueve prácticas sostenibles mediante la reutilización y adaptación del software existente."
  ],
  example: [
    "Filosofía del proyecto GNU:",
    "0. Ejecutar el programa para cualquier propósito.",
    "1. Estudiar cómo funciona el programa y modificarlo según las necesidades.",
    "2. Redistribuir copias exactas para ayudar a otros.",
    "3. Distribuir copias de versiones modificadas para beneficiar a la comunidad.",
    "Ejemplo práctico: El gobierno de Múnich migró 15.000 computadoras a Linux, ahorrando más de €10 millones en licencias y permitiendo desarrollar soluciones personalizadas para la administración pública."
  ]
}

  ];

  return (
    <section id="ventajas" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Ventajas de Linux</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Análisis detallado de las características que hacen de Linux la elección preferida para profesionales y organizaciones
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
                <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
                  {advantage.example.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
