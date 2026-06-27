import { Heart, Clock, Coffee, Moon } from 'lucide-react'
import { Card } from '../components/UI/Card'

const tips = [
  { icon: Clock, title: 'Pomodoro', desc: '25 min estudo + 5 min pausa. Após 4 ciclos: 15-30 min de descanso.' },
  { icon: Coffee, title: 'Hidratação', desc: 'Beba 500ml de água antes de estudar. Desidratação reduz concentração.' },
  { icon: Moon, title: 'Sono', desc: 'Durma 7-8h. Consolidação da memória ocorre principalmente no sono profundo.' },
  { icon: Heart, title: 'Exercício', desc: '30 min de exercício aeróbico 3x/semana aumenta BDNF e melhora memória.' },
]

export default function WellBeing() {
  return (
    <div className="overflow-y-auto h-full p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Bem-estar & Rotina</h2>
        <p className="text-gray-400 text-sm">Dicas para manter o ritmo e a saúde mental durante a preparação.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="p-5 flex gap-4">
            <div className="w-10 h-10 bg-clinical-600/20 rounded-lg flex items-center justify-center shrink-0">
              <Icon size={20} className="text-clinical-400" />
            </div>
            <div>
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-gray-400 text-sm">{desc}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
