import { useState, useMemo } from 'react'
import { AlertTriangle, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { Card } from '../components/UI/Card'
import { Badge } from '../components/UI/Badge'
import { ERROS_CLINICOS, CATEGORIAS_ERRO } from '../data/errors'

const IMPACTO_VARIANT = { Grave: 'red', Moderado: 'yellow', Leve: 'blue' }

function ErroCard({ e }) {
  const [aberto, setAberto] = useState(false)

  return (
    <Card className="p-4 cursor-pointer hover:ring-1 hover:ring-blue-500/40 transition-all" onClick={() => setAberto(v => !v)}>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-red-900/40 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
          <AlertTriangle size={15} className="text-red-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Badge variant="blue">{e.especialidade}</Badge>
            <Badge variant={IMPACTO_VARIANT[e.impacto]}>{e.impacto}</Badge>
          </div>
          <p className="text-white font-medium text-sm leading-snug">{e.erro}</p>

          {aberto && (
            <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
              <div>
                <p className="text-xs text-red-400 font-semibold uppercase tracking-wide mb-0.5">Consequência</p>
                <p className="text-gray-300 text-sm">{e.consequencia}</p>
              </div>
              <div>
                <p className="text-xs text-green-400 font-semibold uppercase tracking-wide mb-0.5">Dica / Como evitar</p>
                <p className="text-gray-300 text-sm">{e.dica}</p>
              </div>
            </div>
          )}
        </div>
        <div className="shrink-0 text-gray-500 mt-0.5">
          {aberto ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
    </Card>
  )
}

export default function ErrorRepository() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos')
  const [busca, setBusca] = useState('')

  const errosFiltrados = useMemo(() => {
    return ERROS_CLINICOS.filter(e => {
      const matchCategoria = categoriaAtiva === 'todos' || e.categoria === categoriaAtiva
      const q = busca.toLowerCase()
      const matchBusca = !q || e.erro.toLowerCase().includes(q) || e.especialidade.toLowerCase().includes(q) || e.consequencia.toLowerCase().includes(q)
      return matchCategoria && matchBusca
    })
  }, [categoriaAtiva, busca])

  const totalGrave = errosFiltrados.filter(e => e.impacto === 'Grave').length

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-0 space-y-4 shrink-0">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Repositório de Erros</h2>
          <p className="text-gray-400 text-sm">
            {errosFiltrados.length} erros encontrados — <span className="text-red-400">{totalGrave} graves</span>
          </p>
        </div>

        {/* Busca */}
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar erro, especialidade..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Filtro de categorias */}
        <div className="flex gap-2 flex-wrap pb-2">
          {CATEGORIAS_ERRO.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                categoriaAtiva === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lista */}
      <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-3">
        {errosFiltrados.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <AlertTriangle size={32} className="mx-auto mb-3 opacity-30" />
            <p>Nenhum erro encontrado para essa busca.</p>
          </div>
        ) : (
          errosFiltrados.map(e => <ErroCard key={e.id} e={e} />)
        )}
      </div>
    </div>
  )
}
