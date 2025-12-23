
import Link from 'next/link'

import { ArrowLeft, Sparkles } from 'lucide-react'

export function generateStaticParams() {
  return [
    { sector: 'inmobiliaria' },
    { sector: 'consultoria' },
    { sector: 'restauracion' },
    { sector: 'legal' },
    { sector: 'moda' },
    { sector: 'tatuaje' }
  ]
}

// Complete Básicos GPTs data - 60 total (10 per sector)
const basicosData: Record<string, any> = {
  inmobiliaria: {
    nombre: "Inmobiliaria",
    icon: "🏠",
    color: "from-blue-500 to-cyan-600",
    gpts: [
      { id: 1, nombre: "Captación propiedades", descripcion: "Crea mensajes personalizados para captar propiedades" },
      { id: 2, nombre: "Valoración automática", descripcion: "Genera informes de valoración profesionales" },
      { id: 3, nombre: "Cualificación leads", descripcion: "Cualifica clientes potenciales automáticamente" },
      { id: 4, nombre: "Tours virtuales", descripcion: "Crea scripts para tours virtuales personalizados" },
      { id: 5, nombre: "Negociación asistida", descripcion: "Proporciona estrategias de negociación" },
      { id: 6, nombre: "Documentación legal", descripcion: "Genera checklist de documentación necesaria" },
      { id: 7, nombre: "Marketing listing", descripcion: "Crea descripciones atractivas de propiedades" },
      { id: 8, nombre: "Seguimiento cliente", descripcion: "Automatiza el seguimiento post-visita" },
      { id: 9, nombre: "Análisis mercado", descripcion: "Genera informes de análisis de mercado" },
      { id: 10, nombre: "Cierre venta", descripcion: "Asiste en el proceso de cierre de venta" }
    ]
  },
  consultoria: {
    nombre: "Consultoría",
    icon: "💼",
    color: "from-purple-500 to-pink-600",
    gpts: [
      { id: 11, nombre: "Diagnóstico inicial", descripcion: "Realiza diagnóstico empresarial inicial" },
      { id: 12, nombre: "Análisis DAFO", descripcion: "Genera análisis DAFO personalizado" },
      { id: 13, nombre: "Plan estratégico", descripcion: "Crea outline de plan estratégico" },
      { id: 14, nombre: "Benchmarking", descripcion: "Identifica KPIs y métricas de comparación" },
      { id: 15, nombre: "Propuesta valor", descripcion: "Define propuesta de valor única" },
      { id: 16, nombre: "Roadmap proyecto", descripcion: "Crea roadmap de implementación" },
      { id: 17, nombre: "Presentación ejecutiva", descripcion: "Genera estructura de presentación" },
      { id: 18, nombre: "Análisis competencia", descripcion: "Analiza competencia del sector" },
      { id: 19, nombre: "Métricas éxito", descripcion: "Define KPIs y métricas de éxito" },
      { id: 20, nombre: "Informe seguimiento", descripcion: "Crea template de informe de progreso" }
    ]
  },
  restauracion: {
    nombre: "Restauración",
    icon: "🍽️",
    color: "from-orange-500 to-red-600",
    gpts: [
      { id: 21, nombre: "Menú del día", descripcion: "Crea menús del día equilibrados" },
      { id: 22, nombre: "Gestión reservas", descripcion: "Optimiza gestión de reservas" },
      { id: 23, nombre: "Atención cliente", descripcion: "Genera respuestas a consultas frecuentes" },
      { id: 24, nombre: "Promociones", descripcion: "Diseña promociones y ofertas especiales" },
      { id: 25, nombre: "Control costes", descripcion: "Calcula costes de platos y rentabilidad" },
      { id: 26, nombre: "Sugerencias maridaje", descripcion: "Propone maridajes de vino y comida" },
      { id: 27, nombre: "Gestión alergias", descripcion: "Identifica alérgenos en platos" },
      { id: 28, nombre: "Marketing local", descripcion: "Crea contenido para redes sociales" },
      { id: 29, nombre: "Pedidos online", descripcion: "Optimiza descripciones para delivery" },
      { id: 30, nombre: "Eventos privados", descripcion: "Diseña propuestas para eventos" }
    ]
  },
  legal: {
    nombre: "Despacho abogados",
    icon: "⚖️",
    color: "from-slate-600 to-slate-800",
    gpts: [
      { id: 31, nombre: "Primera consulta", descripcion: "Estructura consulta inicial del cliente" },
      { id: 32, nombre: "Análisis caso", descripcion: "Identifica aspectos legales clave" },
      { id: 33, nombre: "Documentación necesaria", descripcion: "Lista documentos requeridos por caso" },
      { id: 34, nombre: "Plazos legales", descripcion: "Calcula plazos procedimentales" },
      { id: 35, nombre: "Estrategia defensa", descripcion: "Outline de estrategia legal" },
      { id: 36, nombre: "Comunicación cliente", descripcion: "Redacta comunicaciones claras" },
      { id: 37, nombre: "Presupuesto honorarios", descripcion: "Calcula estimación de honorarios" },
      { id: 38, nombre: "Investigación jurisprudencia", descripcion: "Identifica precedentes relevantes" },
      { id: 39, nombre: "Checklist audiencia", descripcion: "Prepara checklist para vistas" },
      { id: 40, nombre: "Seguimiento expediente", descripcion: "Template de seguimiento de caso" }
    ]
  },
  moda: {
    nombre: "Tiendas moda/joyas",
    icon: "💎",
    color: "from-pink-500 to-rose-600",
    gpts: [
      { id: 41, nombre: "Asesoría estilo", descripcion: "Proporciona consejos de estilo personalizado" },
      { id: 42, nombre: "Lookbook temporada", descripcion: "Crea lookbook de temporada" },
      { id: 43, nombre: "Combinaciones outfit", descripcion: "Sugiere combinaciones de prendas" },
      { id: 44, nombre: "Gestión stock", descripcion: "Optimiza gestión de inventario" },
      { id: 45, nombre: "Descripciones producto", descripcion: "Redacta descripciones atractivas" },
      { id: 46, nombre: "Personal shopping", descripcion: "Guía de compra personalizada" },
      { id: 47, nombre: "Cuidado joyas", descripcion: "Instrucciones de mantenimiento" },
      { id: 48, nombre: "Tendencias", descripcion: "Analiza tendencias de moda" },
      { id: 49, nombre: "Programa fidelización", descripcion: "Diseña programa de clientes VIP" },
      { id: 50, nombre: "Eventos tienda", descripcion: "Planifica eventos y trunk shows" }
    ]
  },
  tatuaje: {
    nombre: "Estudios de Tatuaje",
    icon: "✨",
    color: "from-indigo-500 to-purple-600",
    gpts: [
      { id: 51, nombre: "Consulta diseño", descripcion: "Asesora sobre ideas de tatuaje" },
      { id: 52, nombre: "Personalización diseño", descripcion: "Adapta diseños a preferencias" },
      { id: 53, nombre: "Ubicación óptima", descripcion: "Sugiere ubicación según diseño" },
      { id: 54, nombre: "Presupuesto sesión", descripcion: "Calcula coste según tamaño/complejidad" },
      { id: 55, nombre: "Cuidados posteriores", descripcion: "Instrucciones de cuidado detalladas" },
      { id: 56, nombre: "Gestión citas", descripcion: "Optimiza agenda de sesiones" },
      { id: 57, nombre: "Portfolio digital", descripcion: "Organiza y presenta trabajos" },
      { id: 58, nombre: "Consentimiento informado", descripcion: "Genera documentos de consentimiento" },
      { id: 59, nombre: "Tendencias estilos", descripcion: "Informa sobre estilos populares" },
      { id: 60, nombre: "Retoque y mantenimiento", descripcion: "Programa seguimiento y retoques" }
    ]
  }
}

export default function SectorBasicosPage({ params }: { params: { sector: string } }) {  
    const sector = params.sector
const sectorData = basicosData[sector]

  if (!sectorData) {
    return <div className="min-h-screen flex items-center justify-center">Sector no encontrado</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/basicos" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Básicos</span>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span className="text-2xl">{sectorData.icon}</span>
            <span className="font-semibold">GPT's BÁSICOS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {sectorData.nombre}
          </h1>
          <p className="text-xl text-slate-600">
            10 asistentes especializados para tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sectorData.gpts.map((gpt: any) => (
            <div
              key={gpt.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${sectorData.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {gpt.nombre}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {gpt.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
