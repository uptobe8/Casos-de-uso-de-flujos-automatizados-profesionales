import Link from 'next/link'
import { ArrowLeft, Sparkles, Zap, Target, CheckCircle2 } from 'lucide-react'

interface GPTDetail {
  id: number
  slug: string
  nombre: string
  descripcionCorta: string
  descripcionCompleta: string
  ejemplo: string
}

const proData: Record<string, { nombre: string, icon: string, color: string, gpts: GPTDetail[] }> = {
  inmobiliaria: {
    nombre: 'Inmobiliaria',
    icon: '🏠',
    color: 'from-blue-500 to-cyan-600',
    gpts: [
      {
        id: 61,
        slug: 'analisis-inversion-roi',
        nombre: 'Análisis inversión ROI',
        descripcionCorta: 'Calcula rentabilidad y proyecciones de inversión inmobiliaria',
        descripcionCompleta: 'Sistema avanzado que analiza la viabilidad de inversiones inmobiliarias, calculando el retorno de inversión (ROI), flujo de caja proyectado, y comparativas con otras oportunidades del mercado.',
        ejemplo: 'Analiza una propiedad de €300,000 con rendimiento esperado del 7% anual'
      },
    ]
  }
}

export async function generateStaticParams() {
  const params: { sector: string, gptId: string }[] = []
  
  Object.entries(proData).forEach(([sectorKey, sectorData]) => {
    sectorData.gpts.forEach((gpt) => {
      params.push({
        sector: sectorKey,
        gptId: gpt.id.toString()
      })
    })
  })
  
  return params
}

export default async function GPTDetailPage({
  params
}: {
  params: Promise<{ sector: string, gptId: string }>
}) {
  const { sector, gptId } = await params
  const sectorData = proData[sector]
  
  if (!sectorData) {
    return <div className="min-h-screen flex items-center justify-center">Sector no encontrado</div>
  }
  
  const gpt = sectorData.gpts.find(g => g.id.toString() === gptId)
  
  if (!gpt) {
    return <div className="min-h-screen flex items-center justify-center">GPT no encontrado</div>
  }
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href={`/pro/${sector}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al sector</span>
        </Link>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-100">
          <div className="flex items-start gap-6 mb-8">
            <div className={`w-20 h-20 bg-gradient-to-br ${sectorData.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <Zap className="w-10 h-10 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                GPT PRO
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{gpt.nombre}</h1>
              <p className="text-xl text-slate-600">{gpt.descripcionCorta}</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-slate-900">Descripción Completa</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">{gpt.descripcionCompleta}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Ejemplo de Uso</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg italic">"{gpt.ejemplo}"</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
