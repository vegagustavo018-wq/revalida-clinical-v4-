import { AlertTriangle } from 'lucide-react'
import { Card } from '../components/UI/Card'
import { Badge } from '../components/UI/Badge'

const ERRORS = [
  { id: 1, area: 'Cardiologia', erro: 'Não solicitar ECG nos primeiros 10 min de dor torácica', impacto: 'Grave', consequencia: 'Atraso no diagnóstico de IAM — perda de miocárdio' },
  { id: 2, area: 'Neurologia', erro: 'Não calcular NIH Stroke Scale antes de trombolítico', impacto: 'Grave', consequencia: 'Contraindicação ao tPA se score alto sem avaliação' },
  { id: 3, area: 'Pediatria', erro: 'Calcular dose de medicamento pelo peso estimado sem confirmar', impacto: 'Grave', consequencia: 'Subdose ou superdose — risco de vida' },
  { id: 4, area: 'GO', erro: 'Não verificar IG antes de prescrever MgSO4 em pré-eclâmpsia', impacto: 'Moderado', consequencia: 'Decisão terapêutica inadequada para idade gestacional' },
  { id: 5, area: 'Geral', erro: 'Não higienizar as mãos ao entrar/sair', impacto: 'Grave', consequencia: 'Perde pontos críticos na maioria das estações' },
  { id: 6, area: 'Comunicação', erro: 'Não se apresentar pelo nome no início da consulta', impacto: 'Moderado', consequencia: 'Perda de pontos no checklist de comunicação' },
  { id: 7, area: 'Cardiologia', erro: 'Prescrever AAS sem checar alergia a AINE', impacto: 'Grave', consequencia: 'Risco de anafilaxia em paciente alérgico' },
  { id: 8, area: 'Emergência', erro: 'Não monitorar em MOVE (Monitor-O2-Veia-Exames)', impacto: 'Moderado', consequencia: 'Monitoramento incompleto em emergência' },
]

export default function ErrorRepository() {
  return (
    <div className="overflow-y-auto h-full p-6 space-y-4">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Repositório de Erros Comuns</h2>
        <p className="text-gray-400 text-sm">Erros frequentemente cometidos nas estações do Revalida.</p>
      </div>
      <div className="space-y-3">
        {ERRORS.map((e) => (
          <Card key={e.id} className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-900/40 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle size={16} className="text-red-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="blue">{e.area}</Badge>
                  <Badge variant={e.impacto === 'Grave' ? 'red' : 'yellow'}>{e.impacto}</Badge>
                </div>
                <p className="text-white font-medium text-sm mb-1">{e.erro}</p>
                <p className="text-gray-400 text-xs">Consequência: {e.consequencia}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
