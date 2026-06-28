import { useState, useEffect, useRef, useMemo } from 'react'
import { Timer, CheckSquare, Square, ChevronRight, RotateCcw, AlertTriangle, Search, BookOpen, RefreshCw, Star } from 'lucide-react'
import { useAppStore } from '../store/appStore'
import { STATIONS } from '../data/officialStations'
import { AREA_COLOR } from '../utils/areaColors'

const NIVEIS = ['Todos', 'Fundamental', 'Intermediário', 'Avançado']

function StationList({ onSelect }) {
  const [tab, setTab] = useState('todas') // 'todas' | 'favoritos' | 'revisar'
  const [filter, setFilter] = useState('Todas')
  const [nivel, setNivel] = useState('Todos')
  const {
    stationHistory,
    stationSearch: search, setStationSearch: setSearch,
    favoriteStations, toggleFavoriteStation,
  } = useAppStore()
  const areas = ['Todas', ...new Set(STATIONS.map(s => s.area))]

  const toReview = useMemo(() => {
    const byStation = {}
    stationHistory.forEach(h => {
      const pct = h.maxScore > 0 ? (h.score / h.maxScore) * 100 : 0
      if (!byStation[h.stationId] || pct < byStation[h.stationId].pct) {
        byStation[h.stationId] = { pct, date: h.date }
      }
    })
    return STATIONS.filter(s => byStation[s.id] && byStation[s.id].pct < 70)
      .map(s => ({ ...s, pct: Math.round(byStation[s.id].pct) }))
      .sort((a, b) => a.pct - b.pct)
  }, [stationHistory])

  const filtered = useMemo(() => {
    if (tab === 'revisar') return toReview
    if (tab === 'favoritos') return STATIONS.filter(s => favoriteStations.includes(s.id))
    const q = search.toLowerCase()
    return STATIONS.filter(s => {
      const matchArea = filter === 'Todas' || s.area === filter
      const matchNivel = nivel === 'Todos' || s.nivel === nivel
      const matchSearch = !q || s.titulo.toLowerCase().includes(q) || s.area.toLowerCase().includes(q) || s.enunciado.toLowerCase().includes(q) || s.nivel.toLowerCase().includes(q)
      return matchArea && matchNivel && matchSearch
    })
  }, [filter, nivel, search, tab, toReview, favoriteStations])

  const tabBtn = (id, label, icon, color, badge) => (
    <button onClick={() => setTab(id)}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${tab === id ? `${color} text-white` : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
      {icon} {label}
      {badge > 0 && (
        <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${tab === id ? 'bg-white/20' : 'bg-gray-700 text-gray-400'}`}>{badge}</span>
      )}
    </button>
  )

  return (
    <div className="space-y-4">
      {/* Abas */}
      <div className="flex gap-2 flex-wrap">
        {tabBtn('todas', 'Todas', <BookOpen size={14} />, 'bg-clinical-600', 0)}
        {tabBtn('favoritos', 'Favoritas', <Star size={14} />, 'bg-yellow-600', favoriteStations.length)}
        {tabBtn('revisar', 'Revisar erros', <RefreshCw size={14} />, 'bg-red-600', toReview.length)}
      </div>

      {tab === 'todas' && (
        <>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar estação por tema, área ou palavra-chave..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-clinical-500"
            />
          </div>
          {/* Filtro de dificuldade */}
          <div className="flex gap-2 flex-wrap">
            {NIVEIS.map(n => (
              <button key={n} onClick={() => setNivel(n)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${nivel === n ? 'bg-purple-700 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>
                {n}
              </button>
            ))}
          </div>
          {/* Filtro de área */}
          <div className="flex gap-2 flex-wrap">
            {areas.map(a => (
              <button key={a} onClick={() => setFilter(a)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filter === a ? 'bg-clinical-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>
                {a}
              </button>
            ))}
          </div>
        </>
      )}

      {tab === 'favoritos' && favoriteStations.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          <Star size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">Nenhuma estação favoritada ainda.</p>
          <p className="text-xs mt-1">Toque na estrela em qualquer estação para salvar aqui.</p>
        </div>
      )}

      {tab === 'revisar' && toReview.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          <RefreshCw size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">Nenhuma estação abaixo de 70% ainda.</p>
          <p className="text-xs mt-1">Pratique mais estações para ver aqui o que revisar!</p>
        </div>
      )}

      <p className="text-xs text-gray-500">{filtered.length} estação{filtered.length !== 1 ? 'ões' : ''}</p>
      <div className="space-y-3">
        {filtered.map(s => {
          const done = stationHistory.some(h => h.stationId === s.id)
          const isFav = favoriteStations.includes(s.id)
          const reviewPct = tab === 'revisar' ? s.pct : null
          return (
            <div key={s.id} className="relative group">
              <button onClick={() => onSelect(s)}
                className="w-full text-left bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-clinical-600 rounded-xl p-4 transition-all pr-12">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${AREA_COLOR[s.area] || 'bg-gray-700 text-gray-300'}`}>{s.area}</span>
                      <span className="text-xs text-gray-500">{s.nivel}</span>
                      <span className="text-xs text-gray-500">⏱ {s.tempo} min</span>
                      {done && !reviewPct && <span className="text-xs bg-green-900/40 text-green-400 px-2 py-0.5 rounded-full">✓ Feita</span>}
                      {reviewPct !== null && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${reviewPct < 50 ? 'bg-red-900/40 text-red-400' : 'bg-yellow-900/40 text-yellow-400'}`}>
                          {reviewPct}% — revisar
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-white">{s.titulo}</p>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{s.enunciado.slice(0, 100)}...</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 ml-3 shrink-0 mt-1" />
                </div>
              </button>
              <button
                onClick={e => { e.stopPropagation(); toggleFavoriteStation(s.id) }}
                className={`absolute top-3 right-10 p-1.5 rounded-lg transition-colors ${isFav ? 'text-yellow-400' : 'text-gray-600 hover:text-yellow-400'}`}>
                <Star size={16} fill={isFav ? 'currentColor' : 'none'} />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const READING_TIME = 120 // 2 minutos para ler o enunciado

function StationSession({ station, onBack }) {
  const { addStationHistory: addStationResult } = useAppStore()
  const [phase, setPhase] = useState('reading') // reading | active | results
  const [checked, setChecked] = useState({})
  const [timeLeft, setTimeLeft] = useState(station.tempo * 60)
  const [readTimeLeft, setReadTimeLeft] = useState(READING_TIME)
  const [running, setRunning] = useState(false)
  const timerRef = useRef(null)
  const readTimerRef = useRef(null)

  // Timer de leitura
  useEffect(() => {
    if (phase !== 'reading') return
    readTimerRef.current = setInterval(() => setReadTimeLeft(t => Math.max(0, t - 1)), 1000)
    return () => clearInterval(readTimerRef.current)
  }, [phase])

  useEffect(() => {
    if (running && timeLeft > 0) {
      timerRef.current = setInterval(() => setTimeLeft(t => t - 1), 1000)
    }
    if (timeLeft === 0) { clearInterval(timerRef.current); setPhase('results') }
    return () => clearInterval(timerRef.current)
  }, [running, timeLeft])

  const startSession = () => {
    clearInterval(readTimerRef.current)
    setPhase('active')
    setRunning(true)
  }

  const finishSession = () => {
    clearInterval(timerRef.current)
    setRunning(false)
    setPhase('results')
    const score = calcScore()
    addStationResult({ stationId: station.id, score: score.total, maxScore: score.max, date: new Date().toISOString() })
  }

  const toggle = (idx) => setChecked(c => ({ ...c, [idx]: !c[idx] }))

  const calcScore = () => {
    let total = 0
    let max = 0
    station.checklist.forEach((item, idx) => {
      max += item.pontos
      if (checked[idx]) total += item.pontos
    })
    return { total: parseFloat(total.toFixed(2)), max: parseFloat(max.toFixed(2)) }
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const score = calcScore()
  const pct = score.max > 0 ? (score.total / score.max) * 100 : 0

  const readMins = Math.floor(readTimeLeft / 60)
  const readSecs = readTimeLeft % 60
  const readPct = (readTimeLeft / READING_TIME) * 100

  if (phase === 'reading') {
    return (
      <div className="space-y-4">
        {/* Timer de leitura */}
        <div className={`rounded-xl border p-3 flex items-center justify-between gap-3 transition-colors ${readTimeLeft <= 30 ? 'bg-red-900/20 border-red-700/40' : 'bg-gray-800 border-gray-700'}`}>
          <div className="flex items-center gap-2">
            <Timer size={16} className={readTimeLeft <= 30 ? 'text-red-400' : 'text-gray-400'} />
            <div>
              <p className={`text-xs font-semibold ${readTimeLeft <= 30 ? 'text-red-300' : 'text-gray-400'}`}>Tempo de leitura</p>
              <p className="text-[10px] text-gray-500">Leia o enunciado e o roteiro do ator</p>
            </div>
          </div>
          <span className={`font-mono font-bold text-xl ${readTimeLeft <= 30 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            {String(readMins).padStart(2,'0')}:{String(readSecs).padStart(2,'0')}
          </span>
        </div>
        <div className="h-1 bg-gray-800 rounded-full -mt-2">
          <div className={`h-full rounded-full transition-all ${readTimeLeft <= 30 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${readPct}%` }} />
        </div>

        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${AREA_COLOR[station.area] || 'bg-gray-700 text-gray-300'}`}>{station.area}</span>
            <span className="text-xs text-gray-400">{station.nivel}</span>
            <span className="text-xs text-gray-400">⏱ {station.tempo} minutos</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-4">{station.titulo}</h2>
          <div className="bg-gray-700/50 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-clinical-400 mb-2 uppercase">Enunciado</p>
            <p className="text-gray-200 text-sm leading-relaxed">{station.enunciado}</p>
          </div>
          <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-blue-400 mb-2 uppercase">Roteiro do Ator</p>
            <p className="text-blue-200 text-sm leading-relaxed">{station.roteiro}</p>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-3 mb-4">
            <p className="text-yellow-300 text-sm">💡 {station.dica}</p>
          </div>
          <button onClick={startSession}
            className="w-full bg-clinical-600 hover:bg-clinical-700 text-white py-3 rounded-xl font-bold text-lg transition-colors">
            ▶ Iniciar Estação ({station.tempo} min)
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'active') {
    return (
      <div className="space-y-4">
        {/* Timer bar */}
        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">{station.titulo}</p>
            <p className="text-xs text-gray-500">{score.total.toFixed(1)} / {score.max} pts</p>
          </div>
          <div className={`flex items-center gap-2 text-2xl font-mono font-bold ${timeLeft < 60 ? 'text-red-400' : 'text-white'}`}>
            <Timer className="w-6 h-6" />
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
          <button onClick={finishSession} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium text-sm transition-colors">
            Finalizar
          </button>
        </div>

        {/* Checklist */}
        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
          <p className="text-xs font-bold text-gray-400 uppercase mb-3">Checklist ({station.checklist.length} itens)</p>
          <div className="space-y-2">
            {station.checklist.map((item, idx) => (
              <button key={idx} onClick={() => toggle(idx)}
                className={`w-full text-left flex items-start gap-3 p-3 rounded-xl transition-colors ${checked[idx] ? 'bg-green-900/20 border border-green-700/30' : 'bg-gray-700/50 hover:bg-gray-700 border border-transparent'}`}>
                <div className="shrink-0 mt-0.5">
                  {checked[idx]
                    ? <CheckSquare className="w-5 h-5 text-green-400" />
                    : <Square className="w-5 h-5 text-gray-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${checked[idx] ? 'text-green-300' : 'text-gray-300'}`}>{item.item}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-500">{item.pontos} pt{item.pontos !== 1 ? 's' : ''}</span>
                    {item.critico && <span className="text-xs text-red-400 font-medium">⚡ CRÍTICO</span>}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Results
  const missed = station.checklist.filter((item, idx) => !checked[idx])
  const criticalMissed = missed.filter(i => i.critico)
  return (
    <div className="space-y-4">
      {/* Score */}
      <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 text-center">
        <p className="text-gray-400 mb-2">Resultado Final</p>
        <p className="text-5xl font-bold text-white mb-1">{score.total}<span className="text-2xl text-gray-400"> / {score.max}</span></p>
        <div className="w-full h-4 bg-gray-700 rounded-full mt-4 mb-2">
          <div className={`h-full rounded-full transition-all ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
        </div>
        <p className={`text-lg font-semibold ${pct >= 70 ? 'text-green-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
          {pct >= 70 ? '✅ Aprovado' : pct >= 50 ? '⚠️ Na média' : '❌ Abaixo da média'} ({pct.toFixed(0)}%)
        </p>
      </div>

      {criticalMissed.length > 0 && (
        <div className="bg-red-900/20 border border-red-700/40 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <p className="text-red-400 font-bold text-sm">Itens críticos não realizados:</p>
          </div>
          <ul className="space-y-1">
            {criticalMissed.map((item, i) => <li key={i} className="text-red-300 text-sm flex gap-2"><span>⚡</span>{item.item}</li>)}
          </ul>
        </div>
      )}

      {station.erros?.length > 0 && (
        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-5">
          <p className="text-xs font-bold text-orange-400 mb-3 uppercase">Erros Comuns nessa Estação</p>
          <ul className="space-y-2">
            {station.erros.map((e, i) => <li key={i} className="text-sm text-gray-300 flex gap-2"><span className="text-orange-400">!</span>{e}</li>)}
          </ul>
        </div>
      )}

      {station.conduta && (
        <div className="bg-clinical-900/30 border border-clinical-700/40 rounded-2xl p-5">
          <p className="text-xs font-bold text-clinical-400 mb-2 uppercase">Conduta Ideal</p>
          <p className="text-gray-200 text-sm">{station.conduta}</p>
        </div>
      )}

      {station.perola && (
        <div className="bg-purple-900/20 border border-purple-700/30 rounded-xl p-4">
          <p className="text-purple-300 text-sm">💎 {station.perola}</p>
        </div>
      )}

      <button onClick={() => { setChecked({}); setTimeLeft(station.tempo * 60); setRunning(false); setPhase('reading') }}
        className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
        <RotateCcw className="w-4 h-4" /> Repetir Estação
      </button>
    </div>
  )
}

export default function StationPractice() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center gap-3">
          {selected && (
            <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
          )}
          <div>
            <h1 className="text-xl font-bold text-white">Estações Clínicas</h1>
            <p className="text-sm text-gray-400">{STATIONS.length} estações oficiais · Simulação cronometrada</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {!selected
          ? <StationList onSelect={setSelected} />
          : <StationSession station={selected} onBack={() => setSelected(null)} />
        }
      </div>
    </div>
  )
}
