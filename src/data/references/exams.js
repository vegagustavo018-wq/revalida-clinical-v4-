export const EXAMS = [
  // ===== ECG =====
  {
    id: 'ecg-basico', categoria: 'ECG', nome: 'ECG — Interpretação Sistemática',
    descricao: 'Método passo-a-passo para leitura de eletrocardiograma de 12 derivações.',
    passos: [
      { passo: 1, titulo: 'Frequência Cardíaca', descricao: 'Método da divisão: 300 ÷ nº de quadrados grandes entre RR. Normal: 60-100 bpm.' },
      { passo: 2, titulo: 'Ritmo', descricao: 'Regular ou irregular? Onda P antes de cada QRS? P-R constante? Se irregular: FA, extrassístoles, flutter com bloqueio variável.' },
      { passo: 3, titulo: 'Eixo', descricao: 'DI e aVF: ambos positivos = eixo normal. DI positivo + aVF negativo = desvio esquerdo. DI negativo + aVF positivo = desvio direito.' },
      { passo: 4, titulo: 'Intervalo PR', descricao: 'Normal: 0,12-0,20s (3-5 quadradinhos). Aumentado: BAV 1° grau. Diminuído: WPW (delta wave).' },
      { passo: 5, titulo: 'QRS', descricao: 'Duração <0,12s (3 quadradinhos). Alargado: BCRE/BCRD, WPW, hipercalemia, TV.' },
      { passo: 6, titulo: 'Segmento ST', descricao: 'Elevado: IAM-STEMI, pericardite (difuso, côncavo), Brugada. Infradesnivelado: isquemia, digoxina, hipocalemia.' },
      { passo: 7, titulo: 'Onda T', descricao: 'Invertida: isquemia, sobrecarga ventricular. Apiculada e simétrica: hipercalemia, isquemia hiperaguda.' },
      { passo: 8, titulo: 'Intervalo QT', descricao: 'QTc normal <440ms (homens), <460ms (mulheres). Prolongado: hipocalemia, hipomagnesemia, haloperidol, amiodarona → risco de TdP.' },
    ],
    achados: [
      { achado: 'Elevação ST em V1-V4', significa: 'IAM anterior (DA)', acao: 'ICP urgente ou trombolítico' },
      { achado: 'Elevação ST em II, III, aVF', significa: 'IAM inferior (CD ou Cx)', acao: 'ICP urgente + checar V3R/V4R (VD)' },
      { achado: 'Infradesnivelamento ST difuso + supradesnivelamento aVR', significa: 'Isquemia subendocárdica difusa / lesão tronco', acao: 'Cateterismo urgente' },
      { achado: 'S1Q3T3', significa: 'TEP (sugestivo, inespecífico)', acao: 'D-dímero + angiotomografia' },
      { achado: 'Onda P bifásica em V1 (P mitrale)', significa: 'Sobrecarga atrial esquerda / estenose mitral', acao: 'Ecocardiograma' },
      { achado: 'QRS alargado + bloqueio de ramo esquerdo NOVO', significa: 'IAM (critério de Sgarbossa)', acao: 'Tratar como STEMI' },
      { achado: 'Ausência de progressão de R em V1-V4', significa: 'IAM anterior antigo / BCRE', acao: 'Correlacionar clinicamente' },
      { achado: 'QT longo + Torsade de Pointes', significa: 'Taquiarritmia por QT prolongado', acao: 'MgSO4 2g IV + correção de causa' },
    ],
    dica: 'Sempre comparar com ECG anterior quando disponível — a mudança é tão importante quanto o achado.',
    perola: 'Criterio de Sgarbossa no BCRE: concordância ST (mesmo sentido QRS) = IAM até prova contrária.'
  },
  {
    id: 'ecg-arritmias', categoria: 'ECG', nome: 'ECG — Principais Arritmias',
    descricao: 'Reconhecimento rápido das arritmias mais importantes na prática clínica.',
    passos: [],
    achados: [
      { achado: 'FC >100, QRS estreito, onda P antes de cada QRS', significa: 'Taquicardia sinusal', acao: 'Tratar causa (febre, hipovolemia, dor, anemia)' },
      { achado: 'RR irregular, sem onda P, linha de base ondulante', significa: 'Fibrilação atrial', acao: 'Controle de FC + anticoagulação (CHA₂DS₂-VASc)' },
      { achado: 'Ondas F 300 bpm, condução 2:1 (FC ~150)', significa: 'Flutter atrial', acao: 'Cardioversão ou controle de FC' },
      { achado: 'Taquicardia regular QRS estreito, início e fim súbitos', significa: 'TPSV (reentrada)', acao: 'Manobra vagal → adenosina → cardioversão' },
      { achado: 'QRS largo >0,12s, regular, FC 100-250', significa: 'Taquicardia ventricular', acao: 'TV estável: amiodarona. Instável: cardioversão' },
      { achado: 'Linha isoelétrica caótica sem QRS identificável', significa: 'Fibrilação ventricular', acao: 'RCP + desfibrilação imediata' },
      { achado: 'Ausência de atividade elétrica + sem pulso', significa: 'Assistolia', acao: 'RCP + adrenalina + investigar causas reversíveis (Hs e Ts)' },
      { achado: 'PR progressivamente aumentando até bloqueio de P', significa: 'BAV 2° grau Mobitz I (Wenckebach)', acao: 'Geralmente benigno, monitorar' },
      { achado: 'BAV 2° grau: PR fixo com bloqueio súbito de P', significa: 'Mobitz II', acao: 'Marca-passo — risco de progredir para BAV total' },
      { achado: 'P sem relação com QRS, FC <40 bpm', significa: 'BAV 3° grau (BAVT)', acao: 'Marca-passo urgente' },
    ],
    dica: 'QRS largo + taquicardia = TV até prova contrária. Nunca usar verapamil em TV.',
    perola: 'Adenosina: meia-vida 10 segundos. Aplicar em veia proximal + flush rápido de SF.'
  },

  // ===== RADIOLOGIA =====
  {
    id: 'rx-torax', categoria: 'RX Tórax', nome: 'Radiografia de Tórax — Interpretação',
    descricao: 'Abordagem sistemática do RX de tórax PA e perfil.',
    passos: [
      { passo: 1, titulo: 'Qualidade da imagem', descricao: 'Verificar: inspiração adequada (≥6 arcos anteriores visíveis), rotação (clavículas simétricas em relação à coluna), exposição.' },
      { passo: 2, titulo: 'Partes moles e esqueleto', descricao: 'Assimetria de mamas, enfisema subcutâneo, fratura de costelas ou clavícula, lesões ósseas.' },
      { passo: 3, titulo: 'Traqueia e mediastino', descricao: 'Traqueia centralizada? Mediastino alargado (>8cm) = dissecção de aorta. Silhueta cardíaca <50% do diâmetro torácico.' },
      { passo: 4, titulo: 'Hilo pulmonar', descricao: 'Hilar: adenopatia, dilatação de artéria pulmonar. Hilo esquerdo mais alto que o direito.' },
      { passo: 5, titulo: 'Parênquima pulmonar', descricao: 'Infiltrado (padrão alveolar, intersticial, misto), atelectasia, nódulos, cavidades, pneumotórax.' },
      { passo: 6, titulo: 'Diafragma e seios costofrênicos', descricao: 'Seios costofrênicos limpos = sem derrame. Apagados = ≥200mL de líquido. Ângulo <90° = derrame.' },
    ],
    achados: [
      { achado: 'Opacidade em cunha na periferia pulmonar + amputação de vaso', significa: 'Infarto pulmonar por TEP (sinal de Hampton)', acao: 'Angiotomografia' },
      { achado: 'Infiltrado alveolar lobar/segmentar', significa: 'Pneumonia bacteriana', acao: 'ATB conforme gravidade (CURB-65)' },
      { achado: 'Infiltrado bilateral difuso + imagem em vidro fosco', significa: 'Pneumonia atípica, COVID, SDRA', acao: 'Gasometria + TC' },
      { achado: 'Linha de Kerley B (horizontal, periférica, base)', significa: 'Edema pulmonar / congestão linfática', acao: 'Ecocardiograma + diurético' },
      { achado: 'Hiperlucência sem tramas + desvio traqueal', significa: 'Pneumotórax hipertensivo', acao: 'Punção de alívio IMEDIATA' },
      { achado: 'Mediastino superior alargado', significa: 'Dissecção de aorta / aneurisma / hematoma', acao: 'Angiotomografia urgente' },
      { achado: 'Massa pulmonar + nódulo solitário', significa: 'Ca pulmão, metástase, granuloma', acao: 'TC tórax + broncoscopia + PET' },
      { achado: 'Velamento de seio costofrênico unilateral', significa: 'Derrame pleural', acao: 'US para toracocentese guiada' },
    ],
    dica: 'ABCDE do RX: Airway (traqueia) → Bones (esqueleto) → Cardiac (silhueta) → Diaphragm → Everything else (parênquima).',
    perola: 'Pneumotórax à direita: pulmão colapsa centralmente. À esquerda: cuidado com sombra gástrica simulando pneumotórax.'
  },

  // ===== ULTRASSONOGRAFIA =====
  {
    id: 'us-fast', categoria: 'Ultrassonografia', nome: 'FAST — Focused Assessment with Sonography for Trauma',
    descricao: 'Ultrassonografia à beira do leito para detecção de líquido livre em trauma.',
    passos: [
      { passo: 1, titulo: 'Janela subcostal (coração)', descricao: 'Transdutor abaixo do processo xifoide: derrame pericárdico? Tamponamento?' },
      { passo: 2, titulo: 'Janela de Morrison (abdômen direito)', descricao: 'Interface fígado-rim (espaço de Morrison): líquido livre? Hemoperitônio?' },
      { passo: 3, titulo: 'Janela esplenorrenal (abdômen esquerdo)', descricao: 'Interface baço-rim: líquido livre? Mais sensível do que Morrison para lesão esplênica.' },
      { passo: 4, titulo: 'Pelve (Fundo de saco)', descricao: 'Fundo de saco de Douglas: líquido livre pélvico — maior sensibilidade em decúbito.' },
      { passo: 5, titulo: 'FAST-E (Extended)', descricao: 'Adicionar janelas pleurais: pneumotórax (ausência de deslizamento pleural) e hemotórax.' },
    ],
    achados: [
      { achado: 'Líquido anecoico no espaço de Morrison', significa: 'Hemoperitônio — lesão hepática ou abdominal', acao: 'Cirurgia de urgência se instável' },
      { achado: 'Líquido pericárdico + colapso de câmaras direitas', significa: 'Tamponamento cardíaco', acao: 'Pericardiocentese urgente' },
      { achado: 'Ausência de deslizamento pleural unilateral', significa: 'Pneumotórax ipsilateral', acao: 'Drenagem torácica' },
      { achado: 'Líquido anecoico no fundo de saco de Douglas', significa: 'Hemoperitônio ou liquido livre pélvico', acao: 'Correlacionar com clínica (β-hCG em mulheres)' },
    ],
    dica: 'FAST leva <3 minutos e não atrasa o ATLS. Negativo não exclui lesão — repetir se deterioração.',
    perola: 'Gravidez ectópica rota: líquido livre pélvico + β-hCG positivo + útero vazio = cirurgia.'
  },
  {
    id: 'us-abdome', categoria: 'Ultrassonografia', nome: 'US Abdômen Total — Achados Importantes',
    descricao: 'Guia de interpretação dos principais achados na US abdominal.',
    passos: [],
    achados: [
      { achado: 'Cálculo + sombra acústica na vesícula', significa: 'Litíase biliar / colelitíase', acao: 'Colecistectomia eletiva se sintomático' },
      { achado: 'Espessamento de parede vesicular >3mm + Murphy sonográfico', significa: 'Colecistite aguda', acao: 'Cirurgia em 48-72h' },
      { achado: 'Dilatação de via biliar principal (>6mm + colecistectomizados >8mm)', significa: 'Coledocolitíase / colangite', acao: 'CPRE' },
      { achado: 'Rim aumentado + perda de diferenciação corticomedular', significa: 'Pielonefrite aguda', acao: 'ATB sistêmico' },
      { achado: 'Imagem hipoecoica nodular no fígado', significa: 'Cisto / metástase / CHC / abscesso', acao: 'TC com contraste trifásico' },
      { achado: 'Aorta abdominal >3cm com dilatação focal', significa: 'Aneurisma de aorta abdominal', acao: 'Cirurgia se >5,5cm ou expansão rápida' },
    ],
    dica: 'US não é bom para visualizar pâncreas distal, retroperitônio e alças intestinais com gás.',
    perola: 'Murphy sonográfico: dor à compressão direta da sonda sobre a vesícula = colecistite aguda (VPP 92%).'
  },

  // ===== TOMOGRAFIA =====
  {
    id: 'tc-cranio', categoria: 'Tomografia', nome: 'TC Crânio — Interpretação Básica',
    descricao: 'Interpretação sistematizada da tomografia de crânio sem contraste.',
    passos: [
      { passo: 1, titulo: 'Janela Óssea', descricao: 'Verificar fraturas de crânio, base, mastoide. Afundamento?' },
      { passo: 2, titulo: 'Compartimento extraaxial', descricao: 'Espaço entre crânio e córtex: hematoma extradural (biconvexo, lenticular), hematoma subdural (crescentiforme).' },
      { passo: 3, titulo: 'Parênquima cerebral', descricao: 'Hiperdensidade = sangue agudo (AVC hemorrágico, contusão). Hipodensidade = edema, AVC isquêmico (pode ser normal nas 6h).' },
      { passo: 4, titulo: 'Ventriculos', descricao: 'Hidrocefalia (dilatação simétrica), desvio da linha média, efaçamento de sulcos.' },
      { passo: 5, titulo: 'Fossa posterior', descricao: 'AVC de fossa posterior pode ser difícil de ver na TC — RNM superior para essa região.' },
    ],
    achados: [
      { achado: 'Hiperdensidade espontânea intraparenquimatosa', significa: 'Hemorragia intracerebral', acao: 'UTI + neuro + controle de PA' },
      { achado: 'Hiperdensidade no espaço subaracnóideo (cisternas, sulcos)', significa: 'Hemorragia subaracnóidea', acao: 'Angiotomografia + neurocirurgia' },
      { achado: 'Coleção biconvexa hiperdensa temporal', significa: 'Hematoma extradural (HED)', acao: 'Craniotomia de urgência se >30mL ou déficit' },
      { achado: 'Coleção crescentiforme hiperdensa/isodensa', significa: 'Hematoma subdural agudo/subagudo', acao: 'Craniotomia se espessura >10mm ou desvio >5mm' },
      { achado: 'Área hipodensa em território arterial definido', significa: 'AVC isquêmico estabelecido (>6h)', acao: 'Antiagregação + reabilitação' },
      { achado: 'Desvio de linha média + apagamento de sulcos', significa: 'Efeito de massa / herniação iminente', acao: 'Neurocirurgia urgente + manitol' },
    ],
    dica: 'TC de crânio sem contraste é o exame de emergência padrão. Com contraste: lesão tumoral, abscesso.',
    perola: 'TC normal nas primeiras 6h do AVC isquêmico não exclui o diagnóstico — RNM-DWI é superior.'
  },

  // ===== RESSONÂNCIA MAGNÉTICA =====
  {
    id: 'rnm-basico', categoria: 'Ressonância Magnética', nome: 'RNM Cerebral — Sequências Essenciais',
    descricao: 'Guia das principais sequências de RNM cerebral e seus usos clínicos.',
    passos: [
      { passo: 1, titulo: 'T1', descricao: 'Anatomia. Líquido = hipointenso (escuro). Gordura e sangue subagudo = hiperintenso (branco).' },
      { passo: 2, titulo: 'T2 / FLAIR', descricao: 'FLAIR suprime LCR. Lesões de substância branca (gliose, desmielinização, AVC crônico) ficam brancas.' },
      { passo: 3, titulo: 'DWI (Difusão)', descricao: 'Detecta isquemia aguda em minutos. Lesão aguda = branco em DWI + escuro em ADC map.' },
      { passo: 4, titulo: 'Gadolíneo (T1+C)', descricao: 'Contraste: quebra de barreira hematoencefálica = tumores, abscesso, meningite, metástases.' },
      { passo: 5, titulo: 'SWI / GRE', descricao: 'Detecta microhemorragias, sangue, calcificações. Útil em angiopatia amiloide.' },
    ],
    achados: [
      { achado: 'Restrição à difusão (DWI brilhante + ADC escuro)', significa: 'AVC isquêmico agudo', acao: 'Alteplase se <4,5h + protocolo AVC' },
      { achado: 'Lesões de substância branca periventricular', significa: 'Esclerose múltipla / doença de pequenos vasos', acao: 'Correlacionar com clínica + critérios McDonald' },
      { achado: 'Realce em anel com edema perilesional', significa: 'Abscesso cerebral / metástase / glioblastoma', acao: 'TC-guiado biopsia ou drenagem' },
      { achado: 'Alteração em corno de Ammon + hipocampo', significa: 'Encefalite por HSV (herpes simplex)', acao: 'Aciclovir empírico + LCR' },
    ],
    dica: 'DWI é superior à TC para AVC isquêmico agudo, especialmente de fossa posterior (TC pode ser normal).',
    perola: 'FLAIR: torna o LCR preto — lesões junto ao LCR (hemorragia, encefalite) aparecem brancas em contraste.'
  },

  // ===== ENDOSCOPIA =====
  {
    id: 'eda', categoria: 'Endoscopia Digestiva', nome: 'Endoscopia Digestiva Alta (EDA) — Indicações e Achados',
    descricao: 'Guia para indicação e interpretação dos achados mais importantes na EDA.',
    passos: [
      { passo: 1, titulo: 'Indicações urgentes (<12h)', descricao: 'HDA com instabilidade hemodinâmica, suspeita de varizes sangrando, ingestão de corpo estranho.' },
      { passo: 2, titulo: 'Indicações precoces (<24h)', descricao: 'HDA estabilizada, úlcera péptica sangra ativa, esofagite grau IV.' },
      { passo: 3, titulo: 'Indicações eletivas', descricao: 'Dispepsia sem alarme >45 anos, pesquisa de H. pylori, vigilância de Barrett, DRGE refratária.' },
    ],
    achados: [
      { achado: 'Úlcera com coto vascular visível (Forrest Ia-Ib)', significa: 'Úlcera hemorrágica ativa — alto risco de ressangramento', acao: 'Hemostasia endoscópica (clip + injeção)' },
      { achado: 'Úlcera com coágulo aderido (Forrest IIb)', significa: 'Risco intermediário de ressangramento', acao: 'Remover coágulo + hemostasia. IBP IV 72h' },
      { achado: 'Úlcera com fundo limpo (Forrest IIc-III)', significa: 'Baixo risco de ressangramento', acao: 'IBP VO. Alta precoce possível se baixo risco' },
      { achado: 'Varizes esofágicas calibrosas + sinais vermelho', significa: 'Alto risco de sangramento varicoso', acao: 'Ligadura elástica (1ª escolha)' },
      { achado: 'Metaplasia intestinal colunar no esôfago distal', significa: 'Esôfago de Barrett', acao: 'Biopsia + vigilância + controle de DRGE' },
      { achado: 'Mucosa gástrica com atrofia + H. pylori', significa: 'Gastrite crônica atrófica', acao: 'Erradicação H. pylori (triple therapy)' },
    ],
    dica: 'Forrest: Ia = jato ativo, Ib = babando, IIa = vaso visível, IIb = coágulo, IIc = mancha plana, III = fundo limpo.',
    perola: 'IBP IV contínuo pós-hemostasia: omeprazol 80mg bolus + 8mg/h por 72h reduz ressangramento em 50%.'
  },
  {
    id: 'colonoscopia', categoria: 'Endoscopia Digestiva', nome: 'Colonoscopia — Principais Achados',
    descricao: 'Guia dos achados mais relevantes na colonoscopia.',
    passos: [
      { passo: 1, titulo: 'Indicações', descricao: 'Rastreio de câncer colorretal (a partir de 45-50a), HDB, diarreia crônica, investigação de neoplasia, polipectomia terapêutica.' },
    ],
    achados: [
      { achado: 'Pólipo séssil ou pediculado <10mm', significa: 'Pólipo adenomatoso de baixo risco', acao: 'Polipectomia + vigilância em 5-10 anos' },
      { achado: 'Pólipo ≥10mm ou displasia alto grau', significa: 'Alto risco de malignidade', acao: 'Ressecção completa + vigilância em 3 anos' },
      { achado: 'Lesão ulcerada irregular com sangramento', significa: 'Suspeita de adenocarcinoma colorretal', acao: 'Biopsia + estadiamento (TC + CEA)' },
      { achado: 'Mucosa colônica com granularidade + úlceras serpiginosas contínuas', significa: 'Retocolite ulcerativa', acao: 'Colonoscopia total + biopsia por segmento + corticoide' },
      { achado: 'Lesões segmentares transmurais + "pedras de calçamento"', significa: 'Doença de Crohn', acao: 'Biópsia + TC abdômen + enteroscopia' },
    ],
    dica: 'Preparação intestinal inadequada = exame limitado e menor chance de detecção de lesões planas.',
    perola: 'Câncer colorretal: 2ª causa de morte por câncer no Brasil. Rastreio a partir de 45 anos (ou 40 se HF 1° grau).'
  },
]
