import { useMemo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Stethoscope, CreditCard, ClipboardList, BookOpen,
  Search, MessageSquare, Brain, Flame, Trophy,
  TrendingUp, Clock, ChevronRight, Zap, CheckCircle,
  Target, AlertCircle, GraduationCap, Heart
} from 'lucide-react'
import { useAppStore } from '../store/appStore'
import { STATIONS } from '../data/officialStations'
import { FLASHCARDS as PREMADE_FLASHCARDS } from '../data/flashcards/premadeFlashcards'
import { DailySessionModal } from '../components/Dashboard/DailySessionModal'

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Bom dia'
  if (h < 18) return 'Boa tarde'
  return 'Boa noite'
}

const QUICK_NAV = [
  { to: '/estacoes',    icon: Stethoscope, label: 'Estações',     desc: '150 casos clínicos',    from: 'from-blue-600',    to_: 'to-blue-800'    },
  { to: '/flashcards',  icon: CreditCard,  label: 'Flashcards',   desc: '200 cards temáticos',   from: 'from-violet-600',  to_: 'to-violet-800'  },
  { to: '/erros',       icon: ClipboardList,label: 'Erros',       desc: '60 erros comentados',   from: 'from-rose-600',    to_: 'to-rose-800'    },
  { to: '/referencias', icon: BookOpen,    label: 'Referências',  desc: 'Labs, critérios, fórmulas', from: 'from-amber-600', to_: 'to-amber-800' },
  { to: '/explorador',  icon: Search,      label: 'Explorador',   desc: 'Doenças por sistema',   from: 'from-teal-600',    to_: 'to-teal-800'    },
  { to: '/comunicacao', icon: MessageSquare,label: 'Comunicação', desc: '90 frases clínicas',    from: 'from-emerald-600', to_: 'to-emerald-800' },
  { to: '/simulado',   icon: GraduationCap, label: 'Simulado',    desc: 'Prova cronometrada',    from: 'from-indigo-600',  to_: 'to-indigo-800'  },
  { to: '/bem-estar',  icon: Heart,         label: 'Bem-estar',   desc: 'Pomodoro + rotina',     from: 'from-pink-600',    to_: 'to-pink-800'    },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const {
    stationHistory, flashcardResults, favoriteFlashcards, myFlashcards,
    studyStreak, dailySessionDone, checkDailySession, completeDailySession, markStudyToday
  } = useAppStore()

  const [showDaily, setShowDaily] = useState(false)

  useEffect(() => { checkDailySession() }, [])

  const stats = useMemo(() => {
    const stationsDone = new Set(stationHistory.map(h => h.stationId)).size
    const flashcardsStudied = Object.keys(flashcardResults).length
    const avgScore = stationHistory.length > 0
      ? stationHistory.reduce((a, h) => a + (h.score / h.maxScore * 100), 0) / stationHistory.length
      : 0
    return { stationsDone, flashcardsStudied, avgScore }
  }, [stationHistory, flashcardResults])

  const recentStations = useMemo(() =>
    [...stationHistory]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3)
      .map(h => ({ ...h, titulo: STATIONS.find(s => s.id === h.stationId)?.titulo || 'Estação' }))
  , [stationHistory])

  // Análise de pontos fracos por área
  const weakAreas = useMemo(() => {
    if (stationHistory.length < 2) return []
    const byArea = {}
    stationHistory.forEach(h => {
      const station = STATIONS.find(s => s.id === h.stationId)
      if (!station) return
      const area = station.area
      if (!byArea[area]) byArea[area] = { total: 0, sum: 0, count: 0 }
      byArea[area].sum += (h.score / h.maxScore) * 100
      byArea[area].count += 1
    })
    return Object.entries(byArea)
      .map(([area, d]) => ({ area, avg: d.sum / d.count, count: d.count }))
      .sort((a, b) => a.avg - b.avg)
      .slice(0, 3)
  }, [stationHistory])

  const recommendedStation = useMemo(() => {
    if (weakAreas.length === 0) return null
    const worstArea = weakAreas[0].area
    const doneIds = new Set(stationHistory.map(h => h.stationId))
    return STATIONS.find(s => s.area === worstArea && !doneIds.has(s.id))
      || STATIONS.find(s => s.area === worstArea)
  }, [weakAreas, stationHistory])

  const totalCards = PREMADE_FLASHCARDS.length + myFlashcards.length
  const stationPct = Math.round((stats.stationsDone / STATIONS.length) * 100)
  const flashPct = Math.round((stats.flashcardsStudied / totalCards) * 100)

  const handleDailyComplete = () => {
    completeDailySession()
    setShowDaily(false)
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-gray-950">
      {showDaily && (
        <DailySessionModal
          onClose={() => setShowDaily(false)}
          onComplete={handleDailyComplete}
        />
      )}

      <div className="p-4 md:p-6 space-y-5 max-w-3xl mx-auto w-full">

        {/* ── Saudação + Streak ── */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-gray-400 text-sm">{greeting()},</p>
            <h1 className="text-2xl font-bold text-white leading-tight">Revalida Clinical</h1>
          </div>
          {studyStreak > 0 && (
            <div className="flex flex-col items-center gap-0.5 bg-orange-950/50 border border-orange-700/40 rounded-2xl px-4 py-2.5 shrink-0">
              <Flame size={22} className="text-orange-400" />
              <p className="text-white font-bold text-lg leading-none">{studyStreak}</p>
              <p className="text-orange-400 text-[10px] font-medium">dias</p>
            </div>
          )}
        </div>

        {/* ── Sessão do Dia ── */}
        <div
          onClick={() => !dailySessionDone && setShowDaily(true)}
          className={`rounded-2xl p-5 border transition-all ${
            dailySessionDone
              ? 'bg-emerald-950/40 border-emerald-700/40 cursor-default'
              : 'bg-gradient-to-br from-blue-900/60 to-indigo-900/60 border-blue-700/40 cursor-pointer hover:border-blue-500/60 active:scale-[0.99]'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                dailySessionDone ? 'bg-emerald-800/60' : 'bg-blue-700/50'
              }`}>
                {dailySessionDone
                  ? <CheckCircle size={22} className="text-emerald-400" />
                  : <Zap size={22} className="text-blue-300" />
                }
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  {dailySessionDone ? 'Sessão do dia concluída!' : 'Sessão do Dia'}
                </p>
                <p className={`text-xs mt-0.5 ${dailySessionDone ? 'text-emerald-400' : 'text-blue-300'}`}>
                  {dailySessionDone
                    ? 'Volte amanhã para continuar seu streak 🔥'
                    : '10 flashcards · ~5 minutos · streak +1'
                  }
                </p>
              </div>
            </div>
            {!dailySessionDone && (
              <ChevronRight size={20} className="text-blue-400 shrink-0" />
            )}
          </div>

          {/* Mini progress dots */}
          {!dailySessionDone && (
            <div className="flex gap-1 mt-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex-1 h-1 rounded-full bg-blue-800/60" />
              ))}
            </div>
          )}
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              icon: Stethoscope, value: `${stats.stationsDone}`, label: 'Estações feitas',
              sub: `de ${STATIONS.length}`, pct: stationPct, color: 'blue'
            },
            {
              icon: TrendingUp,
              value: stats.avgScore > 0 ? `${stats.avgScore.toFixed(0)}%` : '—',
              label: 'Nota média', sub: 'nas estações',
              pct: stats.avgScore, color: stats.avgScore >= 70 ? 'green' : 'yellow'
            },
            {
              icon: CreditCard, value: `${stats.flashcardsStudied}`, label: 'Cards revistos',
              sub: `de ${totalCards}`, pct: flashPct, color: 'violet'
            },
          ].map(({ icon: Icon, value, label, sub, pct, color }) => (
            <div key={label} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 flex flex-col gap-2">
              <Icon size={18} className={`text-${color}-400`} />
              <div>
                <p className="text-xl font-bold text-white leading-none">{value}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{label}</p>
              </div>
              {pct > 0 && (
                <div className="h-1 bg-gray-800 rounded-full mt-auto">
                  <div
                    className={`h-full rounded-full bg-${color}-500`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Pontos Fracos ── */}
        {weakAreas.length >= 2 && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-400" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Seus pontos fracos</p>
            </div>

            <div className="space-y-3">
              {weakAreas.map(({ area, avg, count }) => {
                const pct = Math.round(avg)
                const color = pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-amber-500' : 'bg-red-500'
                const textColor = pct >= 70 ? 'text-green-400' : pct >= 50 ? 'text-amber-400' : 'text-red-400'
                return (
                  <div key={area} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{area}</span>
                      <span className={`text-xs font-bold ${textColor}`}>{pct}% · {count} estação{count !== 1 ? 'ões' : ''}</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full">
                      <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>

            {recommendedStation && (
              <button
                onClick={() => navigate('/estacoes')}
                className="w-full flex items-center justify-between gap-3 bg-amber-950/40 border border-amber-700/30 rounded-xl px-4 py-3 hover:bg-amber-950/60 active:scale-[0.99] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Target size={18} className="text-amber-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-amber-300 text-xs font-semibold">Recomendação</p>
                    <p className="text-white text-sm font-medium">{recommendedStation.titulo}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-amber-400 shrink-0" />
              </button>
            )}
          </div>
        )}

        {/* ── Acesso Rápido ── */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Acesso rápido</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {QUICK_NAV.map(({ to, icon: Icon, label, desc, from, to_ }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className={`text-left rounded-2xl p-4 bg-gradient-to-br ${from} ${to_} opacity-90 hover:opacity-100 active:scale-[0.97] transition-all`}
              >
                <Icon size={20} className="text-white/80 mb-2" />
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-white/60 text-xs mt-0.5">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ── Progresso Geral ── */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 space-y-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Progresso geral</p>
          {[
            { label: 'Estações concluídas', value: stats.stationsDone, max: STATIONS.length, color: 'bg-blue-500' },
            { label: 'Flashcards revisados', value: stats.flashcardsStudied, max: totalCards, color: 'bg-violet-500' },
          ].map(({ label, value, max, color }) => (
            <div key={label} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{label}</span>
                <span className="text-gray-500 text-xs">{value}/{max}</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full">
                <div
                  className={`h-full rounded-full ${color} transition-all`}
                  style={{ width: `${max > 0 ? (value / max) * 100 : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Histórico Recente ── */}
        {recentStations.length > 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Últimas estações</p>
            <div className="space-y-3">
              {recentStations.map((h, i) => {
                const pct = h.maxScore > 0 ? (h.score / h.maxScore) * 100 : 0
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Clock size={15} className="text-gray-600 shrink-0" />
                    <p className="text-sm text-gray-300 flex-1 truncate">{h.titulo}</p>
                    <span className={`text-sm font-bold shrink-0 ${pct >= 70 ? 'text-green-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {pct.toFixed(0)}%
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
            <Trophy size={36} className="mx-auto text-gray-700 mb-3" />
            <p className="text-white font-medium mb-1">Comece sua primeira estação!</p>
            <p className="text-gray-500 text-sm mb-4">Pratique com 150 estações baseadas no formato Revalida.</p>
            <button
              onClick={() => navigate('/estacoes')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Ir para Estações
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
