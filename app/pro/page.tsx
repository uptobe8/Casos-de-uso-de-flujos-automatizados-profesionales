'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const sectors = [
  {
    id: "inmobiliaria",
    nombre: "Inmobiliaria",
    descripcion: "10 asistentes PRO para captación, valoraciones y cierre de ventas",
    icon: "🏢",
    color: "from-blue-500 to-cyan-600",
    count: 10
  },
  {
    id: "consultoria",
    nombre: "Consultoría",
    descripcion: "10 asistentes PRO para estrategia, análisis y propuestas",
    icon: "💼",
    color: "from-purple-500 to-pink-600",
    count: 10
  },
  {
    id: "restauracion",
    nombre: "Restauración",
    descripcion: "10 asistentes PRO para gestión avanzada y fidelización",
    icon: "🍽️",
    color: "from-orange-500 to-red-600",
    count: 10
  },
  {
    id: "legal",
    nombre: "Despacho abogados",
    descripcion: "10 asistentes PRO para casos complejos y gestión legal",
    icon: "⚖️",
    color: "from-slate-600 to-slate-800",
    count: 10
  },
  {
    id: "moda",
    nombre: "Tiendas moda/joyas",
    descripcion: "10 asistentes PRO para marketing y experiencia premium",
    icon: "💎",
    color: "from-pink-500 to-rose-600",
    count: 10
  },
  {
    id: "tatuaje",
    nombre: "Estudios de Tatuaje",
    descripcion: "10 asistentes PRO para diseño personalizado y gestión",
    icon: "✨",
    color: "from-indigo-500 to-purple-600",
    count: 10
  },
  {
    id: "clinicas",
    nombre: "Clínicas dentales/estética",
    descripcion: "10 asistentes PRO para tratamientos y atención especializada",
    icon: "🦷",
    color: "from-teal-500 to-emerald-600",
    count: 10
  }
]

export default function ProPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">GPT's PRO</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Casos de uso profesionales avanzados
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluciones PRO especializadas por sector profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              href={`/pro/${sector.id}`}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center mb-4 text-3xl`}>
                {sector.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {sector.nombre}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {sector.descripcion}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-blue-600 font-medium text-sm group-hover:translate-x-1 inline-block transition-transform">
                  Ver GPTs →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
