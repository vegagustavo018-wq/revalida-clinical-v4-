import { useState, useMemo, useEffect } from 'react'
import { Plus, BookOpen, Zap, RotateCcw, Heart, CheckCircle, XCircle, Minus, Brain, AlertCircle, Pencil, Trash2, X } from 'lucide-react'
import { useAppStore } from '../store/appStore'
import { FLASHCARDS as PREMADE_FLASHCARDS } from '../data/flashcards/premadeFlashcards'

const MODES = [
  { id: 'library', label: 'Biblioteca', icon: BookOpen },
  { id: 'study',   label: 'Estudar',    icon: Zap },
  { id: 'revisao', label: 'Revisão',    icon: Brain },
  { id: 'create',  label: 'Criar',      icon: Plus },
]

const DIFF_COLOR = { Fácil: 'text-green-400 bg-green-900/30', Médio: 'text-yellow-400 bg-yellow-900/30', Difícil: 'text-red-400 bg-red-900/30' }

// ── Edit Modal ────────────────────────────────────────────────
function EditCardModal({ card, onSave, onClose }) {
  const [form, setForm] = useState({ frente: card.frente, verso: card.verso, dica: card.dica || '', categoria: card.categoria, dificuldade: card.dificuldade, especialidade: card.especialidade })
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-end md:items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg space-y-4 p-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold">Editar Flashcard</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={20} /></button>
        </div>
        {[
          { k: 'frente', label: 'Pergunta', multi: true },
          { k: 'verso',  label: 'Resposta', multi: true },
          { k: 'dica',   label: 'Dica (opcional)', multi: false },
        ].map(f => (
          <div key={f.k}>
            <label className="text-sm text-gray-400 block mb-1">{f.label}</label>
            {f.multi
              ? <textarea rows={3} value={form[f.k]} onChange={e => update(f.k, e.target.value)}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-xl border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm resize-none" />
              : <input type="text" value={form[f.k]} onChange={e => update(f.k, e.target.value)}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-xl border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm" />
            }
          </div>
        ))}
        <div className="grid grid-cols-3 gap-3">
          {[
            { k: 'categoria', options: ['Diagnóstico', 'Tratamento', 'Farmacologia', 'Comunicação', 'Exames'] },
            { k: 'dificuldade', options: ['Fácil', 'Médio', 'Difícil'] },
            { k: 'especialidade', options: ['Clínica Médica', 'Cirurgia', 'Pediatria', 'GO', 'Saúde Mental', 'Preventiva'] },
          ].map(s => (
            <div key={s.k}>
              <label className="text-xs text-gray-400 block mb-1 capitalize">{s.k}</label>
              <select value={form[s.k]} onChange={e => update(s.k, e.target.value)}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm">
                {s.options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition-colors">Cancelar</button>
          <button onClick={() => { onSave(form); onClose() }} disabled={!form.frente || !form.verso}
            className="flex-1 bg-clinical-600 hover:bg-clinical-700 disabled:opacity-50 text-white py-3 rounded-xl font-medium transition-colors">
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}

// ── FlipCard ──────────────────────────────────────────────────
function FlipCard({ card, onFavorite, isFavorite, onEdit, onDelete, isOwned }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="flip-card w-full h-72 cursor-pointer" onClick={() => setFlipped(f => !f)}>
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="flip-card-front bg-gray-800 border border-gray-700 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${DIFF_COLOR[card.dificuldade]}`}>{card.dificuldade}</span>
            <div className="flex items-center gap-1">
              {isOwned && (
                <>
                  <button onClick={e => { e.stopPropagation(); onEdit(card) }}
                    className="text-gray-500 hover:text-clinical-400 transition-colors p-1">
                    <Pencil size={14} />
                  </button>
                  <button onClick={e => { e.stopPropagation(); onDelete(card.id) }}
                    className="text-gray-500 hover:text-red-400 transition-colors p-1">
                    <Trash2 size={14} />
                  </button>
                </>
              )}
              <button onClick={e => { e.stopPropagation(); onFavorite(card.id) }}
                className={`${isFavorite ? 'text-red-400' : 'text-gray-500 hover:text-red-400'} transition-colors`}>
                <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-white text-lg font-medium text-center leading-relaxed">{card.frente}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">{card.categoria}</span>
            <span className="text-xs text-gray-500">Toque para virar</span>
          </div>
        </div>
        {/* Back */}
        <div className="flip-card-back bg-clinical-900 border border-clinical-700 rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-clinical-400 font-medium uppercase tracking-wider">Resposta</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-white text-base text-center leading-relaxed">{card.verso}</p>
          </div>
          {card.dica && (
            <div className="bg-yellow-900/30 rounded-lg px-3 py-2">
              <p className="text-yellow-300 text-xs">💡 {card.dica}</p>
            </div>
          )}
          {card.fraseParaPaciente && (
            <div className="bg-green-900/20 rounded-lg px-3 py-2">
              <p className="text-xs text-green-400 font-medium">🗣 Para o paciente:</p>
              <p className="text-green-300 text-xs italic">"{card.fraseParaPaciente}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Library Mode ──────────────────────────────────────────────
function LibraryMode({ allCards, favorites, onFavorite, myCardIds, onEdit, onDelete }) {
  const [filter, setFilter] = useState('Todos')
  const [search, setSearch] = useState('')
  const [editCard, setEditCard] = useState(null)
  const cats = useMemo(() => ['Todos', ...new Set(allCards.map(c => c.categoria))], [allCards])
  const filtered = useMemo(() => allCards.filter(c => {
    const matchCat = filter === 'Todos' || c.categoria === filter
    const matchSearch = !search || c.frente.toLowerCase().includes(search.toLowerCase()) || c.verso.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  }), [allCards, filter, search])

  return (
    <div className="space-y-4">
      {editCard && (
        <EditCardModal
          card={editCard}
          onSave={(updates) => onEdit(editCard.id, updates)}
          onClose={() => setEditCard(null)}
        />
      )}
      <div className="flex gap-2 flex-wrap">
        <input type="text" placeholder="Buscar flashcard..." value={search} onChange={e => setSearch(e.target.value)}
          className="flex-1 min-w-48 bg-gray-700 text-white px-4 py-2 rounded-xl border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm" />
        {cats.map(c => (
          <button key={c} onClick={() => setFilter(c)}
            className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${filter === c ? 'bg-clinical-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>{c}</button>
        ))}
      </div>
      <p className="text-sm text-gray-500">{filtered.length} flashcards</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(card => (
          <FlipCard
            key={card.id}
            card={card}
            onFavorite={onFavorite}
            isFavorite={favorites.includes(card.id)}
            isOwned={myCardIds.has(card.id)}
            onEdit={setEditCard}
            onDelete={onDelete}
          />
        ))}
      </div>
      {filtered.length === 0 && <p className="text-gray-500 text-center py-12">Nenhum flashcard encontrado.</p>}
    </div>
  )
}

// ── Study Mode ────────────────────────────────────────────────
function StudyMode({ allCards, onResult, onExit }) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [results, setResults] = useState([]) // { id, result: 'easy'|'hard'|'skip' }
  const [finished, setFinished] = useState(false)
  const { markStudyToday } = useAppStore()

  useEffect(() => {
    if (finished) markStudyToday()
  }, [finished])

  const card = allCards[idx]
  const progress = (idx / allCards.length) * 100

  const answer = (r) => {
    onResult(card.id, r)
    setResults(prev => [...prev, { id: card.id, result: r }])
    setFlipped(false)
    if (idx + 1 >= allCards.length) setFinished(true)
    else setIdx(i => i + 1)
  }

  if (finished) {
    const easy = results.filter(r => r.result === 'easy').length
    const hard = results.filter(r => r.result === 'hard').length
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <div className="text-6xl">🎉</div>
        <h2 className="text-2xl font-bold text-white">Sessão concluída!</h2>
        <div className="flex gap-6">
          <div className="text-center"><p className="text-3xl font-bold text-green-400">{easy}</p><p className="text-sm text-gray-400">Sabia bem</p></div>
          <div className="text-center"><p className="text-3xl font-bold text-red-400">{hard}</p><p className="text-sm text-gray-400">Difícil</p></div>
        </div>
        <button onClick={() => { setIdx(0); setFlipped(false); setResults([]); setFinished(false) }}
          className="bg-clinical-600 hover:bg-clinical-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2">
          <RotateCcw className="w-4 h-4" /> Reiniciar
        </button>
        {onExit && (
          <button onClick={onExit} className="text-gray-500 hover:text-white text-sm transition-colors">
            ← Voltar à revisão
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>{idx + 1} / {allCards.length}</span>
        <span>{card?.especialidade}</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full"><div className="h-full bg-clinical-600 rounded-full transition-all" style={{ width: `${progress}%` }} /></div>

      {/* Card */}
      {card && (
        <div className="flip-card w-full h-72 cursor-pointer" onClick={() => setFlipped(f => !f)}>
          <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
            <div className="flip-card-front bg-gray-800 border border-gray-700 rounded-2xl p-8 flex flex-col justify-center items-center gap-4">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${DIFF_COLOR[card.dificuldade]}`}>{card.dificuldade}</span>
              <p className="text-white text-lg font-medium text-center">{card.frente}</p>
              <p className="text-gray-500 text-sm">Toque para revelar</p>
            </div>
            <div className="flip-card-back bg-clinical-900 border border-clinical-700 rounded-2xl p-8 flex flex-col justify-center items-center gap-4">
              <p className="text-white text-base text-center">{card.verso}</p>
              {card.dica && <p className="text-yellow-300 text-xs">💡 {card.dica}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Answer buttons — only show when flipped */}
      {flipped && (
        <div className="flex gap-3 justify-center">
          <button onClick={() => answer('hard')} className="flex-1 flex items-center justify-center gap-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-700/50 py-3 rounded-xl font-medium transition-colors">
            <XCircle className="w-5 h-5" /> Difícil
          </button>
          <button onClick={() => answer('skip')} className="px-4 py-3 bg-gray-700 hover:bg-gray-600 text-gray-400 rounded-xl transition-colors">
            <Minus className="w-5 h-5" />
          </button>
          <button onClick={() => answer('easy')} className="flex-1 flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/40 text-green-400 border border-green-700/50 py-3 rounded-xl font-medium transition-colors">
            <CheckCircle className="w-5 h-5" /> Sabia!
          </button>
        </div>
      )}
    </div>
  )
}

// ── Smart Review Mode ─────────────────────────────────────────
function SmartReviewMode({ allCards, flashcardResults, onResult }) {
  const [includeUnseen, setIncludeUnseen] = useState(false)
  const [started, setStarted] = useState(false)

  const hardCards = useMemo(
    () => allCards.filter(c => flashcardResults[c.id] === 'hard'),
    [allCards, flashcardResults]
  )
  const unseenCards = useMemo(
    () => allCards.filter(c => !flashcardResults[c.id]),
    [allCards, flashcardResults]
  )
  const deck = useMemo(
    () => includeUnseen ? [...hardCards, ...unseenCards] : hardCards,
    [hardCards, unseenCards, includeUnseen]
  )

  if (started && deck.length > 0) {
    return <StudyMode allCards={deck} onResult={onResult} onExit={() => setStarted(false)} />
  }

  return (
    <div className="max-w-lg mx-auto space-y-5 pt-4">
      {/* Status */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-red-950/40 border border-red-700/30 rounded-2xl p-4 text-center">
          <p className="text-3xl font-black text-red-400">{hardCards.length}</p>
          <p className="text-xs text-red-300 mt-1">marcados como difícil</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center">
          <p className="text-3xl font-black text-gray-400">{unseenCards.length}</p>
          <p className="text-xs text-gray-500 mt-1">ainda não estudados</p>
        </div>
      </div>

      {hardCards.length === 0 && (
        <div className="bg-green-950/30 border border-green-700/30 rounded-2xl p-5 flex gap-3 items-start">
          <CheckCircle size={20} className="text-green-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-green-300 font-semibold text-sm">Nenhum card difícil!</p>
            <p className="text-green-400/70 text-xs mt-0.5">Você ainda não marcou nenhum card como difícil. Estude pelo modo "Estudar" e marque os que não souber.</p>
          </div>
        </div>
      )}

      {hardCards.length > 0 && (
        <div className="bg-amber-950/30 border border-amber-700/30 rounded-2xl p-4 flex gap-3 items-start">
          <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <p className="text-amber-300 text-sm">Revise só os cards que você errou. Responda "Sabia!" para removê-los da fila de revisão.</p>
        </div>
      )}

      {/* Opção: incluir não vistos */}
      <button
        onClick={() => setIncludeUnseen(v => !v)}
        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-colors
          ${includeUnseen ? 'bg-blue-900/20 border-blue-700/40' : 'bg-gray-900 border-gray-800 hover:border-gray-700'}`}
      >
        <div className="text-left">
          <p className="text-white text-sm font-medium">Incluir cards não estudados</p>
          <p className="text-gray-500 text-xs mt-0.5">Adiciona {unseenCards.length} cards novos ao deck de revisão</p>
        </div>
        <div className={`w-10 h-6 rounded-full transition-colors flex items-center px-1 ${includeUnseen ? 'bg-blue-600' : 'bg-gray-700'}`}>
          <div className={`w-4 h-4 rounded-full bg-white transition-transform ${includeUnseen ? 'translate-x-4' : 'translate-x-0'}`} />
        </div>
      </button>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 flex justify-between text-sm">
        <span className="text-gray-400">Total do deck</span>
        <span className="text-white font-bold">{deck.length} cards</span>
      </div>

      <button
        onClick={() => setStarted(true)}
        disabled={deck.length === 0}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-base transition-all active:scale-[0.98]"
      >
        {deck.length === 0 ? 'Nenhum card para revisar' : `Revisar ${deck.length} card${deck.length !== 1 ? 's' : ''}`}
      </button>
    </div>
  )
}

// ── Create Mode ───────────────────────────────────────────────
function CreateMode({ onSave }) {
  const [form, setForm] = useState({ frente: '', verso: '', dica: '', categoria: 'Diagnóstico', dificuldade: 'Médio', especialidade: 'Clínica Médica' })
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const save = () => {
    if (!form.frente || !form.verso) return
    onSave({ ...form, id: `custom_${Date.now()}`, tags: [] })
    setForm({ frente: '', verso: '', dica: '', categoria: 'Diagnóstico', dificuldade: 'Médio', especialidade: 'Clínica Médica' })
  }

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <h2 className="text-lg font-bold text-white">Criar Flashcard</h2>
      {[
        { k: 'frente', label: 'Pergunta (frente)', placeholder: 'Qual é o tratamento de primeira linha para...', multi: true },
        { k: 'verso', label: 'Resposta (verso)', placeholder: 'A primeira linha é...', multi: true },
        { k: 'dica', label: 'Dica (opcional)', placeholder: 'Lembre-se de...', multi: false },
      ].map(f => (
        <div key={f.k}>
          <label className="text-sm text-gray-400 block mb-1">{f.label}</label>
          {f.multi
            ? <textarea rows={3} value={form[f.k]} onChange={e => update(f.k, e.target.value)} placeholder={f.placeholder}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-xl border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm resize-none" />
            : <input type="text" value={form[f.k]} onChange={e => update(f.k, e.target.value)} placeholder={f.placeholder}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-xl border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm" />
          }
        </div>
      ))}
      <div className="grid grid-cols-3 gap-3">
        {[
          { k: 'categoria', options: ['Diagnóstico', 'Tratamento', 'Farmacologia', 'Comunicação', 'Exames'] },
          { k: 'dificuldade', options: ['Fácil', 'Médio', 'Difícil'] },
          { k: 'especialidade', options: ['Clínica Médica', 'Cirurgia', 'Pediatria', 'GO', 'Saúde Mental', 'Preventiva'] },
        ].map(s => (
          <div key={s.k}>
            <label className="text-xs text-gray-400 block mb-1 capitalize">{s.k}</label>
            <select value={form[s.k]} onChange={e => update(s.k, e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm">
              {s.options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        ))}
      </div>
      <button onClick={save} disabled={!form.frente || !form.verso}
        className="w-full bg-clinical-600 hover:bg-clinical-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition-colors">
        Salvar Flashcard
      </button>
    </div>
  )
}

// ── Main Page ──────────────────────────────────────────────────
export default function Flashcards() {
  const [mode, setMode] = useState('library')
  const {
    favoriteFlashcards, toggleFavoriteFlashcard,
    myFlashcards, addMyFlashcard, removeMyFlashcard, updateMyFlashcard,
    flashcardResults,
    recordFlashcardResult: addFlashcardResult,
  } = useAppStore()
  const allCards = useMemo(() => [...PREMADE_FLASHCARDS, ...myFlashcards], [myFlashcards])
  const myCardIds = useMemo(() => new Set(myFlashcards.map(c => c.id)), [myFlashcards])
  const hardCount = useMemo(() => allCards.filter(c => flashcardResults[c.id] === 'hard').length, [allCards, flashcardResults])

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">Flashcards 360°</h1>
            <p className="text-sm text-gray-400">{allCards.length} cards · {favoriteFlashcards.length} favoritos · {myFlashcards.length} criados</p>
          </div>
          {hardCount > 0 && (
            <button onClick={() => setMode('revisao')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-900/30 border border-red-700/40 rounded-xl text-red-400 text-xs font-semibold hover:bg-red-900/50 transition-colors">
              <Brain size={13} /> {hardCount} para revisar
            </button>
          )}
        </div>
        <div className="flex gap-1 flex-wrap">
          {MODES.map(m => {
            const Icon = m.icon
            return (
              <button key={m.id} onClick={() => setMode(m.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors
                  ${mode === m.id ? 'bg-clinical-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}>
                <Icon className="w-4 h-4" />
                {m.label}
                {m.id === 'revisao' && hardCount > 0 && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">{hardCount}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {mode === 'library'  && <LibraryMode allCards={allCards} favorites={favoriteFlashcards} onFavorite={toggleFavoriteFlashcard} myCardIds={myCardIds} onEdit={(id, updates) => updateMyFlashcard(id, updates)} onDelete={removeMyFlashcard} />}
        {mode === 'study'    && <StudyMode allCards={allCards} onResult={(id, r) => addFlashcardResult(id, r)} />}
        {mode === 'revisao'  && <SmartReviewMode allCards={allCards} flashcardResults={flashcardResults} onResult={(id, r) => addFlashcardResult(id, r)} />}
        {mode === 'create'   && <CreateMode onSave={addMyFlashcard} />}
      </div>
    </div>
  )
}
