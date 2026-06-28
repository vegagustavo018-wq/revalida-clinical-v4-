import { useState, useMemo } from 'react'
import { X, CheckCircle, XCircle, Minus, Trophy, Flame, RotateCcw } from 'lucide-react'
import { FLASHCARDS } from '../../data/flashcards/premadeFlashcards'

// Shuffle determinístico baseado na data — mesmos cards por dia inteiro
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

function getTodaySeed() {
  const d = new Date()
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate()
}

const DAILY_COUNT = 10

export function DailySessionModal({ onClose, onComplete }) {
  const dailyCards = useMemo(() => {
    return seededShuffle(FLASHCARDS, getTodaySeed()).slice(0, DAILY_COUNT)
  }, [])

  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [results, setResults] = useState([]) // 'easy' | 'hard' | 'skip'
  const [done, setDone] = useState(false)

  const card = dailyCards[idx]
  const progress = ((idx) / DAILY_COUNT) * 100

  const answer = (r) => {
    const newResults = [...results, r]
    setResults(newResults)
    setFlipped(false)
    if (idx + 1 >= DAILY_COUNT) {
      setDone(true)
      onComplete()
    } else {
      setIdx(i => i + 1)
    }
  }

  const easy = results.filter(r => r === 'easy').length
  const hard = results.filter(r => r === 'hard').length

  if (done) {
    const pct = Math.round((easy / DAILY_COUNT) * 100)
    return (
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4">
        <div className="w-full sm:max-w-sm bg-gray-900 sm:rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-center">
            <Trophy size={52} className="mx-auto text-yellow-300 mb-3" />
            <h2 className="text-2xl font-bold text-white mb-1">Sessão concluída!</h2>
            <p className="text-white/70 text-sm">Você estudou {DAILY_COUNT} flashcards hoje</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">{easy}</p>
                <p className="text-xs text-gray-400 mt-1">Sabia bem</p>
              </div>
              <div className="w-px bg-gray-700" />
              <div className="text-center">
                <p className="text-3xl font-bold text-red-400">{hard}</p>
                <p className="text-xs text-gray-400 mt-1">Precisa revisar</p>
              </div>
              <div className="w-px bg-gray-700" />
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">{pct}%</p>
                <p className="text-xs text-gray-400 mt-1">Aproveitamento</p>
              </div>
            </div>

            <div className="bg-orange-950/40 border border-orange-700/30 rounded-xl p-3 flex items-center gap-3">
              <Flame size={24} className="text-orange-400 shrink-0" />
              <p className="text-orange-300 text-sm font-medium">Streak atualizado! Continue amanhã.</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full sm:max-w-sm bg-gray-900 sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95dvh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800 shrink-0">
          <div>
            <p className="text-white font-semibold text-sm">Sessão do Dia</p>
            <p className="text-gray-500 text-xs">{idx + 1} de {DAILY_COUNT}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white">
            <X size={15} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-800 shrink-0">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Card */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          <div className="flex gap-1.5 flex-wrap">
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-900/40 text-blue-400 font-medium">{card.categoria}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400">{card.especialidade}</span>
          </div>

          {/* Frente */}
          <div
            className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
              flipped
                ? 'bg-blue-950/50 border border-blue-700/40'
                : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
            }`}
            onClick={() => !flipped && setFlipped(true)}
          >
            {!flipped ? (
              <div className="space-y-3">
                <p className="text-white font-medium text-base leading-relaxed">{card.frente}</p>
                <p className="text-gray-500 text-xs text-center">Toque para revelar a resposta</p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide">Resposta</p>
                <p className="text-white text-sm leading-relaxed">{card.verso}</p>
                {card.dica && (
                  <div className="bg-yellow-950/50 border border-yellow-700/30 rounded-xl p-3">
                    <p className="text-yellow-300 text-xs">💡 {card.dica}</p>
                  </div>
                )}
                {card.fraseParaPaciente && (
                  <div className="bg-green-950/40 border border-green-700/30 rounded-xl p-3">
                    <p className="text-green-400 text-xs font-medium mb-1">🗣 Para o paciente:</p>
                    <p className="text-green-300 text-xs italic">"{card.fraseParaPaciente}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Botões de resposta */}
        <div className="p-4 border-t border-gray-800 shrink-0">
          {!flipped ? (
            <button
              onClick={() => setFlipped(true)}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold transition-all"
            >
              Revelar resposta
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => answer('hard')}
                className="flex-1 flex flex-col items-center gap-1 py-3 rounded-xl bg-red-900/30 border border-red-700/50 text-red-400 hover:bg-red-900/50 active:scale-95 transition-all"
              >
                <XCircle size={20} />
                <span className="text-xs font-medium">Difícil</span>
              </button>
              <button
                onClick={() => answer('skip')}
                className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700 active:scale-95 transition-all"
              >
                <Minus size={18} />
              </button>
              <button
                onClick={() => answer('easy')}
                className="flex-1 flex flex-col items-center gap-1 py-3 rounded-xl bg-green-900/30 border border-green-700/50 text-green-400 hover:bg-green-900/50 active:scale-95 transition-all"
              >
                <CheckCircle size={20} />
                <span className="text-xs font-medium">Sabia!</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
