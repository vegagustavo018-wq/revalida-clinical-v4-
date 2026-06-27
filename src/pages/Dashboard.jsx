import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, MessageSquare, Stethoscope, FlaskConical, Zap, Brain, Target, TrendingUp, Clock } from 'lucide-react'
import { useAppStore } from '../store/appStore'
import { STATIONS } from '../data/officialStations'
import { FLASHCARDS as PREMADE_FLASHCARDS } from '../data/flashcards/premadeFlashcards'

function StatCard({ icon: Icon, label, value, sub, color = 'clinical' }) {
  const colors = {
    clinical: 'bg-clinical-600/20 text-clinical-400',
    green: 'bg-green-600/20 text-green-400',
    purple: 'bg-purple-600/20 text-purple-400',
    yellow: 'bg-yellow-600/20 text-yellow-400',
    red: 'bg-red-600/20 text-red-400',
  }
  return (
    <div className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${colors[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
      {sub && <p className="text-xs text-gray-600 mt-1">{sub}</p>}
    </div>
  )
}

function QuickNav({ to, icon: Icon, label, desc, color }) {
  const navigate = useNavigate()
  const colors = {
    blue: 'hover:border-blue-500/50 hover:bg-blue-900/10',
    green: 'hover:border-green-500/50 hover:bg-green-900/10',
    purple: 'hover:border-purple-500/50 hover:bg-purple-900/10',
    yellow: 'hover:border-yellow-500/50 hover:bg-yellow-900/10',
    orange: 'hover:border-orange-500/50 hover:bg-orange-900/10',
    red: 'hover:border-red-500/50 hover:bg-red-900/10',
  }
  return (
    <button onClick={() => navigate(to)}
      className={`text-left bg-gray-800 border border-gray-700 rounded-2xl p-4 transition-all ${colors[color]}`}>
      <Icon className={`w-6 h-6 mb-2 text-${color}-400`} />
      <p className="font-semibold text-white text-sm">{label}</p>
      <p className="text-xs text-gray-500 mt-1">{desc}</p>
    </button>
  )
}

function ProgressBar({ label, value, max, color = 'bg-clinical-600' }) {
  const pct = max > 0 ? (value / max) * 100 : 0
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{label}</span>
        <span className="text-gray-500">{value}/{max}</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full">
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { stationHistory, flashcardResults, favoriteFlashcards, favoritePhrases, myFlashcards } = useAppStore()

  const stats = useMemo(() => {
    const stationsDone = new Set(stationHistory.map(h => h.stationId)).size
    const flashcardsStudied = Object.keys(flashcardResults).length
    const avgScore = stationHistory.length > 0
      ? stationHistory.reduce((a, h) => a + (h.score / h.maxScore * 100), 0) / stationHistory.length
      : 0
    return { stationsDone, flashcardsStudied, avgScore, favFl: favoriteFlashcards.length, favPhr: favoritePhrases.length }
  }, [stationHistory, flashcardResults, favoriteFlashcards, favoritePhrases])

  const recentStations = useMemo(() => {
    return [...stationHistory]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3)
      .map(h => {
        const station = STATIONS.find(s => s.id === h.stationId)
        return { ...h, titulo: station?.titulo || 'Estação' }
      })
  }, [stationHistory])

  const totalCards = PREMADE_FLASHCARDS.length + myFlashcards.length

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-clinical-900 to-gray-800 rounded-2xl border border-clinical-700/40 p-6">
          <h1 className="text-2xl font-bold text-white mb-1">Revalida Clinical v4.0</h1>
          <p className="text-clinical-300 text-sm">Sua plataforma de preparação para o Revalida 2ª fase.</p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="text-center"><p className="text-xl font-bold text-white">{STATIONS.length}</p><p className="text-xs text-gray-400">Estações</p></div>
            <div className="w-px bg-gray-700" />
            <div className="text-center"><p className="text-xl font-bold text-white">{totalCards}</p><p className="text-xs text-gray-400">Flashcards</p></div>
            <div className="w-px bg-gray-700" />
            <div className="text-center"><p className="text-xl font-bold text-white">90</p><p className="text-xs text-gray-400">Frases</p></div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard icon={Target} label="Estações feitas" value={stats.stationsDone} sub={`de ${STATIONS.length} disponíveis`} color="clinical" />
          <StatCard icon={TrendingUp} label="Nota média" value={stats.avgScore > 0 ? `${stats.avgScore.toFixed(0)}%` : '—'} sub="nas estações" color={stats.avgScore >= 70 ? 'green' : 'yellow'} />
          <StatCard icon={Zap} label="Flashcards estudados" value={stats.flashcardsStudied} sub={`de ${totalCards} disponíveis`} color="purple" />
          <StatCard icon={BookOpen} label="Flashcards favoritos" value={stats.favFl} color="yellow" />
          <StatCard icon={MessageSquare} label="Frases favoritas" value={stats.favPhr} color="green" />
          <StatCard icon={Brain} label="Flashcards criados" value={myFlashcards.length} sub="por você" color="red" />
        </div>

        {/* Quick navigation */}
        <div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Acesso rápido</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <QuickNav to="/estacoes" icon={Target} label="Praticar Estação" desc="Simulação cronometrada" color="blue" />
            <QuickNav to="/flashcards" icon={Zap} label="Estudar Flashcards" desc="Modo de revisão ativo" color="purple" />
            <QuickNav to="/comunicacao" icon={MessageSquare} label="Hub de Comunicação" desc="90 frases clínicas" color="green" />
            <QuickNav to="/explorador" icon={Brain} label="Explorar Doenças" desc="Navegação por sistemas" color="yellow" />
            <QuickNav to="/referencias" icon={FlaskConical} label="Referências" desc="Labs, critérios, fórmulas" color="orange" />
            <QuickNav to="/diagnostico" icon={Stethoscope} label="IA Diagnóstica" desc="Diagnóstico assistido por IA" color="red" />
          </div>
        </div>

        {/* Progress */}
        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Progresso</h2>
          <div className="space-y-4">
            <ProgressBar label="Estações concluídas" value={stats.stationsDone} max={STATIONS.length} color="bg-clinical-600" />
            <ProgressBar label="Flashcards revisados" value={stats.flashcardsStudied} max={totalCards} color="bg-purple-600" />
          </div>
        </div>

        {/* Recent stations */}
        {recentStations.length > 0 && (
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Últimas estações</h2>
            <div className="space-y-3">
              {recentStations.map((h, i) => {
                const pct = h.maxScore > 0 ? (h.score / h.maxScore) * 100 : 0
                return (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                      <p className="text-sm text-gray-300 truncate">{h.titulo}</p>
                    </div>
                    <span className={`text-sm font-bold shrink-0 ${pct >= 70 ? 'text-green-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {pct.toFixed(0)}%
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {recentStations.length === 0 && (
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 text-center">
            <p className="text-4xl mb-3">🎯</p>
            <p className="text-white font-medium mb-1">Comece sua primeira estação!</p>
            <p className="text-gray-500 text-sm">Pratique com 15 estações baseadas no formato Revalida.</p>
          </div>
        )}
      </div>
    </div>
  )
}
