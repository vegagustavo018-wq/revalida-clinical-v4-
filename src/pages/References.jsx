import { useState, useMemo } from 'react'
import { Search, FlaskConical, Stethoscope, Calculator, Pill, Brain, Activity } from 'lucide-react'
import { LABORATORIES as LABS } from '../data/references/laboratories'
import { CRITERIA } from '../data/references/criteria'
import { FORMULAS } from '../data/references/formulas'
import { DRUGS } from '../data/references/drugs'
import { MNEMONICS } from '../data/references/mnemonics'
import { EXAMS } from '../data/references/exams'

const TABS = [
  { id: 'labs', label: 'Laboratório', icon: FlaskConical },
  { id: 'exams', label: 'Exames', icon: Activity },
  { id: 'criteria', label: 'Critérios', icon: Stethoscope },
  { id: 'formulas', label: 'Fórmulas', icon: Calculator },
  { id: 'drugs', label: 'Drogas', icon: Pill },
  { id: 'mnemonics', label: 'Mnemônicos', icon: Brain },
]

// ── Lab ──────────────────────────────────────────────────────────
function LabCard({ lab }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-gray-750 transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full bg-clinical-600/20 text-clinical-400 font-medium">{lab.categoria}</span>
          <span className="font-semibold text-white">{lab.nome}</span>
        </div>
        <span className="text-gray-400 text-sm">{lab.unidade}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-700 pt-3">
          <div className="grid grid-cols-3 gap-2 text-sm">
            {lab.normalH && <div className="bg-gray-700 rounded p-2"><p className="text-gray-400 text-xs">Homem</p><p className="text-white font-mono">{lab.normalH}</p></div>}
            {lab.normalM && <div className="bg-gray-700 rounded p-2"><p className="text-gray-400 text-xs">Mulher</p><p className="text-white font-mono">{lab.normalM}</p></div>}
            {lab.normalC && <div className="bg-gray-700 rounded p-2"><p className="text-gray-400 text-xs">Criança</p><p className="text-white font-mono">{lab.normalC}</p></div>}
          </div>
          {lab.aumentoSugere?.length > 0 && (
            <div><p className="text-xs text-red-400 font-medium mb-1">↑ Aumento sugere:</p>
              <div className="flex flex-wrap gap-1">{lab.aumentoSugere.map(s => <span key={s} className="text-xs bg-red-900/30 text-red-300 px-2 py-0.5 rounded">{s}</span>)}</div></div>
          )}
          {lab.reducaoSugere?.length > 0 && (
            <div><p className="text-xs text-blue-400 font-medium mb-1">↓ Redução sugere:</p>
              <div className="flex flex-wrap gap-1">{lab.reducaoSugere.map(s => <span key={s} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded">{s}</span>)}</div></div>
          )}
          {lab.dica && <div className="bg-yellow-900/20 border border-yellow-700/30 rounded p-2"><p className="text-yellow-300 text-xs">💡 {lab.dica}</p></div>}
        </div>
      )}
    </div>
  )
}

function LabsTab({ query }) {
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return LABS.filter(l => !q || l.nome.toLowerCase().includes(q) || l.categoria.toLowerCase().includes(q) || l.sistema?.toLowerCase().includes(q))
  }, [query])
  const cats = useMemo(() => [...new Set(filtered.map(l => l.categoria))], [filtered])
  return (
    <div className="space-y-6">
      {cats.map(cat => (
        <div key={cat}>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">{cat}</h3>
          <div className="space-y-2">{filtered.filter(l => l.categoria === cat).map(l => <LabCard key={l.id} lab={l} />)}</div>
        </div>
      ))}
      {filtered.length === 0 && <p className="text-gray-500 text-center py-8">Nenhum exame encontrado.</p>}
    </div>
  )
}

// ── Exams ──────────────────────────────────────────────────────
function ExamCard({ exam }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-gray-750 transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full bg-clinical-600/20 text-clinical-400 font-medium">{exam.categoria}</span>
          <span className="font-semibold text-white">{exam.nome}</span>
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-4 border-t border-gray-700 pt-3">
          <p className="text-gray-300 text-sm">{exam.descricao}</p>
          {exam.passos?.length > 0 && (
            <div>
              <p className="text-xs font-bold text-clinical-400 mb-2">PASSO A PASSO</p>
              <ol className="space-y-2">
                {exam.passos.map(p => (
                  <li key={p.passo} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-clinical-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">{p.passo}</span>
                    <div><p className="text-white text-sm font-medium">{p.titulo}</p><p className="text-gray-400 text-xs">{p.descricao}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {exam.achados?.length > 0 && (
            <div>
              <p className="text-xs font-bold text-yellow-400 mb-2">ACHADOS IMPORTANTES</p>
              <div className="space-y-2">
                {exam.achados.map((a, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-3 grid grid-cols-1 gap-1">
                    <p className="text-white text-sm font-medium">📍 {a.achado}</p>
                    <p className="text-clinical-300 text-xs">→ {a.significa}</p>
                    <p className="text-green-400 text-xs font-medium">✅ {a.acao}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {exam.dica && <div className="bg-yellow-900/20 border border-yellow-700/30 rounded p-2"><p className="text-yellow-300 text-xs">💡 {exam.dica}</p></div>}
          {exam.perola && <div className="bg-purple-900/20 border border-purple-700/30 rounded p-2"><p className="text-purple-300 text-xs">💎 {exam.perola}</p></div>}
        </div>
      )}
    </div>
  )
}

function ExamsTab({ query }) {
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return EXAMS.filter(e => !q || e.nome.toLowerCase().includes(q) || e.categoria.toLowerCase().includes(q))
  }, [query])
  const cats = useMemo(() => [...new Set(filtered.map(e => e.categoria))], [filtered])
  return (
    <div className="space-y-6">
      {cats.map(cat => (
        <div key={cat}>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">{cat}</h3>
          <div className="space-y-2">{filtered.filter(e => e.categoria === cat).map(e => <ExamCard key={e.id} exam={e} />)}</div>
        </div>
      ))}
    </div>
  )
}

// ── Criteria ──────────────────────────────────────────────────
function CriteriaCard({ crit }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-gray-750 transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full bg-purple-600/20 text-purple-400 font-medium">{crit.especialidade}</span>
          <span className="font-semibold text-white">{crit.nome}</span>
        </div>
        {crit.mnemônico && <span className="text-gray-500 text-xs italic">{crit.mnemônico}</span>}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-700 pt-3">
          <p className="text-gray-300 text-sm">{crit.descricao}</p>
          {crit.pontos?.length > 0 && (
            <div>
              <p className="text-xs font-bold text-clinical-400 mb-2">CRITÉRIOS / PONTUAÇÃO</p>
              <ul className="space-y-1">
                {crit.pontos.map((p, i) => <li key={i} className="text-sm text-gray-300 flex gap-2"><span className="text-clinical-400">•</span>{p}</li>)}
              </ul>
            </div>
          )}
          {crit.interpretacao?.length > 0 && (
            <div>
              <p className="text-xs font-bold text-yellow-400 mb-2">INTERPRETAÇÃO</p>
              <ul className="space-y-1">
                {crit.interpretacao.map((i, idx) => <li key={idx} className="text-sm text-gray-300 flex gap-2"><span className="text-yellow-400">→</span>{i}</li>)}
              </ul>
            </div>
          )}
          {crit.dica && <div className="bg-yellow-900/20 border border-yellow-700/30 rounded p-2"><p className="text-yellow-300 text-xs">💡 {crit.dica}</p></div>}
        </div>
      )}
    </div>
  )
}

function CriteriaTab({ query }) {
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return CRITERIA.filter(c => !q || c.nome.toLowerCase().includes(q) || c.especialidade.toLowerCase().includes(q))
  }, [query])
  const specs = useMemo(() => [...new Set(filtered.map(c => c.especialidade))], [filtered])
  return (
    <div className="space-y-6">
      {specs.map(spec => (
        <div key={spec}>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">{spec}</h3>
          <div className="space-y-2">{filtered.filter(c => c.especialidade === spec).map(c => <CriteriaCard key={c.id} crit={c} />)}</div>
        </div>
      ))}
    </div>
  )
}

// ── Formulas ──────────────────────────────────────────────────
function FormulaCard({ f }) {
  const [open, setOpen] = useState(false)
  const [vals, setVals] = useState({})
  const [result, setResult] = useState(null)
  const [interp, setInterp] = useState(null)

  const calcular = () => {
    try {
      const r = f.calcular(vals)
      setResult(r)
      setInterp(f.interpretar ? f.interpretar(r) : null)
    } catch {
      setResult('Preencha todos os campos')
    }
  }

  const corMap = { verde: 'text-green-400', amarelo: 'text-yellow-400', laranja: 'text-orange-400', vermelho: 'text-red-400', azul: 'text-blue-400' }

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-gray-750 transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full bg-green-600/20 text-green-400 font-medium">{f.sistema}</span>
          <span className="font-semibold text-white">{f.nome}</span>
        </div>
        <span className="text-gray-500 font-mono text-xs">{f.formula}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-700 pt-3">
          <p className="text-gray-300 text-sm">{f.descricao}</p>
          {f.campos?.length > 0 && (
            <div>
              <p className="text-xs font-bold text-clinical-400 mb-2">CALCULADORA</p>
              <div className="grid grid-cols-2 gap-2">
                {f.campos.map(c => (
                  <div key={c.key}>
                    <label className="text-xs text-gray-400 mb-1 block">{c.label} ({c.unidade})</label>
                    <input type="number" placeholder={c.label}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg text-sm border border-gray-600 focus:border-clinical-500 focus:outline-none"
                      onChange={e => setVals(v => ({ ...v, [c.key]: parseFloat(e.target.value) }))} />
                  </div>
                ))}
              </div>
              <button onClick={calcular} className="mt-3 w-full bg-clinical-600 hover:bg-clinical-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                Calcular
              </button>
              {result !== null && (
                <div className="mt-2 bg-gray-700 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-white">{typeof result === 'number' ? result.toFixed(2) : result} <span className="text-sm text-gray-400">{f.unidade}</span></p>
                  {interp && <p className={`text-sm font-medium mt-1 ${corMap[interp.cor] || 'text-white'}`}>{interp.nivel}</p>}
                </div>
              )}
            </div>
          )}
          {f.dica && <div className="bg-yellow-900/20 border border-yellow-700/30 rounded p-2"><p className="text-yellow-300 text-xs">💡 {f.dica}</p></div>}
        </div>
      )}
    </div>
  )
}

function FormulasTab({ query }) {
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return FORMULAS.filter(f => !q || f.nome.toLowerCase().includes(q) || f.sistema?.toLowerCase().includes(q))
  }, [query])
  return (
    <div className="space-y-2">
      {filtered.map(f => <FormulaCard key={f.id} f={f} />)}
      {filtered.length === 0 && <p className="text-gray-500 text-center py-8">Nenhuma fórmula encontrada.</p>}
    </div>
  )
}

// ── Drugs ──────────────────────────────────────────────────────
function DrugCard({ drug }) {
  const [open, setOpen] = useState(false)
  const catColors = { Emergência: 'bg-red-600/20 text-red-400', Cardiologia: 'bg-pink-600/20 text-pink-400', Infectologia: 'bg-green-600/20 text-green-400', Neurologia: 'bg-purple-600/20 text-purple-400', Endócrino: 'bg-yellow-600/20 text-yellow-400', GO: 'bg-rose-600/20 text-rose-400' }
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-gray-750 transition-colors">
        <div className="flex items-center gap-3">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${catColors[drug.categoria] || 'bg-gray-700 text-gray-300'}`}>{drug.categoria}</span>
          <div className="text-left">
            <p className="font-semibold text-white">{drug.nome}</p>
            <p className="text-xs text-gray-400">{drug.generico} — {drug.classe}</p>
          </div>
        </div>
        {drug.blackBox && <span className="text-xs bg-red-900 text-red-300 px-2 py-0.5 rounded font-bold">⚫ BLACK BOX</span>}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-700 pt-3">
          {drug.mecanismo && <p className="text-gray-300 text-sm"><span className="text-gray-500">Mecanismo:</span> {drug.mecanismo}</p>}
          {drug.indicacoes?.length > 0 && <div><p className="text-xs text-clinical-400 font-bold mb-1">INDICAÇÕES</p><div className="flex flex-wrap gap-1">{drug.indicacoes.map(i => <span key={i} className="text-xs bg-clinical-900/30 text-clinical-300 px-2 py-0.5 rounded">{i}</span>)}</div></div>}
          {drug.dosagem && (
            <div>
              <p className="text-xs text-green-400 font-bold mb-2">DOSAGEM</p>
              {drug.dosagem.adulto?.length > 0 && <div className="mb-1"><p className="text-xs text-gray-500 mb-1">Adulto:</p>{drug.dosagem.adulto.map((d, i) => <p key={i} className="text-sm text-gray-300 font-mono">• {typeof d === 'string' ? d : `${d.indicacao}: ${d.dose}`}</p>)}</div>}
              {drug.dosagem.crianca?.length > 0 && <div><p className="text-xs text-gray-500 mb-1">Criança:</p>{drug.dosagem.crianca.map((d, i) => <p key={i} className="text-sm text-gray-300 font-mono">• {typeof d === 'string' ? d : `${d.indicacao}: ${d.dose}`}</p>)}</div>}
            </div>
          )}
          {drug.contraindicacoes?.length > 0 && <div><p className="text-xs text-red-400 font-bold mb-1">CONTRAINDICAÇÕES</p><div className="flex flex-wrap gap-1">{drug.contraindicacoes.map(c => <span key={c} className="text-xs bg-red-900/30 text-red-300 px-2 py-0.5 rounded">{c}</span>)}</div></div>}
          {drug.efeitosAdversos?.graves && drug.efeitosAdversos.graves.length > 0 && <div><p className="text-xs text-orange-400 font-bold mb-1">EFEITOS GRAVES</p><div className="flex flex-wrap gap-1">{drug.efeitosAdversos.graves.map(e => <span key={e} className="text-xs bg-orange-900/30 text-orange-300 px-2 py-0.5 rounded">{e}</span>)}</div></div>}
          {drug.perola && <div className="bg-purple-900/20 border border-purple-700/30 rounded p-2"><p className="text-purple-300 text-xs">💎 {drug.perola}</p></div>}
          {drug.blackBox && <div className="bg-red-900/30 border border-red-700/50 rounded p-2"><p className="text-red-300 text-xs font-bold">⚫ BLACK BOX: {drug.blackBox}</p></div>}
        </div>
      )}
    </div>
  )
}

function DrugsTab({ query }) {
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return DRUGS.filter(d => !q || d.nome.toLowerCase().includes(q) || d.generico?.toLowerCase().includes(q) || d.classe?.toLowerCase().includes(q) || d.categoria?.toLowerCase().includes(q))
  }, [query])
  const cats = useMemo(() => [...new Set(filtered.map(d => d.categoria))], [filtered])
  return (
    <div className="space-y-6">
      {cats.map(cat => (
        <div key={cat}>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">{cat}</h3>
          <div className="space-y-2">{filtered.filter(d => d.categoria === cat).map(d => <DrugCard key={d.id} drug={d} />)}</div>
        </div>
      ))}
    </div>
  )
}

// ── Mnemonics ──────────────────────────────────────────────────
function MnemonicCard({ m }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-gray-750 transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-1 rounded-full bg-orange-600/20 text-orange-400 font-medium">{m.especialidade}</span>
          <div className="text-left">
            <p className="font-semibold text-white">{m.nome}</p>
            <p className="text-xs text-gray-400">{m.acao}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {m.letras?.slice(0, 6).map(l => (
            <span key={l.letra} className="w-7 h-7 rounded bg-clinical-600 text-white text-xs font-bold flex items-center justify-center">{l.letra}</span>
          ))}
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-700 pt-3">
          <p className="text-gray-300 text-sm">{m.contexto}</p>
          {m.letras?.length > 0 && (
            <div className="space-y-2">
              {m.letras.map(l => (
                <div key={l.letra} className="flex gap-3 items-start">
                  <span className="w-8 h-8 rounded-lg bg-clinical-600 text-white font-bold flex items-center justify-center shrink-0">{l.letra}</span>
                  <div><p className="text-white text-sm font-medium">{l.termo}</p>{l.detalhes && <p className="text-gray-400 text-xs">{l.detalhes}</p>}</div>
                </div>
              ))}
            </div>
          )}
          {m.fluxograma?.length > 0 && (
            <div>
              <p className="text-xs font-bold text-clinical-400 mb-2">FLUXOGRAMA</p>
              <ol className="space-y-1">
                {m.fluxograma.map((step, i) => <li key={i} className="text-sm text-gray-300 flex gap-2"><span className="text-clinical-400 font-mono text-xs mt-0.5">{i+1}.</span>{step}</li>)}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function MnemonicsTab({ query }) {
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return MNEMONICS.filter(m => !q || m.nome.toLowerCase().includes(q) || m.especialidade?.toLowerCase().includes(q) || m.acao?.toLowerCase().includes(q))
  }, [query])
  return (
    <div className="space-y-2">
      {filtered.map(m => <MnemonicCard key={m.id} m={m} />)}
      {filtered.length === 0 && <p className="text-gray-500 text-center py-8">Nenhum mnemônico encontrado.</p>}
    </div>
  )
}

// ── Main Page ──────────────────────────────────────────────────
export default function References() {
  const [tab, setTab] = useState('labs')
  const [query, setQuery] = useState('')

  const counts = {
    labs: LABS.length,
    exams: EXAMS.length,
    criteria: CRITERIA.length,
    formulas: FORMULAS.length,
    drugs: DRUGS.length,
    mnemonics: MNEMONICS.length,
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-xl font-bold text-white">Referências Clínicas</h1>
          <span className="text-xs bg-clinical-600/20 text-clinical-400 px-2 py-1 rounded-full">{Object.values(counts).reduce((a, b) => a + b, 0)} itens</span>
        </div>
        {/* Search */}
        <div className="relative max-w-md mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input type="text" placeholder="Buscar..." value={query} onChange={e => setQuery(e.target.value)}
            className="w-full bg-gray-700 text-white pl-9 pr-4 py-2.5 rounded-xl border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm" />
        </div>
        {/* Tabs */}
        <div className="flex gap-1 flex-wrap">
          {TABS.map(t => {
            const Icon = t.icon
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t.id ? 'bg-clinical-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}>
                <Icon className="w-4 h-4" />
                {t.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${tab === t.id ? 'bg-white/20' : 'bg-gray-700'}`}>{counts[t.id]}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {tab === 'labs' && <LabsTab query={query} />}
        {tab === 'exams' && <ExamsTab query={query} />}
        {tab === 'criteria' && <CriteriaTab query={query} />}
        {tab === 'formulas' && <FormulasTab query={query} />}
        {tab === 'drugs' && <DrugsTab query={query} />}
        {tab === 'mnemonics' && <MnemonicsTab query={query} />}
      </div>
    </div>
  )
}
