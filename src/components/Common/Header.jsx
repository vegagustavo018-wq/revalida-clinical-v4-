import { Sun, Moon } from 'lucide-react'
import { useAppStore } from '../../store/appStore'

const PAGE_TITLES = {
  '/': 'Dashboard',
  '/explorador': 'Explorador',
  '/estacoes': 'Estações',
  '/referencias': 'Referências',
  '/flashcards': 'Flashcards',
  '/comunicacao': 'Comunicação',
  '/diagnostico': 'Diagnóstico IA',
  '/erros': 'Repositório de Erros',
  '/bem-estar': 'Bem-estar',
  '/configuracoes': 'Configurações',
}

export function Header({ pathname }) {
  const { theme, toggleTheme } = useAppStore()
  const title = PAGE_TITLES[pathname] || 'Revalida Clinical'

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-gray-700/80 bg-gray-900/90 backdrop-blur shrink-0">
      {/* Logo visível apenas no mobile (sidebar oculta) */}
      <div className="flex items-center gap-2 md:hidden">
        <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-xs">R</span>
        </div>
        <span className="text-white font-semibold text-base">{title}</span>
      </div>

      {/* Título normal no desktop */}
      <h1 className="hidden md:block text-white font-semibold text-lg">{title}</h1>

      {/* Ações */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 active:bg-gray-600 transition-colors"
          title="Alternar tema"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
          R
        </div>
      </div>
    </header>
  )
}
