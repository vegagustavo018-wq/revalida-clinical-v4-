import { useState, useRef } from 'react'
import { useAppStore } from '../store/appStore'
import { Sun, Moon, Trash2, PlayCircle, Download, Upload, AlertTriangle, CheckCircle2 } from 'lucide-react'

const BACKUP_KEYS = ['stationHistory','flashcardResults','favoriteFlashcards','myFlashcards','favoritePhrases','studyStreak','lastStudyDate','dailySessionDone','wellBeingChecklist','theme','sound']

function SettingRow({ label, description, children }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-gray-800 last:border-0">
      <div className="min-w-0">
        <p className="text-sm font-medium text-gray-200">{label}</p>
        {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

function Toggle({ value, onChange }) {
  return (
    <button onClick={() => onChange(!value)}
      className={`w-11 h-6 rounded-full transition-colors relative ${value ? 'bg-blue-600' : 'bg-gray-700'}`}>
      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform shadow ${value ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  )
}

export default function Settings() {
  const { theme, setTheme, sound, setSound, clearStationHistory, resetTutorial,
    stationHistory, flashcardResults, favoriteFlashcards, myFlashcards, studyStreak } = useAppStore()

  const [importStatus, setImportStatus] = useState(null) // 'success' | 'error' | null
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const fileRef = useRef(null)

  const handleExport = () => {
    const data = { version: '4.0', exported: new Date().toISOString() }
    BACKUP_KEYS.forEach(k => {
      try { data[k] = JSON.parse(localStorage.getItem(k)) } catch { data[k] = null }
    })
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `revalida-backup-${new Date().toISOString().slice(0,10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result)
        if (!data.version) throw new Error('invalid')
        BACKUP_KEYS.forEach(k => {
          if (data[k] !== undefined && data[k] !== null)
            localStorage.setItem(k, JSON.stringify(data[k]))
        })
        setImportStatus('success')
        setTimeout(() => window.location.reload(), 1200)
      } catch {
        setImportStatus('error')
        setTimeout(() => setImportStatus(null), 3000)
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const stationsDone = new Set(stationHistory.map(h => h.stationId)).size
  const cardsStudied = Object.keys(flashcardResults).length
  const hardCards = Object.values(flashcardResults).filter(r => r === 'hard').length

  return (
    <div className="overflow-y-auto h-full">
      <div className="p-4 md:p-6 space-y-5 max-w-2xl mx-auto">

        <div>
          <h2 className="text-xl font-bold text-white mb-1">Configurações</h2>
          <p className="text-gray-400 text-sm">Personalize sua experiência e gerencie seus dados.</p>
        </div>

        {/* Resumo de progresso */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Seu progresso</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Streak', value: `${studyStreak}d`, color: 'text-orange-400' },
              { label: 'Estações', value: stationsDone, color: 'text-blue-400' },
              { label: 'Cards', value: cardsStudied, color: 'text-violet-400' },
              { label: 'A revisar', value: hardCards, color: 'text-red-400' },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-gray-800 rounded-xl p-3 text-center">
                <p className={`text-xl font-bold ${color}`}>{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Aparência */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Aparência</p>
          <SettingRow label="Tema" description="Escuro recomendado para sessões longas">
            <div className="flex gap-2">
              <button onClick={() => setTheme('dark')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
                <Moon size={13} /> Escuro
              </button>
              <button onClick={() => setTheme('light')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
                <Sun size={13} /> Claro
              </button>
            </div>
          </SettingRow>
          <SettingRow label="Sons do app" description="Feedback sonoro nas estações e sessões">
            <Toggle value={sound} onChange={setSound} />
          </SettingRow>
        </div>

        {/* Backup */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Backup de dados</p>
          <SettingRow label="Exportar progresso" description="Baixa um arquivo JSON com todo seu histórico">
            <button onClick={handleExport}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors">
              <Download size={13} /> Exportar
            </button>
          </SettingRow>
          <SettingRow label="Importar progresso" description="Restaura backup de outro dispositivo">
            <div className="flex items-center gap-2">
              {importStatus === 'success' && <span className="text-green-400 text-xs flex items-center gap-1"><CheckCircle2 size={12} /> Importado!</span>}
              {importStatus === 'error' && <span className="text-red-400 text-xs">Arquivo inválido</span>}
              <button onClick={() => fileRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xs font-semibold transition-colors">
                <Upload size={13} /> Importar
              </button>
              <input ref={fileRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
            </div>
          </SettingRow>
        </div>

        {/* Dados */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Dados</p>
          <SettingRow label="Limpar histórico de estações" description={`${stationsDone} estações feitas serão apagadas`}>
            {showClearConfirm ? (
              <div className="flex items-center gap-2">
                <button onClick={() => { clearStationHistory(); setShowClearConfirm(false) }}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-semibold transition-colors">
                  Confirmar
                </button>
                <button onClick={() => setShowClearConfirm(false)}
                  className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xs transition-colors">
                  Cancelar
                </button>
              </div>
            ) : (
              <button onClick={() => setShowClearConfirm(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-red-900/40 border border-gray-700 hover:border-red-700/50 text-gray-400 hover:text-red-400 rounded-lg text-xs font-medium transition-colors">
                <Trash2 size={13} /> Limpar
              </button>
            )}
          </SettingRow>
        </div>

        {/* Ajuda */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Ajuda</p>
          <SettingRow label="Tutorial de boas-vindas" description="Rever o tour completo de funcionalidades">
            <button onClick={resetTutorial}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-medium transition-colors">
              <PlayCircle size={13} /> Ver tutorial
            </button>
          </SettingRow>
        </div>

        <div className="text-center text-gray-600 text-xs pb-4">
          Revalida Clinical v4.0 · Dados armazenados localmente no dispositivo
        </div>

      </div>
    </div>
  )
}
