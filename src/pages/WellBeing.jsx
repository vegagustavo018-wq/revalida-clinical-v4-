import { useState, useEffect, useRef } from 'react'
import { Play, Pause, RotateCcw, Coffee, Moon, Zap, Heart, BookOpen, Brain, CheckCircle } from 'lucide-react'
import { useAppStore } from '../store/appStore'

// ── Pomodoro ──────────────────────────────────────────────────
const PHASES = [
  { id: 'study',      label: 'Foco',          duration: 25 * 60, color: '#3b82f6', bg: 'from-blue-900/40 to-indigo-900/40', border: 'border-blue-700/40' },
  { id: 'shortBreak', label: 'Pausa curta',   duration:  5 * 60, color: '#10b981', bg: 'from-emerald-900/40 to-teal-900/40', border: 'border-emerald-700/40' },
  { id: 'longBreak',  label: 'Pausa longa',   duration: 15 * 60, color: '#8b5cf6', bg: 'from-violet-900/40 to-purple-900/40', border: 'border-violet-700/40' },
]

const BREAK_TIPS = [
  'Alongue o pescoço e os ombros por 30 segundos.',
  'Olhe para um ponto a 6 metros por 20 segundos — regra 20-20-20.',
  'Tome 2-3 goles de água agora.',
  'Respire fundo 4 vezes — inspire 4s, segure 4s, expire 4s.',
  'Levante e caminhe por 5 passos — ative a circulação.',
  'Feche os olhos por 30 segundos e relaxe os músculos faciais.',
]

function CircleTimer({ timeLeft, total, color, size = 200 }) {
  const r = (size / 2) - 12
  const circumference = 2 * Math.PI * r
  const progress = timeLeft / total
  const dashoffset = circumference * (1 - progress)

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1f2937" strokeWidth="8" />
        <circle
          cx={size/2} cy={size/2} r={r}
          fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-mono font-bold text-white">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

function PomodoroTimer() {
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [sessions, setSessions] = useState(0)
  const [timeLeft, setTimeLeft] = useState(PHASES[0].duration)
  const [running, setRunning] = useState(false)
  const [tipIdx] = useState(() => Math.floor(Math.random() * BREAK_TIPS.length))
  const timerRef = useRef(null)
  const phase = PHASES[phaseIdx]

  useEffect(() => {
    if (running && timeLeft > 0) {
      timerRef.current = setInterval(() => setTimeLeft(t => t - 1), 1000)
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current)
      setRunning(false)
      // Avançar fase automaticamente
      if (phaseIdx === 0) {
        const newSessions = sessions + 1
        setSessions(newSessions)
        const nextPhase = newSessions % 4 === 0 ? 2 : 1
        setPhaseIdx(nextPhase)
        setTimeLeft(PHASES[nextPhase].duration)
      } else {
        setPhaseIdx(0)
        setTimeLeft(PHASES[0].duration)
      }
    }
    return () => clearInterval(timerRef.current)
  }, [running, timeLeft])

  const reset = () => {
    clearInterval(timerRef.current)
    setRunning(false)
    setTimeLeft(phase.duration)
  }

  const switchPhase = (idx) => {
    clearInterval(timerRef.current)
    setRunning(false)
    setPhaseIdx(idx)
    setTimeLeft(PHASES[idx].duration)
  }

  return (
    <div className={`rounded-2xl border bg-gradient-to-br ${phase.bg} ${phase.border} p-6 flex flex-col items-center gap-5`}>
      {/* Seletores de fase */}
      <div className="flex gap-2">
        {PHASES.map((p, i) => (
          <button key={p.id} onClick={() => switchPhase(i)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${i === phaseIdx ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/70'}`}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Timer circular */}
      <CircleTimer timeLeft={timeLeft} total={phase.duration} color={phase.color} />

      {/* Sessões */}
      <div className="flex gap-1.5">
        {[1,2,3,4].map(n => (
          <div key={n} className={`w-3 h-3 rounded-full transition-colors ${n <= (sessions % 4 || (sessions > 0 && sessions % 4 === 0 ? 4 : 0)) ? 'bg-white/80' : 'bg-white/20'}`} />
        ))}
        <span className="text-white/40 text-xs ml-2 self-center">{sessions} sessão{sessions !== 1 ? 'ões' : ''}</span>
      </div>

      {/* Controles */}
      <div className="flex gap-3">
        <button onClick={reset}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors">
          <RotateCcw size={18} />
        </button>
        <button onClick={() => setRunning(r => !r)}
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all active:scale-95"
          style={{ backgroundColor: phase.color }}>
          {running ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
        </button>
        <div className="w-11 h-11" />
      </div>

      {/* Dica para a pausa */}
      {phaseIdx !== 0 && (
        <div className="bg-white/10 rounded-xl px-4 py-3 text-center max-w-xs">
          <p className="text-white/80 text-sm">💡 {BREAK_TIPS[tipIdx]}</p>
        </div>
      )}
    </div>
  )
}

// ── Conteúdo estático ─────────────────────────────────────────
const PILLARS = [
  {
    icon: Moon, color: 'text-violet-400', bg: 'bg-violet-900/30',
    title: 'Sono (7-8h)',
    items: ['Consolidação da memória ocorre no sono profundo (fase N3)', 'Dormir antes da meia-noite potencializa memória declarativa', 'Evitar telas 1h antes de dormir — luz azul inibe melatonina'],
  },
  {
    icon: Zap, color: 'text-amber-400', bg: 'bg-amber-900/30',
    title: 'Técnica de estudo',
    items: ['Espaçamento: revisitar o conteúdo em 1d, 7d, 30d', 'Recuperação ativa: fechar o livro e tentar lembrar > reler', 'Intercalação: misturar tópicos > estudar um só tema'],
  },
  {
    icon: Heart, color: 'text-rose-400', bg: 'bg-rose-900/30',
    title: 'Saúde Mental',
    items: ['Síndrome do impostor é universal entre médicos — reconheça', 'Progresso não-linear é normal: platôs fazem parte', 'Busque suporte se sentir burnout — não é fraqueza'],
  },
  {
    icon: Brain, color: 'text-blue-400', bg: 'bg-blue-900/30',
    title: 'Neurociência do estudo',
    items: ['Exercício aeróbico aumenta BDNF — neuroplasticidade +40%', 'Hidratação: 2% de desidratação reduz cognição em 20%', 'Micropauses de 10s entre tópicos melhoram retenção'],
  },
]

const CHECKLIST = [
  'Revisar 10 flashcards da sessão do dia',
  'Fazer 1 estação cronometrada',
  'Ler 1 erro do repositório e pensar no porquê',
  'Revisar 1 doença do explorador',
  'Tomar água e se mover por 5 minutos',
]

export default function WellBeing() {
  const { wellBeingChecklist, toggleWellBeingItem, checkWellBeingChecklist } = useAppStore()

  useEffect(() => { checkWellBeingChecklist() }, [])

  const total = CHECKLIST.length
  const done = Object.values(wellBeingChecklist).filter(Boolean).length

  return (
    <div className="overflow-y-auto h-full">
      <div className="p-4 md:p-6 space-y-6 max-w-2xl mx-auto">

        <div>
          <h2 className="text-xl font-bold text-white mb-1">Bem-estar & Rotina</h2>
          <p className="text-gray-400 text-sm">Seu desempenho no Revalida depende da sua saúde. Cuide de você.</p>
        </div>

        {/* Pomodoro */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Timer Pomodoro</p>
          <PomodoroTimer />
        </div>

        {/* Checklist diário */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Checklist de hoje</p>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${done === total ? 'bg-green-900/40 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
              {done}/{total}
            </span>
          </div>
          <div className="space-y-2">
            {CHECKLIST.map((item, i) => (
              <button key={i} onClick={() => toggleWellBeingItem(i)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors
                  ${wellBeingChecklist[i] ? 'bg-green-900/20 border border-green-700/30' : 'bg-gray-800 hover:bg-gray-700 border border-transparent'}`}>
                <CheckCircle size={18} className={wellBeingChecklist[i] ? 'text-green-400' : 'text-gray-600'} />
                <span className={`text-sm ${wellBeingChecklist[i] ? 'text-green-300 line-through' : 'text-gray-300'}`}>{item}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pilares */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Pilares do estudo eficiente</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map(({ icon: Icon, color, bg, title, items }) => (
              <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                  <Icon size={18} className={color} />
                </div>
                <p className="text-white font-semibold text-sm mb-2">{title}</p>
                <ul className="space-y-1.5">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-xs flex gap-2">
                      <span className={`${color} shrink-0 mt-0.5`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
