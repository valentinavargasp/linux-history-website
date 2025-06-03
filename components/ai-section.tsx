import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Database, Zap } from "lucide-react"
import Image from "next/image"

export function AISection() {
  const aiTools = [
    {
      category: "Frameworks de Deep Learning",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      tools: [
        "TensorFlow: Framework de Google para ML/DL",
        "PyTorch: Framework de Meta para investigación",
        "Keras: API de alto nivel para redes neuronales",
        "JAX: Computación numérica de alto rendimiento",
      ],
    },
    {
      category: "Herramientas de ML",
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
      tools: [
        "scikit-learn: ML tradicional y estadístico",
        "XGBoost: Gradient boosting optimizado",
        "LightGBM: Framework de Microsoft para GB",
        "CatBoost: Yandex para datos categóricos",
      ],
    },
    {
      category: "Entornos de Desarrollo",
      icon: <Database className="h-6 w-6 text-green-500" />,
      tools: [
        "Jupyter Notebook/Lab: Desarrollo interactivo",
        "Google Colab: Notebooks en la nube",
        "MLflow: Gestión del ciclo de vida ML",
        "Weights & Biases: Tracking de experimentos",
      ],
    },
    {
      category: "Computación Distribuida",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      tools: [
        "Apache Spark: Procesamiento distribuido",
        "Dask: Computación paralela en Python",
        "Ray: Framework para ML distribuido",
        "Horovod: Entrenamiento distribuido",
      ],
    },
  ]

  const aiApplications = [
    {
      title: "Procesamiento de Lenguaje Natural",
      description: "Modelos como BERT, GPT ejecutándose en clusters Linux",
      example: "OpenAI utiliza infraestructura Linux para entrenar GPT-4",
    },
    {
      title: "Visión por Computadora",
      description: "Redes convolucionales para reconocimiento de imágenes",
      example: "Tesla utiliza Linux para el procesamiento de datos de Autopilot",
    },
    {
      title: "Sistemas de Recomendación",
      description: "Algoritmos de filtrado colaborativo y deep learning",
      example: "Netflix ejecuta sus algoritmos de recomendación en AWS Linux",
    },
    {
      title: "Análisis Predictivo",
      description: "Modelos de series temporales y forecasting",
      example: "Uber utiliza Linux para predecir demanda y optimizar rutas",
    },
  ]

  return (
    <section id="ia" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Inteligencia Artificial con Linux</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Linux como plataforma líder para el desarrollo e implementación de soluciones de IA
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {aiTools.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                {category.icon}
                <span>{category.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.tools.map((tool, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{tool}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Development Environment Showcase */}
      <div className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Entorno de Desarrollo IA en Linux</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="https://source.unsplash.com/random/400x300"
              alt="Jupyter Notebook interface showing machine learning code"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-purple-800">Jupyter Lab + TensorFlow</h4>
            <p className="text-slate-600 text-sm">Entorno interactivo para desarrollo de modelos de IA</p>
          </div>
          <div>
            <Image
              src="https://source.unsplash.com/random/400x300"
              alt="GPU cluster running deep learning training jobs"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="font-semibold text-green-800">Cluster GPU para Entrenamiento</h4>
            <p className="text-slate-600 text-sm">Infraestructura distribuida para modelos complejos</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Aplicaciones de IA en Producción</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {aiApplications.map((app, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-purple-800">{app.title}</h4>
              <p className="text-slate-600 mb-3">{app.description}</p>
              <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                <strong className="text-purple-800">Caso Real:</strong>
                <span className="text-purple-700 ml-2">{app.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Fundamentación Teórica: IA y Linux</h3>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-blue-800">Ventajas de Linux para IA</h4>
            <p className="text-slate-700 mb-4">
              Según Goodfellow et al. (2016), el desarrollo de IA requiere acceso a bibliotecas de bajo nivel y
              optimizaciones específicas de hardware. Linux proporciona este acceso directo al hardware, especialmente
              para GPUs mediante CUDA y ROCm.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-slate-600">Supercomputadoras TOP500 usan Linux</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded">
                <div className="text-2xl font-bold text-green-600">80%</div>
                <div className="text-sm text-slate-600">Proyectos ML usan Python en Linux</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded">
                <div className="text-2xl font-bold text-purple-600">70%</div>
                <div className="text-sm text-slate-600">Cloud AI services ejecutan en Linux</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-green-800">Ecosistema de Desarrollo</h4>
            <p className="text-slate-700 mb-3">
              Chollet (2017) explica que el ecosistema Python-Linux es fundamental para IA debido a la integración
              nativa con bibliotecas C/C++ optimizadas como BLAS, LAPACK y cuDNN. La gestión de dependencias mediante
              conda y pip es más robusta en Linux.
            </p>
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <strong>Ejemplo Técnico:</strong> TensorFlow utiliza Bazel (sistema de build de Google) que funciona
              óptimamente en Linux. PyTorch aprovecha las optimizaciones de Intel MKL-DNN disponibles nativamente en
              Linux.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-purple-800">Casos de Estudio Empresariales</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <strong className="text-purple-800">Google:</strong>
                <p className="text-slate-700">
                  Utiliza una versión personalizada de Linux (Borg OS) para ejecutar sus modelos de IA. TensorFlow fue
                  diseñado específicamente para este entorno.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <strong className="text-blue-800">Meta:</strong>
                <p className="text-slate-700">
                  PyTorch se desarrolló en Linux y aprovecha las capacidades de paralelización del kernel Linux para
                  entrenamiento distribuido.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <strong className="text-green-800">NVIDIA:</strong>
                <p className="text-slate-700">
                  CUDA toolkit y cuDNN están optimizados para Linux, proporcionando hasta 30% mejor rendimiento que en
                  Windows para cargas de trabajo de IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}