export const LABORATORIES = [
  // ─── HEMOGRAMA ───────────────────────────────────────────────
  {
    id: 'hb', nome: 'Hemoglobina (Hb)', categoria: 'Hemograma',
    normalH: '13,5–17,5 g/dL', normalM: '12,0–16,0 g/dL', normalC: '11,0–15,5 g/dL',
    unidade: 'g/dL',
    aumentoSugere: ['Policitemia vera', 'Desidratação', 'DPOC crônico', 'Tabagismo'],
    reducaoSugere: ['Anemia ferropriva', 'Anemia hemolítica', 'Sangramento', 'Doença crônica'],
    dica: 'Sempre avaliar com MCV para classificar tipo de anemia',
    sistema: 'Hematologia'
  },
  {
    id: 'ht', nome: 'Hematócrito (Ht)', categoria: 'Hemograma',
    normalH: '41–53%', normalM: '36–46%', normalC: '33–42%',
    unidade: '%',
    aumentoSugere: ['Policitemia', 'Desidratação', 'Grandes altitudes'],
    reducaoSugere: ['Anemia', 'Hemodiluição', 'Hemorragia crônica'],
    dica: 'Hb × 3 = Ht (regra do 3)',
    sistema: 'Hematologia'
  },
  {
    id: 'leuco', nome: 'Leucócitos (WBC)', categoria: 'Hemograma',
    normalH: '4.500–11.000/µL', normalM: '4.500–11.000/µL', normalC: '5.000–15.000/µL',
    unidade: '/µL',
    aumentoSugere: ['Infecção bacteriana', 'Leucemia', 'Estresse', 'Corticoides'],
    reducaoSugere: ['Infecção viral', 'Aplasia medular', 'Quimioterapia', 'HIV avançado'],
    dica: 'Desvio à esquerda (bastões) = infecção bacteriana grave',
    sistema: 'Hematologia'
  },
  {
    id: 'plaq', nome: 'Plaquetas', categoria: 'Hemograma',
    normalH: '150.000–400.000/µL', normalM: '150.000–400.000/µL', normalC: '150.000–400.000/µL',
    unidade: '/µL',
    aumentoSugere: ['Trombocitemia essencial', 'Inflamação', 'Pós-esplenectomia'],
    reducaoSugere: ['PTI', 'HIT', 'Dengue', 'Aplasia', 'CID'],
    dica: '<50k = risco hemorrágico; <10k = transfundir',
    sistema: 'Hematologia'
  },
  {
    id: 'vcm', nome: 'VCM (MCV)', categoria: 'Hemograma',
    normalH: '80–100 fL', normalM: '80–100 fL', normalC: '70–90 fL',
    unidade: 'fL',
    aumentoSugere: ['Def. B12/folato', 'Doença hepática', 'Hipotireoidismo', 'Alcoolismo'],
    reducaoSugere: ['Def. ferro', 'Talassemia', 'Anemia sideroblástica'],
    dica: 'Microcítica (<80): ferro | Normocítica (80-100): doença crônica | Macrocítica (>100): B12/folato',
    sistema: 'Hematologia'
  },

  // ─── BIOQUÍMICA ───────────────────────────────────────────────
  {
    id: 'glic', nome: 'Glicose', categoria: 'Bioquímica',
    normalH: '70–99 mg/dL (jejum)', normalM: '70–99 mg/dL (jejum)', normalC: '70–100 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Diabetes mellitus', 'Estresse agudo', 'Corticoides', 'Pancreatite'],
    reducaoSugere: ['Insulinoma', 'Hipoglicemia medicamentosa', 'Jejum prolongado', 'Insuf. adrenal'],
    dica: 'DM2: jejum ≥126 OU TOTG ≥200 OU HbA1c ≥6,5%',
    sistema: 'Endócrino'
  },
  {
    id: 'cr', nome: 'Creatinina', categoria: 'Bioquímica',
    normalH: '0,7–1,2 mg/dL', normalM: '0,5–1,0 mg/dL', normalC: '0,3–0,7 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Insuficiência renal aguda', 'DRC', 'Desidratação', 'Rabdomiólise'],
    reducaoSugere: ['Desnutrição', 'Hepatopatia', 'Baixa massa muscular'],
    dica: 'Dobrou a creatinina = perdeu ~50% da função renal',
    sistema: 'Renal'
  },
  {
    id: 'ur', nome: 'Ureia', categoria: 'Bioquímica',
    normalH: '10–50 mg/dL', normalM: '10–50 mg/dL', normalC: '5–18 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Insuf. renal', 'Desidratação', 'Sangramento GI alto', 'Dieta proteica'],
    reducaoSugere: ['Hepatopatia grave', 'Desnutrição proteica'],
    dica: 'Ureia/Creatinina >40: causa pré-renal; <20: causa intrínseca',
    sistema: 'Renal'
  },
  {
    id: 'na', nome: 'Sódio (Na⁺)', categoria: 'Bioquímica',
    normalH: '135–145 mEq/L', normalM: '135–145 mEq/L', normalC: '135–145 mEq/L',
    unidade: 'mEq/L',
    aumentoSugere: ['Desidratação', 'Diabetes insipidus', 'Hiperaldosteronismo'],
    reducaoSugere: ['SIADH', 'Hipotireoidismo', 'Insuf. adrenal', 'ICC', 'Cirrose'],
    dica: 'Correção de hiponatremia: máximo 8-10 mEq/L em 24h (risco mielinólise)',
    sistema: 'Renal'
  },
  {
    id: 'k', nome: 'Potássio (K⁺)', categoria: 'Bioquímica',
    normalH: '3,5–5,0 mEq/L', normalM: '3,5–5,0 mEq/L', normalC: '3,5–5,5 mEq/L',
    unidade: 'mEq/L',
    aumentoSugere: ['IRA/IRC', 'Hipoaldosteronismo', 'IECA', 'Rabdomiólise', 'Acidose'],
    reducaoSugere: ['Diarreia/vômito', 'Diuréticos tiazídicos', 'Hiperaldosteronismo', 'Alcalose'],
    dica: 'K <3,0: arritmias; K >6,0: ECG imediato (ondas T apiculadas)',
    sistema: 'Renal'
  },
  {
    id: 'cl', nome: 'Cloro (Cl⁻)', categoria: 'Bioquímica',
    normalH: '98–107 mEq/L', normalM: '98–107 mEq/L', normalC: '98–107 mEq/L',
    unidade: 'mEq/L',
    aumentoSugere: ['Acidose metabólica hiperclorrêmica', 'Desidratação'],
    reducaoSugere: ['Vômito', 'Uso de diuréticos', 'Alcalose metabólica'],
    dica: 'Cl baixo + HCO3 alto = vômito ou alcalose contração',
    sistema: 'Renal'
  },
  {
    id: 'ca', nome: 'Cálcio (Ca²⁺)', categoria: 'Bioquímica',
    normalH: '8,5–10,5 mg/dL', normalM: '8,5–10,5 mg/dL', normalC: '8,0–10,5 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Hiperparatireoidismo', 'Neoplasia', 'Sarcoidose', 'Imobilidade'],
    reducaoSugere: ['Hipoparatireoidismo', 'Def. Vitamina D', 'IRC', 'Pancreatite'],
    dica: 'Sinal de Chvostek + Trousseau = hipocalcemia (tetania)',
    sistema: 'Metabolismo'
  },

  // ─── FUNÇÃO HEPÁTICA ──────────────────────────────────────────
  {
    id: 'alt', nome: 'ALT (TGP)', categoria: 'Função Hepática',
    normalH: '<41 U/L', normalM: '<31 U/L', normalC: '<30 U/L',
    unidade: 'U/L',
    aumentoSugere: ['Hepatite viral', 'NASH', 'Hepatotoxicidade', 'Isquemia hepática'],
    reducaoSugere: ['Hepatopatia terminal', 'Deficiência vitamina B6'],
    dica: 'ALT > AST = hepatite viral; AST > ALT = hepatopatia alcoólica (razão >2)',
    sistema: 'Hepatologia'
  },
  {
    id: 'ast', nome: 'AST (TGO)', categoria: 'Função Hepática',
    normalH: '<40 U/L', normalM: '<32 U/L', normalC: '<40 U/L',
    unidade: 'U/L',
    aumentoSugere: ['Hepatite', 'IAM (também sobe)', 'Alcoolismo', 'Miopatia'],
    reducaoSugere: [],
    dica: 'AST não é específica do fígado (também cardíaca, muscular)',
    sistema: 'Hepatologia'
  },
  {
    id: 'bili', nome: 'Bilirrubina Total', categoria: 'Função Hepática',
    normalH: '0,2–1,2 mg/dL', normalM: '0,2–1,2 mg/dL', normalC: '0,2–1,2 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Hepatite', 'Colestase', 'Hemólise', 'Síndrome Gilbert'],
    reducaoSugere: [],
    dica: 'Icterícia visível quando BT >2,5-3 mg/dL; direta = hepática/colestase; indireta = hemólise',
    sistema: 'Hepatologia'
  },
  {
    id: 'alb', nome: 'Albumina', categoria: 'Função Hepática',
    normalH: '3,5–5,0 g/dL', normalM: '3,5–5,0 g/dL', normalC: '3,5–5,0 g/dL',
    unidade: 'g/dL',
    aumentoSugere: ['Desidratação (concentração)'],
    reducaoSugere: ['Cirrose', 'Síndrome nefrótica', 'Desnutrição', 'Inflamação crônica'],
    dica: 'Albumina < 3,5 = hepatopatia grave ou síndrome nefrótica',
    sistema: 'Hepatologia'
  },
  {
    id: 'inr', nome: 'INR / TP', categoria: 'Coagulação',
    normalH: '0,9–1,2 (INR)', normalM: '0,9–1,2 (INR)', normalC: '0,9–1,3 (INR)',
    unidade: 'INR',
    aumentoSugere: ['Hepatopatia', 'Warfarina', 'Def. Vit K', 'CID'],
    reducaoSugere: ['Trombofilia (raros)'],
    dica: 'INR >1,5 = disfunção hepática; INR terapêutico com warfarina: 2,0-3,0',
    sistema: 'Hepatologia'
  },

  // ─── LIPÍDIOS ────────────────────────────────────────────────
  {
    id: 'ct', nome: 'Colesterol Total', categoria: 'Lipídios',
    normalH: '<200 mg/dL (desejável)', normalM: '<200 mg/dL (desejável)', normalC: '<170 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Hiperlipidemia primária', 'Hipotireoidismo', 'DM', 'Síndrome nefrótica'],
    reducaoSugere: ['Hipertireoidismo', 'Desnutrição', 'Hepatopatia grave'],
    dica: '200-239: limítrofe; ≥240: alto; avaliar sempre com frações',
    sistema: 'Cardiovascular'
  },
  {
    id: 'ldl', nome: 'LDL Colesterol', categoria: 'Lipídios',
    normalH: '<130 mg/dL (ideal <100 se risco CV)', normalM: '<130 mg/dL', normalC: '<110 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Risco cardiovascular aumentado', 'Hiperlipidemia familiar'],
    reducaoSugere: ['Estatinas', 'Desnutrição'],
    dica: 'Meta LDL: <70 em alto risco; <50 em muito alto risco (IAM prévio)',
    sistema: 'Cardiovascular'
  },
  {
    id: 'hdl', nome: 'HDL Colesterol', categoria: 'Lipídios',
    normalH: '>40 mg/dL (>60 protetor)', normalM: '>50 mg/dL', normalC: '>40 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Exercício físico', 'Álcool moderado (controverso)'],
    reducaoSugere: ['Sedentarismo', 'Tabagismo', 'Obesidade', 'DM', 'Hipertrigliceridemia'],
    dica: '<40 H / <50 M = fator de risco CV independente',
    sistema: 'Cardiovascular'
  },
  {
    id: 'tg', nome: 'Triglicerídeos', categoria: 'Lipídios',
    normalH: '<150 mg/dL', normalM: '<150 mg/dL', normalC: '<100 mg/dL',
    unidade: 'mg/dL',
    aumentoSugere: ['Diabetes', 'Obesidade', 'Alcoolismo', 'Hipotireoidismo', 'IRC'],
    reducaoSugere: ['Desnutrição', 'Hipertireoidismo'],
    dica: '>500 mg/dL: risco de pancreatite aguda',
    sistema: 'Cardiovascular'
  },

  // ─── MARCADORES CARDÍACOS ─────────────────────────────────────
  {
    id: 'trop', nome: 'Troponina I/T (hs-cTn)', categoria: 'Marcadores Cardíacos',
    normalH: '<0,04 ng/mL (I) / <14 pg/mL (T-hs)', normalM: '<0,04 ng/mL', normalC: '<0,04 ng/mL',
    unidade: 'ng/mL',
    aumentoSugere: ['IAM', 'Miocardite', 'TEP', 'Insuf. renal', 'Sepse grave'],
    reducaoSugere: [],
    dica: 'Sobe em 2-4h, pico em 12-24h, normaliza em 7-10d. Solicitar 0h e 3h',
    sistema: 'Cardiovascular'
  },
  {
    id: 'ck', nome: 'CK-MB', categoria: 'Marcadores Cardíacos',
    normalH: '<5% do CK total (<25 U/L)', normalM: '<5%', normalC: '<5%',
    unidade: 'U/L',
    aumentoSugere: ['IAM (pico 12-24h)', 'Miocardite'],
    reducaoSugere: [],
    dica: 'Menos específico que troponina. Útil para reinfarto (normaliza antes)',
    sistema: 'Cardiovascular'
  },
  {
    id: 'bnp', nome: 'BNP / NT-proBNP', categoria: 'Marcadores Cardíacos',
    normalH: '<100 pg/mL (BNP) / <125 pg/mL (NT-proBNP)', normalM: '<100 pg/mL', normalC: 'Variável',
    unidade: 'pg/mL',
    aumentoSugere: ['Insuficiência cardíaca', 'TEP', 'IAM extenso'],
    reducaoSugere: ['Obesidade (paradoxo)'],
    dica: 'BNP <100 exclui ICC; >400 confirma. Entre 100-400 = grey zone',
    sistema: 'Cardiovascular'
  },

  // ─── GASOMETRIA ───────────────────────────────────────────────
  {
    id: 'ph', nome: 'pH (gasometria)', categoria: 'Gasometria',
    normalH: '7,35–7,45', normalM: '7,35–7,45', normalC: '7,35–7,45',
    unidade: 'pH',
    aumentoSugere: ['Alcalose (>7,45): vômito, hiperventilação, Bartter'],
    reducaoSugere: ['Acidose (<7,35): sepse, DKA, IRA, hipóxia'],
    dica: 'pH <7,2 ou >7,6 = emergência',
    sistema: 'Respiratório'
  },
  {
    id: 'pao2', nome: 'PaO₂', categoria: 'Gasometria',
    normalH: '80–100 mmHg', normalM: '80–100 mmHg', normalC: '80–100 mmHg',
    unidade: 'mmHg',
    aumentoSugere: ['Hiperóxia (O2 suplementar)'],
    reducaoSugere: ['Hipoxemia: pneumonia, TEP, SARA, altitude'],
    dica: 'PaO2 <60 = hipoxemia grave (indicação O2 suplementar)',
    sistema: 'Respiratório'
  },
  {
    id: 'paco2', nome: 'PaCO₂', categoria: 'Gasometria',
    normalH: '35–45 mmHg', normalM: '35–45 mmHg', normalC: '30–40 mmHg',
    unidade: 'mmHg',
    aumentoSugere: ['Hipoventilação: DPOC, sedação, obesidade hipoventilação'],
    reducaoSugere: ['Hiperventilação: ansiedade, hipóxia, sepse inicial'],
    dica: 'PaCO2 >50 em asmático = insuficiência respiratória iminente',
    sistema: 'Respiratório'
  },
  {
    id: 'hco3', nome: 'HCO₃⁻', categoria: 'Gasometria',
    normalH: '22–26 mEq/L', normalM: '22–26 mEq/L', normalC: '20–25 mEq/L',
    unidade: 'mEq/L',
    aumentoSugere: ['Alcalose metabólica: vômito, diuréticos, Cushing'],
    reducaoSugere: ['Acidose metabólica: DKA, diarreia, IRA, acidose láctica'],
    dica: 'Compensação: se primário metabólico, PaCO2 responde (Winter)',
    sistema: 'Respiratório'
  },
  {
    id: 'lact', nome: 'Lactato', categoria: 'Gasometria',
    normalH: '<2,0 mmol/L', normalM: '<2,0 mmol/L', normalC: '<2,0 mmol/L',
    unidade: 'mmol/L',
    aumentoSugere: ['Sepse', 'Choque', 'Isquemia tecidual', 'Síndrome de Warburg'],
    reducaoSugere: [],
    dica: 'Lactato >2: suspeitar hipoperfusão; >4: choque séptico = UTI',
    sistema: 'Emergência'
  },

  // ─── COAGULAÇÃO ───────────────────────────────────────────────
  {
    id: 'ttpa', nome: 'TTPA (PTT)', categoria: 'Coagulação',
    normalH: '25–35 s', normalM: '25–35 s', normalC: '25–35 s',
    unidade: 'segundos',
    aumentoSugere: ['Heparina não fracionada', 'Def. fatores VIII-XI', 'CID', 'Lúpus anticoagulante'],
    reducaoSugere: [],
    dica: 'TTPA aumentado com TP normal: via intrínseca; heparina',
    sistema: 'Hematologia'
  },
  {
    id: 'ddim', nome: 'D-dímero', categoria: 'Coagulação',
    normalH: '<500 ng/mL FEU', normalM: '<500 ng/mL FEU', normalC: '<500 ng/mL FEU',
    unidade: 'ng/mL',
    aumentoSugere: ['TEP', 'TVP', 'CID', 'Cirurgia recente', 'Infecção grave'],
    reducaoSugere: [],
    dica: 'Alto valor preditivo negativo para TEP/TVP (Wells baixo + D-dímero <500 = exclui)',
    sistema: 'Hematologia'
  },

  // ─── TIREOIDE ────────────────────────────────────────────────
  {
    id: 'tsh', nome: 'TSH', categoria: 'Tireoide',
    normalH: '0,4–4,0 mUI/L', normalM: '0,4–4,0 mUI/L', normalC: '0,5–4,5 mUI/L',
    unidade: 'mUI/L',
    aumentoSugere: ['Hipotireoidismo primário', 'Tireoidite de Hashimoto'],
    reducaoSugere: ['Hipertireoidismo', 'Doença de Graves', 'Tireoidite subaguda'],
    dica: 'TSH é o melhor exame isolado para triagem de disfunção tireoidiana',
    sistema: 'Endócrino'
  },
  {
    id: 't4l', nome: 'T4 Livre', categoria: 'Tireoide',
    normalH: '0,7–1,9 ng/dL', normalM: '0,7–1,9 ng/dL', normalC: '0,7–2,0 ng/dL',
    unidade: 'ng/dL',
    aumentoSugere: ['Hipertireoidismo', 'Tireotoxicose'],
    reducaoSugere: ['Hipotireoidismo'],
    dica: 'TSH↑ + T4L↓ = hipotireoidismo primário; TSH↓ + T4L↑ = hipertireoidismo',
    sistema: 'Endócrino'
  },

  // ─── INFLAMAÇÃO ───────────────────────────────────────────────
  {
    id: 'pcr', nome: 'PCR (Proteína C Reativa)', categoria: 'Inflamação',
    normalH: '<5 mg/L', normalM: '<5 mg/L', normalC: '<5 mg/L',
    unidade: 'mg/L',
    aumentoSugere: ['Infecção bacteriana', 'Infarto', 'Artrite', 'Neoplasia', 'Trauma'],
    reducaoSugere: [],
    dica: 'PCR >150 mg/L sugere infecção bacteriana grave; >10: inflamação significativa',
    sistema: 'Infecção'
  },
  {
    id: 'vhs', nome: 'VHS', categoria: 'Inflamação',
    normalH: '<15 mm/h', normalM: '<20 mm/h', normalC: '<10 mm/h',
    unidade: 'mm/h',
    aumentoSugere: ['Inflamação crônica', 'Mieloma', 'Arterite temporal', 'Polimialgia'],
    reducaoSugere: ['Policitemia', 'Insuficiência cardíaca'],
    dica: 'VHS muito elevado (>100): mieloma, arterite, neoplasia maligna',
    sistema: 'Inflamação'
  },
  {
    id: 'procal', nome: 'Procalcitonina (PCT)', categoria: 'Inflamação',
    normalH: '<0,1 ng/mL', normalM: '<0,1 ng/mL', normalC: '<0,1 ng/mL',
    unidade: 'ng/mL',
    aumentoSugere: ['Sepse bacteriana', 'Infecção bacteriana grave'],
    reducaoSugere: [],
    dica: 'PCT >0,5: sepse possível; >2,0: sepse grave; >10: choque séptico. Normal exclui sepse',
    sistema: 'Emergência'
  },

  // ─── PANCREÁTICOS ────────────────────────────────────────────
  {
    id: 'amilase', nome: 'Amilase', categoria: 'Pancreático',
    normalH: '30–110 U/L', normalM: '30–110 U/L', normalC: '30–100 U/L',
    unidade: 'U/L',
    aumentoSugere: ['Pancreatite aguda', 'Parotidite', 'Úlcera perfurada', 'Obstrução intestinal'],
    reducaoSugere: ['Pancreatite crônica avançada'],
    dica: 'Amilase 3× normal = pancreatite provável; também sobe em parotidite',
    sistema: 'Gastrointestinal'
  },
  {
    id: 'lipase', nome: 'Lipase', categoria: 'Pancreático',
    normalH: '10–140 U/L', normalM: '10–140 U/L', normalC: '10–140 U/L',
    unidade: 'U/L',
    aumentoSugere: ['Pancreatite aguda (mais específico)', 'Úlcera péptica', 'Colecistite'],
    reducaoSugere: ['Pancreatite crônica avançada'],
    dica: 'Lipase > amilase em pancreatite alcoólica; mais específica que amilase',
    sistema: 'Gastrointestinal'
  },

  // ─── RENAL ───────────────────────────────────────────────────
  {
    id: 'ur24', nome: 'Urina 24h (Proteinúria)', categoria: 'Renal',
    normalH: '<150 mg/24h', normalM: '<150 mg/24h', normalC: '<100 mg/24h',
    unidade: 'mg/24h',
    aumentoSugere: ['Glomerulonefrite', 'Diabetes nefropática', 'Síndrome nefrótica (>3,5g)'],
    reducaoSugere: [],
    dica: 'Síndrome nefrótica: proteinúria >3,5g/24h + hipoalbuminemia + edema',
    sistema: 'Renal'
  },
  {
    id: 'hba1c', nome: 'HbA1c', categoria: 'Endócrino',
    normalH: '<5,7% (normal)', normalM: '<5,7%', normalC: '<5,7%',
    unidade: '%',
    aumentoSugere: ['Diabetes descompensado', 'Hemólise crônica (falso aumento)'],
    reducaoSugere: ['Hemólise (falso negativo)', 'Gravidez'],
    dica: '5,7-6,4%: pré-diabetes; ≥6,5%: diabetes. Meta terapêutica: <7%',
    sistema: 'Endócrino'
  },
]
