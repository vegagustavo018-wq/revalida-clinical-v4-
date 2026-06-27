export const FORMULAS = [
  {
    id: 'imc',
    nome: 'IMC (Índice de Massa Corporal)',
    formula: 'IMC = Peso (kg) / Altura² (m)',
    descricao: 'Triagem para sobrepeso/obesidade em adultos',
    campos: [
      { id: 'peso', label: 'Peso (kg)', tipo: 'number', placeholder: '70' },
      { id: 'altura', label: 'Altura (m)', tipo: 'number', placeholder: '1.70' },
    ],
    calcular: (v) => {
      const r = v.peso / (v.altura * v.altura)
      return isNaN(r) || !isFinite(r) ? null : r
    },
    interpretar: (r) => {
      if (r < 18.5) return { nivel: 'Baixo peso', cor: 'blue' }
      if (r < 25) return { nivel: 'Peso normal', cor: 'green' }
      if (r < 30) return { nivel: 'Sobrepeso', cor: 'yellow' }
      if (r < 35) return { nivel: 'Obesidade grau I', cor: 'orange' }
      if (r < 40) return { nivel: 'Obesidade grau II', cor: 'red' }
      return { nivel: 'Obesidade grau III (mórbida)', cor: 'red' }
    },
    unidade: 'kg/m²',
    dica: 'IMC é uma triagem, não diagnóstico. Atletas podem ter IMC alto sem excesso de gordura.',
    sistema: 'Endócrino'
  },
  {
    id: 'crcl',
    nome: 'CrCl — Depuração de Creatinina (Cockcroft-Gault)',
    formula: 'CrCl = [(140 - Idade) × Peso] / [72 × Cr] × 0,85 (se mulher)',
    descricao: 'Estimativa da taxa de filtração glomerular para ajuste de dose de medicações',
    campos: [
      { id: 'idade', label: 'Idade (anos)', tipo: 'number', placeholder: '60' },
      { id: 'peso', label: 'Peso (kg)', tipo: 'number', placeholder: '70' },
      { id: 'creatinina', label: 'Creatinina sérica (mg/dL)', tipo: 'number', placeholder: '1.0' },
      { id: 'sexo', label: 'Sexo', tipo: 'select', opcoes: ['Masculino', 'Feminino'] },
    ],
    calcular: (v) => {
      const fator = v.sexo === 'Feminino' ? 0.85 : 1
      const r = ((140 - v.idade) * v.peso) / (72 * v.creatinina) * fator
      return isNaN(r) ? null : r
    },
    interpretar: (r) => {
      if (r >= 90) return { nivel: 'Normal (G1)', cor: 'green' }
      if (r >= 60) return { nivel: 'Redução leve (G2)', cor: 'yellow' }
      if (r >= 30) return { nivel: 'Redução moderada (G3)', cor: 'orange' }
      if (r >= 15) return { nivel: 'Redução grave (G4)', cor: 'red' }
      return { nivel: 'Falência renal (G5)', cor: 'red' }
    },
    unidade: 'mL/min',
    dica: 'CrCl <30: ajustar antibióticos, anticoagulantes, metformina. <15: contraindicar metformina.',
    sistema: 'Renal'
  },
  {
    id: 'anion-gap',
    nome: 'Anion Gap (Ânion Gap)',
    formula: 'AG = Na⁺ − (Cl⁻ + HCO₃⁻)',
    descricao: 'Diferenciação de tipos de acidose metabólica',
    campos: [
      { id: 'na', label: 'Sódio — Na⁺ (mEq/L)', tipo: 'number', placeholder: '140' },
      { id: 'cl', label: 'Cloro — Cl⁻ (mEq/L)', tipo: 'number', placeholder: '104' },
      { id: 'hco3', label: 'Bicarbonato — HCO₃⁻ (mEq/L)', tipo: 'number', placeholder: '24' },
    ],
    calcular: (v) => v.na - (v.cl + v.hco3),
    interpretar: (r) => {
      if (r <= 12) return { nivel: 'Normal (8–12)', cor: 'green' }
      if (r <= 20) return { nivel: 'Levemente aumentado', cor: 'yellow' }
      return { nivel: 'AUMENTADO — acidose com AG alto', cor: 'red' }
    },
    unidade: 'mEq/L',
    dica: 'AG alto: MUDPILES (Metanol, Uremia, DKA, Propileno, Isoniazida, Lactato, Etileno, Salicilatos). AG normal: HARDASS (Hiperalimentação, Acetazolamida, Renal tubular, Diarreia...).',
    sistema: 'Renal'
  },
  {
    id: 'osmolalidade',
    nome: 'Osmolalidade Plasmática',
    formula: 'Osm = 2×Na⁺ + Glicose/18 + BUN/2,8',
    descricao: 'Tonicidade do plasma — detecta hiperosmolaridade e gap osmolar',
    campos: [
      { id: 'na', label: 'Sódio — Na⁺ (mEq/L)', tipo: 'number', placeholder: '140' },
      { id: 'glicose', label: 'Glicose (mg/dL)', tipo: 'number', placeholder: '90' },
      { id: 'bun', label: 'BUN / Ureia (mg/dL)', tipo: 'number', placeholder: '14' },
    ],
    calcular: (v) => 2 * v.na + v.glicose / 18 + v.bun / 2.8,
    interpretar: (r) => {
      if (r < 275) return { nivel: 'Hipoosmolar (<275)', cor: 'blue' }
      if (r <= 295) return { nivel: 'Normal (275–295)', cor: 'green' }
      if (r <= 320) return { nivel: 'Hiperosmolar leve', cor: 'yellow' }
      return { nivel: 'Hiperosmolar grave (>320)', cor: 'red' }
    },
    unidade: 'mOsm/kg',
    dica: 'Estado hiperosmolar hiperglicêmico: >320 mOsm/kg com glicose >600 mg/dL',
    sistema: 'Endócrino'
  },
  {
    id: 'glasgow',
    nome: 'Glasgow Coma Scale (calculadora rápida)',
    formula: 'GCS = Olhos(1-4) + Verbal(1-5) + Motor(1-6)',
    descricao: 'Avaliação do nível de consciência',
    campos: [
      {
        id: 'olhos', label: 'Abertura Ocular', tipo: 'select',
        opcoes: ['4 — Espontânea', '3 — À voz', '2 — À dor', '1 — Ausente']
      },
      {
        id: 'verbal', label: 'Resposta Verbal', tipo: 'select',
        opcoes: ['5 — Orientado', '4 — Confuso', '3 — Palavras inapropriadas', '2 — Sons incompreensíveis', '1 — Ausente']
      },
      {
        id: 'motor', label: 'Resposta Motora', tipo: 'select',
        opcoes: ['6 — Obedece', '5 — Localiza', '4 — Retirada', '3 — Flexão', '2 — Extensão', '1 — Ausente']
      },
    ],
    calcular: (v) => {
      const o = parseInt(v.olhos) || 0
      const vr = parseInt(v.verbal) || 0
      const m = parseInt(v.motor) || 0
      return o + vr + m
    },
    interpretar: (r) => {
      if (r >= 13) return { nivel: 'Leve (13–15)', cor: 'green' }
      if (r >= 9) return { nivel: 'Moderado (9–12)', cor: 'yellow' }
      return { nivel: 'Grave — coma (≤8): intubar!', cor: 'red' }
    },
    unidade: 'pontos (3–15)',
    dica: 'GCS ≤8: não protege via aérea → IOT. GCS 3 = coma profundo.',
    sistema: 'Neurologia'
  },
  {
    id: 'bsa',
    nome: 'BSA (Área de Superfície Corporal) — Mosteller',
    formula: 'BSA = √[(Altura cm × Peso kg) / 3600]',
    descricao: 'Dosagem de quimioterápicos e avaliação de queimaduras',
    campos: [
      { id: 'peso', label: 'Peso (kg)', tipo: 'number', placeholder: '70' },
      { id: 'altura', label: 'Altura (cm)', tipo: 'number', placeholder: '170' },
    ],
    calcular: (v) => Math.sqrt((v.altura * v.peso) / 3600),
    interpretar: (r) => ({
      nivel: `BSA: ${r.toFixed(2)} m² — Adulto médio: 1,7–1,9 m²`,
      cor: 'green'
    }),
    unidade: 'm²',
    dica: 'Queimaduras: regra dos 9s para % SCQ. BSA usado para quimio (mg/m²).',
    sistema: 'Geral'
  },
  {
    id: 'na-corr',
    nome: 'Sódio Corrigido (Hiperglicemia)',
    formula: 'Na corrigido = Na medido + 0,016 × (Glicose − 100)',
    descricao: 'Correção do sódio falso-baixo em hiperglicemia',
    campos: [
      { id: 'na', label: 'Sódio medido (mEq/L)', tipo: 'number', placeholder: '130' },
      { id: 'glicose', label: 'Glicose (mg/dL)', tipo: 'number', placeholder: '600' },
    ],
    calcular: (v) => v.na + 0.016 * (v.glicose - 100),
    interpretar: (r) => {
      if (r < 135) return { nivel: 'Hiponatremia verdadeira (<135)', cor: 'blue' }
      if (r <= 145) return { nivel: 'Sódio normal (135–145)', cor: 'green' }
      return { nivel: 'Hipernatremia (>145)', cor: 'red' }
    },
    unidade: 'mEq/L',
    dica: 'Em DKA/EHHA: sódio medido pode estar falsamente baixo pela hiperglicemia',
    sistema: 'Endócrino'
  },
  {
    id: 'fio2-pao2',
    nome: 'Relação PaO₂/FiO₂ (Índice de Berlin para SARA)',
    formula: 'P/F ratio = PaO₂ (mmHg) / FiO₂ (fração decimal)',
    descricao: 'Classificação da síndrome do desconforto respiratório agudo (SARA)',
    campos: [
      { id: 'pao2', label: 'PaO₂ (mmHg)', tipo: 'number', placeholder: '80' },
      { id: 'fio2', label: 'FiO₂ (ex: 0.40 para 40%)', tipo: 'number', placeholder: '0.40' },
    ],
    calcular: (v) => v.pao2 / v.fio2,
    interpretar: (r) => {
      if (r > 300) return { nivel: 'Normal (>300)', cor: 'green' }
      if (r >= 200) return { nivel: 'SARA leve (200–300)', cor: 'yellow' }
      if (r >= 100) return { nivel: 'SARA moderada (100–200)', cor: 'orange' }
      return { nivel: 'SARA grave (<100) — VM protetora', cor: 'red' }
    },
    unidade: 'mmHg',
    dica: 'SARA grave (P/F<100): posição prona por ≥16h/dia reduz mortalidade',
    sistema: 'Respiratório'
  },
  {
    id: 'dose-ped',
    nome: 'Dose Pediátrica (por Peso)',
    formula: 'Dose = Dose mg/kg × Peso da criança',
    descricao: 'Cálculo de dose para crianças baseado no peso',
    campos: [
      { id: 'dose', label: 'Dose (mg/kg)', tipo: 'number', placeholder: '10' },
      { id: 'peso', label: 'Peso da criança (kg)', tipo: 'number', placeholder: '15' },
      { id: 'doseMax', label: 'Dose máxima adulto (mg) — opcional', tipo: 'number', placeholder: '500' },
    ],
    calcular: (v) => {
      const calc = v.dose * v.peso
      if (v.doseMax && calc > v.doseMax) return v.doseMax
      return calc
    },
    interpretar: (r) => ({ nivel: `Dose calculada: ${r} mg`, cor: 'green' }),
    unidade: 'mg',
    dica: 'Sempre verificar dose máxima — crianças grandes podem ultrapassar dose adulto',
    sistema: 'Pediatria'
  },
  {
    id: 'weight-bp',
    nome: 'Pressão Arterial Esperada na Criança',
    formula: 'PAS normal = 90 + (2 × Idade em anos)',
    descricao: 'Estima PA sistólica mínima esperada para a idade',
    campos: [
      { id: 'idade', label: 'Idade (anos)', tipo: 'number', placeholder: '5' },
    ],
    calcular: (v) => 70 + (2 * v.idade),
    interpretar: (r) => ({
      nivel: `PAS mínima esperada: ${r} mmHg — Hipotensão se abaixo disso`,
      cor: 'green'
    }),
    unidade: 'mmHg',
    dica: 'Hipotensão pediátrica (PALS): PAS < 70 + (2 × idade) em <10 anos',
    sistema: 'Pediatria'
  },
]
