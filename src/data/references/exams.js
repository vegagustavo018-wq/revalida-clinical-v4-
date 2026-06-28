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

  // ===== ECOCARDIOGRAMA =====
  {
    id: 'eco-tt', categoria: 'Ecocardiograma', nome: 'Ecocardiograma Transtorácico (ETT) — Essencial',
    descricao: 'Guia dos parâmetros e achados mais importantes no ecocardiograma transtorácico.',
    passos: [
      { passo: 1, titulo: 'Fração de Ejeção (FE)', descricao: 'Normal: FE ≥55%. IC sistólica: FE <40%. IC com FE preservada (ICFEp): FE ≥50% com disfunção diastólica.' },
      { passo: 2, titulo: 'Válvulas', descricao: 'Avaliar gradiente transvalvar, área valvar, regurgitação (leve/moderada/grave). Valvopatia grave: gradiente médio aórtico >40mmHg ou área <1cm².' },
      { passo: 3, titulo: 'Câmaras', descricao: 'VE: diâmetro diastólico normal <55mm. AE: dilatação = >40mm. VD: disfunção por TEP, HAP.' },
      { passo: 4, titulo: 'Pericárdio', descricao: 'Derrame pericárdico: leve (<10mm), moderado (10-20mm), grave (>20mm). Colapso de câmaras direitas = tamponamento.' },
      { passo: 5, titulo: 'Disfunção diastólica', descricao: 'E/A ratio, tempo de desaceleração (DT), E/e\' (Gold standard). Grau III = padrão restritivo = IC grave.' },
    ],
    achados: [
      { achado: 'FE <40% + VE dilatado', significa: 'IC sistólica / cardiomiopatia dilatada', acao: 'IECA/BRA + BB + espironolactona + diurético' },
      { achado: 'Gradiente aórtico médio >40mmHg + área <1cm²', significa: 'Estenose aórtica grave', acao: 'Troca valvar (SAVR) ou TAVI se alto risco cirúrgico' },
      { achado: 'Colapso de câmara direita na diástole', significa: 'Tamponamento cardíaco', acao: 'Pericardiocentese urgente' },
      { achado: 'Vegetação valvar + regurgitação', significa: 'Endocardite infecciosa', acao: 'Hemocultura + ATB + cirurgia se indicação' },
      { achado: 'VD dilatado + hipocinético + desvio de septo', significa: 'Sobrecarga de VD por TEP maciço / HAP', acao: 'Angiotomografia + anticoagulação + considerar trombólise' },
      { achado: 'Prolapso da válvula mitral + regurgitação mitral grave', significa: 'Insuficiência mitral orgânica', acao: 'Seguimento + cirurgia se grave sintomática' },
    ],
    dica: 'ETT: exame de primeira linha em IC, valvopatia, suspeita de tamponamento. ETE: superior para trombo de AE, endocardite, dissecção.',
    perola: 'FE preservada com dispneia = ICFEp. Diagnóstico por exclusão + disfunção diastólica no eco. Tratamento focado em causa e comorbidades.'
  },

  // ===== GASOMETRIA =====
  {
    id: 'gasometria', categoria: 'Gasometria', nome: 'Gasometria Arterial — Interpretação Passo a Passo',
    descricao: 'Método sistemático para interpretar gasometria arterial em 5 passos.',
    passos: [
      { passo: 1, titulo: 'pH', descricao: 'Normal: 7,35–7,45. <7,35 = acidemia. >7,45 = alcalemia. Identifica o distúrbio primário.' },
      { passo: 2, titulo: 'PaCO₂', descricao: 'Normal: 35–45 mmHg. ↑PaCO₂ + acidemia = acidose respiratória. ↓PaCO₂ + alcalemia = alcalose respiratória.' },
      { passo: 3, titulo: 'HCO₃⁻ (Bicarbonato)', descricao: 'Normal: 22–26 mEq/L. ↓HCO₃⁻ + acidemia = acidose metabólica. ↑HCO₃⁻ + alcalemia = alcalose metabólica.' },
      { passo: 4, titulo: 'Compensação', descricao: 'Acidose metab: PaCO₂ esperado = 1,5 × HCO₃ + 8 ±2 (Fórmula de Winter). Acidose resp aguda: HCO₃ sobe 1 mEq p/ cada 10 mmHg de ↑CO₂.' },
      { passo: 5, titulo: 'Ânion Gap (AG)', descricao: 'AG = Na - (Cl + HCO₃). Normal: 12 ±2 mEq/L. AG elevado: MUDPILES (Metanol, Uremia, DKA, Propileno glicol, INH/Isoniazida, Lactato, Etanol, Salicilato).' },
    ],
    achados: [
      { achado: 'pH ↓, HCO₃ ↓, AG elevado', significa: 'Acidose metabólica com AG elevado (MUDPILES)', acao: 'Identificar causa: lactato, cetonas, creatinina, toxicologia' },
      { achado: 'pH ↓, HCO₃ ↓, AG normal', significa: 'Acidose metabólica hiperclorêmica (AG normal)', acao: 'Diarreia, ATR renal, SF 0,9% excessivo' },
      { achado: 'pH ↓, PaCO₂ ↑', significa: 'Acidose respiratória (hipoventilação)', acao: 'Suporte ventilatório + causa (DPOC, sedação, OVA)' },
      { achado: 'pH ↑, PaCO₂ ↓', significa: 'Alcalose respiratória (hiperventilação)', acao: 'Dor, ansiedade, TEP, altitude, sepse precoce' },
      { achado: 'pH ↑, HCO₃ ↑', significa: 'Alcalose metabólica', acao: 'Vômitos, uso de diurético, hiperaldosteronismo' },
      { achado: 'pH normal + PaCO₂ ↑ + HCO₃ ↑', significa: 'Distúrbio misto (acidose resp. + alcalose metab.)', acao: 'DPOC crônico com compensação ou distúrbio misto real' },
    ],
    dica: 'PaO₂ normal: 80–100 mmHg. SatO₂ >95%. Hipoxemia: PaO₂ <80. Insuficiência respiratória: PaO₂ <60 ou SatO₂ <90.',
    perola: 'Fórmula de Winter: PaCO₂ esperado = 1,5 × HCO₃ + 8 ±2. Se PaCO₂ real maior = acidose resp. associada. Se menor = alcalose resp. associada.'
  },

  // ===== LABORATÓRIO =====
  {
    id: 'hemograma', categoria: 'Laboratório', nome: 'Hemograma Completo — Interpretação',
    descricao: 'Guia de referência para os principais parâmetros do hemograma e seu significado clínico.',
    passos: [
      { passo: 1, titulo: 'Série Vermelha', descricao: 'Hemoglobina (Hb): normal 12-16 g/dL (F) / 13,5-17,5 (M). VCM: 80-100 fL. HCM: 27-33 pg. CHCM: 32-36 g/dL.' },
      { passo: 2, titulo: 'Série Branca', descricao: 'Leucócitos: 4.000-11.000/mm³. Neutrófilos: 1.800-7.700. Linfócitos: 1.000-4.800. Monócitos: 200-800. Eosinófilos: 100-400.' },
      { passo: 3, titulo: 'Plaquetas', descricao: 'Normal: 150.000-400.000/mm³. Trombocitopenia <150.000. Sangramento espontâneo usual <20.000. Sangramento grave <10.000.' },
      { passo: 4, titulo: 'Reticulócitos', descricao: 'Normal: 0,5-2%. ↑Reticulócitos = anemia regenerativa (hemolítica, pós-sangramento). ↓Reticulócitos = anemia arregenerativa (ferro, B12, aplasia).' },
    ],
    achados: [
      { achado: 'Hb ↓ + VCM ↓ (microcítica) + Ferritina ↓', significa: 'Anemia ferropriva', acao: 'Sulfato ferroso + investigar sangramento oculto' },
      { achado: 'Hb ↓ + VCM ↑ (macrocítica)', significa: 'Anemia por deficiência de B12/folato ou medicamentos', acao: 'B12 sérica + folato + investigar causa' },
      { achado: 'Hb ↓ + VCM normal + reticulócitos ↑', significa: 'Anemia hemolítica', acao: 'Bilirrubina indireta + Coombs + LDH + haptoglobina' },
      { achado: 'Leucocitose com desvio à esquerda (bastões/mielócitos)', significa: 'Infecção bacteriana grave / sepse', acao: 'Hemocultura + ATB conforme foco' },
      { achado: 'Leucopenia + plaquetopenia + anemia (pancitopenia)', significa: 'Aplasia medular / infiltração / hiperesplenismo', acao: 'Mielograma + biopsia de medula' },
      { achado: 'Linfocitose + linfócitos atípicos', significa: 'Mononucleose / CMV / síndrome viral', acao: 'Paul-Bunnell / EBV-PCR / CMV-PCR' },
      { achado: 'Plaquetas <20.000 isolada', significa: 'Púrpura trombocitopênica imune (PTI)', acao: 'Excluir causas secundárias + prednisona + IVIG se grave' },
    ],
    dica: 'Anemia: sempre investigar causa — hemograma orienta, mas exames complementares confirmam (ferro, B12, reticulócitos).',
    perola: 'Anemia de doença crônica: VCM normal/baixo + ferritina normal ou ↑ + ferro sérico ↓ + TIBC ↓. Difere da ferropriva (ferritina ↓ + TIBC ↑).'
  },
  {
    id: 'bioquimica', categoria: 'Laboratório', nome: 'Bioquímica Essencial — Valores de Referência',
    descricao: 'Principais exames bioquímicos e sua interpretação clínica no Revalida.',
    passos: [],
    achados: [
      { achado: 'Creatinina ↑ + ureia ↑ + oligúria', significa: 'Lesão Renal Aguda (LRA)', acao: 'KDIGO: classificar em pré-renal / renal / pós-renal. Suspender nefrotóxicos, hidratação, ajustar doses' },
      { achado: 'Na⁺ <135 mEq/L', significa: 'Hiponatremia', acao: 'Avaliar osmolaridade + volemia: SIADH, IC, cirrose, hipotireoidismo' },
      { achado: 'Na⁺ >145 mEq/L', significa: 'Hipernatremia', acao: 'Diabetes insipidus, desidratação, perda de água livre' },
      { achado: 'K⁺ <3,5 mEq/L', significa: 'Hipocalemia', acao: 'Reposição IV/VO. Causa: diurético tiazídico/alça, vômito, diarreia' },
      { achado: 'K⁺ >5,5 mEq/L', significa: 'Hipercalemia', acao: 'Gluconato de cálcio IV + glicose+insulina + Kayexalate ± diálise' },
      { achado: 'TGO/TGP >3× LSN', significa: 'Hepatite (viral, alcoólica, medicamentosa, isquêmica)', acao: 'Sorologias virais + USG hepático + INR + bilirrubinas' },
      { achado: 'FA + GGT elevadas com TGO/TGP proporcionalmente menores', significa: 'Colestase (intra ou extra-hepática)', acao: 'USG vias biliares + CPRE se coledocolitíase' },
      { achado: 'PCR ↑ + procalcitonina ↑ (>0,5)', significa: 'Infecção bacteriana sistêmica / sepse', acao: 'Hemocultura + foco infeccioso + ATB' },
      { achado: 'Troponina ↑ + CK-MB ↑', significa: 'Lesão miocárdica (IAM ou miocardite)', acao: 'ECG + ecocardiograma + cateterismo se indicado' },
      { achado: 'BNP/NT-proBNP ↑', significa: 'Distensão de câmaras cardíacas / IC descompensada', acao: 'Ecocardiograma + tratamento de IC' },
    ],
    dica: 'Sempre interpretar exames no contexto clínico. Um resultado isolado tem pouco significado sem correlação.',
    perola: 'Troponina ultrassensível: sobe em 1-3h no IAM. Valor negativo serial (0h e 3h) tem VPN >99% para excluir IAM.'
  },

  // ===== TC ABDÔMEN =====
  {
    id: 'tc-abdome', categoria: 'Tomografia', nome: 'TC de Abdômen e Pelve — Interpretação',
    descricao: 'Abordagem sistemática na tomografia computadorizada de abdômen e pelve com e sem contraste.',
    passos: [
      { passo: 1, titulo: 'Fase sem contraste', descricao: 'Cálculos (hiperdensidades), hemorragia espontânea, calcificações. Referência para comparar realce.' },
      { passo: 2, titulo: 'Fase arterial (30s)', descricao: 'Vascularização hepática arterial, pâncreas, lesões hipervascularizadas (CHC, insulinoma), artérias.' },
      { passo: 3, titulo: 'Fase portal/venosa (70s)', descricao: 'Fase padrão para parênquima hepático, detecta hipodensidades (metástases). Melhor fase para fígado.' },
      { passo: 4, titulo: 'Fase tardia (3-5 min)', descricao: 'Vias excretoras (urografia), lesões fibrosas (colangiocarcinoma). Retenção de contraste em espaço intersticial.' },
    ],
    achados: [
      { achado: 'Dilatação de alças com ar-fluido e sem gás no cólon', significa: 'Obstrução de delgado (ADIV)', acao: 'Cirurgia de urgência se sinais de sofrimento' },
      { achado: 'Imagem hipodensa hepática com realce em anel na fase portal', significa: 'Metástase ou abscesso hepático', acao: 'Biópsia guiada por TC ou drenagem percutânea' },
      { achado: 'Espessamento de parede de cólon sigmoide + densificação pericólica', significa: 'Diverticulite aguda', acao: 'ATB (metronidazol + fluoroquinolona). Cirurgia se complicada' },
      { achado: 'Pâncreas com área hipodensa + densificação peripancreática', significa: 'Pancreatite aguda (Balthazar C-E)', acao: 'Hidratação + NPO + analgesia. TC repetir em 72h se Balthazar ≥C' },
      { achado: 'Massa renal sólida + realce heterogêneo', significa: 'Carcinoma de células renais (CCR)', acao: 'Nefrectomia radical ou parcial conforme estadiamento' },
      { achado: 'Aorta abdominal >3cm com dilatação fusiforme', significa: 'Aneurisma de aorta abdominal (AAA)', acao: 'Seguimento: <5,5cm anual. ≥5,5cm ou sintomático = reparo' },
    ],
    dica: 'TC abdômen com contraste trifásico: melhor protocolo para caracterização de lesões hepáticas, pancreáticas e renais.',
    perola: 'Diverticulite complicada (abscesso >4cm, peritonite, fístula): indicação de intervenção cirúrgica ou drenagem percutânea.'
  },

  // ===== ESPIROMETRIA =====
  {
    id: 'espirometria', categoria: 'Função Pulmonar', nome: 'Espirometria — Interpretação',
    descricao: 'Interpretação sistemática da espirometria para avaliação de doenças pulmonares.',
    passos: [
      { passo: 1, titulo: 'CVF (Capacidade Vital Forçada)', descricao: 'Volume total expirado forçadamente. Normal: >80% do previsto.' },
      { passo: 2, titulo: 'VEF₁ (Volume no 1° segundo)', descricao: 'Fluxo de grandes vias aéreas. Normal: >80% do previsto. Principal parâmetro de DPOC.' },
      { passo: 3, titulo: 'Relação VEF₁/CVF', descricao: 'Normal: >0,70. Pós-broncodilatador <0,70 = padrão obstrutivo fixo (DPOC). <0,70 que reverte = asma.' },
      { passo: 4, titulo: 'Prova Broncodilatadora', descricao: 'Salbutamol 400µg → repetir espirometria em 15 min. Melhora VEF₁ ≥12% E ≥200mL = resposta positiva (asma).' },
      { passo: 5, titulo: 'Classificação GOLD (DPOC)', descricao: 'G1: VEF₁ ≥80%. G2: 50-79%. G3: 30-49%. G4: <30%.' },
    ],
    achados: [
      { achado: 'VEF₁/CVF <0,70 pós-BD + VEF₁ reduzido', significa: 'Padrão obstrutivo (DPOC)', acao: 'Classificar GOLD + BRONCODILATADOR + orientar cessação tabágica' },
      { achado: 'VEF₁/CVF <0,70 com reversibilidade significativa', significa: 'Asma brônquica', acao: 'Corticoide inalatório + SABA SOS' },
      { achado: 'CVF ↓ + VEF₁ ↓ + VEF₁/CVF normal ou ↑', significa: 'Padrão restritivo', acao: 'Solicitar volumes pulmonares (pletismografia). Causas: fibrose, fraqueza muscular, obesidade' },
      { achado: 'Padrão misto (obstrutivo + restritivo)', significa: 'DPOC grave + hiperinsuflação / fibrose com broncoespasmo', acao: 'Clínica + TC tórax + complementar com pletismografia' },
    ],
    dica: 'Espirometria NÃO serve para diagnóstico de asma em crise — realizar fora da exacerbação, pós-broncodilatador.',
    perola: 'DPOC é subdiagnosticado: todo tabagista >40 anos com dispneia deve fazer espirometria. VEF₁/CVF <0,70 pós-BD = diagnóstico.'
  },

  // ===== PUNÇÃO LOMBAR =====
  {
    id: 'liqor', categoria: 'Punção Lombar', nome: 'Liquor (LCR) — Interpretação',
    descricao: 'Guia de interpretação do líquido cefalorraquidiano nas principais síndromes neurológicas.',
    passos: [
      { passo: 1, titulo: 'Aspecto', descricao: 'Normal: límpido, incolor. Turvo = pleocitose (meningite bacteriana). Xantocrômico (amarelado) = hemorragia ou bilirrubina.' },
      { passo: 2, titulo: 'Pressão de abertura', descricao: 'Normal: 10-20 cmH₂O. Elevada: hipertensão intracraniana, meningite, hemorragia. Baixa: hipotensão intracraniana, vazamento de LCR.' },
      { passo: 3, titulo: 'Celularidade', descricao: 'Normal: 0-5 células/mm³ (linfócitos). Pleocitose neutrofílica = bacteriana. Pleocitose linfocítica = viral/fúngica/TB.' },
      { passo: 4, titulo: 'Glicorraquia', descricao: 'Normal: 50-75% da glicemia. <50mg/dL (ou <60% da glicemia) = consumo (bacteriana, fúngica, TB, neoplásica).' },
      { passo: 5, titulo: 'Proteínas', descricao: 'Normal: 15-45 mg/dL. Elevadas: meningite, GBS, neuropatias, tumores. Muito elevadas (>500): meningite bacteriana, bloqueio.' },
    ],
    achados: [
      { achado: 'Liquor turvo + neutrófilos ↑ + glicose ↓ + proteínas ↑', significa: 'Meningite bacteriana', acao: 'ATB EMPÍRICO IMEDIATO (ceftriaxona + dexametasona). Aguardar cultura não.' },
      { achado: 'Límpido + linfócitos + glicose normal + proteínas ↑ discreto', significa: 'Meningite viral (asséptica)', acao: 'Suporte. Aciclovir se suspeita de HSV' },
      { achado: 'Xantocrômico + hemácias não traumáticas + proteínas altas', significa: 'Hemorragia subaracnóidea (HSA)', acao: 'Internação + angiotomografia + neurocirurgia' },
      { achado: 'Linfócitos ↑ + glicose ↓ + proteínas muito ↑ + ADA ↑', significa: 'Meningite tuberculosa', acao: 'RIPE + dexametasona' },
      { achado: 'Proteínas muito ↑ (>100mg) + celularidade normal (dissociação albumino-citológica)', significa: 'Síndrome de Guillain-Barré / polineuropatia', acao: 'IVIG ou plasmaférese + suporte respiratório' },
    ],
    dica: 'Contraindicações à PL: papiledema / HIC grave, coagulopatia grave, infecção local. Fazer TC antes se sinais focais.',
    perola: 'Na suspeita de meningite bacteriana, NUNCA atrasar o ATB por aguardar a PL. Colher hemoculturas e iniciar imediatamente se TC demorar.'
  },

  // ===== USG OBSTÉTRICO =====
  {
    id: 'uso-obstetrico', categoria: 'Ultrassonografia', nome: 'Ultrassonografia Obstétrica — Marcos Essenciais',
    descricao: 'Guia dos principais marcos do ultrassom obstétrico por trimestre.',
    passos: [
      { passo: 1, titulo: '1º Trimestre (6-13 semanas)', descricao: 'Confirmar situs intrauterino, viabilidade (BCF), IG pela CCN. Rastreio de aneuploidias (TN + osso nasal na 11-13+6).' },
      { passo: 2, titulo: 'Morfológico (20-24 semanas)', descricao: 'Avaliação estrutural completa: SNC (ventrículos, cerebelo, corpo caloso), coração (4 câmaras), diafragma, parede abdominal, rim, membro.' },
      { passo: 3, titulo: '3º Trimestre (28-34 semanas)', descricao: 'Crescimento fetal (DBP, CA, CF → peso estimado), ILA (índice de líquido amniótico), apresentação, placenta.' },
    ],
    achados: [
      { achado: 'Saco gestacional sem embrião na 6ª semana (transvaginal)', significa: 'Ovo cego / gestação anembrionada', acao: 'Confirmar IG + repetir em 1-2 semanas antes de concluir' },
      { achado: 'BCF ausente com CCN >7mm', significa: 'Abortamento retido', acao: 'Misoprostol ou curetagem / AMIU' },
      { achado: 'TN >3mm + osso nasal ausente na 11-13 semanas', significa: 'Risco aumentado para T21 (Down)', acao: 'Bioquímica (PAPP-A + βhCG) + risco combinado + amniocentese/NIPT' },
      { achado: 'ILA <5cm (oligoâmnio)', significa: 'RCIU, rotura prematura de membranas, anomalia renal', acao: 'Perfil biofísico + Doppler umbilical + Internação' },
      { achado: 'ILA >25cm (polidrâmnio)', significa: 'DM materno, atresia esofágica/duodenal, feto anêmico', acao: 'Glicemia, morfológico detalhado, Doppler ACM (anemia fetal)' },
      { achado: 'Placenta prévia total (bordo placentário sobre OI)', significa: 'Placenta prévia total', acao: 'Cesárea eletiva com 36-37 semanas + banco de sangue' },
    ],
    dica: 'CCN (comprimento cabeça-nádega) é o melhor parâmetro para datação gestacional (<14 semanas). Após isso: DBP + femoral.',
    perola: 'Doppler umbilical: diástole ausente = RCIU grave. Diástole reversa = iminência de óbito fetal → internação e maturação pulmonar.'
  },

  // ===== URINÁLISE =====
  {
    id: 'eas', categoria: 'Laboratório', nome: 'EAS / Urinálise — Interpretação',
    descricao: 'Interpretação do exame de urina tipo 1 (EAS / sumário de urina).',
    passos: [
      { passo: 1, titulo: 'Aspecto e Cor', descricao: 'Normal: amarelo citrino, límpido. Turvo = leucocitúria / bacteriúria. Hematúria: cor de "Coca-Cola" (mioglobinúria) vs rosado (hematúria).' },
      { passo: 2, titulo: 'Densidade', descricao: 'Normal: 1010-1025. Baixa (<1010) = DI, hidratação excessiva. Alta (>1025) = desidratação, SIADH. Isostenúria = doença renal avançada.' },
      { passo: 3, titulo: 'pH urinário', descricao: 'Normal: 5-8. Alcalino persistente = ATR tipo 1, infecção por urease+. Ácido persistente = acidose metabólica, gota.' },
      { passo: 4, titulo: 'Sedimento urinário', descricao: 'Leucócitos >5/campo: piúria. Hemácias >3/campo: hematúria. Cilindros hemáticos: lesão glomerular (nefrite). Cilindros granulosos: NTA.' },
    ],
    achados: [
      { achado: 'Leucocitúria + nitrito + bacteriúria', significa: 'Infecção do trato urinário (ITU)', acao: 'Urocultura + ATB conforme flora local (ciprofloxacino / nitrofurantoína)' },
      { achado: 'Hematúria + cilindros hemáticos + proteinúria', significa: 'Síndrome nefrítica (glomerulonefrite)', acao: 'Complemento + ASLO + Biopsia renal' },
      { achado: 'Proteinúria ≥3,5g/24h + hipoalbuminemia + edema', significa: 'Síndrome nefrótica', acao: 'Etiologia (DM, LES, minimal change) + biopsia + albumina + corticoide' },
      { achado: 'Glicosúria sem hiperglicemia', significa: 'Glicosúria renal (limiar renal baixo) ou síndrome de Fanconi', acao: 'Glicemia + eletrólitos + fósforo + bicarbonato' },
      { achado: 'Cilindros granulosos + NaCl urinário >20mEq/L', significa: 'Necrose tubular aguda (NTA)', acao: 'Identificar causa (isquemia, aminoglicosídeo, contraste) + suporte renal' },
    ],
    dica: 'EAS é exame triagem — sempre confirmar ITU com urocultura antes de tratar se assintomático ou resultado ambíguo.',
    perola: 'Hematúria isolada em >40 anos SEM infecção: investigar neoplasia urotelial (cistoscopia + TC urografia) mesmo se transitória.'
  },

  // ===== FUNDOSCOPIA =====
  {
    id: 'fundoscopia', categoria: 'Oftalmologia', nome: 'Fundoscopia / Oftalmoscopia — Achados Essenciais',
    descricao: 'Guia dos principais achados no exame de fundo de olho com correlação sistêmica.',
    passos: [
      { passo: 1, titulo: 'Papila óptica', descricao: 'Normal: redonda, bordas nítidas, cor amarelo-rosada, relação escavação/papila (cup/disc) <0,3. Papiledema: bordas apagadas, elevação.' },
      { passo: 2, titulo: 'Vasos retinianos', descricao: 'Arteríola:vênula = 2:3. HAS: estreitamento arteriolar, cruzamentos patológicos (sinal de Gunn/Salus).' },
      { passo: 3, titulo: 'Retina (parênquima)', descricao: 'Exsudatos: duros (lipídeos, DM) vs moles/algodonosos (isquemia, HAS grave). Hemorragias: em chama (HAS) vs puntiformes (DM).' },
      { passo: 4, titulo: 'Mácula', descricao: 'Mancha de cherry-red (vermelho cereja): oclusão de artéria central da retina. Degeneração macular: drusas.' },
    ],
    achados: [
      { achado: 'Papiledema bilateral', significa: 'Hipertensão intracraniana (tumor, trombose seio, pseudotumor)', acao: 'TC/RNM crânio urgente' },
      { achado: 'Exsudatos duros + microaneurismas + hemorragias puntiformes', significa: 'Retinopatia diabética não proliferativa', acao: 'Controle glicêmico + oftalmologista + laser se proliferativa' },
      { achado: 'Estreitamento arteriolar + cruzamentos patológicos', significa: 'Retinopatia hipertensiva (Keith-Wagener II-III)', acao: 'Controle rigoroso de PA' },
      { achado: 'Exsudatos algodonosos + hemorragias em chama (KW grau III-IV)', significa: 'HAS maligna / crise hipertensiva com lesão de órgão-alvo', acao: 'Redução gradual de PA (25% em 1h). UTI + nitroprussiato' },
      { achado: 'Mancha vermelha na mácula + palidez periférica', significa: 'Oclusão da artéria central da retina (OACR)', acao: 'Emergência oftalmológica. Massagem ocular + AAS + paracentese. <6h' },
      { achado: 'Neovascularização de disco / retina', significa: 'Retinopatia diabética proliferativa', acao: 'Fotocoagulação laser + anti-VEGF intravítreo' },
    ],
    dica: 'Todo paciente com HAS ou DM deve ter fundo de olho pelo menos 1×/ano.',
    perola: 'Amaurose fugaz unilateral (perda visual transitória de minutos) = TIA na artéria oftálmica → urgência neurológica + AAS + statina + investigar carótida.'
  },
]
