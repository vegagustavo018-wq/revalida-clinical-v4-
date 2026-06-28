import { useAppStore } from '../store/appStore'
import { Card } from '../components/UI/Card'
import { Sun, Moon, Trash2, PlayCircle } from 'lucide-react'
import { Button } from '../components/UI/Button'

export default function Settings() {
  const { theme, setTheme, sound, setSound, clearStationHistory, resetTutorial } = useAppStore()

  return (
    <div className="overflow-y-auto h-full p-6 space-y-6 max-w-2xl">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Configurações</h2>
        <p className="text-gray-400 text-sm">Personalize sua experiência de estudo.</p>
      </div>

      <Card className="p-5 space-y-4">
        <h3 className="text-white font-semibold">Aparência</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-200 text-sm font-medium">Tema</div>
            <div className="text-gray-400 text-xs">Escuro recomendado para estudos noturnos</div>
          </div>
          <div className="flex gap-2">
            <Button
              variant={theme === 'dark' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setTheme('dark')}
            >
              <Moon size={14} /> Escuro
            </Button>
            <Button
              variant={theme === 'light' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setTheme('light')}
            >
              <Sun size={14} /> Claro
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-5 space-y-4">
        <h3 className="text-white font-semibold">Áudio</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-200 text-sm font-medium">Sons do app</div>
            <div className="text-gray-400 text-xs">Feedback sonoro nas estações e quiz</div>
          </div>
          <button
            onClick={() => setSound(!sound)}
            className={`w-12 h-6 rounded-full transition-colors relative ${sound ? 'bg-clinical-600' : 'bg-gray-600'}`}
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${sound ? 'translate-x-7' : 'translate-x-1'}`} />
          </button>
        </div>
      </Card>

      <Card className="p-5 space-y-4">
        <h3 className="text-white font-semibold">Dados</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-200 text-sm font-medium">Limpar histórico de estações</div>
            <div className="text-gray-400 text-xs">Remove todo o histórico de sessões anteriores</div>
          </div>
          <Button variant="danger" size="sm" onClick={clearStationHistory}>
            <Trash2 size={14} /> Limpar
          </Button>
        </div>
      </Card>

      <Card className="p-5 space-y-4">
        <h3 className="text-white font-semibold">Ajuda</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-200 text-sm font-medium">Tutorial de boas-vindas</div>
            <div className="text-gray-400 text-xs">Rever o tour de funcionalidades do app</div>
          </div>
          <Button variant="secondary" size="sm" onClick={resetTutorial}>
            <PlayCircle size={14} /> Ver tutorial
          </Button>
        </div>
      </Card>

      <Card className="p-5">
        <div className="text-gray-500 text-xs text-center">
          Revalida Clinical v4.0 — Todos os dados são armazenados localmente no seu dispositivo.
        </div>
      </Card>
    </div>
  )
}
