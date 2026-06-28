import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Stethoscope, CreditCard, ClipboardList,
  MoreHorizontal, Search, BookOpen, MessageSquare, Brain,
  Heart, Settings, X
} from 'lucide-react'

const MAIN_NAV = [
  { to: '/', icon: LayoutDashboard, label: 'Início' },
  { to: '/estacoes', icon: Stethoscope, label: 'Estações' },
  { to: '/flashcards', icon: CreditCard, label: 'Flashcards' },
  { to: '/erros', icon: ClipboardList, label: 'Erros' },
]

const MORE_NAV = [
  { to: '/explorador', icon: Search, label: 'Explorador' },
  { to: '/referencias', icon: BookOpen, label: 'Referências' },
  { to: '/comunicacao', icon: MessageSquare, label: 'Comunicação' },
  { to: '/diagnostico', icon: Brain, label: 'Diagnóstico IA' },
  { to: '/bem-estar', icon: Heart, label: 'Bem-estar' },
  { to: '/configuracoes', icon: Settings, label: 'Config.' },
]

export function BottomNav() {
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <>
      {/* Overlay para fechar o "Mais" */}
      {moreOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {/* Sheet "Mais" */}
      {moreOpen && (
        <div className="fixed bottom-20 left-0 right-0 z-50 md:hidden px-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-sm">Mais opções</span>
              <button
                onClick={() => setMoreOpen(false)}
                className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-400"
              >
                <X size={14} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {MORE_NAV.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMoreOpen(false)}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl text-xs font-medium transition-colors
                    ${isActive
                      ? 'bg-blue-600/20 text-blue-400'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'}`
                  }
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/80 safe-bottom">
        <div className="flex items-center justify-around px-2 py-2">
          {MAIN_NAV.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl min-w-[56px] transition-all duration-150
                ${isActive
                  ? 'text-blue-400'
                  : 'text-gray-500 active:text-gray-300'}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-blue-600/20' : ''}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-medium leading-none">{label}</span>
                </>
              )}
            </NavLink>
          ))}

          {/* Botão Mais */}
          <button
            onClick={() => setMoreOpen(v => !v)}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl min-w-[56px] transition-all duration-150
              ${moreOpen ? 'text-blue-400' : 'text-gray-500 active:text-gray-300'}`}
          >
            <div className={`p-1.5 rounded-xl transition-all ${moreOpen ? 'bg-blue-600/20' : ''}`}>
              <MoreHorizontal size={20} />
            </div>
            <span className="text-[10px] font-medium leading-none">Mais</span>
          </button>
        </div>
      </nav>
    </>
  )
}
