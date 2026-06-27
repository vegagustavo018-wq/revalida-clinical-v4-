import { Sun, Moon, Bell } from 'lucide-react'
import { useAppStore } from '../../store/appStore'

const PAGE_TITLES = {
  '/': 'Dashboard',
  '/explorador': 'Explorador de Patologias',
  '/estacoes': 'Estações Oficiais',
  '/referencias': 'Referências Clínicas',
  '/flashcards': 'Flashcards 360°',
  '/comunicacao': 'Communication Hub',
  '/diagnostico': 'Diagnóstico com IA',
  '/erros': 'Repositório de Erros',
  '/bem-estar': 'Bem-estar & Rotina',
  '/configuracoes': 'Configurações',
}

export function Header({ pathname }) {
  const { theme, toggleTheme } = useAppStore()
  const title = PAGE_TITLES[pathname] || 'Revalida Clinical'

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gray-900/80 backdrop-blur shrink-0">
      <h1 className="text-white font-semibold text-lg">{title}</h1>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          title="Alternar tema"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
          <Bell size={18} />
        </button>
        <div className="w-8 h-8 rounded-full bg-clinical-600 flex items-center justify-center text-white text-sm font-bold ml-1">
          M
        </div>
      </div>
    </header>
  )
}
