export const DRUGS = [
  // ─── EMERGÊNCIA ───────────────────────────────────────────────────────────────
  {
    id: 'adrenalina', nome: 'Adrenalina (Epinefrina)', generico: 'Epinefrina',
    classe: 'Catecolamina / Simpaticomimético', categoria: 'Emergência',
    mecanismo: 'Agonista α e β-adrenérgico: vasoconstricção (α), broncodilatação e inotrópico (β)',
    indicacoes: ['PCR (FV/TVSP, AESP, Asistolia)', 'Anafilaxia', 'Choque anafilático', 'Broncoespasmo grave'],
    dosagem: {
      adulto: [
        { indicacao: 'PCR', dose: '1 mg IV a cada 3–5 min', via: 'IV' },
        { indicacao: 'Anafilaxia', dose: '0,3–0,5 mg IM (face ântero-lateral da coxa)', via: 'IM' },
        { indicacao: 'Choque anafilático', dose: '0,05–1 µg/kg/min em bomba', via: 'IV contínuo' },
      ],
      crianca: [
        { indicacao: 'PCR pediátrica', dose: '0,01 mg/kg IV (máx 1 mg) a cada 3–5 min', via: 'IV' },
        { indicacao: 'Anafilaxia', dose: '0,01 mg/kg IM (máx 0,5 mg)', via: 'IM' },
      ]
    },
    interacoes: ['Beta-bloqueadores (reduz efeito)', 'IMAOs (crise hipertensiva)', 'Antidepressivos tricíclicos'],
    efeitosAdversos: {
      comuns: ['Taquicardia', 'Hipertensão', 'Tremor', 'Ansiedade', 'Cefaleia'],
      graves: ['Arritmia', 'Isquemia miocárdica', 'Hemorragia intracraniana'],
    },
    contraindicacoes: ['Taquicardia com FC >160 (relativo)', 'Angina instável (relativo em anafilaxia)'],
    monitoracao: ['FC', 'PA', 'ECG', 'Perfusão periférica'],
    perola: 'Na anafilaxia: adrenalina IM é SEMPRE o 1º passo — antes do anti-histamínico e corticoide',
    blackBox: null
  },
  {
    id: 'amiodarona', nome: 'Amiodarona', generico: 'Amiodarona',
    classe: 'Antiarrítmico Classe III', categoria: 'Emergência / Cardiologia',
    mecanismo: 'Prolonga potencial de ação — bloqueia canais de K⁺, Na⁺, Ca²⁺ e α/β adrenérgicos',
    indicacoes: ['FV/TVSP refratária (PCR)', 'Taquicardia ventricular', 'FA com resposta ventricular rápida', 'Taquicardia supraventricular'],
    dosagem: {
      adulto: [
        { indicacao: 'PCR (FV/TVSP)', dose: '300 mg IV bolus; repetir 150 mg em 3–5 min se necessário', via: 'IV bolus' },
        { indicacao: 'TV/FA estável', dose: '150 mg IV em 10 min, depois 1 mg/min × 6h, depois 0,5 mg/min × 18h', via: 'IV infusão' },
        { indicacao: 'Manutenção oral', dose: '200 mg/dia (dose de manutenção)', via: 'VO' },
      ],
      crianca: [{ indicacao: 'PCR pediátrica', dose: '5 mg/kg IV bolus', via: 'IV' }]
    },
    interacoes: ['Warfarina (↑INR)', 'Digoxina (toxicidade)', 'Estatinas (miopatia)', 'QT-prolongadores'],
    efeitosAdversos: {
      comuns: ['Bradicardia', 'Hipotensão IV', 'Fotossensibilidade', 'Náusea'],
      graves: ['Toxicidade pulmonar (pneumonite)', 'Hepatotoxicidade', 'Hipotireoidismo/Hipertireoidismo', 'Torsades de pointes (raro)'],
    },
    contraindicacoes: ['Bradicardia sinusal grave', 'BAV de 2º/3º grau sem MP', 'Hipotireoidismo', 'Hipertireoidismo'],
    monitoracao: ['Função tireoidiana (TSH) a cada 6 meses', 'Função hepática', 'RX tórax anual', 'Fundoscopia'],
    perola: 'Amiodarona muda TSH — sempre checar antes e durante uso crônico',
    blackBox: 'Toxicidade pulmonar: pode ser fatal. Monitorar RX tórax e TFP anualmente.'
  },
  {
    id: 'atropina', nome: 'Atropina', generico: 'Sulfato de atropina',
    classe: 'Anticolinérgico', categoria: 'Emergência / Cardiologia',
    mecanismo: 'Bloqueia receptores muscarínicos — aumenta FC e condução AV',
    indicacoes: ['Bradicardia sintomática', 'BAV de 1º e 2º grau tipo I', 'Intoxicação por organofosforados'],
    dosagem: {
      adulto: [
        { indicacao: 'Bradicardia', dose: '0,5 mg IV; repetir a cada 3–5 min; máx 3 mg', via: 'IV' },
        { indicacao: 'Organofosforado', dose: '2–4 mg IV até secar secreções, repetir a cada 5–10 min', via: 'IV' },
      ],
      crianca: [{ indicacao: 'Bradicardia pediátrica', dose: '0,02 mg/kg IV (mín 0,1 mg; máx 0,5 mg)', via: 'IV' }]
    },
    interacoes: ['Anticolinérgicos (efeito somado)', 'Agonistas colinérgicos (antagonismo)'],
    efeitosAdversos: {
      comuns: ['Taquicardia', 'Boca seca', 'Visão turva', 'Retenção urinária', 'Constipação'],
      graves: ['Taquicardia ventricular (paradoxalmente em doses baixas)', 'Psicose anticolinérgica'],
    },
    contraindicacoes: ['Taquicardia', 'Glaucoma de ângulo fechado', 'Retenção urinária'],
    monitoracao: ['FC', 'PA', 'ECG'],
    perola: 'Dose <0,5 mg pode PIORAR a bradicardia (efeito paradoxal). Mínimo 0,5 mg.',
    blackBox: null
  },
  {
    id: 'mgso4', nome: 'Sulfato de Magnésio (MgSO₄)', generico: 'Sulfato de magnésio',
    classe: 'Eletrolítico / Anticonvulsivante', categoria: 'Emergência / GO',
    mecanismo: 'Bloqueia receptores NMDA e modula condução neuromuscular — anticonvulsivante',
    indicacoes: ['Pré-eclâmpsia grave (prevenção eclâmpsia)', 'Eclâmpsia (tratamento)', 'Torsades de pointes', 'Hipomagnesemia grave', 'Crise asmática refratária'],
    dosagem: {
      adulto: [
        { indicacao: 'Pré-eclâmpsia/Eclâmpsia', dose: '4–6 g IV em 20 min (ataque), depois 1–2 g/h (manutenção)', via: 'IV' },
        { indicacao: 'Torsades de pointes', dose: '2 g IV em 1–2 min, depois infusão 3–20 mg/min', via: 'IV' },
        { indicacao: 'Asma grave', dose: '2 g IV em 20 min', via: 'IV' },
      ],
      crianca: [{ indicacao: 'Hipomagnesemia', dose: '25–50 mg/kg IV (máx 2 g)', via: 'IV' }]
    },
    interacoes: ['Bloqueadores neuromusculares (potencializa)', 'Aminoglicosídeos (nefrotoxicidade)', 'Digitálicos'],
    efeitosAdversos: {
      comuns: ['Rubor', 'Hipotensão', 'Náusea', 'Diplopia'],
      graves: ['Toxicidade: perda reflexos (Mg >7 mEq/L), paralisia respiratória (Mg >15 mEq/L)'],
    },
    contraindicacoes: ['Bloqueio AV', 'Miastenia gravis', 'CrCl <20 mL/min (relativo — reduzir dose)'],
    monitoracao: ['Reflexos patelares (perda = toxicidade iminente)', 'FR (>12 irpm)', 'Diurese (>25 mL/h)', 'Mg sérico se disponível (alvo 4-7 mEq/L)'],
    perola: 'Antídoto da toxicidade: Gluconato de Cálcio 1g IV. Sempre disponível à beira do leito.',
    blackBox: null
  },
  {
    id: 'ocitocina', nome: 'Ocitocina', generico: 'Ocitocina',
    classe: 'Ocitócico / Hormônio', categoria: 'GO / Emergência',
    mecanismo: 'Estimula contração uterina e liberação de leite',
    indicacoes: ['Indução do trabalho de parto', 'Hemorragia pós-parto (atonia)', 'Condução do parto'],
    dosagem: {
      adulto: [
        { indicacao: 'HPP (atonia)', dose: '10 UI IM imediatamente após expulsão do bebê', via: 'IM' },
        { indicacao: 'HPP grave', dose: '20 UI em 1000 mL SF 0,9% IV, correr conforme resposta', via: 'IV infusão' },
        { indicacao: 'Indução', dose: '1–2 mUI/min, aumentar 1–2 mUI/min a cada 30 min', via: 'IV infusão' },
      ]
    },
    interacoes: ['Misoprostol (efeito somado — combinação usada em HPP refratária)', 'Anestésicos halogenados (reduz efeito)'],
    efeitosAdversos: {
      comuns: ['Hipotensão (IV rápido)', 'Taquicardia', 'Hiponatremia (uso prolongado)'],
      graves: ['Hiperestimulação uterina', 'Sofrimento fetal', 'Rotura uterina'],
    },
    contraindicacoes: ['Apresentação fetal anômala', 'DPP', 'Cesárea anterior (relativo)', 'Sofrimento fetal'],
    monitoracao: ['Dinâmica uterina (taquissistolia = >5 contrações em 10 min)', 'BCF fetal', 'PA'],
    perola: 'HPP: ocitocina IM imediatamente ao nascer do bebê — reduz HPP em 60%. NÃO esperar placenta.',
    blackBox: null
  },
  {
    id: 'alteplase', nome: 'Alteplase (rt-PA)', generico: 'Alteplase',
    classe: 'Trombolítico — ativador do plasminogênio tecidual', categoria: 'Neurologia / Cardiologia',
    mecanismo: 'Ativa plasminogênio → plasmina → fibrinólise do trombo',
    indicacoes: ['AVC isquêmico (<4,5h)', 'IAM (STEMI)', 'TEP maciço com instabilidade hemodinâmica'],
    dosagem: {
      adulto: [
        { indicacao: 'AVC isquêmico', dose: '0,9 mg/kg (máx 90 mg) — 10% bolus, 90% em 60 min IV', via: 'IV' },
        { indicacao: 'TEP maciço', dose: '100 mg IV em 2h', via: 'IV' },
        { indicacao: 'IAM (STEMI)', dose: '15 mg bolus + 0,75 mg/kg em 30 min + 0,5 mg/kg em 60 min', via: 'IV' },
      ]
    },
    interacoes: ['Anticoagulantes (↑risco sangramento)', 'Antiplaquetários (↑risco sangramento)'],
    efeitosAdversos: {
      comuns: ['Sangramento no sítio de punção', 'Equimose', 'Sangramento oral/nasal'],
      graves: ['Hemorragia intracraniana (2-7%)', 'Sangramento GI grave', 'Anafilaxia (rara)'],
    },
    contraindicacoes: [
      'Sangramento interno ativo', 'Cirurgia cerebral/espinhal <3 meses', 'AVC hemorrágico prévio',
      'TA >185/110 sem controle', 'Plaquetas <100k', 'Glicose <50 ou >400 mg/dL',
      'Anticoagulação em curso com INR>1,7 ou TTPA elevado'
    ],
    monitoracao: ['PA (alvo ≤180/105 durante infusão)', 'Sinais neurológicos a cada 15 min', 'Sangramento'],
    perola: 'AVC: janela é 4,5h do INÍCIO dos sintomas (não da chegada). ECG normal não exclui AVC.',
    blackBox: 'Hemorragia intracraniana pode ser fatal. Calcular risco-benefício individualmente.'
  },
  // ─── CARDIOLOGIA ─────────────────────────────────────────────────────────────
  {
    id: 'metoprolol', nome: 'Metoprolol', generico: 'Succinato/tartarato de metoprolol',
    classe: 'Beta-bloqueador seletivo (β₁)', categoria: 'Cardiologia',
    mecanismo: 'Bloqueia receptores β₁-adrenérgicos: ↓FC, ↓PA, ↓contratilidade',
    indicacoes: ['HAS', 'ICC (metoprolol succinato)', 'Angina', 'Pós-IAM', 'FA (controle de FC)', 'Migrânea (profilaxia)'],
    dosagem: {
      adulto: [
        { indicacao: 'HAS/Angina', dose: '25–200 mg/dia VO (1–2×/dia — succinato)', via: 'VO' },
        { indicacao: 'ICC', dose: 'Iniciar 12,5–25 mg/dia; titular até 200 mg/dia', via: 'VO' },
        { indicacao: 'FA (IV)', dose: '2,5–5 mg IV em 2 min; repetir até 3 doses', via: 'IV' },
      ]
    },
    interacoes: ['Verapamil/Diltiazem (bradicardia/bloqueio)', 'AINE (reduz efeito anti-hipertensivo)', 'Insulina (mascara hipoglicemia)'],
    efeitosAdversos: {
      comuns: ['Bradicardia', 'Fadiga', 'Hipotensão', 'Extremidades frias', 'Broncoespasmo (relativo em asma leve)'],
      graves: ['Bloqueio AV', 'Broncoespasmo grave em DPOC', 'Insuficiência cardíaca descompensada'],
    },
    contraindicacoes: ['Asma grave', 'DPOC grave', 'BAV de 2º/3º grau', 'Bradicardia <50 bpm', 'Choque cardiogênico'],
    monitoracao: ['FC (manter ≥50 bpm)', 'PA', 'Função pulmonar (asma)'],
    perola: 'Em diabéticos: mascara sintomas de hipoglicemia (exceto sudorese). Orientar monitoração de glicemia.',
    blackBox: 'Não suspender abruptamente em cardiopatas — risco de isquemia rebote. Titular ↓ em 2 semanas.'
  },
  {
    id: 'enalapril', nome: 'Enalapril', generico: 'Maleato de enalapril',
    classe: 'IECA (Inibidor da Enzima Conversora de Angiotensina)', categoria: 'Cardiologia',
    mecanismo: 'Inibe conversão de angiotensina I → II; reduz vasoconstricção e aldosterona',
    indicacoes: ['HAS', 'ICC', 'Pós-IAM (reduz remodelamento)', 'Nefropatia diabética', 'Proteinúria'],
    dosagem: {
      adulto: [
        { indicacao: 'HAS', dose: '5–40 mg/dia VO (1–2×/dia)', via: 'VO' },
        { indicacao: 'ICC', dose: '2,5 mg 2×/dia; titular até 10–20 mg 2×/dia', via: 'VO' },
      ]
    },
    interacoes: ['AINEs (reduz efeito e ↑K)', 'Diuréticos poupadores de K (hipercalemia)', 'Lítio (↑nível)', 'BRA (hipercalemia — contraindicar combinação em DRC)'],
    efeitosAdversos: {
      comuns: ['Tosse seca (classe IECA — 10–15%)', 'Hipotensão 1ª dose', 'Hipercalemia'],
      graves: ['Angioedema (contraindica classe para sempre)', 'IRA em estenose de artéria renal bilateral'],
    },
    contraindicacoes: ['Angioedema prévio por IECA', 'Gravidez (teratogênico — 2º e 3º trim)', 'Estenose bilateral de artéria renal', 'Hipercalemia grave'],
    monitoracao: ['K⁺ (após 1 semana)', 'Creatinina (aceitável ↑30%)', 'PA'],
    perola: 'Tosse = trocar para BRA (losartana). Angioedema = NUNCA mais IECA ou BRA — usar amlodipino.',
    blackBox: 'Usar IECA na gravidez causa malformações renais fetais e oligohidrâmnio. Contraindicado.'
  },
  {
    id: 'losartana', nome: 'Losartana', generico: 'Losartana potássica',
    classe: 'BRA (Bloqueador do Receptor de Angiotensina)', categoria: 'Cardiologia',
    mecanismo: 'Bloqueia receptor AT1 da angiotensina II — sem efeito sobre bradicinina (não causa tosse)',
    indicacoes: ['HAS', 'ICC (intolerância a IECA)', 'Nefropatia diabética (tipo 2)', 'Hipertrofia ventricular esquerda'],
    dosagem: {
      adulto: [
        { indicacao: 'HAS', dose: '50–100 mg/dia VO (1×/dia)', via: 'VO' },
        { indicacao: 'Nefropatia DM2', dose: '50–100 mg/dia VO', via: 'VO' },
      ]
    },
    interacoes: ['AINEs', 'Diuréticos poupadores de K', 'Aliskiren (contraindicado em DM ou DRC)'],
    efeitosAdversos: {
      comuns: ['Hipotensão', 'Hipercalemia', 'Tontura'],
      graves: ['Angioedema (raro, mas possível — <1%)', 'IRA em estenose artéria renal'],
    },
    contraindicacoes: ['Gravidez', 'Hipercalemia grave', 'Angioedema prévio a BRA'],
    monitoracao: ['K⁺', 'Creatinina', 'PA'],
    perola: 'BRA não causa tosse (diferente de IECA). Preferir em diabéticos com tosse por IECA.',
    blackBox: 'Contraindicado na gravidez. Teratogênico.'
  },
  {
    id: 'furosemida', nome: 'Furosemida', generico: 'Furosemida',
    classe: 'Diurético de Alça', categoria: 'Cardiologia / Renal',
    mecanismo: 'Inibe cotransportador Na-K-2Cl na alça de Henle — diurese potente',
    indicacoes: ['Edema agudo de pulmão', 'ICC descompensada', 'HAS resistente', 'Síndrome nefrótica', 'Hipercalemia aguda'],
    dosagem: {
      adulto: [
        { indicacao: 'Edema agudo pulmão', dose: '40–80 mg IV em bolus; repetir em 2h se necessário', via: 'IV' },
        { indicacao: 'ICC crônica', dose: '20–80 mg VO (1–2×/dia)', via: 'VO' },
        { indicacao: 'HAS resistente', dose: '40–160 mg/dia VO', via: 'VO' },
      ],
      crianca: [{ indicacao: 'Edema/ICC', dose: '0,5–2 mg/kg IV ou VO', via: 'IV/VO' }]
    },
    interacoes: ['Aminoglicosídeos (ototoxicidade)', 'Lítio (↑toxicidade)', 'AINEs (reduz efeito diurético)', 'Digoxina (hipocalemia → toxicidade digital)'],
    efeitosAdversos: {
      comuns: ['Hipocalemia', 'Hiponatremia', 'Hipotensão', 'Hiperuricemia', 'Hiperglicemia'],
      graves: ['Ototoxicidade (IV rápido ou altas doses)', 'IRA por depleção de volume'],
    },
    contraindicacoes: ['Anúria estabelecida', 'Hipocalemia grave não corrigida'],
    monitoracao: ['K⁺ (repor se <3,5)', 'Creatinina', 'PA', 'Diurese'],
    perola: 'Hipocalemia + furosemida + digoxina = perigo! Manter K >4 mEq/L em uso de digoxina.',
    blackBox: null
  },
  {
    id: 'atorvastatina', nome: 'Atorvastatina', generico: 'Atorvastatina cálcica',
    classe: 'Estatina (Inibidor da HMG-CoA redutase)', categoria: 'Cardiologia',
    mecanismo: 'Inibe síntese de colesterol hepático → ↑receptores LDL → ↓LDL sérico',
    indicacoes: ['Dislipidemia', 'Prevenção cardiovascular primária e secundária', 'Pós-IAM (alta intensidade independente do LDL)'],
    dosagem: {
      adulto: [
        { indicacao: 'Prevenção primária', dose: '10–20 mg/dia VO (noite)', via: 'VO' },
        { indicacao: 'Alto risco / Pós-IAM', dose: '40–80 mg/dia VO (noite)', via: 'VO' },
      ]
    },
    interacoes: ['Fibratos (↑miopatia)', 'Macrolídeos/Azóis (↑nível — ↑risco miopatia)', 'Amiodarona (↑nível)', 'Ciclosporina (↑nível)'],
    efeitosAdversos: {
      comuns: ['Mialgia', 'Elevação de transaminases (geralmente transitória)'],
      graves: ['Rabdomiólise (CK >10×)', 'Hepatotoxicidade grave (rara)', 'Miopatia'],
    },
    contraindicacoes: ['Doença hepática ativa', 'Gravidez e amamentação'],
    monitoracao: ['CK se mialgia (suspender se >10× normal)', 'TGO/TGP (baseline + 3 meses + 1 ano)', 'LDL'],
    perola: 'Pós-IAM: atorvastatina 40-80 mg independente do LDL basal. Benefício pleitrópico além do colesterol.',
    blackBox: null
  },
  {
    id: 'aspirina', nome: 'Ácido Acetilsalicílico (AAS/Aspirina)', generico: 'Ácido acetilsalicílico',
    classe: 'Antiplaquetário / AINE', categoria: 'Cardiologia / Emergência',
    mecanismo: 'Inibe irreversivelmente COX-1 e COX-2 → ↓tromboxano A₂ → ↓agregação plaquetária',
    indicacoes: ['IAM (300 mg imediato)', 'AVC isquêmico / AIT', 'Angina instável', 'Doença arterial coronariana', 'Profilaxia CV secundária'],
    dosagem: {
      adulto: [
        { indicacao: 'IAM agudo', dose: '200–300 mg VO (mastigar — liberação rápida)', via: 'VO' },
        { indicacao: 'Profilaxia CV', dose: '75–100 mg/dia VO', via: 'VO' },
        { indicacao: 'Febre reumática', dose: '80–100 mg/kg/dia VO (fase aguda)', via: 'VO' },
      ]
    },
    interacoes: ['Anticoagulantes (↑sangramento)', 'AINE (↑risco GI e inibe antiagregação)', 'Metotrexato (toxicidade)'],
    efeitosAdversos: {
      comuns: ['Irritação gástrica', 'Sangramento GI'],
      graves: ['Síndrome de Reye em crianças <16a com viroses', 'Broncoespasmo em asmáticos sensíveis (10%)'],
    },
    contraindicacoes: ['Alergia a AAS/AINE', 'Úlcera péptica ativa', 'Criança <16a com febre viral', 'Hemofilia'],
    monitoracao: ['Sintomas GI', 'Sangramento', 'PA'],
    perola: 'IAM: AAS 300 mg MASTIGADO — absorção mais rápida que comprimido inteiro. Verificar alergia antes.',
    blackBox: 'Síndrome de Reye: não usar em crianças <16 anos com varicela ou influenza.'
  },
  // ─── ANTIBIÓTICOS ────────────────────────────────────────────────────────────
  {
    id: 'ceftriaxona', nome: 'Ceftriaxona', generico: 'Ceftriaxona dissódica',
    classe: 'Cefalosporina 3ª Geração', categoria: 'Infectologia',
    mecanismo: 'Inibe síntese de parede celular bacteriana (beta-lactâmico) — bactericida',
    indicacoes: ['Meningite bacteriana', 'Pneumonia grave', 'Sepse', 'ITU complicada', 'Gonorreia', 'Febre tifoide'],
    dosagem: {
      adulto: [
        { indicacao: 'Meningite', dose: '2 g IV a cada 12h', via: 'IV' },
        { indicacao: 'Pneumonia/Sepse', dose: '1–2 g IV a cada 24h', via: 'IV' },
        { indicacao: 'Gonorreia', dose: '500 mg IM dose única', via: 'IM' },
      ],
      crianca: [
        { indicacao: 'Meningite', dose: '100 mg/kg/dia IV em 1–2 doses (máx 4 g/dia)', via: 'IV' },
        { indicacao: 'Pneumonia/Sepse', dose: '50–100 mg/kg/dia IV', via: 'IV' },
      ]
    },
    interacoes: ['Anticoagulantes (↑INR)', 'Cálcio IV (precipitação — não misturar em neonatos)', 'Aminoglicosídeos (sinergismo)'],
    efeitosAdversos: {
      comuns: ['Diarreia', 'Náusea', 'Rash cutâneo', 'Dor no sítio IM'],
      graves: ['Reação alérgica / anafilaxia (0,01–0,1%)', 'C. difficile', 'Bilirrubinato de cálcio (pseudolitíase biliar)'],
    },
    contraindicacoes: ['Alergia grave a cefalosporinas/penicilinas (10% de reatividade cruzada)', 'Neonatos hiperbilirrubinêmicos (desloca bilirrubina da albumina)'],
    monitoracao: ['Função renal (ajuste se CrCl <10 mL/min)', 'Sinais alérgicos'],
    perola: 'Meningite: ceftriaxona 2g IV — não atrasar por esperar resultado da punção lombar se instável.',
    blackBox: null
  },
  {
    id: 'vancomicina', nome: 'Vancomicina', generico: 'Cloridrato de vancomicina',
    classe: 'Glicopeptídeo', categoria: 'Infectologia',
    mecanismo: 'Inibe síntese de parede celular (sítio diferente dos beta-lactâmicos) — ativo contra Gram+',
    indicacoes: ['Infecção por MRSA', 'Endocardite por estafilococo', 'Meningite resistente', 'C. difficile grave (oral)', 'Infecção por estreptococo resistente'],
    dosagem: {
      adulto: [
        { indicacao: 'MRSA / Endocardite', dose: '25–30 mg/kg/dia IV em 2 doses (AUC/MIC monitorizado)', via: 'IV' },
        { indicacao: 'C. difficile grave (oral)', dose: '125–500 mg VO 4×/dia × 10 dias', via: 'VO' },
      ],
      crianca: [{ indicacao: 'MRSA pediátrica', dose: '40–60 mg/kg/dia IV em 4 doses', via: 'IV' }]
    },
    interacoes: ['Aminoglicosídeos (nefrotoxicidade)', 'Anfotericina B (nefrotoxicidade)', 'Furosemida (ototoxicidade)'],
    efeitosAdversos: {
      comuns: ['Red man syndrome (infusão rápida — rubor + prurido)', 'Nefrotoxicidade', 'Flebite'],
      graves: ['Nefrotoxicidade grave (nível alto + aminoglicosídeo)', 'Ototoxicidade', 'Neutropenia'],
    },
    contraindicacoes: ['Alergia a vancomicina (rara)'],
    monitoracao: ['Nível sérico (TDM): AUC/MIC ~400–600', 'Creatinina diariamente', 'Audição em uso prolongado'],
    perola: 'Red man syndrome: infundir em ≥60 min e pré-medicar com anti-histamínico. Não é alergia.',
    blackBox: null
  },
  {
    id: 'azitromicina', nome: 'Azitromicina', generico: 'Diidrato de azitromicina',
    classe: 'Macrolídeo', categoria: 'Infectologia',
    mecanismo: 'Inibe síntese proteica (subunidade 50S) — bacteriostático',
    indicacoes: ['Pneumonia comunitária atípica (Mycoplasma, Chlamydia, Legionella)', 'DSTs (clamídia, cancro mole)', 'Otite média', 'Sinusite', 'Faringite (alternativa à penicilina)'],
    dosagem: {
      adulto: [
        { indicacao: 'Pneumonia atípica', dose: '500 mg VO 1×/dia × 3–5 dias', via: 'VO' },
        { indicacao: 'Clamídia / Cancro mole', dose: '1 g VO dose única', via: 'VO' },
      ],
      crianca: [{ indicacao: 'Pneumonia / Otite', dose: '10 mg/kg/dia VO × 3 dias (máx 500 mg/dia)', via: 'VO' }]
    },
    interacoes: ['Warfarina (↑INR)', 'Antiarrítmicos (↑QT)', 'Estatinas (miopatia — suspender estatina)', 'Antiácidos com Al/Mg (↓absorção)'],
    efeitosAdversos: {
      comuns: ['Diarreia', 'Náusea', 'Dor abdominal'],
      graves: ['Prolongamento QT / Torsades', 'Hepatotoxicidade (rara)', 'Anafilaxia (rara)'],
    },
    contraindicacoes: ['Prolongamento QT congênito', 'Hipocalemia não corrigida', 'Hepatopatia grave'],
    monitoracao: ['ECG se fatores de risco para QT longo', 'Sintomas GI'],
    perola: 'Pneumonia: combinar ceftriaxona + azitromicina para cobrir bactérias típicas E atípicas.',
    blackBox: null
  },
  {
    id: 'sulfametox', nome: 'Sulfametoxazol-Trimetoprima (SMZ-TMP)', generico: 'Co-trimoxazol',
    classe: 'Sulfonamida + inibidor de dihidropteroato redutase', categoria: 'Infectologia',
    mecanismo: 'Duplo bloqueio da síntese de folato bacteriano — bactericida em combinação',
    indicacoes: ['ITU não complicada', 'Pneumocistose (PCP) em HIV', 'Toxoplasmose (profilaxia)', 'Infecção MRSA comunitário (SMZ-TMP)'],
    dosagem: {
      adulto: [
        { indicacao: 'ITU não complicada', dose: '400/80 mg (simples) VO 2×/dia × 3 dias', via: 'VO' },
        { indicacao: 'PCP (Pneumocistose)', dose: '15–20 mg/kg/dia TMP VO em 3–4 doses × 21 dias', via: 'VO' },
      ],
      crianca: [{ indicacao: 'ITU/Otite', dose: '4–8 mg/kg/dia TMP VO 2×/dia', via: 'VO' }]
    },
    interacoes: ['Warfarina (↑INR)', 'Metotrexato (mielotoxicidade)', 'IECA/BRA (↑K)'],
    efeitosAdversos: {
      comuns: ['Náusea', 'Rash', 'Fotossensibilidade'],
      graves: ['Stevens-Johnson (suspender imediatamente se rash)', 'Agranulocitose', 'Hipercalemia'],
    },
    contraindicacoes: ['Alergia a sulfa', 'Gravidez (1º e 3º trimestres)', 'CrCl <15 mL/min'],
    monitoracao: ['Creatinina', 'K+', 'Hemograma (uso prolongado)'],
    perola: 'HIV + CD4 <200: profilaxia com SMZ-TMP simples 1cp/dia (previne PCP e toxoplasmose).',
    blackBox: null
  },
  // ─── NEUROLOGIA ──────────────────────────────────────────────────────────────
  {
    id: 'fenitoina', nome: 'Fenitoína (Difenil-hidantoína)', generico: 'Fenitoína sódica',
    classe: 'Anticonvulsivante (hidantoína)', categoria: 'Neurologia',
    mecanismo: 'Estabiliza membranas neuronais bloqueando canais de Na⁺ dependentes de voltagem',
    indicacoes: ['Epilepsia (focal e generalizada)', 'Estado epiléptico (IV)', 'Neuralgia do trigêmeo', 'Profilaxia de convulsão pós-TCE'],
    dosagem: {
      adulto: [
        { indicacao: 'Status epilepticus', dose: '20 mg/kg IV (≤50 mg/min)', via: 'IV lento' },
        { indicacao: 'Epilepsia crônica', dose: '300–400 mg/dia VO', via: 'VO' },
      ],
      crianca: [{ indicacao: 'Status epilepticus', dose: '20 mg/kg IV (≤1 mg/kg/min)', via: 'IV' }]
    },
    interacoes: ['Inúmeras (indutor de CYP450)', 'Carbamazepina, valproato, fenitoína — interações múltiplas', 'Warfarina (↑inicialmente, ↓depois)'],
    efeitosAdversos: {
      comuns: ['Nistagmo', 'Ataxia', 'Diplopia', 'Sonolência (dose-dependente)'],
      graves: ['Hipotensão e arritmia (IV rápido)', 'Síndrome de Stevens-Johnson', 'Hepatotoxicidade', 'Hirsutismo, hiperplasia gengival'],
    },
    contraindicacoes: ['BAV de 2º/3º grau', 'Bradicardia sinusal grave', 'Gravidez (teratogênica — síndrome fetal da hidantoína)'],
    monitoracao: ['Nível sérico (terapêutico: 10–20 µg/mL)', 'ECG durante infusão IV', 'Função hepática'],
    perola: 'Infundir fenitoína IV ≤50 mg/min — infusão rápida causa hipotensão e arritmia. Diluir em SF.',
    blackBox: null
  },
  {
    id: 'diazepam', nome: 'Diazepam', generico: 'Diazepam',
    classe: 'Benzodiazepínico', categoria: 'Neurologia / Emergência',
    mecanismo: 'Potencializa GABA-A (receptor benzodiazepínico) — inibe SNC',
    indicacoes: ['Status epiléptico (1ª linha)', 'Abstinência alcoólica', 'Ansiedade aguda grave', 'Espasmo muscular', 'Sedação procedural'],
    dosagem: {
      adulto: [
        { indicacao: 'Status epilepticus', dose: '10 mg IV em 2 min; repetir em 5 min se necessário', via: 'IV' },
        { indicacao: 'Abstinência alcoólica', dose: '10 mg VO 3–4×/dia; desmame progressivo', via: 'VO' },
      ],
      crianca: [
        { indicacao: 'Convulsão febril', dose: '0,3 mg/kg IV (máx 10 mg) ou 0,5 mg/kg retal', via: 'IV/retal' },
      ]
    },
    interacoes: ['Álcool e outros depressores SNC (depressão respiratória)', 'Opioides (RISCO ALTO)', 'CYP3A4 inibidores (fluconazol, cimetidina)'],
    efeitosAdversos: {
      comuns: ['Sedação', 'Ataxia', 'Tontura', 'Amnésia'],
      graves: ['Depressão respiratória (em overdose ou com opioides)', 'Dependência física'],
    },
    contraindicacoes: ['Miastenia gravis', 'DPOC grave com hipercapnia', 'Apneia do sono grave', 'Glaucoma de ângulo fechado'],
    monitoracao: ['FR e SatO2 (depressão respiratória)', 'Nível de consciência'],
    perola: 'Antídoto: Flumazenil 0,2 mg IV. Mas antídoto tem meia-vida curta — risco de re-sedação.',
    blackBox: 'Combinação com opioides pode causar depressão respiratória grave, coma e morte.'
  },
  // ─── ENDÓCRINO / METABÓLICO ──────────────────────────────────────────────────
  {
    id: 'insulina', nome: 'Insulina Regular (IR)', generico: 'Insulina humana regular',
    classe: 'Insulina de ação curta', categoria: 'Endócrino / Emergência',
    mecanismo: 'Liga-se a receptor de insulina → absorção celular de glicose → ↓glicemia',
    indicacoes: ['DKA (cetoacidose diabética)', 'EHHA (estado hiperosmolar)', 'Hipercalemia (transferência intracelular de K)', 'Hiperglicemia hospitalar', 'Diabetes tipo 1'],
    dosagem: {
      adulto: [
        { indicacao: 'DKA', dose: '0,1 UI/kg/h IV contínuo (após reposição volêmica)', via: 'IV infusão' },
        { indicacao: 'Hipercalemia', dose: '10 UI IV + 50 mL dextrose 50%', via: 'IV' },
        { indicacao: 'Hiperglicemia hospitalar', dose: '0,1–0,2 UI/kg/dose SC a cada 4–6h (escala)', via: 'SC' },
      ],
      crianca: [{ indicacao: 'DKA pediátrica', dose: '0,05–0,1 UI/kg/h IV', via: 'IV' }]
    },
    interacoes: ['Beta-bloqueadores (masca hipoglicemia)', 'Álcool (↑risco hipoglicemia)', 'Corticoides (↑necessidade de insulina)'],
    efeitosAdversos: {
      comuns: ['Hipoglicemia', 'Lipodistrofia (SC)', 'Edema', 'Hipocalemia (DKA)'],
      graves: ['Hipoglicemia grave (<50 mg/dL)'],
    },
    contraindicacoes: ['Hipoglicemia (óbvio)'],
    monitoracao: ['Glicemia capilar a cada 1-2h (DKA)', 'Eletrólitos (K⁺ — repor se <3,5 em DKA)', 'pH em DKA'],
    perola: 'DKA: não iniciar insulina até K⁺ ≥3,5 mEq/L — insulina baixa K, pode causar arritmia.',
    blackBox: null
  },
  {
    id: 'hidrocortisona', nome: 'Hidrocortisona', generico: 'Succinato sódico de hidrocortisona',
    classe: 'Corticosteroide (glicocorticoide + mineralocorticoide)', categoria: 'Emergência / Endócrino',
    mecanismo: 'Potente anti-inflamatório e imunossupressor; repõe cortisol em insuficiência adrenal',
    indicacoes: ['Crise adrenal / Insuficiência adrenal', 'Choque séptico refratário', 'Asma grave / Anafilaxia (adjuvante)', 'Meningite por H. influenzae ou pneumococo (pediátrico)'],
    dosagem: {
      adulto: [
        { indicacao: 'Crise adrenal', dose: '100 mg IV bolus; depois 50–100 mg IV a cada 6–8h', via: 'IV' },
        { indicacao: 'Choque séptico (insuf adrenal)', dose: '200–300 mg/dia IV contínuo ou dividido', via: 'IV' },
        { indicacao: 'Asma grave', dose: '200–400 mg IV a cada 6h', via: 'IV' },
      ],
      crianca: [
        { indicacao: 'Meningite', dose: '0,15 mg/kg IV a cada 6h × 4 dias — ANTES do antibiótico', via: 'IV' },
        { indicacao: 'Crise adrenal', dose: '2 mg/kg IV bolus', via: 'IV' },
      ]
    },
    interacoes: ['AINEs (↑risco GI)', 'Antidiabéticos (↑glicemia)', 'Diuréticos (hipocalemia)'],
    efeitosAdversos: {
      comuns: ['Hiperglicemia', 'HAS', 'Insônia', 'Agitação psicomotora'],
      graves: ['Imunossupressão', 'Osteoporose (crônico)', 'Insuficiência adrenal por supressão (desmame abrupto)'],
    },
    contraindicacoes: ['Infecção fúngica sistêmica (relativo)', 'Tuberculose ativa sem tratamento'],
    monitoracao: ['Glicemia (uso agudo)', 'PA', 'K⁺'],
    perola: 'Meningite pediátrica: dexametasona ANTES do antibiótico reduz sequelas auditivas. Não atrasar ATB.',
    blackBox: null
  },
  // ─── GINECO-OBSTETRÍCIA ──────────────────────────────────────────────────────
  {
    id: 'misoprostol', nome: 'Misoprostol', generico: 'Misoprostol',
    classe: 'Prostaglandina E1 (análogo)', categoria: 'GO / Emergência',
    mecanismo: 'Estimula contrações uterinas e amolecimento cervical via receptores de prostaglandina',
    indicacoes: ['Indução do parto (cervix desfavorável)', 'HPP refratária à ocitocina', 'Aborto retido / incompleto', 'Profilaxia de úlcera (combinado com AINE)'],
    dosagem: {
      adulto: [
        { indicacao: 'HPP (após ocitocina falhou)', dose: '800 µg sublingual OU 1000 µg retal', via: 'SL ou retal' },
        { indicacao: 'Indução do parto', dose: '25–50 µg vaginal a cada 4–6h (máx 200 µg/24h)', via: 'Vaginal' },
      ]
    },
    interacoes: ['Ocitocina (taquissistolia com uso simultâneo — usar sequencial com intervalo)', 'Anticoagulantes (↑sangramento)'],
    efeitosAdversos: {
      comuns: ['Náusea', 'Diarreia', 'Cólicas', 'Febre', 'Tremores'],
      graves: ['Taquissistolia / Hiperestimulação uterina', 'Rotura uterina (cesárea anterior)'],
    },
    contraindicacoes: ['Cesárea anterior com incisão uterina (relativo para indução — risco rotura)', 'Sofrimento fetal'],
    monitoracao: ['Dinâmica uterina', 'BCF', 'Sinais vitais maternos'],
    perola: 'HPP: misoprostol 800 µg SL + ocitocina 20 UI IV = primeira linha. Ergometrina se disponível.',
    blackBox: null
  },

  // ── Antibióticos Orais ───────────────────────────────────────
  {
    id: 'amoxicilina',
    nome: 'Amoxicilina / Amoxicilina + Clavulanato',
    generico: 'amoxicilina triidratada / amoxicilina + clavulanato de potássio',
    classe: 'Aminopenicilina (± inibidor de β-lactamase)',
    categoria: 'Infectologia',
    mecanismo: 'Inibe a síntese da parede celular bacteriana ligando-se às PBPs (penicillin-binding proteins)',
    indicacoes: [
      'Otite média aguda', 'Sinusite bacteriana', 'Faringite estreptocócica', 'Pneumonia comunitária leve',
      'ITU não complicada (amoxicilina + clavulanato)', 'Infecções de pele e partes moles',
      'Profilaxia de endocardite (procedimentos dentários)', 'H. pylori (componente do esquema de erradicação)',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'Faringite/sinusite', dose: '500 mg 8/8h ou 875 mg 12/12h × 7–10 dias', via: 'VO' },
        { indicacao: 'Pneumonia comunitária leve', dose: '500 mg 8/8h ou 1g 12/12h × 5–7 dias', via: 'VO' },
        { indicacao: 'ITU (amox+clav)', dose: '875 mg/125 mg 12/12h × 5–7 dias', via: 'VO' },
        { indicacao: 'Profilaxia endocardite', dose: '2g dose única 30–60 min antes do procedimento', via: 'VO' },
      ],
      crianca: [
        { indicacao: 'Otite/sinusite/pneumonia', dose: '40–90 mg/kg/dia ÷ 8/8h (máx 500 mg/dose)', via: 'VO' },
      ]
    },
    interacoes: ['Warfarina (↑ INR)', 'Anticoncepcional oral (↓ eficácia — orientar método adicional)', 'Alopurinol (↑ risco de exantema)'],
    efeitosAdversos: {
      comuns: ['Diarreia', 'Náusea', 'Exantema maculopapular', 'Candidíase oral/vaginal'],
      graves: ['Anafilaxia (0,01–0,05%)', 'Colite pseudomembranosa (C. difficile)', 'Hepatite colestática (amox+clav)'],
    },
    contraindicacoes: ['Alergia a penicilinas', 'Uso com amoxicilina + clavulanato se disfunção hepática grave'],
    monitoracao: ['Avaliar exantema (distinguir de anafilaxia vs. rash viral)', 'Função hepática se uso prolongado de amox+clav'],
    perola: 'Rash maculopapular com amoxicilina ≠ alergia a penicilina verdadeira (não é IgE-mediada). Testar antes de contraindiar.',
    blackBox: null
  },
  {
    id: 'ciprofloxacino',
    nome: 'Ciprofloxacino',
    generico: 'ciprofloxacino cloridrato',
    classe: 'Fluoroquinolona de 2ª geração',
    categoria: 'Infectologia',
    mecanismo: 'Inibe DNA girase (topoisomerase II) e topoisomerase IV bacterianas → inibe replicação e reparo do DNA',
    indicacoes: [
      'ITU complicada e pielonefrite', 'Diarreia do viajante', 'Prostatite bacteriana',
      'Gonocócica urogenital (resistência crescente)', 'Infecções ósseas e articulares',
      'Profilaxia em neutropenia febril (oral)', 'Antraz (Bacillus anthracis)',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'ITU complicada / pielonefrite', dose: '500 mg 12/12h × 7–14 dias', via: 'VO' },
        { indicacao: 'Prostatite aguda', dose: '500 mg 12/12h × 28 dias', via: 'VO' },
        { indicacao: 'Diarreia infecciosa grave', dose: '500 mg 12/12h × 3–5 dias', via: 'VO' },
        { indicacao: 'IV (infecções graves)', dose: '400 mg 12/12h', via: 'IV' },
      ],
      crianca: [
        { indicacao: 'Uso restrito — risco cartilagem. ITU grave ou Pseudomonas', dose: '15 mg/kg 12/12h (máx 750 mg/dose)', via: 'VO ou IV' },
      ]
    },
    interacoes: [
      'Antiácidos com Al/Mg, Fe, Ca — reduzem absorção oral (tomar ciprofloxacino 2h antes ou 6h depois)',
      'Teofilina (↑ toxicidade — ↑ nível sérico)',
      'Warfarina (↑ INR)',
      'QT prolongado (↑ risco com amiodarona, antipsicóticos)',
    ],
    efeitosAdversos: {
      comuns: ['Náusea', 'Diarreia', 'Cefaleia', 'Tontura'],
      graves: ['Tendinite e ruptura de tendão (especialmente tendão de Aquiles)', 'Neuropatia periférica', 'Prolongamento QT', 'Psicose / convulsões'],
    },
    contraindicacoes: ['Gravidez', 'Crianças <18 anos (exceto indicações específicas)', 'Hipersensibilidade a quinolonas'],
    monitoracao: ['ECG se uso IV prolongado ou QT basal longo', 'Função renal (ajuste se ClCr <30 mL/min)'],
    perola: 'Black box: Tendinite + neuropatia periférica. Risco ↑ em idosos e uso de corticoides. Evitar uso empírico de UTI (seleciona resistência em Pseudomonas).',
    blackBox: 'Risco de tendinite, ruptura de tendão, neuropatia periférica e efeitos no SNC — especialmente em idosos e usuários de corticoides.'
  },
  {
    id: 'metronidazol',
    nome: 'Metronidazol',
    generico: 'metronidazol',
    classe: 'Nitroimidazol',
    categoria: 'Infectologia',
    mecanismo: 'Pró-fármaco ativado por redução anaeróbia → interfere no DNA de organismos anaeróbios e protozoários',
    indicacoes: [
      'Infecções anaeróbias (abscesso peritoneal, pulmonar, cerebral)',
      'Tricomoníase / vaginose bacteriana', 'Giardíase / amebíase',
      'C. difficile (leve a moderada — vancomicina oral é preferida grave)',
      'H. pylori (esquema de erradicação)', 'Peritonite (associado)',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'Vaginose / tricomoníase', dose: '500 mg 12/12h × 7 dias ou 2g dose única (tricomoníase)', via: 'VO' },
        { indicacao: 'C. difficile leve', dose: '500 mg 8/8h × 10–14 dias', via: 'VO' },
        { indicacao: 'Infecção anaeróbia grave', dose: '500 mg 8/8h', via: 'IV' },
        { indicacao: 'Giardíase', dose: '250 mg 8/8h × 5–7 dias', via: 'VO' },
      ],
      crianca: [
        { indicacao: 'Giardíase / amebíase', dose: '15 mg/kg/dia ÷ 8/8h × 5–7 dias', via: 'VO' },
      ]
    },
    interacoes: ['Álcool (efeito dissulfiram — taquicardia, rubor, vômito)', 'Warfarina (↑ INR muito significativo)', 'Lítio (↑ toxicidade)'],
    efeitosAdversos: {
      comuns: ['Náusea', 'Gosto metálico', 'Cefaleia', 'Tontura'],
      graves: ['Neuropatia periférica (uso prolongado)', 'Encefalopatia (raro)', 'Leucopenia'],
    },
    contraindicacoes: ['1º trimestre da gravidez (relativo)', 'Uso concomitante de álcool'],
    monitoracao: ['Hemograma se uso prolongado', 'Orientar abstinência de álcool durante e 48h após'],
    perola: 'Proibir álcool rigorosamente — efeito dissulfiram pode ser grave. Gosto metálico intenso (comum — avisar o paciente).',
    blackBox: null
  },

  // ── Gastroprotetores / Antiácidos ────────────────────────────
  {
    id: 'omeprazol',
    nome: 'Omeprazol',
    generico: 'omeprazol',
    classe: 'Inibidor da Bomba de Prótons (IBP)',
    categoria: 'Gastroenterologia',
    mecanismo: 'Inibição irreversível da H+/K+-ATPase (bomba de prótons) nas células parietais gástricas → ↓ produção de HCl',
    indicacoes: [
      'Úlcera péptica (gástrica e duodenal)', 'DRGE (doença do refluxo gastroesofágico)',
      'Erradicação H. pylori (componente da tríplice terapia)', 'Síndrome de Zollinger-Ellison',
      'Profilaxia de úlcera por AINE', 'Esofagite erosiva',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'DRGE / úlcera péptica', dose: '20–40 mg 1×/dia (jejum, 30 min antes café da manhã)', via: 'VO' },
        { indicacao: 'H. pylori (tríplice)', dose: '20 mg 12/12h × 14 dias + amoxicilina + claritromicina', via: 'VO' },
        { indicacao: 'Sangramento digestivo alto (EDA)', dose: '80 mg bolus IV → 8 mg/h infusão por 72h', via: 'IV' },
        { indicacao: 'Profilaxia por AINE', dose: '20 mg/dia junto com AINE', via: 'VO' },
      ],
      crianca: [
        { indicacao: 'DRGE', dose: '0,7–3,5 mg/kg/dia (máx 20 mg/dia)', via: 'VO' },
      ]
    },
    interacoes: [
      'Clopidogrel (omeprazol ↓ conversão para forma ativa — preferir pantoprazol)',
      'Metotrexato (↑ nível sérico)',
      'Ketoconazol / itraconazol (↓ absorção)',
      'Vitamina B12 (↓ absorção com uso prolongado)',
    ],
    efeitosAdversos: {
      comuns: ['Cefaleia', 'Diarreia', 'Náusea', 'Dor abdominal'],
      graves: ['Nefrite intersticial aguda', 'Hipomagnesemia (uso >1 ano)', 'Fratura de quadril (uso prolongado)', '↑ risco C. difficile'],
    },
    contraindicacoes: ['Hipersensibilidade a benzimidazóis'],
    monitoracao: ['Magnésio sérico se uso prolongado (>1 ano)', 'Vitamina B12 se uso >2 anos'],
    perola: 'IBPs são MUITO prescritos sem indicação formal. Revisar necessidade regularmente. Com clopidogrel: preferir pantoprazol (menos interação com CYP2C19).',
    blackBox: null
  },

  // ── Corticosteroides ─────────────────────────────────────────
  {
    id: 'prednisona',
    nome: 'Prednisona / Prednisolona',
    generico: 'prednisona / prednisolona',
    classe: 'Corticosteroide sistêmico',
    categoria: 'Clínica Médica',
    mecanismo: 'Ligação a receptores intracelulares → ↓ transcrição de citocinas pró-inflamatórias (IL-1, IL-6, TNF-α) e ↑ lipocortina (↓ fosfolipase A2)',
    indicacoes: [
      'Doenças autoimunes (LES, AR, vasculites, miopatias)', 'Asma grave / DPOC exacerbado',
      'Doença de Crohn / RCU (crise)', 'Síndrome nefrótica', 'Alergias graves',
      'Linfoma e leucemia (componente quimioterápico)', 'Insuficiência adrenal aguda',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'Anti-inflamatório/imunossupressor', dose: '0,5–1 mg/kg/dia (máx 60 mg/dia) × 4–6 semanas, com desmame gradual', via: 'VO' },
        { indicacao: 'Asma grave / DPOC exacerbação', dose: '40–60 mg/dia × 5–7 dias (sem necessidade de desmame)', via: 'VO' },
        { indicacao: 'Insuf. adrenal aguda (IV — hidrocortisona)', dose: '100 mg bolus → 200 mg/dia IV contínuo', via: 'IV' },
      ],
      crianca: [
        { indicacao: 'Asma, síndrome nefrótica', dose: '1–2 mg/kg/dia (máx 60 mg/dia)', via: 'VO' },
      ]
    },
    interacoes: [
      'AINEs (↑ risco sangramento gastrointestinal)',
      'Hipoglicemiantes (↑ glicemia — ajustar dose)',
      'Anti-hipertensivos (↑ PA com corticoide)',
      'Vacinas vivas (contraindicadas se imunossupressão significativa)',
    ],
    efeitosAdversos: {
      comuns: ['Hiperglicemia', 'HAS', 'Ganho de peso', 'Insônia', 'Edema', 'Risco de infecção ↑'],
      graves: ['Osteoporose / fratura', 'Miopatia por corticoide', 'Catarata subcapsular posterior', 'Insuficiência adrenal por desmame abrupto', 'Psicose corticoide'],
    },
    contraindicacoes: ['Infecção sistêmica não controlada (relativo)', 'Úlcera péptica ativa (relativo)'],
    monitoracao: ['Glicemia capilar', 'PA', 'Densitometria óssea (uso >3 meses)', 'Suplementar Ca + vitamina D se uso prolongado'],
    perola: 'Desmame obrigatório se uso >2–3 semanas (supressão do eixo HPA). Nunca suspender abruptamente — risco de insuficiência adrenal.',
    blackBox: null
  },
  {
    id: 'dexametasona',
    nome: 'Dexametasona',
    generico: 'dexametasona',
    classe: 'Corticosteroide sintético de alta potência',
    categoria: 'Clínica Médica / Emergência',
    mecanismo: 'Mesmo mecanismo dos corticosteroides — 7× mais potente que prednisolona, mínima atividade mineralocorticoide',
    indicacoes: [
      'Edema cerebral (tumor, abscesso)', 'Meningite bacteriana (adjuvante — ↓ sequelas)',
      'COVID-19 grave (O₂ dependente ou VM)', 'Maturação pulmonar fetal (antenatal)',
      'Laringotraqueobronquite (crupe) — dose única', 'Êmese por quimioterapia',
      'Anafilaxia (adjuvante após adrenalina)', 'Choque séptico refratário a vasopressores',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'Edema cerebral', dose: '10 mg IV bolus → 4 mg 6/6h', via: 'IV' },
        { indicacao: 'Meningite bacteriana', dose: '0,15 mg/kg 6/6h × 4 dias (iniciar ANTES ou com ATB)', via: 'IV' },
        { indicacao: 'COVID-19 grave', dose: '6 mg/dia × 10 dias', via: 'VO ou IV' },
        { indicacao: 'Maturação fetal (via IM)', dose: '12 mg IM 12/12h × 2 doses (24–34 semanas)', via: 'IM' },
        { indicacao: 'Crupe', dose: '0,6 mg/kg dose única (máx 16 mg)', via: 'VO ou IM' },
      ],
      crianca: [
        { indicacao: 'Meningite / crupe', dose: '0,15 mg/kg 6/6h (meningite) ou 0,6 mg/kg dose única (crupe)', via: 'IV ou VO' },
      ]
    },
    interacoes: ['Mesmas das demais corticoesteroides', 'Rifampicina (↓ nível de dexametasona — ↑ dose pode ser necessária)'],
    efeitosAdversos: {
      comuns: ['Hiperglicemia', 'Insônia', 'Hipertensão', 'Euforia/disforia'],
      graves: ['Psicose aguda', 'Necrose avascular de quadril (uso prolongado)', 'Supressão adrenal'],
    },
    contraindicacoes: ['Infecção sistêmica não tratada (relativo)', 'Hipersensibilidade'],
    monitoracao: ['Glicemia', 'PA', 'Sinais de infecção'],
    perola: 'Meningite: iniciar dexametasona ANTES ou junto com o ATB — reduz sequelas auditivas em H. influenzae e Pneumococcus.',
    blackBox: null
  },

  // ── Anticoagulantes ──────────────────────────────────────────
  {
    id: 'enoxaparina',
    nome: 'Enoxaparina (Heparina de Baixo Peso Molecular)',
    generico: 'enoxaparina sódica',
    classe: 'Heparina de Baixo Peso Molecular (HBPM)',
    categoria: 'Cardiologia / Hematologia',
    mecanismo: 'Inibe principalmente fator Xa (e menos fator IIa/trombina) via antitrombina III → bloqueia formação de trombina',
    indicacoes: [
      'Profilaxia de TEV (cirúrgico e clínico)', 'Tratamento de TVP e TEP',
      'SCA (IAM sem supra + angina instável)', 'Anticoagulação em ACTP percutânea',
      'Fibrilação atrial (ponte para varfarina)',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'Profilaxia TEV (risco moderado)', dose: '40 mg SC 1×/dia', via: 'SC' },
        { indicacao: 'Profilaxia (cirurgia ortopédica)', dose: '40 mg SC 12h antes e 40 mg/dia por 10–35 dias', via: 'SC' },
        { indicacao: 'Tratamento TVP/TEP', dose: '1 mg/kg SC 12/12h ou 1,5 mg/kg 1×/dia', via: 'SC' },
        { indicacao: 'SCA (IAM SSST / AI)', dose: '1 mg/kg SC 12/12h × 2–8 dias', via: 'SC' },
      ],
      crianca: [
        { indicacao: 'Tratamento TVP', dose: '<2 meses: 1,5 mg/kg 12/12h; >2 meses: 1 mg/kg 12/12h', via: 'SC' },
      ]
    },
    interacoes: ['AINEs e aspirina (↑ risco de sangramento)', 'Outros anticoagulantes ou trombolíticos'],
    efeitosAdversos: {
      comuns: ['Equimose no local de injeção', 'Hematoma', 'Trombocitopenia leve transitória'],
      graves: ['Sangramento maior', 'Trombocitopenia induzida por heparina (TIH) — menos comum que HNF', 'Osteoporose (uso prolongado)'],
    },
    contraindicacoes: ['Trombocitopenia induzida por heparina prévia', 'Sangramento ativo', 'ClCr <15 mL/min (sem ajuste — preferir HNF)'],
    monitoracao: ['Anti-Xa se obeso (>100 kg), renal, grávida. Meta 0,5–1,0 UI/mL (12/12h) ou 1,0–2,0 UI/mL (1×/dia)', 'Plaquetas a cada 2–3 dias nos primeiros 14 dias', 'Não precisa de TTPa (diferencial da HNF)'],
    perola: 'TIH: queda plaquetas >50% entre D4–D14 → suspender e trocar por argatroban/fondaparinux. Antídoto da heparina: sulfato de protamina (reverte ~60% anti-Xa da enoxaparina).',
    blackBox: null
  },

  // ── Analgésicos / Opioides ───────────────────────────────────
  {
    id: 'morfina',
    nome: 'Morfina',
    generico: 'sulfato de morfina',
    classe: 'Opioide agonista µ',
    categoria: 'Clínica Médica / Emergência',
    mecanismo: 'Agonista dos receptores µ-opioide (e κ, δ) no SNC e periférico → analgesia, sedação, ↓ reflexo da tosse, vasodilatação venosa',
    indicacoes: [
      'Dor aguda grave (pós-operatório, trauma, IAM)', 'Dor crônica oncológica',
      'Edema agudo de pulmão (EAP cardiogênico — ↓ pré-carga e ansiedade)',
      'Dispneia paliativa', 'Cólica biliar/renal (combinado com antiespasmódico)',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'Dor aguda grave (titulação IV)', dose: '2–4 mg IV lento a cada 5–10 min até alívio (máx 10–15 mg)', via: 'IV' },
        { indicacao: 'EAP cardiogênico', dose: '2–4 mg IV lento (uso controverso — considerar benefício)', via: 'IV' },
        { indicacao: 'Dor crônica oncológica', dose: '5–15 mg VO 4/4h (comprimido liberação imediata) ou 30–60 mg 12/12h (liberação prolongada)', via: 'VO' },
      ],
      crianca: [
        { indicacao: 'Dor aguda moderada-grave', dose: '0,05–0,1 mg/kg IV lento a cada 2–4h', via: 'IV' },
      ]
    },
    interacoes: [
      'Benzodiazepínicos (↑ depressão respiratória — combinação letal)', 'Álcool', 'IMAO',
      'Outros depressores do SNC',
    ],
    efeitosAdversos: {
      comuns: ['Constipação (sempre prescrevir laxante junto)', 'Náusea/vômito', 'Sedação', 'Prurido (IV)', 'Retenção urinária'],
      graves: ['Depressão respiratória', 'Apneia', 'Hipotensão', 'Dependência física', 'Síndrome de abstinência'],
    },
    contraindicacoes: ['Depressão respiratória grave', 'Íleo paralítico', 'HIC (morfina no EAP — relativo)'],
    monitoracao: ['FR (manter >12 irpm)', 'SatO₂', 'Nível de sedação (escala de Ramsay)', 'Função renal (acúmulo de morfina-6-glucuronídeo se IR)'],
    perola: 'Naloxona (0,4 mg IV) reverte depressão respiratória. Titular em bolus de 0,04–0,1 mg a cada 2 min para não precipitar dor severa. Sempre prescrevir laxante ao iniciar morfina.',
    blackBox: 'Risco de dependência, abuso e superdosagem. Combinação com benzodiazepínicos aumenta risco de morte.'
  },

  // ── Endócrino ────────────────────────────────────────────────
  {
    id: 'levotiroxina',
    nome: 'Levotiroxina (T4)',
    generico: 'levotiroxina sódica',
    classe: 'Hormônio tireoidiano sintético',
    categoria: 'Endócrino/Metabólico',
    mecanismo: 'Análogo do T4 endógeno — convertido perifericamente em T3 (forma ativa) → regula metabolismo basal, crescimento e desenvolvimento',
    indicacoes: [
      'Hipotireoidismo primário (autoimune, pós-tireoidectomia, pós-iodo)', 'Hipotireoidismo congênito (triagem neonatal)',
      'Coma mixedematoso', 'Tireoidite de Hashimoto sintomática',
      'Supressão de TSH em carcinoma diferenciado de tireoide',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'Hipotireoidismo adulto saudável', dose: '1,6–1,8 µg/kg/dia VO, dose única matinal em jejum', via: 'VO' },
        { indicacao: 'Idoso ou cardiopata', dose: '25–50 µg/dia → ↑ 25 µg a cada 4–6 semanas conforme TSH', via: 'VO' },
        { indicacao: 'Coma mixedematoso', dose: '200–400 µg IV dose única → 1,2–1,6 µg/kg/dia', via: 'IV' },
      ],
      crianca: [
        { indicacao: 'Hipotireoidismo congênito', dose: '10–15 µg/kg/dia (lactentes) → ajustar pela faixa etária', via: 'VO' },
      ]
    },
    interacoes: [
      'Soja, ferro, cálcio, antiácidos (↓ absorção — tomar levotiroxina 2h antes)',
      'Varfarina (↑ INR — ajustar anticoagulante)',
      'Colestiramina / carbonato de cálcio (↓ absorção)',
    ],
    efeitosAdversos: {
      comuns: ['Taquicardia', 'Palpitações', 'Insônia', 'Tremor', 'Diarreia — sinal de sobredosagem'],
      graves: ['FA em idosos (dose excessiva)', 'Aceleração de angina ou IAM em coronariopata', 'Osteoporose em pós-menopausa com TSH suprimido'],
    },
    contraindicacoes: ['Hipertireoidismo não controlado', 'IM agudo recente sem hipotireoidismo prévio comprovado'],
    monitoracao: ['TSH e T4L a cada 6–8 semanas até estabilização, depois anual', 'FC e PA — sintomas de tireotoxicose', 'Densidade óssea se TSH suprimido cronicamente'],
    perola: 'Tomar em JEJUM (30–60 min antes do café) — absorção ↓ 30–40% com alimentos. Ajuste lento em idosos e coronariopatas para evitar angina.',
    blackBox: null
  },
  {
    id: 'metformina',
    nome: 'Metformina',
    generico: 'cloridrato de metformina',
    classe: 'Biguanida',
    categoria: 'Endócrino/Metabólico',
    mecanismo: 'Ativa AMPK → ↓ gliconeogênese hepática (principal) + ↑ sensibilidade à insulina periférica + ↓ absorção intestinal de glicose',
    indicacoes: [
      'DM tipo 2 (primeira linha, independente do peso)', 'Pré-diabetes com alto risco (IMC ≥35 ou história de DG)',
      'Síndrome dos ovários policísticos (off-label)', 'Prevenção de DM tipo 2',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'DM tipo 2 — início', dose: '500 mg 12/12h com refeições → ↑ 500 mg/semana conforme tolerância', via: 'VO' },
        { indicacao: 'Dose máxima eficaz', dose: '2000 mg/dia (2g) — doses >2g têm pouco benefício adicional', via: 'VO' },
        { indicacao: 'Formulação XR (lenta)', dose: '500–2000 mg/dia, 1×/dia ao jantar', via: 'VO' },
      ],
      crianca: [
        { indicacao: 'DM tipo 2 >10 anos', dose: '500 mg 12/12h com refeições, máx 2g/dia', via: 'VO' },
      ]
    },
    interacoes: ['Contraste iodado IV (suspender 48h antes e após — risco de acidose lática se IRA)', 'Álcool (↑ risco acidose lática)', 'Cimetidina (↑ nível de metformina)'],
    efeitosAdversos: {
      comuns: ['Diarreia', 'Náusea', 'Desconforto abdominal (melhora com alimentação e aumento gradual da dose)'],
      graves: ['Acidose lática (raro — mais em IR, IC grave, hepáticos)', 'Deficiência de vitamina B12 (uso prolongado)'],
    },
    contraindicacoes: ['ClCr <30 mL/min (contraindicada) ou 30–45 mL/min (reduzir dose e monitorar)', 'Insuficiência hepática grave', 'Acidose metabólica', 'Contraste IV (suspensão temporária)'],
    monitoracao: ['Creatinina + ClCr anualmente (ou antes de contraste)', 'Vitamina B12 a cada 1–2 anos', 'HbA1c a cada 3 meses até meta, depois 6 meses'],
    perola: 'Metformina NÃO causa hipoglicemia em monoterapia. Suspender antes de cirurgia de grande porte e contrastes iodados. XR tem menos efeitos GI.',
    blackBox: null
  },

  // ── Broncodilatadores ────────────────────────────────────────
  {
    id: 'salbutamol',
    nome: 'Salbutamol (Albuterol)',
    generico: 'sulfato de salbutamol',
    classe: 'β₂-agonista de curta duração (SABA)',
    categoria: 'Pneumologia / Emergência',
    mecanismo: 'Agonista seletivo dos receptores β₂-adrenérgicos → relaxamento do músculo liso brônquico → broncodilatação em minutos',
    indicacoes: [
      'Asma aguda (crise leve a grave)', 'DPOC exacerbação aguda',
      'Broncoespasmo induzido por exercício (profilaxia)', 'Hipercalemia grave (adjuvante — ↓ K+ transitório)',
      'Tocolítico (pré-termo, off-label)',
    ],
    dosagem: {
      adulto: [
        { indicacao: 'Crise de asma — inalatório', dose: '2,5–5 mg nebulização OU 4–8 jatos (100 µg/jato) com espaçador, repetir a cada 20 min × 3', via: 'Inalatório' },
        { indicacao: 'Manutenção (MDI)', dose: '1–2 jatos (100 µg cada) a cada 4–6h conforme necessidade', via: 'Inalatório' },
        { indicacao: 'Hipercalemia', dose: '10–20 mg nebulizado (dose alta) em 15 min', via: 'Inalatório' },
      ],
      crianca: [
        { indicacao: 'Crise de asma', dose: '0,15 mg/kg/dose (mín 2,5 mg) nebulização a cada 20 min × 3', via: 'Inalatório' },
      ]
    },
    interacoes: ['Beta-bloqueadores (antagonismo — evitar; se necessário usar β₁-seletivo)', 'IMAO e antidepressivos tricíclicos (↑ efeitos cardiovasculares)'],
    efeitosAdversos: {
      comuns: ['Tremor fino de extremidades', 'Taquicardia', 'Palpitações', 'Hipocalemia (doses altas)'],
      graves: ['Arritmia (dose excessiva IV)', 'Hipocalemia grave com doses repetidas', 'Paradoxal broncoespasmo (raro)'],
    },
    contraindicacoes: ['Hipersensibilidade a salbutamol', 'Taquiarritmias não controladas (relativo)'],
    monitoracao: ['SpO₂ e ausculta após nebulização', 'Potássio sérico se doses frequentes', 'FC (manter <120 bpm em adultos)'],
    perola: 'Uso >2×/semana fora da profilaxia = asma não controlada → revisar tratamento de manutenção. Técnica inalatória correta = criticamente importante para eficácia.',
    blackBox: null
  },
]
