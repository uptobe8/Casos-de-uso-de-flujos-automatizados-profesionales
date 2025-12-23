"use client"

import Link from "next/link"
import { AnimatedAvatar } from "@/components/animated-avatar"
import { AiChat } from "@/components/ai-chat"
import { useState } from "react"
import { Zap, Sparkles } from "lucide-react"

export default function Home() {
  const [isChatActive, setIsChatActive] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <AnimatedAvatar 
        isChatActive={isChatActive} 
        onAvatarClick={() => setIsChatActive(!isChatActive)} 
      />
      <AiChat isOpen={isChatActive} onClose={() => setIsChatActive(false)} />

      {/* Header */}
      <div className="container mx-auto px-4 pt-8 pb-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
          Flujos Automatizados
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Casos de uso profesionales con IA
        </p>
      </div>

      {/* Main Selection Cards */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* GPT's BÁSICOS */}
          <Link href="/basicos">
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  GPT's BÁSICOS
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  60 asistentes especializados por sector para automatizar tareas del día a día de forma sencilla y rápida
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Inmobiliaria (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Consultoría (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Restauración (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Despacho de abogados (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Tiendas de moda y joyas (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Estudios de tatuaje (10)</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Ver todos los GPT's →
                  </span>
                  <span className="text-2xl font-bold text-blue-600">60</span>
                </div>
              </div>
            </div>
          </Link>

          {/* GPT's PRO */}
          <Link href="/pro">
            <div className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-400">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                  GPT's PRO
                </h2>
                <p className="text-purple-100 text-lg leading-relaxed">
                  70 flujos avanzados con automatizaciones internas, acciones rápidas y configuraciones óptimas
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Inmobiliaria (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Consultoría (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Restauración (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Despacho de abogados (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Tiendas de moda y joyas (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Estudios de tatuaje (10)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Clínicas dentales o estética (10)</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold group-hover:translate-x-2 transition-transform">
                    Ver todos los GPT's →
                  </span>
                  <span className="text-2xl font-bold text-white">70</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-slate-600">
          Flujos automatizados basados en mejores prácticas de IA generativa.
        </p>
      </div>
    </main>
  )
}
