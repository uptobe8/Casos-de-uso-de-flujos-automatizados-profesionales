import Link from 'next/link'
import { ArrowLeft, Sparkles, FileText, Target, Lightbulb } from 'lucide-react'

interface GPTDetail {
  id: number
  slug: string
  nombre: string
  descripcionCorta: string
  descripcionCompleta: string
  ejemplo: string
}

const basicosGPTsData: Record<string, { nombre: string, icon: string, color: string, gpts: GPTDetail[] }> = {
  inmobiliaria: {
    nombre: "Inmobiliaria",
    icon: "🏠",
    color: "from-blue-500 to-cyan-600",
    gpts: [
      {
        id: 1,
        slug: "captacion-valoracion",
        nombre: "Asistente para Captación y Valoración de Inmuebles",
        descripcionCorta: "Crea mensajes personalizados para captar propiedades",
        descripcionCompleta: "El usuario le da zona, metros, estado, extras y precios de referencia (si los tiene en documentos), y el asistente propone una valoración orientativa y qué preguntar al propietario.",
        ejemplo: "Valórame un piso de 90m² en {zona} con ascensor y reforma parcial"
      },
      {
        id: 2,
        slug: "crear-anuncios",
        nombre: "Asistente para Crear Anuncios de Propiedades",
        descripcionCorta: "Genera informes de valoración profesionales",
        descripcionCompleta: "Con los datos del inmueble y el estilo de la agencia (en documentos subidos), redacta títulos y descripciones para portales y redes, destacando puntos fuertes y evitando promesas.",
        ejemplo: "Escríbeme el anuncio para Idealista con tono premium"
      },
      {
        id: 3,
        slug: "guiones-llamada",
        nombre: "Asistente para Guiones de Llamada y Seguimiento de Leads",
        descripcionCorta: "Cualifica clientes potenciales automáticamente",
        descripcionCompleta: "Crea guiones para primera llamada, preguntas clave, respuestas a objeciones y mensajes de seguimiento por WhatsApp/email.",
        ejemplo: "Hazme un guion para un lead que pide rebaja"
      },
      {
        id: 4,
        slug: "agenda-visitas",
        nombre: "Asistente para Agenda de Visitas y Confirmaciones",
        descripcionCorta: "Crea scripts para tours virtuales personalizados",
        descripcionCompleta: "El usuario le da horarios disponibles, dirección y perfil del interesado, y el asistente genera mensajes de confirmación, recordatorios y checklist de visita.",
        ejemplo: "Prepara mensaje de confirmación para visita mañana a las 18:00"
      },
      {
        id: 5,
        slug: "informe-visita",
        nombre: "Asistente para Informe de Visita y Objeciones",
        descripcionCorta: "Proporciona estrategias de negociación",
        descripcionCompleta: "Tras la visita, el usuario pega notas y el asistente las convierte en resumen, objeciones, próximos pasos y propuesta de seguimiento.",
        ejemplo: "Te pego notas de visita, sácalo en un informe corto"
      },
      {
        id: 6,
        slug: "comparativa-mercado",
        nombre: "Asistente para Comparativa de Mercado por Zona",
        descripcionCorta: "Genera checklist de documentación necesaria",
        descripcionCompleta: "Con listados o informes subidos (precios/m², tiempos de venta), responde preguntas y genera conclusiones claras por barrio.",
        ejemplo: "¿Cómo está el precio medio en {zona} y qué tendencia ves?"
      },
      {
        id: 7,
        slug: "checklist-documentacion",
        nombre: "Asistente para Checklist de Documentación (venta/alquiler)",
        descripcionCorta: "Crea descripciones atractivas de propiedades",
        descripcionCompleta: "Usando documentos internos de la agencia, entrega lista de papeles, orden recomendado y avisos de falta de información.",
        ejemplo: "¿Qué documentos necesito para alquilar a un inquilino nuevo?"
      },
      {
        id: 8,
        slug: "contenidos-redes",
        nombre: "Asistente para Contenidos de Redes de Propiedades",
        descripcionCorta: "Automatiza el seguimiento post-visita",
        descripcionCompleta: "Crea ideas de reels, carruseles y copies basados en el catálogo (en documentos) y el calendario de la semana.",
        ejemplo: "Dame 10 ideas de reels con gancho para captar propietarios"
      },
      {
        id: 9,
        slug: "plantillas-mensajes",
        nombre: "Asistente para Plantillas de Mensajes (propietario/inquilino/comprador)",
        descripcionCorta: "Genera informes de análisis de mercado",
        descripcionCompleta: "Genera textos listos para enviar según situación (oferta, reserva, incidencias) con tono de marca.",
        ejemplo: "Mensaje para pedir documentación a un inquilino sin sonar agresivo"
      },
      {
        id: 10,
        slug: "informe-resultados",
        nombre: "Asistente para Informe de Resultados (leads/visitas/cierres)",
        descripcionCorta: "Asiste en el proceso de cierre de venta",
        descripcionCompleta: "El usuario sube un Excel/CSV con datos de actividad y el asistente genera resumen semanal con números y recomendaciones.",
        ejemplo: "Con este Excel, haz el informe semanal y 3 mejoras"
      }
    ]
  }
  // Más sectores se agregarán aquí...
}

export default async function GPTDetailPage({
  params
}: {
  params: Promise<{ sector: string, gptId: string }>
}) {
  const { sector, gptId } = await params
  const sectorData = basicosGPTsData[sector]
  
  if (!sectorData) {
    return <div className="min-h-screen flex items-center justify-center">Sector no encontrado</div>
  }

  const gpt = sectorData.gpts.find(g => g.slug === gptId)
  
  if (!gpt) {
    return <div className="min-h-screen flex items-center justify-center">GPT no encontrado</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href={`/basicos/${sector}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a {sectorData.nombre}</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-start gap-6 mb-8">
            <div className={`w-20 h-20 bg-gradient-to-br ${sectorData.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-3">
                <span className="text-lg">{sectorData.icon}</span>
                <span className="font-semibold">GPT BÁSICO</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {gpt.nombre}
              </h1>
              <p className="text-lg text-slate-600">
                {gpt.descripcionCorta}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Descripción Completa</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                {gpt.descripcionCompleta}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Ejemplo de Uso</h3>
              </div>
              <p className="text-slate-700 italic">
                "{gpt.ejemplo}"
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <Link href={`/basicos/${sector}`} className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl">
                Ver más GPTs de {sectorData.nombre}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
