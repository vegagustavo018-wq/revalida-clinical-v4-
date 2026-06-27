import { useState, useMemo } from 'react'
import { ChevronRight, AlertTriangle, Stethoscope, FileText, Pill } from 'lucide-react'
import { DISEASES } from '../data/diseases'

function DiseaseDetailCard({ disease }) {
  const [section, setSection] = useState('apresentacao')

  const SECTIONS = [
    { id: 'apresentacao', label: 'Apresentação' },
    { id: 'exames', label: 'Exames' },
    { id: 'tratamento', label: 'Tratamento' },
    { id: 'diferenciais', label: 'DD' },
    { id: 'alertas', label: '⚠️ Alertas' },
  ]

  return (
    <div className="bg-gray-800 border border-clinical-700/50 rounded-2xl overflow-hidden">
      {/* Title */}
      <div className="p-5 border-b border-gray-700 bg-clinical-900/30">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-clinical-400 font-medium mb-1">{disease.especialidade} · {disease.cid}</p>
            <h2 className="text-xl font-bold text-white">{disease.nome}</h2>
          </div>
        </div>
        <p className="text-gray-300 text-sm mt-2">{disease.descricao}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-4 pt-3 border-b border-gray-700 overflow-x-auto">
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)}
            className={`px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors border-b-2 ${section === s.id ? 'border-clinical-500 text-clinical-400' : 'border-transparent text-gray-500 hover:text-gray-300'}`}>
            {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        {section === 'apresentacao' && (
          <div className="space-y-3">
            <p className="text-gray-300 text-sm leading-relaxed">{disease.apresentacao}</p>
            {disease.criterios?.length > 0 && (
              <div>
                <p className="text-xs font-bold text-clinical-400 mb-2 uppercase">Critérios Diagnósticos</p>
                <ul className="space-y-1">{disease.criterios.map((c, i) => <li key={i} className="text-sm text-gray-300 flex gap-2"><span className="text-clinical-500">•</span>{c}</li>)}</ul>
              </div>
            )}
          </div>
        )}

        {section === 'exames' && (
          <div className="space-y-2">
            {disease.exames?.map((e, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-700/50 rounded-lg px-3 py-2">
                <FileText className="w-4 h-4 text-clinical-400 shrink-0" />
                <span className="text-sm text-gray-300">{e}</span>
              </div>
            ))}
          </div>
        )}

        {section === 'tratamento' && (
          <div className="space-y-3">
            <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-4">
              <div className="flex gap-2 items-start">
                <Pill className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <p className="text-green-200 text-sm leading-relaxed">{disease.tratamento}</p>
              </div>
            </div>
          </div>
        )}

        {section === 'diferenciais' && (
          <div className="space-y-2">
            {disease.diferenciais?.map((d, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-700/50 rounded-lg px-3 py-2">
                <Stethoscope className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-sm text-gray-300">{d}</span>
              </div>
            ))}
          </div>
        )}

        {section === 'alertas' && (
          <div className="space-y-2">
            {disease.alertas?.map((a, i) => (
              <div key={i} className="flex items-start gap-2 bg-red-900/20 border border-red-700/30 rounded-lg px-3 py-2">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm text-red-200">{a}</span>
              </div>
            ))}
            {disease.perola && (
              <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg px-3 py-2 mt-3">
                <p className="text-purple-300 text-xs">💎 {disease.perola}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Explorer() {
  const [sistema, setSistema] = useState(null)
  const [sintoma, setSintoma] = useState(null)
  const [disease, setDisease] = useState(null)
  const [search, setSearch] = useState('')

  const allDiseases = useMemo(() => {
    return DISEASES.flatMap(s => s.sintomas.flatMap(sin => sin.doencas.map(d => ({ ...d, sistema: s.sistema, sintoma: sin.sintoma }))))
  }, [])

  const searchResults = useMemo(() => {
    if (!search || search.length < 2) return []
    const q = search.toLowerCase()
    return allDiseases.filter(d =>
      d.nome.toLowerCase().includes(q) ||
      d.descricao?.toLowerCase().includes(q) ||
      d.especialidade?.toLowerCase().includes(q) ||
      d.sistema.toLowerCase().includes(q)
    )
  }, [search, allDiseases])

  const selectedSistema = DISEASES.find(s => s.sistema === sistema)
  const selectedSintoma = selectedSistema?.sintomas.find(s => s.sintoma === sintoma)

  const selectDisease = (d) => {
    setDisease(d)
    setSearch('')
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <h1 className="text-xl font-bold text-white mb-3">Explorador de Doenças</h1>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 flex-wrap">
          <button onClick={() => { setSistema(null); setSintoma(null); setDisease(null) }}
            className={`${!sistema ? 'text-white' : 'hover:text-white'} transition-colors`}>
            Sistemas
          </button>
          {sistema && <>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => { setSintoma(null); setDisease(null) }}
              className={`${!sintoma ? 'text-white' : 'hover:text-white'} transition-colors`}>
              {sistema}
            </button>
          </>}
          {sintoma && <>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => setDisease(null)}
              className={`${!disease ? 'text-white' : 'hover:text-white'} transition-colors`}>
              {sintoma}
            </button>
          </>}
          {disease && <>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{disease.nome}</span>
          </>}
        </div>
        {/* Search */}
        <input type="text" placeholder="Busca rápida de doença..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full max-w-sm bg-gray-700 text-white px-4 py-2 rounded-xl border border-gray-600 focus:border-clinical-500 focus:outline-none text-sm" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Search results */}
        {search.length >= 2 && (
          <div className="space-y-2 mb-4">
            <p className="text-xs text-gray-500 font-medium">{searchResults.length} resultados</p>
            {searchResults.map(d => (
              <button key={d.id} onClick={() => selectDisease(d)}
                className="w-full text-left bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-xl p-4 transition-colors">
                <p className="text-white font-medium">{d.nome}</p>
                <p className="text-xs text-gray-500 mt-1">{d.sistema} → {d.sintoma}</p>
              </button>
            ))}
            {searchResults.length === 0 && <p className="text-gray-500 text-sm">Nenhuma doença encontrada.</p>}
          </div>
        )}

        {/* Level 1: Sistemas */}
        {!sistema && !search && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {DISEASES.map(s => (
              <button key={s.sistema} onClick={() => setSistema(s.sistema)}
                className="bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-clinical-600 rounded-2xl p-5 text-center transition-all group">
                <div className="text-4xl mb-3">{s.icone}</div>
                <p className="font-semibold text-white group-hover:text-clinical-400 transition-colors">{s.sistema}</p>
                <p className="text-xs text-gray-500 mt-1">{s.sintomas.reduce((a, sin) => a + sin.doencas.length, 0)} doenças</p>
              </button>
            ))}
          </div>
        )}

        {/* Level 2: Sintomas */}
        {sistema && !sintoma && !search && (
          <div className="space-y-3">
            {selectedSistema?.sintomas.map(s => (
              <button key={s.sintoma} onClick={() => setSintoma(s.sintoma)}
                className="w-full text-left bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-clinical-600 rounded-xl p-4 flex items-center justify-between transition-all">
                <div>
                  <p className="font-semibold text-white">{s.sintoma}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.doencas.length} doenças</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>
            ))}
          </div>
        )}

        {/* Level 3: Doenças */}
        {sintoma && !disease && !search && (
          <div className="space-y-3">
            {selectedSintoma?.doencas.map(d => (
              <button key={d.id} onClick={() => setDisease(d)}
                className="w-full text-left bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-clinical-600 rounded-xl p-4 flex items-center justify-between transition-all">
                <div>
                  <p className="font-semibold text-white">{d.nome}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">{d.cid}</span>
                    <span className="text-xs bg-clinical-900/40 text-clinical-400 px-2 py-0.5 rounded">{d.especialidade}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>
            ))}
          </div>
        )}

        {/* Level 4: Disease detail */}
        {disease && !search && <DiseaseDetailCard disease={disease} />}
      </div>
    </div>
  )
}
