import { useState, useMemo } from 'react'
import { Copy, Heart, Search, CheckCircle } from 'lucide-react'
import { useAppStore } from '../store/appStore'
import { PHRASES as COMMUNICATION_PHRASES } from '../data/flashcards/communicationPhrases'

const CAT_LABELS = {
  acolhimento: { label: 'Acolhimento', color: 'bg-blue-600/20 text-blue-400', emoji: '👋' },
  exame_fisico: { label: 'Exame Físico', color: 'bg-purple-600/20 text-purple-400', emoji: '🩺' },
  diagnostico: { label: 'Diagnóstico', color: 'bg-clinical-600/20 text-clinical-400', emoji: '📋' },
  situacoes_dificeis: { label: 'Situações Difíceis', color: 'bg-red-600/20 text-red-400', emoji: '💔' },
  tratamento: { label: 'Tratamento', color: 'bg-green-600/20 text-green-400', emoji: '💊' },
  encerramento: { label: 'Encerramento', color: 'bg-yellow-600/20 text-yellow-400', emoji: '🤝' },
  emergencias: { label: 'Emergências', color: 'bg-orange-600/20 text-orange-400', emoji: '🚨' },
}

const TOM_COLOR = {
  empático: 'text-rose-400 bg-rose-900/20',
  claro: 'text-blue-400 bg-blue-900/20',
  assertivo: 'text-orange-400 bg-orange-900/20',
  tranquilizador: 'text-green-400 bg-green-900/20',
  objetivo: 'text-gray-400 bg-gray-700',
  respeitoso: 'text-purple-400 bg-purple-900/20',
}

function PhraseCard({ phrase, isFav, onFav }) {
  const [copied, setCopied] = useState(false)
  const catMeta = CAT_LABELS[phrase.fase] || CAT_LABELS[Object.keys(CAT_LABELS)[0]]

  const copy = () => {
    navigator.clipboard.writeText(phrase.frase)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 group hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <p className="text-white text-sm leading-relaxed flex-1">"{phrase.frase}"</p>
        <div className="flex gap-1.5 shrink-0">
          <button onClick={() => onFav(phrase.id)}
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${isFav ? 'bg-red-900/40 text-red-400' : 'bg-gray-700 text-gray-500 hover:text-red-400'}`}>
            <Heart className="w-4 h-4" fill={isFav ? 'currentColor' : 'none'} />
          </button>
          <button onClick={copy}
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${copied ? 'bg-green-900/40 text-green-400' : 'bg-gray-700 text-gray-500 hover:text-white'}`}>
            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${catMeta?.color}`}>{catMeta?.emoji} {catMeta?.label}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${TOM_COLOR[phrase.tom] || 'text-gray-400 bg-gray-700'}`}>{phrase.tom}</span>
        {phrase.contexto && <span className="text-xs text-gray-500 italic truncate">{phrase.contexto}</span>}
      </div>
    </div>
  )
}

export default function CommunicationHub() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [showFavOnly, setShowFavOnly] = useState(false)
  const { favoritePhrases, toggleFavoritePhrase } = useAppStore()

  const allPhrases = useMemo(() => {
    return Object.entries(COMMUNICATION_PHRASES).flatMap(([fase, phrases]) =>
      phrases.map(p => ({ ...p, fase }))
    )
  }, [])

  const filtered = useMemo(() => {
    return allPhrases.filter(p => {
      if (category !== 'all' && p.fase !== category) return false
      if (showFavOnly && !favoritePhrases.includes(p.id)) return false
      if (search && !p.frase.toLowerCase().includes(search.toLowerCase()) && !p.contexto?.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [allPhrases, category, search, showFavOnly, favoritePhrases])

  const catCounts = useMemo(() => {
    const counts = {}
    allPhrases.forEach(p => { counts[p.fase] = (counts[p.fase] || 0) + 1 })
    return counts
  }, [allPhrases])

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">Hub de Comunicação</h1>
            <p className="text-sm text-gray-400">{allPhrases.length} frases · {favoritePhrases.length} favoritas</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input type="text" placeholder="Buscar frase, contexto..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full bg-gray-700 text-white pl-9 pr-4 py-2.5 rounded-xl border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm" />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${category === 'all' ? 'bg-clinical-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>
            Todos ({allPhrases.length})
          </button>
          {Object.entries(CAT_LABELS).map(([key, meta]) => (
            <button key={key} onClick={() => setCategory(key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${category === key ? 'bg-clinical-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>
              {meta.emoji} {meta.label} ({catCounts[key] || 0})
            </button>
          ))}
          <button onClick={() => setShowFavOnly(f => !f)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${showFavOnly ? 'bg-red-600/40 text-red-400' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>
            <Heart className="w-3.5 h-3.5" fill={showFavOnly ? 'currentColor' : 'none'} /> Favoritas
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">{filtered.length} frases encontradas</p>
        </div>

        <div className="space-y-3">
          {filtered.map(p => (
            <PhraseCard key={p.id} phrase={p} isFav={favoritePhrases.includes(p.id)} onFav={toggleFavoritePhrase} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-4xl mb-4">🗣</p>
            <p>Nenhuma frase encontrada.</p>
          </div>
        )}
      </div>
    </div>
  )
}
