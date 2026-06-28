import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Stethoscope, BookOpen, FlaskConical,
  MessageSquare, CreditCard, ClipboardList, Search,
  Heart, Settings, ChevronLeft, ChevronRight, Brain
} from 'lucide-react'
import { useState } from 'react'

const NAV = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/explorador', icon: Search, label: 'Explorador' },
  { to: '/estacoes', icon: Stethoscope, label: 'Estações' },
  { to: '/referencias', icon: BookOpen, label: 'Referências' },
  { to: '/flashcards', icon: CreditCard, label: 'Flashcards' },
  { to: '/comunicacao', icon: MessageSquare, label: 'Comunicação' },
  { to: '/diagnostico', icon: Brain, label: 'Diagnóstico IA' },
  { to: '/erros', icon: ClipboardList, label: 'Erros Comuns' },
  { to: '/bem-estar', icon: Heart, label: 'Bem-estar' },
  { to: '/configuracoes', icon: Settings, label: 'Configurações' },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`relative hidden md:flex flex-col bg-gray-900 border-r border-gray-700 transition-all duration-300 shrink-0
      ${collapsed ? 'w-16' : 'w-56'}`}>
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-gray-700 ${collapsed ? 'justify-center' : ''}`}>
        <div className="w-8 h-8 bg-clinical-600 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">R</span>
        </div>
        {!collapsed && (
          <div>
            <div className="text-white font-bold text-sm leading-tight">Revalida</div>
            <div className="text-clinical-400 text-xs">Clinical v4.0</div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 overflow-y-auto">
        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm font-medium transition-colors mb-0.5
              ${isActive
                ? 'bg-clinical-600/20 text-clinical-400 border border-clinical-600/30'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`
            }
          >
            <Icon size={18} className="shrink-0" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-700 border border-gray-600
          rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-colors z-10"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  )
}
