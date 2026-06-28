import { useState, useEffect, useRef, useMemo } from 'react'
import { Timer, CheckSquare, Square, AlertTriangle, ChevronRight, Trophy, RotateCcw, Flame, Target } from 'lucide-react'
import { useAppStore } from '../store/appStore'
import { STATIONS } from '../data/officialStations'

const AREA_COLOR = {
  'Clínica Médica':      'bg-blue-600/20 text-blue-400',
  'Emergência':          'bg-red-600/20 text-red-400',
  'Pediatria':           'bg-green-600/20 text-green-400',
  'Gineco-Obstetrícia':  'bg-pink-600/20 text-pink-400',
  'Cirurgia':            'bg-orange-600/20 text-orange-400',
  'Saúde Mental':        'bg-purple-600/20 text-purple-400',
  'Infectologia':        'bg-yellow-600/20 text-yellow-400',
}

function seededShuffle(arr, seed) {
  const a = [...arr]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    const j = Math.abs(s) % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Tela de Configuração ─────────────────────────────────────
function ConfigScreen({ onStart }) {
  const [count, setCount] = useState(5)
  const [area, setArea] = useState('Aleatório')
  const areas = ['Aleatório', ...new Set(STATIONS.map(s => s.area))]

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="p-6 space-y-6 max-w-lg mx-auto w-full">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 border border-blue-700/40 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-blue-700/40 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Trophy size={32} className="text-blue-300" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Simulado Revalida</h1>
          <p className="text-blue-200 text-sm">Simule as condições reais da prova. Cronômetro automático, checklist oficial e veredicto ao final.</p>
        </div>

        {/* Número de estações */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Número de Estações</p>
          <div className="flex gap-2">
            {[3, 5, 8, 10].map(n => (
              <button key={n} onClick={() => setCount(n)}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${count === n ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
                {n}
                {n === 5 && <span className="block text-[10px] font-normal opacity-70">recomendado</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Área */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Filtrar por Área</p>
          <div className="flex gap-2 flex-wrap">
            {areas.map(a => (
              <button key={a} onClick={() => setArea(a)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${area === a ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Estações', value: count },
            { label: 'Min por estação', value: '5' },
            { label: 'Total', value: `${count * 5} min` },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-3">
              <p className="text-xl font-bold text-white">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        <button onClick={() => onStart(count, area)}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg transition-all active:scale-[0.98]">
          Iniciar Simulado
        </button>
      </div>
    </div>
  )
}

// ── Sessão Ativa ──────────────────────────────────────────────
function ActiveSession({ station, stationIdx, totalStations, runningScore, onFinish }) {
  const [checked, setChecked] = useState({})
  const [timeLeft, setTimeLeft] = useState(5 * 60)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => setTimeLeft(t => {
      if (t <= 1) { clearInterval(timerRef.current); handleFinish(); return 0 }
      return t - 1
    }), 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  const handleFinish = () => {
    clearInterval(timerRef.current)
    const score = calcScore()
    onFinish(checked, score)
  }

  const calcScore = () => {
    let total = 0, max = 0
    station.checklist.forEach((item, idx) => {
      max += item.pontos
      if (checked[idx]) total += item.pontos
    })
    return { total: parseFloat(total.toFixed(2)), max: parseFloat(max.toFixed(2)) }
  }

  const score = calcScore()
  const pct = score.max > 0 ? (score.total / score.max) * 100 : 0
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const urgente = timeLeft < 60

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Barra superior */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500">Estação {stationIdx + 1} de {totalStations}</p>
            <p className="text-white font-semibold text-sm truncate max-w-48">{station.titulo}</p>
          </div>
          <div className={`flex items-center gap-1.5 font-mono font-bold text-xl ${urgente ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            <Timer size={18} />
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
          <button onClick={handleFinish}
            className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-xl transition-colors">
            Próxima →
          </button>
        </div>
        {/* Progresso geral */}
        <div className="flex gap-1 mt-2">
          {Array.from({ length: totalStations }).map((_, i) => (
            <div key={i} className={`flex-1 h-1 rounded-full ${i < stationIdx ? 'bg-green-500' : i === stationIdx ? 'bg-blue-500' : 'bg-gray-700'}`} />
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Checklist · {score.total.toFixed(1)}/{score.max} pts</p>
          <span className={`text-xs font-bold ${pct >= 70 ? 'text-green-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>{pct.toFixed(0)}%</span>
        </div>
        {station.checklist.map((item, idx) => (
          <button key={idx} onClick={() => setChecked(c => ({ ...c, [idx]: !c[idx] }))}
            className={`w-full text-left flex items-start gap-3 p-3 rounded-xl transition-colors border
              ${checked[idx] ? 'bg-green-900/20 border-green-700/30' : 'bg-gray-900 border-gray-800 hover:border-gray-700'}`}>
            <div className="shrink-0 mt-0.5">
              {checked[idx]
                ? <CheckSquare size={18} className="text-green-400" />
                : <Square size={18} className="text-gray-600" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${checked[idx] ? 'text-green-300' : 'text-gray-300'}`}>{item.item}</p>
              <div className="flex gap-2 mt-0.5">
                <span className="text-xs text-gray-600">{item.pontos} pt{item.pontos !== 1 ? 's' : ''}</span>
                {item.critico && <span className="text-xs text-red-400 font-medium">⚡ CRÍTICO</span>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Resultados ────────────────────────────────────────────────
function ResultsScreen({ stations, results, onRestart, onBack }) {
  const { addStationHistory } = useAppStore()

  useEffect(() => {
    results.forEach(r => {
      addStationHistory({ stationId: r.station.id, score: r.score.total, maxScore: r.score.max, date: new Date().toISOString() })
    })
  }, [])

  const totalScore = results.reduce((a, r) => a + r.score.total, 0)
  const totalMax = results.reduce((a, r) => a + r.score.max, 0)
  const overallPct = totalMax > 0 ? (totalScore / totalMax) * 100 : 0

  const verdict = overallPct >= 70
    ? { label: 'APROVADO', color: 'text-green-400', bg: 'from-green-900/50 to-emerald-900/50', border: 'border-green-700/40', icon: '🎉' }
    : overallPct >= 55
    ? { label: 'NA MÉDIA', color: 'text-yellow-400', bg: 'from-yellow-900/50 to-amber-900/50', border: 'border-yellow-700/40', icon: '⚠️' }
    : { label: 'ABAIXO DA MÉDIA', color: 'text-red-400', bg: 'from-red-900/50 to-rose-900/50', border: 'border-red-700/40', icon: '📚' }

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="p-4 md:p-6 space-y-5 max-w-lg mx-auto w-full">

        {/* Veredicto */}
        <div className={`bg-gradient-to-br ${verdict.bg} border ${verdict.border} rounded-2xl p-6 text-center`}>
          <p className="text-5xl mb-3">{verdict.icon}</p>
          <p className={`text-2xl font-black ${verdict.color} mb-1`}>{verdict.label}</p>
          <p className="text-gray-300 text-sm">Simulado com {stations} estações</p>
          <div className="mt-4">
            <p className="text-5xl font-black text-white">{overallPct.toFixed(0)}<span className="text-2xl text-gray-400">%</span></p>
            <p className="text-gray-400 text-sm mt-1">{totalScore.toFixed(1)} de {totalMax.toFixed(1)} pontos</p>
          </div>
          <div className="h-2 bg-black/30 rounded-full mt-4">
            <div className={`h-full rounded-full ${overallPct >= 70 ? 'bg-green-400' : overallPct >= 55 ? 'bg-yellow-400' : 'bg-red-400'}`}
              style={{ width: `${overallPct}%` }} />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span><span className="text-yellow-400">55%</span><span className="text-green-400">70%</span><span>100%</span>
          </div>
        </div>

        {/* Por estação */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Por estação</p>
          <div className="space-y-3">
            {results.map((r, i) => {
              const pct = r.score.max > 0 ? (r.score.total / r.score.max) * 100 : 0
              const criticalMissed = r.station.checklist.filter((item, idx) => item.critico && !r.checked[idx])
              return (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm text-gray-300 flex-1 truncate">{r.station.titulo}</p>
                    <span className={`text-sm font-bold shrink-0 ${pct >= 70 ? 'text-green-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {pct.toFixed(0)}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full">
                    <div className={`h-full rounded-full ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${pct}%` }} />
                  </div>
                  {criticalMissed.length > 0 && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertTriangle size={11} /> {criticalMissed.length} crítico{criticalMissed.length > 1 ? 's' : ''} perdido{criticalMissed.length > 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Ações */}
        <div className="flex gap-3">
          <button onClick={onRestart}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
            <RotateCcw size={16} /> Novo simulado
          </button>
          <button onClick={onBack}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-colors">
            Voltar
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────
export default function SimuladoMode() {
  const [phase, setPhase] = useState('config') // config | active | results
  const [selectedStations, setSelectedStations] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [results, setResults] = useState([])

  const startSimulado = (count, area) => {
    const seed = new Date().getFullYear() * 1000 + new Date().getMonth() * 100 + new Date().getDate() + count
    const pool = area === 'Aleatório' ? STATIONS : STATIONS.filter(s => s.area === area)
    const shuffled = seededShuffle(pool, seed).slice(0, count)
    setSelectedStations(shuffled)
    setCurrentIdx(0)
    setResults([])
    setPhase('active')
  }

  const handleStationFinish = (checked, score) => {
    const newResults = [...results, { station: selectedStations[currentIdx], checked, score }]
    setResults(newResults)
    if (currentIdx + 1 >= selectedStations.length) {
      setPhase('results')
    } else {
      setCurrentIdx(i => i + 1)
    }
  }

  if (phase === 'config') return <ConfigScreen onStart={startSimulado} />

  if (phase === 'active') return (
    <ActiveSession
      station={selectedStations[currentIdx]}
      stationIdx={currentIdx}
      totalStations={selectedStations.length}
      runningScore={results}
      onFinish={handleStationFinish}
    />
  )

  if (phase === 'results') return (
    <ResultsScreen
      stations={selectedStations.length}
      results={results}
      onRestart={() => setPhase('config')}
      onBack={() => setPhase('config')}
    />
  )
}
