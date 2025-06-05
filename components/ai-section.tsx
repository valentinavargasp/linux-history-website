"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, Settings, Lightbulb } from "lucide-react";
import Image from "next/image";

export function AISection() {
  const aiTools = [
    {
      category: "Posibilidades de implementar proyectos de IA en Linux",
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      tools: [
        {
          name: "Ventajas de Linux para IA",
          description:
            "Linux ofrece un entorno altamente propicio para la implementación de proyectos de Inteligencia Artificial por múltiples razones.",
          features: [
            "Código abierto: control total sobre el entorno de desarrollo (Red Hat, 2024)",
            "Eficiencia y rendimiento: uso óptimo de recursos para entrenamiento de modelos (NVIDIA, 2023)",
            "Soporte para hardware especializado: compatibilidad con CUDA de NVIDIA (NVIDIA Developer, 2024)",
            "Amplia disponibilidad de herramientas: frameworks como PyTorch, Keras o JAX con integración fluida",
            "Facilidad para entornos reproducibles: gracias a Docker o entornos virtuales (Docker Docs, 2024)"
          ],
          useCases: [
            "Entrenamiento de modelos de deep learning",
            "Proyectos de IA escalables y reproducibles",
            "Despliegue eficiente de soluciones de IA en producción"
          ],
          source: "https://www.redhat.com, https://developer.nvidia.com, https://docs.docker.com",
          noExpand: true
        }
      ]
    },
    {
      category: "Bibliotecas y Frameworks de IA en Linux",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      tools: [
        {
          name: "PyTorch",
          description: "Framework de Facebook AI Research para deep learning con ejecución dinámica y flexible.",
          features: [
            "Tensors multidimensionales con GPU",
            "Autograd para derivadas automáticas",
            "Facilidad de debugging"
          ],
          useCases: [
            "NLP (Modelos de lenguaje)",
            "Generación de imágenes",
            "Redes generativas adversarias (GANs)"
          ],
          source: "https://pytorch.org/"
        },
        {
          name: "Keras",
          description: "Biblioteca de alto nivel escrita en Python para construir y entrenar redes neuronales.",
          features: [
            "Interfaz sencilla y amigable",
            "Integración con TensorFlow, Theano, CNTK",
            "Menos líneas de código para modelos de DL"
          ],
          useCases: [
            "Clasificación de imágenes",
            "Análisis de texto",
            "Reconocimiento de voz",
            "Prototipado rápido"
          ],
          source: "https://keras.io/"
        },
        {
          name: "Apache Mahout",
          description: "Framework diseñado para trabajar con grandes volúmenes de datos. Funciona sobre Hadoop y Spark.",
          features: [
            "Muy escalable",
            "Ideal para análisis masivos distribuidos",
            "Compatible con arquitecturas tipo big data"
          ],
          useCases: [
            "Recomendadores",
            "Análisis de clústeres",
            "Clasificación en bases de datos muy grandes"
          ],
          source: "https://mahout.apache.org/"
        }
      ]
    },
    {
      category: "Herramientas de aprendizaje automático en Linux",
      icon: <Settings className="h-6 w-6 text-orange-500" />,
      tools: [
        {
          name: "RapidMiner",
          description: "Plataforma de análisis de datos con entorno integrado para preparación, modelado y evaluación, con interfaz gráfica sin necesidad de codificación.",
          features: [
            "Interfaz amigable con drag & drop",
            "Biblioteca de operadores para tareas ML",
            "Integración con Python y R",
            "Soporte para procesamiento paralelo y en la nube"
          ],
          useCases: [
            "Modelos de clasificación y regresión",
            "Detección de fraudes y análisis de riesgos",
            "Optimización de campañas de marketing"
          ],
          source: "https://alternativeto.net/software/rapidminer/"
        },
        {
          name: "Weka",
          description: "Entorno de software con interfaz gráfica para análisis de datos desarrollado por la Universidad de Waikato.",
          features: [
            "Preprocesamiento de datos",
            "Evaluación cruzada",
            "Visualización de datos",
            "Algoritmos de clasificación, regresión y clustering"
          ],
          useCases: [
            "Enseñanza de IA",
            "Prototipado rápido sin codificación",
            "Proyectos educativos"
          ],
          source: "https://www.cs.waikato.ac.nz/ml/weka/"
        },
        {
          name: "Orange",
          description: "Herramienta de análisis visual de datos con una interfaz gráfica basada en bloques.",
          features: [
            "Análisis interactivo de datos",
            "Pipelines de aprendizaje automático",
            "Árboles de decisión, random forest, k-means, etc."
          ],
          useCases: [
            "Proyectos colaborativos",
            "Visualización de clusters",
            "Análisis de datos educativos y biomédicos"
          ],
          source: "https://orangedatamining.com/"
        }
      ]
    },
    {
      category: "Aplicaciones de IA desarrolladas en Linux",
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      tools: [
        {
          name: "Asistentes Virtuales",
          description: "Ejemplo: Mycroft AI, asistente virtual de código abierto que se ejecuta en Linux.",
          features: [
            "Responde preguntas",
            "Ejecuta comandos",
            "Controla dispositivos inteligentes"
          ],
          useCases: [
            "Personalización de comandos",
            "Integración de nuevas funciones",
            "Funcionamiento local sin servicios externos"
          ],
          source: "https://mycroft.ai/"
        },
        {
          name: "Sistemas de Recomendación",
          description: "Ejemplo: Algoritmos de recomendación de Netflix y Amazon implementados sobre servidores Linux.",
          features: [
            "Filtrado colaborativo",
            "Deep learning",
            "Uso de TensorFlow, PySpark, scikit-learn"
          ],
          useCases: [
            "Recomendación de productos",
            "Películas y contenido personalizado"
          ],
          source: "https://netflixtechblog.com/"
        },
        {
          name: "Análisis de Imágenes",
          description: "Ejemplo: Detección de tumores y defectos industriales con redes convolucionales en Linux.",
          features: [
            "Automatización de diagnóstico",
            "Uso de PyTorch, TensorFlow, OpenCV",
            "Reducción de tiempos de análisis"
          ],
          useCases: [
            "Precisión médica",
            "Inspección en líneas de producción"
          ],
          source: "https://www.nature.com/articles/s41591-019-0508-1"
        },
        {
          name: "Detección de Fraudes",
          description: "Modelos implementados en Linux para detectar patrones anómalos en transacciones.",
          features: [
            "Análisis de comportamiento",
            "scikit-learn, XGBoost, pandas",
            "Procesamiento en tiempo real"
          ],
          useCases: [
            "Prevención de fraudes financieros",
            "Seguridad bancaria"
          ],
          source: "https://www.sciencedirect.com/science/article/pii/S1877050921003457"
        }
      ]
    }
  ];

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, toolIndex: number): void => {
    const key = `${categoryIndex}-${toolIndex}`;
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="ia" className="py-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
          Inteligencia Artificial con Linux
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Bibliotecas, herramientas y casos de uso para potenciar proyectos de IA en sistemas abiertos.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {aiTools.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                {category.icon}
                <span>{category.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-left text-sm text-slate-700">
              {category.tools.map((tool, toolIndex) => {
                const key = `${categoryIndex}-${toolIndex}`;
                const isExpanded = expandedItems[key];
                const showExpandButton = !(tool as any).noExpand;
                return (
                  <div key={toolIndex} className="border-t pt-4">
                    <h4 className="font-semibold text-base text-slate-800 mb-1">{tool.name}</h4>
                    <p className="text-slate-600 mb-2">{tool.description}</p>
                    {(isExpanded || !showExpandButton) && (
                      <>
                        <p className="font-medium text-slate-700">Características:</p>
                        <ul className="list-disc pl-6 mb-2">
                          {tool.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>

                        <p className="font-medium text-slate-700">Aplicaciones:</p>
                        <ul className="list-disc pl-6 mb-2">
                          {tool.useCases.map((use, i) => (
                            <li key={i}>{use}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {showExpandButton && (
                      <button
                        onClick={() => toggleItem(categoryIndex, toolIndex)}
                        className="text-blue-600 mt-2 underline text-sm"
                      >
                        {isExpanded ? "Ver menos" : "Ver más"}
                      </button>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
