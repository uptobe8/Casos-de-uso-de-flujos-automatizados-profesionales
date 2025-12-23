"use client"

import Link from "next/link"
import { ArrowLeft, Building2, Briefcase, UtensilsCrossed, Scale, ShoppingBag, Sparkles } from "lucide-react"
import { AnimatedAvatar } from "@/components/animated-avatar"
import { AiChat } from "@/components/ai-chat"
import { useState } from "react"

const sectores = [
  {
    id: "inmobiliaria",
    nombre: "Inmobiliaria",
    descripcion: "10 asistentes para captación, valoración, anuncios, seguimiento y gestión inmobiliaria",
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
    count: 10
  },
  {
    id: "consultoria",
    nombre: "Consultoría",
    descripcion: "10 asistentes para diagnóstico, propuestas, análisis de datos e informes ejecutivos",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    count: 10
  },
  {
    id: "restauracion",
    nombre: "Restauración",
    descripcion: "10 asistentes para carta, costes, redes sociales, reseñas y control de inventario",
    icon: UtensilsCrossed,
    color: "from-orange-500 to-red-500",
    count: 10
  },
  {
    id: "legal",
    nombre: "Despacho de Abogados",
    descripcion: "10 asistentes para casos, expedientes, comunicaciones y gestión documental",
    icon: Scale,
    color: "from-slate-600 to-slate-800",
    count: 10
  },
  {
    id: "moda",
    nombre: "Tiendas de Moda y Joyas",
    descripcion: "10 asistentes para fichas de producto, atención al cliente, redes y ventas",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-500",
    count: 10
  },
  {
    id: "tatuaje",
    nombre: "Estudios de Tatuaje",
    descripcion: "10 asistentes para ideas del cliente, presupuestos, cuidados y contenido",
    icon: Sparkles,
    color: "from-indigo-500 to-purple-600",
    count: 10
  }
]

export default function BasicosPage() {
  const [isChatActive, setIsChatActive] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <AnimatedAvatar 
        isChatActive={isChatActive} 
        onAvatarClick={() => setIsChatActive(!isChatActive)} 
      />
      <AiChat isOpen={isChatActive} onClose={() => setIsChatActive(false)} />

      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">GPT's BÁSICOS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            60 Asistentes Especializados
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Automatiza tareas del día a día de forma sencilla y rápida. Selecciona tu sector:
          </p>
        </div>

        {/* Sectores Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sectores.map((sector) => {
            const Icon = sector.icon
            return (
              <Link
                key={sector.id}
                href={`/basicos/${sector.id}`}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {sector.nombre}
                    </h3>
                    <div className="inline-flex items-center gap-1 text-sm text-slate-500">
                      <span>{sector.count} GPTs</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {sector.descripcion}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-blue-600 font-medium text-sm group-hover:translate-x-1 inline-block transition-transform">
                    Ver GPTs →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
