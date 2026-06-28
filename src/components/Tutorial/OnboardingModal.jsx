import { useState } from 'react'
import {
  Stethoscope, CreditCard, ClipboardList, BookOpen,
  Search, ChevronRight, ChevronLeft, X, CheckCircle2,
  Zap, Target, Brain, Heart, Shield, Star
} from 'lucide-react'

const SLIDES = [
  {
    id: 'welcome',
    gradient: 'from-blue-600 via-blue-700 to-indigo-800',
    accent: 'bg-blue-500/20',
    icon: <Stethoscope size={48} className="text-blue-200" />,
    tag: 'Bem-vindo',
    title: 'Revalida Clinical v4.0',
    subtitle: 'Seu parceiro de estudo para o Revalida INEP.',
    features: [
      { icon: <Target size={16} />, text: '100 Estações Clínicas Oficiais' },
      { icon: <CreditCard size={16} />, text: '200 Flashcards em 11 Categorias' },
      { icon: <ClipboardList size={16} />, text: '60 Erros Comentados com Condutas' },
      { icon: <BookOpen size={16} />, text: 'Referências, Fármacos e Mnemônicos' },
    ],
  },
  {
    id: 'estacoes',
    gradient: 'from-violet-600 via-purple-700 to-purple-900',
    accent: 'bg-violet-500/20',
    icon: <Stethoscope size={48} className="text-violet-200" />,
    tag: 'Módulo 1',
    title: 'Estações Clínicas',
    subtitle: 'Simule as estações do Revalida com checklists interativos.',
    features: [
      { icon: <CheckCircle2 size={16} />, text: 'Marque itens do checklist em tempo real' },
      { icon: <Target size={16} />, text: 'Roteiro passo a passo de cada estação' },
      { icon: <Zap size={16} />, text: 'Cronômetro integrado (5 e 10 minutos)' },
      { icon: <Shield size={16} />, text: 'Destaque de pontos críticos eliminatórios' },
    ],
  },
  {
    id: 'flashcards',
    gradient: 'from-emerald-600 via-teal-700 to-teal-900',
    accent: 'bg-emerald-500/20',
    icon: <CreditCard size={48} className="text-emerald-200" />,
    tag: 'Módulo 2',
    title: 'Flashcards 360°',
    subtitle: '200 flashcards clínicos organizados por categorias e especialidade.',
    features: [
      { icon: <Zap size={16} />, text: 'Flip interativo — pergunta e resposta' },
      { icon: <Search size={16} />, text: 'Filtre por categoria, dificuldade ou especialidade' },
      { icon: <Star size={16} />, text: 'Marque favoritos para revisão rápida' },
      { icon: <Heart size={16} />, text: 'Crie seus próprios flashcards personalizados' },
    ],
  },
  {
    id: 'erros',
    gradient: 'from-rose-600 via-red-700 to-red-900',
    accent: 'bg-rose-500/20',
    icon: <ClipboardList size={48} className="text-rose-200" />,
    tag: 'Módulo 3',
    title: 'Repositório de Erros',
    subtitle: '60 erros clínicos comentados — o que não fazer na prova.',
    features: [
      { icon: <Target size={16} />, text: '7 categorias: Diagnóstico, Urgência, Ética…' },
      { icon: <Shield size={16} />, text: 'Classificação por gravidade (Grave / Moderado)' },
      { icon: <ClipboardList size={16} />, text: 'Consequência clínica de cada erro' },
      { icon: <Zap size={16} />, text: 'Dica de como evitar em cada card' },
    ],
  },
  {
    id: 'referencias',
    gradient: 'from-amber-600 via-orange-700 to-orange-900',
    accent: 'bg-amber-500/20',
    icon: <BookOpen size={48} className="text-amber-200" />,
    tag: 'Módulo 4',
    title: 'Referências Clínicas',
    subtitle: 'Consulte fármacos, exames, escalas e mnemônicos na palma da mão.',
    features: [
      { icon: <Brain size={16} />, text: 'Mnemônicos essenciais para memorizar' },
      { icon: <BookOpen size={16} />, text: 'Valores de laboratório e interpretação' },
      { icon: <Target size={16} />, text: 'Critérios diagnósticos (Roma, TIMI, Wells…)' },
      { icon: <Zap size={16} />, text: 'Fórmulas clínicas com calculadora' },
    ],
  },
  {
    id: 'ready',
    gradient: 'from-cyan-600 via-blue-700 to-indigo-800',
    accent: 'bg-cyan-500/20',
    icon: <CheckCircle2 size={48} className="text-cyan-200" />,
    tag: 'Tudo certo!',
    title: 'Você está pronto',
    subtitle: 'O app salva seu progresso automaticamente. Bons estudos!',
    features: [
      { icon: <Shield size={16} />, text: 'Dados salvos localmente no seu dispositivo' },
      { icon: <Zap size={16} />, text: 'Funciona sem internet após o carregamento' },
      { icon: <Star size={16} />, text: 'Atualizações chegam automaticamente' },
      { icon: <Heart size={16} />, text: 'Acesse o tutorial novamente em Configurações' },
    ],
  },
]

export function OnboardingModal({ onClose }) {
  const [step, setStep] = useState(0)
  const slide = SLIDES[step]
  const isLast = step === SLIDES.length - 1

  const next = () => isLast ? onClose() : setStep(s => s + 1)
  const prev = () => setStep(s => s - 1)

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4">
      <div className="relative w-full sm:max-w-md bg-gray-900 sm:rounded-2xl overflow-hidden shadow-2xl max-h-[95dvh] flex flex-col">

        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Hero com gradiente */}
        <div className={`bg-gradient-to-br ${slide.gradient} p-8 pb-10 flex flex-col items-center text-center relative overflow-hidden shrink-0`}>
          {/* Círculo decorativo de fundo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-white/5" />

          <div className={`w-20 h-20 rounded-2xl ${slide.accent} flex items-center justify-center mb-4 relative`}>
            {slide.icon}
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">{slide.tag}</span>
          <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{slide.title}</h2>
          <p className="text-white/70 text-sm leading-relaxed">{slide.subtitle}</p>
        </div>

        {/* Features */}
        <div className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-3">
            {slide.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 text-blue-400">
                  {f.icon}
                </div>
                <span className="text-gray-200 text-sm">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rodapé com navegação */}
        <div className="px-6 pb-6 pt-2 shrink-0 border-t border-gray-800">
          {/* Dots de progresso */}
          <div className="flex justify-center gap-1.5 mb-5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-700'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            {step > 0 && (
              <button
                onClick={prev}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-800 text-gray-300 text-sm font-medium hover:bg-gray-700 active:bg-gray-600 transition-colors"
              >
                <ChevronLeft size={16} /> Anterior
              </button>
            )}

            <button
              onClick={next}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-semibold transition-all active:scale-95
                bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500
                ${step > 0 ? 'flex-1' : 'w-full'}`}
            >
              {isLast ? (
                <><CheckCircle2 size={16} /> Começar a estudar</>
              ) : (
                <>Próximo <ChevronRight size={16} /></>
              )}
            </button>
          </div>

          {!isLast && (
            <button
              onClick={onClose}
              className="w-full text-center text-gray-500 text-xs mt-3 py-1 hover:text-gray-400 transition-colors"
            >
              Pular tutorial
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
