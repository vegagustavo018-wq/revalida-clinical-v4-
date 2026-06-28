export const FLASHCARDS = [
  // ─── DIAGNÓSTICO ─────────────────────────────────────────────
  {
    id: 'fc001', frente: 'Qual a tríade clínica clássica do IAM?',
    verso: 'Dor torácica em aperto/pressão, irradiando para MSE/mandíbula/dorso, + sudorese + náusea. Dura >20 min, não alivia com nitrato.',
    dica: 'OPQRST: Onset súbito, Piora com esforço, Quality "aperto", Radiates MSE, Severity 8-10/10, Time >20min',
    fraseParaPaciente: 'Vou fazer um ECG agora para verificar seu coração. Fique tranquilo, não dói e é rápido.',
    categoria: 'Diagnóstico', dificuldade: 'Fundamental', especialidade: 'Cardiologia', tags: ['IAM', 'Urgência', 'Revalida']
  },
  {
    id: 'fc002', frente: 'Como diferenciar IAM de Angina Estável?',
    verso: 'IAM: dor >20min, não alivia com nitrato/repouso, troponina sobe. Angina: dor <10min, alivia com nitrato ou repouso, troponina normal.',
    dica: 'Regra: >20 min + troponina = IAM. <10 min + alívio = Angina',
    fraseParaPaciente: 'Vou pedir um exame de sangue para verificar se o coração foi afetado. Pode demorar algumas horas.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Cardiologia', tags: ['IAM', 'Diferencial']
  },
  {
    id: 'fc003', frente: 'Quais são os sinais de AVC segundo o FAST?',
    verso: 'F-Face assimétrica ao sorrir | A-Arms: um braço cai | S-Speech: fala arrastada/confusa/ausente | T-Time: anote a hora e chame SAMU imediatamente.',
    dica: 'FAST = Face, Arms, Speech, Time — qualquer 1 presente = suspeitar de AVC',
    fraseParaPaciente: 'Vou pedir uma tomografia de urgência. É importante agir rápido — pode ser um AVC.',
    categoria: 'Diagnóstico', dificuldade: 'Fundamental', especialidade: 'Neurologia', tags: ['AVC', 'Urgência', 'FAST']
  },
  {
    id: 'fc004', frente: 'Qual a diferença entre AVC isquêmico e hemorrágico?',
    verso: 'Isquêmico (85%): déficit focal súbito, pode ter pródromos. Hemorrágico (15%): cefaleia "trovão", vômito, rigidez nuca, piora rápida. TC diferencia: hiperdensidade = hemorrágico.',
    dica: '"Pior cefaleia da vida" = hemorragia subaracnóide até prova contrária',
    fraseParaPaciente: 'Vou precisar de uma tomografia de urgência para ver se é isquêmico ou hemorrágico — isso define o tratamento.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Neurologia', tags: ['AVC', 'Diferencial']
  },
  {
    id: 'fc005', frente: 'Quais os critérios para diagnóstico de Sepse (Sepsis-3)?',
    verso: 'Suspeita de infecção + disfunção orgânica aguda (SOFA ≥2). Na triagem: qSOFA ≥2 (confusão + FR≥22 + PAS≤100). Choque séptico: lactato >2 mmol/L + vasopressor.',
    dica: 'Sepse = infecção + disfunção de órgão. Não precisa de febre.',
    fraseParaPaciente: 'Você está com uma infecção que afetou seu corpo. Precisamos de tratamento urgente com antibiótico e soro.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Infectologia', tags: ['Sepse', 'Urgência', 'UTI']
  },
  {
    id: 'fc006', frente: 'Como diagnosticar Pré-eclâmpsia?',
    verso: 'PA ≥140/90 após 20 semanas gestacionais + proteinúria ≥300mg/24h OU critérios de gravidade (PA≥160/110, trombocitopenia, creatinina elevada, comprometimento hepático, neurológico, pulmonar).',
    dica: 'Sem proteinúria ainda pode ser PE grave se tiver critérios de gravidade',
    fraseParaPaciente: 'Sua pressão está alta e o bebê precisa ser monitorado. Vou iniciar o tratamento para proteger você e o bebê.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Gineco-Obstetrícia', tags: ['PE', 'GO', 'Urgência']
  },
  {
    id: 'fc007', frente: 'Qual a tríade de Beck no Tamponamento Cardíaco?',
    verso: 'Hipotensão + Turgência jugular + Abafamento de bulhas. Pulsus paradoxus (queda de PA >10mmHg na inspiração). ECG: alternância elétrica.',
    dica: 'Beck: Baixa PA + Jugular ingurgitada + Bulhas abafadas — "HJB"',
    fraseParaPaciente: 'Preciso fazer um procedimento para tirar o líquido ao redor do coração. É urgente mas rápido.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Cardiologia', tags: ['Tamponamento', 'Urgência', 'ECG']
  },
  {
    id: 'fc008', frente: 'Como suspeitar de Gravidez Ectópica?',
    verso: 'Tríade: amenorreia + dor abdominal (unilateral, em cólica ou difusa se rota) + sangramento vaginal leve. β-hCG positivo. Ultrassom: sem saco gestacional intrauterino. Urgência cirúrgica se rota.',
    dica: 'Toda mulher em idade fértil com dor abdominal: β-hCG antes de qualquer conduta',
    fraseParaPaciente: 'Você está grávida, mas a gravidez não está no lugar certo. Precisamos agir rapidamente.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Gineco-Obstetrícia', tags: ['GO', 'Urgência', 'Ectópica']
  },
  {
    id: 'fc009', frente: 'O que é o Sinal de Blumberg?',
    verso: 'Dor à descompressão brusca do abdome — indica peritonite/irritação peritoneal. Sinal de Rovsing: dor em FID ao comprimir FIE = apendicite. McBurney: ponto de dor máxima em apendicite.',
    dica: 'Blumberg = peritonite | McBurney = apendicite | Rovsing = apendicite (contralateral)',
    fraseParaPaciente: 'Vou apalpaar sua barriga suavemente. Me avise se sentir dor.',
    categoria: 'Diagnóstico', dificuldade: 'Fundamental', especialidade: 'Cirurgia Geral', tags: ['Abdome', 'Peritonite']
  },
  {
    id: 'fc010', frente: 'Quais os critérios de diagnóstico de DM tipo 2?',
    verso: '1) Glicemia em jejum ≥126 mg/dL (em 2 ocasiões) | 2) Glicemia 2h após TOTG ≥200 mg/dL | 3) HbA1c ≥6,5% | 4) Glicemia ≥200 + sintomas (poliúria, polidipsia, perda de peso).',
    dica: 'Um critério com sintomas = diagnóstico. Sem sintomas: confirmar em 2 ocasiões.',
    fraseParaPaciente: 'Seus exames mostram que você tem diabetes. Isso é tratável e você pode ter uma vida normal com controle.',
    categoria: 'Diagnóstico', dificuldade: 'Fundamental', especialidade: 'Endócrino', tags: ['DM', 'Diagnóstico']
  },
  // ─── TRATAMENTO ──────────────────────────────────────────────
  {
    id: 'fc011', frente: 'Qual o tratamento imediato do IAM com STEMI?',
    verso: 'MONA-H: Morfina (dor severa), O2 (SatO2<94%), Nitrato (dor isquêmica), AAS 300mg mastigado, Heparina + Clopidogrel 600mg. Meta: ICP <90min (door-to-balloon). Alteplase se ICP impossível.',
    dica: 'MONA-H + ICP em 90 min. Não atrasar por aguardar exames.',
    fraseParaPaciente: 'Você teve um infarto. Vamos agir rápido: vou dar um remédio agora e você vai precisar de um cateterismo urgente.',
    categoria: 'Tratamento', dificuldade: 'Avançado', especialidade: 'Cardiologia', tags: ['IAM', 'ICP', 'Emergência']
  },
  {
    id: 'fc012', frente: 'Qual o tratamento do AVC isquêmico com tPA (alteplase)?',
    verso: 'Alteplase 0,9 mg/kg IV (máx 90mg) — 10% em bolus, 90% em 60min. Indicado se: <4,5h do início + NIHSS + sem contraindicação. Contraindica: PA>185/110, AVC hemorrágico prévio, cirurgia recente, anticoagulação.',
    dica: 'Janela 4,5h do INÍCIO, não da chegada. Controlar PA antes de infundir.',
    fraseParaPaciente: 'Vou dar um medicamento que dissolve o coágulo. Há um pequeno risco de sangramento, mas o benefício é maior.',
    categoria: 'Tratamento', dificuldade: 'Avançado', especialidade: 'Neurologia', tags: ['AVC', 'tPA', 'Urgência']
  },
  {
    id: 'fc013', frente: 'Como tratar Sepse segundo o "bundle de 1 hora"?',
    verso: '1h: Hemoculturas (x2, antes ATB) | Lactato | ATB de amplo espectro IV | 30mL/kg SF se hipotensão ou lactato>4 | Vasopressor se hipotensão após fluido (noradrenalina). Medir lactato 2h depois.',
    dica: '"1h bundle": Culturas, Lactato, ATB, Fluido, Vasopressor. Tudo em 1 hora.',
    fraseParaPaciente: 'Você tem uma infecção grave. Vamos iniciar antibiótico agora e você precisará ficar internado para monitorização.',
    categoria: 'Tratamento', dificuldade: 'Avançado', especialidade: 'UTI / Infectologia', tags: ['Sepse', 'Bundle', 'UTI']
  },
  {
    id: 'fc014', frente: 'Qual a dose de adrenalina na anafilaxia?',
    verso: '0,3–0,5 mg IM na face ântero-lateral da coxa. Em criança: 0,01 mg/kg IM (máx 0,5mg). Pode repetir a cada 5–15 min. NUNCA atrasar por dar anti-histamínico ou corticoide primeiro.',
    dica: 'Adrenalina IM é sempre o PRIMEIRO passo na anafilaxia',
    fraseParaPaciente: 'Você está tendo uma reação grave. Vou aplicar uma injeção agora no músculo da coxa — vai ser rápido.',
    categoria: 'Tratamento', dificuldade: 'Fundamental', especialidade: 'Emergência', tags: ['Anafilaxia', 'Adrenalina', 'Urgência']
  },
  {
    id: 'fc015', frente: 'Qual o protocolo de RCP em adulto (ACLS 2020)?',
    verso: 'C-A-B: Compressões (30:2, 100-120/min, 5-6cm) → Via aérea (head-tilt/chin-lift) → Breathing (ventilação). DEA assim que disponível. Adrenalina 1mg IV a cada 3-5 min. Amiodarona 300mg IV em FV/TV refratária.',
    dica: 'Prioridade: compressões de QUALIDADE, minimizar interrupções, DEA rápido',
    fraseParaPaciente: '(Para familiar) Estamos fazendo tudo que é possível. Vou te atualizar a cada momento.',
    categoria: 'Tratamento', dificuldade: 'Fundamental', especialidade: 'Emergência', tags: ['PCR', 'RCP', 'ACLS']
  },
  {
    id: 'fc016', frente: 'Como tratar a DKA (Cetoacidose Diabética)?',
    verso: 'F-I-K-B: Fluido (SF 0,9% 1L/h × 2h, depois conforme glicemia/débito), Insulina (0,1 UI/kg/h IV após K≥3,5), Potássio (repor K se <5,5 — DKA depleta K), Bicarbonato (se pH<6,9). Meta: fechar ânion gap.',
    dica: 'NÃO iniciar insulina se K<3,5 — risco de arritmia fatal.',
    fraseParaPaciente: 'Seu diabetes descompensou. Vamos corrigir com soro e insulina. Você ficará internado até estabilizar.',
    categoria: 'Tratamento', dificuldade: 'Avançado', especialidade: 'Endócrino', tags: ['DKA', 'DM', 'UTI']
  },
  {
    id: 'fc017', frente: 'Qual a conduta na Crise Hipertensiva?',
    verso: 'Urgência (sem lesão de órgão-alvo): reduzir PA em 24-48h com VO (captopril 25mg SL, anlodipino, losartana). Emergência (com LOA): reduzir 25% em 1h com IV (nitroprussiato, labetalol). NUNCA reduzir >25% em 1h.',
    dica: 'Emergência hipertensiva = PA alta + lesão de órgão. Reduzir lentamente!',
    fraseParaPaciente: 'Sua pressão está muito alta. Vou dar um remédio para baixar devagar — baixar rápido demais pode ser perigoso.',
    categoria: 'Tratamento', dificuldade: 'Intermediário', especialidade: 'Cardiologia', tags: ['Hipertensão', 'Urgência']
  },
  {
    id: 'fc018', frente: 'Qual o manejo da Pré-eclâmpsia Grave?',
    verso: 'MgSO4 4-6g IV (ataque) + 1-2g/h (manutenção) — PROFILAXIA de eclâmpsia. Antihipertensivo se PA≥160/110: hidralazina 5mg IV ou nifedipino 10mg SL. Definição da conduta obstétrica: via de parto. Sulfato não trata PA.',
    dica: 'MgSO4 = anticonvulsivante (não anti-hipertensivo). Tratar PA separadamente.',
    fraseParaPaciente: 'Sua pressão está perigosamente alta. Vou iniciar dois medicamentos: um para pressão e um para prevenir convulsões.',
    categoria: 'Tratamento', dificuldade: 'Avançado', especialidade: 'Gineco-Obstetrícia', tags: ['PE', 'MgSO4', 'Eclâmpsia']
  },
  // ─── FARMACOLOGIA ────────────────────────────────────────────
  {
    id: 'fc019', frente: 'Qual a dose de MgSO4 na Eclâmpsia?',
    verso: 'Ataque: 4–6g IV diluído em 250mL SF em 20 min. Manutenção: 1–2g/h IV contínuo. Monitorar: reflexo patelar (manter presente), FR>12, diurese>25mL/h. Antídoto: Gluconato de Cálcio 1g IV.',
    dica: 'Sem reflexo patelar = dose tóxica — reduzir ou suspender. Ca gluconato à beira do leito.',
    fraseParaPaciente: 'Vou aplicar um medicamento para prevenir convulsões. Você pode sentir calor e rubor — é normal.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Gineco-Obstetrícia', tags: ['MgSO4', 'Eclâmpsia']
  },
  {
    id: 'fc020', frente: 'Quais são as contraindicações ao Beta-bloqueador?',
    verso: 'Absolutas: asma grave, BAV 2º/3º grau, bradicardia <50bpm, choque cardiogênico. Relativas: DPOC moderado, DM lábil (mascara hipoglicemia), doença vascular periférica grave.',
    dica: 'Lembre: BAD — Bradicardia, Asma, BAV + choque. Relativo: DPOC, DM',
    fraseParaPaciente: 'Esse medicamento não é recomendado para você por causa da sua doença no pulmão. Vou prescrever uma alternativa.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Cardiologia', tags: ['Beta-bloqueador', 'Contraindicação']
  },
  {
    id: 'fc021', frente: 'Quais medicamentos são contraindicados na gravidez?',
    verso: 'GRAVES: IECA/BRA (malformação renal fetal), Varfarina (embriopatia), Metformina (1º tri — controverso), Tetraciclinas (dentes/ossos), Fluoroquinolonas, AAS dose alta. PERMITIDOS: paracetamol, penicilinas, cefalosporinas, heparina.',
    dica: 'Na dúvida: paracetamol + penicilina é seguro. AINEs evitar a partir 28 semanas.',
    fraseParaPaciente: 'Como você está grávida, vou escolher medicamentos seguros para o bebê. Tem opções excelentes disponíveis.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Gineco-Obstetrícia', tags: ['Gravidez', 'Medicamento', 'Contraindicação']
  },
  {
    id: 'fc022', frente: 'Qual o antídoto de cada intoxicação?',
    verso: 'Opioide → Naloxona 0,4-2mg IV | BZD → Flumazenil 0,2mg IV | AAS → Bicarbonato + alcalinização | Paracetamol → N-Acetilcisteína | Organofosforado → Atropina + Pralidoxima | Warfarina → Vit K + Plasma | Heparina → Sulfato de protamina',
    dica: 'Lembrar: Naloxona (opioides), Flumazenil (BZD), Atropina (organofosforado)',
    fraseParaPaciente: 'Você tomou uma substância que pode ser perigosa. Vou dar um medicamento que reverte o efeito.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Emergência', tags: ['Antídoto', 'Intoxicação', 'Emergência']
  },
  // ─── COMUNICAÇÃO ─────────────────────────────────────────────
  {
    id: 'fc023', frente: 'Como comunicar um diagnóstico grave ao paciente?',
    verso: '1. Verificar o que já sabe | 2. Perguntar o quanto quer saber | 3. Dar informação em pequenas doses | 4. Usar linguagem simples | 5. Deixar silêncio após a notícia | 6. Validar sentimentos | 7. Planejar próximos passos juntos.',
    dica: 'Protocolo SPIKES: Setup, Perception, Invitation, Knowledge, Empathy, Strategy',
    fraseParaPaciente: '"Infelizmente, os exames mostram algo preocupante. Antes de te contar, você quer saber tudo ou prefere que eu fale com um familiar junto?"',
    categoria: 'Comunicação', dificuldade: 'Avançado', especialidade: 'Geral', tags: ['Comunicação', 'Diagnóstico Grave']
  },
  {
    id: 'fc024', frente: 'Como lidar com paciente que recusa o tratamento?',
    verso: '1. Explorar o motivo da recusa (medo, crença, falta de informação) | 2. Dar informação clara sobre riscos e benefícios | 3. Respeitar autonomia se paciente capaz | 4. Documentar a recusa com testemunha | 5. Manter vínculo e abertura para retorno.',
    dica: 'Autonomia do paciente capaz deve ser respeitada — mesmo que discorde',
    fraseParaPaciente: '"Entendo sua decisão. Posso te explicar o que pode acontecer sem o tratamento para você tomar uma decisão consciente?"',
    categoria: 'Comunicação', dificuldade: 'Intermediário', especialidade: 'Geral', tags: ['Comunicação', 'Ética', 'Autonomia']
  },
  {
    id: 'fc025', frente: 'Como iniciar uma consulta no Revalida?',
    verso: 'SEMPRE: 1. Higienizar as mãos | 2. Apresentar-se pelo nome e função | 3. Confirmar nome do paciente | 4. Perguntar como prefere ser chamado | 5. Fazer pergunta aberta: "O que te traz aqui hoje?"',
    dica: 'Os avaliadores pontuam: higiene das mãos + apresentação logo nos primeiros 30 segundos',
    fraseParaPaciente: '"Bom dia! Meu nome é Dr(a). [Nome]. Como posso te chamar? O que te trouxe aqui hoje?"',
    categoria: 'Comunicação', dificuldade: 'Fundamental', especialidade: 'Geral', tags: ['Comunicação', 'Revalida', 'Consulta']
  },
  // ─── EXAMES ──────────────────────────────────────────────────
  {
    id: 'fc026', frente: 'Como ler um ECG de forma sistemática?',
    verso: 'RATE-RHYTHM-AXIS-INTERVALS-MORPHOLOGY: 1.FC (300/nº quadrados) | 2.Ritmo (P antes de QRS?) | 3.Eixo (I e aVF) | 4.Intervalos (PR 0,12-0,20s, QRS <0,12s, QT) | 5.Morfologia (ST, ondas T, R, Q patológica).',
    dica: 'Eixo: I+ e aVF+ = normal; I+ e aVF− = desvio esquerdo; I− e aVF+ = desvio direito',
    fraseParaPaciente: '"Vou interpretar seu ECG agora. Fique tranquilo, é um exame simples que não dói."',
    categoria: 'Exames', dificuldade: 'Intermediário', especialidade: 'Cardiologia', tags: ['ECG', 'Cardiologia']
  },
  {
    id: 'fc027', frente: 'Quais os achados de ECG no IAM com STEMI?',
    verso: 'Fase aguda: Supra de ST ≥1mm em ≥2 derivações contíguas OU BRE novo. Evolução: Q patológica, onda T invertida. Localização: II, III, aVF = inferior (CD); V1-V4 = anterior (DA); I, aVL = lateral alta (CX). ECG normal não exclui IAM (até 10%!).',
    dica: 'Supra ST + dor torácica = STEMI. ECG normal não exclui — troponina!',
    fraseParaPaciente: '"Seu ECG mostra um infarto. Vou chamar a equipe de cardiologia imediatamente."',
    categoria: 'Exames', dificuldade: 'Intermediário', especialidade: 'Cardiologia', tags: ['ECG', 'IAM', 'STEMI']
  },
  {
    id: 'fc028', frente: 'O que mostrar na gasometria arterial com acidose metabólica?',
    verso: 'pH <7,35 + HCO3 <22 = acidose metabólica. Compensação respiratória: PaCO2 = 1,5×HCO3 + 8 ± 2 (Winter). Se PaCO2 menor = alcalose respiratória associada. Calcular Anion Gap para diferencial.',
    dica: 'Fórmula de Winter: PaCO2 esperada = 1,5×HCO3 + 8. Desvio = distúrbio misto.',
    fraseParaPaciente: '"Seu sangue está mais ácido que o normal. Vamos tratar a causa e corrigir isso."',
    categoria: 'Exames', dificuldade: 'Avançado', especialidade: 'Geral', tags: ['Gasometria', 'Acidose']
  },
  {
    id: 'fc029', frente: 'Como avaliar uma radiografia de tórax?',
    verso: 'ABCDE: A-Aéreo (campos pulmonares, derrame, pneumotórax) | B-Bony (costelas, clavícula, coluna) | C-Cardiac (IC <50%, calcificações) | D-Diaphragm (ângulos costofrênicos livres?) | E-Everything else (mediastino, cateteres).',
    dica: 'Silhueta cardíaca >50% = cardiomegalia. Apagamento costofrénico = derrame',
    fraseParaPaciente: '"Vou olhar a radiografia do seu pulmão agora."',
    categoria: 'Exames', dificuldade: 'Intermediário', especialidade: 'Geral', tags: ['RX', 'Radiografia', 'Pulmonar']
  },
  {
    id: 'fc030', frente: 'Quando indicar TC de crânio sem contraste de urgência?',
    verso: 'AVC suspeito (antes do tPA) | TCE moderado/grave (GCS <13) | Cefaleia em trovão | Suspeita de hemorragia subaracnóide | Status epiléptico sem causa conhecida | Alteração de consciência sem causa definida.',
    dica: '"Pior cefaleia da vida" = TC imediata mesmo com exame neurológico normal',
    fraseParaPaciente: '"Vou pedir uma tomografia de cabeça urgente para ver o que está acontecendo."',
    categoria: 'Exames', dificuldade: 'Fundamental', especialidade: 'Neurologia', tags: ['TC', 'AVC', 'TCE', 'Urgência']
  },

  // ─── EXAMES POR SINTOMA ──────────────────────────────────────
  {
    id: 'fc031', frente: 'Quais exames pedir para DOR TORÁCICA na emergência?',
    verso: 'ECG em 10 min (obrigatório) | Troponina I/T seriada (0h e 3h) | RX tórax | D-dímero (se suspeita TEP) | BNP (se IC) | Ecocardiograma (se tamponamento ou dissecção) | US à beira-leito (FAST).',
    dica: 'ECG nos primeiros 10 minutos é o principal protocolo de dor torácica. Nunca atrasar.',
    fraseParaPaciente: 'Vou fazer um eletrocardiograma agora e colher sangue para entender melhor sua dor.',
    categoria: 'Exames por Sintoma', dificuldade: 'Fundamental', especialidade: 'Cardiologia', tags: ['Dor Torácica', 'ECG', 'Troponina']
  },
  {
    id: 'fc032', frente: 'Quais exames pedir para DISPNEIA AGUDA?',
    verso: 'SpO2 + gasometria arterial | RX tórax | ECG | BNP/NT-proBNP (IC?) | D-dímero (TEP?) | Troponina | Hemograma (anemia?) | US torácico (derrame, pneumotórax) | Angiotomografia (se TEP provável).',
    dica: 'BNP >500: IC. D-dímero negativo: exclui TEP se probabilidade pré-teste baixa.',
    fraseParaPaciente: 'Vou pedir alguns exames para entender por que você está com falta de ar.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Pneumologia', tags: ['Dispneia', 'BNP', 'D-dímero']
  },
  {
    id: 'fc033', frente: 'Quais exames pedir para DOR ABDOMINAL AGUDA?',
    verso: 'Hemograma + PCR | Amilase/Lipase (pancreatite) | TGO/TGP + bilirrubinas (hepato-biliar) | β-hCG (mulher em idade fértil — SEMPRE) | Ureia/Cr | EAS + urocultura | RX abdome | US abdominal | TC se dúvida diagnóstica.',
    dica: 'β-hCG em TODA mulher em idade fértil com dor abdominal — antes de qualquer conduta.',
    fraseParaPaciente: 'Vou pedir exames de sangue e uma ecografia do abdômen para investigar sua dor.',
    categoria: 'Exames por Sintoma', dificuldade: 'Fundamental', especialidade: 'Cirurgia Geral', tags: ['Abdome Agudo', 'hCG', 'Lipase']
  },
  {
    id: 'fc034', frente: 'Quais exames pedir para FEBRE + CEFALEIA (suspeita de meningite)?',
    verso: 'TC crânio ANTES da punção (se: rebaixamento, papiledema, deficit focal, convulsão, imunossuprimido) | Punção Lombar: celularidade, glicose, proteína, Gram, cultura | Hemograma | Hemocultura x2 | PCR | Sódio.',
    dica: 'Não atrasar ATB para aguardar TC ou PL — colher hemocultura e iniciar ATB se grave.',
    fraseParaPaciente: 'Vou precisar fazer uma punção lombar para analisar o líquido ao redor do cérebro.',
    categoria: 'Exames por Sintoma', dificuldade: 'Avançado', especialidade: 'Neurologia / Infectologia', tags: ['Meningite', 'Punção Lombar', 'TC']
  },
  {
    id: 'fc035', frente: 'Quais exames pedir para ANEMIA?',
    verso: 'Hemograma completo com VCM | Reticulócitos | Ferro sérico + Ferritina + TIBC | Vitamina B12 + Ácido fólico | LDH + Bilirrubina indireta (hemólise?) | Esfregaço de sangue periférico | Pesquisa de sangue oculto nas fezes.',
    dica: 'VCM guia: Microcítica=ferro; Normocítica=doença crônica/hemólise; Macrocítica=B12/folato.',
    fraseParaPaciente: 'Vou pedir exames de sangue para entender por que você está anêmico.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Hematologia', tags: ['Anemia', 'VCM', 'Ferritina']
  },
  {
    id: 'fc036', frente: 'Quais exames pedir para ALTERAÇÃO DE CONSCIÊNCIA aguda?',
    verso: 'Glicemia capilar imediata (sempre!) | Gasometria | Eletrólitos (Na, K, Ca, Mg) | Ureia/Cr | Hemograma | TGO/TGP/Amônia | Toxicológico | TC crânio | EEG (se convulsão subclínica?) | Hemoculturas (se febre).',
    dica: 'Glicemia capilar: PRIMEIRO exame sempre — hipoglicemia é causa tratável e imediata.',
    fraseParaPaciente: '(Para familiar) Vamos investigar o motivo da alteração de consciência com exames urgentes.',
    categoria: 'Exames por Sintoma', dificuldade: 'Avançado', especialidade: 'Neurologia', tags: ['Consciência', 'Glicemia', 'TC']
  },
  {
    id: 'fc037', frente: 'Quais exames pedir para ICTERÍCIA?',
    verso: 'Bilirrubinas (direta e indireta) | TGO/TGP/FA/GGT | Hemograma + reticulócitos | Tempo de protrombina | Sorologias virais (HBsAg, anti-HCV, anti-HAV IgM) | US abdominal (cálculos, dilatação biliar) | CPRM ou CRE se obstrução.',
    dica: 'BT com BD dominante = colestática (obstrução ou hepatopatia). BI dominante = hemólise.',
    fraseParaPaciente: 'Vou investigar a origem da icterícia com exames de sangue e uma ecografia.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Gastroenterologia', tags: ['Icterícia', 'Bilirrubina', 'Hepatite']
  },
  {
    id: 'fc038', frente: 'Quais exames pedir para HEMATÚRIA?',
    verso: 'EAS com urinálise | Urocultura (infecção?) | Citologia oncótica urinária (neoplasia?) | Ureia/Cr | Proteinúria 24h | USG renal/vias urinárias | Urotomografia (neoplasia/cálculo) | Cistoscopia se hematúria macroscópica em adulto >40 anos.',
    dica: 'Hematúria macroscópica sem dor em >40 anos = neoplasia de bexiga até prova contrária.',
    fraseParaPaciente: 'Vou investigar a origem do sangue na urina com exames e imagem.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Urologia / Nefrologia', tags: ['Hematúria', 'Cistoscopia', 'Neoplasia']
  },
  {
    id: 'fc039', frente: 'Quais exames pedir para SÍNCOPE?',
    verso: 'ECG (obrigatório — arritmia, QT longo, Brugada, SVES) | Glicemia capilar | Hemograma (anemia) | Ortostase: PA deitada e em pé | Holter 24h (se ECG normal e suspeita arrítmica) | Ecocardiograma (cardiopatia estrutural?) | Tilt-test (síncope vasovagal).',
    dica: 'Síncope em cardiopata = pior prognóstico. ECG e eco são obrigatórios.',
    fraseParaPaciente: 'O desmaio pode ter várias causas. Vou fazer um eletrocardiograma e outros exames para identificar.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Cardiologia', tags: ['Síncope', 'ECG', 'Holter']
  },
  {
    id: 'fc040', frente: 'Quais exames pedir para EDEMA BILATERAL de MMII?',
    verso: 'BNP/NT-proBNP (IC) | Albumina sérica (síndrome nefrótica/cirrose) | Cr + proteinúria (renal) | TSH (hipotireoidismo) | TGO/TGP (hepatopatia) | Hemograma | RX tórax | Ecocardiograma | US Doppler MMII (TVP bilateral rara, mas possível).',
    dica: 'Edema bilateral: causas sistêmicas (IC, renal, hepático, endócrino). TVP causa edema UNIlateral.',
    fraseParaPaciente: 'Vou investigar o inchaço com exames de coração, rim e outros órgãos.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Clínica Médica', tags: ['Edema', 'IC', 'BNP']
  },
  {
    id: 'fc041', frente: 'Quais exames pedir para HEMORRAGIA DIGESTIVA ALTA?',
    verso: 'Hemograma (Hb, Ht, plaquetas) | Coagulograma (TP/TTPA) | Tipagem e reserva de sangue | Ureia/Cr (ureia sobe na HDA por digestão do sangue) | EDA (endoscopia diagnóstica e terapêutica) urgente <24h | ECG | Hemoculturas se cirrótico.',
    dica: 'Ureia/Cr >25: sugere HDA (sangue digerido = ureia sobe). Relação ureia/Cr >25.',
    fraseParaPaciente: 'Vou pedir exames urgentes e uma endoscopia para ver de onde vem o sangramento.',
    categoria: 'Exames por Sintoma', dificuldade: 'Avançado', especialidade: 'Gastroenterologia', tags: ['HDA', 'Endoscopia', 'Ureia']
  },
  {
    id: 'fc042', frente: 'Quais exames pedir na investigação de TROMBOSE VENOSA PROFUNDA?',
    verso: 'D-dímero (alta sensibilidade, baixa especificidade — negativo exclui se prob. baixa) | US Doppler venoso MMII (padrão-ouro) | Coagulograma | Hemograma | Se TVP confirmada: pesquisa de trombofilia (proteína C/S, antitrombina, fator V Leiden) — após tratamento.',
    dica: 'D-dímero negativo + Wells <2 = excluída TVP sem necessidade de US.',
    fraseParaPaciente: 'Vou pedir um exame de sangue e um ultrassom com doppler da perna para ver se tem coágulo.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Angiologia / Hematologia', tags: ['TVP', 'D-dímero', 'Doppler']
  },
  {
    id: 'fc043', frente: 'Quais exames pedir para LOMBALGIA COM SINAIS DE ALERTA?',
    verso: 'Sinais de alerta (bandeiras vermelhas): febre, perda de peso, trauma, neoplasia prévia, déficit neurológico, imunossupressão, >50 anos. Solicitar: Hemograma + PCR + VHS | RX coluna | RNM (padrão-ouro para medula e raízes) | Cintilografia se neoplasia.',
    dica: 'Lombalgia simples <6 sem: não precisa exame. Bandeira vermelha: RNM urgente.',
    fraseParaPaciente: 'Vou pedir exames de imagem para avaliar melhor sua dor nas costas.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Ortopedia / Reumatologia', tags: ['Lombalgia', 'Bandeira Vermelha', 'RNM']
  },
  {
    id: 'fc044', frente: 'Quais exames pedir para SANGRAMENTO GENITAL ANORMAL?',
    verso: 'β-hCG (excluir gravidez/ectópica — SEMPRE) | Hemograma | Coagulograma | US transvaginal | Colpocitologia oncótica (se atraso) | Histeroscopia (pólipo, mioma submucoso) | TSH (hipotireoidismo causa sangramento) | Prolactina.',
    dica: 'β-hCG antes de qualquer exame de imagem ou conduta em sangramento genital.',
    fraseParaPaciente: 'Vou pedir exames para entender a causa do sangramento.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Ginecologia', tags: ['Sangramento', 'hCG', 'US Transvaginal']
  },
  {
    id: 'fc045', frente: 'Quais exames pedir para CHOQUE / HIPOTENSÃO AGUDA?',
    verso: 'Lactato arterial (>2mmol/L = hipoperfusão) | Gasometria | Hemograma | Coagulograma | Troponina + BNP | Culturas (hemoculturas x2 antes ATB) | ECG | US à beira-leito (FAST — pericárdio, IVC, contratividade) | Ureia/Cr | Eletrólitos.',
    dica: 'Lactato >4 = choque grave. US à beira-leito diferencia: hipovolêmico vs distributivo vs cardiogênico.',
    fraseParaPaciente: '(Para familiar) Estamos investigando com urgência a causa da queda de pressão.',
    categoria: 'Exames por Sintoma', dificuldade: 'Avançado', especialidade: 'Emergência / UTI', tags: ['Choque', 'Lactato', 'FAST']
  },
  {
    id: 'fc046', frente: 'Quais exames pedir para CEFALEIA NOVA E INTENSA (≥8/10)?',
    verso: 'TC crânio sem contraste URGENTE (hemorragia subaracnóide, TCE, tumor) | Se TC normal + suspeita de HSA: punção lombar (xantocromia) | Hemograma + PCR (meningite?) | PA aferida (hipertensiva?) | Fundoscopia (papiledema = HIC?).',
    dica: '"Pior cefaleia da vida" = HSA até prova contrária. TC normal não exclui — PL obrigatória.',
    fraseParaPaciente: 'Vou pedir uma tomografia urgente da cabeça para ver se há algum sangramento.',
    categoria: 'Exames por Sintoma', dificuldade: 'Avançado', especialidade: 'Neurologia', tags: ['Cefaleia', 'HSA', 'TC', 'PL']
  },
  {
    id: 'fc047', frente: 'Quais exames solicitar no PRÉ-OPERATÓRIO de cirurgia eletiva de médio porte?',
    verso: 'Hemograma | Coagulograma (TP/TTPA) | Glicemia | Ureia/Cr | Eletrólitos | ECG (homens >40a ou mulheres >50a) | RX tórax (>50a ou cardiopata/pneumopata) | Tipagem sanguínea. Não solicitar de forma indiscriminada.',
    dica: 'Exames pré-op: apenas os indicados pela idade, comorbidades e porte da cirurgia.',
    fraseParaPaciente: 'Antes da cirurgia, vou pedir alguns exames de rotina para garantir que você está apto para o procedimento.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Cirurgia Geral', tags: ['Pré-operatório', 'Rotina', 'Cirurgia']
  },
  {
    id: 'fc048', frente: 'Quais exames pedir para FEBRE EM GESTANTE?',
    verso: 'Hemograma + PCR | EAS + urocultura (ITU é a causa mais comum) | Hemocultura se febril ≥38,5 | Swab vaginal (GBS) | NS1 + sorologia dengue (epidemia) | Toxoplasmose IgM | US obstétrico (bem-estar fetal) | Avaliação de BCF.',
    dica: 'ITU em gestante = tratar sempre (mesmo assintomática). Nitrofurantoína: evitar no 3º trimestre.',
    fraseParaPaciente: 'A febre na gravidez precisa de investigação rápida. Vou pedir exames para proteger você e o bebê.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Gineco-Obstetrícia', tags: ['Febre', 'Gestação', 'ITU']
  },
  {
    id: 'fc049', frente: 'Quais exames pedir para investigação de SÍFILIS?',
    verso: 'Triagem: VDRL ou RPR (teste não-treponêmico) | Confirmatório: FTA-ABS ou TPHA (treponêmico) | Se positivo: VDRL quantitativo para seguimento | Teste rápido na atenção básica (combinado HIV+sífilis) | LCR se sífilis terciária/neurossífilis suspeita.',
    dica: 'VDRL quantitativo: monitorar resposta ao tratamento. Queda de 4x = cura. Subida = reinfecção.',
    fraseParaPaciente: 'Vou pedir um exame de sangue para ver se é sífilis. O tratamento é simples e eficaz.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Infectologia / DST', tags: ['Sífilis', 'VDRL', 'FTA-ABS']
  },
  {
    id: 'fc050', frente: 'Quais exames pedir para dor em FLANCO / CÓLICA RENAL?',
    verso: 'EAS (hematúria microscópica em 85%) | Ureia/Cr | Urografia tomográfica sem contraste (padrão-ouro para cálculos) | US renal (1ª linha em grávidas e crianças) | Urocultura | Eletrólitos | Paratormônio se hipercalcemia.',
    dica: 'Hematúria + dor em flanco + náuseas = cólica renal. Urografia TC é melhor que US.',
    fraseParaPaciente: 'A dor que você sente parece ser do rim. Vou pedir exames e uma tomografia para confirmar.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Urologia / Nefrologia', tags: ['Cólica Renal', 'Urografia', 'Cálculo']
  },

  // ─── CONDUTA POR SITUAÇÃO ────────────────────────────────────
  {
    id: 'fc051', frente: 'Conduta no PNEUMOTÓRAX HIPERTENSIVO?',
    verso: 'EMERGÊNCIA: não esperar RX. Sinais: dispneia + desvio de traqueia + ausência de MV + hipotensão + turgência jugular. Conduta: descompressão imediata com agulha calibrosa no 2º EIC linha hemiclavicular. Depois: dreno torácico no 5º EIC linha axilar anterior.',
    dica: 'Pneumotórax hipertensivo: tratar CLINICAMENTE sem esperar RX. É diagnóstico clínico.',
    fraseParaPaciente: 'Você tem ar comprimindo seu coração. Preciso fazer um procedimento agora mesmo.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Emergência / Pneumologia', tags: ['Pneumotórax', 'Emergência', 'ATLS']
  },
  {
    id: 'fc052', frente: 'Conduta no EDEMA AGUDO DE PULMÃO (EAP)?',
    verso: 'Posição sentada + O2 alto fluxo/VNI | Furosemida 40-80mg IV (diurético) | Nitrato IV ou SL (vasodilatação) | Morfina 2-4mg IV (ansiedade + vasodilatação — controverso) | Tratar causa: IAM (ICP), FA (controle de ritmo/frequência), HAS (nitroprussiato).',
    dica: 'VNI (CPAP) reduz IOT em EAP de IC. Usar precocemente se SpO2 <90%.',
    fraseParaPaciente: 'Seus pulmões estão cheios de líquido do coração. Vou dar medicamentos urgentes.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Cardiologia / Emergência', tags: ['EAP', 'IC', 'VNI']
  },
  {
    id: 'fc053', frente: 'Conduta no ESTADO DE MAL EPILÉPTICO (EME)?',
    verso: '0-5min: ABC + glicemia + O2 | 5-20min: Diazepam 10mg IV (ou Lorazepam 4mg) — pode repetir 1x | 20-40min: Fenitoína 20mg/kg IV ou Ácido Valpróico 40mg/kg IV | >40min: Fenobarbital 20mg/kg IV ou Propofol/Midazolam infusão (EME refratário — UTI).',
    dica: 'EME: convulsão >5 min OU 2 crises sem recuperar consciência. BZD é primeira linha.',
    fraseParaPaciente: '(Para familiar) Estamos controlando a convulsão com medicamentos fortes. Precisamos de monitorização intensa.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Neurologia / Emergência', tags: ['EME', 'Convulsão', 'Diazepam']
  },
  {
    id: 'fc054', frente: 'Conduta na HIPERCALEMIA GRAVE (K+ >6,5 ou com alteração de ECG)?',
    verso: '1) Gluconato de cálcio 1g IV (estabiliza membrana — 1ª linha) | 2) Insulina 10UI + Glicose 50% 50mL IV (entra K na célula) | 3) Bicarbonato 1-2 mEq/kg IV (se acidose) | 4) Salbutamol nebulizado | 5) Resina (Kayexalate) ou DIÁLISE (remover K do corpo).',
    dica: 'Gluconato de Ca: protege coração. Insulina+glicose: reduz K mais rápido. Diálise: remove definitivamente.',
    fraseParaPaciente: 'Seu potássio está muito alto e isso pode afetar o coração. Vou tratar agora.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Nefrologia / UTI', tags: ['Hipercalemia', 'Potássio', 'Diálise']
  },
  {
    id: 'fc055', frente: 'Conduta na HEMORRAGIA DIGESTIVA ALTA (HDA) varicosa?',
    verso: 'Acesso + ressuscitação (manter Hb 7-8 — não hiperinflação) | Octreotida 50μg IV bolus + 50μg/h (vasoconstritor esplâncnico) | ATB profilático: ceftriaxona 1g/dia ×7 dias (cirrótico) | EDA <12h (diagnóstica e terapêutica) | Propranolol após estabilização (prevenção secundária).',
    dica: 'Na cirrose com HDA: sempre ATB! Infecção bacteriana precipita hemorragia e piora prognóstico.',
    fraseParaPaciente: 'Você está sangrando por varizes no esôfago. Precisamos de endoscopia urgente.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Gastroenterologia', tags: ['HDA', 'Varizes', 'Octreotida']
  },
  {
    id: 'fc056', frente: 'Conduta na CRISE DREPANOCÍTICA (dor vaso-oclusiva)?',
    verso: 'Hidratação IV (SF 0,9% 1,5× necessidade basal) | Analgesia em escada: AINEs → Morfina IV (titular) | O2 se SpO2 <95% | Manter temperatura | Investigar precipitante (infecção, desidratação, frio) | Transfusão: só se Hb <6 ou síndrome torácica aguda | Penicilina V profilática (crianças).',
    dica: 'Dor falciforme: analgesia agressiva. Morfina não é excessiva — subanalgesia é o erro mais comum.',
    fraseParaPaciente: 'Sua crise de anemia falciforme está causando dor por falta de sangue nos tecidos. Vou controlar a dor e hidratar.',
    categoria: 'Conduta por Situação', dificuldade: 'Intermediário', especialidade: 'Hematologia', tags: ['Falciforme', 'Crise', 'Morfina']
  },
  {
    id: 'fc057', frente: 'Conduta na HEMORRAGIA PÓS-PARTO (HPP)?',
    verso: 'HAEMOSTASIS: Pedir ajuda | Avaliar (tônus, tecido, trauma, trombina — 4T) | Ocitocina 10 UI IM/IV | Massagem uterina bimanual | Misoprostol retal | Ácido tranexâmico 1g IV | Compressão uterina interna | Intervenção cirúrgica (sutura B-Lynch, histerectomia).',
    dica: '4T da HPP: Tônus (atonia=80%) | Tecido (retenção) | Trauma (laceração) | Trombina (coagulopatia).',
    fraseParaPaciente: '(Para familiar) Estamos controlando um sangramento importante após o parto.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Gineco-Obstetrícia', tags: ['HPP', 'Atonia', 'Ocitocina']
  },
  {
    id: 'fc058', frente: 'Conduta na OVERDOSE DE OPIOIDE?',
    verso: 'Tríade: miose + depressão respiratória + coma | Conduta: Naloxona 0,4mg IV/IM a cada 2-3 min (titular) até FR>12 | Via aérea (BVM se apneia) | Monitorização contínua | Repetir naloxona (meia-vida 60-90 min < opioides longos → infusão se necessário) | Internar 4-6h.',
    dica: 'Naloxona: menor dose eficaz para manter respiração sem precipitar abstinência.',
    fraseParaPaciente: '(Para familiar) Estamos revertendo o efeito do opioide com um antídoto.',
    categoria: 'Conduta por Situação', dificuldade: 'Intermediário', especialidade: 'Toxicologia / Emergência', tags: ['Opioide', 'Naloxona', 'Overdose']
  },
  {
    id: 'fc059', frente: 'Conduta na CRISE CONVULSIVA em criança (febre)?',
    verso: 'Convulsão febril simples (<15 min, generalizada, única, sem deficit pós-ictal): não tratar preventivamente | Se >5 min: diazepam retal 0,3 mg/kg ou midazolam intranasal | Tratar a febre (paracetamol) | Investigar causa da febre (PL se <12m ou sinais meníngeos) | Tranquilizar pais.',
    dica: 'Convulsão febril simples: prognóstico excelente. Não indica anticonvulsivante profilático.',
    fraseParaPaciente: 'A convulsão foi causada pela febre e é muito comum em crianças pequenas. Seu filho está bem agora.',
    categoria: 'Conduta por Situação', dificuldade: 'Intermediário', especialidade: 'Pediatria / Neurologia', tags: ['Convulsão', 'Febre', 'Criança']
  },
  {
    id: 'fc060', frente: 'Conduta no CHOQUE SÉPTICO?',
    verso: 'Dentro de 1 hora: 1) 2 acessos + colher hemoculturas | 2) ATB amplo espectro IV | 3) Cristalóide 30 mL/kg | 4) Lactato | 5) Vasopressor se PA não melhora (noradrenalina — 1ª linha) | 6) Corticoide (hidrocortisona 200 mg/dia) se choque refratário a vasopressor.',
    dica: 'Noradrenalina: vasopressor 1ª linha no choque séptico. Dopamina só se bradicardia associada.',
    fraseParaPaciente: 'Você tem uma infecção grave que afetou a pressão. Vamos tratamento intensivo agora.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'UTI / Infectologia', tags: ['Choque Séptico', 'Noradrenalina', 'Bundle']
  },
  {
    id: 'fc061', frente: 'Conduta na MENINGITE BACTERIANA?',
    verso: 'Dexametasona 0,15 mg/kg IV (antes ou junto com ATB) | ATB: Ceftriaxona 2g IV 12/12h + Ampicilina (se >50a ou imuno, cobre Listeria) | PL ANTES do ATB se possível, mas NÃO atrasar ATB por PL ou TC | Isolar por 24h (meningococo) | Notificar.',
    dica: 'Dexametasona reduz mortalidade e sequelas (surdez) em meningite bacteriana — dar ANTES do ATB.',
    fraseParaPaciente: 'Você tem uma infecção grave na membrana do cérebro. Vou iniciar antibiótico agora.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Neurologia / Infectologia', tags: ['Meningite', 'Ceftriaxona', 'Dexametasona']
  },
  {
    id: 'fc062', frente: 'Conduta no ACIDENTE VASCULAR CEREBRAL ISQUÊMICO agudo?',
    verso: '1) TC crânio sem contraste (excluir hemorrágico) | 2) Tempo início dos sintomas | 3) Se <4,5h e sem contraindicações: alteplase 0,9mg/kg IV | 4) Se oclusão de grande vaso: trombectomia mecânica até 24h | 5) AAS 300mg (se sem trombolise ou após 24h) | 6) Monitorar PA, glicemia, temperatura.',
    dica: 'Time is brain: cada minuto sem reperfusão = 1,9 milhão de neurônios perdidos.',
    fraseParaPaciente: 'Você teve um derrame. Temos uma janela de tempo para reverter — vamos agir agora.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Neurologia / Emergência', tags: ['AVC', 'Alteplase', 'Trombectomia']
  },
  {
    id: 'fc063', frente: 'Conduta na INSUFICIÊNCIA CARDÍACA AGUDA descompensada?',
    verso: 'LMNOP: L-Lasix (furosemida 40-80mg IV) | M-Morfina (2-4mg IV — controverso) | N-Nitratos (nitrato SL ou IV) | O-Oxigênio/VNI | P-Posição sentada. Tratar causa: FA → cardioversão/controle FC | IAM → ICP | HAS → vasodilatador.',
    dica: 'VNI (CPAP/BiPAP) reduz necessidade de IOT em EAP. Usar precocemente.',
    fraseParaPaciente: 'Seu coração está sobrecarregado. Vou dar medicamentos para tirar o excesso de líquido dos pulmões.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Cardiologia', tags: ['IC', 'EAP', 'Furosemida']
  },
  {
    id: 'fc064', frente: 'Conduta na FIBRILAÇÃO ATRIAL com instabilidade hemodinâmica?',
    verso: 'Instável (hipotensão, angina, IC, síncope): CARDIOVERSÃO elétrica sincronizada IMEDIATA (150-200J bifásico). Estável: 1) Controle de frequência (betabloqueador ou diltiazem IV) ou 2) Cardioversão química (amiodarona, propafenona) se <48h. Anticoagulação: sempre avaliar CHA2DS2-VASc.',
    dica: 'FA + instabilidade = CVE imediata. FA + estável = controle de FC ou ritmo.',
    fraseParaPaciente: 'Seu coração está com ritmo irregular. Precisamos corrigi-lo para melhorar sua pressão.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Cardiologia / Emergência', tags: ['FA', 'Cardioversão', 'Amiodarona']
  },
  {
    id: 'fc065', frente: 'Conduta no TROMBOEMBOLISMO PULMONAR com instabilidade?',
    verso: 'TEP maciço (hipotensão/PCR): Trombólise sistêmica alteplase 100mg IV em 2h (ou 0,6mg/kg em PCR) | TEP submaciço (disfunção VD): anticoagulação + avaliar trombólise | Anticoagulação: heparina não-fracionada IV bolus 80 UI/kg | Suporte hemodinâmico: noradrenalina.',
    dica: 'TEP maciço com PCR: trombólise mesmo com risco de sangramento — benefício supera risco.',
    fraseParaPaciente: 'Você tem um coágulo no pulmão. Vamos dar um medicamento para dissolvê-lo.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Pneumologia / Cardiologia', tags: ['TEP', 'Trombólise', 'Heparina']
  },
  {
    id: 'fc066', frente: 'Conduta na CRISE ASMÁTICA GRAVE?',
    verso: 'SpO2 <90%, fala monossilábica, cianose, MV muito diminuído: O2 + salbutamol contínuo nebulizado + ipratrópio + corticoide IV (hidrocortisona 200mg) + MgSO4 2g IV em 20min. Se não melhora: IOT (cuidado — auto-PEEP) ou Heliox.',
    dica: 'MgSO4 2g IV: broncodilatador de resgate em crise grave. Reduz IOT.',
    fraseParaPaciente: 'Sua crise de asma está grave. Vou dar vários medicamentos para abrir os brônquios agora.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Pneumologia / Emergência', tags: ['Asma', 'MgSO4', 'Crise Grave']
  },
  {
    id: 'fc067', frente: 'Conduta na DENGUE GRAVE (grupo D)?',
    verso: 'Expansão volêmica rápida: SF ou Ringer Lactato 20mL/kg em 15-30 min (repetir até 3x) | Se choque refratário: coloide | Monitorar: PA, Ht seriado, diurese | Sem melhora de Ht após fluido: investigar sangramento. NÃO: AAS, AINEs, corticoide, antibiótico (viral).',
    dica: 'Dengue grave: choque = extravasamento plasmático. Fluido IV salva. Ht que cai + piora clínica = hemorragia.',
    fraseParaPaciente: 'Sua dengue está grave. Precisamos de soro no braço rapidamente para estabilizar sua pressão.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Infectologia / Emergência', tags: ['Dengue', 'Choque', 'Fluido']
  },
  {
    id: 'fc068', frente: 'Conduta na HIPOGLICEMIA em paciente consciente vs inconsciente?',
    verso: 'Consciente (glicemia <70 + sintomas): 15g de carboidrato de rápida absorção (suco, glicose VO) → repetir em 15 min → comer refeição. Inconsciente ou impossível VO: Glicose 50% 20-40mL IV | Glucagon 1mg IM/SC (sem acesso). Monitorar 2h.',
    dica: 'Regra dos 15: 15g de carbo → verificar em 15 min → repetir até glicemia >100.',
    fraseParaPaciente: 'Seu açúcar caiu muito. Vou dar um suco agora e verificar novamente em 15 minutos.',
    categoria: 'Conduta por Situação', dificuldade: 'Fundamental', especialidade: 'Endocrinologia / Emergência', tags: ['Hipoglicemia', 'Glicose', 'Glucagon']
  },
  {
    id: 'fc069', frente: 'Conduta na INTOXICAÇÃO EXÓGENA — primeiros passos gerais?',
    verso: '1) Via aérea (rebaixamento: IOT) | 2) Acesso venoso + glicemia | 3) Identificar substância (frasco, família, CIATox 0800-722-6001) | 4) Descontaminação: carvão ativado 1g/kg (se <1h, VA protegida, não causticos) | 5) Antídoto específico se disponível | 6) Suporte e monitorização.',
    dica: 'CIATox: 0800 722 6001 — ligar sempre em intoxicação para orientação específica.',
    fraseParaPaciente: '(Para familiar) Vamos estabilizar e identificar o que foi ingerido para dar o tratamento correto.',
    categoria: 'Conduta por Situação', dificuldade: 'Intermediário', especialidade: 'Toxicologia / Emergência', tags: ['Intoxicação', 'CIATox', 'Carvão']
  },
  {
    id: 'fc070', frente: 'Conduta na PANCREATITE AGUDA?',
    verso: 'Hidratação agressiva: Ringer Lactato 250-500mL/h nas primeiras 12-24h (melhor que SF) | Analgesia: morfina IV (morfina NÃO piora pancreatite — mito derrubado) | Dieta: jejum se vômito, nutrição enteral precoce se possível | ATB: apenas se infecção confirmada | US abdominal + TC se grave.',
    dica: 'Hidratação com Ringer Lactato: reduz SIRS comparado ao SF. Morfina é segura na pancreatite.',
    fraseParaPaciente: 'Seu pâncreas está inflamado. Vou dar soro e remédio para dor e deixar o pâncreas descansar.',
    categoria: 'Conduta por Situação', dificuldade: 'Intermediário', especialidade: 'Gastroenterologia / Cirurgia', tags: ['Pancreatite', 'Ringer', 'Morfina']
  },

  // ─── FARMACOLOGIA CLÍNICA ─────────────────────────────────────
  {
    id: 'fc071', frente: 'Antibióticos de ESCOLHA por tipo de infecção?',
    verso: 'PAC leve: amoxicilina | PAC grave: ceftriaxona + azitromicina | ITU não complicada: nitrofurantoína ou fosfomicina | Celulite: cefalexina | MRSA: vancomicina ou TMP-SMX | Pseudomonas: piperacilina-tazobactam | Anaeróbios: metronidazol | Sífilis: penicilina G benzatina.',
    dica: 'Amoxicilina-clavulanato: adiciona cobertura para beta-lactamase (gram-negativos e anaeróbios).',
    fraseParaPaciente: 'Vou prescrever o antibiótico mais adequado para o tipo de infecção que você tem.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Infectologia', tags: ['Antibiótico', 'Escolha', 'Infecção']
  },
  {
    id: 'fc072', frente: 'Contraindicações à METFORMINA?',
    verso: 'TFG <30 mL/min (acumula — risco de acidose lática) | Contraste iodado (suspender 48h antes/depois) | Cirurgia de grande porte | Choque/hipóxia tecidual | Hepatopatia grave | Alcoolismo. Reduzir dose se TFG 30-45. Suspender se TFG <30.',
    dica: 'Metformina + contraste: suspender no dia e por 48h após (risco de acidose lática por IRA induzida).',
    fraseParaPaciente: 'Precisamos suspender o seu remédio do diabetes temporariamente antes do exame com contraste.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Endocrinologia / Clínica', tags: ['Metformina', 'Contraindicação', 'DM']
  },
  {
    id: 'fc073', frente: 'Quando usar IECA vs BRA vs ISGLT-2 no DM com DRC?',
    verso: 'IECA/BRA (enalapril/losartana): 1ª linha em DM+HAS+proteinúria. Reduzem proteinúria e progressão renal. NÃO combinar IECA+BRA. ISGLT-2 (empagliflozina/dapagliflozina): adicionar se TFG>20, reduz eventos CV e progressão renal independente da glicemia.',
    dica: 'IECA+ISGLT-2: combinação ideal no DM com DRC. Máximo benefício renal e cardiovascular.',
    fraseParaPaciente: 'Esses medicamentos protegem seus rins e seu coração além de controlar a pressão.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Endocrinologia / Nefrologia', tags: ['IECA', 'ISGLT-2', 'DRC', 'DM']
  },
  {
    id: 'fc074', frente: 'Doses e uso de HEPARINA NÃO-FRACIONADA (HNF)?',
    verso: 'TVP/TEP: bolus 80 UI/kg IV + infusão 18 UI/kg/h. Titular pelo TTPA (alvo 60-100s = 1,5-2,5× normal). SCA/IAM: 60 UI/kg bolus (máx 4000) + 12 UI/kg/h. Diálise: 500-2000 UI/h. Antídoto: sulfato de protamina (1mg para cada 100 UI de HNF).',
    dica: 'Monitorar TTPA a cada 6h até estável. Heparina: meia-vida 1-2h (controlável e reversível).',
    fraseParaPaciente: 'Vou iniciar um anticoagulante para tratar o coágulo. Farei exames de sangue a cada 6 horas.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Hematologia / UTI', tags: ['Heparina', 'TTPA', 'Anticoagulação']
  },
  {
    id: 'fc075', frente: 'Efeitos adversos dos AMINOGLICOSÍDEOS?',
    verso: 'Nefrotoxicidade (IRA — monitorar Cr diariamente) | Ototoxicidade (surdez irreversível — monitorar audiometria) | Bloqueio neuromuscular (cuidado com miastenia gravis) | Nível sérico: pico (eficácia) e vale (toxicidade). Dose única diária reduz toxicidade vs dose fracionada.',
    dica: 'Gentamicina/amicacina: hidratação adequada reduz nefrotoxicidade. Evitar em IRA e gestação.',
    fraseParaPaciente: 'Esse antibiótico é muito potente. Vou monitorar seus rins e a audição durante o tratamento.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Infectologia / Farmacologia', tags: ['Aminoglicosídeo', 'Nefrotoxicidade', 'Ototoxicidade']
  },
  {
    id: 'fc076', frente: 'Como usar CORTICOIDE SISTÊMICO com segurança?',
    verso: 'Indicações: asma, DPOC, LES, AR, transplante, crise adrenal, meningite. Efeitos adversos: hiperglicemia, HAS, osteoporose, imunossupressão, úlcera péptica, síndrome de Cushing. Equivalências: prednisona 5mg = metilprednisolona 4mg = dexametasona 0,75mg. Retirada: não abrupta (>2 semanas de uso).',
    dica: 'Corticoide >2 semanas: não suspender abruptamente — risco de insuficiência adrenal aguda.',
    fraseParaPaciente: 'Esse medicamento é muito eficaz, mas tem efeitos colaterais que vamos monitorar juntos.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Clínica / Reumatologia', tags: ['Corticoide', 'Equivalência', 'Efeito Adverso']
  },
  {
    id: 'fc077', frente: 'Toxicidade da DIGOXINA: como reconhecer e tratar?',
    verso: 'Sintomas: náuseas, xantopsia (visão amarelada), bradicardia, bloqueio AV, arritmias. Fatores precipitantes: hipocalemia, hipomagnésemia, hipotireoidismo, IRA. Tratamento: suspender digoxina, corrigir K e Mg, anticorpos antidigoxina (DigiFab) em intoxicação grave.',
    dica: 'Digoxina + hipocalemia = combinação letal. Monitorar K em todo paciente em digoxina.',
    fraseParaPaciente: 'Vou ajustar sua medicação cardíaca. Precisamos verificar os níveis no sangue.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Cardiologia / Farmacologia', tags: ['Digoxina', 'Toxicidade', 'Hipocalemia']
  },
  {
    id: 'fc078', frente: 'Quando usar PROFILAXIA DE TVP hospitalar?',
    verso: 'Indicada em: cirurgia ortopédica (ATQ/ATJ) — HBPM ×35 dias | Cirurgia abdominal/pélvica por neoplasia | Paciente clínico internado com PADUA Score ≥4 | AVC isquêmico. Droga: enoxaparina 40mg SC/dia (ajustar se TFG<30: reduzir dose). Mecânica: meia elástica + compressão pneumática.',
    dica: 'ATQ/ATJ: maior risco de TVP. Profilaxia estendida por 35 dias é padrão.',
    fraseParaPaciente: 'Vou aplicar um anticoagulante preventivo para evitar coágulos durante a internação.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Cirurgia / Hematologia', tags: ['TVP', 'Profilaxia', 'Enoxaparina']
  },
  {
    id: 'fc079', frente: 'Uso de ESTATINAS: indicações e monitorização?',
    verso: 'Indicações: LDL>190 | DM adulto | DCV estabelecida (AVC, IAM, angina) | RCV>7,5% em 10 anos. Efeitos adversos: miopatia (dor muscular, rabdomiólise — monitorar CK) | Hepatotoxicidade rara. Contraindicação: gravidez. Não suspender estatina em IAM (benefício pleiotrópico imediato).',
    dica: 'Dor muscular + CK>10× normal com estatina = rabdomiólise. Suspender imediatamente.',
    fraseParaPaciente: 'Este remédio protege seu coração ao longo do tempo. Me avise se sentir dor muscular intensa.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Cardiologia / Clínica', tags: ['Estatina', 'LDL', 'Miopatia']
  },
  {
    id: 'fc080', frente: 'Principais interações medicamentosas PERIGOSAS?',
    verso: 'Varfarina + AAS/AINE = sangramento grave | IECA + BRA = hipercalemia + IRA | Estatina + fibratos = miopatia/rabdomiólise | Metformina + contraste = acidose lática | Lítio + diuréticos tiazídicos = toxicidade por lítio | Selegilina + ISRS = síndrome serotoninérgica | Álcool + BZD = depressão respiratória.',
    dica: 'Varfarina: interação com tudo. Monitorar INR sempre que mudar qualquer medicamento.',
    fraseParaPaciente: 'É muito importante me contar todos os medicamentos que você usa, incluindo naturais e vitaminas.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Farmacologia / Clínica', tags: ['Interação Medicamentosa', 'Varfarina', 'Segurança']
  },

  // ─── COMUNICAÇÃO MÉDICA ──────────────────────────────────────
  {
    id: 'fc081', frente: 'Como comunicar o ÓBITO à família?',
    verso: '1) Ambiente privado, família sentada | 2) Apresentar-se | 3) Verificar o que a família já sabe | 4) Usar linguagem clara: "Lamento informar que [Nome] faleceu" — não usar eufemismos (descansou, partiu) | 5) Silêncio após a notícia | 6) Acolher a reação emocional | 7) Responder dúvidas | 8) Oferecer apoio.',
    dica: 'Evitar: "Fizemos tudo que pudemos" como abertura. Focar no paciente, não na equipe.',
    fraseParaPaciente: '"Lamento muito. [Nome] faleceu às [hora]. Posso ficar aqui com vocês por alguns minutos."',
    categoria: 'Comunicação', dificuldade: 'Avançado', especialidade: 'Geral', tags: ['Óbito', 'Comunicação', 'Família']
  },
  {
    id: 'fc082', frente: 'Como abordar ADESÃO AO TRATAMENTO com o paciente?',
    verso: '1) Perguntar de forma não julgadora: "Com que frequência você usa o remédio?" | 2) Explorar barreiras (custo, efeitos adversos, esquecimento, crença) | 3) Simplificar o esquema | 4) Educação sobre a importância | 5) Envolver família | 6) Técnica OARS: Perguntas Abertas, Afirmação, Reflexão, Resumo.',
    dica: 'Não perguntar "Você toma direito?" — induz resposta afirmativa. Perguntar de forma neutra.',
    fraseParaPaciente: '"Às vezes é difícil tomar remédio todo dia. O que dificulta para você?"',
    categoria: 'Comunicação', dificuldade: 'Intermediário', especialidade: 'Geral / APS', tags: ['Adesão', 'Motivação', 'OARS']
  },
  {
    id: 'fc083', frente: 'Como comunicar DIAGNÓSTICO DE HIV ao paciente?',
    verso: '1) Ambiente privado | 2) Confirmar com resultado em mãos | 3) Informar o resultado diretamente mas com empatia | 4) Dar tempo para processar | 5) Explicar que HIV tem tratamento e permite vida normal | 6) Rastrear parceiros | 7) Sigilo médico (não informar sem consentimento) | 8) Notificação ao SINAN.',
    dica: 'HIV hoje: doença crônica controlável. Expectativa de vida igual à população geral com TARV.',
    fraseParaPaciente: '"Seu exame de HIV deu positivo. Eu sei que é muito para processar. Mas hoje HIV tem tratamento e você pode viver bem."',
    categoria: 'Comunicação', dificuldade: 'Avançado', especialidade: 'Infectologia / Ética', tags: ['HIV', 'Diagnóstico', 'Sigilo']
  },
  {
    id: 'fc084', frente: 'Como conduzir consulta de SAÚDE SEXUAL com adolescente?',
    verso: '1) Atender sem os pais por pelo menos parte da consulta | 2) Garantir sigilo | 3) Usar linguagem adequada para a idade | 4) Perguntar sobre vida sexual de forma neutra | 5) Oferecer anticoncepção sem exigir presença dos pais | 6) Rastrear ISTs | 7) Avaliar violência | 8) Vacinar contra HPV.',
    dica: 'Adolescente capaz: direito ao sigilo e à anticoncepção sem autorização dos pais (CFM + ECA).',
    fraseParaPaciente: '"O que você me contar fica entre nós, a menos que você esteja correndo risco de vida."',
    categoria: 'Comunicação', dificuldade: 'Intermediário', especialidade: 'Adolescência / Ética', tags: ['Adolescente', 'Sigilo', 'Sexual']
  },
  {
    id: 'fc085', frente: 'Como concluir uma estação do REVALIDA?',
    verso: '1) Resumir o diagnóstico/situação ao paciente com linguagem simples | 2) Explicar a conduta proposta | 3) Verificar compreensão: "Você entendeu? Tem dúvidas?" | 4) Orientar retorno/sinais de alarme | 5) Despedir-se pelo nome | 6) Higienizar as mãos ao sair (se obrigatório no cenário).',
    dica: 'Últimos 60 segundos: resumo + conduta + pergunta aberta + despedida educada.',
    fraseParaPaciente: '"Então, para resumir: você tem [diagnóstico]. Vamos fazer [conduta]. Tem alguma dúvida?"',
    categoria: 'Comunicação', dificuldade: 'Fundamental', especialidade: 'Geral / Revalida', tags: ['Revalida', 'Conclusão', 'Consulta']
  },
  {
    id: 'fc086', frente: 'Como transferir um paciente GRAVE com segurança?',
    verso: 'Princípio ACCEPT: A-Avaliação (documentar estado atual) | C-Comunicar (médico receptor) | C-Confirmar (aceitação e leito) | E-Equipar (monitorar durante transporte, drogas vasoativas, suporte) | P-Pessoal (acompanhamento médico e enfermagem) | T-Transferir (com documentação completa).',
    dica: 'Toda transferência de paciente instável: médico acompanha. Documentação completa é obrigatória.',
    fraseParaPaciente: '(Para familiar) Seu familiar precisa ir para um hospital com mais recursos. Estaremos acompanhando.',
    categoria: 'Comunicação', dificuldade: 'Intermediário', especialidade: 'Emergência / UTI', tags: ['Transferência', 'ACCEPT', 'Segurança']
  },
  {
    id: 'fc087', frente: 'Como abordar RECUSA DE VACINA pelo paciente/responsável?',
    verso: '1) Explorar o motivo sem julgamento | 2) Verificar fonte da informação (fake news?) | 3) Fornecer dados científicos de forma acessível | 4) Reconhecer incertezas legítimas | 5) Técnica da entrevista motivacional | 6) Não confrontar diretamente | 7) Documentar a recusa | 8) Manter vínculo para oportunidade futura.',
    dica: 'Confrontar gera resistência. Curiosidade empática abre mais porta que debate científico.',
    fraseParaPaciente: '"Entendo sua preocupação. O que você já ouviu sobre essa vacina? Posso te dar mais informações."',
    categoria: 'Comunicação', dificuldade: 'Intermediário', especialidade: 'APS / Saúde Pública', tags: ['Vacina', 'Recusa', 'Motivacional']
  },
  {
    id: 'fc088', frente: 'Como comunicar um ERRO MÉDICO ao paciente?',
    verso: '1) Comunicar assim que identificado | 2) Ambiente privado + responsável presente | 3) Linguagem clara: o que aconteceu, por que, o que está sendo feito | 4) Pedir desculpas diretamente: "Lamento que isso aconteceu" | 5) Explicar as medidas corretivas | 6) Documentar no prontuário | 7) Notificar o serviço (vigilância sanitária, se necessário).',
    dica: 'Comunicar erro não é admitir culpa legal — é obrigação ética e melhora relação médico-paciente.',
    fraseParaPaciente: '"Preciso te informar sobre algo que aconteceu durante o seu tratamento. Lamento muito."',
    categoria: 'Comunicação', dificuldade: 'Avançado', especialidade: 'Ética / Gestão', tags: ['Erro Médico', 'Comunicação', 'Ética']
  },
  {
    id: 'fc089', frente: 'Como dar ALTA MÉDICA de forma segura?',
    verso: '1) Confirmar critérios de alta (estabilidade clínica) | 2) Resumo verbal da internação | 3) Receita legível com dose, horário e duração | 4) Sinais de alarme para retorno | 5) Consulta de retorno agendada | 6) Orientar sobre restrições (dieta, atividade) | 7) Confirmar compreensão: "Você pode me dizer o que vai fazer em casa?"',
    dica: 'Alta segura: o paciente deve conseguir repetir o que foi orientado — testar a compreensão.',
    fraseParaPaciente: '"Você está em condições de ir para casa. Deixa eu explicar o que você deve fazer e quando voltar."',
    categoria: 'Comunicação', dificuldade: 'Fundamental', especialidade: 'Geral / APS', tags: ['Alta', 'Segurança', 'Receita']
  },
  {
    id: 'fc090', frente: 'Como abordar o paciente com DOR CRÔNICA?',
    verso: '1) Validar a dor ("Acredito que você sente dor") | 2) Avaliar impacto na vida (trabalho, sono, humor) | 3) Escala de dor + EVA | 4) Explorar expectativas | 5) Abordagem biopsicossocial | 6) Evitar opioides crônicos sem indicação precisa | 7) Fisioterapia + psicoterapia | 8) Metas realistas: não "zero dor" mas "funcionar melhor".',
    dica: 'Dor crônica: não é apenas fisiológica. Componentes emocionais e sociais são sempre presentes.',
    fraseParaPaciente: '"Sua dor é real e eu quero ajudar. Mas o tratamento vai além do remédio — vamos trabalhar juntos."',
    categoria: 'Comunicação', dificuldade: 'Intermediário', especialidade: 'Clínica / APS', tags: ['Dor Crônica', 'Biopsicossocial', 'Comunicação']
  },

  // ─── PREVENÇÃO E RASTREAMENTO ────────────────────────────────
  {
    id: 'fc091', frente: 'Rastreamento do CÂNCER DE COLO UTERINO (Brasil)?',
    verso: 'Inicio: 25 anos (início de atividade sexual) | Periodicidade: Papanicolaou a cada 3 anos após 2 anuais negativos | Encerramento: 64 anos (se 2 negativos nos últimos 5 anos) | Colposcopia: se ASC-US + HPV de alto risco, ASC-H, LSIL ou pior | HPV teste: pode substituir Papanicolaou a partir de 30 anos.',
    dica: 'Papanicolaou x3 anos: após 2 anuais negativos. Encerrar aos 64 se screening adequado.',
    fraseParaPaciente: 'Vou fazer o preventivo hoje. É rápido e indolor — e pode salvar sua vida ao detectar alterações precoces.',
    categoria: 'Prevenção', dificuldade: 'Fundamental', especialidade: 'Ginecologia / APS', tags: ['Câncer Colo', 'Papanicolaou', 'Rastreamento']
  },
  {
    id: 'fc092', frente: 'Rastreamento do CÂNCER DE MAMA (Brasil)?',
    verso: 'Mamografia: bianual em mulheres de 50-69 anos (MS) | INCA recomenda: 40-74 anos, anual dos 40-49 e bianual dos 50-74 | Alto risco (BRCA, familiar 1º grau, mama densa): iniciar rastreamento ≥10 anos antes do familiar mais jovem | RNM de mama: alto risco apenas.',
    dica: 'Divergência MS vs INCA: MS prioriza 50-69 anos. INCA amplia para 40 anos. Conhecer ambos.',
    fraseParaPaciente: 'A mamografia pode encontrar o câncer muito cedo, quando o tratamento tem altíssima taxa de cura.',
    categoria: 'Prevenção', dificuldade: 'Fundamental', especialidade: 'Ginecologia / APS', tags: ['Câncer Mama', 'Mamografia', 'Rastreamento']
  },
  {
    id: 'fc093', frente: 'Rastreamento do CÂNCER COLORRETAL?',
    verso: 'Risco médio (sem história familiar): iniciar aos 50 anos. Opções: colonoscopia a cada 10 anos (padrão-ouro) | Sangue oculto nas fezes anualmente | Retossigmoidoscopia a cada 5 anos. Alto risco (PAF, HNPCC, familiar 1º grau <60 anos): colonoscopia aos 40 anos ou 10 anos antes do caso índice.',
    dica: 'Colonoscopia: melhor método (diagnóstico + polipectomia simultânea). Sangue oculto: alternativa acessível.',
    fraseParaPaciente: 'Colonoscopia com 50 anos encontra pólipo antes de virar câncer — e já remove na mesma hora.',
    categoria: 'Prevenção', dificuldade: 'Intermediário', especialidade: 'Gastroenterologia / APS', tags: ['Câncer Colo', 'Colonoscopia', 'Rastreamento']
  },
  {
    id: 'fc094', frente: 'Vacinas obrigatórias do adulto (Calendário SUS)?',
    verso: 'Dupla adulto (dT): reforço a cada 10 anos | dTpa: 1 dose em adultos que nunca receberam (coqueluche) | Influenza: anual (grupos de risco: >60a, gestantes, DM, DRC, obesidade, profissionais de saúde) | Pneumocócica 23V: ≥60 anos + grupos de risco | Hepatite B: 3 doses (0-1-6 meses) | HPV: até 45 anos.',
    dica: 'dTpa na gestante (27-36 semanas): protege o bebê contra coqueluche nas primeiras semanas.',
    fraseParaPaciente: 'Vou verificar sua carteirinha. Adultos também precisam de vacinas de reforço.',
    categoria: 'Prevenção', dificuldade: 'Fundamental', especialidade: 'Saúde Pública / APS', tags: ['Vacinas', 'Adulto', 'SUS']
  },
  {
    id: 'fc095', frente: 'Prevenção de QUEDAS em idoso — abordagem multifatorial?',
    verso: '1) Revisar medicamentos (BZD, anti-hipertensivos, diuréticos — Beers criteria) | 2) Avaliar visão e audição | 3) Fisioterapia: treino de equilíbrio e força | 4) Adaptar ambiente (tapetes, iluminação, barras) | 5) Vitamina D (>800 UI/dia em deficientes) | 6) Tratar hipotensão ortostática | 7) TUG ≥20s = alto risco.',
    dica: 'Risco de queda: TUG (Time Up and Go). ≥20s = alto risco. ≥30s = dependência.',
    fraseParaPaciente: 'Vou revisar seus medicamentos e recomendar exercícios para melhorar seu equilíbrio e evitar quedas.',
    categoria: 'Prevenção', dificuldade: 'Intermediário', especialidade: 'Geriatria / APS', tags: ['Queda', 'Idoso', 'Prevenção']
  },
  {
    id: 'fc096', frente: 'Prevenção PRIMÁRIA DE AVC?',
    verso: 'Controlar fatores de risco: HAS (maior FR modificável), DM, dislipidemia, FA (anticoagulação se CHA2DS2VASc ≥2H/≥3M), tabagismo (cessar), obesidade, sedentarismo | AAS: não indicado em prevenção primária em ausência de DCV estabelecida | Estatina: em todo paciente com RCV >7,5% em 10 anos.',
    dica: 'HAS: principal fator de risco modificável para AVC. Cada 10mmHg de redução da PAS: 27% menos AVC.',
    fraseParaPaciente: 'Controlar sua pressão e parar de fumar são as medidas mais importantes para prevenir um derrame.',
    categoria: 'Prevenção', dificuldade: 'Intermediário', especialidade: 'Neurologia / APS', tags: ['AVC', 'Prevenção', 'HAS']
  },
  {
    id: 'fc097', frente: 'Prevenção de IRA por CONTRASTE IODADO?',
    verso: 'Fatores de risco: DRC (Cr>1,5), DM, ICC, desidratação, nefrotóxico prévio, mieloma, >75 anos. Prevenção: 1) Hidratação IV: SF 0,9% 1mL/kg/h por 6-12h antes e depois | 2) Suspender metformina 48h antes | 3) Usar contraste de baixa osmolaridade | 4) Mínima dose de contraste possível.',
    dica: 'N-Acetilcisteína: muito estudada, benefício incerto — hidratação IV é o pilar principal.',
    fraseParaPaciente: 'Vou te hidratar antes do exame com contraste para proteger seus rins.',
    categoria: 'Prevenção', dificuldade: 'Intermediário', especialidade: 'Nefrologia / Radiologia', tags: ['IRA', 'Contraste', 'Prevenção']
  },
  {
    id: 'fc098', frente: 'Rastreamento de OSTEOPOROSE?',
    verso: 'Densitometria óssea (DXA): mulheres ≥65 anos ou pós-menopausa com fatores de risco | Homens ≥70 anos | Qualquer adulto com fratura de baixo impacto | Escore FRAX: calcula risco de fratura em 10 anos. Tratamento: bifosfonatos (alendronato), cálcio + vitamina D, exercício com peso.',
    dica: 'T-score: normal ≥-1; osteopenia -1 a -2,5; osteoporose ≤-2,5.',
    fraseParaPaciente: 'A densitometria mede a força dos seus ossos. Aos 65 anos toda mulher deve fazer esse exame.',
    categoria: 'Prevenção', dificuldade: 'Intermediário', especialidade: 'Reumatologia / APS', tags: ['Osteoporose', 'DXA', 'FRAX']
  },
  {
    id: 'fc099', frente: 'Vacinas na GESTAÇÃO?',
    verso: 'PERMITIDAS: dTpa (27-36 semanas — protege o RN) | Influenza (qualquer trimestre) | Hepatite B (se não vacinada) | COVID (recomendado). CONTRAINDICADAS: MMR (tríplice viral), varicela, febre amarela (em área de baixo risco) — vírus atenuados. Hepatite A: avaliar risco-benefício.',
    dica: 'dTpa na gestação: vacina de transferência passiva para o bebê. Mais importante vacina na gravidez.',
    fraseParaPaciente: 'Durante a gravidez, algumas vacinas são seguras e até importantes para proteger o bebê.',
    categoria: 'Prevenção', dificuldade: 'Intermediário', especialidade: 'Gineco-Obstetrícia / APS', tags: ['Vacinas', 'Gestação', 'dTpa']
  },
  {
    id: 'fc100', frente: 'Profilaxia de ENDOCARDITE INFECCIOSA — quando indicar?',
    verso: 'Indicada em: procedimentos dentários (extração, tratamento de canal) EM pacientes de ALTO RISCO: prótese valvar | EI prévia | Cardiopatia congênita cianótica não corrigida | Transplante cardíaco com valvopatia. Droga: amoxicilina 2g VO 30-60 min antes. Alérgico: clindamicina 600mg.',
    dica: 'Profilaxia de EI: NÃO indicada em todo cardiopata — apenas nos de alto risco (prótese, EI prévia).',
    fraseParaPaciente: 'Antes de ir ao dentista, você precisará tomar um antibiótico por causa da sua válvula cardíaca.',
    categoria: 'Prevenção', dificuldade: 'Intermediário', especialidade: 'Cardiologia / Infectologia', tags: ['Endocardite', 'Profilaxia', 'Dentista']
  },

  // ─── PEDIATRIA ──────────────────────────────────────────────
  {
    id: 'fc101', frente: 'Critérios de INTERNAÇÃO para PNEUMONIA em criança?',
    verso: 'SpO2 <92% | FR muito elevada (>70 irpm <1a; >50 irpm 1-5a) | Sinais de esforço grave (retração intercostal grave, batimento de asa nasal) | Toxemia | Impossibilidade de alimentação/hidratação | Falha ambulatorial em 48h | Derrame pleural | Imunocomprometido.',
    dica: 'SpO2 <92% é o critério mais objetivo e mais importante para internação.',
    fraseParaPaciente: 'Seu filho vai precisar ficar internado para receber oxigênio e antibiótico na veia.',
    categoria: 'Pediatria', dificuldade: 'Intermediário', especialidade: 'Pediatria / Pneumologia', tags: ['Pneumonia', 'Criança', 'Internação']
  },
  {
    id: 'fc102', frente: 'Conduta em FEBRE em lactente <3 meses?',
    verso: 'Temperatura ≥38°C: INTERNAÇÃO e investigação completa. Exames: hemograma, PCR, hemocultura, urocultura, LCR (punção lombar), RX tórax se sintoma respiratório. ATB empírico: ampicilina + gentamicina até culturas negativas (risco de sepse bacteriana = 10%). Febre sem foco <3m: SEMPRE internar.',
    dica: 'Lactente <3 meses com febre: não existe "esperar em casa". Sempre internar e colher culturas.',
    fraseParaPaciente: 'Bebês pequenos com febre precisam de avaliação completa no hospital. É uma precaução necessária.',
    categoria: 'Pediatria', dificuldade: 'Avançado', especialidade: 'Pediatria / Neonatologia', tags: ['Febre', 'Lactente', 'Neonato']
  },
  {
    id: 'fc103', frente: 'Marcos do desenvolvimento neuropsicomotor: 0-12 meses?',
    verso: '2m: sorriso social | 3m: sustentação da cabeça | 4-5m: rolar | 6m: sentar com apoio | 7m: transferir objeto entre mãos | 8-9m: sentar sem apoio, engatinhar | 10m: pinça fina, andar apoiado | 12m: primeiras palavras, primeiros passos. Alarme: ausência de sorriso aos 2m, não senta aos 9m.',
    dica: 'Regra: o que a criança faz com as mãos antecede o que faz com o corpo (motricidade fina antes de grossa).',
    fraseParaPaciente: 'Vou avaliar o desenvolvimento do seu bebê — cada criança tem seu ritmo, mas alguns marcos são importantes.',
    categoria: 'Pediatria', dificuldade: 'Fundamental', especialidade: 'Pediatria / Neuropediatria', tags: ['Desenvolvimento', 'Marcos', 'Lactente']
  },
  {
    id: 'fc104', frente: 'BRONQUIOLITE no lactente — diagnóstico e conduta?',
    verso: 'Epidemiologia: 2-12 meses, pico outono-inverno, VSR (90%). Clínica: coriza → tosse → sibilância + esforço respiratório. Diagnóstico: CLÍNICO. Conduta: suporte (O2 se SpO2<92%, hidratação, aspiração) | NÃO: broncodilatador (não evidência), corticoide, ATB (viral). Internar se SpO2<92%.',
    dica: 'Bronquiolite: NÃO usar broncodilatador de rotina. Soro fisiológico hipertônico: benefício modesto.',
    fraseParaPaciente: 'Essa infecção nos pulmões do bebê é viral. O tratamento é suporte — oxigênio e hidratação.',
    categoria: 'Pediatria', dificuldade: 'Intermediário', especialidade: 'Pediatria / Pneumologia', tags: ['Bronquiolite', 'VSR', 'Lactente']
  },
  {
    id: 'fc105', frente: 'DIARREIA AGUDA em criança — manejo e sinais de alarme?',
    verso: 'Manejo: TRO (Soro de Reidratação Oral) | Manter alimentação | Zinco 10-20mg/dia ×10-14 dias | Probióticos: Lactobacillus rhamnosus GG (leve evidência). NÃO: ATB de rotina | chá/refrigerante/suco | parar alimentação. Sinais de alarme: sangue nas fezes, febre alta, vômito incoercível, sinais de desidratação grave.',
    dica: 'TRO é tão eficaz quanto reidratação IV para desidratação leve-moderada. Via oral é a preferida.',
    fraseParaPaciente: 'O SRO (sachê de soro) é mais eficaz que suco ou refrigerante para repor o que foi perdido.',
    categoria: 'Pediatria', dificuldade: 'Fundamental', especialidade: 'Pediatria / Gastro', tags: ['Diarreia', 'TRO', 'Criança']
  },
  {
    id: 'fc106', frente: 'Triagem Neonatal (Teste do Pezinho): o que rastreia?',
    verso: 'Básico SUS: PKU (fenilcetonúria) | Hipotireoidismo congênito | Hemoglobinopatias (anemia falciforme) | Fibrose cística | Hiperplasia adrenal congênita | Deficiência de biotinidase. Prazo: 3º ao 5º dia de vida. Teste do Olhinho, Coraçãozinho, Linguinha, Orelhinha também fazem parte do neonatal.',
    dica: 'Teste do Pezinho: coletar entre 3-5 dias. Antes de 48h: falso-negativo para PKU e hipotireoidismo.',
    fraseParaPaciente: 'Vamos fazer o teste do pezinho no seu bebê — ele detecta doenças tratáveis antes de causar sintomas.',
    categoria: 'Pediatria', dificuldade: 'Fundamental', especialidade: 'Neonatologia / APS', tags: ['Pezinho', 'Triagem', 'Neonatal']
  },
  {
    id: 'fc107', frente: 'PUBERDADE PRECOCE — quando suspeitar e investigar?',
    verso: 'Feminina: sinais puberais <8 anos | Masculina: <9 anos. Investigar: FSH, LH (estimulados), estradiol/testosterona, RX de mão (idade óssea), RNM de crânio (tumores hipofisários). Causas: central (hipotálamo-hipofisária) vs periférica (suprarrenal, ovariana). Tratar: análogo de GnRH (central).',
    dica: 'Puberdade precoce central: LH estimulado elevado. Periférica: LH baixo mas esteroides elevados.',
    fraseParaPaciente: 'O desenvolvimento precoce merece investigação. Vou pedir exames para entender a causa.',
    categoria: 'Pediatria', dificuldade: 'Avançado', especialidade: 'Pediatria / Endocrinologia', tags: ['Puberdade Precoce', 'GnRH', 'Criança']
  },
  {
    id: 'fc108', frente: 'TDAH — critérios diagnósticos e abordagem?',
    verso: 'DSM-5: ≥6 sintomas de desatenção e/ou hiperatividade/impulsividade | Início <12 anos | Presente em ≥2 ambientes | Prejudica o funcionamento | >6 meses. Abordagem: avaliação multiaxial (escola, família, médico) | TCC + treinamento parental | Farmacoterapia: metilfenidato (6-12a) ou atomoxetina (não-estimulante).',
    dica: 'TDAH: diagnóstico clínico — não existe exame laboratorial ou de imagem confirmatório.',
    fraseParaPaciente: 'TDAH não é falta de inteligência ou preguiça. É uma diferença no funcionamento do cérebro que tem tratamento.',
    categoria: 'Pediatria', dificuldade: 'Intermediário', especialidade: 'Pediatria / Psiquiatria', tags: ['TDAH', 'DSM-5', 'Metilfenidato']
  },
  {
    id: 'fc109', frente: 'ANEMIA FERROPRIVA em lactente — diagnóstico e tratamento?',
    verso: 'Mais comum: 6-24 meses (esgotamento das reservas + alimentação deficiente em ferro). Hb <11 g/dL (6m-5a). Microcítica hipocrômica. Ferritina baixa + TIBC elevado. Tratamento: sulfato ferroso 3-5mg/kg/dia de ferro elementar por 3-6 meses. Prevenção: aleitamento materno + alimentação complementar rica em ferro + sulfato ferroso profilático em prematuros.',
    dica: 'Dar ferro junto com vitamina C (suco de laranja) — aumenta absorção. Não com leite (diminui absorção).',
    fraseParaPaciente: 'Seu filho está com anemia por falta de ferro. Vou prescrever gotas de ferro e orientar a alimentação.',
    categoria: 'Pediatria', dificuldade: 'Fundamental', especialidade: 'Pediatria / Hematologia', tags: ['Anemia', 'Ferro', 'Lactente']
  },
  {
    id: 'fc110', frente: 'Sinais de ALARME em RECÉM-NASCIDO (primeiras 24h)?',
    verso: 'Respiratório: FR>60, gemência, tiragem, cianose central, SpO2<90% | Cardiovascular: FC<100 ou >180 | Neurológico: convulsão, hipotonia, irritabilidade excessiva | Metabólico: hipoglicemia (<45mg/dL), hipotermia (<36,5°C) | Infeccioso: febre, letargia, má sucção | Icterícia precoce (<24h = patológica).',
    dica: 'Gemência em RN: sinal grave de esforço respiratório. Sempre avaliar SpO2 e radiografia de tórax.',
    fraseParaPaciente: 'Vamos monitorar o bebê de perto. Esses sinais precisam de avaliação imediata.',
    categoria: 'Pediatria', dificuldade: 'Avançado', especialidade: 'Neonatologia', tags: ['RN', 'Alarme', 'Neonatal']
  },

  // ─── MNEMÔNICOS CLÍNICOS ─────────────────────────────────────
  {
    id: 'fc111', frente: 'Mnemônico ABCDE do TRAUMA?',
    verso: 'A — Airway (via aérea + controle de coluna cervical) | B — Breathing (ventilação e oxigenação) | C — Circulation (controle de hemorragia, acesso venoso, ressuscitação) | D — Disability (nível de consciência: AVPU ou Glasgow) | E — Exposure (expor todo o corpo, controlar hipotermia).',
    dica: 'ATLS: A antes de B, B antes de C. Cada etapa só avança quando a anterior está controlada.',
    fraseParaPaciente: '(Para familiar) Estamos avaliando seu familiar da cabeça aos pés de forma sistematizada.',
    categoria: 'Mnemônicos', dificuldade: 'Fundamental', especialidade: 'Emergência / ATLS', tags: ['ABCDE', 'Trauma', 'ATLS']
  },
  {
    id: 'fc112', frente: 'Mnemônico AMPLE — anamnese rápida no trauma?',
    verso: 'A — Alergias | M — Medicamentos em uso | P — Passado médico (doenças, cirurgias) | L — Last meal (última refeição — para anestesia) | E — Events (mecanismo do trauma — como aconteceu).',
    dica: 'AMPLE em 60 segundos: informações essenciais para o trauma na emergência.',
    fraseParaPaciente: 'Preciso te fazer algumas perguntas rápidas sobre sua saúde antes de continuar o atendimento.',
    categoria: 'Mnemônicos', dificuldade: 'Fundamental', especialidade: 'Emergência / Trauma', tags: ['AMPLE', 'Anamnese', 'Trauma']
  },
  {
    id: 'fc113', frente: 'Causas reversíveis de PCR — 4H e 4T?',
    verso: '4H: Hipóxia | Hipotermia | Hipo/Hipercalemia (e outros eletrólitos) | Hipovolemia. 4T: Tensão (pneumotórax hipertensivo) | Tamponamento cardíaco | Trombose pulmonar (TEP) | Trombose coronariana (IAM). Tratar a causa durante a RCP.',
    dica: '4H e 4T: investigar e tratar DURANTE a RCP. A causa é o que define o prognóstico.',
    fraseParaPaciente: '(Para equipe) Vamos pensar nos 4H e 4T enquanto fazemos a RCP.',
    categoria: 'Mnemônicos', dificuldade: 'Fundamental', especialidade: 'Emergência / ACLS', tags: ['PCR', '4H4T', 'RCP']
  },
  {
    id: 'fc114', frente: 'Mnemônico OPQRST para avaliação da DOR?',
    verso: 'O — Onset (início: súbito ou gradual?) | P — Provoca/Pallia (o que melhora ou piora?) | Q — Quality (qualidade: aperto, queimação, facada?) | R — Radiation (irradia para onde?) | S — Severity (intensidade: 0-10) | T — Time (quando começou? é constante ou em cólica?).',
    dica: 'OPQRST: avaliação completa da dor em 30 segundos. Essencial no Revalida.',
    fraseParaPaciente: '"Vou te fazer algumas perguntas sobre sua dor para entender melhor."',
    categoria: 'Mnemônicos', dificuldade: 'Fundamental', especialidade: 'Geral / Revalida', tags: ['OPQRST', 'Dor', 'Anamnese']
  },
  {
    id: 'fc115', frente: 'Mnemônico SLUDGE — síndrome colinérgica (organofosforado)?',
    verso: 'S — Salivação excessiva | L — Lacrimejamento | U — Urinação involuntária | D — Defecação | G — GI (cólica, diarreia, náusea) | E — Emese (vômito). Além: miose, bradicardia, broncoespasmo, broncorreia. Tratamento: atropina (antagoniza acetilcolina).',
    dica: 'SLUDGE = excesso de acetilcolina (parassimpático exacerbado). Antagônico: atropina.',
    fraseParaPaciente: '(Para equipe) Síndrome colinérgica confirmada — iniciar atropina.',
    categoria: 'Mnemônicos', dificuldade: 'Intermediário', especialidade: 'Toxicologia', tags: ['SLUDGE', 'Organofosforado', 'Atropina']
  },
  {
    id: 'fc116', frente: 'Mnemônico CAGE — rastreamento de ALCOOLISMO?',
    verso: 'C — Cut down (já tentou reduzir o consumo?) | A — Annoyed (se incomoda quando criticam?) | G — Guilty (se sente culpado pelo consumo?) | E — Eye-opener (bebe logo ao acordar?). ≥2 positivos: suspeita forte de alcoolismo (sensibilidade 71-93%).',
    dica: 'CAGE positivo (≥2): encaminhar para avaliação especializada e iniciar abordagem motivacional.',
    fraseParaPaciente: '"Posso te fazer algumas perguntas sobre seu consumo de bebida? É uma parte da avaliação de rotina."',
    categoria: 'Mnemônicos', dificuldade: 'Fundamental', especialidade: 'Psiquiatria / APS', tags: ['CAGE', 'Alcoolismo', 'Triagem']
  },
  {
    id: 'fc117', frente: 'Mnemônico para TRÍADE de Charcot, Beck e Cushing?',
    verso: 'Tríade de Charcot (colangite): Febre + Icterícia + Dor em HCD | Tríade de Beck (tamponamento cardíaco): Hipotensão + Turgência jugular + Bulhas abafadas | Sinal de Cushing (hipertensão intracraniana): Hipertensão + Bradicardia + Respiração irregular (irregular/lenta).',
    dica: 'Tríade de Cushing: PA sobe, FC cai, respiração altera — resposta reflexa à HIC grave.',
    fraseParaPaciente: 'Esse exame me preocupa — vou pedir avaliação urgente.',
    categoria: 'Mnemônicos', dificuldade: 'Intermediário', especialidade: 'Geral / Urgência', tags: ['Tríade', 'Charcot', 'Beck', 'Cushing']
  },
  {
    id: 'fc118', frente: 'Mnemônico 6 Ps da ISQUEMIA AGUDA de membro?',
    verso: 'Pain (dor intensa e súbita) | Pallor (palidez) | Pulselessness (ausência de pulso distal) | Paresthesia (parestesia/dormência) | Paralysis (paralisia — sinal tardio e grave) | Poikilothermia (frialdade do membro). Conduta: anticoagulação imediata + cirurgia vascular urgente.',
    dica: 'Paralisia + Parestesia = isquemia grave com lesão neurológica. Janela: 6 horas.',
    fraseParaPaciente: 'Seu braço/perna está sem circulação. Precisamos de cirurgia urgente.',
    categoria: 'Mnemônicos', dificuldade: 'Intermediário', especialidade: 'Cirurgia Vascular', tags: ['Isquemia', '6Ps', 'Vascular']
  },
  {
    id: 'fc119', frente: 'Mnemônico STOP-BANG — rastreamento de APNEIA DO SONO?',
    verso: 'S — Snoring (ronco alto) | T — Tired (cansado mesmo dormindo) | O — Observed apneia (alguém observou parada respiratória?) | P — Pressure (hipertensão) | B — BMI >35 | A — Age >50 | N — Neck >40cm | G — Gender (masculino). ≥3 positivos: alto risco. Confirmar com polissonografia.',
    dica: 'STOP-BANG ≥5: alta probabilidade de SAOS grave. Encaminhar para polissonografia.',
    fraseParaPaciente: '"Você ronca muito? Já te disseram que para de respirar durante o sono?"',
    categoria: 'Mnemônicos', dificuldade: 'Intermediário', especialidade: 'Pneumologia / APS', tags: ['Apneia', 'STOP-BANG', 'Sono']
  },
  {
    id: 'fc120', frente: 'Mnemônico APGAR — avaliação neonatal?',
    verso: 'A — Appearance (cor): rosa=2, acrocianose=1, cianose=0 | P — Pulse (FC): >100=2, <100=1, ausente=0 | G — Grimace (reflexo): tosse=2, careta=1, ausente=0 | A — Activity (tônus): ativo=2, flexão=1, flácido=0 | R — Respiration: regular=2, lento=1, ausente=0. ≥7=normal; 4-6=comprometido; ≤3=grave.',
    dica: 'APGAR 1 min: decisão de reanimação. APGAR 5 min: resposta à reanimação e prognóstico.',
    fraseParaPaciente: 'Vamos avaliar o bebê logo ao nascer com um escore de vitalidade.',
    categoria: 'Mnemônicos', dificuldade: 'Fundamental', especialidade: 'Neonatologia', tags: ['APGAR', 'RN', 'Reanimação']
  },

  // ─── ESCALAS E CRITÉRIOS CLÍNICOS ────────────────────────────
  {
    id: 'fc121', frente: 'Escala de GLASGOW — como calcular?',
    verso: 'Abertura Ocular: espontânea=4, voz=3, dor=2, ausente=1 | Resposta Verbal: orientado=5, confuso=4, palavras=3, sons=2, ausente=1 | Resposta Motora: obedece=6, localiza=5, retirada=4, flexão=3, extensão=2, ausente=1. Máximo=15. TCE: leve 13-15 | moderado 9-12 | grave ≤8 (indicação de IOT).',
    dica: 'Glasgow ≤8: "intuba". Regra do polegar para TCE grave.',
    fraseParaPaciente: '(Para familiar) Estamos avaliando o nível de consciência do seu familiar.',
    categoria: 'Escalas e Critérios', dificuldade: 'Fundamental', especialidade: 'Neurologia / Emergência', tags: ['Glasgow', 'TCE', 'Consciência']
  },
  {
    id: 'fc122', frente: 'CURB-65 — gravidade da PNEUMONIA ADQUIRIDA NA COMUNIDADE?',
    verso: 'C — Confusão mental | U — Ureia >42 mg/dL | R — FR ≥30 irpm | B — BP: PAS<90 ou PAD≤60 | 65 — Idade ≥65 anos. Score 0-1: ambulatorial | Score 2: internação | Score ≥3: UTI/semi-intensivo. Alternativa mais simples: PSI (Pneumonia Severity Index).',
    dica: 'CURB-65 ≥3: UTI. CURB-65 0-1: tratar em casa com antibiótico oral.',
    fraseParaPaciente: 'Pela gravidade da sua pneumonia, vou precisar que o senhor fique internado.',
    categoria: 'Escalas e Critérios', dificuldade: 'Intermediário', especialidade: 'Pneumologia / Infectologia', tags: ['CURB-65', 'PAC', 'Pneumonia']
  },
  {
    id: 'fc123', frente: 'Score de WELLS para diagnóstico de TEP?',
    verso: 'Sinais/sintomas de TVP (+3) | Diagnóstico alternativo menos provável (+3) | FC>100 (+1,5) | Imobilização/cirurgia recente (+1,5) | TVP ou TEP prévio (+1,5) | Hemoptise (+1) | Neoplasia (+1). ≤4: baixa prob (D-dímero) | >4: alta prob (angiotomografia). Versão simplificada: ≤1=baixo; 2-6=moderado; >6=alto.',
    dica: 'Wells ≤4 + D-dímero negativo: TEP excluído sem TC. Wells >4: TC diretamente.',
    fraseParaPaciente: 'Vou pedir exames de sangue e uma tomografia para avaliar se há coágulo no pulmão.',
    categoria: 'Escalas e Critérios', dificuldade: 'Intermediário', especialidade: 'Pneumologia / Emergência', tags: ['Wells', 'TEP', 'D-dímero']
  },
  {
    id: 'fc124', frente: 'CHA₂DS₂-VASc — anticoagulação na FIBRILAÇÃO ATRIAL?',
    verso: 'C=ICC(1) H=HAS(1) A₂=Idade≥75(2) D=DM(1) S₂=AVC/AIT prévio(2) V=DCV(1) A=Idade 65-74(1) Sc=Sexo feminino(1). Score homem ≥2 (mulher ≥3): anticoagular (ACO). Score 1H/2M: avaliar individualmente. Score 0H/1M: não anticoagular. Preferir NOACs ao warfarin.',
    dica: 'AVC prévio = 2 pontos. Pesa mais que os outros fatores — sempre anticoagular se AVC prévio.',
    fraseParaPaciente: 'Sua arritmia cardíaca aumenta o risco de derrame. Precisamos de um anticoagulante.',
    categoria: 'Escalas e Critérios', dificuldade: 'Intermediário', especialidade: 'Cardiologia', tags: ['CHA2DS2', 'FA', 'Anticoagulação']
  },
  {
    id: 'fc125', frente: 'Score de ALVARADO — diagnóstico de APENDICITE?',
    verso: 'Migração dor para FID (+1) | Anorexia (+1) | Náusea/vômito (+1) | Dor em FID (+2) | Rebote (+1) | Temperatura >37,3°C (+1) | Leucocitose (+2) | Desvio à esquerda (+1). Score 1-4: baixa probabilidade | 5-6: possível | 7-10: alta probabilidade (cirurgia).',
    dica: 'Alvarado ≥7: alta probabilidade de apendicite → cirurgia. 4-6: US ou TC para confirmar.',
    fraseParaPaciente: 'Por seus sintomas e exames, a probabilidade de apendicite é alta. Vamos precisar de cirurgia.',
    categoria: 'Escalas e Critérios', dificuldade: 'Intermediário', especialidade: 'Cirurgia Geral', tags: ['Alvarado', 'Apendicite', 'Cirurgia']
  },
  {
    id: 'fc126', frente: 'Classificação KILLIP — gravidade de IC pós-IAM?',
    verso: 'I: sem sinais de IC (mortalidade 6%) | II: estertores em bases, 3ª bulha (mortalidade 17%) | III: EAP (estertores em >50% dos campos) (mortalidade 38%) | IV: choque cardiogênico, PA<90 + sinais de baixo débito (mortalidade 67-81%).',
    dica: 'Killip IV (choque cardiogênico pós-IAM): mortalidade >50% mesmo com ICP. Suporte mecânico.',
    fraseParaPaciente: 'Seu coração está com dificuldade de bombear sangue adequadamente. Precisamos de suporte intensivo.',
    categoria: 'Escalas e Critérios', dificuldade: 'Avançado', especialidade: 'Cardiologia / UTI', tags: ['Killip', 'IAM', 'IC']
  },
  {
    id: 'fc127', frente: 'Classificação de CHILD-PUGH — gravidade da HEPATOPATIA?',
    verso: 'Bilirrubina: <2 (1) / 2-3 (2) / >3 (3) | Albumina: >3,5 (1) / 2,8-3,5 (2) / <2,8 (3) | TP (INR): <1,7 (1) / 1,7-2,3 (2) / >2,3 (3) | Ascite: ausente (1) / leve (2) / moderada/grave (3) | Encefalopatia: ausente (1) / grau I-II (2) / grau III-IV (3). A=5-6, B=7-9, C=10-15.',
    dica: 'Child-Pugh C: mortalidade cirúrgica >80%. Contraindicação a cirurgias eletivas.',
    fraseParaPaciente: 'Sua doença no fígado está avançada. Vou discutir o tratamento com um especialista.',
    categoria: 'Escalas e Critérios', dificuldade: 'Avançado', especialidade: 'Gastroenterologia / Hepatologia', tags: ['Child-Pugh', 'Cirrose', 'Hepatopatia']
  },
  {
    id: 'fc128', frente: 'Classificação KDIGO da INSUFICIÊNCIA RENAL AGUDA?',
    verso: 'Estágio 1: Cr×1,5-1,9 basal ou aumento ≥0,3mg/dL em 48h | Estágio 2: Cr×2-2,9 basal ou diurese <0,5mL/kg/h por >12h | Estágio 3: Cr×3 basal ou Cr≥4mg/dL ou oligúria <12h ou anúria <6h ou TRS iniciada. Oligúria <0,5mL/kg/h por >6h = critério de IRA.',
    dica: 'IRA estágio 3: indicar diálise se: Acidose, Uremia, Resistência a diurético, Eletrólitos (AURE).',
    fraseParaPaciente: 'Seus rins não estão funcionando bem. Vamos monitorar e tratar para recuperá-los.',
    categoria: 'Escalas e Critérios', dificuldade: 'Avançado', especialidade: 'Nefrologia', tags: ['KDIGO', 'IRA', 'Diálise']
  },
  {
    id: 'fc129', frente: 'PHQ-9 — rastreamento de DEPRESSÃO?',
    verso: '9 perguntas sobre os últimos 14 dias (humor deprimido, anedonia, sono, energia, apetite, autoestima, concentração, psicomotricidade, pensamentos de morte). Pontuação: 0-4 ausente | 5-9 leve | 10-14 moderada | 15-19 mod-grave | 20-27 grave. PHQ-2: perguntas 1 e 2 (screening rápido).',
    dica: 'PHQ-2: 2 perguntas em 30 segundos para triagem. Se positivo (≥3), aplica PHQ-9 completo.',
    fraseParaPaciente: '"Vou te fazer algumas perguntas sobre como você tem se sentido nas últimas 2 semanas."',
    categoria: 'Escalas e Critérios', dificuldade: 'Fundamental', especialidade: 'Psiquiatria / APS', tags: ['PHQ-9', 'Depressão', 'Triagem']
  },
  {
    id: 'fc130', frente: 'MEEM (Mini Exame do Estado Mental) — avaliação cognitiva?',
    verso: 'Orientação temporal (5) + espacial (5) | Registro de 3 palavras (3) | Atenção/cálculo (5) | Evocação das 3 palavras (3) | Linguagem: nomear (2), repetir (1), 3 comandos (3), leitura (1), escrita (1) | Cópia de figura (1). Total: 30 pontos. Ponto de corte: 27 (>8a escolaridade), 22 (4-7a), 19 (<4a), 17 (analfabeto).',
    dica: 'MEEM: sensível para triagem mas não diagnóstico. Educação e cultura influenciam o resultado.',
    fraseParaPaciente: '"Vou te pedir para fazer algumas perguntas e tarefas simples para avaliar sua memória."',
    categoria: 'Escalas e Critérios', dificuldade: 'Intermediário', especialidade: 'Geriatria / Neurologia', tags: ['MEEM', 'Cognição', 'Demência']
  },

  // ─── CLÍNICA MÉDICA AVANÇADA ─────────────────────────────────
  {
    id: 'fc131', frente: 'Síndrome Nefrótica vs Síndrome Nefrítica — diferenças?',
    verso: 'Nefrótica: proteinúria >3,5g/24h + edema + hipoalbuminemia + hiperlipidemia + lipidúria. SEM hematúria/hipertensão significativas. Causas: LES, DM (glomeruloesclerose), amiloidose, nefropatia membranosa. Nefrítica: hematúria dismórfica + cilindrúria + hipertensão + oligúria + proteinúria leve. Causa: GNDA pós-estreptocócica.',
    dica: 'Nefrótica: proteína cai (edema e trombose). Nefrítica: inflamação (hematúria e HAS).',
    fraseParaPaciente: 'Vou pedir exames de urina e sangue para avaliar o funcionamento dos seus rins.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Nefrologia', tags: ['Nefrótica', 'Nefrítica', 'Glomérulo']
  },
  {
    id: 'fc132', frente: 'Peritonite Bacteriana Espontânea (PBE) — diagnóstico e tratamento?',
    verso: 'Diagnóstico: PMN ≥250/mm³ no líquido ascítico (paracentese). Cultura positiva em 40%. Clínica: febre + dor abdominal + piora da encefalopatia em cirrótico. Tratamento: cefotaxima 2g IV 8/8h ×5-7 dias + albumina 1,5g/kg no D1 e 1g/kg no D3 (reduz IRA). Profilaxia: norfloxacina 400mg/dia em cirrótico de risco.',
    dica: 'PMN ≥250: tratar SEM aguardar cultura. Albumina IV reduz mortalidade na PBE.',
    fraseParaPaciente: 'O líquido da barriga está infectado. Vou iniciar antibiótico e uma proteína especial.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Gastroenterologia / Infectologia', tags: ['PBE', 'Cirrose', 'Ascite']
  },
  {
    id: 'fc133', frente: 'Critérios diagnósticos de ARTRITE REUMATOIDE (ACR/EULAR 2010)?',
    verso: 'Necessário: sinovite clínica ≥1 articulação + ausência de diagnóstico alternativo. Critérios (pontuação ≥6 = AR): Articulações acometidas (1-10 grandes=1, 1-3 pequenas=2, 4-10 pequenas=3, >10=5) | Sorologias (FR/anti-CCP: baixo=2, alto=3) | Reagentes de fase aguda (PCR/VHS alto=1) | Duração ≥6 semanas (=1).',
    dica: 'Anti-CCP: mais específico para AR que FR. Prediz erosões e doença grave.',
    fraseParaPaciente: 'Seus exames e sintomas sugerem artrite reumatoide. Vou iniciar o tratamento para proteger suas articulações.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Reumatologia', tags: ['AR', 'Artrite', 'Anti-CCP']
  },
  {
    id: 'fc134', frente: 'Critérios de SLICC para LÚPUS (LES)?',
    verso: '≥4 de 11 critérios clínicos + imunológicos (sendo ≥1 clínico e ≥1 imunológico): Clínicos: rash malar, rash discoide, fotossensibilidade, úlceras orais, alopecia, artrite, serosite, renal, neurológico, hemolítico, leucopenia/trombocitopenia. Imunológicos: ANA, anti-dsDNA, anti-Sm, antifosfolipídio, complemento baixo, Coombs direto.',
    dica: 'ANA: sensível mas não específico (positivo em 95% do LES mas também em 10% da população normal).',
    fraseParaPaciente: 'Seus exames e sintomas apontam para lúpus. Vou encaminhar para um reumatologista.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Reumatologia', tags: ['LES', 'SLICC', 'ANA']
  },
  {
    id: 'fc135', frente: 'Quais exames para rastreamento de HIPOTIREOIDISMO?',
    verso: 'TSH: melhor exame de triagem (ultrassensível). TSH elevado + T4 livre baixo = hipotireoidismo primário. TSH elevado + T4 livre normal = hipotireoidismo subclínico. T4 livre baixo + TSH normal/baixo = hipotireoidismo central. Anti-TPO positivo em Hashimoto (causa mais comum). Tratar se TSH>10 ou sintomático.',
    dica: 'TSH: melhor exame porque é amplificado pelo eixo hipófise-tireoide. Mais sensível que T4.',
    fraseParaPaciente: 'Vou pedir exames da tireoide. TSH é o principal — indica se está funcionando bem.',
    categoria: 'Diagnóstico', dificuldade: 'Fundamental', especialidade: 'Endocrinologia / APS', tags: ['Hipotireoidismo', 'TSH', 'Hashimoto']
  },
  {
    id: 'fc136', frente: 'Diferencial de DISPNEIA AGUDA: IC vs TEP vs Pneumonia vs Asma?',
    verso: 'IC: ortopneia + edema + BNP elevado + RX com cefalização. TEP: taquicardia + hipóxia + D-dímero + angioTC. Pneumonia: febre + tosse + consolidação no RX + leucocitose. Asma: sibilância bilateral + história alérgica + melhora com broncodilatador. DPOC: tabagismo + hiperinsuflação + diminuição de MV.',
    dica: 'BNP <100 afasta IC. D-dímero negativo afasta TEP se probabilidade pré-teste baixa.',
    fraseParaPaciente: 'Para entender por que você está com falta de ar, precisarei de alguns exames específicos.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Clínica / Emergência', tags: ['Dispneia', 'Diferencial', 'IC', 'TEP']
  },
  {
    id: 'fc137', frente: 'Diagnóstico diferencial de DOR ABDOMINAL por QUADRANTE?',
    verso: 'FSD: colecistite, colelitíase, hepatite, abscesso hepático | FID: apendicite, ileíte, abscesso tubo-ovariano, gravidez ectópica, hérnia inguinal | FSE: esplenomegalia, infarto esplênico, pancreatite distal | FIE: diverticulite sigmoide, colite, neoplasia de cólon, torsão ovariana. Epigástrio: úlcera, pancreatite, IAM.',
    dica: 'Dor epigástrica que irradia para dorso + náusea: pancreatite até prova contrária.',
    fraseParaPaciente: 'A localização da dor me ajuda a pensar em diagnósticos específicos. Onde exatamente doi mais?',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Clínica / Cirurgia', tags: ['Dor Abdominal', 'Quadrante', 'Diferencial']
  },
  {
    id: 'fc138', frente: 'Investigação de HIPERTENSÃO SECUNDÁRIA?',
    verso: 'Suspeitar em: jovem, HAS refratária, hipocalemia espontânea, sopro abdominal, assimetria de pulsos. Causas: Hiperaldosteronismo primário (hipocalemia + HAS) — aldosterona/renina | Feocromocitoma (HAS paroxística + cefaleia/sudorese/palpitação) — metanefrinas urinárias | HAS renovascular (sopro) — angiotomografia renal | Síndrome de Cushing — cortisol.',
    dica: 'HAS + hipocalemia sem diurético = hiperaldosteronismo primário até prova contrária.',
    fraseParaPaciente: 'Sua pressão está difícil de controlar. Vou investigar se há uma causa específica.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Cardiologia / Endocrinologia', tags: ['HAS Secundária', 'Feocromocitoma', 'Aldosteronismo']
  },
  {
    id: 'fc139', frente: 'Quais exames para investigação de HEPATITE VIRAL?',
    verso: 'HBsAg: infecção ativa por HBV | Anti-HBs: imunidade | Anti-HBc IgM: infecção aguda | HBeAg: replicação viral ativa | HBV-DNA: carga viral | Anti-HCV: infecção por HCV (aguda ou crônica) | HCV-RNA: confirma viremia | Anti-HAV IgM: hepatite A aguda | Anti-HAV IgG: imunidade. Sempre pedir: TGO, TGP, FA, GGT, bilirrubinas, TP.',
    dica: 'HBsAg positivo + Anti-HBc IgM positivo = HBV agudo. Só HBsAg positivo = crônico.',
    fraseParaPaciente: 'Vou pedir exames específicos para ver qual vírus está afetando o seu fígado.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Infectologia / Gastroenterologia', tags: ['Hepatite', 'HBsAg', 'Anti-HCV']
  },
  {
    id: 'fc140', frente: 'Avaliação do EXAME DE URINA (EAS) — interpretação?',
    verso: 'Densidade: 1001-1030 (normal) | pH: 4,5-8 | Proteínas: ausentes | Glicose: ausente | Leucócitos: <5/campo | Hemácias: <2/campo | Nitritos: ausente (indica gram-negativo se positivo) | Cilindros: granulosos (lesão tubular), hemáticos (glomerulopatia), leucocitários (pielonefrite) | Bactérias: ausentes.',
    dica: 'Cilindro hemático no EAS = doença glomerular (glomerulonefrite) até prova contrária.',
    fraseParaPaciente: 'Vou interpretar o resultado do seu exame de urina agora.',
    categoria: 'Exames', dificuldade: 'Intermediário', especialidade: 'Clínica / Nefrologia', tags: ['EAS', 'Urina', 'Cilindro']
  },

  // ─── CONDUTA / URGÊNCIA (continuação) ───────────────────────
  {
    id: 'fc141', frente: 'Conduta no ACIDENTE OFÍDICO BOTRÓPICO (jararaca)?',
    verso: 'Não torneou, não incisou, não succionou. Lavar com água e sabão. Soro antibotrópico IV (dose conforme gravidade: leve=2-4 amp, moderado=4-8, grave=12+). Pré-medicar: anti-histamínico + adrenalina SC (anafilaxia). Monitorar coagulograma (CIVD) e função renal. CIATox: 0800 722 6001.',
    dica: 'Soro antiofídico: quanto mais rápido, melhor. Atua no veneno circulante, não no já fixado.',
    fraseParaPaciente: 'Vou aplicar o soro antiveneno agora. É o tratamento mais importante após picada de cobra.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Toxicologia / Emergência', tags: ['Ofídico', 'Jararaca', 'Antiveneno']
  },
  {
    id: 'fc142', frente: 'Conduta na SÍNDROME CORONARIANA AGUDA SEM SUPRA (NSTEMI/AI)?',
    verso: 'MONO-H: Morfina (dor refratária) + O2 (SpO2<94%) + Nitrato SL + AAS 300mg (imediato) + Heparina (enoxaparina ou HNF). Estratificação de risco: TIMI ou GRACE. Alto risco: clopidogrel 300mg + cateterismo em <24h. Baixo risco: trato clínico e estratifica com teste ergométrico.',
    dica: 'NSTEMI ≠ STEMI: no NSTEMI não há supra de ST — cateterismo não é sempre emergência imediata.',
    fraseParaPaciente: 'Você está com síndrome coronariana. Vou iniciar medicamentos agora e depois veremos se precisamos de cateterismo.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Cardiologia', tags: ['NSTEMI', 'SCA', 'Heparina']
  },
  {
    id: 'fc143', frente: 'Conduta na DISSECÇÃO DE AORTA?',
    verso: 'Tipo A (ascendente): CIRURGIA de emergência | Tipo B (descendente): clínico (controle da PA e FC). Medicação: labetalol IV (BB + alfa-bloqueio) — meta FC<60 + PAS<120 | Nitroprussiato se PA refratária (após BB). NUNCA usar vasodilatador sem BB (taquicardia piora a dissecção).',
    dica: 'Tipo A: cirurgia urgente. Tipo B: clínico. BB antes de vasodilatador — sempre.',
    fraseParaPaciente: 'O principal vaso do seu coração está com uma lesão grave. Precisamos de cirurgia urgente.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Cardiologia / Cirurgia', tags: ['Dissecção Aorta', 'Labetalol', 'Tipo A']
  },
  {
    id: 'fc144', frente: 'Conduta no PNEUMONIA GRAVE (UTIP ou UTI)?',
    verso: 'Critérios de UTI (ATS/IDSA): FR≥30 + PaO2/FiO2<250 + multilobar + confusão OU hipotensão + vasopressor + IRA + nível de consciência. ATB: beta-lactâmico (ceftriaxona ou ampicilina-sulbactam) + macrolídeo ou fluoroquinolona. Pseudomonas: piperacilina-tazobactam + quinolona. IOT se falência respiratória.',
    dica: 'Antipseudomonas: suspeitar em DPOC, bronquiectasia, uso recente de ATB, internação prévia.',
    fraseParaPaciente: 'Sua pneumonia está grave e precisaremos de internação na UTI com antibióticos fortes.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Pneumologia / UTI', tags: ['PAC', 'UTI', 'Pneumonia Grave']
  },
  {
    id: 'fc145', frente: 'Conduta na CEFALEIA EM SALVAS (cluster headache)?',
    verso: 'Crise aguda: O2 100% 7-10L/min por 15 min (eficaz em 70%) | Sumatriptana 6mg SC (mais eficaz). Profilaxia: verapamil 240-480mg/dia (1ª linha) | Lítio (2ª linha) | Prednisona (curto prazo para ponte). Diferencial: a pior dor que existe — unilateral, periorbitária, autonômica (lacrimejo, ptose, rinorreia).',
    dica: 'O2 100% é 1ª linha na crise de cluster. Mais eficaz e sem efeito adverso.',
    fraseParaPaciente: 'Essa é uma enxaqueca muito específica — vou dar oxigênio agora para aliviar a dor rapidamente.',
    categoria: 'Conduta por Situação', dificuldade: 'Intermediário', especialidade: 'Neurologia', tags: ['Cluster', 'Cefaleia', 'O2']
  },

  // ─── FARMACOLOGIA (continuação) ──────────────────────────────
  {
    id: 'fc146', frente: 'Quando usar NORADRENALINA vs ADRENALINA vs DOPAMINA?',
    verso: 'Noradrenalina: vasopressor 1ª linha no choque séptico e distributivo (alfa-1 dominante). Adrenalina: anafilaxia (alfa + beta + inotrópico) e PCR. Dopamina: choque com bradicardia associada (age no receptor dopaminérgico + beta em doses baixas). Dobutamina: IC com baixo débito (inotrópico beta-1, sem vasoconstrição).',
    dica: 'Séptico = noradrenalina. Anafilaxia = adrenalina. IC com baixo débito = dobutamina.',
    fraseParaPaciente: 'Vou usar um medicamento para manter sua pressão. É administrado na veia em dose controlada.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'UTI / Emergência', tags: ['Vasoativo', 'Noradrenalina', 'Choque']
  },
  {
    id: 'fc147', frente: 'Uso de BENZODIAZEPÍNICOS: indicações e riscos?',
    verso: 'Indicações: ansiedade aguda (curto prazo), convulsão (1ª linha), abstinência alcoólica, procedimentos, insônia grave (curto prazo), sedação. Riscos: dependência física e psicológica, tolerância, depressão respiratória (+ álcool), queda em idosos, declínio cognitivo. Retirada: gradual (nunca abrupta após >4 semanas).',
    dica: 'BZD em idoso: critério de Beers. Risco de queda + confusão + dependência. Evitar.',
    fraseParaPaciente: 'Esse remédio é para uso de curto prazo. Não devemos usar por mais de 4 semanas sem reavaliação.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Psiquiatria / Clínica', tags: ['BZD', 'Dependência', 'Idoso']
  },
  {
    id: 'fc148', frente: 'ISRS: uso, efeitos adversos e tempo de resposta?',
    verso: 'Indicações: depressão, TAG, TOC, TEPT, bulimia, pânico. Efeitos adversos: náusea (primeiras semanas), insônia, disfunção sexual, síndrome serotoninérgica (combinação com outros serotoninérgicos), síndrome de descontinuação (não suspender abruptamente). Latência: 2-4 semanas para resposta inicial, 6-8 semanas para resposta completa.',
    dica: 'ISRS: dizer ao paciente para esperar 2-4 semanas. Abandono precoce por "não fez efeito" é comum.',
    fraseParaPaciente: 'Esse remédio para depressão demora 2 a 4 semanas para fazer efeito. Não pare sem me avisar.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Psiquiatria', tags: ['ISRS', 'Depressão', 'Latência']
  },
  {
    id: 'fc149', frente: 'Quais medicamentos AUMENTAM o QT e risco de arritmia?',
    verso: 'ABCDE do QT longo: A-Antibióticos (azitromicina, fluoroquinolonas, metronidazol) | B-Bloqueadores não-seletivos (sotalol) | C-Cardíacos (amiodarona, quinidina, procainamida) | D-Domperidona, haloperidol, metadona | E-Eletrólitos (hipocalemia, hipomagnesemia). Risco de Torsades de Pointes.',
    dica: 'QTc >500ms: risco alto de Torsades. Corrigir eletrólitos e suspender drogas alargadoras do QT.',
    fraseParaPaciente: 'Vou verificar se os seus medicamentos podem afetar o ritmo do coração.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Cardiologia / Farmacologia', tags: ['QT Longo', 'Arritmia', 'Torsades']
  },
  {
    id: 'fc150', frente: 'Anticoagulantes orais: VARFARINA vs NOACs?',
    verso: 'Varfarina: monitorar INR (2-3 em FA; 2,5-3,5 em prótese mecânica). Muitas interações. Antídoto: vitamina K + CCP. NOACs (dabigatrana, rivaroxabana, apixabana): dose fixa, sem monitorização, menos interações. Contraindicados em: prótese valvar mecânica e estenose mitral grave. Antídoto: idarucizumab (dabigatrana), andexanet (Xa).',
    dica: 'NOACs: preferidos ao warfarin em FA não-valvar. Warfarin: obrigatório em prótese mecânica.',
    fraseParaPaciente: 'Esse anticoagulante vai prevenir coágulos. É muito importante tomar na hora certa e não parar sozinho.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Cardiologia / Hematologia', tags: ['Anticoagulante', 'Warfarina', 'NOAC']
  },

  // ─── GINECO-OBSTETRÍCIA / SAÚDE DA MULHER ───────────────────
  {
    id: 'fc151', frente: 'Diagnóstico e tratamento de INFECÇÕES VAGINAIS comuns?',
    verso: 'Candidíase: corrimento branco grumoso, prurido, sem odor, pH<4,5. Tto: fluconazol 150mg dose única VO ou nistatina vaginal. Vaginose bacteriana: corrimento cinza-esverdeado, odor de peixe, pH>4,5, clue cells. Tto: metronidazol 500mg 12/12h ×7d. Tricomoníase: corrimento amarelo-esverdeado, bolhoso. Tto: metronidazol 2g dose única (tratar parceiro).',
    dica: 'Vaginose: metronidazol. Candidíase: fluconazol. Tricomoníase: metronidazol dose única + parceiro.',
    fraseParaPaciente: 'O tipo de infecção vaginal que você tem é tratável. Vou prescrever o medicamento adequado.',
    categoria: 'Diagnóstico', dificuldade: 'Fundamental', especialidade: 'Ginecologia / APS', tags: ['Vaginose', 'Candidíase', 'Tricomoníase']
  },
  {
    id: 'fc152', frente: 'Diagnóstico e conduta no ABORTAMENTO (tipos)?',
    verso: 'Ameaça: colo fechado + BCF + sangramento leve → expectante. Em curso: colo aberto + embrião intrauterino → missoprostol ou curetagem. Inevitável: colo aberto + ausência de saco ou embrião morto → esvaziamento. Retido: embrião morto sem expulsão → missoprostol ou AMIU. Completo: todo tecido expulso → acompanhar.',
    dica: 'Em curso ≠ ameaça: em curso tem colo aberto. Diferenciar é essencial para a conduta.',
    fraseParaPaciente: 'Vou explicar o que está acontecendo e quais as opções de tratamento para sua situação.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Gineco-Obstetrícia', tags: ['Abortamento', 'Tipos', 'Colo']
  },
  {
    id: 'fc153', frente: 'MENOPAUSA — diagnóstico e quando indicar TH?',
    verso: 'Diagnóstico: 12 meses de amenorreia após a última menstruação (em geral 45-55 anos). Exames: FSH >40 mUI/mL + estradiol baixo. Sintomas: fogacho, ressecamento vaginal, alterações de humor, insônia. TH (Terapia Hormonal): indicada se sintomas intensos + <60 anos ou <10 anos de menopausa. Contraindicações: CA mama, CA endométrio, trombose, hepatopatia.',
    dica: 'TH: menor dose pelo menor tempo necessário. Rever a cada ano. Não usar em CA de mama.',
    fraseParaPaciente: 'Os sintomas da menopausa são reais. A terapia hormonal pode ajudar se não houver contraindicações.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Ginecologia / Endocrinologia', tags: ['Menopausa', 'FSH', 'TH']
  },
  {
    id: 'fc154', frente: 'SÍFILIS CONGÊNITA — diagnóstico e prevenção?',
    verso: 'Prevenção: VDRL no pré-natal (1T, 3T e no parto). Diagnóstico no RN: VDRL quantitativo no sangue periférico (não sangue do cordão). Sintomas: rinite, hepatoesplenomegalia, anemia, pseudoparalisia de Parrot, icterícia, lesões cutâneas. Tratamento: penicilina G cristalina 50.000 UI/kg IV a cada 12h ×10 dias.',
    dica: 'VDRL no parto: rastrear sífilis mesmo sem pré-natal. Tratar mãe e bebê simultaneamente.',
    fraseParaPaciente: 'Identificamos sífilis. Precisamos tratar você e verificar o bebê para evitar complicações.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Infectologia / Gineco-Obstetrícia', tags: ['Sífilis', 'Congênita', 'VDRL']
  },
  {
    id: 'fc155', frente: 'RASTREAMENTO DE DIABETES GESTACIONAL?',
    verso: 'Rastreio universal em 24-28 semanas: TOTG 75g (jejum, 1h e 2h). Diagnóstico: jejum ≥92 | 1h ≥180 | 2h ≥153 (ADA). Rastreio precoce no 1T (em risco): glicemia em jejum ≥126 = DM pré-gestacional; 92-125 = DMG precoce. Tratamento: dieta + exercício → insulina se não controlado (metformina: controverso).',
    dica: 'DMG: rastrear com TOTG 75g entre 24-28 semanas em TODAS as gestantes.',
    fraseParaPaciente: 'Vou pedir um exame de diabetes em torno da 26ª semana de gravidez — é rotina para todas as gestantes.',
    categoria: 'Exames por Sintoma', dificuldade: 'Fundamental', especialidade: 'Endocrinologia / Gineco-Obstetrícia', tags: ['DMG', 'TOTG', 'Gestação']
  },

  // ─── URGÊNCIAS ESPECIALIZADAS ─────────────────────────────────
  {
    id: 'fc156', frente: 'Conduta no TRAUMA OCULAR GRAVE?',
    verso: 'Proteger o olho (não pressionar — se globo aberto, usar capa protetora sem comprimir) | Não remover corpo estranho penetrante | Jejum + analgesia IV | TC de órbita | Oftalmologista urgente. Queimadura química: irrigação imediata com SF ou água por 20 min ANTES de qualquer outra medida.',
    dica: 'Queimadura ocular por álcali (cal, soda): mais grave que ácido (penetra mais fundo). Lavar IMEDIATAMENTE.',
    fraseParaPaciente: 'Não toque no olho. Vou protegê-lo e chamar um especialista urgente.',
    categoria: 'Conduta por Situação', dificuldade: 'Intermediário', especialidade: 'Oftalmologia / Emergência', tags: ['Trauma Ocular', 'Globo', 'Oftalmologia']
  },
  {
    id: 'fc157', frente: 'Abordagem da EPISTAXE (sangramento nasal)?',
    verso: 'Posição sentada inclinada para frente (evitar deglutir sangue) + comprimir as asas nasais por 10-15 min. Se não cede: tamponamento anterior com gaze embebida em lidocaína+adrenalina. Cauterização química (nitrato de prata). Posterior: tamponamento + hospitalizar + risco de aspiração. Investigar: HAS, anticoagulante, trombocitopenia.',
    dica: 'Epistaxe anterior (plexo de Kiesselbach): 90% dos casos, tratável localmente.',
    fraseParaPaciente: 'Incline a cabeça para frente e aperte o nariz por 10 minutos. Não incline para trás — pode engolir sangue.',
    categoria: 'Conduta por Situação', dificuldade: 'Fundamental', especialidade: 'ORL / Emergência', tags: ['Epistaxe', 'Tamponamento', 'ORL']
  },
  {
    id: 'fc158', frente: 'Conduta na CRISE FALCIFORME — Síndrome Torácica Aguda?',
    verso: 'STA: dor torácica + infiltrado novo no RX + febre em falcêmico. Gravíssima. Tratamento: O2 + hidratação + analgesia (morfina) + ATB (ceftriaxona + azitromicina — cobrir atípicos) + transfusão simples ou exsanguineotransfusão. Causa: infarto pulmonar + infecção. Mortalidade: 3%.',
    dica: 'STA: causa mais comum de morte em adultos com falcemia. Tratar como PAC grave + crise falciforme.',
    fraseParaPaciente: 'Essa complicação da anemia falciforme afeta os pulmões. Vou tratar com urgência.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Hematologia / Pneumologia', tags: ['STA', 'Falciforme', 'Crise']
  },
  {
    id: 'fc159', frente: 'Como interpretar GASOMETRIA ARTERIAL passo a passo?',
    verso: '1. pH: <7,35=acidose; >7,45=alcalose | 2. Ver CO2 (resp) e HCO3 (metab) | 3. O distúrbio primário é o que explica o pH | 4. Calcular compensação: Acidose metab: PCO2=1,5×HCO3+8±2 | Alcalose metab: PCO2=0,7×HCO3+21±2 | Acidose resp: HCO3 sobe 1 por 10 CO2 (agudo) ou 3,5 (crônico) | 5. Calcular anion gap se acidose metab.',
    dica: 'Anion gap = Na - (Cl + HCO3). Normal: 8-12. Elevado: MUDPI (Metanol, Uremia, DKA, Propileno, Isoniazida).',
    fraseParaPaciente: 'Esse exame do sangue analisa a respiração e o equilíbrio ácido-base do seu corpo.',
    categoria: 'Exames', dificuldade: 'Avançado', especialidade: 'Clínica / UTI', tags: ['Gasometria', 'pH', 'Anion Gap']
  },
  {
    id: 'fc160', frente: 'Diagnóstico de TUBERCULOSE — quando suspeitar e como confirmar?',
    verso: 'Suspeitar: tosse ≥3 semanas + emagrecimento + sudorese noturna + hemoptise. Confirmar: 3 escarros (1ª = baciloscopia; 2ª = cultura; 3ª = se negativos). TC tórax: lesões cavitadas em lóbulo superior. IGRA (Quantiferon): latência. Teste rápido molecular (TRM-TB): diagnóstico em 2h. PPD (Mantoux): triagem de latência.',
    dica: 'TRM-TB: 1ª linha para diagnóstico rápido. Resultado em 2 horas, detecta resistência à rifampicina.',
    fraseParaPaciente: 'Vou pedir um exame de escarro para pesquisar tuberculose. É importante tossir fundo na coleta.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Pneumologia / Infectologia', tags: ['Tuberculose', 'BAAR', 'TRM']
  },
  {
    id: 'fc161', frente: 'Tratamento da TUBERCULOSE — esquema básico?',
    verso: 'Esquema básico: RIPE ×6 meses. 2RIPE (2 meses): Rifampicina 10mg/kg + Isoniazida 5-10mg/kg + Pirazinamida 15-30mg/kg + Etambutol 15-25mg/kg. 4RI (4 meses): Rifampicina + Isoniazida. Efeitos adversos: R=hepatite; I=neuropatia periférica (dar B6) + hepatite; P=artralgia + hepatite; E=neurite óptica.',
    dica: 'Neuropatia por isoniazida: prevenir com vitamina B6 (piridoxina) 25mg/dia.',
    fraseParaPaciente: 'O tratamento dura 6 meses e não pode parar no meio. Todos os comprimidos devem ser tomados juntos.',
    categoria: 'Tratamento', dificuldade: 'Intermediário', especialidade: 'Pneumologia / Infectologia', tags: ['Tuberculose', 'RIPE', 'Tratamento']
  },
  {
    id: 'fc162', frente: 'Diagnóstico de HIV/AIDS — quando tratar e com que?',
    verso: 'Diagnóstico: 2 testes rápidos (TR1 + TR2 de fabricantes diferentes) OU Western Blot. Indicação de TARV: TODOS os pacientes HIV+, independente de CD4 (desde 2017 no Brasil). Esquema preferencial (Brasil/MS): tenofovir + lamivudina + dolutegravir (TLD) — 1 comprimido/dia. Profilaxia oportunistas: CD4<200=TMP-SMX; CD4<50=azitromicina (MAC).',
    dica: 'TLD (tenofovir+lamivudina+dolutegravir): 1 comprimido ao dia. Alta barreira genética, poucos efeitos.',
    fraseParaPaciente: 'O tratamento para HIV é 1 comprimido por dia. Com adesão, você pode ter vida completamente normal.',
    categoria: 'Tratamento', dificuldade: 'Intermediário', especialidade: 'Infectologia', tags: ['HIV', 'TARV', 'TLD']
  },
  {
    id: 'fc163', frente: 'Quais exames pedir na INVESTIGAÇÃO DE AVC?',
    verso: 'Urgentes: TC crânio s/contraste (excluir hemorrágico) + ECG (FA?) + glicemia + PA | Complementares: RNM DWI (lesão isquêmica precoce) | Angiotomografia (oclusão grande vaso?) | Ecocardiograma TT/TE (embolia?) | Holter 24h (FA paroxística?) | Coagulograma | Hemograma | Lipidograma | Sorologias (jovem: VDRL, HIV, antifosfolipídio).',
    dica: 'TC normal não exclui AVC isquêmico nas primeiras 6h. RNM DWI: lesão visível em minutos.',
    fraseParaPaciente: 'Vou pedir tomografia urgente para verificar se é AVC e qual o tipo, para decidir o tratamento.',
    categoria: 'Exames por Sintoma', dificuldade: 'Avançado', especialidade: 'Neurologia', tags: ['AVC', 'TC', 'RNM', 'ECG']
  },
  {
    id: 'fc164', frente: 'Abordagem ao PACIENTE IDOSO POLIMEDICADO — desprescrição?',
    verso: 'Critérios de Beers (medicamentos inapropriados em idosos): BZD, anticolinérgicos, relaxantes musculares, AINEs, antipsicóticos típicos, hipnóticos. Critérios STOPP-START. Processo de desprescrição: identificar medicamentos desnecessários → discutir com paciente → retirar gradualmente → monitorar. Polifarmácia: ≥5 medicamentos.',
    dica: 'Desprescrever é uma habilidade médica importante — interromper remédios desnecessários é tão importante quanto prescrever.',
    fraseParaPaciente: 'Vou revisar todos os seus remédios. Alguns podem ser desnecessários ou prejudiciais para você agora.',
    categoria: 'Tratamento', dificuldade: 'Intermediário', especialidade: 'Geriatria / APS', tags: ['Polifarmácia', 'Idoso', 'Beers']
  },
  {
    id: 'fc165', frente: 'Diagnóstico de PNEUMOTÓRAX ESPONTÂNEO PRIMÁRIO?',
    verso: 'Jovem alto e magro + dor pleurítica súbita + dispneia leve + MV ausente unilateral. RX tórax: linha pleural visível + ausência de trama pulmonar. Classificação: pequeno (<3cm) vs grande (≥3cm). Tratamento: pequeno/estável: observação | grande ou sintomático: drenagem (toracocentese ou dreno).',
    dica: 'Pneumotórax espontâneo: homem jovem + fumante + alto e magro. Bolha de enfisema subclinical.',
    fraseParaPaciente: 'O pulmão está com uma bolha de ar que o comprimiu. Vou fazer um procedimento para liberar esse ar.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Pneumologia', tags: ['Pneumotórax', 'Espontâneo', 'Dreno']
  },
  {
    id: 'fc166', frente: 'Critérios de RANSON — gravidade da PANCREATITE AGUDA?',
    verso: 'Na admissão: Idade>55 | Leucócitos>16.000 | Glicemia>200 | LDH>350 | TGO>250. Após 48h: Ht cai >10% | Ureia sobe >5 | Ca<8 | PaO2<60 | Déficit de base>4 | Sequestro líquido>6L. Score 0-2: leve; 3-4: moderada; ≥5: grave (mortalidade 15-25%). Alternativa: BISAP score (mais simples).',
    dica: 'Ranson ≥3: internar em UTI. Monitorar PA, diurese, Ca e hematócrito rigorosamente.',
    fraseParaPaciente: 'A inflamação do seu pâncreas é grave. Precisamos de monitoramento intensivo.',
    categoria: 'Escalas e Critérios', dificuldade: 'Avançado', especialidade: 'Gastroenterologia / Cirurgia', tags: ['Ranson', 'Pancreatite', 'Gravidade']
  },
  {
    id: 'fc167', frente: 'Diagnóstico e manejo de INSUFICIÊNCIA CARDÍACA CRÔNICA?',
    verso: 'Diagnóstico: clínica (dispneia, edema, ortopneia) + ECO (FEVE ≤40% = ICFEr; >50% = ICFEp) + BNP/NT-proBNP. Tratamento ICFEr: IECA + BB + espironolactona (3 pilares) + ISGLT-2 (4º pilar). Meta: reduzir mortalidade e hospitalização. ICFEp: controle de PA + FC + congestão.',
    dica: 'Quarteto mágico na ICFEr: IECA + BB + espironolactona + ISGLT-2. Reduz mortalidade em 30-40%.',
    fraseParaPaciente: 'Sua insuficiência cardíaca tem tratamento eficaz. Com esses 4 remédios, você ficará muito melhor.',
    categoria: 'Tratamento', dificuldade: 'Avançado', especialidade: 'Cardiologia', tags: ['IC', 'FEVE', 'IECA']
  },
  {
    id: 'fc168', frente: 'Diagnóstico de HIPERTIREOIDISMO — exames e tratamento?',
    verso: 'Diagnóstico: TSH baixo + T4 livre elevado. Causas: Graves (exoftalmia + bócio difuso + anticorpo TSI) | Bócio multinodular tóxico (idoso) | Adenoma tóxico. Tratamento: tionamidas (metimazol ou propiltiouracila) + betabloqueador (controle de FC). Definitivo: radioiodo (I¹³¹) ou cirurgia. Gestante: PTU no 1T, metimazol depois.',
    dica: 'Exoftalmia: específica da doença de Graves (anticorpos contra receptor do TSH + tecido orbital).',
    fraseParaPaciente: 'Sua tireoide está trabalhando demais. Vou dar medicamento para controlá-la.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Endocrinologia', tags: ['Hipertireoidismo', 'Graves', 'Metimazol']
  },
  {
    id: 'fc169', frente: 'Abordagem à DISLIPIDEMIA na APS?',
    verso: 'Rastrear: homens ≥35a, mulheres ≥45a (ou qualquer adulto com FRs). LDL-alvo: baixo risco <130 | intermediário <100 | alto risco <70 | muito alto risco <50. Tratamento: MEV (dieta, exercício) + estatina (1ª linha). Adicionar ezetimiba se alvo não atingido. Fibratos: hipertrigliceridemia grave (>500mg/dL).',
    dica: 'Estatina + fibrato: miopatia. Usar com cuidado e monitorar CK.',
    fraseParaPaciente: 'Seu colesterol está alto. Dieta e exercício são fundamentais, mas um remédio também pode ser necessário.',
    categoria: 'Tratamento', dificuldade: 'Fundamental', especialidade: 'Cardiologia / APS', tags: ['Dislipidemia', 'LDL', 'Estatina']
  },
  {
    id: 'fc170', frente: 'Como identificar e manejar RISCO SUICIDA?',
    verso: 'Fatores de risco: tentativa prévia (maior FR), depressão grave, psicose, abuso de substâncias, isolamento, plano elaborado. Avaliação: perguntar diretamente (não induz). SAD PERSONS score. Conduta: risco baixo = ambulatorial | médio = acompanhamento intensivo + retirar meios | alto = internação psiquiátrica involuntária. Notificar CAPS.',
    dica: 'Tentativa anterior: maior preditor de tentativa futura. Perguntar sobre histórico sempre.',
    fraseParaPaciente: '"Você está tendo pensamentos de se machucar ou de não querer mais estar aqui? Pode me contar."',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Psiquiatria / APS', tags: ['Suicídio', 'Risco', 'Avaliação']
  },

  // ─── ÚLTIMOS CARDS — INTEGRATIVOS E ÉTICA ───────────────────
  {
    id: 'fc171', frente: 'Quatro princípios da BIOÉTICA — aplicação clínica?',
    verso: 'Autonomia: respeitar decisão do paciente capaz | Beneficência: agir em benefício do paciente | Não-maleficência: primum non nocere (não causar dano) | Justiça: distribuição equitativa dos recursos. Conflitos: autonomia vs beneficência (paciente recusa tratamento que o beneficiaria). Autonomia prevalece se paciente capaz.',
    dica: 'Quando em conflito: autonomia (paciente capaz) + beneficência (paciente incapaz) prevalecem.',
    fraseParaPaciente: 'Vou te dar todas as informações para que você possa tomar a melhor decisão para você.',
    categoria: 'Comunicação', dificuldade: 'Fundamental', especialidade: 'Ética Médica', tags: ['Bioética', 'Autonomia', 'Princípios']
  },
  {
    id: 'fc172', frente: 'NOTIFICAÇÃO COMPULSÓRIA — quais doenças e como fazer?',
    verso: 'Notificação IMEDIATA (24h): meningite, dengue grave, sarampo, cólera, ébola, PA/influenza pandêmica, acidente rádio-nuclear. Notificação SEMANAL: tuberculose, sífilis, hepatites, hanseníase, leishmaniose, leptospirose, malária. Formulário: SINAN online. Responsabilidade do médico — não notificar é falta ética e legal.',
    dica: 'Violência doméstica, violência sexual e maus-tratos também são notificações compulsórias ao SINAN.',
    fraseParaPaciente: 'Sua doença requer que eu comunique ao serviço de saúde — é uma medida de proteção coletiva.',
    categoria: 'Prevenção', dificuldade: 'Fundamental', especialidade: 'Saúde Pública / APS', tags: ['Notificação', 'SINAN', 'Compulsória']
  },
  {
    id: 'fc173', frente: 'Como identificar SINAL DE KERNIG e BRUDZINSKI?',
    verso: 'Kernig: com paciente em decúbito dorsal, flexiona quadril e joelho a 90°; extensão do joelho causa dor e resistência = positivo (irritação meníngea). Brudzinski: flexão passiva do pescoço provoca flexão involuntária dos joelhos = positivo. Ambos: sensibilidade <50% mas especificidade >90% para meningite bacteriana.',
    dica: 'Kernig e Brudzinski positivos: meningite até prova contrária. Sensibilidade baixa — negativo não exclui.',
    fraseParaPaciente: 'Vou examinar seu pescoço e pernas para verificar se há sinais de inflamação no cérebro.',
    categoria: 'Diagnóstico', dificuldade: 'Fundamental', especialidade: 'Neurologia / Infectologia', tags: ['Kernig', 'Brudzinski', 'Meningite']
  },
  {
    id: 'fc174', frente: 'Diagnóstico diferencial de HIPOCALEMIA vs HIPERCALEMIA no ECG?',
    verso: 'Hipocalemia: onda U proeminente (após T) + T achatada + ST deprimido + QT longo + arritmias. Hipercalemia: T em tenda (apiculada) → QRS alargado → P ausente → senoidal → FV/assistolia. Correlação laboratorial: sintomas com K<3 ou K>5,5. Leve: sintomas musculares. Grave: arritmias.',
    dica: 'K alto: T em tenda (primeiro sinal). K muito alto: QRS alarga = perigo de morte.',
    fraseParaPaciente: 'Vou verificar o potássio do seu sangue e fazer um eletrocardiograma. O potássio afeta o coração.',
    categoria: 'Exames', dificuldade: 'Intermediário', especialidade: 'Cardiologia / Nefrologia', tags: ['Hipocalemia', 'Hipercalemia', 'ECG']
  },
  {
    id: 'fc175', frente: 'Indicações de TRANSFUSÃO DE HEMÁCIAS — quando transfundir?',
    verso: 'Hb <7 g/dL: transfundir em paciente estável. Hb <8 g/dL: transfundir em cardiopata, cirurgia de grande porte, UTI. Hb <10 g/dL: discutir individualmente (sintomático?). Sangramento ativo com instabilidade: transfundir independente de Hb. Meta: não transfundir para "normalizar" Hb — transfundir por sintoma ou risco.',
    dica: '"Liberal" vs "Restritiva": estratégia restritiva (Hb>7) é superior na maioria dos pacientes estáveis.',
    fraseParaPaciente: 'Sua hemoglobina está baixa e você está com sintomas. Vou indicar uma transfusão de sangue.',
    categoria: 'Tratamento', dificuldade: 'Intermediário', especialidade: 'Hematologia / Clínica', tags: ['Transfusão', 'Hemácias', 'Anemia']
  },
  {
    id: 'fc176', frente: 'Quais os critérios de INTERNAÇÃO EM UTI?',
    verso: 'Critérios objetivos: IOT ou VNI | Vasopressor | Monitorização invasiva (PAM, PVC, PIC) | SOFA ≥2 ou qSOFA ≥2 | Glasgow ≤8 | FR>35 ou <8 | SpO2<85% com O2 alto | Arritmia grave | Choque qualquer tipo. Critérios subjetivos: risco de deterioração iminente.',
    dica: 'UTI: paciente que precisa de monitoramento invasivo ou suporte de órgão que não pode ser feito na enfermaria.',
    fraseParaPaciente: '(Para familiar) Seu familiar precisa de cuidados intensivos para monitoramento rigoroso.',
    categoria: 'Escalas e Critérios', dificuldade: 'Avançado', especialidade: 'UTI / Emergência', tags: ['UTI', 'Critérios', 'Internação']
  },
  {
    id: 'fc177', frente: 'Interpretação de HEMOGRAMA COMPLETO — valores de alerta?',
    verso: 'Hb: homem<13 / mulher<12 = anemia. Leucócitos: <4.000=leucopenia | >11.000=leucocitose | >30.000 suspeitar leucemia. Plaquetas: <100.000=trombocitopenia | >450.000=trombocitose. Desvio à esquerda: formas jovens (bastões) = infecção bacteriana grave. Blastos: emergência hematológica.',
    dica: 'Blastos no hemograma + leucocitose muito alta: leucemia aguda. Internar urgente.',
    fraseParaPaciente: 'Vou explicar o que o exame de sangue mostrou sobre as células do seu organismo.',
    categoria: 'Exames', dificuldade: 'Fundamental', especialidade: 'Hematologia / Clínica', tags: ['Hemograma', 'Anemia', 'Leucemia']
  },
  {
    id: 'fc178', frente: 'Diagnóstico e tratamento de GOTA?',
    verso: 'Crise aguda: artrite monoarticular + hiperuricemia + cristais de urato (microscopia polarizada). Tto da crise: colchicina 1mg VO imediato + 0,5mg 1h depois OU AINE (indometacina) OU corticoide (se contraindicação). Tto preventivo: alopurinol (uricostático, preferido) ou febuxostate. Meta: ácido úrico <6 mg/dL.',
    dica: 'Colchicina: dose baixa (1+0,5mg) tão eficaz quanto alta dose, menos efeitos adversos.',
    fraseParaPaciente: 'Essa inflamação na articulação é gota. Vou dar medicamento para aliviar a crise agora e prevenir novas crises.',
    categoria: 'Tratamento', dificuldade: 'Intermediário', especialidade: 'Reumatologia', tags: ['Gota', 'Colchicina', 'Ácido Úrico']
  },
  {
    id: 'fc179', frente: 'Síndrome metabólica — critérios diagnósticos e tratamento?',
    verso: 'IDF/AHA: ≥3 de 5 critérios: Circunferência abdominal (H>102 / M>88) | Glicemia jejum ≥100 | TG≥150 | HDL baixo (H<40 / M<50) | PA≥130/85 ou em tto. Tratamento: mudança do estilo de vida (MEV) é pilar principal. MEV: perda de 5-10% do peso reduz todos os parâmetros.',
    dica: 'Síndrome metabólica: risco 2× para DCV e 5× para DM2. Foco em MEV, não em medicamentos isolados.',
    fraseParaPaciente: 'Você tem vários fatores que juntos aumentam risco de diabetes e coração. Mudança de hábitos é fundamental.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Endocrinologia / APS', tags: ['Síndrome Metabólica', 'MEV', 'Obesidade']
  },
  {
    id: 'fc180', frente: 'Diagnóstico e conduta na OBSTRUÇÃO BILIAR?',
    verso: 'Clínica: icterícia progressiva + colúria + acolia + prurido. Exames: bilirrubina direta elevada + FA/GGT muito altas (padrão colestático) + TGO/TGP pouco elevadas. US abdominal: dilatação de vias biliares. Causas: coledocolitíase (colangioscopia = CPRE) vs neoplasia (CA de pâncreas, via biliar). CPRM para planejamento.',
    dica: 'Padrão colestático: FA/GGT sobem mais que TGO/TGP (inverso da hepatite viral).',
    fraseParaPaciente: 'O canal do seu fígado para o intestino está bloqueado. Vou investigar a causa com exames de imagem.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Gastroenterologia / Cirurgia', tags: ['Obstrução Biliar', 'Colestase', 'CPRE']
  },
  {
    id: 'fc181', frente: 'ACLS — ritmos de PCR e sua conduta específica?',
    verso: 'Chocáveis: FV (fibrilação ventricular) e TV s/pulso → desfibrilar 200J + RCP + adrenalina 1mg IV 3-5min. Não chocáveis: Assistolia e AESP (atividade elétrica s/pulso) → RCP + adrenalina + tratar causa (4H4T). Amiodarona 300mg IV: FV/TV refratária. IOT: assíncrono com compressões.',
    dica: 'FV/TV: chocar. Assistolia/AESP: não chocar (não há corrente para sincronizar). Adrenalina em todos.',
    fraseParaPaciente: '(Para equipe) PCR confirmado — iniciar protocolo ACLS.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Emergência / ACLS', tags: ['PCR', 'FV', 'ACLS']
  },
  {
    id: 'fc182', frente: 'DERRAME PLEURAL — diagnóstico e critérios de Light?',
    verso: 'Diagnóstico: US tórax (detecção) + toracocentese diagnóstica. Critérios de Light (exsudato se ≥1): Proteína do líquido / Proteína sérica >0,5 | DHL do líquido / DHL sérico >0,6 | DHL líquido >2/3 do limite superior da DHL sérica. Exsudato: infecção, neoplasia, TB. Transudato: IC, cirrose, nefrótico.',
    dica: 'Transudato: tratar a doença de base. Exsudato: investigar infecção/neoplasia + drenar se grande.',
    fraseParaPaciente: 'Vou retirar um pouco de líquido do pulmão para analisar e também para melhorar sua respiração.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Pneumologia', tags: ['Derrame Pleural', 'Light', 'Toracocentese']
  },
  {
    id: 'fc183', frente: 'Classificação e manejo do CHOQUE?',
    verso: 'Hipovolêmico: hemorragia/desidratação → fluido IV + tratar causa. Distributivo: séptico/anafilático/neurogênico → vasopressor + ATB/adrenalina. Cardiogênico: IAM/tamponamento → inotrópico (dobutamina) + tratar causa. Obstrutivo: TEP/pneumotórax → desobstruir (trombólise/drenagem). Todos: O2 + acesso + monitorar lactato.',
    dica: 'Choque = hipoperfusão tecidual. PA baixa é um sinal tardio. Lactato >2 = hipoperfusão mesmo com PA normal.',
    fraseParaPaciente: '(Para familiar) O corpo do seu familiar não está recebendo sangue suficiente. Estamos tratando a causa.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'UTI / Emergência', tags: ['Choque', 'Tipos', 'Lactato']
  },
  {
    id: 'fc184', frente: 'Conduta na ASMA NA GESTAÇÃO — é seguro tratar?',
    verso: 'SIM — asma não tratada é mais perigosa que o tratamento para o feto. Medicamentos seguros: salbutamol (alívio), budesonida (controle), montelucaste. SEGUROS na gestação. Evitar: altas doses de corticoide sistêmico no 1T (risco de fenda palatina). Controlar: SpO2 ≥95% na gestante asmática.',
    dica: 'Asma mal controlada na gestação: prematuridade + RCIU + mortalidade perinatal. Tratar adequadamente.',
    fraseParaPaciente: 'Tratar sua asma durante a gravidez é muito importante para você e para o bebê. Os medicamentos são seguros.',
    categoria: 'Tratamento', dificuldade: 'Intermediário', especialidade: 'Pneumologia / Gineco-Obstetrícia', tags: ['Asma', 'Gestação', 'Salbutamol']
  },
  {
    id: 'fc185', frente: 'Diagnóstico de DOENÇA CELÍACA — quando suspeitar e confirmar?',
    verso: 'Suspeitar: diarreia crônica + emagrecimento + anemia ferropriva refratária + distensão + meteorismo. Mais: osteoporose jovem, infertilidade, dermatite herpetiforme. Exames: anti-transglutaminase IgA (maior sensibilidade) + IgA total (excluir deficiência). Confirmar: biópsia duodenal (atrofia vilositária). Tratamento: dieta sem glúten pelo resto da vida.',
    dica: 'Deficiência de IgA (10% dos celíacos) falsa-negativos no anti-tTG. Dosar IgA total sempre.',
    fraseParaPaciente: 'Suspeito de intolerância ao glúten. Vou pedir exame de sangue e, se confirmado, endoscopia.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Gastroenterologia', tags: ['Celíaca', 'Glúten', 'Anti-tTG']
  },
  {
    id: 'fc186', frente: 'DPOC — diagnóstico, classificação e tratamento?',
    verso: 'Diagnóstico: espirometria pós-broncodilatador VEF1/CVF <0,70. Classificação GOLD: leve (VEF1≥80%), moderado (50-79%), grave (30-49%), muito grave (<30%). Tratamento: cessação do tabagismo (mais importante) | LABA+LAMA (broncodilatadores long-acting) | ICS se exacerbações frequentes | Reabilitação pulmonar | O2 domiciliar se PaO2<55mmHg.',
    dica: 'O2 domiciliar em DPOC: indicado se PaO2≤55mmHg. Reduz mortalidade e internações.',
    fraseParaPaciente: 'Parar de fumar é o único tratamento que realmente muda o curso da sua doença pulmonar.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Pneumologia', tags: ['DPOC', 'GOLD', 'Espirometria']
  },
  {
    id: 'fc187', frente: 'INSÔNIA — abordagem e tratamento na APS?',
    verso: 'Avaliar: duração, padrão, higiene do sono, depressão/ansiedade, apneia. Não farmacológico (1ª linha): Terapia Cognitivo-Comportamental para insônia (TCC-I) + higiene do sono. Farmacológico (curto prazo): melatonina, trazodona, doxepina. Evitar: BZD crônicos (dependência + piora cognitiva em idosos). Zolpidem: curto prazo apenas.',
    dica: 'TCC-I é mais eficaz que hipnóticos a longo prazo. É a intervenção de escolha para insônia crônica.',
    fraseParaPaciente: 'Antes de remédio para dormir, vou te ensinar técnicas que funcionam melhor e sem dependência.',
    categoria: 'Tratamento', dificuldade: 'Fundamental', especialidade: 'Psiquiatria / APS', tags: ['Insônia', 'TCC-I', 'Higiene do Sono']
  },
  {
    id: 'fc188', frente: 'Diagnóstico de INFECÇÃO DO TRATO URINÁRIO (ITU)?',
    verso: 'Cistite: disúria + polaciúria + urgência (sem febre/dor lombar). EAS: leucocitúria + nitritos. Tto: nitrofurantoína 100mg SR 12/12h ×5d ou fosfomicina 3g dose única. Pielonefrite: cistite + febre >38 + dor lombar + calafrios. Tto: ceftriaxona IV (internada) ou ciprofloxacina VO. ITU recorrente: profilaxia antibiótica ou uso pós-coito.',
    dica: 'EAS com leucocitúria sem nitritos: pode ser ITU por Enterococcus (não produz nitratos).',
    fraseParaPaciente: 'A infecção na bexiga tem tratamento simples com antibiótico. Tome muito líquido também.',
    categoria: 'Diagnóstico', dificuldade: 'Fundamental', especialidade: 'Infectologia / APS', tags: ['ITU', 'Cistite', 'Pielonefrite']
  },
  {
    id: 'fc189', frente: 'Conduta no TRAUMA CRANIOENCEFÁLICO MODERADO/GRAVE?',
    verso: 'GCS 9-12 = moderado | ≤8 = grave (IOT imediata). Protocolo: ABCDE + TC crânio urgente | Manter PA sistólica ≥110mmHg (hipotensão piora) | SpO2 ≥94% | NÃO hiperventilar (PCO2 35-45) | Cabeceira 30° | Monitorar pressão intracraniana (PIC) | Manitol ou solução hipertônica se HIC | Neurocirurgião.',
    dica: 'TCE grave: evitar hipoxia E hipotensão — cada episódio de SBP<90 aumenta mortalidade em 2×.',
    fraseParaPaciente: '(Para familiar) Estamos cuidando do cérebro do seu familiar. A pressão dentro da cabeça precisa ser controlada.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Neurologia / Emergência', tags: ['TCE', 'Glasgow', 'PIC']
  },
  {
    id: 'fc190', frente: 'Diagnóstico de HIPERALDOSTERONISMO PRIMÁRIO?',
    verso: 'Suspeitar: HAS + hipocalemia espontânea (ou fácil com diurético) + incidentaloma suprarrenal. Triagem: relação Aldosterona/Renina (ARR) >30 (com aldosterona elevada). Confirmar: teste de supressão salina. Localizar: TC suprarrenais. Causa: adenoma unilateral (cirurgia) vs hiperplasia bilateral (espironolactona). Síndrome de Conn = adenoma produtor.',
    dica: 'HPA é causa corrigível de HAS — em 10% dos hipertensos resistentes. Rastrear ativamente.',
    fraseParaPaciente: 'Seu problema de pressão pode ter uma causa específica na glândula suprarrenal. Vou investigar.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Endocrinologia', tags: ['Hiperaldosteronismo', 'HAS Secundária', 'Espironolactona']
  },
  {
    id: 'fc191', frente: 'Quais exames na FEBRE DE ORIGEM OBSCURA (FOO)?',
    verso: 'FOO clássica: febre >38,3°C por >3 semanas sem diagnóstico após investigação inicial em internação. Investigar: Hemograma + VHS/PCR | Hemoculturas (×3) | Sorologias (CMV, EBV, HIV, Brucella, Coxiella) | PPD + IGRA | ANA, ANCA, FR | TC tórax-abdome-pelve | PET-CT (melhor imagem para FOO) | Biópsia guiada por imagem.',
    dica: 'PET-CT: melhor exame de imagem em FOO — detecta atividade metabólica (infecção, tumor, vasculite).',
    fraseParaPaciente: 'Estamos investigando a causa da sua febre prolongada com exames especializados.',
    categoria: 'Exames por Sintoma', dificuldade: 'Avançado', especialidade: 'Clínica / Infectologia', tags: ['FOO', 'Febre', 'PET-CT']
  },
  {
    id: 'fc192', frente: 'Como calcular e interpretar o ÍNDICE TORNOZELO-BRAQUIAL (ITB)?',
    verso: 'ITB = PA sistólica no tornozelo / PA sistólica no braço (maior). Normal: 1,0-1,4 | Limítrofe: 0,9-1,0 | Leve: 0,7-0,9 (claudicação) | Moderado: 0,4-0,7 (dor em repouso) | Grave: <0,4 (isquemia crítica). ITB>1,4: calcificação arterial (DM/IRC). Indicação: suspeita de DAP em claudicação.',
    dica: 'ITB <0,9: doença arterial periférica confirmada. Risco CV elevado — investigar DAP coronariana e cerebral.',
    fraseParaPaciente: 'Vou medir a pressão nas suas pernas e nos braços para ver se as artérias estão funcionando bem.',
    categoria: 'Exames', dificuldade: 'Intermediário', especialidade: 'Angiologia / Cardiologia', tags: ['ITB', 'DAP', 'Claudicação']
  },
  {
    id: 'fc193', frente: 'Diagnóstico de SÍNDROME DO INTESTINO IRRITÁVEL (SII)?',
    verso: 'Critérios de Roma IV: dor abdominal recorrente ≥1 dia/semana nos últimos 3 meses, associada a ≥2: 1) relacionada à defecação; 2) mudança na frequência das fezes; 3) mudança na forma/consistência (Bristol). Ausência de alarme: sem sangue, sem emagrecimento, sem febre, sem histórico familiar de CC/DII. Tratamento: dieta low-FODMAP + tratamento sintomático.',
    dica: 'SII: diagnóstico clínico. Alarmes demandam colonoscopia. Sem alarme: não investigar extensamente.',
    fraseParaPaciente: 'Seus sintomas intestinais têm um padrão funcional. Vou orientar dieta específica e tratamento para alívio.',
    categoria: 'Diagnóstico', dificuldade: 'Intermediário', especialidade: 'Gastroenterologia / APS', tags: ['SII', 'Roma IV', 'Cólon']
  },
  {
    id: 'fc194', frente: 'DOENÇAS AUTOIMUNES — como rastrear com ANA?',
    verso: 'ANA (anticorpo antinuclear): triagem para doenças autoimunes. Positivo em: LES (95%), esclerodermia (90%), síndrome de Sjögren (80%), AR (50-80%), hepatite autoimune, tireoidite, polimiosite. Negativo: exclui LES com alta probabilidade. Padrão importa: homogêneo (LES), nucleolar (esclerodermia), pontilhado (Sjögren, LES).',
    dica: 'ANA positivo sozinho não é diagnóstico. 10% da população saudável tem ANA positivo em baixos títulos.',
    fraseParaPaciente: 'Vou pedir um exame para investigar se seu sistema imunológico está atacando o próprio corpo.',
    categoria: 'Exames por Sintoma', dificuldade: 'Intermediário', especialidade: 'Reumatologia', tags: ['ANA', 'Autoimune', 'LES']
  },
  {
    id: 'fc195', frente: 'Conduta em REANIMAÇÃO NEONATAL na sala de parto?',
    verso: 'Passos iniciais (30s): aquecimento + posicionamento + aspiração (se necessário) + estimulação. Se FR<100 ou apneia: VPP com BVM (21% O2 inicialmente, 40-60 irpm). Se FC<60 após 30s de VPP adequada: compressões cardíacas 3:1. Se FC<60 após 45-60s: adrenalina 0,01-0,03 mg/kg EV/IO.',
    dica: 'Reanimação neonatal: sequência A-B-C (via aérea → respiração → circulação). Maioria responde à VPP.',
    fraseParaPaciente: '(Para a mãe) Estamos cuidando do seu bebê agora para ajudá-lo a respirar.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Neonatologia', tags: ['Reanimação Neonatal', 'VPP', 'ACLS Pediátrico']
  },
  {
    id: 'fc196', frente: 'Cuidados PALIATIVOS — quando indicar e o que é?',
    verso: 'Definição OMS: abordagem que melhora QV do paciente com doença grave, controlando sintomas (dor, dispneia, náusea) e apoiando família. Indicar em: doenças oncológicas avançadas, IC refratária, DPOC grave, demência avançada, ELA. NÃO é desistir — é cuidar bem. Ortotanásia ≠ eutanásia. Diretiva antecipada de vontade (DAV): documento legal.',
    dica: 'Paliativo não é o mesmo que terminal. Pode ser combinado com tratamento curativo em fase avançada.',
    fraseParaPaciente: 'Cuidado paliativo não significa desistir. É garantir a melhor qualidade de vida possível nesse momento.',
    categoria: 'Comunicação', dificuldade: 'Avançado', especialidade: 'Clínica / Oncologia / Ética', tags: ['Paliativo', 'QV', 'Ortotanásia']
  },
  {
    id: 'fc197', frente: 'Como calcular o RISCO CIRÚRGICO CARDIOVASCULAR?',
    verso: 'Índice de Goldman (RCRI): 1) IC | 2) DCV isquêmica ativa | 3) Creatinina>2 | 4) DM insulino-dep. | 5) Cirurgia de alto risco (intraperitoneal, intratorácica, supraaórtica) | 6) AVC. 0-1: baixo risco | 2: intermediário (2-6%) | ≥3: alto risco (>6%). Estratégias: otimizar condições clínicas | Ecocardiograma | Teste de esforço.',
    dica: 'Cirurgia de urgência: não há como adiar para otimização — minimizar risco intraoperatório.',
    fraseParaPaciente: 'Antes da cirurgia, avaliamos o risco para o coração. Seus resultados ajudam a planejar o procedimento.',
    categoria: 'Escalas e Critérios', dificuldade: 'Avançado', especialidade: 'Cardiologia / Cirurgia', tags: ['Risco Cirúrgico', 'RCRI', 'Goldman']
  },
  {
    id: 'fc198', frente: 'Diagnóstico de FEOCROMOCITOMA?',
    verso: 'Suspeitar: HAS paroxística + "5P" (Pressão alta, Palpitação, Perspiration/sudorese, Pallor, Pain/cefaleia). Triagem: metanefrinas plasmáticas (mais sensível) ou urinárias 24h. Confirmar: TC/RNM suprarrenais. Cirurgia: preparo obrigatório com alfa-bloqueio (fenoxibenzamina 10-14 dias) ANTES do beta-bloqueio (senão crise hipertensiva).',
    dica: 'Alfa antes de beta em feocromocitoma — regra absoluta. Beta-bloqueio isolado pode precipitar crise hipertensiva.',
    fraseParaPaciente: 'Seus sintomas sugerem um tumor na glândula suprarrenal. Vamos confirmar com exames de sangue e imagem.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Endocrinologia / Cirurgia', tags: ['Feocromocitoma', 'Metanefrinas', 'HAS Paroxística']
  },
  {
    id: 'fc199', frente: 'Conduta na SÍNDROME DA VEIA CAVA SUPERIOR (emergência oncológica)?',
    verso: 'Causas: neoplasia (75% — pulmão, linfoma) > trombose por cateter. Clínica: edema em "pescoço" + cianose facial + distensão jugular + dispneia + cefaleia + ortopneia. Emergência se: estridor + confusão + edema laringe. Conduta: O2 + cabeceira elevada + corticoide (dexametasona) + radioterapia urgente ou stent. Diagnóstico: TC tórax com contraste.',
    dica: 'Estridor em SVCS: estridoral de alta ameaça — vias aéreas comprometidas. IOT/traqueostomia.',
    fraseParaPaciente: 'A veia grande que retorna sangue ao coração está sendo comprimida. Precisamos agir rapidamente.',
    categoria: 'Conduta por Situação', dificuldade: 'Avançado', especialidade: 'Oncologia / Emergência', tags: ['SVCS', 'Oncologia', 'Emergência']
  },
  {
    id: 'fc200', frente: 'RACIOCÍNIO CLÍNICO — Como construir um diagnóstico diferencial?',
    verso: '1) Identificar o problema principal (queixa central + achados-chave) | 2) Gerar diagnósticos por: Prevalência (mais comum) + Gravidade (não perder) + Tratável (não perder) | 3) Ordenar: "Killer first" (grave primeiro) | 4) Solicitar exames que confirmem ou excluam | 5) Manter mente aberta para diagnosticado errado | 6) Atualizar com novos dados.',
    dica: '"Diagnóstico errado mais perigoso": sempre perguntar — "O que me preocuparia mais não ter diagnosticado?"',
    fraseParaPaciente: 'Vou te explicar o que estou pensando em relação ao diagnóstico e como chegaremos à resposta.',
    categoria: 'Diagnóstico', dificuldade: 'Avançado', especialidade: 'Clínica Geral', tags: ['Raciocínio Clínico', 'Diagnóstico', 'Diferencial']
  },

  // ─── FARMACOLOGIA ─────────────────────────────────────────────
  {
    id: 'fc201', frente: 'Qual o mecanismo e principal indicação da Metformina?',
    verso: 'Mecanismo: Ativa AMPK → ↓ gliconeogênese hepática + ↑ sensibilidade à insulina. Indicação: DM tipo 2 (1ª linha). NÃO causa hipoglicemia em monoterapia. Contraindicada: ClCr <30 mL/min e antes de contraste iodado IV.',
    dica: 'Metformina = 1ª linha no DM2 independente do peso. Suspender 48h antes de contraste iodado.',
    fraseParaPaciente: 'Este remédio ajuda seu organismo a usar melhor a insulina que você já produz. Tome sempre com as refeições.',
    categoria: 'Farmacologia', dificuldade: 'Fundamental', especialidade: 'Endocrinologia', tags: ['DM', 'Metformina', 'Antidiabético']
  },
  {
    id: 'fc202', frente: 'Quais os efeitos adversos mais importantes do Ciprofloxacino?',
    verso: 'Black box: Tendinite + ruptura de tendão de Aquiles (risco ↑ com corticoide + idosos) | Neuropatia periférica | QT longo. Interação crítica: antiácidos com Fe/Al/Mg ↓ absorção — tomar 2h antes. Evitar em <18 anos e grávidas.',
    dica: 'Quinolona + corticoide + idoso = tendão de Aquiles. Sempre alertar.',
    fraseParaPaciente: 'Evite antiácidos, leite e suplementos de ferro enquanto usa este antibiótico. Pare e me avise se sentir dor no tendão.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Infectologia', tags: ['Quinolona', 'Ciprofloxacino', 'Antibiótico']
  },
  {
    id: 'fc203', frente: 'Como usar a Enoxaparina para tratamento de TVP/TEP?',
    verso: 'Dose terapêutica: 1 mg/kg SC 12/12h OU 1,5 mg/kg SC 1×/dia. Monitorar Anti-Xa se obeso, grávida ou IR. Plaquetas a cada 2-3 dias (TIH). Antídoto: Protamina (reverte ~60%). Ajustar se ClCr <30 mL/min.',
    dica: 'Enoxaparina NÃO precisa de TTPa — diferença da HNF. Anti-Xa só em casos especiais.',
    fraseParaPaciente: 'Vou ensinar como aplicar esta injeção na barriga. É importante não esquecer nenhuma dose.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Hematologia', tags: ['Anticoagulante', 'Enoxaparina', 'TVP', 'TEP']
  },
  {
    id: 'fc204', frente: 'Qual a dose e indicação da Dexametasona na Meningite Bacteriana?',
    verso: '0,15 mg/kg IV 6/6h × 4 dias. INICIAR ANTES ou junto com o ATB. Reduz sequelas auditivas (especialmente H. influenzae e Pneumococcus). Meningococo: benefício menor mas não prejudica.',
    dica: 'Dexametasona na meningite: ANTES do ATB se possível. Se ATB já iniciado há >1h: não iniciar mais.',
    fraseParaPaciente: 'Estou dando um remédio anti-inflamatório junto com o antibiótico para proteger seu sistema nervoso.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Infectologia / Neurologia', tags: ['Dexametasona', 'Meningite', 'Corticoide']
  },
  {
    id: 'fc205', frente: 'Qual o risco do Omeprazol com Clopidogrel?',
    verso: 'Omeprazol inibe CYP2C19 → ↓ ativação do Clopidogrel → ↓ efeito antiplaquetário → ↑ risco de eventos cardiovasculares. Solução: usar Pantoprazol (menor interação com CYP2C19) quando IBP for necessário com Clopidogrel.',
    dica: 'Clopidogrel + IBP: preferir PANTOPRAZOL. Nunca prescrever omeprazol sem pensar nessa interação.',
    fraseParaPaciente: 'Troquei o protetor gástrico por um que não interfere no seu remédio para o coração.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Cardiologia', tags: ['Omeprazol', 'Clopidogrel', 'Interação', 'IBP']
  },
  {
    id: 'fc206', frente: 'Quais as indicações e doses de Salbutamol na Emergência?',
    verso: 'Asma aguda: 2,5-5 mg nebulização a cada 20 min x 3 (ou 4-8 jatos com espaçador). Hipercalemia grave: 10-20 mg nebulizado (desloca K para intracelular — efeito transitório 30-60 min). Sempre associar tratamento definitivo.',
    dica: 'Salbutamol em alta dose nebulizado = adjuvante na hipercalemia. NÃO substitui Ca2+ nem diálise.',
    fraseParaPaciente: 'Esta inalação vai abrir os brônquios rapidamente. Respire fundo e devagar durante a nebulização.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Emergência / Pneumologia', tags: ['Salbutamol', 'Asma', 'Hipercalemia', 'Broncodilatador']
  },
  {
    id: 'fc207', frente: 'Quando usar Morfina e como reverter sua toxicidade?',
    verso: 'Indicações: dor aguda grave, dor oncológica, EAP (vasodilata e reduz pré-carga). Toxicidade: miose puntiforme + depressão respiratória + nível de consciência baixo = tríade. Antídoto: Naloxona 0,4 mg IV (titular 0,04-0,1 mg a cada 2 min). Sempre prescrevir LAXANTE junto.',
    dica: 'Miose + bradipneia + sonolência = opiácea. Naloxona: não reverter abruptamente — causa dor severa.',
    fraseParaPaciente: 'Este remédio é muito eficaz para a dor, mas pode causar sonolência e prisão de ventre. Vou dar um laxante também.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Emergência / Analgesia', tags: ['Morfina', 'Opioide', 'Naloxona', 'Dor']
  },
  {
    id: 'fc208', frente: 'Como tomar Levotiroxina corretamente?',
    verso: 'Tomar em JEJUM, 30-60 min antes do café da manhã. Absorção reduz 30-40% com alimentos, Ca2+, Fe, antiácidos. Dose inicial em idosos/cardiopatas: 25 mcg/dia (evitar angina). Monitorar TSH a cada 6-8 semanas até estabilização.',
    dica: 'Levotiroxina sempre em jejum. Soja, ferro, cálcio = inimigos da absorção. Ajuste lento em idosos.',
    fraseParaPaciente: 'Tome este comprimido todo dia pela manhã em jejum, pelo menos 30 minutos antes do café. É para sempre.',
    categoria: 'Farmacologia', dificuldade: 'Fundamental', especialidade: 'Endocrinologia', tags: ['Levotiroxina', 'Hipotireoidismo', 'T4']
  },
  {
    id: 'fc209', frente: 'Quais os principais efeitos adversos da Prednisona em uso prolongado?',
    verso: 'ENDÓCRINOS: DM, HAS, obesidade central, Cushing iatrogênico | ÓSSEO: osteoporose, necrose avascular | OLHO: catarata subcapsular, glaucoma | IMUNE: infecções oportunistas | SNC: insônia, psicose | SUPRESSÃO ADRENAL: nunca suspender abruptamente se uso >2-3 semanas.',
    dica: 'Mnemônico COPE-ID: Cushing, Osteoporose, Psicose, Edema, Infecção, Diabetes.',
    fraseParaPaciente: 'Este remédio é eficaz mas tem efeitos colaterais com uso prolongado. Nunca pare sem falar comigo.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Clínica Médica', tags: ['Prednisona', 'Corticoide', 'Efeitos Adversos']
  },
  {
    id: 'fc210', frente: 'Qual a diferença entre Amoxicilina simples e Amoxicilina + Clavulanato?',
    verso: 'Amoxicilina: cobre estreptococos, H. influenzae sensível, E. coli sensível. Amoxicilina + Clavulanato: adiciona cobertura de Staphylococcus aureus e bactérias beta-lactamase positivas. Indicar Amox+Clav: ITU complicada, sinusite resistente, mordeduras, infecções de pele complexas.',
    dica: 'Rash com amoxicilina não é alergia a penicilina verdadeira. Não contraindique sem testar.',
    fraseParaPaciente: 'Este antibiótico trata sua infecção. Se aparecer vermelhidão na pele, me avise imediatamente.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Infectologia', tags: ['Amoxicilina', 'Beta-lactâmico', 'Antibiótico']
  },
  {
    id: 'fc211', frente: 'Por que o Metronidazol não pode ser usado com álcool?',
    verso: 'Efeito dissulfiram: metronidazol inibe acetaldeído desidrogenase → acúmulo de acetaldeído → rubor, taquicardia, náusea, vômito, hipotensão. Pode ocorrer até 48h após a última dose. Orientar abstinência durante o tratamento e por 48h depois.',
    dica: 'Metronidazol + álcool = efeito dissulfiram. Avisar o paciente SEMPRE. Gosto metálico é comum e inofensivo.',
    fraseParaPaciente: 'Não tome nenhuma bebida alcoólica durante o tratamento e por 2 dias depois — pode causar reação séria.',
    categoria: 'Farmacologia', dificuldade: 'Fundamental', especialidade: 'Infectologia', tags: ['Metronidazol', 'Álcool', 'Dissulfiram', 'Interação']
  },
  {
    id: 'fc212', frente: 'Qual a dose e uso da Dexametasona para maturação pulmonar fetal?',
    verso: '12 mg IM 12/12h x 2 doses. Indicação: 24-34 semanas com risco de parto prematuro. Efeito: aumenta surfactante fetal e reduz síndrome do desconforto respiratório (SDR). Benefício máximo: 24h a 7 dias após a 2ª dose. Betametasona também usada: 12 mg IM 24/24h x 2 doses.',
    dica: 'Maturação pulmonar: 24-34 semanas, risco de parto em menos de 7 dias. 2 doses de dexametasona ou betametasona.',
    fraseParaPaciente: 'Vou aplicar duas injeções para amadurecer o pulmão do bebê. É muito importante se ele nascer antes do tempo.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Gineco-Obstetrícia', tags: ['Dexametasona', 'Maturação', 'Prematuridade', 'GO']
  },
  {
    id: 'fc213', frente: 'Como identificar e manejar Trombocitopenia Induzida por Heparina (TIH)?',
    verso: 'Ocorre entre D4-D14 após início da heparina. Queda de plaquetas >50% do basal ou abaixo de 100.000. Paradoxal: trombose apesar de plaquetas baixas. Diagnóstico: score 4T + anticorpos anti-FP4. Conduta: SUSPENDER HEPARINA (HNF e HBPM) + iniciar argatroban ou fondaparinux. NUNCA dar varfarina na fase aguda.',
    dica: 'TIH: plaquetas caem D4-D14 + TROMBOSE. Não é sangramento. Suspender toda heparina e trocar anticoagulante.',
    fraseParaPaciente: 'O anticoagulante causou uma reação rara. Vou trocar por outro mais seguro para você.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Hematologia', tags: ['TIH', 'Heparina', 'Plaquetopenia', 'Trombose']
  },
  {
    id: 'fc214', frente: 'Quais os IBPs e quando escolher cada um?',
    verso: 'Todos inibem H+/K+-ATPase irreversivelmente. OMEPRAZOL: mais usado, mais interações CYP2C19. PANTOPRAZOL: preferir com clopidogrel, disponível IV. LANSOPRAZOL: boa biodisponibilidade. Indicações: DRGE, úlcera, erradicação H. pylori, profilaxia por AINE, sangramento GI via IV.',
    dica: 'IBP + Clopidogrel = preferir Pantoprazol. IBP IV pós-hemostasia: 80mg bolus + 8mg/h por 72h.',
    fraseParaPaciente: 'Este remédio reduz o ácido do estômago. Tome 30 minutos antes do café da manhã para melhor efeito.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Gastroenterologia', tags: ['IBP', 'Omeprazol', 'Pantoprazol', 'DRGE']
  },
  {
    id: 'fc215', frente: 'Quais são as regras de ouro na prescrição de antibióticos?',
    verso: '1) Identificar foco e agente provável | 2) Colher culturas ANTES de iniciar ATB (exceto meningite/sepse grave: ATB em menos de 1h) | 3) Escolher ATB com menor espectro eficaz | 4) Definir duração (maioria 5-7 dias) | 5) Reavaliar em 48-72h: desescalonamento se possível | 6) Nunca prescrever ATB para viral.',
    dica: 'Mnemônico CARPE: Culturas antes, Agente provável, Reavalie 48h, Prazo definido, Escalone se necessário.',
    fraseParaPaciente: 'Este antibiótico é específico para a sua infecção. Tome todos os dias pelo tempo indicado, mesmo melhorando.',
    categoria: 'Farmacologia', dificuldade: 'Fundamental', especialidade: 'Infectologia', tags: ['Antibiótico', 'Prescrição', 'Stewardship']
  },
  {
    id: 'fc216', frente: 'Qual o mecanismo e uso da Furosemida na emergência?',
    verso: 'Inibe co-transportador Na-K-2Cl na alça de Henle → diurese potente. Indicações: EAP (reduz pré-carga), IC descompensada, edema grave, hipercalemia, hipercalcemia. Dose EAP: 40-80 mg IV rápido (vasodilatação imediata, diurese em 30 min). Efeitos adversos: hipocalemia e hipomagnesemia.',
    dica: 'Furosemida no EAP: vasodilatação venosa imediata reduz pré-carga. Repor K+ se uso prolongado.',
    fraseParaPaciente: 'Este remédio vai eliminar o excesso de líquido pelo xixi. Você vai urinar bastante — é normal.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Cardiologia / Emergência', tags: ['Furosemida', 'Diurético', 'IC', 'EAP']
  },
  {
    id: 'fc217', frente: 'Quais são as indicações do MgSO4 (Sulfato de Magnésio)?',
    verso: '1) Eclâmpsia: 4-6g IV lento ataque + 1-2g/h manutenção. 2) Pré-eclâmpsia grave (profilaxia de convulsão). 3) Torsade de Pointes: 2g IV em 5-10 min. 4) Asma grave refratária: 2g IV em 20 min. Toxicidade: perda reflexo patelar (Mg 7-10), parada resp (>12). Antídoto: Gluconato de cálcio 1g IV.',
    dica: 'MgSO4 na eclâmpsia: monitorar reflexo patelar + diurese. Antídoto: gluconato de cálcio 1g IV.',
    fraseParaPaciente: 'Estou colocando magnésio no soro para proteger você e o bebê de convulsões.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'GO / Emergência', tags: ['MgSO4', 'Eclâmpsia', 'Pré-eclâmpsia', 'Torsades']
  },
  {
    id: 'fc218', frente: 'Qual o mecanismo e interações do Warfarin (Varfarina)?',
    verso: 'Inibe vitamina K epóxido redutase → reduz fatores II, VII, IX, X e proteínas C e S. INR alvo: FA/TEV = 2-3. Valva mecânica = 2,5-3,5. Interações: antibióticos (aumenta INR), rifampicina (reduz INR), AINEs (aumenta sangramento). Antídoto: vitamina K + plasma fresco ou CCP se urgência.',
    dica: 'Warfarin: couve e brócolis em excesso reduzem o efeito (vitamina K dietética). Manter dieta consistente.',
    fraseParaPaciente: 'Mantenha a alimentação constante — couve e brócolis em excesso podem reduzir o efeito do remédio.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Hematologia / Cardiologia', tags: ['Warfarin', 'Anticoagulante', 'INR', 'Interações']
  },
  {
    id: 'fc219', frente: 'Quais são os beta-bloqueadores e quando usar cada classe?',
    verso: 'Seletivos (metoprolol, atenolol, bisoprolol): IC, HAS, pós-IAM, FA — preferir em asmáticos se necessário. Não seletivos (propranolol): enxaqueca, tremor, varizes (reduz pressão portal). Carvedilol (alfa+beta): IC com FE reduzida. Contraindicações: asma grave, BAVT, bradicardia <60, choque cardiogênico.',
    dica: 'IC com FE reduzida: Carvedilol ou metoprolol/bisoprolol. IAM: metoprolol. Varizes esofágicas: propranolol.',
    fraseParaPaciente: 'Este remédio protege seu coração. Não pare de tomar sem avisar — parada abrupta pode ser perigosa.',
    categoria: 'Farmacologia', dificuldade: 'Intermediário', especialidade: 'Cardiologia', tags: ['Beta-bloqueador', 'Metoprolol', 'Carvedilol', 'IC']
  },
  {
    id: 'fc220', frente: 'Como classificar e manejar Reações Adversas a Medicamentos (RAM)?',
    verso: 'Classificação OMS: A (previsível/dose-dependente — ex: hemorragia por heparina), B (imprevisível/idiossincrática — ex: anafilaxia), C (crônica — ex: osteoporose por corticoide), D (tardia — ex: carcinogênese), E (fim de uso — ex: supressão adrenal). Notificar ao NOTIVISA/ANVISA. Manejar: suspender agente, tratar reação, registrar.',
    dica: 'RAM tipo A: mais comum, dose-dependente. Tipo B: rara, imprevisível — nunca reexpor.',
    fraseParaPaciente: 'Tive que mudar seu medicamento porque você teve uma reação. Vou anotar que este remédio deve ser evitado.',
    categoria: 'Farmacologia', dificuldade: 'Avançado', especialidade: 'Farmacologia Clínica', tags: ['RAM', 'Farmacovigilância', 'Reação Adversa']
  },
]
