import { Brain, Key, AlertCircle } from 'lucide-react'
import { Card } from '../components/UI/Card'
import { Button } from '../components/UI/Button'
import { useState } from 'react'

export default function DiagnosticAI() {
  const [apiKey, setApiKey] = useState(localStorage.getItem('ANTHROPIC_KEY') || '')
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const saveKey = () => {
    localStorage.setItem('ANTHROPIC_KEY', apiKey)
    setError('')
    alert('API Key salva!')
  }

  const analyze = async () => {
    const key = localStorage.getItem('ANTHROPIC_KEY')
    if (!key) { setError('Configure sua API Key primeiro.'); return }
    if (!input.trim()) { setError('Descreva a apresentação clínica.'); return }
    setLoading(true); setError(''); setResult(null)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': key,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1500,
          messages: [{
            role: 'user',
            content: `Você é um médico especialista preparando candidatos para o Revalida (prova prática brasileira).

Analise esta apresentação clínica e gere um diagnóstico 360°:
"${input}"

Responda em JSON com esta estrutura exata:
{
  "hipotesePrincipal": "string",
  "diferenciais": [{"doenca": "string", "prob": "Alta|Media|Baixa", "diferenciador": "string"}],
  "examesUrgentes": ["string"],
  "examesImportantes": ["string"],
  "tratamentoImediato": ["string"],
  "redFlags": ["string"],
  "perola": "string"
}`
          }]
        })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error.message)
      const text = data.content[0].text
      const json = JSON.parse(text.match(/\{[\s\S]*\}/)[0])
      setResult(json)
    } catch (e) {
      setError('Erro: ' + e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="overflow-y-auto h-full p-6 space-y-5 max-w-3xl">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Diagnóstico com IA</h2>
        <p className="text-gray-400 text-sm">Análise 360° de apresentação clínica usando Claude.</p>
      </div>

      {/* API Key config */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Key size={16} className="text-yellow-400" />
          <span className="text-yellow-300 text-sm font-medium">Configurar API Key (Anthropic)</span>
        </div>
        <div className="flex gap-2">
          <input
            type="password"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            placeholder="sk-ant-v7-..."
            className="flex-1 bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-clinical-500"
          />
          <Button size="sm" onClick={saveKey}>Salvar</Button>
        </div>
      </Card>

      {/* Input */}
      <Card className="p-4 space-y-3">
        <div className="text-white font-medium text-sm flex items-center gap-2">
          <Brain size={16} className="text-clinical-400" />
          Apresentação Clínica
        </div>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ex: Homem 58 anos, dor torácica em aperto há 2h, irradiando para MSE, sudorese..."
          className="w-full bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-clinical-500 resize-none"
          rows={4}
        />
        {error && (
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <AlertCircle size={14} /> {error}
          </div>
        )}
        <Button onClick={analyze} disabled={loading} className="w-full">
          {loading ? 'Analisando...' : 'Gerar Diagnóstico 360°'}
        </Button>
      </Card>

      {/* Result */}
      {result && (
        <div className="space-y-4">
          <Card className="p-4">
            <div className="text-clinical-400 text-xs font-medium uppercase mb-2">Hipótese Principal</div>
            <div className="text-white text-xl font-bold">{result.hipotesePrincipal}</div>
          </Card>

          <Card className="p-4">
            <div className="text-gray-400 text-xs font-medium uppercase mb-3">Diagnósticos Diferenciais</div>
            <div className="space-y-2">
              {result.diferenciais?.map((d, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 rounded-lg p-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    d.prob === 'Alta' ? 'bg-red-900/60 text-red-300' :
                    d.prob === 'Media' ? 'bg-yellow-900/60 text-yellow-300' :
                    'bg-gray-700 text-gray-300'
                  }`}>{d.prob}</span>
                  <div>
                    <div className="text-white text-sm font-medium">{d.doenca}</div>
                    <div className="text-gray-400 text-xs">{d.diferenciador}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4">
              <div className="text-red-400 text-xs font-medium uppercase mb-2">Exames Urgentes</div>
              <ul className="space-y-1">{result.examesUrgentes?.map((e, i) => <li key={i} className="text-gray-300 text-sm">• {e}</li>)}</ul>
            </Card>
            <Card className="p-4">
              <div className="text-blue-400 text-xs font-medium uppercase mb-2">Exames Importantes</div>
              <ul className="space-y-1">{result.examesImportantes?.map((e, i) => <li key={i} className="text-gray-300 text-sm">• {e}</li>)}</ul>
            </Card>
          </div>

          <Card className="p-4">
            <div className="text-green-400 text-xs font-medium uppercase mb-2">Tratamento Imediato</div>
            <ul className="space-y-1">{result.tratamentoImediato?.map((t, i) => <li key={i} className="text-gray-300 text-sm">• {t}</li>)}</ul>
          </Card>

          {result.redFlags?.length > 0 && (
            <Card className="p-4 border-red-900/50">
              <div className="text-red-400 text-xs font-medium uppercase mb-2">Red Flags</div>
              <ul className="space-y-1">{result.redFlags.map((f, i) => <li key={i} className="text-red-300 text-sm">⚠ {f}</li>)}</ul>
            </Card>
          )}

          {result.perola && (
            <Card className="p-4 border-yellow-900/50 bg-yellow-900/10">
              <div className="text-yellow-400 text-xs font-medium uppercase mb-1">Pérola do Revalida</div>
              <div className="text-yellow-200 text-sm">{result.perola}</div>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
