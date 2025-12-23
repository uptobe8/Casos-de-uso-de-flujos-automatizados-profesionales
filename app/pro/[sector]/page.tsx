
import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'

export function generateStaticParams() {
  return [
    { sector: 'inmobiliaria' },
    { sector: 'consultoria' },
    { sector: 'restauracion' },
    { sector: 'legal' },
    { sector: 'moda' },
    { sector: 'tatuaje' },
    { sector: 'clinicas' }
  ]
}

// Complete Pro GPTs data - 70 total (10 per sector x 7 sectors)
const proData: Record<string, any> = {
  inmobiliaria: {
    nombre: "Inmobiliaria",
    icon: "🏢",
    color: "from-blue-500 to-cyan-600",
    gpts: [
      { id: 61, nombre: "Análisis inversión ROI", descripcion: "Calcula rentabilidad y proyecciones de inversión inmobiliaria" },
      { id: 62, nombre: "Estrategia pricing dinámico", descripcion: "Optimiza precios según mercado y competencia" },
      { id: 63, nombre: "Due diligence automatizado", descripcion: "Verifica documentación y aspectos legales de propiedades" },
      { id: 64, nombre: "Marketing multicanal", descripcion: "Diseña campañas integradas para máxima captación" },
      { id: 65, nombre: "Gestión cartera propiedades", descripcion: "Optimiza portfolio y estrategia de ventas" },
      { id: 66, nombre: "Inteligencia mercado", descripcion: "Análisis predictivo de tendencias inmobiliarias" },
      { id: 67, nombre: "Negociación compleja", descripcion: "Estrategias avanzadas para cierres difíciles" },
      { id: 68, nombre: "Cliente premium", descripcion: "Servicio personalizado para clientes de lujo" },
      { id: 69, nombre: "Expansión internacional", descripcion: "Estrategias para mercados extranjeros" },
      { id: 70, nombre: "Automatización workflow", descripcion: "Optimiza procesos y aumenta productividad" }
    ]
  },
  consultoria: {
    nombre: "Consultoría",
    icon: "💼",
    color: "from-purple-500 to-pink-600",
    gpts: [
      { id: 71, nombre: "Transformación digital", descripcion: "Diseña roadmap completo de digitalización" },
      { id: 72, nombre: "Reestructuración organizacional", descripcion: "Optimiza estructura y procesos empresariales" },
      { id: 73, nombre: "Análisis financiero avanzado", descripcion: "Diagnóstico profundo de salud financiera" },
      { id: 74, nombre: "Estrategia innovación", descripcion: "Frameworks para innovación sistemática" },
      { id: 75, nombre: "Change management", descripcion: "Gestiona cambio organizacional efectivamente" },
      { id: 76, nombre: "M&A advisory", descripcion: "Asesoría en fusiones y adquisiciones" },
      { id: 77, nombre: "Optimización supply chain", descripcion: "Mejora eficiencia de cadena de suministro" },
      { id: 78, nombre: "ESG strategy", descripcion: "Implementa estrategia sostenibilidad" },
      { id: 79, nombre: "Crisis management", descripcion: "Protocolos para gestión de crisis" },
      { id: 80, nombre: "Scale-up strategy", descripcion: "Estrategia para escalamiento empresarial" }
    ]
  },
  restauracion: {
    nombre: "Restauración",
    icon: "🍽️",
    color: "from-orange-500 to-red-600",
    gpts: [
      { id: 81, nombre: "Ingeniería de menú", descripcion: "Optimiza menú para rentabilidad máxima" },
      { id: 82, nombre: "Revenue management", descripcion: "Maximiza ingresos por mesa y turno" },
      { id: 83, nombre: "Experiencia cliente premium", descripcion: "Diseña experiencias gastronómicas memorables" },
      { id: 84, nombre: "Gestión HORECA avanzada", descripcion: "Optimiza operaciones HORECA completas" },
      { id: 85, nombre: "Marketing gastronómico 360", descripcion: "Estrategia completa de marketing" },
      { id: 86, nombre: "Sommelería digital", descripcion: "Sistema avanzado de recomendaciones" },
      { id: 87, nombre: "Franquicia F&B", descripcion: "Desarrollo de modelo de franquicia" },
      { id: 88, nombre: "Sostenibilidad gastronómica", descripcion: "Implementa prácticas sostenibles" },
      { id: 89, nombre: "Catering corporativo", descripcion: "Gestiona grandes eventos corporativos" },
      { id: 90, nombre: "Dark kitchen optimization", descripcion: "Optimiza operación de cocinas virtuales" }
    ]
  },
  legal: {
    nombre: "Despacho abogados",
    icon: "⚖️",
    color: "from-slate-600 to-slate-800",
    gpts: [
      { id: 91, nombre: "Litigación estratégica", descripcion: "Estrategia integral para casos complejos" },
      { id: 92, nombre: "Compliance corporativo", descripcion: "Implementa sistemas de cumplimiento" },
      { id: 93, nombre: "Due diligence legal", descripcion: "Auditoría legal exhaustiva de empresas" },
      { id: 94, nombre: "M&A legal advisory", descripcion: "Asesoría legal en transacciones M&A" },
      { id: 95, nombre: "Propiedad intelectual", descripcion: "Protección avanzada de IP y marcas" },
      { id: 96, nombre: "Derecho laboral estratégico", descripcion: "Soluciones complejas laborales" },
      { id: 97, nombre: "Litigio internacional", descripcion: "Casos con jurisdicciones múltiples" },
      { id: 98, nombre: "Legal tech implementation", descripcion: "Digitalización del despacho legal" },
      { id: 99, nombre: "Mediación y arbitraje", descripcion: "Resolución alternativa de conflictos" },
      { id: 100, nombre: "Derecho digital y datos", descripcion: "Protección de datos y cumplimiento GDPR" }
    ]
  },
  moda: {
    nombre: "Tiendas moda/joyas",
    icon: "💎",
    color: "from-pink-500 to-rose-600",
    gpts: [
      { id: 101, nombre: "Retail luxury experience", descripcion: "Experiencia premium para clientes VIP" },
      { id: 102, nombre: "Visual merchandising PRO", descripcion: "Estrategia avanzada de exhibición" },
      { id: 103, nombre: "Personal shopper digital", descripcion: "Servicio personalizado omnicanal" },
      { id: 104, nombre: "Forecasting tendencias", descripcion: "Predicción de tendencias de moda" },
      { id: 105, nombre: "Omnichannel retail", descripcion: "Integración perfecta online-offline" },
      { id: 106, nombre: "Clienteling avanzado", descripcion: "CRM especializado para retail" },
      { id: 107, nombre: "Sostenibilidad moda", descripcion: "Implementa moda circular y sostenible" },
      { id: 108, nombre: "Gemología y tasación", descripcion: "Certificación y valoración de joyas" },
      { id: 109, nombre: "Private shopping events", descripcion: "Organiza eventos exclusivos VIP" },
      { id: 110, nombre: "Expansión retail", descripcion: "Estrategia de apertura de nuevas tiendas" }
    ]
  },
  tatuaje: {
    nombre: "Estudios de Tatuaje",
    icon: "✨",
    color: "from-indigo-500 to-purple-600",
    gpts: [
      { id: 111, nombre: "Diseño custom avanzado", descripcion: "Creación de diseños únicos complejos" },
      { id: 112, nombre: "Técnicas especializadas", descripcion: "Dominio de estilos y técnicas avanzadas" },
      { id: 113, nombre: "Gestión studio profesional", descripcion: "Operación completa de estudio" },
      { id: 114, nombre: "Marketing artístico", descripcion: "Promoción y branding de artista" },
      { id: 115, nombre: "Formación y mentoring", descripcion: "Programa de formación de tatuadores" },
      { id: 116, nombre: "Colaboraciones artísticas", descripcion: "Gestiona colaboraciones y eventos" },
      { id: 117, nombre: "Restauración y cover-up", descripcion: "Técnicas avanzadas de corrección" },
      { id: 118, nombre: "Biomecánico y realismo", descripcion: "Especialización en estilos complejos" },
      { id: 119, nombre: "Expansión internacional", descripcion: "Guest spots y tours internacionales" },
      { id: 120, nombre: "NFT y arte digital", descripcion: "Monetiza diseños en blockchain" }
    ]
  },
  clinicas: {
    nombre: "Clínicas dentales/estética",
    icon: "🦷",
    color: "from-teal-500 to-emerald-600",
    gpts: [
      { id: 121, nombre: "Planificación tratamiento integral", descripcion: "Diseña planes de tratamiento complejos" },
      { id: 122, nombre: "Estética dental avanzada", descripcion: "Casos de rehabilitación completa" },
      { id: 123, nombre: "Implantología digital", descripcion: "Planificación digital de implantes" },
      { id: 124, nombre: "Marketing médico especializado", descripcion: "Estrategia de captación de pacientes" },
      { id: 125, nombre: "Gestión clínica premium", descripcion: "Operación de clínica de alto standing" },
      { id: 126, nombre: "Medicina estética combinada", descripcion: "Tratamientos integrados dental-facial" },
      { id: 127, nombre: "Protocolos bioseguridad", descripcion: "Implementa estándares de seguridad" },
      { id: 128, nombre: "Financiación tratamientos", descripcion: "Gestiona opciones de financiación" },
      { id: 129, nombre: "Fidelización pacientes", descripcion: "Programa de seguimiento y retención" },
      { id: 130, nombre: "Expansión multi-sede", descripcion: "Estrategia de apertura de clínicas" }
    ]
  }
}

export default async function SectorProPage({
    params
  }: {
    params: Promise<{ sector: string }>
  }) {
    const { sector } = await params
const sectorData = proData[sector]
  
  if (!sectorData) {
    return <div className="min-h-screen flex items-center justify-center">Sector no encontrado</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/pro" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver a Pro</span>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <span className="text-2xl">{sectorData.icon}</span>
            <span className="font-semibold">GPT's PRO</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {sectorData.nombre}
          </h1>
          <p className="text-xl text-slate-600">
            10 asistentes avanzados para casos complejos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sectorData.gpts.map((gpt: any) => (
            <div
                          <Link href={`/pro/${sector}/${gpt.id}`}>
              key={gpt.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${sectorData.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {gpt.nombre}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {gpt.descripcion}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    <Zap className="w-3 h-3" />
                    PRO
                  </div>
                </div>
              </div>
                          </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
