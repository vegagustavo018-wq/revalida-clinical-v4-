export const DISEASES = [
  // ═══════════════════════════════════════════════
  // 1. CARDIOLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Cardiologia',
    icone: '❤️',
    sintomas: [
      {
        sintoma: 'Dor Torácica',
        doencas: [
          {
            id: 'iam', nome: 'Infarto Agudo do Miocárdio', cid: 'I21',
            descricao: 'Necrose miocárdica por oclusão de artéria coronária.',
            apresentacao: 'Dor precordial em aperto/queimação irradiando para braço esquerdo ou mandíbula, sudorese fria, náusea. Silencioso em diabéticos e idosos.',
            criterios: ['Elevação de troponina', 'Alteração de ECG (STEMI: supra ST; NSTEMI: infra ST ou inversão T)', 'Sintomas típicos'],
            exames: ['ECG urgente <10min', 'Troponina I/T seriada', 'CKMB', 'RX tórax', 'Ecocardiograma'],
            tratamento: 'STEMI: AAS 300mg + Clopidogrel 300-600mg + Heparina + ICP primária <90min. NSTEMI: AAS + Clopidogrel + Heparina + estratificação.',
            diferenciais: ['Angina instável', 'Pericardite', 'Dissecção de aorta', 'TEP', 'Espasmo esofágico'],
            alertas: ['Não dar AINE em IAM', 'Evitar betabloqueador em choque cardiogênico', 'Morfina com cautela (associada a aumento de mortalidade em NSTEMI)'],
            perola: 'Todo ECG com suspeita de IAM deve ser realizado em <10 minutos do primeiro contato médico.',
            especialidade: 'Cardiologia'
          },
          {
            id: 'angina', nome: 'Angina Instável', cid: 'I20.0',
            descricao: 'Isquemia miocárdica sem necrose (troponina normal).',
            apresentacao: 'Dor precordial em repouso, de início recente ou em progressão. Duração <20 min, cede com nitrato.',
            criterios: ['Troponina normal', 'Dor isquêmica típica', 'Ausência de elevação de ST persistente'],
            exames: ['ECG', 'Troponina seriada', 'Score TIMI ou GRACE', 'Cineangiocoronariografia'],
            tratamento: 'AAS + Clopidogrel + Heparina + nitrato sublingual. Cateterismo precoce se TIMI ≥3.',
            diferenciais: ['NSTEMI', 'Pericardite', 'Costocondrite', 'Refluxo esofágico'],
            alertas: ['TIMI ≥3: cateterismo em <24h', 'Troponina pode ser negativa nas primeiras 4-6h — repetir'],
            perola: 'Angina de repouso é instável por definição, independente de duração.',
            especialidade: 'Cardiologia'
          },
          {
            id: 'pericardite', nome: 'Pericardite Aguda', cid: 'I30',
            descricao: 'Inflamação do pericárdio, geralmente viral (Coxsackie, adenovírus).',
            apresentacao: 'Dor pleurítica (piora ao deitar, melhora sentado/inclinado para frente), atrito pericárdico à ausculta, febre baixa.',
            criterios: ['≥2 de: dor pleurítica, atrito pericárdico, elevação difusa de ST em sela (côncava), derrame pericárdico'],
            exames: ['ECG (elevação ST difusa em sela, depressão PR)', 'Ecocardiograma', 'PCR/VHS', 'Troponina (se miopericardite)'],
            tratamento: 'AAS 750-1000mg 8/8h × 2 semanas + Colchicina 0,5mg 12/12h × 3 meses.',
            diferenciais: ['IAM', 'Pleurite', 'Costocondrite', 'Dissecção de aorta'],
            alertas: ['Evitar atividade física por 3 meses', 'Tamponamento: drenagem pericárdica urgente', 'Corticoide aumenta recorrência — evitar como 1ª linha'],
            perola: 'ECG em sela (côncava para cima) em múltiplas derivações — diferente do IAM que é focal e convexa.',
            especialidade: 'Cardiologia'
          },
          {
            id: 'disseccao-aorta', nome: 'Dissecção de Aorta', cid: 'I71.0',
            descricao: 'Laceração da íntima aórtica com propagação do hematoma pela parede. Stanford A (aorta ascendente) e B (descendente).',
            apresentacao: 'Dor torácica de início súbito, lancinante/rasgando, migrando para dorso ou abdômen. Hipertensão, diferença de PA entre os braços (>20mmHg), déficit de pulso.',
            criterios: ['Angiotomografia de aorta (exame de escolha)', 'Ecocardiograma transesofágico (alternativa)'],
            exames: ['Angiotomografia tórax/abdômen', 'D-dímero (negativo = exclui com alta acurácia)', 'ECG (excluir IAM)', 'Radiografia (alargamento mediastinal)'],
            tratamento: 'Stanford A: cirurgia de emergência. Stanford B não complicada: controle clínico (betabloqueador IV para FC<60 e PAS<120).',
            diferenciais: ['IAM', 'TEP', 'Dor musculoesquelética', 'Pericardite'],
            alertas: ['NUNCA anticoagular sem excluir dissecção', 'Trombolítico em dissecção = letal', 'Labetalol IV de escolha para controle pressórico'],
            perola: 'Dissecção de aorta tipo A: cirurgia em <6h. Mortalidade aumenta 1-2% por hora sem tratamento.',
            especialidade: 'Cardiologia/Cirurgia Cardiovascular'
          },
          {
            id: 'miopericardite', nome: 'Miocardite Aguda', cid: 'I40',
            descricao: 'Inflamação do miocárdio, geralmente viral. Pode causar ICC, arritmias e morte súbita.',
            apresentacao: 'Dor torácica + dispneia + palpitações após infecção viral recente (2-3 semanas). Jovens, frequentemente atletas.',
            criterios: ['Troponina elevada + ECG alterado + disfunção ventricular + ausência de DAC obstrutiva. RNM cardíaca: critérios de Lake Louise'],
            exames: ['Troponina (elevada)', 'ECG', 'Ecocardiograma (função VE)', 'RNM cardíaca (padrão ouro)', 'Biópsia endomiocárdica (casos graves)'],
            tratamento: 'Repouso absoluto (3-6 meses), tratamento da ICC (IECA, betabloqueador), evitar AINEs. Casos fulminantes: suporte circulatório.',
            diferenciais: ['Pericardite', 'IAM', 'Síndrome de Takotsubo', 'Cardiomiopatia dilatada'],
            alertas: ['Atletas: proibir atividade esportiva por 3-6 meses', 'Monitorar Holter (risco de arritmia fatal)', 'Corticoide: controverso, não usar rotineiramente'],
            perola: 'Miocardite fulminante: piora rápida mas pode se recuperar completamente com suporte intensivo.',
            especialidade: 'Cardiologia'
          },
          {
            id: 'angina-estavel', nome: 'Angina Estável (Doença Coronariana Crônica)', cid: 'I20.8',
            descricao: 'Isquemia miocárdica episódica estável por estenose coronariana ≥70%. Dor previsível ao esforço, com alívio ao repouso.',
            apresentacao: 'Dor/aperto precordial ao esforço físico ou emocional, irradiando para braço esquerdo ou mandíbula, com duração <20 min, cedendo com repouso ou nitrato em <5 min.',
            criterios: ['Clínico. Teste de esforço (ergometria). Cineangiocoronariografia (padrão ouro para anatomia)'],
            exames: ['ECG basal + Holter', 'Teste ergométrico (limiar isquêmico)', 'Ecocardiograma sob estresse (farmacológico se limitação física)', 'Cintilografia miocárdica', 'Cineangiocoronariografia (para revascularização)'],
            tratamento: 'Antianginosos: betabloqueador (1ª linha) + nitrato de ação prolongada + amlodipino. Prevenção CV: AAS + estatina de alta intensidade + controle de fatores de risco. Revascularização (ICP ou CRM) em doença significativa refratária.',
            diferenciais: ['Angina Instável/NSTEMI', 'Espasmo coronariano (Prinzmetal)', 'Costocondrite', 'Refluxo esofágico'],
            alertas: ['Ergometria positiva com alta carga (≥3 equivalentes metabólicos) = doença coronariana grave', 'CRM superior à ICP em multiarterial + diabético', 'Nitratos: evitar em uso de inibidor de PDE5 (sildenafil) — hipotensão fatal'],
            perola: 'Betabloqueador: reduz frequência cardíaca de repouso para 55-60 bpm. Meta: sem angina + FC <60 em repouso e <100 no pico do esforço.',
            especialidade: 'Cardiologia'
          },
        ]
      },
      {
        sintoma: 'Palpitação / Arritmia',
        doencas: [
          {
            id: 'fa', nome: 'Fibrilação Atrial', cid: 'I48',
            descricao: 'Arritmia supraventricular mais comum. Atividade atrial caótica e desorganizada.',
            apresentacao: 'Palpitações irregulares, dispneia, tontura, fadiga. Pode ser assintomática. Pulso irregularmente irregular.',
            criterios: ['ECG: ausência de onda P, intervalos RR irregulares, linha de base ondulante (>350/min)'],
            exames: ['ECG', 'TSH (FA por hipertireoidismo?)', 'Ecocardiograma', 'INR se anticoagulado', 'Holter/monitor cardíaco'],
            tratamento: 'Anticoagulação se CHA₂DS₂-VASc ≥2 (NOAC preferido). Controle de frequência: betabloqueador ou diltiazem. Cardioversão se instável hemodinamicamente.',
            diferenciais: ['Flutter atrial', 'TAM (taquicardia atrial multifocal)', 'Extrassístoles frequentes'],
            alertas: ['Cardioversão em FA >48h: anticoagular 3 semanas antes ou ETE para excluir trombo', 'Pré-excitação + FA: evitar digitálico e verapamil (aceleram via acessória)'],
            perola: 'CHA₂DS₂-VASc: IC(1)+HAS(1)+Idade≥75(2)+DM(1)+AVC/AIT(2)+Vasculopatia(1)+Idade65-74(1)+Sexo fem(1).',
            especialidade: 'Cardiologia'
          },
          {
            id: 'tpsv', nome: 'Taquicardia Paroxística Supraventricular', cid: 'I47.1',
            descricao: 'Taquicardia regular de início e término súbito por mecanismo de reentrada (geralmente nodal AV).',
            apresentacao: 'Palpitações súbitas, FC 150-250 bpm, dispneia, tontura. "Sapo na garganta" (P retrógrada).',
            criterios: ['ECG: taquicardia regular, QRS estreito (<120ms), sem onda P visível ou P retrógrada após QRS'],
            exames: ['ECG durante episódio', 'Holter (se episódico)', 'Ecocardiograma'],
            tratamento: 'Manobra de Valsalva modificada (soprar + elevação de pernas) → Adenosina 6mg IV em bolus → Verapamil. Se instável: cardioversão elétrica.',
            diferenciais: ['Flutter atrial 2:1', 'Taquicardia sinusal', 'Taquicardia ventricular com QRS estreito'],
            alertas: ['Adenosina contraindicada em asma grave', 'Verapamil contraindicado se TV com QRS largo (pode causar PCR)', 'WPW: evitar AV nodais bloqueadores'],
            perola: 'Valsalva modificada aumenta eficácia de 17% para 43%: soprar por 15s + elevar MMII por 15s imediatamente.',
            especialidade: 'Cardiologia'
          },
          {
            id: 'tv', nome: 'Taquicardia Ventricular', cid: 'I47.2',
            descricao: 'Taquicardia de origem ventricular, ≥3 complexos consecutivos. Pode ser sustentada (>30s) ou não sustentada.',
            apresentacao: 'Palpitações + síncope/pré-síncope + dispneia. Pode degenerar em FV. FC 100-250 bpm.',
            criterios: ['ECG: taquicardia com QRS largo (>120ms), dissociação AV, complexos de fusão ou captura'],
            exames: ['ECG (12 derivações)', 'Ecocardiograma (disfunção VE?)', 'Troponina', 'Eletrólitos (K⁺ e Mg²⁺)', 'Coronariografia'],
            tratamento: 'Instável: cardioversão elétrica sincronizada imediata. Estável: amiodarona 150mg IV em 10min. Tratar causa base.',
            diferenciais: ['TPSV com aberrância', 'Bloqueio de ramo preexistente + TSV', 'Ritmo de Brugada'],
            alertas: ['QRS largo + instabilidade = TV até prova contrária — cardioverter', 'Lidocaína em alternativa à amiodarona', 'Sempre tratar hipocalemia e hipomagnesemia'],
            perola: 'Critérios de Brugada para TV vs. TSV aberrante: ausência de RS em precordiais, RS >100ms, dissociação AV, morfologia típica de TV.',
            especialidade: 'Cardiologia'
          },
          {
            id: 'bav', nome: 'Bloqueio Atrioventricular Total (BAV 3°)', cid: 'I44.2',
            descricao: 'Ausência de condução entre átrios e ventrículos. Ritmo ventricular de escape lento.',
            apresentacao: 'Síncope ou pré-síncope, bradicardia (<40 bpm), tontura, fadiga, dispneia. Sinal de Stokes-Adams (síncope por assistolia).',
            criterios: ['ECG: dissociação AV completa — ondas P e QRS sem relação, frequência atrial > ventricular'],
            exames: ['ECG', 'Holter', 'Ecocardiograma', 'Troponina (IAM?)', 'Eletrólitos'],
            tratamento: 'Instável: atropina 0,5-1mg IV (pode não funcionar se BAV infra-hissiano). Marcapasso transcutâneo de urgência. Definitivo: marcapasso permanente.',
            diferenciais: ['BAV 2° Mobitz II', 'Bradicardia sinusal', 'Hipotireoidismo', 'Hipertonia vagal'],
            alertas: ['BAV pós-IAM inferior: geralmente transitório. BAV pós-IAM anterior: grave, marcapasso definitivo', 'Digitálico e amiodarona podem causar BAV — revisar medicações'],
            perola: 'No BAV total, a frequência ventricular de escape indica o local do bloqueio: juncional (40-60/min, QRS estreito) vs. infra-hissiano (<40/min, QRS largo).',
            especialidade: 'Cardiologia'
          },
        ]
      },
      {
        sintoma: 'Dispneia Cardíaca',
        doencas: [
          {
            id: 'icc-aguda', nome: 'Insuficiência Cardíaca Aguda Descompensada', cid: 'I50',
            descricao: 'Falência da bomba cardíaca com congestão pulmonar e/ou sistêmica de instalação aguda.',
            apresentacao: 'Ortopneia, dispneia paroxística noturna, edema bilateral de MMII, estertores crepitantes bilaterais, B3, turgência jugular, hepatomegalia.',
            criterios: ['Critérios de Framingham: 2 maiores ou 1 maior + 2 menores. Score de Boston. BNP >400 pg/mL = IC'],
            exames: ['BNP ou NT-proBNP (diagnóstico e prognóstico)', 'RX tórax (congestão, cardiomegalia)', 'Ecocardiograma', 'ECG', 'Hemograma, função renal, eletrólitos'],
            tratamento: 'O2, posição sentada. Diurético IV (furosemida 40-80mg). Vasodilatador (nitratos) se PA ok. Inotrópico se choque. IECA/BRA + betabloqueador no crônico.',
            diferenciais: ['DPOC exacerbada', 'TEP', 'Pneumonia', 'Síndrome nefrótica', 'Cirrose com ascite'],
            alertas: ['BNP <100 praticamente exclui IC como causa de dispneia', 'Hipotensão + IC = choque cardiogênico: evitar diurético/vasodilatador agressivo', 'Betabloqueador: manter no crônico, não iniciar no agudo'],
            perola: 'IC com FE preservada (>50%) trata a congestão mas não melhora a FE — controlar PA e FC rigorosamente.',
            especialidade: 'Cardiologia'
          },
          {
            id: 'estenose-ao', nome: 'Estenose Aórtica Grave', cid: 'I35.0',
            descricao: 'Obstrução da via de saída do VE. Tríade clássica: angina, síncope, dispneia.',
            apresentacao: 'Sopro sistólico ejetivo em foco aórtico irradiando para carótidas, pulso parvus et tardus, impulsão ventricular sustentada.',
            criterios: ['Ecocardiograma: área valvar <1 cm², gradiente médio >40 mmHg ou Vmáx >4m/s'],
            exames: ['Ecocardiograma (Doppler)', 'ECG (HVE)', 'RX tórax', 'Cateterismo coronário pré-operatório'],
            tratamento: 'Troca valvar aórtica cirúrgica (SAVR) ou transcateter (TAVI) nos sintomáticos. Sem medicamento eficaz para retardar progressão.',
            diferenciais: ['Cardiomiopatia hipertrófica obstrutiva (CMHO)', 'Estenose subaórtica', 'Estenose pulmonar'],
            alertas: ['Após início dos sintomas: sobrevida média 2-5 anos sem tratamento cirúrgico', 'Não usar vasodilatadores potentes (risco de hipotensão grave)', 'TAVI indicado se cirurgia de alto risco'],
            perola: 'A sobrevida mediana após angina é 5 anos, após síncope 3 anos, após dispneia/IC 2 anos — indicação de troca valvar imediata.',
            especialidade: 'Cardiologia/Cirurgia Cardiovascular'
          },
        ]
      },
      {
        sintoma: 'Síncope / Hipotensão',
        doencas: [
          {
            id: 'tamponamento', nome: 'Tamponamento Cardíaco', cid: 'I31.9',
            descricao: 'Acúmulo de líquido no pericárdio com compressão das câmaras cardíacas — emergência.',
            apresentacao: 'Tríade de Beck: hipotensão + turgência jugular + bulhas abafadas. Pulso paradoxal (queda >10mmHg na inspiração). Taquicardia compensatória.',
            criterios: ['Ecocardiograma: derrame + colapso diastólico de VD + variação respiratória do fluxo mitral >25%'],
            exames: ['Ecocardiograma (de urgência)', 'ECG (alternância elétrica + baixa voltagem)', 'RX tórax (coração em moringa)'],
            tratamento: 'Pericardiocentese imediata. Expansão volêmica como ponte. Janela pericárdica cirúrgica se recorrente.',
            diferenciais: ['TEP maciço', 'IAM com choque', 'Pneumotórax hipertensivo (POSSE sem bulhas abafadas)'],
            alertas: ['Pulso paradoxal: queda da PA sistólica >10mmHg na inspiração', 'Pericardiocentese guiada por ecocardiograma', 'Diuréticos e vasodilatadores podem causar colapso'],
            perola: 'Alternância elétrica no ECG (alternância da amplitude do QRS) é patognomônica de tamponamento com grande derrame.',
            especialidade: 'Cardiologia/Medicina de Emergência'
          },
          {
            id: 'sincope-card', nome: 'Síncope Cardiogênica', cid: 'R55',
            descricao: 'Perda transitória de consciência por queda do débito cardíaco. Causa mais grave de síncope.',
            apresentacao: 'Síncope sem pródromo (diferente da vasovagal), podendo ocorrer durante esforço (obstrução) ou repouso (arritmia). Rápida recuperação sem confusão pós-ictal.',
            criterios: ['Critérios de EGSYS ou San Francisco: ECG anormal, IC, idade >45a, sem pródromo = risco alto'],
            exames: ['ECG (obrigatório)', 'Holter ou monitor implantável', 'Ecocardiograma', 'Teste de esforço se síncope ao esforço'],
            tratamento: 'Depende da etiologia: marcapasso (bradicardias), cardioversor-desfibrilador (TV/FV), ablação por cateter (TSV), troca valvar (obstrução).',
            diferenciais: ['Síncope vasovagal', 'Hipotensão ortostática', 'Epilepsia', 'AIT', 'Hipoglicemia'],
            alertas: ['Síncope ao esforço: avaliar CMHO, estenose aórtica, TV catecolaminérgica', 'Síncope + QT longo: risco de FV — monitorar', 'Síncope + morte súbita na família: Brugada ou síndrome de QT longo hereditária'],
            perola: 'Síncope vasovagal: pródromo (náusea, sudorese, palidez), desencadeante (dor, estresse), recuperação lenta — benigna.',
            especialidade: 'Cardiologia'
          },
        ]
      },
      {
        sintoma: 'Hipertensão Arterial',
        doencas: [
          {
            id: 'crise-hiper', nome: 'Crise Hipertensiva — Urgência e Emergência', cid: 'I10',
            descricao: 'Urgência: PA ≥180/120 sem lesão de órgão-alvo. Emergência: PA elevada COM lesão de órgão-alvo (encefalopatia, IC aguda, dissecção, AVC, IAM).',
            apresentacao: 'Cefaleia occipital, náusea. Emergência: déficit neurológico, dispneia aguda, dor torácica, oligúria, visão turva.',
            criterios: ['PA ≥180/120 mmHg + presença ou ausência de lesão de órgão-alvo'],
            exames: ['PA ambos os braços', 'ECG', 'Fundo de olho', 'Creatinina + EAS', 'Troponina', 'TC crânio se neurológico'],
            tratamento: 'Urgência: anti-hipertensivo VO (captopril, clonidina, amlodipino). Meta: reduzir PA em 24-48h. Emergência: anti-hipertensivo IV (labetalol, nitroprussiato, nitroglicerina) — reduzir 25% nas primeiras horas.',
            diferenciais: ['HAS crônica descontrolada', 'Feocromocitoma', 'Síndrome de retirada de clonidina', 'Eclâmpsia'],
            alertas: ['Reduzir PA rápido demais pode causar isquemia cerebral, coronária ou renal', 'Nitroprussiato: toxicidade por tiocianato em uso prolongado ou insuficiência renal', 'Dissecção de aorta: betabloqueador é 1ª linha para controle de FC e PA'],
            perola: 'Na emergência hipertensiva com AVC isquêmico: só tratar se PA >220/120 (exceto se for dar trombolítico — PA <185/110).',
            especialidade: 'Cardiologia/Emergência'
          },
          {
            id: 'tvp', nome: 'Trombose Venosa Profunda (TVP)', cid: 'I80',
            descricao: 'Formação de trombo em veia profunda, geralmente MMII. TEV (tromboembolismo venoso) = TVP + TEP. Fatores de risco: Tríade de Virchow (estase, hipercoagulabilidade, dano endotelial).',
            apresentacao: 'Edema unilateral de MMII + calor + eritema + dor à palpação (sinal de Homans — pouco sensível). 50% assintomático. TVP proximal (ilioferoral): maior risco de TEP.',
            criterios: ['Escore de Wells ≥2: probabilidade alta. US Doppler venoso (compressão) = padrão ouro. D-dímero negativo + probabilidade baixa = exclui TVP.'],
            exames: ['D-dímero (alto valor preditivo negativo — excluir se baixo)', 'US Doppler venoso de MMII (compressão)', 'Angio-TC tórax se suspeita de TEP', 'Hemograma + coagulograma (avaliar anticoagulação)', 'Trombofilia: solicitar após 3 meses de anticoagulação'],
            tratamento: 'Anticoagulação plena: DOAC (rivaroxabana 15mg 12/12h × 3 semanas → 20mg/dia) ou apixabana como 1ª escolha. Heparina de baixo peso molecular (HBPM) + warfarina se DOAC contraindicado. Duração: 3 meses se fator provocado, indefinido se não provocado ou recorrente. Trombectomia ou trombolítico: TVP maciça com isquemia de membro.',
            diferenciais: ['Celulite (eritema + calor sem edema maior, bilateral)', 'Insuficiência venosa crônica (bilateral, crônico)', 'Ruptura de cisto de Baker', 'Hematoma muscular', 'Linfedema'],
            alertas: ['D-dímero: muito sensível mas pouco específico. Eleva em infecção, gravidez, trauma, cirurgia, câncer — interpretar com escore de Wells', 'TVP e gravidez: HBPM é a anticoagulação de escolha (DOAC e warfarina contraindicados)', 'Filtro de veia cava inferior: reservado para contraindicação absoluta à anticoagulação, não é rotina'],
            perola: 'Escore de Wells ≤1 + D-dímero negativo = TVP praticamente excluída (valor preditivo negativo >98%). Não solicitar US Doppler neste caso.',
            especialidade: 'Cardiologia/Hematologia'
          },
          {
            id: 'endocardite', nome: 'Endocardite Infecciosa', cid: 'I33',
            descricao: 'Infecção do endocárdio valvar. Agentes: S. aureus (aguda, válvula nativa), estreptococos viridans (subaguda, válvula nativa com lesão prévia), S. epidermidis (válvula protética). Usuários de drogas IV: válvula tricúspide.',
            apresentacao: 'Febre + sopro cardíaco + bacteremia = endocardite até prova. Manifestações: fenômenos embólicos (AVC, embolia séptica), manchas de Janeway (palmas/plantas, indolores), nódulos de Osler (dolorosos), manchas de Roth (fundo de olho), hemorragia subungueal em estilhaço.',
            criterios: ['Critérios de Duke: 2 maiores = definitivo. Maiores: hemocultura + (>2 positivas para típico OU 1 Coxiella) + ECO positivo (vegetação/abscesso/nova regurgitação). Menores: fator predisponente, febre, fenômeno vascular/imunológico, ECO sugestivo'],
            exames: ['Hemoculturas ×3 (2 sítios diferentes, ANTES do ATB)', 'ECO transtorácico (1ª linha)', 'ECO transesofágico (mais sensível — se ETT negativo + suspeita alta, válvula protética, abscesso)', 'Hemograma + PCR + VHS', 'Creatinina (glomerulonefrite)', 'Fundo de olho'],
            tratamento: 'Estreptococo viridans: penicilina G ×4 semanas OU ceftriaxona ×4 semanas. S. aureus oxacilina-sensível: oxacilina ×6 semanas. MRSA ou alergia: vancomicina ×6 semanas. Cirurgia: IC grave, vegetação >10mm, abscesso, falha do ATB.',
            diferenciais: ['Febre reumática aguda', 'LES (endocardite de Libman-Sacks — não infecciosa)', 'Bacteremia sem endocardite', 'Mixoma atrial'],
            alertas: ['Hemoculturas ANTES do ATB — colher 3 pares de veia periférica em 30-60min. ATB empírico prematuro: principal causa de hemocultura negativa', 'Vegetação em válvula tricúspide em jovem = usuário de drogas IV (UDIV) — S. aureus', 'Profilaxia para EI: amoxicilina 2g VO 30-60min antes de procedimento odontológico (apenas pacientes de alto risco)'],
            perola: 'Nódulos de Osler (dolorosos) vs. Janeway (indolores): "Osler = dOr" mnemônico. Ambos são manifestações imunológicas/embólicas da endocardite.',
            especialidade: 'Cardiologia/Infectologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 2. PNEUMOLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Pneumologia',
    icone: '🫁',
    sintomas: [
      {
        sintoma: 'Dispneia Aguda',
        doencas: [
          {
            id: 'tep', nome: 'Tromboembolismo Pulmonar', cid: 'I26',
            descricao: 'Obstrução arterial pulmonar por trombo, geralmente originado em TVP de MMII ou MMSS.',
            apresentacao: 'Dispneia súbita, dor pleurítica, taquicardia, hemoptise. Pode se apresentar como síncope ou PCR.',
            criterios: ['Wells-TEP >4 = alta probabilidade', 'D-dímero negativo exclui se probabilidade baixa/moderada'],
            exames: ['D-dímero', 'Angiotomografia de tórax (padrão ouro)', 'Gasometria', 'ECG (S1Q3T3, taquicardia sinusal)', 'Ecocardiograma (sobrecarga VD)', 'USG compressiva MMII'],
            tratamento: 'Anticoagulação plena (heparina não fracionada IV ou enoxaparina SC). TEP maciço + instabilidade: trombólise sistêmica (alteplase). Filtro de VCI em contraindicação à anticoagulação.',
            diferenciais: ['Pneumotórax', 'IAM', 'Pericardite', 'Pneumonia', 'IC descompensada', 'Asma'],
            alertas: ['D-dímero elevado não confirma TEP — muito inespecífico', 'S1Q3T3 sugestivo mas inespecífico', 'Gestante: preferir HBPM, evitar varfarina'],
            perola: 'Wells para TEP: clínica sugestiva(3)+TVP(3)+imobilização/cirurgia(1,5)+FC>100(1,5)+TVP-TEP prévio(1,5)+hemoptise(1)+câncer(1).',
            especialidade: 'Pneumologia/Emergência'
          },
          {
            id: 'pneumotorax', nome: 'Pneumotórax Espontâneo', cid: 'J93',
            descricao: 'Acúmulo de ar no espaço pleural. Primário (jovem, magro, bolhas subpleurais) ou secundário (DPOC, TB, fibrose).',
            apresentacao: 'Dor pleurítica súbita + dispneia. Hemitórax hipertimpânico, MV abolido, desvio traqueal se hipertensivo.',
            criterios: ['RX tórax PA ou US pulmonar (ausência de deslizamento pleural — "lung sliding")'],
            exames: ['RX tórax PA (linha pleural)', 'US pulmonar (deslizamento ausente + ponto pulmonar)', 'TC se dúvida ou secundário'],
            tratamento: 'Pequeno (<2cm em adulto, assintomático): observação + O2. Grande ou sintomático: punção aspirativa ou drenagem torácica. Secundário: sempre drenar.',
            diferenciais: ['TEP', 'Pleurite', 'IAM', 'Pneumonia', 'Asma'],
            alertas: ['Pneumotórax hipertensivo: desvio traqueal + MV abolido + hipotensão = agulha imediata (2° EIC, linha medioclavicular) ANTES do RX', 'Pneumotórax bilateral ou em DPOC = alta mortalidade'],
            perola: 'Pneumotórax hipertensivo mata por obstrução venosa de retorno (não por compressão do pulmão). Tratar imediatamente.',
            especialidade: 'Pneumologia/Cirurgia'
          },
          {
            id: 'asma-aguda', nome: 'Asma — Crise Aguda', cid: 'J45',
            descricao: 'Obstrução brônquica reversível por inflamação crônica e broncoespasmo. Crise pode ser leve a fatal.',
            apresentacao: 'Dispneia, sibilância, tosse, opressão torácica. Tórax hiperinsuflado. Fala em palavras = grave. Cianose = risco de vida.',
            criterios: ['Clínico + limitação ao fluxo aéreo reversível (VEF1 ou PFE melhora ≥12% após BD)'],
            exames: ['Oximetria (SpO2)', 'Pico de fluxo (PFE)', 'Gasometria (se PFE<50% ou SpO2<92%)', 'RX tórax (excluir pneumotórax, pneumonia)'],
            tratamento: 'O2 (alvo SpO2 >94%) + Salbutamol 2,5-5mg nebulizado repetir 20/20min + Ipratrópio 0,5mg + Corticoide sistêmico (prednisona 40-60mg VO ou hidrocortisona 200mg IV). Grave: MgSO4 2g IV em 20min.',
            diferenciais: ['DPOC exacerbada', 'ICC (asma cardíaca)', 'Obstrução de vias aéreas', 'Anafilaxia', 'TEP'],
            alertas: ['Tórax silencioso = risco de vida iminente (sem ar para sibilo)', 'PaCO2 normal em crise grave = fadiga respiratória iminente', 'Adrenalina SC nas crianças com crise grave'],
            perola: 'Critérios de intubação: rebaixamento do nível de consciência, exaustão, PaCO2>45mmHg em crise, SpO2<90% refratária.',
            especialidade: 'Pneumologia/Emergência'
          },
          {
            id: 'sdra', nome: 'Síndrome do Desconforto Respiratório Agudo (SDRA)', cid: 'J80',
            descricao: 'Lesão alveolar difusa bilateral por inflamação pulmonar. Hipoxemia grave refratária a O2.',
            apresentacao: 'Dispneia progressiva dentro de 1 semana de evento precipitante. Hipoxemia grave (PaO2/FiO2 <300). Infiltrados bilaterais no RX.',
            criterios: ['Berlim: início em <1 semana + infiltrados bilaterais + PaO2/FiO2 ≤300 + não explicada por IC/sobrecarga'],
            exames: ['Gasometria', 'RX/TC tórax (infiltrados bilaterais "asa de borboleta")', 'Ecocardiograma (excluir IC)', 'BNP', 'Cultura + lavado broncoalveolar'],
            tratamento: 'VM protetora: volume corrente 6mL/kg de peso ideal, pressão de platô <30cmH2O, PEEP otimizada. Decúbito prono ≥12h/dia se PaO2/FiO2<150. Dexametasona.',
            diferenciais: ['Edema pulmonar cardiogênico', 'Pneumonia bilateral grave', 'Hemorragia alveolar difusa'],
            alertas: ['VM convencional com volume alto = volutrauma e piora da lesão', 'Balanço hídrico negativo após estabilização melhora prognóstico', 'ECMO em casos refratários'],
            perola: 'SDRA leve PaO2/FiO2 201-300; moderada 101-200; grave ≤100. Mortalidade: 30-40% na grave.',
            especialidade: 'Pneumologia/UTI'
          },
          {
            id: 'sdra-hipoxemia', nome: 'Insuficiência Respiratória Aguda', cid: 'J96.0',
            descricao: 'Falência das trocas gasosas. Hipoxêmica (tipo I: PaO2<60): pneumonia, SDRA. Hipercápnica (tipo II: PaCO2>45): DPOC, neuromusculares.',
            apresentacao: 'Dispneia + taquipneia + uso de musculatura acessória + cianose + alteração do nível de consciência. Hipoxemia refratária a O2 (tipo I) ou hipercapnia (tipo II).',
            criterios: ['Gasometria: PaO2 <60 mmHg em ar ambiente (tipo I) OU PaCO2 >45 mmHg (tipo II)'],
            exames: ['Gasometria arterial', 'RX/TC tórax', 'ECG', 'Hemograma + cultura (infecciosa?)', 'BNP (IC?)'],
            tratamento: 'Tipo I: O2 suplementar → VNI (CPAP/BiPAP) → VMI se refratária. Tipo II: VNI (BiPAP) preferencial no DPOC. VMI: proteger pulmão (volume baixo + PEEP).',
            diferenciais: ['DPOC exacerbado', 'SDRA', 'TEP', 'IC descompensada', 'Pneumonia grave'],
            alertas: ['DPOC: O2 excessivo pode suprimir drive hipóxico — alvo SpO2 88-92%', 'VNI fracasso: confusão, não cooperação, hipotensão, parada — intubar', 'Modo ventilatório no SDRA: VT 6mL/kg peso ideal + PEEP otimizada'],
            perola: 'VNI na exacerbação de DPOC: reduz mortalidade, necessidade de VMI e internação em UTI. Iniciar precocemente se pH<7,35.',
            especialidade: 'Pneumologia/UTI'
          },
        ]
      },
      {
        sintoma: 'Tosse / Dispneia Crônica',
        doencas: [
          {
            id: 'dpoc', nome: 'DPOC — Exacerbação Aguda', cid: 'J44',
            descricao: 'Doença obstrutiva crônica irreversível. Exacerbação: piora aguda de sintomas além da variação habitual.',
            apresentacao: 'Piora de dispneia basal, aumento do volume e purulência do escarro, tosse. Sibilos, crepitações, uso de musculatura acessória.',
            criterios: ['Espirometria: VEF1/CVF <0,7 pós-BD. Exacerbação: piora sintomática aguda com ou sem diagnóstico confirmado'],
            exames: ['Gasometria', 'RX tórax', 'Hemograma + PCR (componente infeccioso?)', 'ECG (cor pulmonale?)', 'Espirometria (fora da exacerbação)'],
            tratamento: 'O2 controlado (SpO2 88-92%) + Salbutamol + Ipratrópio nebulizados + Corticoide (prednisona 40mg/dia × 5 dias) + ATB se purulência (amoxicilina-clavulanato, azitromicina ou fluoroquinolona).',
            diferenciais: ['Asma', 'ICC descompensada', 'TEP', 'Pneumonia', 'Pneumotórax'],
            alertas: ['O2 em excesso pode piorar hipercapnia em DPOC — alvo 88-92%', 'VNI precoce se pH<7,35 e PaCO2>45', 'Não usar betabloqueador não cardioseletivo'],
            perola: 'GOLD ABCD: A (baixo risco, poucos sintomas) → D (alto risco, muitos sintomas). Mortalidade 5 anos na DPOC GOLD 4: ~50%.',
            especialidade: 'Pneumologia'
          },
          {
            id: 'bronquiectasia', nome: 'Bronquiectasia', cid: 'J47',
            descricao: 'Dilatação anormal e permanente dos brônquios por destruição da parede brônquica. Causa: infecção recorrente, fibrose cística, DPOC, imunodeficiência.',
            apresentacao: 'Tosse crônica produtiva com grande volume de escarro (mucoide ou purulento), hemoptise recorrente. Dedos em baqueta de tambor.',
            criterios: ['TC de tórax de alta resolução (TCAR): dilatação brônquica com diâmetro interno maior que a artéria adjacente (sinal do anel de sinete)'],
            exames: ['TCAR tórax (padrão ouro)', 'Espirometria', 'Cultura de escarro', 'Broncoscopia (se hemoptise)'],
            tratamento: 'Fisiioterapia respiratória (drenagem postural, flutter), mucolíticos (solução salina hipertônica nebulizada), ATB durante exacerbações. Hemoptise grave: embolização brônquica.',
            diferenciais: ['DPOC', 'Tuberculose', 'Asma', 'CA de pulmão com infecção'],
            alertas: ['Hemoptise maciça: >300mL/24h = emergência cirúrgica/intervencionista', 'Pseudomonas aeruginosa é o agente mais comum em fase avançada'],
            perola: 'Fisioterapia diária com drenagem postural é tão importante quanto o ATB para controle da doença a longo prazo.',
            especialidade: 'Pneumologia'
          },
          {
            id: 'ca-pulmao', nome: 'Câncer de Pulmão', cid: 'C34',
            descricao: 'Neoplasia maligna do pulmão. Tipos: CPNPC (70-80%: adenocarcinoma, epidermóide, células grandes) e CPPC (20-30%).',
            apresentacao: 'Tosse persistente, hemoptise, dor torácica, perda de peso, dispneia. Síndrome de Pancoast: dor ombro + Horner. Síndrome VCS: edema cervicofacial.',
            criterios: ['Histopatológico (broncoscopia, biópsia TC guiada, mediastinoscopia)'],
            exames: ['TC tórax com contraste', 'PET-CT (estadiamento)', 'Biópsia + histologia + testes moleculares (EGFR, ALK, KRAS)', 'Broncoscopia'],
            tratamento: 'CPNPC precoce (I-II): ressecção cirúrgica. Avançado: quimioterapia + imunoterapia ± terapia alvo. CPPC: quimioterapia (carboplatina + etoposídeo) ± radioterapia.',
            diferenciais: ['Pneumonia', 'TB', 'Metástase pulmonar', 'Nódulo pulmonar benigno (hamartoma)'],
            alertas: ['Síndrome paraneoplástica: hipercalcemia (epidermóide), SIADH (CPPC), Cushing (CPPC)', 'Nódulo sólido >8mm em fumante: PET-CT e biópsia', 'Rastreamento: LDCT anual em fumantes 50-80 anos, ≥20 maços-ano'],
            perola: 'CPPC: muito sensível à quimio mas recidiva precoce. Sobrevida em 5 anos <5% no estágio extenso.',
            especialidade: 'Pneumologia/Oncologia'
          },
        ]
      },
      {
        sintoma: 'Hemoptise',
        doencas: [
          {
            id: 'tb', nome: 'Tuberculose Pulmonar', cid: 'A15',
            descricao: 'Infecção por Mycobacterium tuberculosis. Principal causa de mortalidade por doença infecciosa no mundo.',
            apresentacao: 'Tosse crônica (>3 semanas) + hemoptise + sudorese noturna + febre vespertina + emagrecimento. Crepitações no ápice.',
            criterios: ['Baciloscopia (BAAR × 2 amostras)', 'Cultura para micobactérias', 'TC tórax (infiltrado apical, cavitação, nódulos em árvore em brotamento)', 'GeneXpert MTB/RIF (diagnóstico rápido)'],
            exames: ['Baciloscopia de escarro', 'GeneXpert MTB/RIF', 'Cultura + TSA', 'TC tórax', 'PPD/IGRA (latente)', 'HIV (sempre solicitar)'],
            tratamento: 'RIPE: Rifampicina + Isoniazida + Pirazinamida + Etambutol por 2 meses → RI por 4 meses. Notificação compulsória. Isolamento respiratório.',
            diferenciais: ['Pneumonia bacteriana', 'CA pulmão', 'Bronquiectasia', 'Abscesso pulmonar', 'Histoplasmose'],
            alertas: ['Notificação compulsória imediata', 'TB multirresistente (TBMR): resistente a rifampicina ± isoniazida — tratamento especializado', 'Hepatotoxicidade pelo RIPE: monitorar TGO/TGP mensalmente'],
            perola: 'TB latente (PPD >5mm em imunossuprimido ou >10mm em sadio) + imunossupressão planejada: tratar com isoniazida 6 meses antes.',
            especialidade: 'Infectologia/Pneumologia'
          },
        ]
      },
      {
        sintoma: 'Derrame Pleural',
        doencas: [
          {
            id: 'derrame-parapneum', nome: 'Derrame Pleural Parapneumônico / Empiema', cid: 'J86',
            descricao: 'Derrame pleural associado à pneumonia. Empiema = pus no espaço pleural.',
            apresentacao: 'Dor pleurítica + febre persistente apesar de ATB + macicez à percussão + MV abolido na base.',
            criterios: ['Toracocentese diagnóstica: Light (exsudato: proteínas>0,5×soro, LDH>0,6×soro ou >2/3 do LSN sérico)', 'Empiema: pH<7,2 ou glicose<60 ou LDH>1000 ou Gram/cultura+'],
            exames: ['RX tórax', 'US tórax (guia toracocentese)', 'TC tórax (lóculos)', 'Análise do líquido (citologia, proteínas, LDH, glicose, pH, cultura, ADA)'],
            tratamento: 'Parapneumônico simples: ATB. Complicado (pH<7,2 ou glicose<60): dreno torácico + fibrinolítico intrapleural. Empiema loculado: VATS ou cirurgia.',
            diferenciais: ['Derrame maligno', 'Transudato (IC, cirrose, síndrome nefrótica)', 'Tuberculose pleural', 'Quilotórax'],
            alertas: ['Sempre toracocentese diagnóstica em derrame unilateral novo', 'ADA elevada no líquido + linfócitos = TB pleural', 'Empiema não drenado evolui para fibrotórax'],
            perola: 'Critérios de Light: sensibilidade 98% para exsudato. Se borderline, usar gradiente de albumina (>1,2 = transudato).',
            especialidade: 'Pneumologia'
          },
          {
            id: 'derrame-maligno', nome: 'Derrame Pleural Maligno', cid: 'J91',
            descricao: 'Derrame por invasão tumoral da pleura (CA pulmão, mama, linfoma) ou bloqueio linfático.',
            apresentacao: 'Dispneia progressiva + derrame volumoso recorrente após toracocentese. Perda de peso, história de neoplasia.',
            criterios: ['Citologia do líquido pleural positiva para células malignas ou biópsia pleural'],
            exames: ['Toracocentese + citologia + marcadores tumorais no líquido', 'TC tórax com contraste', 'PET-CT', 'Broncoscopia se CA pulmão'],
            tratamento: 'Toracocentese terapêutica (alívio sintomático). Pleurodese química (talco) ou cateter pleural de longa permanência para casos recorrentes.',
            diferenciais: ['Empiema (febre + pH baixo)', 'Quilotórax (triglicerídeos >110)', 'TB pleural (ADA alta + linfocitose)'],
            alertas: ['Derrame hemorrágico: neoplasia, TB, TEP ou trauma', 'Recorrência rápida após toracocentese sugere malignidade ou quilotórax'],
            perola: 'Quilotórax: líquido leitoso + triglicerídeos >110 mg/dL. Causas: linfoma, trauma cirúrgico (toracotomia).',
            especialidade: 'Pneumologia/Oncologia'
          },
          {
            id: 'hap', nome: 'Hipertensão Arterial Pulmonar', cid: 'I27.0',
            descricao: 'PAPm ≥25 mmHg em repouso por cateterismo direito, com PCP ≤15 mmHg. Grupo 1 da OMS. Causas: idiopática, hereditária (BMPR2), associada a CTD, HIV, drogas.',
            apresentacao: 'Dispneia progressiva de esforço (início insidioso), fadiga, síncope de esforço, precordialgia. Sinais: P2 hiperfonética, sopro tricúspide, hepatomegalia, edema. Hipoxemia.',
            criterios: ['Cateterismo cardíaco direito: PAPm ≥25 mmHg + PCP ≤15 mmHg + RVP >3 UW'],
            exames: ['ECO Doppler (HAP provável: PSAP>50mmHg)', 'Cateterismo direito (confirmatório)', 'TC tórax (doenças pulmonares, TEP)', 'Prova de função pulmonar', 'Sorologias: ANA, anti-centromero (esclerodermia), HIV', 'BNP (disfunção de VD)', 'Teste de caminhada 6 minutos (funcional)'],
            tratamento: 'Classe 1-2: vasodilatadores orais (antagonista endotelina: bosentana; inibidor fosfodiesterase: sildenafil). Classe 3-4: análogos de prostaciclina (epoprostenol IV). Classe 4: transplante pulmonar. Suporte: anticoagulação, O2, diuréticos.',
            diferenciais: ['HAP grupo 2 (IC esquerda — PCP>15)', 'HAP grupo 3 (doença pulmonar: DPOC, FPI)', 'HAP grupo 4 (HPTEC — TEP crônico)', 'Cardiomiopatia restritiva'],
            alertas: ['Síncope de esforço em HAP = pré-parada cardíaca (VD não consegue aumentar DC)', 'Gravidez: contraindicada (mortalidade 30-50%)', 'Sildenafil: contraindicado com nitrato (hipotensão grave)'],
            perola: 'P2 hiperfonética no focos pulmonar + síncope de esforço + mulher jovem = HAP até prova em contrário. Cateterismo direito é obrigatório para confirmar.',
            especialidade: 'Pneumologia/Cardiologia'
          },
          {
            id: 'sarcoidose', nome: 'Sarcoidose', cid: 'D86',
            descricao: 'Doença granulomatosa sistêmica de causa desconhecida com granulomas não caseosos. Acomete pulmões (90%), linfonodos, pele, olhos, coração.',
            apresentacao: 'Assintomática em 50%. Sintomática: tosse seca + dispneia + adenopatia hilar bilateral (radiologia). Síndrome de Löfgren: eritema nodoso + adenopatia hilar + artrite + febre (forma aguda, bom prognóstico).',
            criterios: ['Clínico + radiológico + histológico: granuloma não caseoso + exclusão de outras causas (TB, fungos)'],
            exames: ['RX tórax: adenopatia hilar bilateral simétrica (estágio I)', 'TC tórax (nódulos peribronciovasculares)', 'ECA sérica (elevada em 60% — não diagnóstico, mas monitoramento)', 'Biópsia brônquica/linfonodo (granuloma não caseoso)', 'Calcemia + calciúria (hipercalcemia em 10%)', 'ECG + ECO (sarcoidose cardíaca)', 'Lâmpada de fenda (uveíte)'],
            tratamento: 'Assintomático estágio I-II: observação (50% regride). Sintomático/progressivo: prednisona 0,5-1mg/kg/dia por 6-24 meses. Refratário: MTX ou azatioprina.',
            diferenciais: ['Linfoma mediastinal', 'Tuberculose (granuloma caseoso + BAAR+)', 'Histoplasmose', 'Beriliose (exposição ao berílio)', 'Hipersensibilidade pneumônica'],
            alertas: ['Sarcoidose cardíaca: bloqueio AV + arritmia ventriculares + morte súbita — ECG obrigatório', 'Hipercalcemia: granulomas produzem 1,25-OH-vitamina D em excesso', 'Neurossarcoidose: paralisia de nervo facial, meningite asséptica'],
            perola: 'Adenopatia hilar bilateral assintomática em adulto jovem = sarcoidose até prova em contrário. ECA elevada + adenopatia hilar bilateral = provalvelmente sarcoidose.',
            especialidade: 'Pneumologia'
          },
          {
            id: 'fpi', nome: 'Fibrose Pulmonar Idiopática (FPI)', cid: 'J84.1',
            descricao: 'Pneumonia intersticial usual (UIP) idiopática progressiva. Doença fibrosante inexorável. Prognóstico ruim: mediana de sobrevida 3-5 anos. Predomínio em homens >60 anos.',
            apresentacao: 'Dispneia progressiva de esforço de instalação insidiosa + tosse seca persistente + baqueteamento digital (em 50%). Crepitação bibasal inspiratória (som em velcro). Hipoxemia progressiva.',
            criterios: ['Padrão UIP à TCAR (faveolamento + bronquiectasias de tração bilaterais basais + ausência de achados contra UIP) sem causa identificada OU biópsia cirúrgica com UIP histológico'],
            exames: ['TCAR tórax (faveolamento + tração subpleural basilar bilateral)', 'PFP: padrão restritivo (CVF↓, CPT↓, DLCO↓)', 'Gasometria (hipoxemia ao esforço)', 'Biópsia transbronquica-criobiopsia ou cirúrgica se TCAR inconclusiva', 'Sorologias autoimunes (ANA, anti-Jo1) para excluir CTD-ILD'],
            tratamento: 'Antifibrótico: pirfenidona ou nintedanibe (reduz declínio da CVF em 50%). Transplante pulmonar bilateral: único tratamento curativo, selecionar precocemente. NÃO usar corticoide (pior desfecho). Reabilitação pulmonar + O2 suplementar. Exacerbação aguda: metilprednisolona IV (evidência limitada).',
            diferenciais: ['Hipersensibilidade pneumônica (achados TCAR diferentes, antígeno)', 'Pneumonia intersticial por CTD (AR, dermatomiosite — sorologias positivas)', 'Sarcoidose (adenopatia hilar)', 'Cardiogênicopulmonar (PCP elevada)', 'Asbestose (exposição, placas pleurais)'],
            alertas: ['FPI: corticoide é CONTRAINDICADO como tratamento — piora prognóstico. Registros históricos mostraram aumento de mortalidade com corticoide + N-acetilcisteína', 'Exacerbação aguda de FPI: internação + O2 + considerar UTI. Mortalidade >50% por episódio', 'Encaminhar para transplante precocemente (CVF<80% previsto ou queda rápida)'],
            perola: 'Velcro crackles (crepitação em velcro) + baqueteamento + dispneia progressiva + homem >60 anos + padrão UIP na TCAR = FPI. Nunca usar corticoide como principal tratamento.',
            especialidade: 'Pneumologia'
          },
          {
            id: 'pneumonia-atipica', nome: 'Pneumonia Atípica (Mycoplasma, Clamídia, Legionela)', cid: 'J22',
            descricao: 'PAC por agentes atípicos intracelulares. Mycoplasma pneumoniae: mais comum em jovens. Legionella pneumophila: surtos em sistemas de água, adultos imunocomprometidos. Chlamydophila pneumoniae: endêmica.',
            apresentacao: 'Síndrome "walkng pneumonia": febre gradual + tosse seca persistente + cefaleia + mialgia + fadiga + estado geral preservado (anda). RX: infiltrado intersticial ou bilateral difuso. Pode ter manifestações extrapulmonares.',
            criterios: ['Clínico + RX + sorologias (IgM Mycoplasma) ou PCR em lavado broncoalveolar. Legionella: antígeno urinário (sorotipo 1 — 80% dos casos)'],
            exames: ['RX tórax (infiltrado intersticial difuso bilateral)', 'Hemograma: leucocitose moderada ou normal', 'Sorologias: IgM Mycoplasma, Chlamydia (4× aumento)', 'Antígeno urinário Legionella (sorotipo 1)', 'PCR multiplex respiratório (painel)', 'PCR + creatinina + sódio (hiponatremia em Legionella)'],
            tratamento: 'Mycoplasma/Clamídia: azitromicina 500mg ×1 dia depois 250mg × 4 dias OU claritromicina OU doxiciclina. Legionella: fluoroquinolona (levofloxacino) OU azitromicina × 14-21 dias. Betalactâmico NÃO funciona (sem parede celular).',
            diferenciais: ['PAC por S. pneumoniae (mais grave, esputo purulento, lobar)', 'Influenza (surto sazonal, rápido início)', 'COVID-19 (pandemia, hipoxemia silenciosa)', 'Tuberculose (tosse crônica + hemoptise)'],
            alertas: ['Legionella + hiponatremia grave = combinação característica', 'Betalactâmico não cobre atípicos — usar macrolídeo ou fluoroquinolona em atípico', 'Mycoplasma: pode causar anemia hemolítica (crioglobulinas IgM) em crianças e jovens'],
            perola: 'Dissociação clinico-radiológica: paciente "bem demais" para o RX ruim = atípico. Paciente caminhando com infiltrado bilateral difuso = Mycoplasma até prova em contrário.',
            especialidade: 'Pneumologia/Infectologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 3. NEUROLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Neurologia',
    icone: '🧠',
    sintomas: [
      {
        sintoma: 'Cefaleia',
        doencas: [
          {
            id: 'migrania', nome: 'Migrânea (Enxaqueca)', cid: 'G43',
            descricao: 'Cefaleia primária recorrente, frequentemente unilateral e pulsátil.',
            apresentacao: 'Cefaleia unilateral pulsátil moderada-intensa, piora com atividade física, náusea/vômito, foto/fonofobia. Pode ter aura (visual, sensitiva, de linguagem por 20-60min).',
            criterios: ['≥5 episódios, duração 4-72h, ≥2 de: unilateral/pulsátil/intensa/piora com atividade, ≥1: náusea ou foto+fonofobia'],
            exames: ['Diagnóstico clínico. Neuroimagem se: início súbito, progressão, déficit focal, papiledema, febre'],
            tratamento: 'Crise: triptanos (sumatriptano 50-100mg) ou AINEs (ibuprofeno 600mg) + antieméticos. Preventivo se ≥4 crises/mês: propranolol, topiramato, amitriptilina, CGRP-anticorpos.',
            diferenciais: ['Cefaleia tensional', 'Cefaleia em salvas', 'HSA (cefaleia trovão)', 'Meningite', 'Hipertensão intracraniana'],
            alertas: ['Cefaleia trovão = HSA até prova contrária', 'Triptanos contraindicados em cardiopatia isquêmica e HAS não controlada', 'Cefaleia por uso excessivo de analgésicos: retirada progressiva'],
            perola: 'SNOOP4: Sistêmica, Neurológica, Onset súbito, Progressiva, Posicional, Papiledema, Precipitada por Valsalva, Pós-trauma = alarmes.',
            especialidade: 'Neurologia'
          },
          {
            id: 'has-subarac', nome: 'Hemorragia Subaracnóidea', cid: 'I60',
            descricao: 'Sangramento para o espaço subaracnóideo, geralmente por ruptura de aneurisma sacular.',
            apresentacao: 'Cefaleia trovão ("a pior dor da vida", início em segundos), rigidez de nuca, fotofobia, vômito. Pode ter perda de consciência transitória.',
            criterios: ['TC crânio sem contraste (98% sensibilidade nas primeiras 6h) ou LCR xantocrômico se TC negativa'],
            exames: ['TC crânio sem contraste (urgente)', 'LCR: xantocromia se TC negativa (após 12h da cefaleia)', 'Angio-TC ou angiografia cerebral'],
            tratamento: 'UTI neurocirúrgica + nimodipino 60mg 4/4h (prevenção de vasoespasmo) + clipagem cirúrgica ou embolização endovascular do aneurisma.',
            diferenciais: ['Migrânea', 'Meningite', 'Cefaleia coital', 'AVC hemorrágico'],
            alertas: ['TC negativa + suspeita clínica: FAZER LCR (xantocromia após 12h)', 'Ressangramento: 15-20% em 24h sem tratamento — emergência', 'Vasoespasmo cerebral: dias 4-14 após HSA'],
            perola: 'Vasoespasmo pós-HSA: causa de isquemia tardia. Prevenção: nimodipino, euvolemia, HHH (hipertensão-hemodiluição-hipervolemia).',
            especialidade: 'Neurologia/Neurocirurgia'
          },
          {
            id: 'cefaleia-tensional', nome: 'Cefaleia Tensional', cid: 'G44.2',
            descricao: 'Cefaleia primária mais comum. Geralmente associada a estresse e tensão muscular.',
            apresentacao: 'Dor em "faixa" ou "capacete" bilateral, pressão/aperto, leve-moderada, sem náusea, sem piora com atividade. Pode durar 30min a 7 dias.',
            criterios: ['≥10 episódios, duração 30min-7h, ≥2 de: bilateral/pressão-aperto/leve-moderada/sem piora com atividade, AUSÊNCIA de náusea e foto+fonofobia simultâneas'],
            exames: ['Diagnóstico clínico'],
            tratamento: 'AINEs ou paracetamol. Crônica: amitriptilina 25-75mg/noite. Medidas comportamentais: biofeedback, relaxamento.',
            diferenciais: ['Migrânea', 'Cefaleia por hipertensão intracraniana', 'Cefaleia cervicogênica'],
            alertas: ['Cefaleia tensional crônica pode ser por abuso de analgésicos (>15 dias/mês)', 'Diferenciar de migrânea: CT não tem náusea, não é pulsátil, bilateral'],
            perola: 'Cefaleia tensional episódica rara: tratar sintomático. Crônica (≥15 dias/mês por ≥3 meses): profilaxia com amitriptilina.',
            especialidade: 'Neurologia'
          },
          {
            id: 'cefaleia-salvas', nome: 'Cefaleia em Salvas', cid: 'G44.0',
            descricao: 'Cefaleia autonômica trigeminal. Mais intensa das cefaleias primárias. Predomina em homens jovens.',
            apresentacao: 'Dor orbitária/periorbital UNILATERAL gravíssima, 15-180min, 1-8x/dia em "salvas" de semanas a meses. Olacrimejamento ipsilateral, rinorreia, ptose, miose, hiperemia conjuntival.',
            criterios: ['≥5 crises de dor unilateral orbitária 15-180min + ≥1 autonômico ipsilateral + agitação'],
            exames: ['RNM crânio (excluir causa secundária, especialmente em salvas atípicas)', 'Diagnóstico clínico'],
            tratamento: 'Crise: O2 100% 12-15L/min por 15min (muito eficaz) ou sumatriptano SC 6mg. Preventivo: verapamil 240-480mg/dia, lítio, topiramato.',
            diferenciais: ['Migrânea', 'Neuralgia do trigêmeo', 'Hemicrania paroxística (responde à indometacina)'],
            alertas: ['Não usar opioides — ineficazes e causam abuso', 'Verapamil: fazer ECG antes (risco de bloqueio AV)', 'Salvas crônicas sem remissão: estimulação do nervo occipital ou hipotálamo posterior'],
            perola: 'O2 de alto fluxo: tratamento de crise mais seguro e eficaz na cefaleia em salvas — sempre ter disponível.',
            especialidade: 'Neurologia'
          },
        ]
      },
      {
        sintoma: 'Déficit Neurológico Focal',
        doencas: [
          {
            id: 'avc-isq', nome: 'AVC Isquêmico', cid: 'I63',
            descricao: 'Infarto cerebral por oclusão arterial (trombótica, embólica ou lacunar).',
            apresentacao: 'Déficit neurológico focal de início súbito: hemiplegia, afasia, hemianopsia, ataxia, disartria. FAST: Face/Arm/Speech/Time.',
            criterios: ['Clínico: déficit focal súbito. TC: exclui hemorrágico (pode ser normal nas primeiras 6h). RNM-DWI: padrão ouro'],
            exames: ['TC crânio sem contraste (urgente)', 'Glicemia capilar (imediato)', 'ECG', 'NIHSS', 'RNM-DWI + angio-RM', 'Ecocardiograma + Doppler carotídeo'],
            tratamento: 'Janela 4,5h: alteplase 0,9mg/kg IV (máx 90mg, 10% em bolus + 90% em 60min). Trombectomia mecânica até 24h em grandes vasos. AAS 300mg se não receber tPA.',
            diferenciais: ['Hipoglicemia (excluir PRIMEIRO)', 'Hematoma subdural', 'Neoplasia cerebral', 'Encefalopatia hipertensiva', 'Migrânea com aura prolongada'],
            alertas: ['Hipoglicemia MIMETIZA AVC — checar glicemia antes de QUALQUER manobra', 'PA <185/110 ANTES do tPA (labetalol IV se necessário)', 'Não anticoagular nas primeiras 24h após trombolítico'],
            perola: 'Tempo é cérebro: a cada minuto de isquemia, perdem-se ~1,9 milhões de neurônios. Door-to-needle <60min.',
            especialidade: 'Neurologia'
          },
          {
            id: 'hemorragia-ic', nome: 'Hemorragia Intracerebral', cid: 'I61',
            descricao: 'Sangramento dentro do parênquima cerebral, geralmente por ruptura de pequenos vasos por HAS.',
            apresentacao: 'Cefaleia intensa de início súbito + déficit focal + vômito + alteração do nível de consciência. Progressão em minutos a horas.',
            criterios: ['TC crânio: hiperdensidade intraparenquimatosa'],
            exames: ['TC crânio sem contraste (exame de escolha)', 'RNM (cavernomas, malformações)', 'Angiografia se suspeita de MAV/aneurisma', 'Coagulograma'],
            tratamento: 'UTI + monitorização. Controle intensivo de PA (PAS<140mmHg). Reverter anticoagulação. Cirurgia: hematomas cerebelares >3cm ou lobar com deterioração.',
            diferenciais: ['AVC isquêmico', 'HSA', 'Neoplasia hemorrágica', 'Encefalite'],
            alertas: ['NÃO dar tPA em hemorragia intracraniana — TC primeiro SEMPRE', 'Warfarina: reverter com vitamina K + CCP (concentrado de complexo protrombínico)', 'Glicemia: manter 140-180mg/dL (hiper e hipoglicemia pioram prognóstico)'],
            perola: 'Localização indica causa: putamen/cápsula interna = HAS; lobar = angiopatia amiloide (idoso); cerebelar = HAS; tálamo = HAS.',
            especialidade: 'Neurologia/Neurocirurgia'
          },
          {
            id: 'hematoma-subdural', nome: 'Hematoma Subdural', cid: 'S06.5',
            descricao: 'Coleção de sangue entre a dura-máter e a aracnoide. Agudo (trauma) ou crônico (idosos, uso de anticoagulante).',
            apresentacao: 'Crônico: cefaleia progressiva + confusão mental + flutuação de consciência, semanas após trauma mínimo. Agudo: coma pós-trauma.',
            criterios: ['TC crânio: hiperdensidade (agudo) ou hipodensidade (crônico) em meia-lua, comprimindo parênquima'],
            exames: ['TC crânio sem contraste (1ª linha)', 'RNM (crônico, isosdenso na TC)', 'Coagulograma'],
            tratamento: 'Sintomático com efeito de massa: drenagem cirúrgica (burr hole ou craniotomia). Assintomático pequeno: observação.',
            diferenciais: ['AVC isquêmico', 'Demência', 'Encefalite', 'Neoplasia cerebral'],
            alertas: ['Idoso anticoagulado + quedas = risco alto de hematoma subdural', 'Reverter anticoagulação antes da cirurgia', 'Hematoma subdural crônico pode simular AIT com flutuação'],
            perola: 'Intervalo lúcido clássico no hematoma EPIDURAL (não subdural): lucidez → deterioração por acúmulo sanguíneo.',
            especialidade: 'Neurocirurgia'
          },
          {
            id: 'ait', nome: 'Ataque Isquêmico Transitório (AIT)', cid: 'G45',
            descricao: 'Episódio transitório de disfunção neurológica focal por isquemia, sem infarto estabelecido. Dura <24h (geralmente <1h).',
            apresentacao: 'Déficits neurológicos transitórios: fraqueza/dormência de face-braço-perna, afasia, amaurose fugaz (cegueira monocular transitória). Resolução completa.',
            criterios: ['Clínico: déficit transitório focal + RNM sem evidência de infarto na área correspondente'],
            exames: ['TC crânio (urgente, excluir hemorrágico)', 'RNM-DWI', 'ECG + monitor cardíaco 24-72h', 'Doppler carotídeo + ecocardiograma', 'Hemograma + coagulação'],
            tratamento: 'AAS 300mg imediatamente + estatina de alta intensidade. Dupla antiagregação (AAS + clopidogrel) por 21 dias se ABCD²≥4. Investigar e tratar causa.',
            diferenciais: ['AVC isquêmico', 'Hipoglicemia', 'Migrânea com aura', 'Epilepsia (paralisia de Todd)', 'Síncope'],
            alertas: ['Risco de AVC nas 48h após AIT: 5-10% — emergência neurológica', 'ABCD² ≥4: hospitalizar urgente', 'Estenose carotídea >70%: endarterectomia em <2 semanas'],
            perola: 'ABCD²: Idade≥60(1)+PA≥140/90(1)+Clínica(fraqueza focal 2, afasia sem motor 1)+Duração≥60min(2, 10-59min 1)+DM(1). Max=7.',
            especialidade: 'Neurologia'
          },
        ]
      },
      {
        sintoma: 'Crise Convulsiva',
        doencas: [
          {
            id: 'epilepsia', nome: 'Epilepsia — Crise Aguda', cid: 'G40',
            descricao: 'Transtorno neurológico com predisposição a crises epilépticas recorrentes não provocadas.',
            apresentacao: 'Crise focal (consciência preservada ou prejudicada) ou generalizada (tônico-clônica, ausência, mioclônica). Confusão pós-ictal.',
            criterios: ['≥2 crises não provocadas com intervalo >24h, OU 1 crise + risco de recorrência >60%, OU diagnóstico de síndrome epiléptica'],
            exames: ['EEG (interictal)', 'RNM crânio com protocolo epilepsia', 'Hemograma + eletrólitos + glicemia + função renal'],
            tratamento: 'Crise prolongada (>5min): diazepam 10mg IV ou midazolam IM. Manutenção: valproato, lamotrigina, levetiracetam, carbamazepina (focal). Evitar desencadeantes (privação de sono, álcool).',
            diferenciais: ['Síncope convulsiva', 'AIT', 'Transtorno não epiléptico psicogênico', 'Hipoglicemia', 'Abstinência alcoólica'],
            alertas: ['Benzodiazepínico: tratamento de 1ª linha para crise aguda', 'Valproato: teratogênico — evitar em mulheres em idade fértil sem contracepção eficaz', 'Crise febril simples não é epilepsia'],
            perola: 'Estado de mal epiléptico (EME): crise >5min ou 2 crises sem recuperação. Tratar com BZD → fenitoína/valproato → anestesia geral.',
            especialidade: 'Neurologia'
          },
          {
            id: 'estado-mal', nome: 'Estado de Mal Epiléptico', cid: 'G41',
            descricao: 'Crise epiléptica >5min ou 2 crises sem recuperação entre elas. Emergência neurológica.',
            apresentacao: 'Convulsão tônico-clônica contínua ou recorrente sem recuperação. Pode ser sutil (desvio ocular, piscamento) em estado de mal não convulsivo.',
            criterios: ['Crise clínica >5min OU EEG com atividade epileptiforme contínua por >30min sem manifestação clínica (EME não convulsivo)'],
            exames: ['Glicemia capilar (IMEDIATO)', 'Eletrólitos + função renal + hepática', 'Nível de anticonvulsivantes', 'TC + LCR (após controle)', 'EEG contínuo'],
            tratamento: '0-5min: BZD (diazepam 10mg IV ou midazolam 10mg IM). 5-20min: fenitoína 20mg/kg IV ou valproato 40mg/kg IV ou levetiracetam 60mg/kg IV. >20min (refratário): anestesia geral (propofol, midazolam, tiopental).',
            diferenciais: ['Síncope convulsiva', 'Distonia aguda', 'Mioclonias não epilépticas'],
            alertas: ['Thiamina 100mg IV antes de glicose se suspeita de alcoolismo', 'Hipoglicemia: corrigir ANTES de anticonvulsivantes', 'EME não convulsivo: diagnóstico por EEG — suspeitar em paciente confuso pós-crise'],
            perola: 'Cada 30min de EME reduz chance de controle farmacológico. Protocolo por tempo é obrigatório.',
            especialidade: 'Neurologia/Emergência'
          },
          {
            id: 'miastenia', nome: 'Miastenia Gravis', cid: 'G70',
            descricao: 'Doença autoimune da junção neuromuscular por anticorpos anti-receptor de acetilcolina (AChR). Fraqueza flutuante, piora com esforço.',
            apresentacao: 'Ptose palpebral + diplopia (ocular em 85%). Fraqueza facial + disfagia + disartria. Crise miastênica: fraqueza respiratória grave (emergência).',
            criterios: ['Anti-AChR (positivo em 85% da forma generalizada)', 'Teste de gelo ocular (melhora de ptose)', 'Estimulação repetitiva (decremento >10%)', 'SFEMG (sensibilidade 95%)'],
            exames: ['Anti-AChR + Anti-MuSK (Anti-AChR negativo)', 'TC tórax (timoma em 15%)', 'Estimulação repetitiva do nervo', 'Espirometria (avalia falência respiratória)'],
            tratamento: 'Sintomático: piridostigmina (inibidor de colinesterase). Imunossupressor: prednisona ± azatioprina. Timectomia (todos com timoma + jovens AChR+). Crise miastênica: IVIG ou plasmaférese + UTI.',
            diferenciais: ['Síndrome de Lambert-Eaton (neoplasia, fraqueza de MMII, melhora com esforço)', 'Esclerose múltipla', 'AVC de tronco cerebral', 'Botulismo'],
            alertas: ['Crise miastênica: internação em UTI + VNI/VMI precoce + IVIG ou plasmaférese', 'Evitar: aminoglicosídeos, fluoroquinolonas, magnésio, betabloqueadores (agravam MG)', 'Timectomia: indicada em todos os casos AChR+ com timoma'],
            perola: 'Lambert-Eaton vs. MG: Lambert piora com repouso e MELHORA com exercício (ao contrário da MG). Anticorpo P/Q-VGCC.',
            especialidade: 'Neurologia'
          },
        ]
      },
      {
        sintoma: 'Doenças Neurológicas Crônicas',
        doencas: [
          {
            id: 'parkinson', nome: 'Doença de Parkinson', cid: 'G20',
            descricao: 'Doença neurodegenerativa por perda de neurônios dopaminérgicos na substância nigra. Corpos de Lewy.',
            apresentacao: 'Tríade: tremor de repouso (pílula entre os dedos), rigidez em roda dentada, bradicinesia. Marcha em festinação, hipomimia, micrografia.',
            criterios: ['Clínico: bradicinesia + tremor de repouso e/ou rigidez + assimétrico + boa resposta à levodopa'],
            exames: ['Diagnóstico clínico', 'RNM (excluir Parkinsonismo secundário)', 'DaTscan (SPECT com ioflupano) — confirmar denervação dopaminérgica'],
            tratamento: 'Levodopa + carbidopa (mais eficaz). Agonistas dopaminérgicos (pramipexol, ropinirol) em pacientes jovens. Inibidores da MAO-B (rasagilina, selegilina). DBS (estimulação cerebral profunda) em casos avançados.',
            diferenciais: ['Tremor essencial', 'Parkinsonismo vascular', 'Parkinsonismo induzido por fármacos', 'Parálisia supranuclear progressiva'],
            alertas: ['Haloperidol e metoclopramida pioram Parkinson — evitar', 'Síndrome de imobilização (crise musculoesquelética) se suspender levodopa abruptamente', 'Demência em ~80% dos casos ao longo do tempo'],
            perola: 'Tremor essencial: tremor de ação (ao mover), melhora com álcool, sem rigidez — diferente do Parkinson.',
            especialidade: 'Neurologia'
          },
          {
            id: 'alzheimer', nome: 'Doença de Alzheimer', cid: 'G30',
            descricao: 'Demência neurodegenerativa progressiva. Depósito de amiloide (placas senis) e proteína tau (emaranhados neurofibrilares).',
            apresentacao: 'Perda de memória episódica recente, seguida de desorientação, dificuldade de linguagem (afasia), apraxia, agnosia. Preservação inicial da memória remota.',
            criterios: ['Critérios NIA-AA: demência clínica + biomarcadores (LCR: amiloide↓+tau↑, PET-amiloide, RNM com atrofia hipocampal)'],
            exames: ['RNM crânio (atrofia hipocampal)', 'PET-FDG ou PET-amiloide', 'LCR (amiloide-42↓, tau total e fosfo-tau↑)', 'Avaliação neuropsicológica', 'MEEM, MoCA'],
            tratamento: 'Inibidores da acetilcolinesterase (donepezila, rivastigmina, galantamina) para leve-moderada. Memantina para moderada-grave. Anticorpos anti-amiloide (lecanemabe) — estadio inicial. Suporte familiar.',
            diferenciais: ['Demência vascular', 'Demência por corpúsculos de Lewy', 'Depressão (pseudodemência)', 'Hipotireoidismo', 'Deficiência de B12'],
            alertas: ['Sempre excluir causas reversíveis de demência (hipo, B12, sífilis, HIV, hematoma subdural)', 'MEEM <26 e MoCA <26 = déficit cognitivo significativo', 'Dirigir veículos: orientar família e notificar DETRAN'],
            perola: 'Demência por corpúsculos de Lewy: demência + parkinsonismo + alucinações visuais vívidas + flutuação cognitiva. Evitar neurolépticos típicos.',
            especialidade: 'Neurologia/Geriatria'
          },
          {
            id: 'miastenia-gravis', nome: 'Miastenia Gravis', cid: 'G70.0',
            descricao: 'Doença autoimune da junção neuromuscular por anticorpos anti-receptor de acetilcolina (AChR) em 85%, ou anti-MuSK. Fraqueza flutuante que piora com atividade.',
            apresentacao: 'Ptose palpebral (unilateral ou bilateral) + diplopia = apresentação mais comum (70%). Fraqueza de musculatura orofaríngea (disfagia, disartria, voz nasal). Fraqueza de membros proximal. Piora ao longo do dia e com esforço. Crise miastênica: insuficiência respiratória.',
            criterios: ['Teste de edrofônio (Tensilon): melhora transitória da ptose. Anti-AChR + AC anti-MuSK. EMG: decremento na estimulação repetitiva. SFEMG (jitter aumentado — mais sensível)'],
            exames: ['Anti-AChR (85% de sensibilidade)', 'Anti-MuSK (50% dos soronegativos)', 'TC de tórax (timoma em 10-15%)', 'EMG com estimulação repetitiva (decremento >10%)', 'SFEMG', 'PFP (capacidade vital — monitorar crise)'],
            tratamento: 'Sintomático: piridostigmina (inibidor de acetilcolinesterase) — 1ª linha. Imunossupressão: prednisona + azatioprina/micofenolato. Timectomia se timoma ou jovem generalizada. Crise miastênica: IVIG ou plasmaférese + UTI + evitar triggeres (aminoglicosídeos, bloqueadores neuromusculares).',
            diferenciais: ['Síndrome de Lambert-Eaton (melhora com atividade, anti-VGCC, paraneoplásica)', 'Botulismo (pupilas fixas)', 'Esclerose lateral amiotrófica', 'Ptose senil', 'Oftalmoplegia internuclear'],
            alertas: ['Crise miastênica: intubação precoce se CV <15mL/kg, PiMax <25 cmH2O', 'Medicamentos contraindicados: aminoglicosídeos, fluoroquinolonas, betabloqueadores, cloroquina, MgSO4', 'Timoma: investigar MG. MG: investigar timoma — relação bidirecional'],
            perola: 'Lambert-Eaton vs. Miastenia: Lambert piora com esforço inicial e MELHORA com atividade sustentada (facilitação). MG piora progressivamente. Lambert: paraneoplásico (CPPC), anti-VGCC.',
            especialidade: 'Neurologia'
          },
          {
            id: 'paralisia-bell', nome: 'Paralisia de Bell (Paralisia Facial Periférica)', cid: 'G51.0',
            descricao: 'Paralisia facial periférica idiopática aguda, provavelmente por reativação do HSV-1 no nervo facial (VII). Diagnóstico de exclusão.',
            apresentacao: 'Paralisia facial unilateral aguda (horas a dias) comprometendo TODA hemiface (periférica): fronte + pálpebra + boca. Não consegue fechar o olho (lagoftalmo) + queda da comissura labial + dificuldade de franzir testa. Dor retroauricular precede paralisia.',
            criterios: ['Diagnóstico clínico de exclusão. Paralisia facial periférica (fronte envolvida) + sem causa identificável (AVC, otite, tumor, sarcoidose, Lyme, herpes zoster)'],
            exames: ['Diagnóstico clínico. TC ou RNM se: atípico, progressão >3 semanas, recidiva, outros pares cranianos envolvidos. Sorologia Borrelia (Lyme em área endêmica). Glicemia (DM causa mononeuropatia)'],
            tratamento: 'Prednisona 60mg/dia × 5 dias + desmame (total 10 dias) — INICIAR EM 72H. Aciclovir 400mg 5×/dia × 10 dias (benefício marginal, adicionado ao corticoide). Proteção ocular: lágrimas artificiais + óculos escuros + oclusão noturna.',
            diferenciais: ['AVC (paralisia CENTRAL: fronte poupada, somente boca/face inferior)', 'Herpes zoster oticus — Síndrome de Ramsay Hunt (vesículas no pavilhão + dor + perda auditiva)', 'Otite média aguda/crônica', 'Tumor parótida', 'Sarcoidose', 'Doença de Lyme'],
            alertas: ['Fronte POUPADA = central (AVC cortical). Fronte COMPROMETIDA = periférica (Bell, Ramsay Hunt)', 'Lagoftalmo: risco de ceratite por exposição — cuidado ocular obrigatório', 'Corticoide dentro de 72h aumenta resolução de 70% para 85%'],
            perola: 'Paralisia central vs. periférica: Na central (AVC), o neurônio motor superior poupa a fronte (inervação bilateral cortical). Na periférica (Bell), o VII é acometido distalmente — TODA a hemiface cai.',
            especialidade: 'Neurologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 4. GASTROENTEROLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Gastroenterologia',
    icone: '🫶',
    sintomas: [
      {
        sintoma: 'Dor Abdominal Aguda',
        doencas: [
          {
            id: 'apendicite', nome: 'Apendicite Aguda', cid: 'K37',
            descricao: 'Inflamação do apêndice vermiforme. Emergência cirúrgica abdominal mais comum.',
            apresentacao: 'Dor periumbilical migrando para FID (sinal de Murphy de Rovsing), anorexia, febre baixa, náusea. Sinal de Blumberg (descompressão dolorosa em FID).',
            criterios: ['Alvarado ≥7 = cirurgia. 5-6: imagem. <5: observação. PCR + leucocitose desvio à esquerda'],
            exames: ['Hemograma (leucocitose)', 'PCR', 'US abdômen (apêndice >6mm, sem compressibilidade)', 'TC abdômen (dúvida ou perfuração)', 'β-hCG (mulheres em idade fértil)'],
            tratamento: 'Apendicectomia (laparoscópica ou aberta). ATB profilático (cefazolina). Perfurado: metronidazol + cefalosporina.',
            diferenciais: ['ITU/Pielonefrite', 'Gravidez ectópica', 'Torção de ovário', 'Doença de Crohn', 'Linfadenite mesentérica', 'Diverticulite'],
            alertas: ['Perfuração: dor difusa + defesa muscular + rigidez em tábua = peritonite generalizada', 'Apêndice retrocecal: dor pode ser lombar, não em FID', 'Idosos e imunossuprimidos: apresentação atípica'],
            perola: 'Alvarado: Migração(1)+Anorexia(1)+Náusea/Vômito(1)+FID sensível(2)+Descompressão dolorosa(1)+Febre(1)+Leucocitose(2)+Desvio(1). Máx=10.',
            especialidade: 'Cirurgia'
          },
          {
            id: 'pancreatite', nome: 'Pancreatite Aguda', cid: 'K85',
            descricao: 'Inflamação do pâncreas. Principais causas: litíase biliar (40%) e álcool (35%).',
            apresentacao: 'Dor epigástrica intensa em faixa irradiando ao dorso, náusea, vômito. Sinais de Cullen (periumbilical) e Grey-Turner (flanco) indicam pancreatite necro-hemorrágica.',
            criterios: ['≥2 de: dor típica + lipase/amilase >3× normal + TC mostrando pancreatite'],
            exames: ['Lipase (mais específica) + amilase', 'Hemograma', 'PCR (nas 48h)', 'Creatinina', 'TC abdômen com contraste (Balthazar, 48-72h se grave)', 'USG abdômen (colelitíase?)'],
            tratamento: 'Hidratação vigorosa Ringer Lactato 250-500mL/h nas primeiras 12-24h. Analgesia (dipirona + tramadol). Jejum → dieta precoce quando tolerado. Tratar causa (CPRE se coledocolitíase).',
            diferenciais: ['IAM inferior', 'Colecistite aguda', 'Úlcera péptica perfurada', 'Obstrução intestinal', 'Isquemia mesentérica'],
            alertas: ['BISAP ≥3 = pancreatite grave (mortalidade >15%)', 'ATB profilático NÃO indicado rotineiramente', 'Infecção do tecido pancreático necrótico: ATB + drenagem (endoscópica ou cirúrgica)'],
            perola: 'BISAP: BUN>25(1)+alteração mental(1)+SIRS(1)+Idade>60(1)+Derrame pleural(1). ≥3 = alto risco de mortalidade.',
            especialidade: 'Gastroenterologia/Cirurgia'
          },
          {
            id: 'colecistite', nome: 'Colecistite Aguda', cid: 'K81.0',
            descricao: 'Inflamação aguda da vesícula biliar, geralmente por obstrução do cístico por cálculo.',
            apresentacao: 'Dor em hipocôndrio direito irradiando para ombro direito/escápula, febre, náusea. Sinal de Murphy (parada inspiratória à palpação do HD). Leucocitose.',
            criterios: ['Tokyo Guidelines: dor HD + febre/leucocitose + USG (cálculo + espessamento de parede ≥4mm + líquido perivesicular + Murphy ecográfico)'],
            exames: ['USG abdômen (escolha)', 'Hemograma + PCR', 'TGO/TGP + Bilirrubinas + FA + GGT (avaliar via biliar)', 'TC se dúvida'],
            tratamento: 'Colecistectomia laparoscópica em <72h (preferencial) ou tardiamente após 6 semanas (maior risco de recidiva). ATB: cefalosporina + metronidazol.',
            diferenciais: ['Coledocolitíase', 'Colangite', 'Apendicite', 'Hepatite aguda', 'Úlcera péptica'],
            alertas: ['Colecistite alitiásica em UTI: alta mortalidade — USG suspeitar em paciente séptico sem foco', 'Tríade de Charcot: febre + icterícia + dor HD = COLANGITE (emergência)', 'Pêntade de Reynolds: Charcot + choque + confusão = colangite grave'],
            perola: 'Colecistectomia nas primeiras 72h é segura e reduz complicações vs. tratamento tardio.',
            especialidade: 'Cirurgia/Gastroenterologia'
          },
          {
            id: 'diverticulite', nome: 'Diverticulite Aguda', cid: 'K57.3',
            descricao: 'Inflamação/infecção de divertículos do cólon. Predomina em sigmoide.',
            apresentacao: 'Dor em FIE (apendicite do lado esquerdo), febre, constipação ou diarreia, leucocitose. Sinal de Blumberg em FIE.',
            criterios: ['TC abdômen com contraste: espessamento de parede do cólon, inflamação pericólica, divertículos'],
            exames: ['TC abdômen com contraste (exame de escolha)', 'Hemograma + PCR', 'Urina (fístula colo-vesical?)'],
            tratamento: 'Não complicada leve: metronidazol + ciprofloxacino VO ambulatorial. Moderada-grave: hospitalização + ATB IV. Abscesso: drenagem percutânea. Perfuração: cirurgia de Hartmann.',
            diferenciais: ['Apendicite (dor FIE é atípica)', 'Ca de cólon', 'DII', 'ITU', 'Síndrome do intestino irritável'],
            alertas: ['Colonoscopia após 6-8 semanas da resolução (excluir Ca de cólon)', 'Complicações: abscesso, perfuração, fístula, obstrução', 'NÃO fazer colonoscopia na fase aguda (risco de perfuração)'],
            perola: 'Diverticulite complicada: Hinchey III-IV (peritonite purulenta/fecal) = cirurgia de urgência com colostomia (Hartmann).',
            especialidade: 'Cirurgia/Gastroenterologia'
          },
          {
            id: 'obstrucao-int', nome: 'Obstrução Intestinal', cid: 'K56',
            descricao: 'Bloqueio mecânico do trânsito intestinal. Delgado (aderências, hérnia) ou grosso (neoplasia, volvo).',
            apresentacao: 'Dor abdominal em cólica, parada de gases e fezes, distensão abdominal, vômitos (fecaloides se alto). Peristaltismo aumentado (metálico) ou ausente (isquemia).',
            criterios: ['RX abdômen em pé: níveis hidroaéreos + alças distendidas. TC: confirma e localiza obstáculo'],
            exames: ['RX abdômen (decúbito + ortostático)', 'TC abdômen com contraste (melhor para etiologia)', 'Hemograma + eletrólitos + lactato (isquemia)'],
            tratamento: 'Sonda nasogástrica de descompressão + SG IV + NPO. Resolução espontânea em aderências (48-72h). Cirurgia se isquemia, perfuração, volvo ou obstrução completa.',
            diferenciais: ['Íleo paralítico (pós-op)', 'Peritonite', 'Cólica renal', 'Apendicite complicada', 'Isquemia mesentérica'],
            alertas: ['Lactato elevado = isquemia intestinal = cirurgia de urgência', 'Volvo de sigmoide: colonoscopia descompressiva pode ser 1ª linha se não isquemia', 'Vômito fecaloide = obstrução baixa avançada'],
            perola: 'Causa mais comum de obstrução de delgado: aderências pós-operatórias. Causa mais comum do grosso: neoplasia de cólon.',
            especialidade: 'Cirurgia'
          },
          {
            id: 'ulcera-perf', nome: 'Úlcera Péptica Perfurada', cid: 'K27.1',
            descricao: 'Perfuração de úlcera gastroduodenal com pneumoperitônio e peritonite.',
            apresentacao: 'Dor abdominal súbita e catastrófica (facada), abdômen em tábua (contratura involuntária), silêncio à ausculta, pneumoperitônio no RX.',
            criterios: ['RX abdômen em pé: gás subdiafragmático (pneumoperitônio). TC confirma e avalia extensão'],
            exames: ['RX abdômen em ortostase (urgente)', 'TC abdômen com contraste', 'Hemograma + creatinina + coagulograma'],
            tratamento: 'Cirurgia de urgência (sutura da perfuração laparoscópica ou aberta). Suporte: SNG descompressiva + ATB (cefalosporina + metronidazol) + IBP IV.',
            diferenciais: ['Pancreatite aguda grave', 'Ruptura de aorta', 'Isquemia mesentérica', 'Apendicite perfurada'],
            alertas: ['Pneumoperitônio: emergência cirúrgica', 'H. pylori: tratar após cirurgia para prevenir recidiva', 'AINEs e AAS são fatores de risco — revisar medicações'],
            perola: 'Ausência de pneumoperitônio no RX não exclui perfuração — TC tem maior sensibilidade (>97%).',
            especialidade: 'Cirurgia'
          },
          {
            id: 'drge', nome: 'Doença do Refluxo Gastroesofágico (DRGE)', cid: 'K21',
            descricao: 'Refluxo do conteúdo gástrico para o esôfago causando sintomas ou complicações. Muito prevalente (20% da população).',
            apresentacao: 'Pirose (queimação retroesternal) + regurgitação ácida, pior após refeições e ao deitar. Sintomas atípicos: tosse crônica, disfonia, globus faríngeo, laringite posterior.',
            criterios: ['Clínico (sintomas típicos). EDA se: alarme (disfagia, emagrecimento, sangue, idoso), sem resposta a IBP, >50 anos'],
            exames: ['EDA (diagnóstico de complicações: esofagite, Barrett, estenose)', 'pHmetria de 24h (confirma refluxo patológico)', 'Manometria esofágica (excluir acalasia)'],
            tratamento: 'Medidas não farmacológicas: cabeceira elevada, evitar refeições gordurosas/tardias, perder peso, não fumar. IBP (omeprazol 20-40mg/dia). Cirúrgico (fundoplicatura) em refratários com boa resposta a IBP.',
            diferenciais: ['Esofagite eosinofílica', 'Acalasia', 'Angina estável', 'Dispepsia funcional', 'Úlcera péptica'],
            alertas: ['Esôfago de Barrett: metaplasia intestinal por DRGE crônica. Risco de adenocarcinoma — vigilância endoscópica', 'Disfagia: nunca normalizar apenas com IBP — EDA obrigatória', 'IBP a longo prazo: deficiência de Mg2+, B12, osteoporose, infecção por C. difficile'],
            perola: 'Esôfago de Barrett: DRGE crônica + metaplasia de epitélio colunar no esôfago distal = risco de adenocarcinoma esofágico (200× maior). Vigilância com EDA.',
            especialidade: 'Gastroenterologia'
          },
          {
            id: 'neoplasia-colon', nome: 'Neoplasia Colorretal', cid: 'C18',
            descricao: 'Terceiro câncer mais comum no Brasil. Adenocarcinoma em 95%. Progride de pólipo adenomatoso → carcinoma in situ → invasor.',
            apresentacao: 'Cólon direito: anemia ferropriva + dor vaga em FID + massa palpável. Cólon esquerdo: mudança do hábito intestinal + hematoquezia + estenose (obstrução). Reto: tenesmo + sangramento retal.',
            criterios: ['Colonoscopia com biópsia (padrão ouro)'],
            exames: ['Colonoscopia + biópsia', 'CEA (marcador tumoral — prognóstico e seguimento)', 'TC abdômen/pelve (estadiamento)', 'PET-CT (metástases)', 'Pesquisa de sangue oculto (rastreamento)'],
            tratamento: 'Ressecção cirúrgica (colectomia). Estadio II-III: quimioterapia adjuvante (FOLFOX). Estadio IV: paliativo com cirurgia + quimioterapia (FOLFIRI + bevacizumabe ou cetuximabe se RAS/BRAF selvagem).',
            diferenciais: ['Doença diverticular', 'DII', 'Hemorroida (sangramento retal)', 'Anemia por outra causa'],
            alertas: ['Rastreamento: colonoscopia partir dos 45 anos (INCA); cada 10 anos se normal', 'Síndrome de Lynch (HNPCC): história familiar + rastreamento precoce (25 anos)', 'CEA elevado após cirurgia = suspeita de recidiva → PET-CT'],
            perola: 'Sindrome de Lynch: câncer colorretal hereditário mais comum (2-4%). Mutação nos genes de reparo de DNA (MLH1, MSH2). Risco de Ca de endométrio, ovário, urológico.',
            especialidade: 'Gastroenterologia/Cirurgia/Oncologia'
          },
        ]
      },
      {
        sintoma: 'Hemorragia Digestiva',
        doencas: [
          {
            id: 'hda', nome: 'Hemorragia Digestiva Alta', cid: 'K92.2',
            descricao: 'Sangramento proximal ao ângulo de Treitz. Causas: úlcera péptica (50%), varizes esofagianas (20%), Mallory-Weiss.',
            apresentacao: 'Hematêmese (vômito com sangue vivo ou em borra de café), melena (fezes negras, brilhantes, fétidas), instabilidade hemodinâmica.',
            criterios: ['Clínico + EDA (diagnóstico e tratamento endoscópico)'],
            exames: ['Hemograma + coagulograma + tipo sanguíneo', 'Ureia/creatinina (ureia elevada + creatinina normal = sangue degradado = HDA)', 'EDA em <24h (urgente se instável)'],
            tratamento: 'Estabilizar: 2 acessos calibrosos + cristaloide + transfusão (Hb<7, <8 se coronariopata). Omeprazol 80mg IV bolus + 8mg/h. EDA + hemostasia. Varizes: terlipressina + octeotride + ATB profilático + ligadura elástica.',
            diferenciais: ['HDB', 'Hemoptise engolida', 'Epistaxe deglutida', 'Sangramento nasofaríngeo'],
            alertas: ['Ureia elevada com creatinina normal = HDA (sangue degradado em intestino)', 'Varizes: NUNCA lavagem gástrica forçada', 'Blatchford 0: alta segura sem EDA'],
            perola: 'Score de Rockall pós-EDA: ressangramento e mortalidade. Forrest Ia/Ib (sangramento ativo): hemostasia obrigatória.',
            especialidade: 'Gastroenterologia/Cirurgia'
          },
          {
            id: 'hdb', nome: 'Hemorragia Digestiva Baixa', cid: 'K92.1',
            descricao: 'Sangramento distal ao ângulo de Treitz. Causas: doença diverticular, angiodisplasia, neoplasia, hemorroida.',
            apresentacao: 'Hematoquezia (fezes com sangue vivo ou escuro), instabilidade hemodinâmica em casos graves. Geralmente interrompe espontaneamente.',
            criterios: ['Colonoscopia (diagnóstico e terapêutico)'],
            exames: ['Hemograma + tipo sanguíneo', 'EDA (excluir HDA — 10-15% de HDB é HDA)', 'Colonoscopia (após preparo ou de urgência se instável)', 'Cintilografia ou angiografia (sangramento ativo sem diagnóstico)'],
            tratamento: 'Estabilização hemodinâmica. Colonoscopia diagnóstica e terapêutica. Embolização angiográfica. Cirurgia se refratário.',
            diferenciais: ['HDA com peristaltismo acelerado (sangue vivo)', 'Isquemia cólica', 'DII em atividade', 'Colite infecciosa'],
            alertas: ['10-15% das hematoquezias têm fonte em TGI alto — sempre fazer EDA se instável ou HDA provável', 'Doença diverticular: geralmente para espontaneamente mas pode recorrer'],
            perola: 'Sangramento diverticular: 80% para espontaneamente. Colonoscopia em <24h identifica fonte em 70-90% dos casos.',
            especialidade: 'Gastroenterologia/Cirurgia'
          },
        ]
      },
      {
        sintoma: 'Icterícia',
        doencas: [
          {
            id: 'hepatite-aguda', nome: 'Hepatite Aguda Viral', cid: 'B15',
            descricao: 'Inflamação hepática aguda por vírus hepatotrópicos. Hepatite A e E: via fecal-oral. B, C e D: parenteral/sexual.',
            apresentacao: 'Fase pré-ictérica: síndrome gripal, artralgia, náusea. Fase ictérica: icterícia + colúria + acolia + hepatomegalia dolorosa.',
            criterios: ['Sorologia viral (Anti-HAV IgM, HBsAg+Anti-HBcIgM, Anti-HCV)', 'TGO/TGP elevadas (>10× normal na viral aguda)'],
            exames: ['TGO, TGP, Bilirrubinas, FA, GGT', 'Sorologias (HAV, HBV, HCV, EBV, CMV)', 'Coagulograma (TP: avalia gravidade)', 'US abdômen'],
            tratamento: 'Hepatite A/E: suporte (autolimitada). Hepatite B aguda: raramente necessita antiviral. Hepatite C aguda: sofosbuvir + velpatasvir × 12 semanas. Evitar hepatotóxicos (álcool, paracetamol).',
            diferenciais: ['Colestase extra-hepática (coledocolitíase, neoplasia)', 'Hepatite alcoólica', 'Hepatite medicamentosa', 'Hemólise'],
            alertas: ['TP alargado em hepatite aguda = falência hepática iminente — encaminhar para transplante', 'Hepatite B: notificação compulsória', 'Contatos de HAV: vacina ou imunoglobulina dentro de 2 semanas'],
            perola: 'TGP/TGO >8× + icterícia = hepatite aguda viral. TGP >TGO em hepatite viral. TGO >TGP na alcoólica (razão TGO/TGP >2).',
            especialidade: 'Gastroenterologia/Infectologia'
          },
          {
            id: 'cirrose', nome: 'Cirrose Hepática e Suas Complicações', cid: 'K74',
            descricao: 'Fibrose hepática difusa com nódulos de regeneração. Estágio terminal de hepatopatias crônicas (alcoólica, viral, autoimune, NASH).',
            apresentacao: 'Compensada: assintomática. Descompensada: ascite, encefalopatia hepática, icterícia, sangramento por varizes, infecção (PBE).',
            criterios: ['Clínico + US/TC (lobus caudado aumentado, esplenomegalia, ascite, hipertensão portal) + biópsia (fibrose em pontes, nódulos)'],
            exames: ['TGO/TGP + Bilirrubinas + FA + GGT + TP + albumina', 'Hemograma (plaquetopenia por hiperesplenismo)', 'US com Doppler portal', 'Endoscopia (varizes)', 'Child-Pugh e MELD'],
            tratamento: 'Tratar causa. Ascite: diurético (espironolactona 100-400mg + furosemida 40-160mg) + restrição sódica + paracentese de alívio. Encefalopatia: lactulose + rifaximina. PBE: cefotaxima. Varizes: betabloqueador não seletivo + ligadura elástica.',
            diferenciais: ['Síndrome Budd-Chiari', 'Esquistossomose', 'Insuficiência cardíaca (cirrose cardíaca)', 'Amiloidose'],
            alertas: ['PBE: ascite + PMN >250 células = antibiótico imediato (cefotaxima 2g 8/8h)', 'Síndrome hepatorrenal: expansão com albumina 1g/kg IV + terlipressina', 'HCC: rastreamento com US + AFP a cada 6 meses'],
            perola: 'MELD = 3,78×ln(Bili) + 11,2×ln(INR) + 9,57×ln(Cr) + 6,43. MELD >15: considerar transplante hepático.',
            especialidade: 'Gastroenterologia'
          },
          {
            id: 'colangite', nome: 'Colangite Aguda', cid: 'K83.0',
            descricao: 'Infecção bacteriana da via biliar, geralmente por obstrução (coledocolitíase, estenose, neoplasia).',
            apresentacao: 'Tríade de Charcot: febre + icterícia + dor em HD. Pêntade de Reynolds: + choque + alteração do nível de consciência (grave).',
            criterios: ['Tokyo Guidelines: Charcot + leucocitose/PCR + imagem de dilatação de via biliar'],
            exames: ['Hemograma + PCR', 'Bilirrubinas + FA + GGT + TGO/TGP', 'Hemocultura (antes do ATB)', 'US abdômen', 'TC ou CPRM (extensão)', 'CPRE (diagnóstica e terapêutica)'],
            tratamento: 'ATB imediato (piperacilina-tazobactam ou meropeném em casos graves) + CPRE em <24h (descompressão biliar). Choque séptico: UTI + suporte.',
            diferenciais: ['Colecistite aguda', 'Hepatite aguda', 'Abscesso hepático', 'Pancreatite'],
            alertas: ['Pêntade de Reynolds = colangite grave = CPRE de urgência + UTI', 'Hemocultura + cultura da bile (CPRE) para ajuste do ATB', 'Gram-negativos (E. coli, Klebsiella): agentes mais comuns'],
            perola: 'CPRE em colangite: descompressão biliar é o tratamento definitivo. Mortalidade da colangite grave sem drenagem: >50%.',
            especialidade: 'Gastroenterologia/Cirurgia'
          },
        ]
      },
      {
        sintoma: 'Diarreia / Distúrbio do Trânsito',
        doencas: [
          {
            id: 'diarreia-infec', nome: 'Diarreia Infecciosa Aguda', cid: 'A09',
            descricao: 'Gastroenterite por vírus (rotavírus, norovírus), bactérias (Salmonella, E. coli, Clostridium difficile) ou parasitas.',
            apresentacao: 'Diarreia aquosa ou com muco/sangue, náusea, vômito, cólicas, febre. Desidratação em casos graves.',
            criterios: ['Clínico. Cultura de fezes se: sangue, febre alta, diarreia severa, imunossuprimido, viajante'],
            exames: ['Hemograma + eletrólitos', 'Coprocultura + parasitológico', 'Toxina C. difficile (uso recente de ATB)', 'Sigmoidoscopia se sangue + febre'],
            tratamento: 'Hidratação oral ou IV. ATB se: shigelose, febre tifoide, C. difficile (metronidazol ou vancomicina VO), cólera, diarreia do viajante grave. Probióticos adjuvantes.',
            diferenciais: ['DII em atividade', 'Colite isquêmica', 'Doença celíaca', 'Hipertireoidismo', 'Síndrome do intestino irritável'],
            alertas: ['C. difficile: metronidazol VO × 10 dias. Recidivante: vancomicina + fidaxomicina. Grave: vancomicina VO', 'Sinais de alarme: sangue + febre + desidratação grave = hospitalizar', 'Loperamida contraindicado em diarreia sanguinolenta'],
            perola: 'Diarreia do viajante: E. coli enterotoxigênica (ETEC) mais comum. Tratar com azitromicina ou ciprofloxacino dose única.',
            especialidade: 'Infectologia/Gastroenterologia'
          },
          {
            id: 'dii-crohn', nome: 'Doença de Crohn', cid: 'K50',
            descricao: 'DII transmural, pode acometer qualquer segmento do TGI (da boca ao ânus), mais comum em íleo terminal e cólon.',
            apresentacao: 'Dor abdominal em cólica (FID), diarreia, perda de peso, febre. Lesões perianais (fístulas, abscessos). Manifestações extraintestinais: artrite, eritema nodoso, uveíte.',
            criterios: ['Colonoscopia + biópsia (lesões descontínuas, granulomas, comprometimento transmural) + TC/CPRM (fístulas, abscessos, estenoses)'],
            exames: ['Hemograma + PCR + VHS', 'Calprotectina fecal (atividade)', 'Colonoscopia com biópsia', 'TC ou RNM de abdômen (enterografia)', 'Cápsula endoscópica (delgado)'],
            tratamento: 'Leve-moderada: aminossalicilatos ou corticoide (budesonida). Moderada-grave: corticoide sistêmico + imunossupressores (azatioprina) + biológicos (anti-TNF: infliximabe, adalimumabe). Complicações: cirurgia.',
            diferenciais: ['RCUI', 'Apendicite', 'Tuberculose intestinal', 'Linfoma', 'Infecção por Yersinia'],
            alertas: ['Corticoide: contraindicado em manutenção (apenas indução)', 'Biológicos: rastrear TB latente antes de iniciar (PPD/IGRA + RX tórax)', 'Risco aumentado de linfoma e Ca colorretal'],
            perola: 'Crohn vs. RCUI: Crohn = transmural + descontínuo + qualquer segmento. RCUI = mucosa + contínuo + cólon.',
            especialidade: 'Gastroenterologia'
          },
          {
            id: 'hepatite-alcoolica', nome: 'Hepatite Alcoólica Grave', cid: 'K70.1',
            descricao: 'Inflamação hepática aguda por consumo excessivo de álcool. Grave: discriminant function (DF) de Maddrey ≥32 ou MELD≥20. Mortalidade 30-50% em 30 dias.',
            apresentacao: 'Icterícia aguda + febre + hepatomegalia dolorosa + náusea em etilista crônico. Ascite, encefalopatia hepática nos graves. Pode surgir após redução súbita do consumo.',
            criterios: ['DF de Maddrey = 4,6 × (TAP do paciente − TAP controle) + bilirrubina total. DF ≥32: corticoterapia indicada se sem contraindicação'],
            exames: ['TGO/TGP (relação TGO:TGP>2:1 típica, ambas raramente >300 — diferente de hepatite viral)', 'GGT elevada', 'Bilirrubinas (hiperbilirrubinemia direta)', 'Coagulograma (TP alargado)', 'Hemograma (leucocitose, trombocitopenia, VCM alto)', 'Albumina (hipoalbuminemia)', 'MELD (prognóstico)'],
            tratamento: 'DF ≥32: prednisolona 40mg/dia × 28 dias (excluir: infecção ativa, sangramento GI ativo, IRA grave, hepatite viral). Resposta ao 7° dia (LILLE score<0,45 = continuar). N-acetilcisteína associada melhora sobrevida. Pentoxifilina: alternativa se contraindicação ao corticoide. Abstinência obrigatória. Transplante hepático em centros selecionados.',
            diferenciais: ['Hepatite viral aguda (TGO/TGP>1000, relação 1:1)', 'DILI (drug-induced liver injury)', 'Colangite aguda', 'Hepatite isquêmica (TGO/TGP>5000 + hipotensão)'],
            alertas: ['Corticoide em hepatite alcoólica: contraindicado se infecção ativa — screening obrigatório (hemocultura, urocultura, PL se encefalopatia)', 'Sangramento GI: PPIs profiláticos durante corticoterapia', 'LILLE score no 7° dia: prediz resposta ao corticoide. Se ≥0,45: ineficaz — suspender'],
            perola: 'TGO/TGP: hepatite alcoólica → TGO>TGP (relação >2), ambas raramente >300. Hepatite viral → TGO e TGP >1000 e proporcionais. O álcool lesiona a mitocôndria (TGO mitocondrial).',
            especialidade: 'Gastroenterologia/Hepatologia'
          },
          {
            id: 'pancreatite-cronica', nome: 'Pancreatite Crônica', cid: 'K86.1',
            descricao: 'Processo inflamatório progressivo do pâncreas levando a fibrose irreversível com perda da função exócrina e endócrina. Principal causa: álcool (60-70%).',
            apresentacao: 'Dor epigástrica irradiando para dorso, em faixa, persistente ou recorrente + alívio com posição fetal. Esteatorreia (gordura nas fezes = insuficiência exócrina). Diabetes mellitus (tardio, insuficiência endócrina). Perda de peso.',
            criterios: ['Imagem: TC ou RNM mostrando calcificações pancreáticas e/ou dilatação do ducto de Wirsung'],
            exames: ['TC abdome (calcificações + dilatação ductal)', 'RNM/CPRM (ductos)', 'USG abdominal', 'Elastase fecal-1 (insuficiência exócrina: <100 mcg/g)', 'Glicemia/HbA1c (DM pancreatogênico)', 'CA 19-9 + TC (excluir adenocarcinoma de pâncreas)'],
            tratamento: 'Abstinência absoluta do álcool. Dor: analgesia escalonada (paracetamol→AINE→opioide→neuroléptico). Enzimas pancreáticas (lipase) nas refeições (esteatorreia). Insulina (DM tipo 3c). Endoscopia (litotripsia de cálculos ductais, drenagem). Cirurgia (Frey, Beger) em casos refratários.',
            diferenciais: ['Pancreatite aguda recorrente', 'Adenocarcinoma pancreático (obstrução ductal focal)', 'Úlcera péptica', 'Doença celíaca (esteatorreia)'],
            alertas: ['CA 19-9 + massa pancreática: excluir adenocarcinoma (cirurgia pan. crônica aumenta risco 10-15×)', 'DM pancreatogênico (tipo 3c): resistência ao glucagon + hipoglicemia grave com insulina — tratar com cautela', 'Cálculos pancreáticos + dor: CPRE + litotripsia antes da cirurgia'],
            perola: 'Tríade de Comfort (pancreatite crônica): dor em faixa irradiando para dorso + esteatorreia + DM. A progressão segue essa ordem — dor precede anos a insuficiência.',
            especialidade: 'Gastroenterologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 5. INFECTOLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Infectologia',
    icone: '🦠',
    sintomas: [
      {
        sintoma: 'Sepse e Choque Séptico',
        doencas: [
          {
            id: 'sepse', nome: 'Sepse', cid: 'A41',
            descricao: 'Disfunção orgânica com risco de vida causada por resposta desregulada do hospedeiro à infecção.',
            apresentacao: 'Febre (ou hipotermia) + taquicardia + taquipneia + alteração do estado mental + disfunção orgânica (SOFA ≥2 pontos acima do basal).',
            criterios: ['Sepse-3: suspeita de infecção + SOFA ≥2. Choque séptico: sepse + vasopressor + lactato >2 mmol/L apesar de reposição'],
            exames: ['Hemograma + PCR + Procalcitonina', 'Hemocultura ×2 (antes do ATB)', 'Lactato (sérico)', 'Creatinina + Bilirrubinas + Coagulograma', 'Urina + urocultura', 'RX tórax + US ponto de cuidado'],
            tratamento: 'Pacote sepse 1h: ATB de largo espectro (piperacilina-tazobactam ou meropeném) + coleta de hemoculturas + lactato + reposição volêmica 30mL/kg cristaloide se hipoperfusão + norepinefrina se PAM<65 após volume.',
            diferenciais: ['SIRS não infecciosa', 'Pancreatite', 'Insuficiência adrenal', 'Intoxicação exógena', 'TEP maciço'],
            alertas: ['ATB dentro da 1ª hora reduz mortalidade significativamente', 'Lactato >4 mmol/L = alta mortalidade mesmo sem hipotensão', 'Vasopressor de escolha: norepinefrina. Alternativa: vasopressina'],
            perola: 'qSOFA (triagem fora da UTI): FR≥22+confusão+PAS≤100. ≥2 = alto risco. Confirmar com SOFA completo.',
            especialidade: 'Infectologia/UTI'
          },
          {
            id: 'pneumonia', nome: 'Pneumonia Adquirida na Comunidade', cid: 'J18',
            descricao: 'Infecção do parênquima pulmonar fora do hospital. Agentes: S. pneumoniae (mais comum), Mycoplasma, H. influenzae.',
            apresentacao: 'Febre, tosse produtiva, dispneia, dor pleurítica. Estertores crepitantes localizados, sopro tubário, macicez à percussão.',
            criterios: ['Infiltrado radiológico novo + sintomas clínicos'],
            exames: ['RX tórax', 'Hemograma + PCR/VHS', 'CURB-65 (gravidade)', 'Hemocultura ×2 (internado)', 'Antígenos urinários (pneumococo + Legionella) se grave', 'Oximetria'],
            tratamento: 'CURB-65 0-1: amoxicilina VO ambulatorial. 2: internação + ATB IV. ≥3: UTI. Empírico: amoxicilina-clavulanato + azitromicina (ou fluoroquinolona respiratória).',
            diferenciais: ['ICC descompensada', 'TB pulmonar', 'Derrame pleural', 'Neoplasia', 'DPOC exacerbada'],
            alertas: ['CURB-65: Confusão(1)+Ureia>19(1)+FR≥30(1)+PAS<90 ou PAD≤60(1)+Idade≥65(1)', 'Legionella: hiponatremia + diarreia + alteração neurológica', 'Atípicos (Mycoplasma): responde macrolídeos, não beta-lactâmicos'],
            perola: 'Pneumonia atípica: sem consolidação típica, infiltrado intersticial, escarro escasso, síndrome gripal proeminente. Tratar com macrolídeo.',
            especialidade: 'Infectologia/Pneumologia'
          },
          {
            id: 'itu', nome: 'Infecção do Trato Urinário / Pielonefrite', cid: 'N39',
            descricao: 'Cistite (baixa) ou pielonefrite (alta). Mais comum em mulheres. E. coli em 80% dos casos.',
            apresentacao: 'Cistite: disúria, polaciúria, urgência, hematúria. Pielonefrite: febre alta, calafrios, dor lombar, náusea, sinal de Giordano positivo.',
            criterios: ['EAS com leucocitúria + nitritos + urocultura >10⁵ UFC/mL (contaminação: <10³)'],
            exames: ['EAS + urocultura + antibiograma', 'Hemograma + PCR (pielonefrite)', 'Creatinina', 'USG vias urinárias (complicações, obstrução)'],
            tratamento: 'Cistite simples: nitrofurantoína 100mg 6/6h × 5 dias ou fosfomicina 3g dose única. Pielonefrite: ciprofloxacino 500mg 12/12h ×7-10d VO (grave: ceftriaxona IV). Ajustar pelo antibiograma.',
            diferenciais: ['Uretrite/IST', 'Litíase renal', 'Vulvovaginite', 'Prostatite', 'Apendicite'],
            alertas: ['Não usar fluoroquinolona como 1ª linha em cistite simples (resistência crescente no Brasil)', 'Grávidas: tratar sempre, mesmo assintomáticas (amoxicilina ou cefalexina)', 'ITU complicada (homem, grávida, cateter, estrutural): cultura obrigatória'],
            perola: 'Bacteriúria assintomática: tratar APENAS em grávidas e antes de procedimentos urológicos.',
            especialidade: 'Infectologia/Urologia'
          },
        ]
      },
      {
        sintoma: 'Febre com Exantema / Manifestações Sistêmicas',
        doencas: [
          {
            id: 'dengue', nome: 'Dengue', cid: 'A90',
            descricao: 'Arbovirose transmitida pelo Aedes aegypti. Quatro sorotipos (DENV 1-4). Notificação compulsória.',
            apresentacao: 'Febre alta abrupta (38-40°C) + cefaleia frontoorbitária + mialgia intensa + artralgia + exantema maculopapular. Dengue grave: sangramento + choque + disfunção orgânica.',
            criterios: ['Dengue provável: febre + 2 sintomas + local endêmico. Confirmado: NS1 (1ª semana) ou sorologia IgM/IgG (após 5° dia) ou RT-PCR'],
            exames: ['Hemograma seriado (leucopenia + plaquetopenia <100.000 = alerta)', 'NS1 (1°-3° dia)', 'Sorologia IgM/IgG', 'Hematócrito (hemoconcentração = extravasamento)', 'TGO/TGP (hepatite dengue)'],
            tratamento: 'Hidratação oral (grupos A e B) ou IV (grupos C e D). Paracetamol/dipirona para febre. PROIBIDO: AAS e AINEs (risco de sangramento).',
            diferenciais: ['Zika', 'Chikungunya', 'Febre amarela', 'Leptospirose', 'Malária', 'Influenza'],
            alertas: ['Sinais de alarme: dor abdominal intensa, vômitos persistentes, sangramento de mucosas, letargia, hepatomegalia', 'AAS e AINEs aumentam risco de sangramento — contraindicados', 'Notificação compulsória em até 24h'],
            perola: 'Hematócrito: aumento ≥20% indica extravasamento plasmático. Queda brusca de hematócrito com piora clínica = sangramento grave.',
            especialidade: 'Infectologia'
          },
          {
            id: 'celulite', nome: 'Celulite e Erisipela', cid: 'L03',
            descricao: 'Erisipela: infecção dérmica superficial (estreptococo grupo A). Celulite: infecção mais profunda (estreptococo e S. aureus).',
            apresentacao: 'Erisipela: placa eritematosa, edemaciada, quente, brilhante, bem delimitada, em MMII ou face. Celulite: eritema mal delimitado, sem borda elevada.',
            criterios: ['Diagnóstico clínico. Cultura raramente positiva (<5%)'],
            exames: ['Hemograma + PCR', 'Hemocultura (se febre alta + imunossuprimido)', 'US (excluir abscesso subcutâneo ou fascite)', 'Glicemia (DM?)'],
            tratamento: 'Erisipela/celulite não complicada: amoxicilina VO 500mg 8/8h × 7-10 dias. Grave ou sistêmica: oxacilina ou ceftriaxona IV. Elevar MMII.',
            diferenciais: ['Trombose venosa profunda', 'Dermatite de estase', 'Fascite necrosante (urgência cirúrgica)', 'Gota'],
            alertas: ['Fascite necrosante: dor desproporcional + crepitação + necrose + instabilidade = desbridamento cirúrgico urgente', 'Recorrência de erisipela: profilaxia com penicilina benzatina 1,2M/mês', 'DM e insuficiência venosa: fatores predisponentes mais comuns'],
            perola: 'Fascite necrosante: LRINEC score ≥6 = alto risco. Cirurgia imediata salva vida — não esperar imagem confirmatória.',
            especialidade: 'Infectologia/Dermatologia'
          },
          {
            id: 'endocardite', nome: 'Endocardite Infecciosa', cid: 'I33',
            descricao: 'Infecção das valvas cardíacas. Agentes: S. aureus (aguda), Streptococcus viridans (subaguda), Enterococcus, HACEK.',
            apresentacao: 'Febre persistente + sopro cardíaco novo/piorado + sintomas embólicos. Sinais periféricos: Osler, Janeway, Roth, hemorragias subungueais.',
            criterios: ['Duke: 2 maiores OU 1 maior + 3 menores OU 5 menores. Maiores: hemocultura+ típica ×2 + imagem (ecocardiograma com vegetação)'],
            exames: ['Hemocultura ×3 (antes do ATB, intervalos de 1h)', 'Ecocardiograma (transesofágico preferencial)', 'Hemograma + PCR + VHS + creatinina + urina'],
            tratamento: 'Estreptococo: penicilina G + gentamicina × 4-6 semanas. S. aureus MSSA: oxacilina. MRSA: vancomicina. Cirurgia: IC refratária, abscesso, vegetação grande, bacteremia persistente.',
            diferenciais: ['Febre reumática', 'Lúpus endocardite (Libman-Sacks)', 'Mixoma atrial', 'Tromboembolismo por outra causa'],
            alertas: ['Hemocultura ANTES de qualquer ATB — diagnóstico depende disso', 'Uso de droga IV: S. aureus + válvula tricúspide', 'Dentistas e procedimentos: profilaxia em pacientes de alto risco com amoxicilina 2g VO'],
            perola: 'Embolias sistêmicas: AVC (valva mitral e aórtica), AIT, embolia séptica pulmonar (valva tricúspide — usuário de drogas IV).',
            especialidade: 'Infectologia/Cardiologia'
          },
          {
            id: 'choque-septico', nome: 'Choque Séptico', cid: 'R57.2',
            descricao: 'Sepse com hipotensão refratária a fluidos + disfunção celular/metabólica grave. Mortalidade hospitalar >40%.',
            apresentacao: 'Hipotensão (PAM<65) após reposição de 30mL/kg + vasopressor necessário + lactato >2 mmol/L.',
            criterios: ['Sepse-3: sepse + vasopressor para manter PAM≥65 + lactato>2 mmol/L após reposição adequada'],
            exames: ['Lactato seriado (lactato>4 = má perfusão grave)', 'Ecocardiograma ponto-de-cuidado (função VE, VCI)', 'Hemograma + coagulograma + função orgânica', 'Procalcitonina + PCR', 'Culturas (hemo×2, urina, LCR se indicado)'],
            tratamento: 'Bundle 1h: ATB + hemoculturas + lactato + 30mL/kg SF. Vasopressor (norepinefrina de escolha, PAM alvo 65). Corticoide (hidrocortisona 200mg/dia) se refratário a vasopressores. Controle da fonte infecciosa (cirurgia/drenagem).',
            diferenciais: ['Choque cardiogênico (BNP alto + ICC)', 'Choque distributivo não séptico (anafilaxia, Addison)', 'Choque hemorrágico', 'Tamponamento cardíaco'],
            alertas: ['Norepinefrina: 1ª linha. Vasopressina como adjuvante (0,03U/min). Dopamina: maior risco de arritmia', 'Transfusão de hemácias: Hb<7 (ou <9 se coronariopata)', 'Controle glicêmico: 140-180 mg/dL (hiper e hipoglicemia pioram)'],
            perola: 'Meta da ressuscitação: PAM≥65 + débito urinário≥0,5mL/kg/h + lactato em queda + ScvO2≥70%. Evitar ressuscitação excessiva (overload hídrico = pior desfecho).',
            especialidade: 'Infectologia/UTI'
          },
        ]
      },
      {
        sintoma: 'Doenças Tropicais e Emergentes',
        doencas: [
          {
            id: 'malaria', nome: 'Malária', cid: 'B54',
            descricao: 'Infecção por Plasmodium (P. falciparum — mais grave, P. vivax — mais comum no Brasil). Transmissão por Anopheles fêmea.',
            apresentacao: 'Febre em acessos (tercã ou quartã), calafrios, sudorese, cefaleia, mialgia, esplenomegalia. P. falciparum: malária grave com coma, anemia grave, IRA, SDRA, hipoglicemia.',
            criterios: ['Gota espessa (padrão ouro — identifica espécie e parasitemia) + Teste rápido (HRP2 para falciparum)'],
            exames: ['Gota espessa + esfregaço delgado (identificar espécie)', 'Teste rápido (RDT)', 'Hemograma + bilirrubinas + creatinina + glicemia', 'TC de crânio (malária cerebral)'],
            tratamento: 'P. vivax/ovale: cloroquina 3 dias + primaquina 14 dias (G6PD antes — hemólise). P. falciparum: artemeter-lumefantrina (1ª linha) OU artesunato IV se grave.',
            diferenciais: ['Dengue', 'Febre tifoide', 'Leptospirose', 'Hepatite viral', 'Sepse por gram-negativo'],
            alertas: ['Notificação compulsória imediata', 'P. falciparum: risco de morte sem tratamento em 24-48h', 'Primaquina contraindicada em gestante e deficiência de G6PD — hemólise'],
            perola: 'Malária grave (P. falciparum): artesunato IV superior à quinina. Critérios OMS: parasitemia >5%, coma, IRA, anemia Hb<7, acidose, hipoglicemia, SDRA.',
            especialidade: 'Infectologia'
          },
          {
            id: 'leptospirose', nome: 'Leptospirose', cid: 'A27',
            descricao: 'Zoonose por Leptospira interrogans. Transmissão: contato com urina de roedores (enchentes, lama). Notificação compulsória.',
            apresentacao: 'Fase leptospirêmica (1ª semana): febre abrupta, cefaleia, mialgia intensa (panturrilhas), sufusão conjuntival, fotofobia. Síndrome de Weil (fase imune): icterícia + IRA + hemorragia (grave).',
            criterios: ['Clínico + MAT (microaglutinação) título ≥200 ou 4× aumento entre amostras OU IgM ELISA OU cultura'],
            exames: ['Hemograma (leucocitose + desvio)', 'Creatinina + ureia + bilirrubinas + TGO/TGP', 'CK (miosite)', 'Urinálise', 'Sorologia MAT ou IgM-ELISA', 'RX tórax (hemorragia pulmonar)'],
            tratamento: 'Leve-moderada: amoxicilina VO ou doxiciclina × 7 dias. Grave: penicilina G cristalina 1,5M UI 6/6h IV × 7 dias. Suporte de IRA (diálise se necessário).',
            diferenciais: ['Dengue', 'Hepatite viral aguda', 'Febre amarela', 'Malária', 'Hantavirose'],
            alertas: ['Hemorragia pulmonar (SRAG): ventilação mecânica precoce, mortalidade >50%', 'Diálise precoce na Síndrome de Weil: reduz mortalidade', 'Notificação compulsória em 24h'],
            perola: 'Tríade de Weil: icterícia + IRA + hemorragia = leptospirose grave. Olhos ictéricos + conjuntivite + mialgia de panturrilhas = clínica típica.',
            especialidade: 'Infectologia'
          },
          {
            id: 'meningite-viral', nome: 'Meningite Viral (Asséptica)', cid: 'A87',
            descricao: 'Inflamação das meninges por vírus (enterovírus mais comum, HSV-2, caxumba). Geralmente benigna e autolimitada.',
            apresentacao: 'Febre + cefaleia + rigidez de nuca + fotofobia — idêntica à bacteriana mas mais gradual. Geralmente sem alteração grave de consciência. Exantema viral pode estar presente.',
            criterios: ['LCR: pleocitose linfocítica (50-1000 cels), glicose normal ou levemente baixa, proteína levemente elevada, Gram e cultura negativos'],
            exames: ['Punção lombar (LCR)', 'PCR viral no LCR (enterovírus, HSV-2)', 'Hemograma + PCR (leucocitose discreta)', 'Sorologias virais'],
            tratamento: 'Suporte. Se HSV suspeito: aciclovir IV até confirmação (HSV-2 pode causar meningite recorrente). Enterovírus: resolução espontânea em 7-10 dias.',
            diferenciais: ['Meningite bacteriana (LCR diferencia)', 'Encefalite herpética (alteração de consciência + focal)', 'HSA', 'Meningite por criptococo (imunocomprometido)'],
            alertas: ['Sempre diferenciar de bacteriana pelo LCR', 'Encefalite herpética: confusão + alteração temporal + febre = aciclovir empírico sem esperar PCR', 'Imunossuprimido + meningite = criptococo: tinta da China no LCR'],
            perola: 'LCR meningite viral: proteína <200, glicose >50% da sérica, celularidade <1000 com predomínio linfocítico — muito diferente da bacteriana.',
            especialidade: 'Infectologia/Neurologia'
          },
        ]
      },
      {
        sintoma: 'ISTs e HIV',
        doencas: [
          {
            id: 'sifilis', nome: 'Sífilis', cid: 'A51',
            descricao: 'IST por Treponema pallidum. Primária, secundária, latente, terciária. Transmissão sexual e vertical (congênita). Notificação compulsória.',
            apresentacao: 'Primária: cancro duro indolor. Secundária: roséola sifilítica (palmas e plantas), condiloma plano, alopecia. Terciária: goma sifilítica, neurossífilis, sífilis cardiovascular.',
            criterios: ['VDRL/RPR (triagem, quantitativo) + FTA-ABS ou TPHA (confirmatório)'],
            exames: ['VDRL + FTA-ABS', 'LCR se neurossífilis suspeita (VDRL no LCR)', 'HIV + Hepatites (coinfecção)', 'Parceiros: testar e tratar'],
            tratamento: 'Primária/secundária/latente recente: Penicilina benzatina 2,4M UI IM dose única. Latente tardia ou duração desconhecida: 3 doses semanais. Neurossífilis: penicilina G cristalina 18-24M UI/dia × 10-14d.',
            diferenciais: ['Herpes genital (doloroso)', 'Cancroide (doloroso)', 'Linfogranuloma venéreo', 'Doença de Behçet'],
            alertas: ['Sífilis em gestante: notificação + penicilina (único tratamento eficaz em gestante)', 'Reação de Jarisch-Herxheimer: febre 4-8h após 1ª dose de penicilina — tratar com paracetamol', 'VDRL: monitorar queda do título após tratamento (esperar 4× queda em 6 meses)'],
            perola: 'Sífilis congênita: prevenir com tratamento adequado da mãe. Uma dose de benzatina na gestante ≠ tratamento adequado para profilaxia de sífilis congênita.',
            especialidade: 'Infectologia'
          },
          {
            id: 'hiv', nome: 'HIV/AIDS', cid: 'B20',
            descricao: 'Infecção retroviral com destruição progressiva de linfócitos T CD4+. AIDS: CD4 <200 ou doença definidora.',
            apresentacao: 'Síndrome retroviral aguda: mononucleose-like (febre, linfonodomegalia, exantema). Crônica: assintomático. AIDS: infecções oportunistas (pneumocistose, toxoplasmose, CMV, criptococose).',
            criterios: ['HIV: ELISA + Western blot ou RNA viral (carga viral). AIDS: CD4 <200/mm³ ou doença definidora de AIDS'],
            exames: ['Anti-HIV (ELISA 4ª geração)', 'CD4 e carga viral', 'Hemograma + função renal e hepática', 'Sorologias (sífilis, hepatites B e C, toxoplasmose, CMV)', 'RX tórax', 'PPD/IGRA (TB latente)'],
            tratamento: 'TARV imediata independente do CD4: dolutegravir + lamivudina + (tenofovir se coinfecção HBV). Profilaxias: TMP-SMX se CD4<200 (pneumocistose); fluconazol se CD4<100 (criptococose em endemia).',
            diferenciais: ['Mononucleose infecciosa (EBV)', 'Outras imunodeficiências', 'Linfoma'],
            alertas: ['Síndrome de reconstituição imune (IRIS) ao iniciar TARV com CD4 muito baixo', 'Interações medicamentosas da TARV: inibidores de CYP3A4', 'Transmissão vertical: TARV + AZT no parto + AZT para o RN = reduz para <1%'],
            perola: 'Pneumocistose (PCP): taquipneia + hipoxemia + RX intersticial difuso bilateral em imunossuprimido. Tratar com TMP-SMX em doses altas.',
            especialidade: 'Infectologia'
          },
          {
            id: 'febre-tifoide', nome: 'Febre Tifoide', cid: 'A01.0',
            descricao: 'Infecção sistêmica por Salmonella typhi, via fecal-oral. Endêmica em países de baixo saneamento. Doença de notificação compulsória.',
            apresentacao: 'Febre em platô progressiva + bradicardia relativa (sinal de Faget) + cefaleia + dor abdominal + constipação (1ª semana) → diarreia (2ª-3ª semana). Roséolas tíficas (manchas rosadas no tronco). Esplenomegalia.',
            criterios: ['Hemocultura (padrão ouro, positiva em 80% na 1ª semana). Coprocultura (2ª-3ª semana). Mielocultura (mais sensível). Widal: títulos altos sugestivos, pouco específico'],
            exames: ['Hemocultura × 3 (ANTES do ATB)', 'Hemograma: leucopenia + linfocitose relativa (típico)', 'TGO/TGP elevadas', 'Widal (aglutininas anti-O e anti-H)', 'US abdominal (esplenomegalia)'],
            tratamento: 'Ciprofloxacino 500mg 12/12h × 10-14 dias (1ª linha onde sensível). Ceftriaxone IV se resistente ou grave. Azitromicina: alternativa oral. Notificação compulsória.',
            diferenciais: ['Malária (sem bradicardia relativa, febre em picos)', 'Leptospirose (icterícia + hemorragia conjuntival)', 'Mononucleose', 'Endocardite subaguda', 'Tuberculose miliar'],
            alertas: ['Complicações graves: perfuração intestinal (2ª-3ª semana — cirurgia) e hemorragia digestiva', 'Bradicardia relativa: febre alta sem taquicardia proporcional = sinal de Faget', 'Portador crônico (vesícula biliar): fonte de transmissão — tratar com ATB prolongado + colecistectomia'],
            perola: 'Leucopenia + febre em platô + bradicardia relativa + roséola tífica = febre tifoide. Inverso da maioria das bacteremias (que têm leucocitose).',
            especialidade: 'Infectologia'
          },
          {
            id: 'encefalite-herpetica', nome: 'Encefalite Herpética (HSV)', cid: 'B00.4',
            descricao: 'Encefalite viral grave por HSV-1 (adultos) e HSV-2 (neonatos). Acomete preferencialmente lobos temporais. Emergência neurológica. Mortalidade >70% sem tratamento.',
            apresentacao: 'Febre + cefaleia + alteração de comportamento/personalidade (lobo temporal) + convulsões focais temporais + afasia. Progressão para rebaixamento do nível de consciência. Inicio subagudo (dias).',
            criterios: ['PCR do LCR para HSV-1/HSV-2 (sensibilidade 98%). RNM: hipersinal em T2/FLAIR nos lobos temporais (patognomônico)'],
            exames: ['PL: LCR com pleocitose linfocitária + proteína elevada + glicose normal (meningite asséptica)', 'PCR HSV no LCR (diagnóstico)', 'RNM crânio com gadolínio (hipersinal temporal bilateral)', 'EEG (descargas periódicas lateralizadas — PLEDs)', 'TC crânio (excluir HTIC antes da PL)'],
            tratamento: 'ACICLOVIR 10mg/kg IV 8/8h × 14-21 dias — INICIAR IMEDIATAMENTE sem aguardar PCR. Anticonvulsivante se crises. UTI se rebaixamento.',
            diferenciais: ['Meningite bacteriana (LCR purulento)', 'Encefalite autoimune anti-NMDAR (jovem, psicose, distonia)', 'Abscesso cerebral temporal', 'AVC temporal', 'Tumor cerebral'],
            alertas: ['Iniciar aciclovir ANTES do resultado do PCR — cada hora sem tratamento aumenta mortalidade e sequelas', 'Contraindicado PL sem TC se papiledema ou focalização neurológica', 'Sequelas em 30% dos sobreviventes: epilepsia, amnésia (síndrome de Korsakoff-like), alterações comportamentais'],
            perola: 'Encefalite temporal + convulsão focal + alteração comportamental = HSV até prova em contrário. Não aguardar PCR — aciclovir imediato salva vidas.',
            especialidade: 'Infectologia/Neurologia'
          },
          {
            id: 'dengue-grave', nome: 'Dengue Grave', cid: 'A97.2',
            descricao: 'Arbovírus (Flavivirus) transmitido pelo Aedes aegypti. Dengue grave: extravasamento plasmático grave, hemorragia grave, ou disfunção de órgão. Notificação compulsória.',
            apresentacao: 'Fase febril (1-3 dias): febre alta + mialgia + cefaleia + dor retroorbitária + exantema. Fase crítica (4-6 dias): queda da febre + sinais de alarme (dor abdominal intensa, vômitos persistentes, sangramento de mucosa, letargia, hepatomegalia) → choque = dengue grave.',
            criterios: ['Dengue grave: extravasamento (derrame pleural, ascite, hemoconcentração ≥20%) OU sangramento grave OU comprometimento de órgão (hepatite, encefalite, miocardite, IRA)'],
            exames: ['NS1 (antígeno, positivo 1-5 dias de febre)', 'IgM/IgG anti-dengue (positivo a partir do 5° dia)', 'Hemograma: leucopenia + plaquetopenia + hemoconcentração (Ht↑20% = alarme)', 'TGO/TGP (hepatite)', 'Coagulograma (CIVD nos graves)'],
            tratamento: 'Grupo A (sem comorbidade, sem sinais alarme): hidratação oral + paracetamol (NÃO AAS/AINE — risco de sangramento). Grupo B/C (sinais de alarme): hidratação IV (SF 10-20mL/kg/h). Grupo D (dengue grave/choque): expansão volêmica agressiva + UTI. Plaquetas: transfundir se <10.000 ou sangramento grave.',
            diferenciais: ['Zika + Chikungunya (artralgia intensa)', 'Leptospirose (hemorragia conjuntival + icterícia)', 'Febre amarela (icterícia + IRA + sangramento)', 'Malária (febre em acessos)', 'Sepse'],
            alertas: ['NÃO usar AAS, ibuprofeno, dipirona em dengue suspeita — risco hemorrágico', 'Hematócrito: aumento de 20% = hemoconcentração = internação. Queda brusca com hipotensão = sangramento', 'Choque por dengue: NÃO confundir com séptico — tratar com cristaloide 10-20mL/kg, repetir se necessário'],
            perola: 'Sinal de alarme mais importante: DOR ABDOMINAL intensa e contínua — indica extravasamento peritoneal (ascite). Internar imediatamente para hidratação IV.',
            especialidade: 'Infectologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 6. ENDOCRINOLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Endocrinologia',
    icone: '🔬',
    sintomas: [
      {
        sintoma: 'Distúrbios da Glicemia',
        doencas: [
          {
            id: 'cad', nome: 'Cetoacidose Diabética', cid: 'E10.1',
            descricao: 'Complicação aguda do DM1 (e DM2 em estresse). Tríade: hiperglicemia + acidose metabólica + cetonemia.',
            apresentacao: 'Poliúria, polidipsia, vômitos, dor abdominal, respiração de Kussmaul (profunda e rápida), hálito cetônico, confusão ou coma.',
            criterios: ['Glicemia >250 mg/dL + pH <7,3 ou HCO3 <18 + cetonas positivas (++/+++)'],
            exames: ['Glicemia + gasometria + eletrólitos + cetonemia/cetonúria + hemograma + ureia/creatinina + osmolalidade'],
            tratamento: 'Hidratação (SF 0,9% 1L/h nas 2 primeiras horas) + Insulina regular IV (0,1U/kg/h, iniciar 1h após início da hidratação) + Reposição de K⁺ (iniciar se K⁺<3,5 ANTES da insulina; se K⁺<5, adicionar 20-40mEq/L no soro).',
            diferenciais: ['Estado Hiperosmolar Hiperglicêmico (sem cetose)', 'Acidose lática', 'Cetoacidose alcoólica', 'Intoxicação por salicilatos'],
            alertas: ['Hipocalemia ANTES de insulina = risco de arritmia fatal', 'Glicemia pode normalizar antes da acidose resolver — manter insulina + glicose IV', 'Edema cerebral: complicação mais temida em crianças (<2 anos), evitar correção rápida'],
            perola: 'Bicarbonato: usar apenas se pH<6,9 ou hipercalemia grave. Uso rotineiro aumenta alcalose paradoxal intracerebal.',
            especialidade: 'Endocrinologia/Emergência'
          },
          {
            id: 'ehh', nome: 'Estado Hiperosmolar Hiperglicêmico', cid: 'E11.0',
            descricao: 'Complicação do DM2: hiperglicemia extrema + desidratação grave, SEM cetose significativa.',
            apresentacao: 'Glicemia >600, osmolalidade sérica >320 mOsm/kg, confusão ou coma, sem respiração de Kussmaul, sem cetose.',
            criterios: ['Glicemia >600 + osmolalidade >320 + pH >7,3 + cetonemia mínima'],
            exames: ['Glicemia, eletrólitos, osmolalidade calculada, gasometria, hemograma, função renal, EAS'],
            tratamento: 'Hidratação agressiva (SF 0,9% 1-2L/h nas primeiras 2h, depois SF 0,45% ou SGI). Insulina em dose menor que CAD. Tratar causa precipitante (infecção, AVC, infarto).',
            diferenciais: ['CAD', 'AVC', 'Intoxicação', 'Sepse com hiperglicemia'],
            alertas: ['Corrigir sódio lentamente (<10-12 mEq/L/24h) — risco de mielinólise', 'Mortalidade 10-20% — maior que CAD', 'Tromboembolismo frequente: heparina profilática'],
            perola: 'Osmolalidade efetiva = 2×Na + glicemia/18. Alvo: reduzir 3-8 mOsm/kg/h nas primeiras 8h.',
            especialidade: 'Endocrinologia/Emergência'
          },
          {
            id: 'hipoglicemia', nome: 'Hipoglicemia', cid: 'E16.0',
            descricao: 'Glicemia <70 mg/dL com ou sem sintomas. Comum em diabéticos em uso de insulina ou sulfonilureias.',
            apresentacao: 'Leve: tremores, sudorese, fome, palpitações (adrenérgicos). Grave: confusão, convulsão, coma (neuroglicopênicos). Pode mimetizar AVC.',
            criterios: ['Tríade de Whipple: sintomas + glicemia baixa + resolução com glicose'],
            exames: ['Glicemia capilar (imediato)', 'Glicemia venosa', 'Insulinemia + peptídeo-C (investigação de causa em não diabético)'],
            tratamento: 'Consciente: 15g de glicose simples (3 balas, 150mL de suco). Repetir em 15min se não melhorar. Inconsciente/venoso: glicose 50% 25-50mL IV. Se sem acesso: glucagon 1mg IM/SC.',
            diferenciais: ['AVC', 'Crises epilépticas', 'Intoxicação alcoólica', 'Sepse', 'Tumor hipersecretor (insulinoma)'],
            alertas: ['SEMPRE checar glicemia antes de diagnóstico neurológico', 'Sulfonilureia: hipoglicemia prolongada — observar 24-48h após tratamento', 'Álcool bloqueia gliconeogênese — hipoglicemia alcoólica em jejum'],
            perola: 'Hipoglicemia em não diabético: pensar em insulinoma (peptídeo-C alto), doença hepática, insuficiência adrenal, sepse.',
            especialidade: 'Endocrinologia/Emergência'
          },
          {
            id: 'cushing', nome: 'Síndrome de Cushing', cid: 'E24',
            descricao: 'Excesso crônico de cortisol. Endógena: adenoma hipofisário (Doença de Cushing — 70%), tumor adrenal, ectópico. Exógena: corticoide iatrogênico (mais comum).',
            apresentacao: 'Obesidade centrípeta + fácies em lua cheia + giba dorsal + estrias purpúreas abdominais + hipertensão + DM + fraqueza proximal + amenorreia + pletora facial.',
            criterios: ['Cortisol urinário livre 24h (elevado) ou cortisol salivar noturno (2× medidas) ou Supressão com dexametasona 1mg (cortisol >1,8 µg/dL = positivo)'],
            exames: ['Cortisol urinário livre 24h', 'Cortisol salivar 23-24h', 'Supressão com dexametasona 1mg noturna', 'ACTH (alto = hipofisário/ectópico; baixo = adrenal)', 'RNM hipófise (adenoma) ou TC adrenal', 'Supressão com dexametasona 8mg (diferencia hipofisário de ectópico)'],
            tratamento: 'Doença de Cushing: cirurgia transesfenoidal. Tumor adrenal: adrenalectomia. Ectópico: tratar tumor primário. Farmacológico (espera cirurgia): metirapona, cetoconazol, osilodrostato.',
            diferenciais: ['Obesidade simples', 'Síndrome metabólica', 'Depressão (pseudo-Cushing)', 'Síndrome do ovário policístico'],
            alertas: ['Pseudo-Cushing: alcoolismo e depressão grave podem elevar cortisol urinário — excluir clinicamente', 'Suspender corticoide exógeno gradualmente (supressão do eixo HHA)', 'Osteoproteção: cálcio + vitamina D + bifosfonato'],
            perola: 'Fraqueza muscular proximal (dificuldade de levantar da cadeira/subir escadas) com atrofia muscular = sinal importante de hipercortisolismo, diferente da obesidade simples.',
            especialidade: 'Endocrinologia'
          },
        ]
      },
      {
        sintoma: 'Distúrbios da Tireoide',
        doencas: [
          {
            id: 'hipo', nome: 'Hipotireoidismo', cid: 'E03',
            descricao: 'Deficiência de hormônios tireoidianos. Causa mais comum: Hashimoto (autoimune) e pós-tireoidectomia.',
            apresentacao: 'Fadiga, ganho de peso, intolerância ao frio, constipação, pele seca, bradicardia, mixedema, voz rouca, depressão.',
            criterios: ['TSH elevado + T4 livre reduzido (hipotireoidismo primário). TSH baixo + T4 livre baixo = hipotireoidismo central'],
            exames: ['TSH + T4 livre', 'Anti-TPO (Hashimoto)', 'Hemograma (anemia normocítica)', 'Lipidograma (hipercolesterolemia)'],
            tratamento: 'Levotiroxina 1,6-1,8 µg/kg/dia VO em jejum. Idosos e cardiopatas: iniciar 12,5-25 µg/dia. Ajustar a cada 6-8 semanas pelo TSH.',
            diferenciais: ['Depressão', 'Anemia', 'ICC', 'Síndrome nefrótica', 'Obesidade'],
            alertas: ['Coma mixedematoso: hipotireoidismo + hipotermia + hipoventilação + coma — emergência: T3 IV + hidrocortisona + suporte', 'Cardiopatas: iniciar em dose muito baixa', 'Tomar 4h antes ou 2h depois de cálcio, ferro, antiácidos (reduzem absorção)'],
            perola: 'Hashimoto: Anti-TPO positivo em >95%. USG heterogênea. Pode cursar com hiper-transitório inicial (hashitoxicose).',
            especialidade: 'Endocrinologia'
          },
          {
            id: 'hiper', nome: 'Hipertireoidismo — Doença de Graves', cid: 'E05',
            descricao: 'Excesso de hormônios tireoidianos. Causa mais comum: Graves (autoimune com anticorpo TSI estimulador).',
            apresentacao: 'Perda de peso, palpitações (FA), intolerância ao calor, tremores finos, diarreia, ansiedade, exoftalmia (Graves). Taquicardia, pele quente e úmida.',
            criterios: ['TSH suprimido (<0,1) + T4 livre e/ou T3 elevados. Anti-TSHR positivo (Graves)'],
            exames: ['TSH + T4 livre + T3 total', 'Anti-TSHR (TRAb) — Graves', 'Cintilografia tireoidiana (Graves: captação difusa aumentada; Plummer: nódulo quente)'],
            tratamento: 'Metimazol (1ª escolha, exceto 1° trimestre gestação: PTU). Betabloqueador (propranolol) para sintomas. Tratamento definitivo: iodo radioativo ou tireoidectomia.',
            diferenciais: ['Feocromocitoma', 'Ansiedade/Síndrome do pânico', 'Síndrome carcinoide', 'FA por outra causa'],
            alertas: ['Tempestade tireoidiana: emergência — febre + taquicardia extrema + confusão. Tratar: PTU 200mg 6/6h + KI (SSKI) + hidrocortisona + propranolol + resfriamento', 'Metimazol: agranulocitose (parar se febre/faringite)', 'Não usar iodo radioativo em gestante'],
            perola: 'Tempestade tireoidiana precipitada por infecção, cirurgia, iodo radioativo em não preparado ou contraste iodado.',
            especialidade: 'Endocrinologia'
          },
        ]
      },
      {
        sintoma: 'Diabetes Mellitus e Síndrome Metabólica',
        doencas: [
          {
            id: 'dm2', nome: 'Diabetes Mellitus Tipo 2', cid: 'E11',
            descricao: 'Doença metabólica crônica por resistência à insulina e disfunção progressiva das células beta. Epidemia mundial.',
            apresentacao: 'Poliúria, polidipsia, perda de peso (tardio). Frequentemente assintomático. Diagnóstico por rastreamento. Complicações: retinopatia, nefropatia, neuropatia, DAC, AVE, pé diabético.',
            criterios: ['ADA: glicemia jejum ≥126mg/dL OU HbA1c ≥6,5% OU TOTG ≥200mg/dL 2h OU glicemia aleatória ≥200 com sintomas (repetir 2 amostras)'],
            exames: ['HbA1c (controle)', 'Glicemia de jejum', 'TOTG 75g (rastreamento em risco)', 'Microalbuminúria (nefropatia)', 'Fundo de olho (retinopatia)', 'Monofilamento (neuropatia)', 'Perfil lipídico'],
            tratamento: 'Mudança de estilo de vida + Metformina (1ª linha, exceto TFG<30). Escalonamento: SGLT2i (dapagliflozina — benefício CV e renal), GLP-1 (semaglutida — perda de peso). Insulina quando necessário.',
            diferenciais: ['DM1 (autoimune, jovem, cetose)', 'DM2 LADA (adulto, autoanticorpos)', 'Diabetes gestacional', 'DM secundário (pancreatite, Cushing)'],
            alertas: ['Metformina: contraindicada TFG<30. Suspender no dia de contraste iodado', 'SGLT2i: cetoacidose euglicêmica (rara), infecções genitais, volume', 'HbA1c alvo <7% (geral) ou <8% (idosos/fragilizados)'],
            perola: 'SGLT2i (dapagliflozina, empagliflozina): indicados em DM2 com DAC, IC ou DRC estabelecida — reduzem desfechos cardiovasculares e renais independentemente do controle glicêmico.',
            especialidade: 'Endocrinologia/Clínica Médica'
          },
          {
            id: 'hipercalcemia', nome: 'Hipercalcemia', cid: 'E83.5',
            descricao: 'Ca2+ total >10,5 mg/dL. Causas mais comuns: Hiperparatireoidismo (ambulatorial) e Malignidade (hospitalar).',
            apresentacao: 'Mnemônico "Bones, Stones, Groans, Psychic Moans": dor óssea, nefrolitíase, constipação/náusea, confusão/depressão. Grave (>14): coma, arritmia.',
            criterios: ['Ca2+ total >10,5mg/dL ou Ca2+ ionizado >5,6mg/dL. Corrigir pelo albumina: Ca corrigido = Ca total + 0,8×(4 - albumina)'],
            exames: ['Ca2+ total + ionizado + albumina', 'PTH (alto = HPT primário; baixo = malignidade)', 'Creatinina + fósforo', 'PTHrP (neoplasia oculta)', 'Vitamina D (25-OH e 1,25-OH)', 'ECG (QT curto)'],
            tratamento: 'Hipercalcemia grave (>14 ou sintomática): hidratação SF 0,9% 200-300mL/h + furosemida após expansão. Bifosfonato IV (zoledronato 4mg) — efeito em 24-48h. Calcitonina para efeito rápido. Hemodiálise em refratários.',
            diferenciais: ['HPT primário', 'Malignidade (PTHrP, metástase óssea)', 'Sarcoidose', 'Intoxicação por vitamina D', 'Tiazídicos', 'Síndrome leite-álcali'],
            alertas: ['ECG: QT curto + bloqueio AV em hipercalcemia grave', 'HPT primário: cirurgia (paratireoidectomia) se Ca>1mg/acima do LSN + nefrolitíase + DXA T-score<-2.5', 'Bifosfonato: nefrotóxico — ajustar dose à função renal'],
            perola: 'HPT primário: causa mais comum de hipercalcemia assintomática ambulatorial. Adenoma de paratireóide em >85%. Curado cirurgicamente.',
            especialidade: 'Endocrinologia'
          },
        ]
      },
      {
        sintoma: 'Distúrbios das Glândulas Adrenais',
        doencas: [
          {
            id: 'insuf-adrenal', nome: 'Insuficiência Adrenal — Crise Adrenal', cid: 'E27.1',
            descricao: 'Deficiência de cortisol ± aldosterona. Primária (Addison): autoimune, TB. Secundária: supressão por corticoide exógeno.',
            apresentacao: 'Crônica: fadiga, hipotensão postural, anorexia, hiperpigmentação (Addison primário). Crise adrenal: choque refratário, hipoglicemia, hiponatremia, hipercalemia (primário).',
            criterios: ['Cortisol basal às 8h <3 µg/dL (insuficiência). Teste de estimulação com ACTH: cortisol <18 µg/dL após 250 µg de cosintropina'],
            exames: ['Cortisol às 8h + ACTH', 'Sódio, potássio, glicemia', 'Anti-21 hidroxilase (Addison autoimune)', 'TC adrenal (TB, hemorragia)'],
            tratamento: 'Crise: hidrocortisona 100mg IV imediato + SF 0,9% 1-2L/h + glicose se hipoglicemia. Manutenção: hidrocortisona 15-25mg/dia + fludrocortisona (primária) + dose de stress em situações agudas.',
            diferenciais: ['Choque séptico', 'Hipoglicemia por outra causa', 'Hipotireoidismo', 'ICC'],
            alertas: ['Crise adrenal = emergência: tratar ANTES de confirmar diagnóstico se suspeita forte', 'Corticoide crônico: nunca suspender abruptamente (supressão do eixo HHA)', 'Regra de stress: dobrar dose de hidrocortisona em infecção/febre/cirurgia'],
            perola: 'Tríade da crise adrenal: hipotensão + hiponatremia + hipercalemia. Hiperpigmentação (ACTH alto) = Addison primário.',
            especialidade: 'Endocrinologia'
          },
          {
            id: 'feocromocitoma', nome: 'Feocromocitoma', cid: 'D35.0',
            descricao: 'Tumor da medula adrenal secretor de catecolaminas. 10% bilateral, 10% maligno, 10% extra-adrenal (paraganglioma).',
            apresentacao: 'Tríade clássica: cefaleia + palpitações + sudorese. Crises hipertensivas paroxísticas, palidez, ansiedade. HAS refratária em jovem.',
            criterios: ['Metanefrinas fraccionadas no plasma ou urina 24h (sensibilidade >95%). Imagem (TC/RNM adrenal) após confirmação bioquímica'],
            exames: ['Metanefrinas fracionadas (plasma ou urina 24h)', 'TC ou RNM adrenal', 'Cintigrafia com MIBG (metástases)', 'Teste genético (SDH, VHL, RET, NF1 — 30-40% hereditário)'],
            tratamento: 'Bloqueio alfa antes da cirurgia (fenoxibenzamina ou doxazosina × 7-14 dias). Depois: betabloqueador se taquicardia. Ressecção laparoscópica.',
            diferenciais: ['HAS essencial', 'Crise de pânico', 'Hipertireoidismo', 'Síndrome carcinoide', 'Hipoglicemia'],
            alertas: ['NUNCA betabloqueador sem alfa-bloqueio prévio (causa vasoconstrição grave e crise hipertensiva)', 'Biópsia de massa adrenal: contraindicada sem excluir feocromocitoma', 'Contraste iodado: pode precipitar crise — proteger com alfa-bloqueio'],
            perola: 'Regra dos 10: 10% bilateral + 10% extra-adrenal + 10% maligno + 10% em criança + 10% sem HAS.',
            especialidade: 'Endocrinologia/Cirurgia'
          },
          {
            id: 'cushing', nome: 'Síndrome de Cushing', cid: 'E24',
            descricao: 'Excesso crônico de glicocorticoide. Causa mais comum: uso exógeno de corticoide. Endógeno: doença de Cushing (adenoma hipofisário, 70%) > tumor adrenal > ectópico (CPPC).',
            apresentacao: 'Obesidade central + face em lua cheia + giba de búfalo + estrias violáceas (largas) + hirsutismo + fraqueza muscular proximal + HAS + osteoporose + diabetes + acne + amenorreia. Equimoses fáceis.',
            criterios: ['1° triagem: cortisol urinário livre 24h (>3× limite superior) ou cortisol salivar noturno (>2× LSN) ou teste de supressão com 1mg de dexametasona overnight (cortisol>1,8 mcg/dL = positivo)'],
            exames: ['Cortisol urinário livre 24h', 'Cortisol salivar noturno', 'Supressão com dexametasona 1mg overnight', 'ACTH plasmático (>20: ACTH-dependente; <5: independente)', 'RNM hipófise (adenoma)', 'TC adrenal', 'TC tórax/abdome (ectópico — CPPC)'],
            tratamento: 'Cirúrgico: ressecção do tumor causador (adenoma hipofisário = cirurgia transesfenoidal). Adrenal: adrenalectomia. Ectópico: tratar tumor primário. Médico (ponte): cetoconazol, metirapona, mifepristona. Radioterapia hipofisária: se refratário.',
            diferenciais: ['Obesidade simples (sem estrias largas, cortisol normal)', 'Síndrome metabólica', 'Pseudo-Cushing: depressão, alcoolismo (cortisol levemente elevado)'],
            alertas: ['Estrias roxas/violáceas largas (>1cm) = Cushing. Estrias brancas/rosadas finas = obesidade comum', 'Adenoma hipofisário secretor de ACTH (doença de Cushing): mais comum em mulheres jovens', 'Pós-cirurgia: insuficiência adrenal transitória — cortisol de reposição obrigatório'],
            perola: 'ACTH baixo + hipercortisolismo = tumor adrenal (autônomo). ACTH alto + hipercortisolismo = hipófise (Cushing) ou ectópico. Teste de supressão com 8mg de dexametasona: suprime Cushing hipofisário, não suprime ectópico.',
            especialidade: 'Endocrinologia'
          },
          {
            id: 'hiperparatireoidismo', nome: 'Hiperparatireoidismo Primário', cid: 'E21.0',
            descricao: 'Hipersecreção autônoma de PTH por adenoma (85%), hiperplasia (15%) ou carcinoma (<1%) da paratireoide. Causa mais comum de hipercalcemia ambulatorial.',
            apresentacao: 'Assintomático (maioria, diagnóstico incidental). Hipercalcemia: "Stones, Bones, Groans, Psychic Moans" — litíase renal, dor óssea/fraturas, dor abdominal/constipação/úlcera, depressão/confusão. HAS frequente.',
            criterios: ['PTH elevado OU inapropriadamente normal + hipercalcemia (Ca total >10,5 mg/dL ou Ca iônico >1,3 mmol/L)'],
            exames: ['Cálcio sérico + PTH intacto (simultaneamente)', 'Fósforo (baixo no primário)', 'Vitamina D 25-OH', 'Calciúria 24h (excluir hipocalciúria hipercalcêmica familiar)', 'Creatinina (nefrocalcinose)', 'DEXA (osteoporose)', 'US paratireoide + cintilografia com Sestamibi (localização pré-op)'],
            tratamento: 'Cirúrgico (paratireoidectomia): indicado se Ca>1mg/dL acima do normal, TFG<60, DXA T-score<-2.5, litíase, idade<50 anos, osteoporose. Clínico: hidratação, evitar diuréticos tiazídicos (aumentam Ca), bifosfonatos. Calcimimético (cinacalcete) se cirurgia contraindicada.',
            diferenciais: ['Hipercalcemia maligna (PTH baixo, PTHrP elevado)', 'Sarcoidose/granulomas (calcitriol elevado)', 'Hipervitaminose D', 'Hipocalciúria hipercalcêmica familiar (PTH normal, calciúria baixa)', 'Uso de tiazídicos'],
            alertas: ['Crise hipercalcêmica (Ca>14 mg/dL): SF IV 200-300mL/h + furosemida + calcitonina + bifosfonato (pamidronato)', 'Tiazídico aumenta reabsorção de cálcio — suspender em hipercalcemia', 'Vitamina D deficiente em HPT primário: corrigir com cautela (piora hipercalcemia)'],
            perola: 'Hipercalcemia + PTH alto (ou normal) = HPT primário. Hipercalcemia + PTH suprimido = neoplasia (PTHrP) ou granuloma. PTH NUNCA deve ser alto na hipercalcemia — indica autonomia paratireoidiana.',
            especialidade: 'Endocrinologia/Cirurgia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 7. PEDIATRIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Pediatria',
    icone: '👶',
    sintomas: [
      {
        sintoma: 'Febre na Criança',
        doencas: [
          {
            id: 'meningite-ped', nome: 'Meningite Bacteriana', cid: 'G00',
            descricao: 'Infecção das meninges. Agente por faixa etária: Grupo B (RN), pneumococo + meningococo (>2 meses).',
            apresentacao: 'Febre + rigidez de nuca + fotofobia + cefaleia. RN: abaulamento de fontanela, irritabilidade paradoxal, recusa alimentar. Criança: Kernig e Brudzinski positivos. Petéquias/púrpura = meningococcemia.',
            criterios: ['LCR: >100 leucócitos (PMN predominante) + glicose baixa + proteína alta + Gram/cultura+'],
            exames: ['TC crânio ANTES da PL se: papiledema, déficit focal, Glasgow<13', 'Punção lombar + análise do LCR + cultura', 'Hemograma + PCR + Procalcitonina + hemocultura', 'Coagulograma (CIVD em meningococcemia)'],
            tratamento: 'Dexametasona IV ANTES do ATB (0,15mg/kg 6/6h × 4 dias) + Ceftriaxona 100mg/kg/dia (máx 4g/dia). Se RN: ampicilina + gentamicina. ATB IMEDIATO — não esperar LCR se instável.',
            diferenciais: ['Encefalite viral', 'HSA', 'Meningite viral (aséptica)', 'Abscesso cerebral', 'Tumor cerebral'],
            alertas: ['Corticoide ANTES do ATB reduz sequelas auditivas (S. pneumoniae)', 'Petéquias + febre + instabilidade = meningococcemia = ATB antes de qualquer exame', 'Notificação compulsória + quimioprofilaxia contatos (rifampicina × 2 dias)'],
            perola: 'Quimioprofilaxia contatos de meningococo: rifampicina 600mg 12/12h ×2 dias ou ciprofloxacino 500mg dose única ou azitromicina 500mg dose única.',
            especialidade: 'Infectologia/Pediatria'
          },
          {
            id: 'otite', nome: 'Otite Média Aguda', cid: 'H66',
            descricao: 'Infecção do ouvido médio. Muito comum em crianças <2 anos. Pneumococo, H. influenzae, Moraxella.',
            apresentacao: 'Otalgia, febre, irritabilidade, choro excessivo, puxar a orelha. Otoscopia: membrana timpânica hiperemiada, abaulada, opaca, com ausência de triângulo luminoso.',
            criterios: ['Otoscopia: membrana timpânica abaulada + hiperemia intensa + supuração ou critérios moderados + sintomas agudos'],
            exames: ['Diagnóstico clínico (otoscopia pneumática)'],
            tratamento: '<2 anos, bilateral ou com otorreia: amoxicilina 90mg/kg/dia × 10 dias. >2 anos, unilateral, leve: observar 48-72h. Falha: amoxicilina-clavulanato ou ceftriaxona IM.',
            diferenciais: ['Otite externa', 'Mastoidite (complicação)', 'Corpo estranho', 'Dor dentária referida'],
            alertas: ['Mastoidite aguda: urgência de ORL (eritema + dor + edema retroauricular + abaulamento)', 'Amoxicilina 90mg/kg/dia (dose alta) por cepas resistentes de pneumococo', 'Não usar quinolona sistêmica em criança'],
            perola: 'Otite média recorrente (≥3 em 6 meses): indicação de tubos de ventilação (timpanostomia).',
            especialidade: 'Pediatria/ORL'
          },
          {
            id: 'faringotonsilite', nome: 'Faringotonsilite Aguda', cid: 'J03',
            descricao: 'Infecção da faringe e amígdalas. Viral (adenovírus, EBV) ou bacteriana (estreptococo grupo A = EBHA).',
            apresentacao: 'Odinofagia, febre, adenopatia cervical anterior. EBHA: exsudato amigdaliano + febre >38,5°C + sem coriza/tosse.',
            criterios: ['Score de Centor/McIsaac: exsudato(1)+adenopatia cervical anterior dolorosa(1)+febre>38,5°C(1)+ausência de tosse(1)+idade. ≥3: swab ou tratar'],
            exames: ['Teste rápido de antígeno estreptocócico (RADT)', 'Cultura de orofaringe (padrão ouro)', 'EBV: heterófilo + sorologia'],
            tratamento: 'EBHA confirmado: amoxicilina 50mg/kg/dia × 10 dias (penincilina benzatina IM dose única alternativa). Viral: sintomático. EBV: repouso + analgesia (evitar amoxicilina = rash).',
            diferenciais: ['Mononucleose infecciosa (EBV)', 'Difteria (membrana cinzenta)', 'Abscesso periamigdaliano', 'Epiglotite'],
            alertas: ['Amoxicilina em EBV: exantema maculopapular em 90% (rash de amoxicilina em mono)', 'Abscesso periamigdaliano: desvio da úvula + voz de batata quente = drenagem + ATB', 'Febre reumática: sequela de EBHA não tratado — tratar sempre EBHA confirmado'],
            perola: 'McIsaac ≥4 pontos: tratar sem cultura. 2-3: realizar RADT ou cultura. ≤1: tratamento desnecessário.',
            especialidade: 'Pediatria'
          },
        ]
      },
      {
        sintoma: 'Dificuldade Respiratória na Criança',
        doencas: [
          {
            id: 'bronquiolite', nome: 'Bronquiolite Aguda Viral', cid: 'J21',
            descricao: 'Inflamação dos bronquíolos terminais por vírus (VSR em 70%). Acomete principalmente <2 anos, pico em <6 meses.',
            apresentacao: 'Coriza → tosse → sibilância + taquipneia + retrações intercostais + febre baixa. Hipoxemia em casos graves. Alimentação prejudicada.',
            criterios: ['Clínico: primeiro episódio de sibilância em <2 anos após quadro viral'],
            exames: ['Oximetria (SpO2)', 'RX tórax (hiperinsuflação, atelectasias). Não é obrigatório', 'Teste rápido VSR (se disponível)'],
            tratamento: 'Suporte: O2 (SpO2 <92%), hidratação, aspiração de vias aéreas. Broncodilatador: tentar e manter se resposta (controverso). Adrenalina nebulizada em moderada-grave.',
            diferenciais: ['Crise de asma (história prévia + recorrente)', 'Pneumonia bacteriana', 'Insuficiência cardíaca', 'Corpo estranho'],
            alertas: ['Critérios de internação: SpO2 <95% em ar ambiente, FR >70/min, recusa alimentar >50%, prematuridade/cardiopatia/imunodeficiência', 'Corticoide sistêmico: NÃO indicado rotineiramente na bronquiolite', 'Palivizumabe: profilaxia em prematuros <29 semanas ou cardiopatia hemodinamicamente significativa'],
            perola: 'Diferença bronquiolite vs. asma: bronquiolite é 1° episódio <2 anos + contexto viral. Asma: episódios recorrentes + história familiar.',
            especialidade: 'Pediatria'
          },
          {
            id: 'croup', nome: 'Laringotraqueobronquite (Crupe)', cid: 'J05.0',
            descricao: 'Inflamação subglótica por vírus parainfluenza. Faixa etária: 6 meses-3 anos, pico outono-inverno.',
            apresentacao: 'Pródromo viral → tosse ladrante (metálica) + estridor inspiratório + disfonia. Piora à noite. Stridor de repouso e tiragem = grave.',
            criterios: ['Clínico. Score de Westley: estridor+retrações+entrada de ar+cianose+consciência. Grave ≥6'],
            exames: ['Diagnóstico clínico. RX pescoço (sinal do campanário — afunilamento subglótico) se dúvida'],
            tratamento: 'Leve: dexametasona 0,15-0,6mg/kg VO dose única (corticoide reduz internação e intubação). Moderado-grave: dexametasona + adrenalina nebulizada (1mL/kg ad. racêmica). O2 se hipoxemia.',
            diferenciais: ['Epiglotite (criança maior, aspecto tóxico, posição trípode, babando)', 'Traqueíte bacteriana', 'Corpo estranho', 'Abscesso retrofaríngeo'],
            alertas: ['Epiglotite: NÃO examinar garganta sem via aérea segura', 'Adrenalina nebulizada: efeito transitório (2h) — observar 4h após', 'Vacinação Hib: reduziu epiglotite por >90%'],
            perola: 'Crupe: tratamento com 1 dose única de dexametasona VO tem eficácia igual à IV/IM e pode evitar internação.',
            especialidade: 'Pediatria'
          },
          {
            id: 'epiglotite', nome: 'Epiglotite Aguda', cid: 'J05.1',
            descricao: 'Infecção bacteriana grave da epiglote. H. influenzae tipo b (antes da vacinação). Hoje: S. aureus, S. pyogenes, adultos.',
            apresentacao: 'Instalação rápida (<24h): febre alta + odinofagia grave + sialorreia (babando) + posição trípode (sentado, inclinado para frente) + voz abafada ("batata quente") + estridor.',
            criterios: ['Clínico. Laringoscopia direta (sob controle de via aérea) ou TC cervical (epiglote em dedo de luva)'],
            exames: ['RX cervical lateral (epiglote aumentada = sinal do polegar)', 'TC cervical (se possível sem agitar a criança)', 'Hemograma + hemocultura'],
            tratamento: 'Via aérea PRIMEIRO: intubação orotraqueal sob anestesia (ambiente cirúrgico) + ceftriaxona 100mg/kg/dia IV × 7-10 dias.',
            diferenciais: ['Crupe (laringite viral)', 'Abscesso retrofaríngeo', 'Angioedema', 'Corpo estranho'],
            alertas: ['NÃO examinar garganta ou sedar sem equipe de via aérea difícil pronta', 'NÃO deitar a criança (piora obstrução)', 'Intubação: tubo de 0,5-1mm menor que o calculado (edema)'],
            perola: 'Epiglotite vs. Crupe: epiglotite tem início agudo, aspecto tóxico, posição trípode, sem tosse ladrante, não responde a adrenalina.',
            especialidade: 'Pediatria/Otorrinolaringologia'
          },
        ]
      },
      {
        sintoma: 'Doenças Gastrointestinais Pediátricas',
        doencas: [
          {
            id: 'diarreia-ped', nome: 'Diarreia Aguda Pediátrica', cid: 'A09',
            descricao: 'Causa principal de mortalidade infantil em países em desenvolvimento. Viral (rotavírus) ou bacteriana. Desidratação é o maior risco.',
            apresentacao: 'Fezes líquidas >3×/dia. Sinais de desidratação: olhos fundos, mucosas secas, turgor reduzido, choro sem lágrimas, fontanela deprimida, letargia.',
            criterios: ['Plano OMS de hidratação: A (sem desidratação), B (leve-moderada), C (grave). Avaliar: turgor, estado de consciência, mucosas, diurese'],
            exames: ['Diagnóstico clínico. Coproscopia + coprocultura se: sangue + febre + >7 dias + imunossuprimido', 'Eletrólitos se desidratação grave', 'Glicemia (hipoglicemia em desidratado grave)'],
            tratamento: 'Plano A: SRO em casa. Plano B: SRO 100mL/kg em 4h na UBS. Plano C: SF 0,9% 100mL/kg IV em 3h (lactente). Zinco 10-20mg/dia × 10-14 dias (reduz duração e recorrência). ATB apenas indicações específicas.',
            diferenciais: ['Invaginação intestinal (choro intenso + fezes em geléia de framboesa)', 'Intolerância à lactose', 'Doença celíaca', 'DII pediátrica'],
            alertas: ['Desidratação grave com choque: acesso IV urgente + SF 20mL/kg em bolus', 'NUNCA dar antidiarreico (loperamida) em crianças <2 anos', 'Rotavírus: vacina oral — 2 doses (2 e 4 meses) no calendário vacinal'],
            perola: 'SRO (Soro de Reidratação Oral): 1 litro de água + 2,6g de NaCl + 2,9g de citrato de sódio + 1,5g de KCl + 13,5g de glicose. Tão eficaz quanto IV na desidratação leve-moderada.',
            especialidade: 'Pediatria'
          },
          {
            id: 'invaginacao', nome: 'Invaginação Intestinal', cid: 'K56.1',
            descricao: 'Telescopagem de um segmento intestinal em outro (íleo-cólica mais comum). Mais frequente 6-18 meses.',
            apresentacao: 'Cólica abdominal paroxística intensa com choro inconsolável → letargia entre as crises → fezes em geléia de framboesa (muco + sangue). Massa palpável em "salsicha" em FID. Triângulo diagnóstico: cólica + massa + sangue (tardio).',
            criterios: ['USG abdômen: sinal do alvo (target sign) ou pseudorim em cross-section'],
            exames: ['USG abdômen (sensibilidade >98%)', 'Hemograma + eletrólitos', 'Clister opaco (diagnóstico e terapêutico se instável é contraindicado)'],
            tratamento: 'Estável e sem peritonite: enema de ar ou hidrostático sob radioscopia (taxa de sucesso 70-90%). Falha ou complicação (perfuração/peritonite): cirurgia.',
            diferenciais: ['Cólica do lactente (cólica infantil benigna)', 'Gastrenterite', 'Apendicite', 'Divertículo de Meckel'],
            alertas: ['Fezes em geléia de framboesa: sinal tardio de necrose intestinal', 'Causa secundária em >2 anos: buscar ponto de escape (pólipo, linfoma, divertículo de Meckel)', 'Recorrência após enema: 5-10% — nova tentativa de enema'],
            perola: 'A clássica apresentação é cólica paroxística em criança de 6-18 meses + choro com flexão de pernas. Muco-sanguíneo (geléia de framboesa) aparece horas depois.',
            especialidade: 'Pediatria/Cirurgia Pediátrica'
          },
          {
            id: 'coqueluche', nome: 'Coqueluche (Tosse Convulsa)', cid: 'A37',
            descricao: 'Infecção por Bordetella pertussis. Notificação compulsória. Grave em lactentes <6 meses.',
            apresentacao: 'Fase catarral (1-2 semanas): coriza + tosse leve. Fase paroxística (2-6 semanas): acessos de tosse em salvas + guincho inspiratório ("whoop") + apneia em lactentes. Vômitos pós-tosse. Febre ausente ou baixa.',
            criterios: ['PCR nasofaringe (ouro) ou cultura. Sorologia (IgA anti-toxina pertussis) em adultos'],
            exames: ['PCR nasofaringe (ideal nas primeiras 2 semanas)', 'Hemograma: leucocitose com linfocitose marcante (>50.000 linfócitos = grave)', 'RX tórax'],
            tratamento: 'Azitromicina 10mg/kg/dia ×5 dias (lactente e criança) ou 500mg/dia ×5 dias (adulto). Hospitalizar lactente <3 meses. Quimioprofilaxia dos contatos: azitromicina.',
            diferenciais: ['Bronquiolite (VSR)', 'Laringite viral', 'Corpo estranho', 'Laringomalácia'],
            alertas: ['Notificação compulsória', 'Lactente <3 meses: apneia + bradicardia + crise de cianose = UTI pediátrica', 'Vacinação: dTpa em gestantes (proteção do RN) + reforço a cada 10 anos'],
            perola: 'Linfocitose >50.000/mm³ em lactente com coqueluche = forma grave. ECMO pode ser necessário. Mortalidade elevada neste grupo.',
            especialidade: 'Infectologia/Pediatria'
          },
        ]
      },
      {
        sintoma: 'Urgências Pediátricas Sistêmicas',
        doencas: [
          {
            id: 'kawasaki', nome: 'Doença de Kawasaki', cid: 'M30.3',
            descricao: 'Vasculite sistêmica de pequenos e médios vasos. Risco de aneurisma de coronárias. Predomina <5 anos.',
            apresentacao: 'Febre >5 dias + ≥4 dos 5 critérios: conjuntivite bilateral não purulenta, alterações orais (lábios secos/fissuras, língua em morango, hiperemia de faringe), eritema palmoplantar + descamação, exantema polimórfico, linfoadenomegalia cervical unilateral >1,5cm.',
            criterios: ['Febre ≥5 dias + 4 de 5 critérios clássicos. Kawasaki incompleto: febre + 2-3 critérios + ecocardiograma'],
            exames: ['Hemograma (leucocitose + plaquetose na 2ª semana)', 'PCR/VHS elevados', 'Ecocardiograma (aneurisma coronário)', 'Urina (piúria estéril)', 'TGO/TGP + Albumina'],
            tratamento: 'IVIG 2g/kg IV dose única + AAS 80-100mg/kg/dia (fase aguda) → AAS 3-5mg/kg/dia (manutenção até ausência de aneurisma). Corticoide em casos refratários à IVIG.',
            diferenciais: ['Sarampo', 'Adenovírus', 'Escarlatina', 'Artrite reumatoide sistêmica', 'Síndrome de Stevens-Johnson'],
            alertas: ['Aneurisma coronário: principal causa de cardiopatia adquirida na infância nos países desenvolvidos', 'IVIG nas primeiras 10 dias de febre reduz risco de aneurisma de 25% para <5%', 'Kawasaki incompleto: difícil diagnóstico — ecocardiograma define conduta'],
            perola: 'Não confundir: descamação nas ponta dos dedos na 2ª-3ª semana é característica e retroativa ao diagnóstico de Kawasaki.',
            especialidade: 'Pediatria'
          },
          {
            id: 'conv-febril', nome: 'Convulsão Febril', cid: 'R56.0',
            descricao: 'Convulsão associada a febre sem infecção do SNC, em criança de 6 meses a 5 anos. Simples (1× <15min) ou complexa.',
            apresentacao: 'Criança com febre + crise tônico-clônica generalizada, geralmente no início da febre. Confusão pós-ictal breve. Simples: <15min + generalizada + 1× em 24h.',
            criterios: ['Febre ≥38°C + crise em criança 6 meses-5 anos + sem infecção do SNC + sem história de epilepsia'],
            exames: ['Glicemia capilar. PL: indicada se <12 meses (meningite pode não ter rigidez), ou pós-ATB, ou sinais meníngeos', 'EEG: não indicado rotineiramente na simples'],
            tratamento: 'Crise ativa: diazepam retal ou midazolam intranasal/bucal. Antipiréticos (paracetamol + ibuprofeno). Profilaxia de recorrência: NÃO indicada na simples.',
            diferenciais: ['Meningite bacteriana (PL se sinais meníngeos)', 'Encefalite', 'Epilepsia febril'],
            alertas: ['Convulsão febril NÃO é epilepsia', 'Risco de epilepsia após CF simples: <3% (mesmo da população geral)', 'Complexa (>15min, focal, >1× em 24h): investigar mais (EEG + RNM)'],
            perola: 'Recorrência de CF: 30-40% terão outra. Fatores de risco: idade <12m na 1ª crise, temperatura baixa, familiar com CF.',
            especialidade: 'Pediatria/Neurologia'
          },
          {
            id: 'sepse-neonatal', nome: 'Sepse Neonatal', cid: 'P36',
            descricao: 'Síndrome de resposta inflamatória sistêmica com infecção suspeita ou confirmada em RN. Precoce (<72h): Streptococcus agalactiae (GBS), E. coli. Tardia (>72h): Staphylococcus coagulase-negativo, Klebsiella, Candida.',
            apresentacao: 'Instabilidade térmica (hipo ou hipertermia), desconforto respiratório, hipotonia, irritabilidade ou letargia, dificuldade de alimentação, icterícia precoce, distensão abdominal, apneias, choque. "Bebê que não está bem" — sinal inespecífico que deve alertar.',
            criterios: ['Clínico + laboratorial. Hemocultura positiva = sepse confirmada. Sepse suspeita: clínica + leucograma alterado + PCR elevada'],
            exames: ['Hemocultura (obrigatória ANTES do ATB)', 'Hemograma com diferencial (leucocitose ou leucopenia, desvio esquerdo, neutropenia)', 'PCR + Procalcitonina', 'Glicemia (hipoglicemia frequente)', 'PL (se estável — meningite em 25-30% das sepses neonatais)', 'RX tórax', 'Ureia + creatinina + eletrólitos'],
            tratamento: 'Precoce (GBS/E.coli): ampicilina + gentamicina. Tardia hospitalar: oxacilina + aminoglicosídeo OU vancomicina (MRSA). Fungemia: anfotericina B. Duração: 10-14 dias. Suporte: oxigênio, glicose, pressores.',
            diferenciais: ['Cardiopatia congênita cianótica (sem febre, sem leucocitose)', 'Taquipneia transitória do RN (resolve 24-48h)', 'Doença da membrana hialina (prematuridade, surfactante)', 'Hipoglicemia neonatal isolada'],
            alertas: ['Hemocultura ANTES do ATB — mas não atrasar o ATB por mais de 30-60 minutos', 'Grupo B Streptococcus: profilaxia intraparto com penicilina G se mãe colonizada', 'Candida neonatal: risco em prematuros com cateter central, nutrição parenteral e ATB de amplo espectro'],
            perola: 'RN com qualquer sinal inespecífico + fatores de risco maternos (febre, ruptura prolongada das membranas, corioamnionite) = sepse até prova em contrário. Não aguardar hemograma — iniciar ATB imediatamente.',
            especialidade: 'Pediatria/Neonatologia'
          },
          {
            id: 'bronquiolite', nome: 'Bronquiolite Viral Aguda', cid: 'J21',
            descricao: 'Inflamação aguda dos bronquíolos por vírus (VSR em 70-80%). Principal causa de hospitalização em lactentes. Sazonalidade (outono/inverno).',
            apresentacao: 'Lactente <2 anos com pródromo de IVAS (coriza, febre baixa) → sibilância + taquipneia + retrações + esforço respiratório + crepitações. Apneia nos menores de 3 meses. SpO2 pode cair.',
            criterios: ['Diagnóstico clínico: 1° episódio de sibilância em lactente <2 anos + infecção viral associada'],
            exames: ['Diagnóstico clínico. Oximetria de pulso (monitorar). RX tórax: hiperinsuflação + infiltrado intersticial + atelectasias (se solicitado — não é rotina). PCR para VSR (epidemiologia, não muda conduta)'],
            tratamento: 'Suporte: hidratação (SNE se grave), aspiração de secreções nasais, posicionamento (elevação 30°), O2 se SpO2<92%. NÃO usar: broncodilatador (ineficaz), corticoide, ATB (viral), adrenalina (ambulatório). Internação: SpO2<92%, taquipneia grave, apneia, desidratação.',
            diferenciais: ['Asma (primeiro episódio pode ser idêntico)', 'Cardiopatia congênita com hiperfluxo pulmonar', 'Pneumonia bacteriana (febre alta + condensação)', 'Corpo estranho (início súbito, sem pródromo)'],
            alertas: ['VSR: altamente contagioso — isolamento de contato + máscara', 'Palivizumabe: profilaxia mensal em prematuros <29 semanas ou cardiopata durante temporada do VSR', 'Apneias em <3 meses: indicação absoluta de internação'],
            perola: 'Bronquiolite não responde a broncodilatador (ao contrário da asma) porque a obstrução é por muco + edema, não broncoespasmo. Não prescrever salbutamol de rotina.',
            especialidade: 'Pediatria'
          },
          {
            id: 'ictericia-neonatal', nome: 'Icterícia Neonatal — Hiperbilirrubinemia', cid: 'P59',
            descricao: 'Coloração amarelada da pele e mucosas no RN por elevação da bilirrubina. Fisiológica (maioria) ou patológica. Bilirrubina alta não tratada → kernicterus (lesão neurológica irreversível).',
            apresentacao: 'Icterícia céfalo-caudal progressiva (zona 1: cabeça; zona 5: palmas/plantas). Fisiológica: aparece após 24h, pico 3-5° dia, desaparece em 2 semanas. Patológica: aparece <24h (hemólise), persiste >3 semanas, bilirrubina direta elevada (colestase).',
            criterios: ['Nomograma de Bhutani: nível de bilirrubina plotado por hora de vida define risco (baixo/intermediário/alto). Bilirrubina direta >1mg/dL OU >20% da total = patológica'],
            exames: ['Bilirrubina total + direta (transcutânea como triagem)', 'Tipagem sanguínea mãe + RN + Coombs direto (hemólise por incompatibilidade ABO/Rh)', 'Hemograma + reticulócitos', 'G6PD se menino + descendência mediterrânea/africana', 'TSH neonatal (hipotireoidismo)'],
            tratamento: 'Fototerapia: principal tratamento (luz decompõe bilirrubina na pele). Indicação por nomograma. Hidratação. Exsanguinotransfusão: nível crítico OU falha de fototerapia (emerge bilirrubina). Icterícia colestática: investigar atresia biliar (US, cintilografia, biópsia).',
            diferenciais: ['Atresia biliar (icterícia colestática > 14 dias — cirurgia de Kasai urgente)', 'Galactosemia (bilirrubina direta + disfunção hepática)', 'Hipotireoidismo (icterícia prolongada)', 'Infecção TORCH'],
            alertas: ['Icterícia <24h: sempre patológica (hemólise) — investigar e tratar urgente', 'Kernicterus: sequela irreversível — surdez, paralisia cerebral ateto-coreica, paresia vertical do olhar', 'Atresia biliar: cirurgia de Kasai antes dos 60 dias de vida = melhor prognóstico'],
            perola: 'Regra do polegar para icterícia clínica neonatal: cada zona de Kramer corresponde a ~5mg/dL de bilirrubina. Zona 1 = 5, zona 2 = 10, zona 3 = 15, zona 4 = 20, zona 5 = >25. Usar apenas para triagem, não substituir dosagem.',
            especialidade: 'Pediatria/Neonatologia'
          },
          {
            id: 'invaginacao', nome: 'Invaginação Intestinal', cid: 'K56.1',
            descricao: 'Telescopagem de um segmento intestinal em outro (mais comum: íleo → cólon). Principal causa de obstrução intestinal em lactentes 3-12 meses. Idiopática na maioria (hiperplasia linfoide pós-viral).',
            apresentacao: 'Tríade clássica (33%): cólica abdominal paroxística intensa (choro intermitente com flexão das pernas) + vômitos + sangramento retal ("geleia de groselha" = fezes com sangue e muco). Massa em salsicha palpável no flanco direito. Letargia entre as crises.',
            criterios: ['US abdominal (padrão ouro não invasivo): imagem "alvo" ou "pseudorim" — sensibilidade/especificidade >95%'],
            exames: ['US abdominal (1ª escolha)', 'RX abdome (obstrução, mas pouco específico)', 'TC abdome (se US inconclusivo ou cirurgia)'],
            tratamento: 'Estável, sem peritonite: redução por enema hidrostático (solução salina) ou pneumático guiado por fluoroscopia ou US — sucesso em 80-90%. Instável, peritonite, falha: cirurgia aberta com desinvaginação manual ou ressecção de segmento isquêmico.',
            diferenciais: ['Cólica do lactente', 'Vólvulo', 'Hérnia encarcerada', 'Divertículo de Meckel sangrante', 'Púrpura de Henoch-Schönlein (abdominal)'],
            alertas: ['Tríade completa em apenas 33% — alta suspeita em lactente com choro paroxístico + letargia', '"Geleia de groselha" é sinal tardio (isquemia da mucosa) — não esperar por ela', 'Redução por enema: contraindicada se peritonite, perfuração, choque'],
            perola: 'Invaginação recorrente: investigar causa anatômica (divertículo de Meckel, pólipo, linfoma de Burkitt). A recorrência após enema é 10% — segunda tentativa de enema é geralmente bem-sucedida.',
            especialidade: 'Cirurgia Pediátrica/Pediatria'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 8. NEFROLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Nefrologia',
    icone: '🫘',
    sintomas: [
      {
        sintoma: 'Disfunção Renal / Edema',
        doencas: [
          {
            id: 'ira', nome: 'Injúria Renal Aguda', cid: 'N17',
            descricao: 'Queda rápida da TFG. Pré-renal (hipovolemia/baixo débito), intrínseca (NTA, glomerulonefrite), pós-renal (obstrução).',
            apresentacao: 'Oligúria (débito urinário <0,5mL/kg/h), aumento da creatinina, edema, hipertensão. Sinais de uremia grave: encefalopatia, pericardite, asterixe.',
            criterios: ['KDIGO: creatinina ≥0,3mg/dL em 48h OU ≥1,5× basal em 7 dias OU débito <0,5mL/kg/h por ≥6h'],
            exames: ['Creatinina + ureia seriadas', 'Eletrólitos (hipercalemia!)', 'Gasometria (acidose metabólica)', 'EAS + urina de 24h', 'US rins e vias urinárias', 'FENa (pré-renal <1%; intrínseca >2%)'],
            tratamento: 'Pré-renal: hidratação + suspender nefrotóxicos. Intrínseca: tratar causa, manejar hipercalemia + acidose + volemia. Pós-renal: desobstrução. Diálise em IRA grave (hipercalemia refratária, acidose grave, sobrecarga volêmica, uremia sintomática).',
            diferenciais: ['DRC agudizada', 'Síndrome nefrótica com IRA', 'Mieloma múltiplo renal'],
            alertas: ['Hipercalemia >6,5 mEq/L: emergência — gluconato de Ca2+ IV (estabiliza membrana) + insulina + bicarbonato + resina/diálise', 'FENa <1%: pré-renal (exceto contraste e mioglobinúria)', 'IECA/ARA + AINE + diurético = "tripla whammy" — causa frequente de IRA pré-renal'],
            perola: 'Cilindros granulosos pigmentados (muddy brown casts) no EAS = NTA. Cilindros hemáticos = glomerulonefrite.',
            especialidade: 'Nefrologia'
          },
          {
            id: 'drc', nome: 'Doença Renal Crônica', cid: 'N18',
            descricao: 'Perda progressiva e irreversível da função renal por >3 meses. Causas: DM, HAS, glomerulonefrite.',
            apresentacao: 'Progressiva: anemia, hipertensão, edema, proteinúria, sintomas urêmicos tardios (prurido, náusea, encefalopatia, pericardite, asterixe).',
            criterios: ['TFG <60 mL/min/1,73m² ou lesão renal por >3 meses. Classificação G1-G5 pela TFG + A1-A3 pela albuminúria'],
            exames: ['Creatinina + TFG estimada (CKD-EPI)', 'Urina (proteinúria = relação albumina/creatinina)', 'Hemograma (anemia)', 'Eletrólitos + cálcio + fósforo + PTH', 'US rins (tamanho, ecogenicidade)'],
            tratamento: 'Controle pressórico agressivo (IECA ou ARA = nefroprotegidos). Controle glicêmico (DM). Restrição proteica moderada. Tratar anemia (EPO + ferro IV). Corrigir cálcio-fósforo. Dieta hipofosfatada. TRS (diálise ou transplante) quando TFG <10-15.',
            diferenciais: ['IRA (reversível)', 'Nefropatia por contraste', 'Nefrite intersticial'],
            alertas: ['IECA/ARA: protegem rim na DRC (reduzem proteinúria) mas causam hipercalemia — monitorar K⁺', 'Metformina: contraindicada se TFG <30 (acidose lática)', 'Vacinação: Hepatite B, Pneumococo, Influenza — imunossupressão relativa'],
            perola: 'Rins aumentados + DRC: pensar em DM, amiloidose, mieloma, rim policístico. Rins pequenos = fibrose avançada.',
            especialidade: 'Nefrologia'
          },
          {
            id: 'sind-nefrotica', nome: 'Síndrome Nefrótica', cid: 'N04',
            descricao: 'Proteinúria maciça (>3,5g/dia) + hipoalbuminemia + edema + hiperlipidemia + lipidúria. Causas: lesão mínima (criança), GESF (adulto jovem), membranosa (adulto).',
            apresentacao: 'Edema em tornozelos evoluindo para anasarca, face inchada pela manhã, espuma na urina. Ascite e derrame pleural em casos graves.',
            criterios: ['Proteinúria >3,5g/dia (adulto) ou >40mg/m²/h (criança) + albumina sérica <3g/dL'],
            exames: ['Urina 24h (proteinúria) ou relação prot/creat em amostra', 'Albumina + lipidograma', 'Complemento (C3/C4)', 'Sorologias (HBV, HCV, HIV, sífilis, lúpus)', 'Biópsia renal (adultos)'],
            tratamento: 'Lesão mínima: prednisona 1mg/kg/dia (resposta em 8 semanas). Membranosa: observação (50% remissão espontânea) ou imunossupressor. GESF: corticoide. Suporte: diurético, IECA, estatina.',
            diferenciais: ['Síndrome nefrítica', 'ICC', 'Cirrose', 'Síndrome nefrótica secundária (LES, DM, amiloidose)'],
            alertas: ['Trombose de veia renal: complicação da membranosa — anticoagular', 'Infecções por pneumococo frequentes (perda de imunoglobulinas)', 'Hiperlipidemia severa: risco cardiovascular aumentado'],
            perola: 'Lesão mínima em criança: biópsia não necessária antes do corticoide (90% respondem). Adultos: biópsia para definir causa.',
            especialidade: 'Nefrologia'
          },
        ]
      },
      {
        sintoma: 'Glomerulonefrites e Infecção Urinária Alta',
        doencas: [
          {
            id: 'glomerulonefrite', nome: 'Glomerulonefrite Aguda Pós-Estreptocócica', cid: 'N00',
            descricao: 'Síndrome nefrítica por imunocomplexos após infecção estreptocócica (faringotonsilite ou impetigo). Predomina em crianças.',
            apresentacao: 'Hematúria macroscópica (urina cor de coca-cola) + edema + hipertensão + oligúria. Surge 1-3 semanas após faringotonsilite ou 3-6 semanas após impetigo.',
            criterios: ['Hematúria + proteinúria + cilindros hemáticos + queda do complemento (C3↓) + ASO elevada (ASLO)'],
            exames: ['EAS (hematúria + cilindros hemáticos + proteinúria)', 'Creatinina + ureia', 'C3 e C4 (C3 baixo + C4 normal = ativação via alternativa)', 'ASLO (Anti-estreptolisina O)', 'Biópsia renal (casos graves ou atípicos)'],
            tratamento: 'Suporte: dieta hipossódica + restrição hídrica + anti-hipertensivo + diurético. ATB se infecção ativa. Corticoide em formas rapidamente progressivas (GNRP).',
            diferenciais: ['Síndrome nefrótica', 'LES (C3 e C4 baixos)', 'Nefrite por IgA (sem intervalo pós-infecção)', 'Endocardite infecciosa'],
            alertas: ['Maioria das crianças: recuperação completa em semanas a meses', 'Adultos: pior prognóstico renal a longo prazo', 'Hipertensão grave + encefalopatia hipertensiva: emergência'],
            perola: 'Diferença LES vs. GNPE: LES tem C3 E C4 baixos (ativação via clássica). GNPE tem C3 baixo e C4 normal (via alternativa).',
            especialidade: 'Nefrologia/Pediatria'
          },
          {
            id: 'sind-nefritica', nome: 'Síndrome Nefrítica', cid: 'N03',
            descricao: 'Hematúria + hipertensão + edema + proteinúria moderada + oligúria. Classicamente por glomerulonefrite proliferativa.',
            apresentacao: 'Início agudo: urina escura (hematúria), edema periorbitário e de membros, HAS, diminuição da diurese. Proteinúria <3,5g/dia (diferente da nefrótica).',
            criterios: ['Hematúria + proteinúria (<3,5g/24h) + cilindros hemáticos + HAS + ± oligúria + queda da TFG'],
            exames: ['EAS com sedimento', 'Creatinina seriada', 'Complemento C3, C4, CH50', 'ANA, ANCA, Anti-GBM, ASLO, Anti-dsDNA (diagnóstico etiológico)', 'Biópsia renal (maioria dos casos)'],
            tratamento: 'Depende da causa. Suporte: controle pressórico + restrição sódica + diurético. Etiologias específicas: imunossupressores (LES, vasculite, Anti-GBM).',
            diferenciais: ['Síndrome nefrótica', 'IRA por outra causa', 'Hemólise (urina escura sem cilindros hemáticos)'],
            alertas: ['GNRP (glomerulonefrite rapidamente progressiva): perda rápida da função renal — biópsia urgente + imunossupressão precoce', 'Anti-GBM (Síndrome de Goodpasture): pulmonar + renal — emergência', 'ANCA vasculite: granulomatose com poliangeíte (Wegener) — RX tórax + biópsia'],
            perola: 'Hematúria + cilindros hemáticos = lesão glomerular. Hematúria sem cilindros = lesão de vias urinárias (litiase, tumor, ITU).',
            especialidade: 'Nefrologia'
          },
        ]
      },
      {
        sintoma: 'Distúrbios Eletrolíticos',
        doencas: [
          {
            id: 'hiponatremia', nome: 'Hiponatremia', cid: 'E87.1',
            descricao: 'Na⁺ sérico <135 mEq/L. Causa mais comum de distúrbio eletrolítico em hospitalizados.',
            apresentacao: 'Leve (125-135): náusea, cefaleia. Moderada: confusão, letargia. Grave (<120 ou rápida): convulsão, coma. Hiponatremia crônica: poucos sintomas.',
            criterios: ['Avaliar: osmolalidade sérica (hipertônica/isotônica/hipotônica) + volemia clínica (hiper/eu/hipovolêmica) + osmolalidade urinária + Na⁺ urinário'],
            exames: ['Na⁺ sérico + osmolalidade sérica + osmolalidade urinária + Na⁺ urinário', 'Glicemia (pseudo-hiponatremia)', 'TSH + cortisol (hipotireoidismo/Addison)', 'Urina'],
            tratamento: 'Aguda sintomática grave: SF 3% — elevar Na⁺ 1-2 mEq/h até cessar sintomas (máx 5mEq/L nas primeiras 1-2h). Meta de correção: <10-12 mEq/24h (risco de mielinólise pontina). SIADH: restrição hídrica ± vaptanas.',
            diferenciais: ['SIADH (Na urinário>40 + osmolalidade urinária alta)', 'Insuficiência adrenal', 'Hipotireoidismo', 'Potomania (Na urinário<10)', 'Polidipsia psicogênica'],
            alertas: ['Correção rápida demais: mielinólise pontina central (desmielinização — paraplegia, disfagia, disartria)', 'SIADH: causa mais comum de hiponatremia hospitalar. Tratar doença de base', 'Pseudo-hiponatremia: glicose alta ou proteína/lipídio elevado — osmolalidade sérica normal'],
            perola: 'Regra para corrigir Na em hiperglicemia: Na corrigido = Na medido + 1,6 × (glicose-100)/100.',
            especialidade: 'Nefrologia/Medicina Interna'
          },
          {
            id: 'hipercalemia', nome: 'Hipercalemia', cid: 'E87.5',
            descricao: 'K⁺ >5,5 mEq/L. Emergência se K⁺>6,5 ou com alterações de ECG. Causas: IRA, DRC, IECA/ARA, Addison, acidose.',
            apresentacao: 'Leve: fraqueza muscular. Grave: paralisia flácida, parestesias, arritmias fatais. ECG: onda T pontiaguda → QRS alargado → onda senoidal → FV.',
            criterios: ['K⁺ sérico + ECG para gravidade'],
            exames: ['K⁺ venoso', 'Gasometria (acidose?)', 'ECG (obrigatório)', 'Creatinina + ureia', 'Cortisol (Addison?)'],
            tratamento: 'Com alterações de ECG: gluconato de Ca2+ 10% 10mL IV (estabiliza membrana em 3-5min). Redistribuição: insulina 10U IV + glicose 50% 50mL + Bicarbonato se pH<7,1. Eliminação: furosemida IV + Kayexalate VO/retal + hemodiálise (urgência).',
            diferenciais: ['Pseudo-hipercalemia (hemólise na coleta)', 'Leucocitose/trombocitose extrema'],
            alertas: ['ECG sempre em hipercalemia — risco de FV sem sintomas prévios', 'Gluconato de cálcio: NÃO reduz K⁺ (apenas protege coração), efeito 30-60min', 'Hemodiálise: única terapia que elimina K⁺ rapidamente na IRA oligúrica'],
            perola: 'Progressão do ECG: onda T alta e pontiaguda → onda P achatada → PR longo → QRS alargado → onda senoidal → FV.',
            especialidade: 'Nefrologia/Emergência'
          },
        ]
      },
      {
        sintoma: 'Dor Lombar / Hematúria',
        doencas: [
          {
            id: 'urolitiase', nome: 'Urolitíase (Cólica Nefrética)', cid: 'N20',
            descricao: 'Formação de cálculos no trato urinário. Composição: oxalato de cálcio (70%), ácido úrico, estruvita, cistina.',
            apresentacao: 'Dor lombar intensa de início súbito irradiando para flanco e virilha, náusea, vômito, hematúria. Dor cólica (em ondas), sem posição de alívio.',
            criterios: ['Clínico + imagem. TC abdômen/pelve sem contraste: padrão ouro (sensibilidade 96%)'],
            exames: ['EAS (hematúria em 85%)', 'TC abdômen sem contraste (escolha)', 'US (gestante + criança)', 'Ureia + creatinina (função renal)', 'Urocultura'],
            tratamento: 'Analgesia: dipirona + anti-espasmódico; AINE (cetorolaco) eficaz; tamsulosina 0,4mg/dia (facilita expulsão de cálculos <10mm). Hidratação. Cálculo >10mm ou obstrução/infecção: ureterolitotripsia ou litotripsia extracorpórea.',
            diferenciais: ['Apendicite', 'Pielonefrite', 'Dissecção de aorta abdominal (AAA)', 'Isquemia mesentérica', 'Torção de ovário'],
            alertas: ['Cólica nefrética + febre = pielonefrite obstrutiva = EMERGÊNCIA urológica — drenar urgente', 'Hematúria sem dor em >40 anos: investigar neoplasia', 'AINE contraindicado em função renal comprometida'],
            perola: 'Cálculo de ácido úrico: radiotransparente (não aparece no RX, aparece na TC). Tratar com alcalinização da urina (bicarbonato).',
            especialidade: 'Urologia/Nefrologia'
          },
          {
            id: 'pielonefrite', nome: 'Pielonefrite Aguda', cid: 'N10',
            descricao: 'Infecção bacteriana do parênquima renal. Principal agente: E. coli (80%). Complicação de ITU baixa ascendente. Mais comum em mulheres.',
            apresentacao: 'Febre alta com calafrios + dor lombar unilateral (punho-percussão positiva) + disúria/polaciúria + náusea/vômito. Síndrome séptica em casos graves.',
            criterios: ['Clínico: febre + dor lombar + sintomas urinários. EAS com leucocitúria e nitrito positivo. Urocultura confirma o agente'],
            exames: ['EAS (leucocitúria, cilindros leucocitários = comprometimento renal, nitrito+, bacteriúria)', 'Urocultura + antibiograma (ANTES do ATB)', 'Hemograma (leucocitose)', 'Ureia + creatinina', 'US renal (excluir abscesso/obstrução) em febre que não cede em 72h', 'TC abdome (complicações: abscesso perinéfrico, cálculo obstrutivo)'],
            tratamento: 'Ambulatorial (leve): ciprofloxacino 500mg 12/12h × 7 dias OU SMX-TMP (se sensível) × 14 dias. Internação (sepse, vômitos, imunossuprimida, gestante, obstrução): ceftriaxone IV 1-2g/dia. Abscesso: drenagem percutânea + ATB. Obstrução: desobstrução urgente.',
            diferenciais: ['Cólica nefrética (sem febre)', 'Abscesso perinéfrico', 'Apendicite retroileal', 'Colecistite (direita)', 'Lombalgia mecânica'],
            alertas: ['Pielonefrite + obstrução (cálculo, tumor): emergência — drenar e ATB IV (não melhora sem drenagem)', 'Gestante: sempre internar + ATB IV (amoxicilina/cefalosporina)', 'Urocultura é OBRIGATÓRIA antes do ATB'],
            perola: 'Cilindros leucocitários no EAS = pielonefrite (lesão tubular com cilindros formados no túbulo renal). ITU baixa NÃO tem cilindros.',
            especialidade: 'Infectologia/Nefrologia'
          },
          {
            id: 'rim-policistico', nome: 'Rim Policístico Autossômico Dominante', cid: 'Q61.2',
            descricao: 'Doença hereditária AD por mutação em PKD1 (85%, crom 16) ou PKD2 (15%, crom 4). Múltiplos cistos renais bilaterais com progressão para DRC.',
            apresentacao: 'Geralmente assintomático nas primeiras décadas. Manifestações: dor lombar + hematúria + HAS + massa abdominal palpável + ITU recorrente. DRC terminal média: 54 anos (PKD1) / 74 anos (PKD2).',
            criterios: ['Critérios de Pei por imagem: cistos bilaterais age-dependent. Teste genético para PKD1/PKD2 se imagem inconclusiva'],
            exames: ['US renal (cistos bilaterais múltiplos)', 'TC/RNM (melhor definição)', 'Creatinina/TFG (progressão)', 'Urocultura (ITU frequente)', 'RNM cerebral (aneurisma intracraniano em 8-12% — triagem se história familiar de hemorragia subaracnoide)'],
            tratamento: 'Tolvaptana (antagonista V2): retarda progressão se TFG >25 e crescimento rápido. HAS: IECA/ARA. Dor: paracetamol, aspiração de cistos, nefrectomia. Hematúria: repouso e hidratação. Diálise/transplante na DRC terminal.',
            diferenciais: ['Rim policístico autossômico recessivo (criança, neonatal)', 'Cistos renais simples (raros, <3)', 'Síndrome de von Hippel-Lindau (cistos + hemangioblastoma)', 'Esclerose tuberosa'],
            alertas: ['Aneurisma de cerebral: rastreamento em família com história de HSA (mortalidade 50%)', 'Infecção de cisto: febre + dor lombar + urocultura negativa → TC/RNM + ATB lipossolúvel (fluoroquinolona)', 'Contraindicado contato físico intenso pelo risco de sangramento de cisto'],
            perola: 'Rins grandes + HAS em jovem + história familiar + cistos bilaterais = DRPAD. Perola do Revalida: manifestações extrarenais — aneurisma cerebral, cistos hepáticos, prolapso de VM.',
            especialidade: 'Nefrologia'
          },
          {
            id: 'sind-hepatorrenal', nome: 'Síndrome Hepatorrenal (SHR)', cid: 'K76.7',
            descricao: 'IRA funcional em cirrótico avançado com hipertensão portal. Vasoconstrição renal por vasodilatação esplâncnica. Sem lesão estrutural renal. Tipo 1 (aguda, <2 semanas) e tipo 2 (crônica).',
            apresentacao: 'Cirrótico com ascite + IRA (creatinina crescente) sem causa identificável (hipovolemia, sepse, nefrotóxico). Oligúria, sódio urinário <10 mEq/L. SHR-1: rápida progressão, mortalidade >80% sem tratamento.',
            criterios: ['Critérios ICA 2015: cirrose + ascite + creatinina >1,5mg/dL + sem resposta a 48h de albuminização + sem choque + sem nefrotóxico + proteinúria<500mg/dia + sem doença renal estrutural (US normal)'],
            exames: ['Creatinina + ureia seriados', 'Sódio urinário (<10mEq/L)', 'Proteinúria (ausente)', 'US renal (normal)', 'Hemocultura + urocultura (excluir infecção)', 'PL diagnóstica (PSBP?)', 'Albumina sérica'],
            tratamento: 'SHR-1: terlipressina IV 0,5-2mg/4-6h + albumina 1g/kg no 1° dia e depois 20-40g/dia até reversão. Meta: creatinina <1,5mg/dL. Transplante hepático: único tratamento definitivo. SHR-2: controle da ascite + transplante.',
            diferenciais: ['NTA (FENa>2%, cilindros granulosos)', 'Hipovolemia (responde a expansão)', 'PSBP (pode precipitar SHR)', 'Glomerulonefrite (proteinúria, hematúria)', 'Nefrotóxicos (contraste, AINEs, aminoglicosídeos)'],
            alertas: ['NSAID, aminoglicosídeos e contraste: contraindicados na cirrose avançada — precipitam SHR', 'PSBP: 25% desenvolve SHR. Profilaxia: albumina 1,5g/kg no diagnóstico + 1g/kg no 3° dia', 'Terlipressina: risco de isquemia (coronária, mesentérica) — monitorar'],
            perola: 'SHR vs. pré-renal: ambos têm sódio urinário baixo. Diferença: SHR não responde a expansão volêmica. Albumina 20% IV por 48h + sem resposta = SHR.',
            especialidade: 'Nefrologia/Hepatologia'
          },
          {
            id: 'nefrite-intersticial', nome: 'Nefrite Intersticial Aguda', cid: 'N10',
            descricao: 'Inflamação do interstício renal, geralmente medicamentosa (70%). Drogas mais comuns: AINEs, betalactâmicos, PPIs, rifampicina, sulfonamidas.',
            apresentacao: 'IRA após uso de medicamento (dias a semanas). Tríade clássica (30%): febre + rash cutâneo + eosinofilia. Frequentemente oligo assintomática descoberta por piora de creatinina.',
            criterios: ['Clínico + EAS (leucocitúria + cilindros leucocitários ± hematúria ± proteinúria leve). Biópsia renal: confirma (infiltrado intersticial linfocítico)'],
            exames: ['Creatinina + ureia (IRA)', 'EAS (leucocitúria, cilindros leucocitários)', 'Eosinofilia periférica (50%)', 'Eosinofilúria (especificidade baixa)', 'Galio-67 (hipercaptação bilateral = intersticial vs. glomerular)', 'Biópsia renal (inconclusivo ou grave)'],
            tratamento: 'Suspender o medicamento ofensor (fundamental). Corticoide (metilprednisolona 1mg/kg/dia × 4-6 semanas) se não há resolução em 1-2 semanas após suspensão do fármaco. Maioria recupera função se tratada precocemente.',
            diferenciais: ['NTA (exposição a contraste/aminoglicosídeo, isquemia — sem leucocitúria)', 'Glomerulonefrite (hematúria + cilindros hemáticos + proteinúria maciça)', 'Pielonefrite (febre + dor lombar + bacteriúria)'],
            alertas: ['PPIs: causa crescente de NIA crônica — suspeitar em uso prolongado com IRA sem causa', 'AINE: NIA aguda + síndrome nefrótica (doença de lesão mínima associada)', 'Biópsia antes do corticoide se incerteza diagnóstica ou sem melhora após suspensão'],
            perola: 'NIA por PPI: tríade clássica ausente em 90%. Apresentação típica: IRA silenciosa em idoso usuário crônico de omeprazol. Suspender PPI → melhora gradual em semanas.',
            especialidade: 'Nefrologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 9. GINECOLOGIA E OBSTETRÍCIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Ginecologia e Obstetrícia',
    icone: '🌸',
    sintomas: [
      {
        sintoma: 'Sangramento na Gestação',
        doencas: [
          {
            id: 'placenta-prev', nome: 'Placenta Prévia', cid: 'O44',
            descricao: 'Inserção da placenta sobre ou próxima ao orifício interno do colo uterino.',
            apresentacao: 'Sangramento vaginal INDOLOR, vermelho vivo, recorrente, no 3° trimestre. Sem contrações uterinas. Feto em apresentação anômala.',
            criterios: ['USG transvaginal: placenta cobrindo total ou parcialmente o orifício interno cervical'],
            exames: ['USG transvaginal (NUNCA toque vaginal)', 'CTG (cardiotocografia)', 'Tipagem + reserva de sangue', 'Hemograma + coagulograma'],
            tratamento: 'Hospitalização + repouso. PP total assintomática: cesariana eletiva com 36-37 semanas. Sangramento ativo + instabilidade: cesariana de urgência.',
            diferenciais: ['DPP (dor + útero hipertônico)', 'Vasa prévia (sangramento fetal)', 'Lacerações cervicais', 'Pólipo cervical'],
            alertas: ['NUNCA toque vaginal se suspeita de PP', 'DPP vs. PP: DPP = dor + sangue escuro + útero hipertônico. PP = indolor + sangue vivo', 'PP com acretismo: risco de hemorragia maciça no parto'],
            perola: 'Acretismo placentário (placenta acreta/increta/percreta): invasão do miométrio. Risco aumentado com PP + cicatriz uterina anterior.',
            especialidade: 'Gineco-Obstetrícia'
          },
          {
            id: 'dpp', nome: 'Descolamento Prematuro de Placenta', cid: 'O45',
            descricao: 'Separação prematura da placenta normalmente inserida. Emergência obstétrica grave.',
            apresentacao: 'Dor abdominal intensa + útero hipertônico + sangramento vaginal escuro + sofrimento fetal agudo. Hematoma retroplacentário pode não exteriorizar sangue.',
            criterios: ['Clínico (diagnóstico presumido). USG pode ser normal em hematoma pequeno. Definitivo: visualização do hematoma retroplacentário à USG'],
            exames: ['USG com Doppler (hematoma retroplacentário)', 'CTG (sofrimento fetal)', 'Hemograma + coagulograma + fibrinogênio (CIVD)', 'Tipagem + reserva'],
            tratamento: 'Grau I (leve): hospitalização + monitorização + maturidade pulmonar. Grau II-III ou sofrimento fetal: cesariana de urgência. CIVD: hemoderivados + fibrinogênio.',
            diferenciais: ['Placenta prévia', 'Trabalho de parto prematuro', 'Ruptura uterina', 'Cólica nefrética'],
            alertas: ['DPP + morte fetal: alto risco de CIVD por liberação de tromboplastina', 'Cocaína e tabagismo: principais fatores de risco evitáveis', 'DPP é causa principal de morte perinatal em trauma obstétrico'],
            perola: 'Hematoma retroplacentário grande sem exteriorização ("DPP oculto"): útero em "madeira" + hipotensão + sofrimento fetal sem sangramento vaginal.',
            especialidade: 'Gineco-Obstetrícia'
          },
          {
            id: 'gravidez-ectopica', nome: 'Gravidez Ectópica', cid: 'O00',
            descricao: 'Implantação do embrião fora do útero. Tuba uterina (95%). Principal causa de morte materna no 1° trimestre.',
            apresentacao: 'Tríade: amenorreia + dor pélvica + sangramento vaginal irregular. Rotura: dor abdominal intensa + choque hemorrágico + defesa abdominal.',
            criterios: ['β-hCG >1500-2000 mUI/mL + ausência de saco gestacional intrauterino na USG transvaginal = ectópica até prova contrária'],
            exames: ['β-hCG quantitativo (seriado se necessário)', 'USG transvaginal (saco extrauterino + anel tubário)', 'Hemograma + coagulograma + tipo sanguíneo', 'Punção de fundo de saco de Douglas (sangue não coagulado = hemoperitoneu)'],
            tratamento: 'Instável: cirurgia de urgência (salpingectomia ou salpingotomia laparoscópica). Estável + β-hCG <5000 + sem batimentos fetais: metotrexato 50mg/m² IM.',
            diferenciais: ['Abortamento espontâneo', 'Corpo lúteo hemorrágico', 'Apendicite', 'DIP', 'Torção de ovário'],
            alertas: ['β-hCG positivo + USG sem gravidez intrauterina = ectópica até prova contrária', 'Mulher com choque em idade fértil: β-hCG imediatamente', 'Rh negativo: imunoglobulina anti-Rh após tratamento'],
            perola: 'Gestação heterotópica (intra + extrauterina): rara mas frequente em FIV. Não excluir ectópica pela presença de saco intrauterino em FIV.',
            especialidade: 'Gineco-Obstetrícia'
          },
        ]
      },
      {
        sintoma: 'Hipertensão na Gestação',
        doencas: [
          {
            id: 'pre-eclampsia', nome: 'Pré-eclâmpsia', cid: 'O14',
            descricao: 'Hipertensão gestacional (>20 semanas) + proteinúria ou disfunção orgânica. Forma grave: PA>160/110 ou disfunção orgânica.',
            apresentacao: 'PA ≥140/90 após 20ª semana + proteinúria (≥300mg/24h ou relação alb/creat ≥0,3) ou disfunção orgânica (renal, hepática, neurológica, hematológica).',
            criterios: ['ACOG: PA ≥140/90 ×2 + 4h apart + >20 semanas + proteinúria OU disfunção orgânica mesmo sem proteinúria'],
            exames: ['PA seriada', 'Urina 24h (proteinúria) ou relação prot/creat', 'Hemograma + plaquetas + TGO/TGP + creatinina + Ácido úrico + LDH', 'USG fetal + Doppler'],
            tratamento: 'Leve (<34 semanas): internação + sulfato de magnésio (prevenção de eclâmpsia) + anti-hipertensivo se PA≥160/110 (hidralazina, labetalol ou nifedipino). Parto: ≥37 semanas (leve) ou ≥34 semanas (grave) ou qualquer IG se instável.',
            diferenciais: ['HAS crônica', 'Hipertensão gestacional (sem proteinúria/disfunção)', 'Síndrome HELLP', 'Nefropatia prévia'],
            alertas: ['Sulfato de Mg: antídoto = gluconato de cálcio IV', 'Sinais de toxicidade do MgSO4: ausência de reflexo patelar (primeiro sinal) → parada respiratória → PCR', 'Pré-eclâmpsia grave: única cura é o parto'],
            perola: 'Prevenção de PE: AAS 75-150mg/dia iniciado antes de 16 semanas em gestantes de alto risco (HAS crônica, PE anterior, DM, obesidade, gemelar).',
            especialidade: 'Gineco-Obstetrícia'
          },
          {
            id: 'eclampsia', nome: 'Eclâmpsia', cid: 'O15',
            descricao: 'Convulsão na pré-eclâmpsia. Emergência obstétrica. Tônico-clônica generalizada, pode ser anteparto, intraparto ou pós-parto.',
            apresentacao: 'Convulsão tônico-clônica generalizada em gestante com pré-eclâmpsia. Cefaleia intensa, epigastralgia, escotomas podem preceder.',
            criterios: ['Convulsão em paciente com pré-eclâmpsia, sem outra causa neurológica explicando'],
            exames: ['β-hCG (confirmar gestação)', 'TC crânio (excluir HSA, AVC)', 'Hemograma + plaquetas + coagulograma + TGO/TGP', 'Mg sérico'],
            tratamento: 'MgSO4 bolus 4-6g IV em 20min + manutenção 1-2g/h. Controle das vias aéreas (decúbito lateral). PA: labetalol/hidralazina IV se >160/110. Parto após estabilização.',
            diferenciais: ['Epilepsia', 'AVC', 'HSA', 'Encefalite', 'Hipoglicemia'],
            alertas: ['MgSO4 é tratamento E profilaxia de nova crise — superior a diazepam na eclâmpsia', 'Dose de ataque de MgSO4 IV: 4-6g em 20min', 'Pós-parto: 50% das eclâmpsias ocorrem até 48h após o parto'],
            perola: 'Diferença eclâmpsia vs. síndrome HELLP: HELLP pode ocorrer sem hipertensão ou proteinúria em 15% dos casos.',
            especialidade: 'Gineco-Obstetrícia'
          },
          {
            id: 'hellp', nome: 'Síndrome HELLP', cid: 'O14.2',
            descricao: 'Hemólise + elevação de enzimas hepáticas + plaquetopenia. Forma grave de pré-eclâmpsia com alta mortalidade materno-fetal.',
            apresentacao: 'Epigastralgia ou dor em HD intensa + náusea + cefaleia. PA pode estar normal em 15%. Icterícia. Pode evoluir para ruptura hepática.',
            criterios: ['Tennessee: hemólise (LDH>600 + esquizócitos) + TGO>70 + plaquetas<100.000. Mississippi: 3 classes por plaquetas'],
            exames: ['Hemograma + plaquetas', 'TGO/TGP + LDH + Bilirrubinas', 'Esfregaço periférico (esquizócitos, fragmentação)', 'Coagulograma + fibrinogênio', 'USG abdômen (hematoma hepático?)'],
            tratamento: 'Estabilização + parto (independente da IG em casos graves). Corticoide (betametasona) para maturação pulmonar fetal se <34 semanas. Correção de plaquetopenia se <50.000 pré-parto. MgSO4 profilático.',
            diferenciais: ['PTI', 'TTP', 'SHU', 'Hepatite aguda', 'Colangite'],
            alertas: ['Ruptura hepática: emergência cirúrgica — dor HD súbita + queda de Hb + instabilidade', 'Transfusão de plaquetas: apenas se <50.000 antes do parto ou <20.000 conservador', 'Pode ocorrer sem pré-eclâmpsia clássica'],
            perola: 'DIC é complicação frequente no HELLP — monitorar fibrinogênio e TP. Fibrinogênio <300 mg/dL = risco alto de sangramento.',
            especialidade: 'Gineco-Obstetrícia'
          },
        ]
      },
      {
        sintoma: 'Outras Complicações Obstétricas',
        doencas: [
          {
            id: 'tpp', nome: 'Trabalho de Parto Prematuro', cid: 'O60',
            descricao: 'Trabalho de parto entre 20 e 36 semanas + 6 dias de gestação. Principal causa de morbidade e mortalidade neonatal.',
            apresentacao: 'Contrações regulares (≥4/20min ou ≥8/60min) + modificação cervical (apagamento + dilatação) entre 20-36+6 semanas.',
            criterios: ['Contrações + dilatação cervical ≥2cm ou apagamento ≥80% entre 20-36+6 semanas. Fibronectina fetal (>50ng/mL) prediz TPP'],
            exames: ['CTG (contrações)', 'US cervical (colo <25mm = alto risco)', 'Fibronectina fetal (swab vaginal)', 'Exame especular (excluir rotura de membranas)', 'Urina (ITU = causa de TPP)', 'β-hCG + USG obstétrica'],
            tratamento: '<34 semanas: tocólise (nifedipino, atosibana) por 48h + corticoide (betametasona 12mg IM 2× com 24h intervalo — maturação pulmonar fetal) + sulfato de Mg (neuroproteção fetal <32 semanas). ≥34 semanas: encaminhar ao parto.',
            diferenciais: ['Contratilidade uterina sem modificação cervical (falso TPP)', 'Apendicite', 'Cálculo renal', 'Placenta prévia'],
            alertas: ['Corticoide antenatal: máxima eficácia entre 24-34 semanas, reduz SDR, HIV, ECN, mortalidade', 'Tocólise: apenas para ganhar tempo para corticoide e transferência — não prolonga gestação por mais de 48h', 'MgSO4 neuroproteção: apenas <32 semanas'],
            perola: 'Colo curto (<25mm) no US cervical entre 16-24 semanas: progesterona vaginal 200mg/noite reduz TPP em 45%.',
            especialidade: 'Gineco-Obstetrícia'
          },
          {
            id: 'mastite', nome: 'Mastite Puerperal', cid: 'O91',
            descricao: 'Infecção do parênquima mamário, geralmente no pós-parto. S. aureus (mais comum). Pode evoluir para abscesso.',
            apresentacao: 'Mama vermelha, quente, edemaciada, dolorosa com limite pouco definido. Febre alta, calafrios, sintomas gripais. Geralmente unilateral em 2-3ª semana pós-parto.',
            criterios: ['Clínico: ingurgitamento com sinais inflamatórios + febre'],
            exames: ['Diagnóstico clínico', 'US mamária (suspeita de abscesso: área flutuante)', 'Cultura do leite materno (ATB resistente ou recorrente)'],
            tratamento: 'Continuar amamentação ou ordenhamento (NÃO parar amamentação — acelera resolução). Diclofenaco VO (anti-inflamatório + analgésico). ATB: cefalexina 500mg 6/6h × 10-14 dias (ou clindamicina se alergia). Abscesso: drenagem.',
            diferenciais: ['Ingurgitamento mamário (bilateral, sem febre)', 'Abscesso mamário (flutuação à palpação)', 'Carcinoma inflamatório (raro, não regride com ATB)'],
            alertas: ['Abscesso mamário: US + drenagem cirúrgica (punção aspirativa guiada por US como alternativa)', 'MRSA: crescente nas mastites — suspeitar em falha de cefalexina', 'Não parar amamentação: leite materno não é nocivo ao bebê'],
            perola: 'Mastite vs. ingurgitamento: ingurgitamento é bilateral + começa nas primeiras 48-96h + sem febre alta. Mastite é unilateral + ocorre após 1ª semana + febre alta.',
            especialidade: 'Gineco-Obstetrícia'
          },
          {
            id: 'mola', nome: 'Mola Hidatiforme', cid: 'O01',
            descricao: 'Doença trofoblástica gestacional benigna por fecundação anormal. Completa (46XX — toda paternal) ou parcial (triploidia).',
            apresentacao: 'Sangramento vaginal no 1° trimestre + útero maior que IG + β-hCG muito elevado. Sinais de HAS precoce (<20 semanas), hiperemese, cistos tecaluteínicos ovarianos.',
            criterios: ['USG: padrão em "flocos de neve" ou "tempestade de neve". β-hCG muito alto para IG. Histopatológico: vilositrofoblasto hidatidiforme'],
            exames: ['β-hCG quantitativo (muito elevado)', 'USG pélvica (padrão molar + cistos tecaluteínicos)', 'RX tórax (metástase em mola invasora)', 'Tipagem sanguínea + hemograma + coagulograma'],
            tratamento: 'Esvaziamento uterino por aspiração a vácuo (curetagem aumenta risco de perfuração). Seguimento: β-hCG semanal até negativo × 3 → mensal × 6 meses. Anticoncepção por 6-12 meses.',
            diferenciais: ['Aborto retido', 'Gestação gemelar', 'Coriocarcinoma', 'Gravidez ectópica'],
            alertas: ['15-20% de mola completa evolui para neoplasia trofoblástica (invasora ou coriocarcinoma)', 'Rh negativo: imunoglobulina anti-Rh após esvaziamento', 'β-hCG planalto ou subida após esvaziamento = neoplasia trofoblástica → quimioterapia'],
            perola: 'Mola completa vs. parcial: completa tem maior risco de malignização (15-20%) vs. parcial (1-5%). Ambas: seguimento rigoroso com β-hCG.',
            especialidade: 'Gineco-Obstetrícia'
          },
        ]
      },
      {
        sintoma: 'Urgências Ginecológicas',
        doencas: [
          {
            id: 'torcao-ovario', nome: 'Torção de Ovário', cid: 'N83.5',
            descricao: 'Torção do ovário e/ou tuba em torno do ligamento. Geralmente associada a cisto ou tumor ovariano.',
            apresentacao: 'Dor pélvica unilateral de início súbito, intensa, pode ser intermitente (destorção espontânea), náusea e vômito. Massa anexial à USG.',
            criterios: ['USG + Doppler: massa ovariana + ausência de fluxo ao Doppler. Diagnóstico definitivo: laparoscopia'],
            exames: ['β-hCG (excluir GE)', 'USG pélvica transvaginal com Doppler', 'Hemograma + PCR', 'CA-125 (suspeita de neoplasia)'],
            tratamento: 'Laparoscopia de urgência: destorção ± ooforoplastia (preservar ovário se viável). Ooforectomia se necrose ou neoplasia maligna.',
            diferenciais: ['Gravidez ectópica', 'Apendicite', 'DIP', 'Rotura de cisto', 'Diverticulite'],
            alertas: ['Ovário preto (necrose) NÃO significa não salvável — sempre tentar destorção', 'Doppler negativo não exclui torção (sensibilidade 46%)', 'Massa ovariana >5cm: fator de risco para torção'],
            perola: 'Torção de ovário em gestante: mais comum no 1° trimestre (corpo lúteo grande). Sempre preservar ovário com corpo lúteo <10 semanas.',
            especialidade: 'Gineco-Obstetrícia'
          },
          {
            id: 'dip', nome: 'Doença Inflamatória Pélvica (DIP)', cid: 'N73',
            descricao: 'Infecção ascendente do trato genital feminino (endométrio, tubas, ovários, paramétrios). N. gonorrhoeae, C. trachomatis, anaeróbios.',
            apresentacao: 'Dor pélvica bilateral, febre, corrimento vaginal purulento, dispareunia, dor à mobilização do colo uterino (sinal do espelho). Leucocitose + PCR elevado.',
            criterios: ['Mínimos: dor pélvica + dor à mobilização do colo uterino OU dor uterina OU dor anexial à palpação (excluídas outras causas)'],
            exames: ['Hemograma + PCR', 'Endocérvice: pesquisa de gonococo + clamídia (PCR)', 'β-hCG (excluir GE)', 'USG pélvica (abscesso tubo-ovariano)', 'Laparoscopia (gold standard, raramente necessária)'],
            tratamento: 'Leve-moderada: ceftriaxona 500mg IM dose única + doxiciclina 100mg 12/12h × 14 dias + metronidazol 500mg 12/12h × 14 dias. Grave/abscesso: hospitalização + ATB IV (clindamicina + gentamicina). Drenagem cirúrgica se abscesso não responsivo.',
            diferenciais: ['Torção de ovário', 'Apendicite', 'Gravidez ectópica', 'Endometriose', 'Cisto ovariano roto'],
            alertas: ['Tratar parceiro (IST)', 'Abscesso tubo-ovariano: requer drenagem se >4-5cm ou sem resposta ao ATB em 72h', 'Complicações: esterilidade tubária, dor pélvica crônica, GE (10× maior risco)'],
            perola: 'DIP: dor à mobilização do colo = sinal mais específico (colo se mexe e arrasta estruturas inflamadas). Diagnóstico clínico — tratar empiricamente.',
            especialidade: 'Gineco-Obstetrícia'
          },
          {
            id: 'endometriose', nome: 'Endometriose', cid: 'N80',
            descricao: 'Presença de tecido endometrial funcionante fora da cavidade uterina (ovários, peritônio, septo retovaginal). Doença estrogênio-dependente. Afeta 10% das mulheres em idade reprodutiva.',
            apresentacao: 'Dismenorreia progressiva (piora ao longo dos anos), dispareunia de profundidade, infertilidade, dor pélvica crônica. Sintomas cíclicos ligados ao ciclo menstrual. Lesões ovarianas: endometrioma ("cisto de chocolate").',
            criterios: ['Laparoscopia com biópsia (padrão ouro). USG transvaginal (endometrioma ovariano — sensibilidade 93%). RNM pelve (endometriose profunda infiltrante)'],
            exames: ['USG transvaginal (endometrioma: cisto hipoecoico com debris)', 'RNM pelve (doença profunda)', 'CA-125 (pode estar elevado, mas inespecífico — não usar isolado)', 'Laparoscopia diagnóstica (confirmatória + estadiamento)'],
            tratamento: 'Analgesia: AINEs + paracetamol. Hormonal (supressão): ACO contínuo (1ª linha) OU DIU de levonorgestrel OU progestágeno contínuo OU GnRH-a (agonistas). Cirurgia laparoscópica: excisão de lesões + cistectomia de endometrioma. Infertilidade: estimulação ovariana + FIV ou cirurgia.',
            diferenciais: ['DIP (dor pélvica aguda + febre + corrimento)', 'SOP (amenorreia + hiperandrogenismo)', 'Miomatose uterina (sangramento + distorção uterina)', 'Torção de ovário (dor aguda)'],
            alertas: ['CA-125: não usar para rastrear endometriose (baixa especificidade — eleva em inflamação, menstruação, Ca ovário)', 'Endometrioma antes de FIV: cirurgia pode reduzir reserva ovariana — avaliar caso a caso', 'Endometriose profunda: acomete bexiga/reto — sintomas urinários e intestinais cíclicos'],
            perola: 'Dismenorreia progressiva em jovem com piora ao longo dos anos ≠ dismenorreia primária (decresce com a idade). Dismenorreia secundária progressiva = endometriose até prova em contrário.',
            especialidade: 'Ginecologia'
          },
          {
            id: 'torcao-ovario', nome: 'Torção de Ovário', cid: 'N83.5',
            descricao: 'Rotação do ovário em torno de seu pedículo vascular, causando obstrução venosa e arterial. Emergência cirúrgica. Comum em ovários aumentados (cisto, endometrioma, SOP).',
            apresentacao: 'Dor pélvica aguda intensa e súbita, unilateral, com irradiação para flanco e coxa. Náusea e vômito intensos. Pode haver dor tipo cólica intermitente (torção parcial). Massa anexial à USG.',
            criterios: ['Clínico + USG com Doppler (ausência de fluxo = confirmação, mas fluxo presente NÃO exclui — falso negativo em 60%)'],
            exames: ['β-hCG (excluir GE)', 'USG pélvica com Doppler (massa + ausência de fluxo)', 'TC pelve (alternativa se USG inconclusivo)', 'Hemograma + PCR (secundário)'],
            tratamento: 'Cirurgia laparoscópica de urgência: detorção + cistectomia (se cisto). Ooforectomia apenas se necrose irreversível confirmada (ovário negro/roxo = não necessariamente necrótico). Conservador preferido mesmo em ovário aparentemente inviável (revasculariza em 70% dos casos).',
            diferenciais: ['Gravidez ectópica', 'DIP', 'Apendicite', 'Rotura de cisto ovariano', 'Endometriose aguda'],
            alertas: ['Doppler normal NÃO exclui torção (fluxo pode estar parcialmente preservado)', 'Ovário aparentemente necrótico: 70% revascularizam após detorção — não retirar de imediato', 'Demora diagnóstica = necrose + comprometimento da fertilidade'],
            perola: 'Dor pélvica súbita + vômitos intensos + massa anexial em mulher jovem = torção de ovário até laparoscopia. Não aguardar Doppler negativo para operar.',
            especialidade: 'Ginecologia/Cirurgia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 10. REUMATOLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Reumatologia',
    icone: '🦴',
    sintomas: [
      {
        sintoma: 'Artrite Inflamatória',
        doencas: [
          {
            id: 'ar', nome: 'Artrite Reumatoide', cid: 'M05',
            descricao: 'Doença autoimune sistêmica com artrite simétrica periférica erosiva. Predomina em mulheres 30-50 anos.',
            apresentacao: 'Artrite simétrica de pequenas articulações (MCF, IFP, punho), rigidez matinal >1h, fadiga, nódulos reumatoides, manifestações extraarticulares (pulmão, coração, olhos).',
            criterios: ['ACR/EULAR 2010: ≥6 pontos — articulações comprometidas(0-5pts)+sorologias(0-3pts)+reagentes de fase aguda(0-1pt)+duração(0-1pt)'],
            exames: ['FR (fator reumatoide)', 'Anti-CCP (mais específico, precoce)', 'PCR + VHS', 'Hemograma', 'RX mãos e pés (erosões, estreitamento articular)', 'US articular (sinovite)'],
            tratamento: 'Metotrexato (droga âncora, 15-25mg/semana) + ácido fólico. Corticoide ponte no início. Biologicos se MTX falhar: anti-TNF (adalimumabe, etanercepte), abatacepte, tocilizumabe, rituximabe.',
            diferenciais: ['LES (articulações, fotossensibilidade, anti-dsDNA)', 'Artrite psoriásica (assimétrica, IFD)', 'Artrite gotosa (aguda, monoarticular)', 'Osteoartrite (mais velhos, sem inflamação sistêmica)'],
            alertas: ['MTX: hemograma + transaminases mensais. Hepatotóxico. Teratogênico — contracepção obrigatória', 'Biológicos: rastrear TB latente antes (PPD/IGRA + RX tórax)', 'Coluna cervical: instabilidade atlantoaxial em AR grave — atenção em intubação'],
            perola: 'Anti-CCP: especificidade 95% para AR. Positivo anos antes do aparecimento clínico. Prediz doença erosiva mais grave.',
            especialidade: 'Reumatologia'
          },
          {
            id: 'lupa', nome: 'Lúpus Eritematoso Sistêmico (LES)', cid: 'M32',
            descricao: 'Doença autoimune multissistêmica. Predomina em mulheres jovens (10:1). Negras e hispânicas têm doença mais grave.',
            apresentacao: 'Artrite + rash malar (asa de borboleta) + fotossensibilidade + úlceras orais + serosite + nefrite + citopenias + manifestações neurológicas.',
            criterios: ['SLICC 2012: ≥4 de 11 critérios clínicos OU critérios imunológicos + evidência clínica. ACR/EULAR 2019: ≥10 pontos'],
            exames: ['FAN (triagem, alta sensibilidade)', 'Anti-dsDNA (específico, correlaciona com atividade)', 'Anti-Sm (muito específico)', 'Complemento C3 e C4 (baixos na atividade)', 'Hemograma (citopenias)', 'Urina 24h + biópsia renal (nefrite lúpica)'],
            tratamento: 'Hidroxicloroquina 5mg/kg/dia (para TODOS os pacientes). Corticoide para atividade. Imunossupressores (azatioprina, micofenolato, ciclofosfamida na nefrite grave). Belimumab (anti-BAFF) em doença refratária.',
            diferenciais: ['AR', 'Síndrome de Sjögren', 'Doença mista do tecido conjuntivo', 'Polimiosite', 'Vasculite'],
            alertas: ['Anti-Ro/SSA: risco de bloqueio cardíaco fetal — monitorar FCF se gestante', 'Anticoagulante lúpico + abortos de repetição = síndrome antifosfolipídio (SAF)', 'Flares com infecção: distinguir atividade de lúpus vs. infecção (C3/C4 vs. PCR)'],
            perola: 'Nefrite lúpica: pior prognóstico renal nas classes III e IV (proliferativa focal e difusa). Biópsia renal classifica e orienta tratamento.',
            especialidade: 'Reumatologia'
          },
          {
            id: 'gota', nome: 'Artrite Gotosa', cid: 'M10',
            descricao: 'Artrite microcristalina por depósito de cristais de urato monossódico. Hiperuricemia necessária mas não suficiente.',
            apresentacao: 'Crise aguda: monoartrite aguda muito intensa (podagra = 1° MTF), eritema, calor, edema, febre. Tofos: depósitos palpáveis de urato em orelha, tendão de Aquiles, olécrano.',
            criterios: ['Padrão ouro: cristais de urato no líquido sinovial (negativamente birrefringentes)'],
            exames: ['Ácido úrico sérico (pode ser normal na crise)', 'Análise do líquido sinovial (cristais de urato)', 'RX articular (erosões em saca-bocado)', 'US articular (sinal do halo duplo)', 'Creatinina (hiperuricemia renal?)'],
            tratamento: 'Crise aguda: colchicina 0,5mg 1-2×/dia (início <12h) OU AINE (indometacina) OU corticoide. Hipouricemiante (alopurinol 100-300mg/dia, início APÓS crise aguda) se: ≥2 crises/ano, tofos, nefrolitíase, uropatia.',
            diferenciais: ['Artrite séptica (artrocentese + cultura)', 'Pseudogota (pirofosfato de cálcio)', 'Artrite reativa', 'Celulite'],
            alertas: ['Alopurinol: iniciar após resolução da crise aguda (pode piorar)', 'Febuxostato: alternativa ao alopurinol, mas risco cardiovascular aumentado', 'Colchicina + diuréticos tiazídicos: aumentam uricemia — rever medicações'],
            perola: 'Pseudogota (CPPD): joelho, punho, sínfise púbica. Cristais positivamente birrefringentes. RX: condrocalcinose.',
            especialidade: 'Reumatologia'
          },
        ]
      },
      {
        sintoma: 'Vasculites e Doenças do Tecido Conjuntivo',
        doencas: [
          {
            id: 'pmr', nome: 'Polimialgia Reumática', cid: 'M35.3',
            descricao: 'Síndrome inflamatória de ombros e cinturas pélvicas em maiores de 50 anos. Frequentemente associada à arterite de células gigantes.',
            apresentacao: 'Dor e rigidez bilateral de ombros e quadris. Rigidez matinal >45 min. Incapacidade de elevar os braços. Sem fraqueza muscular objetiva (diferente da polimiosite).',
            criterios: ['ACR/EULAR 2012: idade ≥50 + rigidez bilateral de ombros + VHS ≥50 ou PCR elevada + pontuação clínica ≥4-5 pontos (com US adiciona 1 ponto)'],
            exames: ['VHS (>50mm/h, frequentemente >100) + PCR', 'Hemograma (anemia normocítica)', 'US ombros/quadris (bursite subdeltóidea + coxofemoral)', 'Biópsia da artéria temporal (se cefaleia + amaurose = ACG)'],
            tratamento: 'Prednisona 12,5-25mg/dia (resposta dramática em 24-72h — diagnóstico terapêutico). Reduzir gradualmente em 1-2 anos. Metotrexato como poupador de corticoide.',
            diferenciais: ['Polimiosite (CK elevada + fraqueza real)', 'AR (mãos + pés)', 'Mieloma múltiplo (proteínas + eletroforese)', 'Hipotireoidismo', 'Metástase óssea'],
            alertas: ['Arterite de células gigantes: cefaleia temporal + amaurose súbita = urgência — corticoide IM antes de biópsia para preservar visão', 'Prednisona: não baixar dose antes de 1 mês de resposta completa', 'Recidiva ao tentar reduzir corticoide é frequente'],
            perola: 'Se resposta dramática ao corticoide em 24-72h (dor desaparece) = diagnóstico de PMR confirmado. Resposta ruim = repensar diagnóstico.',
            especialidade: 'Reumatologia'
          },
          {
            id: 'vasculite-anca', nome: 'Vasculite ANCA-associada (GPA/Wegener)', cid: 'M31.3',
            descricao: 'Vasculite de pequenos vasos mediada por ANCA. GPA (c-ANCA/PR3): vias aéreas superiores + pulmão + rim. MPA (p-ANCA/MPO): rim + pulmão.',
            apresentacao: 'GPA: sinusite crônica destrutiva + perfuração de septo nasal + otite média + hemoptise + hematúria. "Nariz em sela". Glomerulonefrite rapidamente progressiva.',
            criterios: ['ANCA (c-ANCA/PR3 em GPA; p-ANCA/MPO em MPA) + biópsias (granuloma necrotizante em GPA)'],
            exames: ['ANCA (c-ANCA + anti-PR3; p-ANCA + anti-MPO)', 'Urina (cilindros hemáticos, proteinúria)', 'Creatinina', 'RX/TC tórax (nódulos, cavidades)', 'TC seios da face (sinusite)', 'Biópsia (pulmão ou rim ou nasofaringe)'],
            tratamento: 'Indução: ciclofosfamida IV (ou rituximabe) + metilprednisolona. Manutenção: rituximabe ou azatioprina. Plasmaférese em GNRP grave ou hemorragia alveolar.',
            diferenciais: ['LES com nefrite', 'Síndrome de Goodpasture (Anti-GBM)', 'Endocardite (falso ANCA positivo)', 'Sarcoidose'],
            alertas: ['Hemorragia alveolar difusa: emergência — imunossupressão + plasmaférese imediata', 'Rastrear TB antes de ciclofosfamida/rituximabe', 'Recidiva frequente — monitorar ANCA e creatinina'],
            perola: 'ANCA falso-positivo: endocardite infecciosa pode ter ANCA+ (p-ANCA) — sempre hemocultura antes de imunossupressão em doença renal + febre.',
            especialidade: 'Reumatologia/Nefrologia'
          },
        ]
      },
      {
        sintoma: 'Dor Musculoesquelética Crônica',
        doencas: [
          {
            id: 'osteoartrite', nome: 'Osteoartrite (Artrose)', cid: 'M15',
            descricao: 'Doença degenerativa da cartilagem articular. Mais comum em joelho, quadril, coluna e mãos (IFD).',
            apresentacao: 'Dor articular que piora com atividade e melhora com repouso (diferente da inflamatória). Rigidez matinal <30min. Crepitação. Nódulos de Heberden (IFD) e Bouchard (IFP).',
            criterios: ['ACR: dor articular + ≥3 de: >50 anos, rigidez <30min, crepitação, sensibilidade óssea, alargamento ósseo, sem calor'],
            exames: ['RX articular (pinçamento de espaço articular, osteófitos, esclerose subcondral, cistos)', 'Hemograma + PCR normais (excluir artrite inflamatória)', 'Líquido sinovial: grau 1 (não inflamatório, <2000 células)'],
            tratamento: 'Não farmacológico: fisioterapia + perda de peso + exercícios (fundamental). Analgesia: paracetamol ou AINE tópico/VO. Infiltração intraarticular de corticoide. Artroscopia (cirurgia) se refratário. Artroplastia total em casos avançados.',
            diferenciais: ['AR (inflamatória, simétrica, sistêmica)', 'Gota', 'Síndrome do túnel do carpo', 'Bursite'],
            alertas: ['AINE crônico: risco gastrointestinal e renal — usar IBP + monitorar função renal', 'Evitar opioides fortes para artrose (risco de dependência)', 'Infiltração de corticoide: máximo 3-4×/ano (degeneração cartilagem)'],
            perola: 'Artrose de joelho: caminhada regular e fortalecimento de quadríceps são mais eficazes que AINEs a longo prazo.',
            especialidade: 'Reumatologia/Ortopedia'
          },
          {
            id: 'fibromialgia', nome: 'Fibromialgia', cid: 'M79.7',
            descricao: 'Síndrome de dor musculoesquelética difusa crônica com amplificação central da dor. Sem alterações estruturais.',
            apresentacao: 'Dor difusa ≥3 meses + fadiga + sono não reparador + cefaleia + síndrome do intestino irritável + dificuldade de concentração ("fibrofog"). Dor em regiões difusas.',
            criterios: ['ACR 2010: Índice de dor difusa (WPI) ≥7 + escala de gravidade ≥5, OU WPI 3-6 + gravidade ≥9, por ≥3 meses, sem outra explicação'],
            exames: ['Diagnóstico clínico (excluir: hemograma, VHS, PCR, TSH, CK — devem ser normais)', 'Sem exame confirmatório específico'],
            tratamento: 'Abordagem multidisciplinar: exercício aeróbico (tratamento mais eficaz), psicoterapia (TCC), higiene do sono. Farmacológico: duloxetina, pregabalina, amitriptilina. Evitar opioides e corticoides.',
            diferenciais: ['Hipotireoidismo', 'Polimialgia reumática', 'AR inicial', 'Síndrome de Sjögren', 'Doença de Lyme', 'Depressão'],
            alertas: ['Fibromialgia + depressão/ansiedade: muito frequente — tratar conjuntamente', 'Opioide aumenta sensibilização central — contraindicado na fibromialgia', 'Corticoide não tem efeito'],
            perola: 'Fibromialgia é uma "síndrome de amplificação da dor" — o sinal da dor é amplificado no SNC, não há dano periférico tecidual.',
            especialidade: 'Reumatologia'
          },
          {
            id: 'espondilite', nome: 'Espondilite Anquilosante', cid: 'M45',
            descricao: 'Espondiloartropatia seronegativa com inflamação das articulações sacroilíacas e coluna. HLA-B27 positivo em 90%.',
            apresentacao: 'Lombalgia inflamatória em jovem (<45 anos): início insidioso, piora em repouso, melhora com exercício, rigidez matinal >1h, melhora com AINEs.',
            criterios: ['Critérios de Nova York modificados: sacroileíte na imagem + ≥1 clínico. ASAS: sacroileíte + ≥1 espondiloartrite OU HLA-B27 + ≥2 espondiloartrite'],
            exames: ['HLA-B27', 'PCR + VHS', 'RX coluna lombar e pelve (sacroileíte, coluna de bambu)', 'RNM sacroilíacas (precoce, edema ósseo)', 'US tendões (entesite — calcanhar, joelho)'],
            tratamento: 'AINE como 1ª linha (contínuo). Fisioterapia essencial. Anti-TNF ou IL-17 (secuquinumabe) se refratário a AINEs. Cirurgia em casos de anquilose grave.',
            diferenciais: ['Lombalgia mecânica', 'Espondilose', 'Hérnia de disco', 'Artropatia psoriásica axial'],
            alertas: ['Uveíte anterior aguda (olho vermelho unilateral doloroso) em HLA-B27+: complicação extraarticular mais comum', 'Fraturas vertebrais em coluna anquilosada: alta energia não necessária', 'Coluna de bambu: fusão completa = doença avançada'],
            perola: 'Lombalgia inflamatória vs. mecânica: inflamatória piora com repouso e melhora com atividade física. Mecânica é o inverso.',
            especialidade: 'Reumatologia'
          },
          {
            id: 'artrite-reativa', nome: 'Artrite Reativa (Síndrome de Reiter)', cid: 'M02',
            descricao: 'Artrite estéril desencadeada por infecção genitourinária (Chlamydia) ou gastrointestinal (Salmonella, Shigella, Campylobacter). HLA-B27 em 60-80%.',
            apresentacao: 'Tríade clássica (incompleta em 30%): artrite assimétrica de MMII + uretrite/cervicite + conjuntivite. Instalação 1-4 semanas após infecção. Oligoartrite assimétrica de grandes articulações.',
            criterios: ['Artrite periférica assimétrica + infecção prévia + ausência de outra causa. Não há critério formal — diagnóstico clínico'],
            exames: ['HLA-B27', 'PCR/SWAB para Chlamydia trachomatis', 'Coprocultura (se diarreia)', 'VHS + PCR elevados', 'Líquido sinovial: inflamatório (2000-50.000 células, predomínio neutrófilos)', 'Fator reumatoide negativo (soronegativa)'],
            tratamento: 'Artrite: AINEs (1ª linha). Infecção ativa: ATB (azitromicina ou doxiciclina para Chlamydia). Corticoide intraarticular. Refratário: sulfassalazina. Anti-TNF se resistente.',
            diferenciais: ['Artrite séptica', 'Artrite gonocócica', 'AR inicial', 'Gota (cristais no líquido)', 'Espondilite anquilosante'],
            alertas: ['Uretrite + conjuntivite + artrite = síndrome de Reiter (tríade clássica, raramente completa)', 'Lesões mucocutâneas: queratodermia blenorrágica (palmas/plantas) + balanite circinada', 'Maioria resolve em 6-12 meses; ~20% evolui para doença crônica'],
            perola: 'Síndrome de Reiter: "não posso ver, não posso urinar, não posso caminhar" — artrite + conjuntivite + uretrite após DST ou gastroenterite.',
            especialidade: 'Reumatologia'
          },
          {
            id: 'dermatomiosite', nome: 'Dermatomiosite / Polimiosite', cid: 'M33',
            descricao: 'Miopatia inflamatória autoimune. Dermatomiosite: comprometimento cutâneo + muscular. Polimiosite: apenas muscular. Paraneoplásica em 15-25% dos adultos.',
            apresentacao: 'Fraqueza muscular proximal simétrica (sobe escada, levanta de cadeira, penteia cabelo). Dermatomiosite: eritema heliotrópico (pálpebras violáceas), pápulas de Gottron (articulações IFP/MCF), sinal do V e do xale, mãos de mecânico.',
            criterios: ['Bohan & Peter: fraqueza proximal + enzimas musculares elevadas + EMG miopático + biópsia muscular + lesões cutâneas (DM)'],
            exames: ['CK (elevada 10-50×), aldolase, LDH', 'Autoanticorpos: anti-Jo1 (síndrome antissintetase), anti-Mi2 (DM específico)', 'EMG (miopatia)', 'Biópsia muscular', 'PFP (pneumonite intersticial)', 'Rastreio de neoplasia (CT tórax/abdome/pelve)'],
            tratamento: 'Prednisona 1mg/kg/dia. Poupa muscular: MTX ou azatioprina. IVIG para casos graves. Busca ativa de tumor paraneoplásico.',
            diferenciais: ['Polimialgia reumática (sem CK elevada, sem fraqueza real)', 'Distrofia muscular', 'Miosite por drogas (estatinas)', 'Hipotireoidismo'],
            alertas: ['Anti-Jo1: síndrome antissintetase — artrite + DIP + fenômeno de Raynaud + mãos de mecânico + pior prognóstico', 'Rastreio obrigatório de neoplasia na DM do adulto (ovário, mama, pulmão, gástrico)', 'Calcinose: deposição de cálcio nos músculos — mais comum na DM juvenil'],
            perola: 'Heliotropo + Gottron + fraqueza proximal = dermatomiosite até prova em contrário. Solicitar anti-Jo1 e rastreio de neoplasia em todo adulto.',
            especialidade: 'Reumatologia'
          },
          {
            id: 'polimialgia-reumatica', nome: 'Polimialgia Reumática (PMR)', cid: 'M35.3',
            descricao: 'Síndrome inflamatória sistêmica de idosos (>50 anos) com dor e rigidez em cintura escapular e pélvica. Associada a arterite de células gigantes (ACG) em 15-30%.',
            apresentacao: 'Dor bilateral e rigidez matinal >45min nas cinturas (ombros, pescoço, quadril). Início subagudo. Sem fraqueza muscular real (diferente da miosite). Sintomas sistêmicos: febre, astenia, perda de peso.',
            criterios: ['≥50 anos + dor bilateral de cintura ≥4 semanas + VHS ≥40 mm/h + resposta dramática ao corticoide (≤7,5mg de prednisona em 3 dias). Excluir: AR, miosite, neoplasia, infecção'],
            exames: ['VHS (muito elevada, >40-100 mm/h)', 'PCR (elevada)', 'CK normal (diferencia de miosite)', 'Hemograma (anemia de doença crônica)', 'TSH (hipotireoidismo similar)', 'FR e anti-CCP negativos', 'PET-CT (gold standard para vasculite subclínica)'],
            tratamento: 'Prednisona 15mg/dia → resposta dramática em 24-72h (diagnóstico + tratamento). Manter por 12-18 meses com desmame lento. Metotrexato como poupador de corticoide. Suspeita de ACG (cefaleia + claudicação de mandíbula): pulso de metilprednisolona + biópsia urgente de artéria temporal.',
            diferenciais: ['Artrite Reumatoide (FR+, pequenas articulações)', 'Miosite (CK elevada, fraqueza real)', 'Hipotireoidismo (TSH)', 'Neoplasia (investigar se sem resposta ao corticoide)', 'Osteoartrite de ombro/quadril'],
            alertas: ['Arterite de células gigantes: complicação temida — cegueira irreversível por oclusão da artéria oftálmica. Cefaleia temporal + amaurose fugaz = emergência', 'Resposta ao corticoide é tão boa que a falta de resposta questiona o diagnóstico', 'Recidiva frequente ao desmame — não apressar a retirada do corticoide'],
            perola: 'PMR + cefaleia temporal + claudicação de mandíbula + VSG >100 = ACG até prova. Biópsia de artéria temporal urgente + pulso de metilprednisolona para preservar a visão.',
            especialidade: 'Reumatologia/Geriatria'
          },
          {
            id: 'sjogren', nome: 'Síndrome de Sjögren', cid: 'M35.0',
            descricao: 'Doença autoimune sistêmica com infiltração linfocitária das glândulas exócrinas (glândulas salivares e lacrimais). Primária ou secundária (AR, LES, esclerodermia).',
            apresentacao: 'Xerostomia (boca seca) + xeroftalmia (olhos secos, "areia nos olhos") = sicca. Manifestações extraglandulares: artralgia, fadiga, neuropatia periférica, vasculite, nefrite intersticial, linfoma de MALT (risco aumentado 15-40×).',
            criterios: ['ACR/EULAR 2016: anticorpos anti-SSA/Ro + biópsia de glândula salivar menor (sialoadenite focal) + testes de olho seco (Schirmer, Rosa Bengal) + sintomas sicca'],
            exames: ['Anti-SSA/Ro (sensibilidade 60-70%) + anti-SSB/La (50%)', 'ANA (90%)', 'FR (70%)', 'Biópsia de glândula salivar menor labial (padrão ouro histológico)', 'Teste de Schirmer (<5mm/5min = xeroftalmia)', 'Eletroforese proteínas (hipergamaglobulinemia)', 'Creatinina (nefrite intersticial)'],
            tratamento: 'Sintomático sicca: lágrimas artificiais, higiene oral rigorosa, pilocarpina (estimula secreção). Sistêmico: hidroxicloroquina. Grave (vasculite, neurite): corticoide ± imunossupressor. Vigilância para linfoma (US glândulas + PET se suspeita).',
            diferenciais: ['AR (erosiva, FR+, artrite sinovial)', 'LES (fotossensibilidade, nefrite, anti-dsDNA)', 'Sarcoidose (parotidite granulomatosa)', 'Síndrome sicca medicamentosa (anticolinérgicos)'],
            alertas: ['Risco de linfoma 15-40× maior — MALT da parótida. Parotidite persistente + linfonodomegalia: investigar', 'Sjögren pode preceder outras CTDs por anos', 'Anti-SSA/Ro na gestante: risco de bloqueio cardíaco neonatal — ecocardiograma fetal'],
            perola: 'Sjögren + artralgias + FR+ sem artrite erosiva: muitas vezes indiferenciado ou sobreposição. Anti-SSA/Ro é o marcador mais sensível — solicitar em toda mulher com sicca.',
            especialidade: 'Reumatologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 11. HEMATOLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Hematologia',
    icone: '🩸',
    sintomas: [
      {
        sintoma: 'Anemia',
        doencas: [
          {
            id: 'anemia-ferro', nome: 'Anemia Ferropriva', cid: 'D50',
            descricao: 'Anemia microcítica hipocrômica por deficiência de ferro. Causa mais comum de anemia no mundo.',
            apresentacao: 'Palidez, fadiga, dispneia aos esforços, palpitações, cefaleia. Queilite angular, glossite, coiloníquia (unhas côncavas), Síndrome de Plummer-Vinson (disfagia + anemia).',
            criterios: ['Hemoglobina baixa + VCM baixo (<80fL) + HCM baixo + ferritina baixa (<12ng/mL) + ferro sérico baixo + TIBC aumentada'],
            exames: ['Hemograma completo', 'Reticulócitos', 'Ferritina (depósitos)', 'Ferro sérico + TIBC (saturação <15%)', 'Pesquisa de sangue oculto nas fezes', 'EDA/Colonoscopia (adulto >40 anos: excluir perda oculta)'],
            tratamento: 'Sulfato ferroso 300mg 8/8h VO (1-2h antes das refeições, com vitamina C). Repor por 3-6 meses após normalização da Hb. Tratar causa base.',
            diferenciais: ['Anemia de doença crônica (ferritina normal/alta)', 'Talassemia menor (eletroforese de Hb)', 'Anemia sideroblástica (ferro elevado, TIBC baixa)'],
            alertas: ['Ferritina <12: deficiência. 12-30: redução. >100 com saturação >20%: exclui ferropriva', 'Sempre investigar causa (principalmente sangramento oculto em adultos)', 'Ferro IV: indicado se intolerância VO, má absorção (DII, gastrectomia), urgência'],
            perola: 'Reticulocitose (aumento de reticulócitos) em 7-10 dias após início do ferro = indicador de resposta ao tratamento.',
            especialidade: 'Hematologia/Clínica Médica'
          },
          {
            id: 'anemia-b12', nome: 'Anemia Megaloblástica (B12 e Folato)', cid: 'D51',
            descricao: 'Anemia macrocítica por deficiência de vitamina B12 ou folato. B12: gastrite atrófica, anemia perniciosa, vegetarianos.',
            apresentacao: 'Fadiga + palidez + glossite (língua lisa, vermelha). Deficiência de B12: manifestações neurológicas (parestesia, ataxia, demência, neuropatia periférica, SACD).',
            criterios: ['Hemograma: macrocitose (VCM >100fL) + neutrófilos hipersegmentados (≥5 lóbulos) + pancitopenia. B12 sérica ou folato baixos'],
            exames: ['Hemograma', 'B12 sérica + Folato sérico/eritrocitário', 'Reticulócitos', 'Anti-FI (anemia perniciosa)', 'Endoscopia (gastrite atrófica)', 'Ácido metilmalônico e homocisteína (confirmatórios de B12)'],
            tratamento: 'B12: cianocobalamina 1000 µg IM/dia × 7 dias → semana × 4 → mensal para sempre (se anemia perniciosa ou gastrectomia). Folato: ácido fólico 5mg/dia VO × 4 meses.',
            diferenciais: ['Hipotireoidismo (macrocitose sem anemia)', 'Anemia hemolítica (VCM pode aumentar)', 'Hepatopatia', 'Álcool (macrocitose)'],
            alertas: ['NÃO repor folato sem investigar B12 — pode mascarar déficit neurológico de B12', 'SACD (subacute combined degeneration): degeneração das colunas posterior e lateral — dano permanente se não tratado precocemente', 'Pré-natal: folato 400µg/dia desde antes da concepção previne defeitos do tubo neural'],
            perola: 'Neutrófilos hipersegmentados (≥5 lóbulos) são o achado mais precoce da deficiência de B12 no hemograma.',
            especialidade: 'Hematologia'
          },
          {
            id: 'anemia-hemo', nome: 'Anemia Hemolítica', cid: 'D58',
            descricao: 'Destruição acelerada de hemácias. Intracorpuscular (hereditária: esferocitose, falciforme, G6PD) ou extracorpuscular (autoimune, mecânica).',
            apresentacao: 'Anemia + icterícia indireta + esplenomegalia + colúria. Crise hemolítica: anemia súbita grave + icterícia intensa. Urina escura.',
            criterios: ['Anemia + reticulocitose + LDH elevada + bilirrubina indireta elevada + haptoglobina baixa (<25 mg/dL)'],
            exames: ['Hemograma + reticulócitos', 'LDH + bilirrubina indireta + haptoglobina', 'Esfregaço periférico (esferócitos, esquizócitos, eliptócitos)', 'Coombs direto (AHAI)', 'Dosagem de G6PD', 'Eletroforese de Hb'],
            tratamento: 'AHAI por quente (IgG): prednisona 1mg/kg. Refratário: rituximabe ou esplenectomia. AHAI por frio (IgM): evitar exposição ao frio + rituximabe. G6PD: evitar oxidantes (sulfas, primaquina).',
            diferenciais: ['Anemia por sangramento (reticulócitos compensatórios)', 'Hepatite viral (icterícia indireta)', 'Síndrome de Gilbert (hiperbilirrubinemia indireta benigna)'],
            alertas: ['Coombs direto positivo = AHAI (autoanticorpo ligado às hemácias)', 'Esquizócitos = anemia hemolítica microangiopática: CIVD, TTP, SHU, válvula mecânica', 'G6PD: deficiência mais comum (400 millões afetados). Crises por infecção, fármacos oxidantes'],
            perola: 'Haptoglobina <25 mg/dL + LDH alta + bilirrubina indireta alta = hemólise. Haptoglobina une Hb livre — consumida na hemólise intravascular.',
            especialidade: 'Hematologia'
          },
          {
            id: 'policitemia-vera', nome: 'Policitemia Vera', cid: 'D45',
            descricao: 'Neoplasia mieloproliferativa com proliferação clonal da linhagem eritroide. Mutação JAK2 V617F em >95% dos casos. Risco trombótico elevado.',
            apresentacao: 'Prurido aquagênico (após banho quente) patognomônico. Eritromelalgia (dor ardente em extremidades). Plétora facial. Esplenomegalia. Cefaleia, HAS, trombose.',
            criterios: ['Hb >16,5g/dL (H) ou >16g/dL (F) OU massa eritrocitária >125% do esperado', 'MO: hipercelularidade com pleomorfismo megacariocítico', 'JAK2 V617F ou mutação éxon 12'],
            exames: ['Hemograma: eritrocitose + leucocitose + trombocitose', 'Mutação JAK2 V617F (PCR)', 'EPO sérica: baixa (<10 mU/mL)', 'Biópsia de medula óssea', 'LDH, ácido úrico'],
            tratamento: 'Flebotomia (meta Ht<45%). AAS 100mg. Alto risco (>60 anos, trombose prévia): hidroxiureia. Prurido: anti-histamínicos, IFN-alfa. JAK2 inibidor (ruxolitinibe) casos refratários.',
            diferenciais: ['Eritrocitose secundária (hipóxia: DPOC, apneia, altitude — EPO elevada)', 'Trombocitemia essencial (apenas plaquetas elevadas)', 'Mielofibrose (fibrose em MO, dacriócitos)'],
            alertas: ['Prurido aquagênico é quase patognomônico de PV', 'EPO baixa + eritrocitose = neoplasia mieloproliferativa (não eritrocitose secundária)', 'Eritromelalgia responde AAS (plaquetas hiperagregáveis)'],
            perola: 'JAK2 V617F positivo em eritrocitose + EPO baixa = PV até prova em contrário. Trombose em sítios incomuns (veia esplênica, hepática) é apresentação clássica.',
            especialidade: 'Hematologia'
          },
        ]
      },
      {
        sintoma: 'Hemoglobinopatias e Malignidades',
        doencas: [
          {
            id: 'falciforme', nome: 'Doença Falciforme — Crise Álgica', cid: 'D57',
            descricao: 'Hemoglobinopatia por HbS. Crise vaso-oclusiva é a manifestação mais comum. Crises álgicas, infecções graves, AVC, priapismo, síndrome torácica aguda.',
            apresentacao: 'Dor intensa (ossos longos, coluna, articulações), febre, palidez. Síndrome torácica aguda (STA): dor torácica + febre + hipoxemia + infiltrado = EMERGÊNCIA.',
            criterios: ['Eletroforese de hemoglobina (HbSS, HbSC, HbS/beta talassemia)'],
            exames: ['Hemograma (anemia hemolítica crônica Hb 6-9)', 'LDH + bilirrubina indireta + reticulócitos (hemólise)', 'Hemocultura (febre)', 'RX tórax (STA)', 'Creatinina + urina (nefropatia)'],
            tratamento: 'Crise álgica: dipirona + cetorolaco + morfina (titular titulação). Hidratação IV. STA: O2 + ATB + transfusão de hemácias. Hidroxiureia: reduz crises em 50% (mecanismo: aumenta HbF). Transfusão crônica: AVC ou STA recorrente.',
            diferenciais: ['Osteomielite (febre + dor localizada)', 'Artrite séptica', 'Necrose avascular (falta de fluxo crônica)', 'Infarto pulmonar (STA vs. TEP)'],
            alertas: ['STA: emergência — mortalidade 15% por episódio. Tratar como pneumonia + transfusão + O2', 'Priapismo >4h: urgência urológica (aspiração + fenilefrina)', 'Febre em falciforme: hemocultura + cefalosporina IV (asplenia funcional)'],
            perola: 'Asplenia funcional: falciforme destroi o baço progressivamente. Vacinar: pneumococo, meningococo, Hib + penicilina profilática até os 5 anos.',
            especialidade: 'Hematologia'
          },
          {
            id: 'mieloma', nome: 'Mieloma Múltiplo', cid: 'C90',
            descricao: 'Proliferação maligna de plasmócitos. Produção de imunoglobulina monoclonal (proteína M). CRAB: hipercalcemia, insuficiência Renal, Anemia, Bone lesions.',
            apresentacao: 'Dor óssea (coluna) + fratura patológica + anemia + hipercalcemia + IRA. Infecções recorrentes. Síndrome da hiperviscosidade (cefaleia, visão turva).',
            criterios: ['Critérios IMWG: ≥60% plasmócitos OU proteína M ≥3g/dL ou >10% na eletroforese OU lesão óssea + ≥1 CRAB'],
            exames: ['Eletroforese de proteínas (pico monoclonal)', 'Imunofixação (IgG, IgA, cadeias leves)', 'Dosagem de imunoglobulinas', 'Proteinúria de Bence Jones (urina)', 'RX ósseo (lesões líticas)', 'Mielograma + biópsia óssea', 'β2 microglobulina (prognóstico)'],
            tratamento: 'Candidato a transplante: bortezomibe + lenalidomida + dexametasona (VRd) → transplante autólogo. Não transplante: VRd ou daratumumabe-Vd. Suporte: bisfosfonato, analgesia, tratamento da hipercalcemia.',
            diferenciais: ['Gamopatia monoclonal de significado indeterminado (MGUS)', 'Metástase óssea', 'Linfoma', 'PMR (VHS alto)', 'Amiloidose'],
            alertas: ['Compressão de medula espinal: urgência neurocirúrgica (radioterapia + dexametasona + cirurgia)', 'IRA por mieloma: hidratação + quimioterapia imediata + diálise se grave', 'Bisfosfonato: osteonecraria de mandíbula — higiene oral rigorosa'],
            perola: 'CRAB: hiperCalcemia + insuficiência Renal + Anemia + Bone disease (lesões líticas/fraturas). Lembrar + infecções recorrentes (imunossupressão).',
            especialidade: 'Hematologia/Oncologia'
          },
        ]
      },
      {
        sintoma: 'Urgências Hematológicas',
        doencas: [
          {
            id: 'civd', nome: 'Coagulação Intravascular Disseminada (CIVD)', cid: 'D65',
            descricao: 'Ativação sistêmica da coagulação com consumo de fatores e plaquetas. Trombose e sangramento simultâneos.',
            apresentacao: 'Sangramento em múltiplos sítios (venopunção, mucosas, feridas), petéquias, equimoses extensas, trombose de microvasos (necrose de pele, digital). Precipitada por sepse, trauma, neoplasia, complicações obstétricas.',
            criterios: ['Score ISTH: plaquetas + TP + fibrinogênio + D-dímero. ≥5 pontos = CIVD manifesta'],
            exames: ['Hemograma (plaquetopenia)', 'TP + TTPA prolongados', 'Fibrinogênio baixo (<150mg/dL)', 'D-dímero muito alto', 'Esfregaço (esquizócitos)', 'TT (tempo de trombina)'],
            tratamento: 'Tratar causa base (fundamental). Suporte: plaquetas se <50.000 + sangramento; PFC se TP/TTPA muito alargado + sangramento; crioprecipitado se fibrinogênio <150mg/dL. Heparina em CIVD crônica/trombótica.',
            diferenciais: ['TTP (trombocitopenia + anemia hemolítica microangiopática + sem consumo de fatores)', 'SHU', 'PTI (apenas trombocitopenia)', 'Hepatopatia grave'],
            alertas: ['CIVD em DPP: libera tromboplastina do líquido amniótico', 'PTT: plasma fresco urgente (deficiência de ADAMTS13)', 'Heparina na CIVD: controverso — apenas em trombose predominante (CIVD crônica)'],
            perola: 'Diferença CIVD vs. hepatopatia: ambas consomem fatores, mas CIVD tem D-dímero muito alto + esquizócitos + fibrinogênio caindo.',
            especialidade: 'Hematologia/UTI'
          },
          {
            id: 'pti', nome: 'Púrpura Trombocitopênica Imune (PTI)', cid: 'D69.3',
            descricao: 'Trombocitopenia autoimune por anticorpos IgG anti-plaquetários. Primária ou secundária (LES, HIV, H. pylori).',
            apresentacao: 'Petéquias, equimoses, sangramento de mucosas. Plaquetas <100.000. Sem esplenomegalia ou outras citopenias.',
            criterios: ['Diagnóstico de exclusão: plaquetopenia isolada sem causa identificável'],
            exames: ['Hemograma + esfregaço (megaplaquetas, plaquetas grandes)', 'Coagulograma normal (TP, TTPA, fibrinogênio)', 'FAN (LES?)', 'Sorologia HIV + HCV', 'Anti-H. pylori (Uréase ou sorologia)', 'Mielograma (se refratário ou diagnóstico incerto)'],
            tratamento: 'Assintomático + plaquetas >30.000: observação. Sintomático ou <30.000: prednisona 1-2mg/kg/dia. Recorrente: rituximabe ou esplenectomia. Emergência: IVIG + metilprednisolona + transfusão de plaquetas.',
            diferenciais: ['PTT (fragmentação + febre + neurológico)', 'CIVD (sangramento + TP/TTPA alargados)', 'Hiperesplenismo', 'Trombocitopenia induzida por heparina (TIH)'],
            alertas: ['Plaquetas <10.000 ou sangramento ativo: hospitalizar urgente', 'IVIG: início de ação em 1-2 dias (mais rápido que prednisona)', 'Esplenectomia: curar em 60-70% + vacinar contra pneumococo, meningococo e Hib antes'],
            perola: 'H. pylori: erradicação resulta em remissão de PTI em 50% dos casos — testar e tratar sempre.',
            especialidade: 'Hematologia'
          },
          {
            id: 'neutropenia-febril', nome: 'Neutropenia Febril', cid: 'D70',
            descricao: 'Neutrófilos <500 (ou <1000 e caindo) + febre ≥38,3°C em paciente em quimioterapia. Emergência oncohematológica.',
            apresentacao: 'Febre em paciente em quimioterapia ou com doença hematológica. Pode não ter foco infeccioso óbvio. Risco de sepse grave.',
            criterios: ['Neutrófilos <500/mm³ (ou <1000 e decrescentes) + Temperatura >38,3°C única OU >38°C por >1h'],
            exames: ['Hemograma urgente', 'Hemocultura ×2 (periférico + cateter se CVC)', 'PCR + Procalcitonina', 'Urocultura + EAS', 'RX tórax', 'Escore MASCC (risco baixo vs. alto)'],
            tratamento: 'ATB de largo espectro IMEDIATO (<1h): cefepima 2g 8/8h IV OU piperacilina-tazobactam IV. Adicionar vancomicina se: infecção de cateter, mucosite grave, MRSA provável. Antifúngico (caspofungina) se febre >4-7 dias.',
            diferenciais: ['Infecção não bacteriana (viral, fúngica)', 'Febre medicamentosa', 'Tumor fever'],
            alertas: ['ATB dentro de 60min de chegada — cada hora de atraso aumenta mortalidade', 'MASCC ≥21: baixo risco, pode usar ATB VO ambulatorial (ciprofloxacino + amoxicilina-clavulanato)', 'G-CSF (filgrastim): encurta duração da neutropenia mas não substitui ATB'],
            perola: 'MASCC escore: pontos por: sem hipotensão (5), sem DPOC (4), tumor sólido ou sem infecção fúngica (4), ambulatorial (3), sem desidratação (3), <60 anos (2). Total máx=26. ≥21=baixo risco.',
            especialidade: 'Hematologia/Oncologia'
          },
          {
            id: 'trombocitopenia-imune', nome: 'Trombocitopenia Imune Primária (PTI)', cid: 'D69.3',
            descricao: 'Doença autoimune com destruição de plaquetas por autoanticorpos anti-GPIIb/IIIa. Antes chamada "púrpura trombocitopênica idiopática". Diagnóstico de exclusão.',
            apresentacao: 'Petéquias, equimoses espontâneas, sangramento gengival, epistaxe, menorragia. Plaquetopenia isolada sem anemia hemolítica. Geralmente sem esplenomegalia. Criança: forma aguda autolimitada pós-viral. Adulto: forma crônica.',
            criterios: ['Plaquetas <100.000/mm³ + clínica de sangramento mucocutâneo + exclusão de outras causas (CIVD, TTP, hiperesplenismo, medicamentos, lúpus, HIV, hepatite C)'],
            exames: ['Hemograma (plaquetopenia isolada)', 'Esfregaço periférico (plaquetas grandes, sem esquizócitos)', 'Anticoagulante lúpico, ANA, anti-dsDNA (excluir LES)', 'Sorologia HIV + hepatite C', 'TSH (tireoidite autoimune)', 'H. pylori (tratar se positivo)'],
            tratamento: 'Plaquetas>30.000 assintomático: observação. Sintomático ou <30.000: prednisona 1mg/kg/dia + IVIG (resposta rápida, temporária). 2ª linha: rituximabe, romiplostim (TPO-agonista), eltrombopague, esplenectomia.',
            diferenciais: ['TTP (anemia hemolítica + esquizócitos + neurológico + renal)', 'CIVD (coagulopatia + esquizócitos + fibrinogênio baixo)', 'Plaquetopenia induzida por heparina (HIT)', 'Plaquetopenia por HIV, hepatite C, LES'],
            alertas: ['Plaquetas <10.000 ou sangramento grave: IVIG 1g/kg + metilprednisolona IV (emergência)', 'Esplenectomia: vacinação pré-operatória obrigatória (pneumococo, meningococo, Hib)', 'H. pylori: erradicação pode elevar plaquetas na PTI (mecanismo imunológico)'],
            perola: 'PTI vs. TTP: PTI = apenas plaquetas baixas, sem hemólise, sem neurológico. TTP = ADAMTS13 baixo + anemia hemolítica microangiopática + neurológico = urgência (plasmaférese).',
            especialidade: 'Hematologia'
          },
          {
            id: 'leucemia-aguda', nome: 'Leucemia Aguda (LMA / LLA)', cid: 'C91.0',
            descricao: 'Proliferação clonal de blastos mieloides (LMA) ou linfoides (LLA) na medula óssea. LLA: mais comum em crianças. LMA: adultos. Emergência oncohematológica.',
            apresentacao: 'Insuficiência medular: anemia (fadiga, palidez) + neutropenia (infecções graves) + plaquetopenia (sangramento). Infiltração extramedular: linfonodomegalia, hepatoesplenomegalia, dor óssea (LLA). Leucostase (LMA com leucócitos muito altos): hipoxemia + confusão.',
            criterios: ['≥20% de blastos no mielograma (aspirado de MO). Imunofenotipagem define LMA vs. LLA. Citogenética e biologia molecular (prognóstico e alvos)'],
            exames: ['Hemograma (pancitopenia + blastos no periférico)', 'Mielograma + biópsia de MO (blastos ≥20%)', 'Imunofenotipagem (CD markers)', 'Citogenética (t(8;21), inv16, t(15;17) para LMA; Ph+ para LLA)', 'LDH + ácido úrico (lise tumoral)', 'RX tórax (massa mediastinal em LLA-T)', 'PL (acometimento do SNC na LLA)'],
            tratamento: 'LMA: indução com citarabina + daunorrubicina ("7+3"). LMA M3 (Promielocítica): ATRA + arsênico (cura >90%). LLA: quimio multiagente em fases (indução, consolidação, manutenção). Ph+ LLA: imatinibe/dasatinibe. Transplante de MO alogênico em alto risco.',
            diferenciais: ['Leucemias crônicas (blastos <20%, curso insidioso)', 'Anemia aplástica (pancitopenia sem blastos)', 'Reação leucemoide (infecção grave com desvio esquerdo)'],
            alertas: ['Síndrome de lise tumoral: hiperuricemia + hipercalemia + hiperfosfatemia + IRA. Profilaxia: alopurinol + hidratação agressiva antes da quimio', 'LMA M3 (Promielocítica): CIVD frequente ao diagnóstico — doença mais urgente. ATRA salva vidas', 'Leucostase (leucócitos >100.000): leucaférese de emergência'],
            perola: 'LMA M3 = emergência. ATRA + arsênico antes mesmo de confirmar se houver suspeita. CIVD + blastos com corpos de Auer = M3 = ATRA imediato.',
            especialidade: 'Hematologia/Oncologia'
          },
          {
            id: 'civd', nome: 'Coagulação Intravascular Disseminada (CIVD)', cid: 'D65',
            descricao: 'Ativação sistêmica da coagulação levando a formação de microtrombos e consumo de fatores com sangramento. Sempre secundária (sepse, trauma, neoplasia, LMA M3, obstetrícia, hemólise).',
            apresentacao: 'Sangramento generalizado (petéquias, equimoses, hemorragia em múltiplos sítios de punção) + trombose microvascular (isquemia de extremidades, lesão de órgãos). Clinicamente: sangramento + insuficiência de múltiplos órgãos.',
            criterios: ['Escore ISTH: plaquetas + TP + fibrinogênio + D-dímero. ≥5 pontos = CIVD manifesta'],
            exames: ['Hemograma (plaquetopenia)', 'Coagulograma: TP/INR alargado + TTPA alargado', 'Fibrinogênio: baixo (<150mg/dL = grave)', 'D-dímero: muito elevado', 'Esfregaço: esquizócitos', 'LDH + bilirrubina (microangiopatia)'],
            tratamento: 'Tratar a CAUSA DESENCADEANTE (fundamental). Suporte: PFC (fatores de coagulação) se sangramento + TP/INR>1,5. Crioprecipitado se fibrinogênio <150. Plaquetas se <50.000 e sangramento ativo. Heparina: apenas CIVD trombótica sem sangramento (neoplasia, trombose venosa).',
            diferenciais: ['TTP (ADAMTS13 baixo — sem TP/TTPA alargados)', 'SHU (Shiga-toxina, crianças, renal)', 'PTI (sem coagulopatia)', 'Hepatopatia grave (sem D-dímero muito elevado, sem esquizócitos)'],
            alertas: ['Fibrinogênio baixo + TP alargado + D-dímero elevado = CIVD manifesta — tratar causa imediatamente', 'LMA M3 (promielocítica): CIVD ao diagnóstico — ATRA antes da quimio (ATRA reduz CIVD)', 'PFC antes de procedimentos invasivos em CIVD, não profilaticamente'],
            perola: 'Fibrinogênio é o reagente de fase aguda mais consumido na CIVD (reduz cedo). Fibrinogênio baixo em gestante com DPP ou sepse puerperal = CIVD grave.',
            especialidade: 'Hematologia/Medicina de Urgência'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 12. DERMATOLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Dermatologia',
    icone: '🩺',
    sintomas: [
      {
        sintoma: 'Urgências Dermatológicas',
        doencas: [
          {
            id: 'stevens-johnson', nome: 'Síndrome de Stevens-Johnson / NET', cid: 'L51.1',
            descricao: 'Reação medicamentosa grave com necrose epidérmica. SJS: <10% da superfície corporal. NET: >30%. Mortalidade alta.',
            apresentacao: 'Pródromo gripal → exantema doloroso com bolhas e erosões de mucosas (oral, ocular, genital) → descolamento epidérmico em grandes áreas. Sinal de Nikolsky positivo.',
            criterios: ['Clínico: exantema bolhoso + erosões mucosas + uso de medicamento suspeito. Biópsia confirma (necrose epidérmica total)'],
            exames: ['Biópsia cutânea', 'Hemograma + função renal e hepática', 'Hemocultura (infecção secundária)', 'Oftalmologia urgente (erosões corneanas)'],
            tratamento: 'Suspender medicamento causador IMEDIATAMENTE. Transferir para UTI/Centro de queimados. Cuidados de pele como queimado. Suporte nutricional. IVIG 1-3g/kg × 3-5 dias (evidência moderada). Evitar corticoide sistêmico (controverso).',
            diferenciais: ['Eritema multiforme major', 'Síndrome da pele escaldada estafilocócica (SSSS)', 'Pênfigo vulgar', 'Penfigóide bolhoso'],
            alertas: ['Suspender IMEDIATAMENTE o medicamento suspeito — reduz mortalidade', 'Principais agentes: alopurinol, sulfonamidas, anticonvulsivantes (carbamazepina, fenitoína), lamotrigina, AINEs, nevirapina', 'SCORTEN score: prediz mortalidade (≥5 pontos = mortalidade >90%)'],
            perola: 'Sinal de Nikolsky: deslizamento da pele ao pressionar levemente a borda de lesão. Positivo em SSJ, NET, pênfigo — indica fragilidade epidérmica.',
            especialidade: 'Dermatologia/UTI'
          },
          {
            id: 'dress', nome: 'DRESS (Reação Medicamentosa com Eosinofilia e Sintomas Sistêmicos)', cid: 'L27',
            descricao: 'Reação de hipersensibilidade grave a medicamentos com envolvimento sistêmico. Latência 2-8 semanas após início do medicamento.',
            apresentacao: 'Exantema morbiliforme extenso + febre alta + linfadenopatia + eosinofilia + alterações hepáticas. Pode comprometer rim, pulmão, coração.',
            criterios: ['RegiSCAR: exantema + febre + eosinofilia + linfadenopatia + atipicidade linfocítica + envolvimento orgânico ≥1'],
            exames: ['Hemograma (eosinofilia, linfocitose atípica)', 'TGO/TGP + bilirrubinas', 'Creatinina + urina', 'Troponina (cardite)', 'Biópsia cutânea', 'Sorologias HHV-6 (reativação frequente)'],
            tratamento: 'Suspender medicamento causador imediatamente. Corticoide sistêmico (prednisona 1mg/kg/dia) por 4-8 semanas com redução gradual lenta.',
            diferenciais: ['Stevens-Johnson (mucosas + necrose epidérmica)', 'Linfoma (linfadenopatia + febre)', 'Doença de Still (febre + artrite + exantema salmão)', 'Mononucleose infecciosa'],
            alertas: ['Principais agentes: anticonvulsivantes aromáticos (carbamazepina, fenitoína, lamotrigina) + alopurinol + sulfonamidas + dapsona', 'Redução rápida do corticoide = recidiva + reativação orgânica', 'HHV-6: reativação viral característica do DRESS'],
            perola: 'DRESS pode causar insuficiência cardíaca por miocardite (troponina!) — fazer ECG e troponina em todos. Mortalidade 10% em casos graves.',
            especialidade: 'Dermatologia'
          },
          {
            id: 'urticaria', nome: 'Urticária / Angioedema', cid: 'L50',
            descricao: 'Urticária: pápulas/placas eritematosas pruriginosas evanescentes. Angioedema: edema profundo de derme. Anafilaxia se sistêmico.',
            apresentacao: 'Urticária: lesões pruriginosas que somem em <24h (sem deixar marca). Angioedema: edema de lábios, língua, laringe (risco de obstrução) e intestino (dor abdominal). Urticária aguda (<6 semanas) frequentemente alérgica.',
            criterios: ['Clínico. Urticária crônica (>6 semanas): investigar etiologia (autoimune em 45%)'],
            exames: ['Urticária aguda: IgE específica (alimentos, insetos, medicamentos), teste cutâneo', 'Crônica: ANA, FAN, anti-TPO, hemograma, testes de provocação', 'Angioedema recorrente sem urticária: C4 (HAE — angioedema hereditário) + C1 inibidor'],
            tratamento: 'Anti-histamínico H1 não sedativo (cetirizina, loratadina) — dose dupla se necessário. Urticária crônica refratária: omalizumabe (anti-IgE). Angioedema com risco de obstrução: adrenalina 0,3mg IM + corticoide + anti-H1 IV.',
            diferenciais: ['Eritema multiforme (lesões em alvo, fixas, com centro escuro)', 'Mastocitose', 'Angioedema hereditário (HAE: sem urticária, sem pruido)', 'Vasculite urticariforme'],
            alertas: ['Angioedema laríngeo: emergência — adrenalina IM, preparar via aérea', 'HAE: icatibanto ou concentrado de C1-inibidor para crises. Adrenalina e corticoide têm pouco efeito no HAE', 'IECA causa angioedema (bradicinina) — suspender e nunca usar ARA2 nesses pacientes'],
            perola: 'Angioedema por IECA: sem urticária, sem resposta a anti-histamínico. Suspender IECA — pode levar semanas a meses para resolver.',
            especialidade: 'Dermatologia/Alergologia'
          },
          {
            id: 'melanoma', nome: 'Melanoma Maligno', cid: 'C43',
            descricao: 'Neoplasia maligna dos melanócitos. Alta morbimortalidade quando avançado. Altamente relacionado à exposição solar e nevos atípicos.',
            apresentacao: 'Regra ABCDE: Assimetria + Borda irregular + Cor variegada + Diâmetro >6mm + Evolução (mudança). Nevo novo ou que muda em adulto. Melanoma amelanótico: rosado sem pigmento (confunde).',
            criterios: ['Biópsia excisional com margens (não punch biopsia — necessita espessura de Breslow completa)'],
            exames: ['Dermoscopia (avaliação especializada)', 'Biópsia excisional + histopatologia + espessura de Breslow + índice mitótico', 'Biópsia de linfonodo sentinela (Breslow >0,8mm)', 'TC/PET-CT (metástases)'],
            tratamento: 'Excisão ampla com margens de 0,5-2cm conforme espessura. Imunoterapia (anti-PD1: pembrolizumabe, nivolumabe) no metastático. Terapia-alvo (BRAF + MEK inibidores) se BRAF V600E mutado.',
            diferenciais: ['Nevo melanocítico benigno', 'Carcinoma basocelular pigmentado', 'Lentigo solar', 'Hemangioma trombosado'],
            alertas: ['Autoexame: toda lesão pigmentada com ABCDE alterado = biópsia', 'Rastreamento: dermatologista anualmente para grupos de risco (fototipo I/II, história familiar, nevos múltiplos)', 'Anti-PD1: imunidade hiperativada = toxicidade autoimune (pneumonite, colite, hepatite)'],
            perola: 'Espessura de Breslow é o principal fator prognóstico: <0,8mm (85-95% sobrevida 5 anos) vs. >4mm (<50% sobrevida 5 anos).',
            especialidade: 'Dermatologia/Oncologia'
          },
        ]
      },
      {
        sintoma: 'Infecções Cutâneas',
        doencas: [
          {
            id: 'herpes-zoster', nome: 'Herpes Zoster', cid: 'B02',
            descricao: 'Reativação do vírus varicela-zoster latente nos gânglios dorsais. Frequente em imunossuprimidos e idosos.',
            apresentacao: 'Dor em queimação + hiperestesia em dermátomo → vesículas sobre base eritematosa em faixa unilateral, não cruzando a linha média. Dor precede lesões por 2-3 dias.',
            criterios: ['Clínico (distribuição dermatomérica). PCR para VZV em casos atípicos'],
            exames: ['Diagnóstico clínico. PCR (casos duvidosos)', 'Oftalmologia urgente se herpes zoster oftálmico (V1)', 'Imunossupressão?: HIV, hemograma, glicemia'],
            tratamento: 'Aciclovir 800mg 5×/dia × 7-10 dias OU valaciclovir 1g 8/8h × 7 dias (iniciar em <72h das lesões). Analgesia: gabapentina/pregabalina. Corticoide: pode reduzir neuralgia aguda (controverso).',
            diferenciais: ['Dermatite de contato', 'Impetigo bolhoso', 'Picada de inseto', 'Herpes simples (recidivante, mesmo dermátomo)'],
            alertas: ['Herpes zoster oftálmico (nariz = sinal de Hutchinson): urgência oftalmológica — risco de cegueira', 'Neuralgia pós-herpética: dor por meses após cura. Prevenir com antiviral precoce', 'Vacinação: zoster recombinante (Shingrix) — recomendada para >50 anos, 2 doses'],
            perola: 'Sinal de Hutchinson: vesículas na ponta do nariz = envolvimento do ramo nasociliar (V1) = risco de herpes zoster oftálmico.',
            especialidade: 'Dermatologia'
          },
          {
            id: 'impetigo', nome: 'Impetigo', cid: 'L01',
            descricao: 'Infecção bacteriana superficial da pele. Crostoso (S. aureus e/ou S. pyogenes) ou bolhoso (S. aureus produtor de exotoxina).',
            apresentacao: 'Crostoso: pápulas → vesículas → crostas cor de mel (mel de abelha), muito contagioso. Bolhoso: bolhas tensas com líquido amarelado, sem crostas.',
            criterios: ['Diagnóstico clínico. Cultura do exsudato em casos resistentes ou recorrentes'],
            exames: ['Diagnóstico clínico. Cultura + antibiograma (se falha terapêutica)'],
            tratamento: 'Localizado: mupirocina ou ácido fusídico tópico × 5-7 dias. Extenso ou múltiplos: amoxicilina-clavulanato VO × 7 dias. MRSA: clindamicina ou sulfametoxazol-trimetoprima.',
            diferenciais: ['Eczema impetiginizado', 'Herpes simples', 'Varicela bolhosa', 'Penfigóide'],
            alertas: ['Glomerulonefrite pós-estreptocócica: complicação de impetigo por S. pyogenes — monitorar urina 3-4 semanas após', 'Muito contagioso: isolamento de criança da escola por 48h do início do ATB', 'MRSA: crescente no Brasil — suspeitar em falha do ATB beta-lactâmico'],
            perola: 'Impetigo por estreptococo pode causar glomerulonefrite mas NÃO febre reumática (ao contrário da faringotonsilite estreptocócica).',
            especialidade: 'Dermatologia/Pediatria'
          },
        ]
      },
      {
        sintoma: 'Dermatoses Inflamatórias Crônicas',
        doencas: [
          {
            id: 'psoriase', nome: 'Psoríase', cid: 'L40',
            descricao: 'Doença inflamatória crônica imunomediada com hiperproliferação de queratinócitos. Associada a artrite psoriásica (30%).',
            apresentacao: 'Placas eritêmato-descamativas com escamas prateadas, simétricas, em cotovelo, joelhos, couro cabeludo, umbigo. Sinal de Auspitz (petéquias ao remover escama). Fenômeno de Koebner.',
            criterios: ['Clínico. Biópsia em casos atípicos (papilomatose + paraceratose + microabscessos de Munro)'],
            exames: ['Diagnóstico clínico', 'PASI e DLQI (gravidade e impacto)', 'RX articulações (artrite psoriásica)', 'Anti-CCP, FR (negativos na artrite psoriásica — diferencia de AR)'],
            tratamento: 'Leve (<10% BSA): emolientes + corticoide tópico + análogos de vitamina D (calcipotriol). Moderada-grave: fototerapia (NB-UVB) ou metotrexato ou ciclosporina. Biológicos: anti-TNF (etanercepte, adalimumabe), anti-IL-12/23 (ustequinumabe), anti-IL-17 (secuquinumabe, ixequizumabe).',
            diferenciais: ['Dermatite seborreica', 'Tinea corporis', 'Eczema numular', 'LES cutâneo'],
            alertas: ['Psoríase eritrodérmica: emergência dermatológica — hipotermia + infecção secundária + IC de alto débito', 'Biológicos: rastrear TB e hepatites antes', 'Síndrome metabólica: maior prevalência em psoríase — monitorar'],
            perola: 'Fenômeno de Koebner: lesões de psoríase aparecem em área de trauma (cicatriz, tatuagem). Indica doença ativa.',
            especialidade: 'Dermatologia'
          },
          {
            id: 'dermatite-atopica', nome: 'Dermatite Atópica (Eczema)', cid: 'L20',
            descricao: 'Doença inflamatória crônica pruriginosa da pele. Faz parte da "marcha atópica" com asma e rinite alérgica.',
            apresentacao: 'Lactente: face e superfícies extensoras. Criança: dobras (fossa antecubital, poplítea). Adulto: flexuras, pescoço. Pele seca, eritema, vesículas, crostas, liquenificação crônica. Prurido intenso.',
            criterios: ['Hanifin e Rajka: ≥3 maiores (prurido+morfologia típica+crônica recidivante+história de atopia) + ≥3 menores'],
            exames: ['Diagnóstico clínico', 'IgE total (elevada em 85%)', 'Testes alérgicos (patch test, prick test) se suspeita de fator agravante', 'Cultura de pele (S. aureus)'],
            tratamento: 'Emolientes intensivos (base do tratamento). Corticoide tópico (nas crises). Inibidores de calcineurina tópicos (tacrolimo). Imunossupressores sistêmicos: dupilumabe (anti-IL-4/13) — biológico eficaz e seguro. Antihistamínico sedativo para prurido noturno.',
            diferenciais: ['Psoríase', 'Dermatite de contato', 'Sarna (escabiose)', 'Dermatite seborreica'],
            alertas: ['Superinfecção bacteriana (S. aureus): impetigo sobre eczema — ATB sistêmico', 'Eczema herpético: herpes disseminado sobre eczema = emergência — aciclovir IV', 'Corticoide potente em face/dobras por longo prazo: atrofia cutânea'],
            perola: 'Dupilumabe (anti-IL-4/13): revolucionou tratamento da DA moderada-grave. Sem imunossupressão sistêmica clássica — rastrear TB não é necessário.',
            especialidade: 'Dermatologia'
          },
          {
            id: 'urticaria', nome: 'Urticária e Angioedema', cid: 'L50',
            descricao: 'Urticária: pápulas eritematosas pruriginosas com resolução em <24h em cada lesão. Angioedema: edema de derme profunda (lábios, olhos, laringe). Crônica: >6 semanas.',
            apresentacao: 'Pápulas e placas eritematosas, evanescentes (<24h), pruriginosas, polimorfas. Angioedema associado: edema assimétrico de lábios, pálpebras, língua. Anafilaxia: urticária + broncoespasmo + hipotensão.',
            criterios: ['Diagnóstico clínico. Urticária crônica espontânea (UCE): >6 semanas sem fator desencadeante identificado. Aguda: causa identificável (alérgeno, medicamento, infecção)'],
            exames: ['Aguda: história clínica (suficiente na maioria). Crônica: hemograma, TSH, anti-TPO, parasitológico de fezes, PCR, autoanticorpos (ASST se suspeita autoimune)', 'Teste de pressão, frio, dermografismo (urticária física)'],
            tratamento: 'Anti-histamínico H1 não sedativo (cetirizina, loratadina) — 1ª linha. Dose dupla se refratário. Refratário: omalizumabe (anti-IgE) — eficaz na UCE. Anafilaxia: adrenalina 0,3-0,5mg IM imediato.',
            diferenciais: ['Vasculite urticariforme (lesões >24h + purpúricas + dolorosas — biópsia)', 'Mastocitose sistêmica (dermografismo + síncope)', 'Angioedema hereditário (sem urticária, C1 inibidor baixo)', 'Eritema multiforme (lesões em alvo)'],
            alertas: ['Angioedema de laringe: emergência — adrenalina + anti-H1 + corticoide IV + preparo para intubação', 'Angioedema hereditário: NÃO responde a anti-histamínico e corticoide — tratar com C1 inibidor ou icatibanto', 'IECA: causa angioedema bradicinina-dependente (não histaminérgico) — suspender'],
            perola: 'Angioedema com IECA: mediado por bradicinina (não histamina) — anti-histamínico e corticoide são ineficazes. Suspender IECA e usar icatibanto (anti-bradicinina) ou C1-inibidor.',
            especialidade: 'Dermatologia/Alergia'
          },
          {
            id: 'escabiose', nome: 'Escabiose (Sarna)', cid: 'B86',
            descricao: 'Infestação cutânea pelo ácaro Sarcoptes scabiei. Alta transmissibilidade pelo contato direto. Prurido intenso de causa parasitária.',
            apresentacao: 'Prurido intenso, pior à noite. Lesões em espaços interdigitais, pulsos, axilas, genitália masculina, aréolas. Lesões: pápulas eritematosas, vesículas, escoriações. Túnel acariano: lesão linear fina (patognomônica). Lactentes: palmas, plantas e cabeça (atípico).',
            criterios: ['Clínico: prurido + distribuição típica + contato com pessoa com prurido. Confirmação: dermatoscopia (saco de dorso do ácaro no fim do túnel) ou microscopia de raspado'],
            exames: ['Diagnóstico clínico. Dermatoscopia (visualiza ácaro). Raspado cutâneo com microscopia (ácaro, ovos, fezes)'],
            tratamento: 'Permetrina 5% loção: aplicar no corpo todo (pescoço para baixo) por 8-12h, repetir em 7 dias. Ivermectina 200mcg/kg VO (alternativa ou sarna crostosa). Tratar TODOS os contatos domiciliares + lavar roupas/cama.',
            diferenciais: ['Dermatite atópica', 'Urticária papular (picada de inseto)', 'Foliculite', 'Psoríase', 'Impetigo (por coinfecção)'],
            alertas: ['Sarna norueguesa (crostosa): imunossuprimidos, idosos — muito contagiosa, milhões de ácaros — isolamento de contato', 'Prurido persiste 2-4 semanas após cura (reação à queratina do ácaro morto) — não retreatar imediatamente', 'Não tratar apenas o paciente — família DEVE ser tratada simultaneamente'],
            perola: 'Sarna: prurido pior à noite + membros da família com mesmo sintoma = diagnóstico clínico praticamente confirmado. Contato pele-a-pele de 15-20 minutos é suficiente para transmitir.',
            especialidade: 'Dermatologia/Infectologia'
          },
          {
            id: 'herpes-zoster', nome: 'Herpes Zoster', cid: 'B02',
            descricao: 'Reativação do VZV latente no gânglio dorsal. Frequente em imunossuprimidos e idosos. Neuralgia pós-herpética: principal complicação (dor crônica após cura das lesões).',
            apresentacao: 'Pródromo: dor em queimação, prurido, parestesia em dermátomo. Erupção: vesículas agrupadas em base eritematosa em faixa unilateral, respeitando a linha mediana. Dermátomos torácicos mais comuns. Zoster oftálmico: V1 (risco de ceratite, uveíte, cegueira).',
            criterios: ['Diagnóstico clínico. Confirmação: PCR (swab da lesão) ou DFA (imunofluorescência direta) para VZV'],
            exames: ['Diagnóstico clínico (vesículas dermatoméricas + dor). PCR ou cultura se dúvida', 'Avaliação oftalmológica urgente se V1 (nariz = sinal de Hutchinson = risco ocular)'],
            tratamento: 'Aciclovir 800mg 5×/dia × 7-10 dias (OU valaciclovir 1g 8/8h × 7d) — iniciar em <72h das lesões. Zoster oftálmico: aciclovir IV + oftalmologista. Neuralgia pós-herpética: gabapentina, pregabalina, duloxetina, capsaicina tópica, patch de lidocaína.',
            diferenciais: ['Erisipela (eritema sem vesículas, sem dermátomo)', 'Impetigo (bolhas, gram+)', 'Dermatite de contato (bilateral, exposição)', 'Zoster sine herpete (dor sem lesão — diagnóstico por PCR)'],
            alertas: ['Sinal de Hutchinson: vesículas na ponta do nariz = ramo nasal do V1 → risco de zoster oftálmico. Oftalmologista urgente', 'Disseminação: zoster em >3 dermátomos = imunossupressão grave — investigar HIV', 'Vacina recombinante (Shingrix): 97% eficaz ≥50 anos — 2 doses com 2-6 meses de intervalo'],
            perola: 'Neuralgia pós-herpética: dor neuropática que persiste >3 meses após cura cutânea. Mais comum em idosos e em zoster trigeminal. Tratar precocemente com antivirais reduz a duração.',
            especialidade: 'Dermatologia/Infectologia'
          },
          {
            id: 'melanoma', nome: 'Melanoma Cutâneo', cid: 'C43',
            descricao: 'Neoplasia maligna de melanócitos. Alta mortalidade quando avançado. Fatores de risco: exposição UV, nevo displásico, história familiar, pele clara. Critérios ABCDE para rastreamento.',
            apresentacao: 'Lesão pigmentada com: A=Assimetria, B=Borda irregular, C=Coloração heterogênea (preto, azul, marrom misturados), D=Diâmetro >6mm, E=Evolução (mudança). Amelanótico: lesão rósea ou vermelha (mais difícil de detectar). Prurido, sangramento, ulceração.',
            criterios: ['Biópsia excisional com margem mínima (padrão ouro). Dermatoscopia como triagem. Estadiamento: AJCC — espessura de Breslow + úlcera + mitoses + linfonodo sentinela'],
            exames: ['Dermatoscopia (rastreio)', 'Biópsia excisional (não incisional)', 'Linfonodo sentinela (Breslow >0,8mm ou ulcerado)', 'PET-CT/TC se estágio III-IV (metástases)', 'BRAF V600E mutação (terapia alvo)'],
            tratamento: 'Localizado: excisão com margens amplas (0,5-2cm conforme Breslow). Linfonodo sentinela positivo: esvaziamento ganglionar. Adjuvante: pembrolizumabe ou nivolumabe. Metastático BRAF+: dabrafenibe + trametinibe. Metastático: imunoterapia (pembrolizumabe, ipilimumabe + nivolumabe).',
            diferenciais: ['Nevo melanocítico benigno', 'Ceratose seborreica', 'Carcinoma basocelular pigmentado', 'Hemangioma trombosado', 'Histiocitoma'],
            alertas: ['Biópsia NUNCA incisional em melanoma — biópsia excisional com margem 1-2mm. Biópsia incisional pode alterar o estadiamento', 'ABCDE: sensibilidade 95% para melanoma. Qualquer lesão com critérios → biópsia', 'Melanoma acral: palmas, plantas, subungueal — frequente em negros e asiáticos. Diagnosticado tardiamente'],
            perola: 'Espessura de Breslow é o principal fator prognóstico: <0,8mm = excelente (<5% mortalidade); >4mm = mortalidade >50%. Sentinela muda o estadiamento e prognóstico.',
            especialidade: 'Dermatologia/Oncologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 13. PSIQUIATRIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Psiquiatria',
    icone: '🧩',
    sintomas: [
      {
        sintoma: 'Transtornos do Humor',
        doencas: [
          {
            id: 'depressao', nome: 'Transtorno Depressivo Maior', cid: 'F32',
            descricao: 'Transtorno do humor com episódios de depressão maior. Causa líder de incapacidade no mundo.',
            apresentacao: 'Humor deprimido ou anedonia por ≥2 semanas + ≥4 sintomas adicionais: insônia/hipersonia, fadiga, perda de peso, concentração prejudicada, sentimento de inutilidade, agitação/lentidão, ideação suicida.',
            criterios: ['DSM-5: ≥5 sintomas por ≥2 semanas, incluindo humor deprimido OU anedonia, com prejuízo funcional'],
            exames: ['Diagnóstico clínico. Excluir: TSH, hemograma, B12, folato, glicemia, Ca2+, cortisol. Escalas: PHQ-9, HAM-D'],
            tratamento: 'ISRS (1ª linha): sertralina 50-200mg, escitalopram 10-20mg, fluoxetina 20-60mg. Duração mínima: 6 meses após remissão. Psicoterapia (TCC) sinérgica. Depressão grave/refratária: venlafaxina, bupropiona, TEC.',
            diferenciais: ['Hipotireoidismo', 'Anemia', 'Síndrome de Cushing', 'Transtorno Bipolar (excluir hipomania antes de ISRS)', 'Luto normal'],
            alertas: ['Avaliar SEMPRE risco de suicídio (ideação + plano + intenção + acesso a meios)', 'ISRS em adolescente: risco de ativação com ideação suicida — monitorar nas 2 primeiras semanas', 'Não iniciar ISRS sem excluir TAB (pode precipitar mania)'],
            perola: 'SIGECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidal ideation — os 8 critérios diagnósticos complementares da depressão.',
            especialidade: 'Psiquiatria'
          },
          {
            id: 'bipolar', nome: 'Transtorno Afetivo Bipolar', cid: 'F31',
            descricao: 'Transtorno do humor com episódios de mania/hipomania e depressão. TAB I: mania plena. TAB II: hipomania + depressão.',
            apresentacao: 'Mania: humor elevado/irritável + autoestima inflada + sono reduzido + fuga de ideias + agitação psicomotora + comportamento impulsivo (sexo, dinheiro, drogas). Duração ≥7 dias ou hospitalização.',
            criterios: ['DSM-5 TAB I: ≥1 episódio maníaco (≥7 dias ou hospitalização). TAB II: ≥1 hipomaníaco + ≥1 depressivo maior, nunca mania plena'],
            exames: ['Diagnóstico clínico', 'TSH (hipertireoidismo simula mania)', 'Toxicologia (cocaína, anfetaminas precipitam mania)', 'Hemograma + eletrólitos + lítio sérico (se em uso)', 'ECG (antes de antipsicótico — QT)'],
            tratamento: 'Mania aguda: lítio + antipsicótico atípico (quetiapina, risperidona, olanzapina) ou valproato + antipsicótico. Manutenção: lítio (de escolha), valproato, quetiapina. ISRS sem estabilizador = risco de virada maníaca.',
            diferenciais: ['Esquizofrenia', 'Intoxicação (cocaína, anfetamina)', 'Hipertireoidismo', 'Depressão unipolar', 'TDAH'],
            alertas: ['Lítio: janela terapêutica estreita (0,6-1,2 mEq/L). Toxicidade: tremor grosseiro, ataxia, confusão, arritmia', 'ISRS sem estabilizador: precipita virada maníaca e ciclagem rápida', 'Gestação: lítio + valproato teratogênicos — usar lamotrigina'],
            perola: 'Lítio: monitorar a cada 6 meses — nível sérico, creatinina, TSH (hipotireoidismo), cálcio. Mais eficaz para prevenir suicídio no TAB.',
            especialidade: 'Psiquiatria'
          },
          {
            id: 'linfoma', nome: 'Linfoma de Hodgkin', cid: 'C81',
            descricao: 'Neoplasia do sistema linfático com células de Reed-Sternberg. Bimodal (20-30 anos e >55 anos). Alta taxa de cura.',
            apresentacao: 'Linfonodomegalia cervical ou mediastinal indolor + sintomas B: febre noturna + sudorese noturna + emagrecimento >10% em 6 meses. Prurido generalizado. Massa mediastinal em RX.',
            criterios: ['Biópsia linfonodal excisional (punch biopsia inadequada para linfoma)'],
            exames: ['RX tórax + TC tórax/abdômen/pelve (estadiamento)', 'PET-CT (mais preciso)', 'Hemograma + VHS + LDH + albumina', 'Biópsia linfonodal (células de Reed-Sternberg em fundo inflamatório)', 'Mielograma (estadio IV)'],
            tratamento: 'ABVD (adriamicina + bleomicina + vimblastina + dacarbazina) × 2-6 ciclos ± radioterapia. Resposta avaliada por PET após 2 ciclos. Recidiva: quimioterapia de resgate + transplante autólogo.',
            diferenciais: ['Linfoma não-Hodgkin', 'Mononucleose infecciosa', 'Tuberculose ganglionar', 'Toxoplasmose', 'Sarcoidose'],
            alertas: ['Bleomicina: toxicidade pulmonar — RX tórax antes de cada ciclo', 'Adriamicina: cardiotoxicidade — ecocardiograma antes e após', 'Fertilidade: criopreservação de gametas antes da quimioterapia em jovens'],
            perola: 'Sinal de Pel-Ebstein: febre cíclica (dias de febre alternando com afebrilidade) — clássica mas incomum (10-20% dos casos de Hodgkin).',
            especialidade: 'Hematologia/Oncologia'
          },
        ]
      },
      {
        sintoma: 'Transtornos de Ansiedade e Estresse',
        doencas: [
          {
            id: 'tag', nome: 'Transtorno de Ansiedade Generalizada (TAG)', cid: 'F41.1',
            descricao: 'Preocupação excessiva e incontrolável sobre múltiplos temas por ≥6 meses.',
            apresentacao: 'Preocupação excessiva + difícil controle + ≥3 sintomas: tensão muscular, fadiga, irritabilidade, dificuldade de concentração, insônia, inquietação. Maior em mulheres.',
            criterios: ['DSM-5: ansiedade e preocupação excessiva ≥6 meses + 3+ sintomas + dificuldade de controlar + prejuízo funcional'],
            exames: ['Diagnóstico clínico. Excluir: TSH, hemograma, glicemia, ECG. Escalas: GAD-7, HAM-A'],
            tratamento: 'ISRS + TCC (psicoterapia). Alternativas: venlafaxina, buspirona, duloxetina, pregabalina. Benzodiazepínico apenas curto prazo (evitar dependência).',
            diferenciais: ['Hipertireoidismo', 'Feocromocitoma', 'Transtorno de pânico', 'Depressão com ansiedade', 'TEPT'],
            alertas: ['Ansiedade e depressão coexistem em 50% dos casos — avaliar ambos', 'Benzodiazepínico a longo prazo: tolerância + dependência + sedação + quedas em idosos', 'GAD-7 ≥10: ansiedade moderada-grave'],
            perola: 'TAG: preocupação difusa sobre "qualquer coisa" vs. fobia social (situações sociais) vs. pânico (ataques inesperados) vs. TOC (obsessões específicas).',
            especialidade: 'Psiquiatria'
          },
          {
            id: 'tept', nome: 'Transtorno de Estresse Pós-Traumático (TEPT)', cid: 'F43.1',
            descricao: 'Resposta a evento traumático com reexperienciação, evitação, alterações cognitivas e hiperativação autonômica.',
            apresentacao: 'Após trauma grave (acidente, violência, guerra, abuso): flashbacks + pesadelos + evitação de memórias do trauma + hipervigilância + irritabilidade + insônia. Duração >1 mês.',
            criterios: ['DSM-5: exposição a trauma + ≥1 revivência + ≥1 evitação + ≥2 alterações cognitivas/humor + ≥2 hiperativação por >1 mês + prejuízo'],
            exames: ['Diagnóstico clínico. Escalas: PCL-5, CAPS-5. Excluir causa orgânica se sintomas físicos predominantes'],
            tratamento: 'Psicoterapia focada no trauma (TCC-TP, EMDR). Farmacológico: ISRS (sertralina, paroxetina — aprovados FDA). Prazosina (pesadelos). Benzodiazepínico: evitar (piora prognóstico no TEPT).',
            diferenciais: ['TAG', 'Depressão', 'TOC (obsessões sem gatilho traumático)', 'Transtorno de ajustamento', 'Transtorno dissociativo'],
            alertas: ['TEPT + suicídio: risco aumentado — sempre avaliar', 'Benzodiazepínico piora TEPT a longo prazo — evitar', 'Debriefing psicológico imediato após trauma: pode aumentar TEPT — contraindicado'],
            perola: 'EMDR (Eye Movement Desensitization and Reprocessing): técnica de primeira linha no TEPT com forte evidência. Reprocessa memórias traumáticas através de estimulação bilateral.',
            especialidade: 'Psiquiatria'
          },
        ]
      },
      {
        sintoma: 'Transtornos Psicóticos',
        doencas: [
          {
            id: 'esquizofrenia', nome: 'Esquizofrenia', cid: 'F20',
            descricao: 'Transtorno psicótico crônico com comprometimento cognitivo, perceptivo e comportamental. Início 18-25 anos (homens) e 25-35 anos (mulheres).',
            apresentacao: 'Sintomas positivos: alucinações (auditivas — vozes comentando/conversando), delírios (persecutórios, referência), desorganização do pensamento. Sintomas negativos: embotamento afetivo, alogia, avolição, anedonia.',
            criterios: ['DSM-5: ≥2 de 5 sintomas por ≥1 mês (ao menos 1 positivo: alucinação/delírio/desorganização) + sinais por ≥6 meses'],
            exames: ['Diagnóstico clínico de exclusão', 'TC/RNM crânio (1ª psicose)', 'TSH, glicemia, hemograma, B12, toxicologia', 'EEG (excluir epilepsia)', 'Escalas: PANSS, BPRS'],
            tratamento: 'Antipsicóticos de 2ª geração (atípicos): risperidona, olanzapina, quetiapina, aripiprazol. Clozapina (esquizofrenia refratária). Manutenção por toda a vida. Reabilitação psicossocial.',
            diferenciais: ['Transtorno esquizoafetivo', 'TAB com psicose', 'Depressão com psicose', 'Psicose orgânica (causa médica)', 'Abuso de substâncias (anfetamina, cannabis)'],
            alertas: ['Clozapina: agranulocitose (hemograma semanal/mensal)', 'Antipsicóticos típicos: síndrome extrapiramidal, discinesia tardia', 'Síndrome neuroléptica maligna: febre + rigidez + instabilidade autonômica — suspender antipsicótico + bromocriptina/dantrolene'],
            perola: 'Síndrome neuroléptica maligna: febre alta + rigidez muscular tipo "cano de chumbo" + instabilidade autonômica + CK elevada. Mortalidade 10-20% sem tratamento.',
            especialidade: 'Psiquiatria'
          },
        ]
      },
      {
        sintoma: 'Transtornos por Uso de Substâncias',
        doencas: [
          {
            id: 'abstinencia-alcool', nome: 'Síndrome de Abstinência Alcoólica / Delirium Tremens', cid: 'F10.3',
            descricao: 'Síndrome de privação em dependentes de álcool. Delirium tremens: forma grave com mortalidade de 5-15% sem tratamento.',
            apresentacao: 'Leve (6-12h): tremor, ansiedade, sudorese, taquicardia, insônia. Moderada: alucinações (visuais/táteis). Grave — Delirium Tremens (48-72h): confusão + agitação + alucinações + hiperautonomia + convulsão.',
            criterios: ['Clínico: uso crônico de álcool + cessação/redução + sintomas autonômicos e neurológicos. CIWA-Ar: escala de gravidade'],
            exames: ['Glicemia (hipoglicemia)', 'Eletrólitos (hipomagnesemia, hipocalemia, hipofosfatemia)', 'Transaminases + GGT', 'Álcool sérico', 'Hemograma (VCM alto, trombocitopenia)'],
            tratamento: 'CIWA-Ar ≥8: benzodiazepínico — diazepam 10mg IV a cada 5min até controle (protocolo de carga) ou lorazepam se hepatopatia. Tiamina 100-200mg IV ANTES de glicose. Reposição de Mg e K.',
            diferenciais: ['Delirium por outra causa', 'Meningite', 'AVC', 'Hipertireoidismo', 'Intoxicação'],
            alertas: ['SEMPRE tiamina IV ANTES de glicose (encefalopatia de Wernicke)', 'Encefalopatia de Wernicke: tríade — confusão + oftalmoplegia + ataxia. Tratar: tiamina 500mg IV 8/8h × 3 dias', 'Convulsão alcoólica: sem anticonvulsivante de manutenção — tratar benzodiazepínico'],
            perola: 'Tiamina antes da glicose: glicose sem tiamina pode precipitar encefalopatia de Wernicke em alcoolista — regra absoluta.',
            especialidade: 'Psiquiatria/Medicina de Urgência'
          },
          {
            id: 'transtorno-panico', nome: 'Transtorno de Pânico', cid: 'F41.0',
            descricao: 'Ataques de pânico recorrentes e inesperados com medo persistente de novos ataques.',
            apresentacao: 'Ataque de pânico: pico em 10 min de palpitações + dispneia + dor torácica + tontura + parestesias + sensação de morte iminente. Evitação de situações onde ocorreu.',
            criterios: ['DSM-5: ataques de pânico recorrentes inesperados + ≥1 mês de: preocupação com novos ataques OU mudança de comportamento relacionada'],
            exames: ['ECG (excluir arritmia)', 'TSH (excluir hipertireoidismo)', 'Glicemia (excluir hipoglicemia)', 'Diagnóstico clínico de exclusão'],
            tratamento: 'ISRS (1ª linha) + TCC (igual ou superior ao ISRS). Alprazolam/clonazepam: curto prazo apenas (risco de dependência). Crise aguda: respiração diafragmática + benzodiazepínico se necessário.',
            diferenciais: ['IAM', 'TEP', 'Hipertireoidismo', 'Feocromocitoma', 'Hipoglicemia', 'Arritmia cardíaca'],
            alertas: ['Excluir causas orgânicas ANTES de diagnosticar pânico', 'Benzodiazepínico crônico: dependência física — evitar', 'Agorafobia frequentemente associada — tratar conjuntamente'],
            perola: 'TCC + ISRS = melhor resultado no transtorno de pânico. TCC ensina ao paciente que os sintomas não são perigosos (reestruturação cognitiva + exposição interoceptiva).',
            especialidade: 'Psiquiatria'
          },
          {
            id: 'transtorno-bipolar', nome: 'Transtorno Bipolar', cid: 'F31',
            descricao: 'Transtorno do humor caracterizado por episódios de mania (ou hipomania) e depressão. Tipo I: mania + depressão. Tipo II: hipomania + depressão. Alto risco de suicídio e impacto funcional grave.',
            apresentacao: 'Mania: euforia/irritabilidade + grandiosidade + diminuição do sono sem fadiga + fala acelerada + pensamento em fuga + hipersexualidade + comportamento impulsivo (gastos excessivos, negócios arriscados). Depressão: semelhante a TDM. Duração mania ≥7 dias (ou menos se internação necessária).',
            criterios: ['DSM-5: ≥1 episódio maníaco (Bipolar I) OU ≥1 hipomaníaco + depressivo maior (Bipolar II). Excluir: substâncias, hipotireoidismo, fase maníaca induzida por antidepressivo'],
            exames: ['Diagnóstico clínico. Excluir: TSH (hipertireoidismo pode imitar mania), EAS (lítio e função renal), beta-hCG, toxicologia', 'Lítio sérico (monitoramento): nível terapêutico 0,8-1,2 mEq/L (agudo) / 0,6-0,8 (manutenção)'],
            tratamento: 'Mania aguda: lítio OU valproato OU olanzapina/quetiapina ± benzodiazepínico. Manutenção: lítio (melhor evidência de prevenção de recaída e antisuicida), valproato, lamotrigina (bipolar II). EVITAR antidepressivo isolado (vira mania).',
            diferenciais: ['TDM (sem mania/hipomania prévia)', 'Esquizofrenia (psicose sem humor predominante)', 'Intoxicação por estimulantes (cocaína, anfetamina)', 'Hipertireoidismo', 'Transtorno de personalidade limítrofe (borderline)'],
            alertas: ['Antidepressivo isolado no Bipolar = "virada maníaca" — contraindicado sem estabilizador', 'Lítio: índice terapêutico estreito — monitorar lítio sérico, TFG, TSH. Teratogênico (Ebstein)', 'Valproato: teratogênico (espinha bífida) — anticoncepção obrigatória em mulher fértil'],
            perola: 'Lítio é o único medicamento psiquiátrico com evidência de redução de suicídio (50% menos). Em todo bipolar com risco suicida — lítio deve ser considerado.',
            especialidade: 'Psiquiatria'
          },
          {
            id: 'toc', nome: 'Transtorno Obsessivo-Compulsivo (TOC)', cid: 'F42',
            descricao: 'Transtorno caracterizado por obsessões (pensamentos intrusivos geradores de ansiedade) e compulsões (rituais para reduzir ansiedade). Tempo >1h/dia ou causa sofrimento significativo.',
            apresentacao: 'Obsessões: medo de contaminação, dúvida, simetria, agressão, sexo, religião. Compulsões: limpeza/lavagem, checagem, organização, repetição. Paciente reconhece os pensamentos como irracionais mas não consegue resistir. Ego-distônico.',
            criterios: ['DSM-5: obsessões E/OU compulsões + >1h/dia OU sofrimento/prejuízo funcional + não atribuível a substâncias/outra condição'],
            exames: ['Diagnóstico clínico. Escalas: Y-BOCS (gravidade). Excluir causas médicas se onset abrupto (síndrome PANDAS em crianças, tumor frontal)'],
            tratamento: 'ISRS em doses altas (fluoxetina 60-80mg, sertralina 150-200mg) — 1ª linha. Clomipramina (tricíclico) alternativa eficaz. TCC com exposição e prevenção de resposta (EPR) — tão eficaz quanto ISRS. Casos refratários: potencialização com antipsicótico (aripiprazol, risperidona).',
            diferenciais: ['Transtorno de ansiedade generalizada (sem compulsões)', 'Personalidade obsessivo-compulsiva (ego-sintônica, sem obsessões)', 'Psicose (não reconhece irracionalidade)', 'Síndrome de Tourette (tiques + TOC)'],
            alertas: ['TOC responde a ISRS mas precisa de DOSE ALTA e tempo (8-12 semanas) — não aumentar precocemente', 'PANDAS: TOC abrupto em criança após infecção estreptocócica — correlato imunológico', 'Comorbidade comum: depressão (30%), transtorno de pânico, tricotilomania'],
            perola: 'TOC ego-distônico: paciente reconhece que as obsessões são irracionais e tenta resistir (mas falha). Diferente da personalidade obsessiva (ego-sintônica — vê o comportamento como adequado).',
            especialidade: 'Psiquiatria'
          },
          {
            id: 'ptsd', nome: 'Transtorno de Estresse Pós-Traumático (TEPT)', cid: 'F43.1',
            descricao: 'Transtorno que emerge após exposição a evento traumático grave (violência, desastre, abuso, acidente, guerra). Disfunção persistente em múltiplos domínios.',
            apresentacao: 'Revivência: flashbacks, pesadelos, reações intensas a lembretes. Evitação: de pensamentos e situações relacionadas ao trauma. Alterações cognitivas e humor: culpa, vergonha, anedonia, dissociação. Hipervigilância: insônia, irritabilidade, resposta de susto exagerada.',
            criterios: ['DSM-5: exposição a trauma + ≥1 sintoma de revivência + ≥1 evitação + ≥2 alterações cognitivas/humor + ≥2 hiperativação/reatividade, por >1 mês'],
            exames: ['Diagnóstico clínico. Escalas: PCL-5 (rastreamento). Excluir: TCE, epilepsia do lobo temporal, uso de substâncias'],
            tratamento: 'Psicoterapia 1ª linha: EMDR (Eye Movement Desensitization Reprocessing) e TCC focada no trauma. Farmacológico: ISRS (sertralina, paroxetina — únicos aprovados FDA para TEPT). Prazosin: pesadelos. Evitar benzodiazepínico (pior desfecho a longo prazo).',
            diferenciais: ['Transtorno de ajustamento (<1 mês, menos grave)', 'Transtorno de pânico (sem trauma)', 'Depressão maior (sem revivência)', 'TOC (obsessões sem relação com trauma específico)'],
            alertas: ['Benzodiazepínico: piora desfecho no TEPT — contraindicado como tratamento primário', 'Dissociação + TEPT: risco de suicídio aumentado — avaliar sempre', 'EMDR: evidência robusta, tão eficaz quanto TCC — disponível no SUS em alguns CAPS'],
            perola: 'TEPT vs. Transtorno de Ajustamento: TEPT exige evento traumático grave (ameaça à vida/integridade) + duração >1 mês. Ajustamento: stressor menos grave + <6 meses.',
            especialidade: 'Psiquiatria'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 14. UROLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Urologia',
    icone: '🔵',
    sintomas: [
      {
        sintoma: 'Doenças Urológicas Endócrinas',
        doencas: [
          {
            id: 'sop', nome: 'Síndrome do Ovário Policístico (SOP)', cid: 'E28.2',
            descricao: 'Desordem endócrina mais comum em mulheres em idade reprodutiva (5-10%). Hiperandrogenismo + anovulação + ovários policísticos.',
            apresentacao: 'Irregularidade menstrual (oligomenorreia/amenorreia) + sinais de hiperandrogenismo (acne, hirsutismo) + dificuldade de engravidar. Obesidade em 50%.',
            criterios: ['Rotterdam: ≥2 de 3: oligo/anovulação + hiperandrogenismo clínico/bioquímico + ovários policísticos no US'],
            exames: ['US pélvica transvaginal', 'Testosterona total + livre', 'LH/FSH', 'TSH + prolactina (excluir outras causas)', 'Glicemia + insulina (resistência insulínica)', 'Lipidograma'],
            tratamento: 'Perda de peso (fundamental). Anticoncepção hormonal (irregular + hirsutismo). Metformina (resistência à insulina). Letrozol ou clomifeno (indução da ovulação).',
            diferenciais: ['HAC tardio (17-OH progesterona elevada)', 'Tumor androgênico', 'Síndrome de Cushing', 'Hiperprolactinemia'],
            alertas: ['Rastrear DM2 e síndrome metabólica — frequentes na SOP', 'Amenorreia crônica = risco de câncer endometrial por hiperestrogenismo sem progesterona', 'Letrozol: 1ª linha para indução de ovulação (superior ao clomifeno)'],
            perola: 'SOP: causa mais comum de infertilidade anovulatória. Diagnóstico de exclusão — sempre descartar HAC, tumor androgênico e Cushing.',
            especialidade: 'Endocrinologia/Ginecologia'
          },
        ]
      },
      {
        sintoma: 'Urgências Urológicas',
        doencas: [
          {
            id: 'torcao-testicular', nome: 'Torção Testicular', cid: 'N44',
            descricao: 'Torção do cordão espermático com isquemia testicular. Emergência urológica. Janela de salvamento: 6 horas.',
            apresentacao: 'Dor testicular de início súbito intensa + náusea/vômito. Testículo alto e horizontal ("sinal do carrilhão"). Reflexo cremastérico ausente. Sem alívio da dor ao elevação (diferencia de orquite).',
            criterios: ['Clínico (não aguardar US se suspeita alta). US Doppler colorido: ausência de fluxo'],
            exames: ['US Doppler testicular (não atrasar cirurgia se alta suspeita)', 'β-hCG + alfafetoproteína (se suspeita de tumor com torção)'],
            tratamento: 'Destorção manual imediata (enquanto organiza cirurgia). Exploração cirúrgica de urgência + orquiopexia bilateral (orchidopexia do lado sadio também).',
            diferenciais: ['Epididimite/Orquiepididimite', 'Torsão de apêndice testicular', 'Hérnia inguinal encarcerada', 'Trauma testicular'],
            alertas: ['<6h: salvamento em >90%. 6-12h: 50%. >24h: orquiectomia geralmente necessária', 'US Doppler: sensibilidade 88% — não excluir se negativo e suspeita clínica alta', 'Orquiopexia contralateral: testículo restante tem risco aumentado (deformidade "em badalo de sino")'],
            perola: 'Sinal de Prehn NEGATIVO na torção: elevação do testículo não alivia a dor. Positivo em epididimite (melhora com elevação).',
            especialidade: 'Urologia'
          },
          {
            id: 'priapismo', nome: 'Priapismo', cid: 'N48.3',
            descricao: 'Ereção persistente não relacionada à estimulação sexual por >4h. Isquêmico (baixo fluxo — emergência) ou não isquêmico (alto fluxo).',
            apresentacao: 'Ereção dolorosa rígida >4h (isquêmico) ou ereção indolor persistente (não isquêmico). Causas: anemia falciforme, leucemia, medicamentos (trazodona, antipsicóticos, cocaína, injeção intracavernosa).',
            criterios: ['Gasometria do sangue cavernoso: pO2 <30 mmHg = isquêmico (hipóxia). Doppler peniano: ausência de fluxo = isquêmico'],
            exames: ['Gasometria cavernosa', 'Hemograma (drepanocitose?)', 'US Doppler peniano', 'Toxicologia'],
            tratamento: 'Isquêmico: aspiração do sangue cavernoso + irrigação com SF + injeção intracavernosa de fenilefrina. Falha: shunt cirúrgico. Falciforme: hidratação + analgesia + hidroxiureia.',
            diferenciais: ['Priapismo não isquêmico (fístula arteriovenosa pós-trauma — indolor)', 'Corpo estranho', 'Peyronie'],
            alertas: ['>4h: risco de fibrose e disfunção erétil permanente', 'Fenilefrina: vasoconstritor alfa puro (sem efeito cardíaco). Epinefrina: evitar (risco de hipertensão grave)', 'Priapismo recorrente em falciforme: profilaxia com PDE5i ou hormônio'],
            perola: 'Janela terapêutica: <4h = recuperação completa. 4-24h = chance de recuperação parcial. >36h = fibrose irreversível.',
            especialidade: 'Urologia'
          },
        ]
      },
      {
        sintoma: 'Doenças Urológicas Malignas e Infecciosas',
        doencas: [
          {
            id: 'ca-prostata', nome: 'Câncer de Próstata', cid: 'C61',
            descricao: 'Neoplasia maligna mais frequente em homens no Brasil (exceto pele). Adenocarcinoma em 95%.',
            apresentacao: 'Frequentemente assintomático (rastreamento). Sintomas obstrutivos/irritativos em doença local avançada. Dor óssea em metástases (coluna, pelve).',
            criterios: ['PSA elevado + biópsia transretal guiada por US ou RNM (padrão ouro histológico). Gleason/ISUP classifica agressividade'],
            exames: ['PSA total + livre (relação PSA livre/total: <15% = maior risco)', 'Toque retal', 'RNM de próstata multiparamétrica (antes da biópsia)', 'Biópsia (≥12 fragmentos)', 'Cintilografia óssea (PSA>20 ou Gleason≥8)', 'TC abdômen e pelve (estadiamento)'],
            tratamento: 'Baixo risco localizado: vigilância ativa OU prostatectomia OU radioterapia. Alto risco local: prostatectomia radical OU radioterapia + hormonioterapia. Metastático: castração (LHRH análogos + enzalutamida ou abiraterona) ± quimioterapia.',
            diferenciais: ['HBP (PSA moderadamente elevado, próstata lisa)', 'Prostatite (PSA muito alto + sintomas)', 'Ca de bexiga (hematúria)', 'Metástase óssea de outra origem'],
            alertas: ['PSA em prostatite: pode elevar muito — aguardar 6-8 semanas após tratamento para reavaliar', 'Rastreamento: individualizar. INCA: discutir riscos e benefícios com homens 50-69 anos (45 se afrodescendente ou familiar 1°)', 'Compressão medular por metástase: radioterapia + dexametasona emergência'],
            perola: 'Rastreamento controverso: PSA eleva detecção mas pode levar a sobretratamento. Decisão compartilhada com o paciente é fundamental.',
            especialidade: 'Urologia/Oncologia'
          },
          {
            id: 'orqui-epididimite', nome: 'Orquiepididimite Aguda', cid: 'N45',
            descricao: 'Infecção do epidídimo ± testículo. Jovens: IST (N. gonorrhoeae, C. trachomatis). >35 anos: E. coli, Enterococcus.',
            apresentacao: 'Dor testicular de início gradual (diferente da torção que é súbita) + edema + eritema escrotal + febre. Sinal de Prehn positivo (elevação alivia dor). Corrimento uretral associado.',
            criterios: ['Clínico. US Doppler (hiperfluxo — diferencia de torção que tem hipofluxo)'],
            exames: ['US Doppler testicular (hiperfluxo = inflamação)', 'EAS + urocultura', 'Swab uretral PCR gonococo + clamídia', 'Hemograma + PCR'],
            tratamento: '<35 anos ou IST provável: ceftriaxona 500mg IM dose única + doxiciclina 100mg 12/12h × 10 dias. >35 anos ou sem IST: ciprofloxacino 500mg 12/12h × 10 dias. Suporte: escroto elevado, anti-inflamatórios.',
            diferenciais: ['Torção testicular (emergência — dor súbita + sem febre + Doppler hipofluxo)', 'Torção de apêndice testicular (ponto de dor na cabeça do testículo)', 'Hérnia inguinal encarcerada'],
            alertas: ['Dor testicular AGUDA: sempre pensar em torção primeiro — US Doppler urgente', 'Orquiepididimite refratária ou abscesso: cirurgia (orquiectomia parcial ou drenagem)', 'Tratar parceiro se IST'],
            perola: 'Diferença crucial: torção = dor súbita + jovem + sem febre + Prehn negativo + Doppler hipofluxo. Orquiepididimite = dor gradual + febre + Prehn positivo + Doppler hiperfluxo.',
            especialidade: 'Urologia'
          },
        ]
      },
      {
        sintoma: 'Doenças Prostáticas',
        doencas: [
          {
            id: 'hbp', nome: 'Hiperplasia Benigna da Próstata', cid: 'N40',
            descricao: 'Aumento benigno da próstata com sintomas do trato urinário inferior (STUI). Muito prevalente em homens >50 anos.',
            apresentacao: 'Sintomas obstrutivos: jato urinário fraco, hesitação, esforço para urinar, gotejamento terminal. Sintomas irritativos: urgência, noctúria, polaciúria. Retenção urinária aguda.',
            criterios: ['Clínico + IPSS (Internacional Prostate Symptom Score). PSA e toque retal para rastrear Ca de próstata'],
            exames: ['PSA total + livre', 'Urinálise + urocultura', 'Creatinina (uropatia obstrutiva?)', 'US de próstata (volume)', 'Urofluxometria', 'US de vias urinárias (resíduo pós-miccional, hidronefrose)'],
            tratamento: 'Leve (IPSS <8): observação + mudança de hábitos. Moderada: alfa-bloqueador (tansulosina 0,4mg, doxazosina) + inibidores da 5-alfa-redutase (finasterida — reduz próstata >30mL). Refratário ou complicações: RTU-P (cirurgia endoscópica).',
            diferenciais: ['Câncer de próstata', 'Prostatite', 'Estenose de uretra', 'Bexiga hiperativa', 'Causas neurológicas'],
            alertas: ['Retenção urinária aguda: sondagem vesical de urgência', 'Inibidores de 5-alfa-redutase: reduzem PSA em 50% (corrigir: multiplicar ×2)', 'Alfa-bloqueador: hipotensão ortostática — iniciar à noite'],
            perola: 'IPSS: 0-7 leve, 8-19 moderado, 20-35 grave. Cirurgia indicada em refratários ou com complicações (ITU recorrente, litíase vesical, insuficiência renal obstrutiva).',
            especialidade: 'Urologia'
          },
          {
            id: 'prostatite', nome: 'Prostatite Aguda Bacteriana', cid: 'N41.0',
            descricao: 'Infecção bacteriana aguda da próstata. E. coli mais comum. Emergência urológica.',
            apresentacao: 'Febre alta + calafrios + dor perineal + sintomas obstrutivos e irritativos urinários + próstata quente, dolorosa e amolecida ao toque retal (muito sensível).',
            criterios: ['Clínico + urocultura positiva'],
            exames: ['Hemograma + PCR', 'Urocultura (amostra de jato médio)', 'PSA (muito elevado na prostatite aguda — não usar para diagnóstico)', 'US transretal (contraindicado na fase aguda)', 'Hemocultura se febre alta'],
            tratamento: 'Ciprofloxacino 500mg 12/12h ×4-6 semanas VO (ou IV se grave). Internação se sepse. NÃO biópsia transretal na fase aguda.',
            diferenciais: ['HBP', 'Cistite', 'Abscesso prostático', 'Ca de próstata com infecção'],
            alertas: ['Abscesso prostático: US pélvica + drenagem cirúrgica', 'PSA elevado em prostatite: não usar como rastreamento de Ca neste momento — repetir após 6-8 semanas', 'Fluoroquinolona: alta penetração prostática = droga de escolha'],
            perola: 'Prostatite crônica bacteriana: recorrência frequente. Toque retal suave — próstata sensível pode causar bacteremia se massagem agressiva.',
            especialidade: 'Urologia'
          },
          {
            id: 'ca-bexiga', nome: 'Carcinoma de Bexiga', cid: 'C67',
            descricao: 'Neoplasia maligna urotelial. Principal tipo: carcinoma urotelial (80-90%). Fatores de risco: tabagismo (principal), exposição a anilinas, ciclofosfamida.',
            apresentacao: 'Hematúria macroscópica indolor, intermitente, monosintomática = sinal de alarme. Hematúria microscópica em >40 anos: investigar. Sintomas irritativos vesicais (disúria, polaciúria) em doença avançada.',
            criterios: ['Cistoscopia + biópsia = padrão ouro para diagnóstico e estadiamento'],
            exames: ['EAS + citologia urinária (células atípicas)', 'Cistoscopia com biópsia', 'TC de abdome e pelve (estadiamento, invasão local)', 'US vesical (detecção inicial)', 'Cintilografia óssea (metástase óssea)'],
            tratamento: 'Superficial (Tis, Ta, T1): RTUB (ressecção transuretral) + BCG intravesical. Invasivo de músculo (T2+): cistectomia radical + quimioterapia neoadjuvante (cisplatina). Metastático: quimioterapia + imunoterapia (pembrolizumabe).',
            diferenciais: ['Cistite (hematúria + disúria + febre)', 'Urolitíase (hematúria + dor cólica)', 'Ca de próstata com invasão', 'Tuberculose urinária (hematúria + EAS com leucocitúria estéril)'],
            alertas: ['Hematúria macroscópica indolor em >40 anos = neoplasia de bexiga até prova em contrário — cistoscopia obrigatória', 'Tabagismo: risco 4-7× maior — parar tabagismo reduz mas não zera o risco', 'BCG intravesical: contraindicado em imunossuprimidos e NUNCA se hematúria macroscópica ativa'],
            perola: 'Hematúria total (durante todo o jato urinário) = origem alta (rim, ureter, bexiga). Hematúria inicial = uretra. Hematúria terminal = bexiga/próstata.',
            especialidade: 'Urologia/Oncologia'
          },
          {
            id: 'tumor-testicular', nome: 'Tumor de Testículo (Câncer Testicular)', cid: 'C62',
            descricao: 'Tumor maligno mais comum em homens de 15-35 anos. Células germinativas em 95% (seminoma e não-seminoma). Altamente curável mesmo com metástases (sobrevida > 90%).',
            apresentacao: 'Massa testicular indolor, dura, irregular — sinal de alarme. Sensação de peso escrotal. Metástases retroperitoneais (dor lombar) ou pulmonares ao diagnóstico em 20%.',
            criterios: ['Marcadores: β-hCG + AFP + LDH. Orquiectomia radical inguinal = diagnóstico + tratamento inicial (NUNCA biópsia transescrotal)'],
            exames: ['US testicular (massa sólida hiperecoica)', 'β-hCG + AFP + LDH (antes e após orquiectomia)', 'TC tórax-abdome-pelve (estadiamento)', 'PET-CT (seminoma residual pós-QT)'],
            tratamento: 'Orquiectomia radical inguinal (todos). Seminoma estágio I: vigilância ativa OU radioterapia OU carboplatina. Não-seminoma estágio I: vigilância. Estágio avançado: BEP (bleomicina + etoposídeo + cisplatina).',
            diferenciais: ['Orquiepididimite (edema + febre)', 'Hematocele pós-trauma', 'Hidrocele (transluzmina à transluminação)', 'Espermatocele (polo superior, cística)'],
            alertas: ['NUNCA biópsia transescrotal — dissemina para linfonodos inguinais (estadiamento diferente)', 'β-hCG elevada = não-seminoma (mesmo com histologia de seminoma = tratamento de não-seminoma)', 'AFP normal no puro seminoma — AFP elevada = componente não-seminomatoso'],
            perola: 'Massa testicular em jovem = tumor testicular até prova em contrário. US confirma, marcadores estadiam, orquiectomia inguinal cura. A sobrevida em 5 anos é > 95%.',
            especialidade: 'Urologia/Oncologia'
          },
          {
            id: 'orquiepididimite', nome: 'Orquiepididimite', cid: 'N45',
            descricao: 'Inflamação do epidídimo e testículo. Em <35 anos: IST (Chlamydia trachomatis, N. gonorrhoeae). Em >35 anos: E. coli, Klebsiella (via urinária). Diagnóstico diferencial crítico com torção testicular.',
            apresentacao: 'Dor escrotal gradual (horas a dias) + aumento do testículo + edema escrotal + febre. Dor melhora com elevação do testículo (sinal de Prehn positivo). Corrimento uretral ou sintomas urinários associados.',
            criterios: ['Clínico + US Doppler testicular (fluxo aumentado = orquiepididimite; fluxo ausente = torção)'],
            exames: ['US Doppler testicular (urgência — diferenciar de torção)', 'EAS + urocultura', 'Swab uretral para Chlamydia/gonococo (PCR)', 'Hemograma + PCR', 'β-hCG + AFP (excluir tumor se massa)'],
            tratamento: '<35 anos (IST): ceftriaxona 500mg IM dose única + doxiciclina 100mg 12/12h × 10 dias. >35 anos: levofloxacino 500mg/dia × 10 dias. Suporte: elevação escrotal + AINEs. Tratar parceiro se IST.',
            diferenciais: ['Torção testicular (EMERGÊNCIA — dor súbita, sinal de Prehn negativo, náusea, sem febre inicial)', 'Tumor testicular (massa endurecida, indolor)', 'Hérnia inguinal encarcerada', 'Hidrocele infectada'],
            alertas: ['Torção testicular: exploração cirúrgica em <6h (viabilidade testicular). US com fluxo presente = torção improvável, mas não exclui 100%', 'Sinal de Prehn: melhora com elevação = epididimite. Piora ou sem melhora = torção (inespecífico)', 'Orquiepididimite por tuberculose: pensar em endemia + resposta parcial ao ATB convencional'],
            perola: 'Dor escrotal aguda no jovem: sempre excluir torção antes de tratar como epididimite. US Doppler em minutos — fluxo ausente = cirurgia imediata.',
            especialidade: 'Urologia'
          },
          {
            id: 'ca-renal', nome: 'Carcinoma de Células Renais (Câncer de Rim)', cid: 'C64',
            descricao: 'Tumor maligno renal mais comum em adultos. Histologia: células claras (80%). Fatores de risco: tabagismo, obesidade, VHL. Tríade clássica hoje raramente apresentada.',
            apresentacao: 'Descoberta incidental por USG/TC em 60%. Tríade clássica (hematúria + dor lombar + massa palpável) = doença avançada. Síndromes paraneoplásicas: policitemia, hipercalcemia, hipertensão, síndrome de Stauffer (colestase).',
            criterios: ['TC abdome com contraste (fase arterial + venosa + tardia) = padrão ouro. Massa renal que realça com contraste.'],
            exames: ['TC tórax-abdome-pelve (estadiamento)', 'USG (triagem)', 'RM (extensão em veia renal/cava)', 'Biópsia (massas indeterminadas ou suspeita de linfoma/metástase)', 'Função renal (creatinina, clearance)'],
            tratamento: 'Localizado: nefrectomia parcial (lesões <4 cm, preservação de nefrons) ou radical. Ablação por radiofrequência (paciente de alto risco cirúrgico). Metastático: imunoterapia (nivolumabe + ipilimumabe) ou TKI (sunitinibe, pazopanibe). Resistente: everolimus.',
            diferenciais: ['Angiomiolipoma (gordura na TC — benigno)', 'Oncocitoma (benig — cicatriz central na TC)', 'Linfoma renal', 'Metástase renal (melanoma, pulmão)', 'Abscesso renal'],
            alertas: ['Massa renal sólida com realce ao contraste = neoplasia até prova em contrário — cirurgia sem biópsia na maioria', 'Síndrome de Stauffer (colestase não obstrutiva) desaparece após nefrectomia = sinal paraneoplásico', 'VHL (Von Hippel-Lindau): Ca renal bilateral + hemangioblastoma + feocromocitoma — rastreio familiar'],
            perola: 'Policitemia paraneoplásica: produção de EPO pelo tumor. Hematócrito elevado em homem jovem com massa renal. Resolve após nefrectomia.',
            especialidade: 'Urologia/Oncologia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 15. CIRURGIA E TRAUMA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Cirurgia e Trauma',
    icone: '🏥',
    sintomas: [
      {
        sintoma: 'Abdome Agudo Cirúrgico',
        doencas: [
          {
            id: 'hernia-estrang', nome: 'Hérnia Estrangulada', cid: 'K46.0',
            descricao: 'Comprometimento vascular do conteúdo herniário com risco de necrose intestinal. Emergência cirúrgica.',
            apresentacao: 'Hérnia irredutível + dor intensa + eritema da pele sobre hérnia + sinais de obstrução intestinal. Pode evoluir para febre e peritonite.',
            criterios: ['Clínico. TC abdômen com contraste: conteúdo herniário + sinais de isquemia'],
            exames: ['TC abdômen com contraste', 'Hemograma + PCR + Lactato', 'Eletrólitos'],
            tratamento: 'Cirurgia de urgência (herniorrafia + ressecção intestinal se necrose). NÃO tentar redução manual se suspeita de necrose.',
            diferenciais: ['Hérnia encarcerada sem isquemia', 'Linfadenomegalia inguinal', 'Torção de epiplon', 'Abscesso de parede'],
            alertas: ['Hérnia encarcerada: redutível à manobra. Estrangulada: irredutível + isquemia = cirurgia de urgência', 'Hérnia femoral: mais risco de estrangulamento que inguinal', 'Recém-nascido com massa inguinal irredutível: emergência pediátrica'],
            perola: 'Hérnia femoral tem risco de estrangulamento 3-4x maior que inguinal — operar sempre que diagnosticada, mesmo assintomática.',
            especialidade: 'Cirurgia'
          },
          {
            id: 'isquemia-mesen', nome: 'Isquemia Mesentérica Aguda', cid: 'K55.0',
            descricao: 'Oclusão arterial (embolia ou trombose) ou venosa da circulação mesentérica. Alta mortalidade (50-70%).',
            apresentacao: '"Dor desproporcional aos achados físicos" — dor abdominal intensa difusa + exame físico relativamente normal inicialmente. FA + aterosclerose = risco alto. Evolui para peritonite com necrose.',
            criterios: ['Angiotomografia abdominal (artérias mesentéricas) — padrão ouro e urgente'],
            exames: ['TC abdômen com contraste (angio-TC mesentérica)', 'Lactato sérico (elevado)', 'Hemograma + coagulograma + D-dímero', 'Gasometria (acidose metabólica)'],
            tratamento: 'Cirurgia/Intervenção endovascular urgente + revascularização + ressecção de alça necrótica. Anticoagulação imediata. UTI pós-operatório.',
            diferenciais: ['Pancreatite aguda', 'Obstrução intestinal', 'Doença diverticular', 'Peritonite bacteriana'],
            alertas: ['Lactato >2 mmol/L + dor abdominal desproporcional em paciente com FA = emergência cirúrgica imediata', 'Diagnóstico tardio = necrose intestinal extensa = mortalidade >90%', 'Antibiótico de largo espectro profilático imediatamente'],
            perola: 'Tríade clássica: dor abdominal intensa + vômitos + fezes com sangue. Mas clínica precoce é sutil — suspeitar em idoso com FA e dor abdominal.',
            especialidade: 'Cirurgia Vascular/Cirurgia Geral'
          },
          {
            id: 'volvo-sigmoide', nome: 'Volvo de Sigmoide', cid: 'K56.2',
            descricao: 'Rotação do sigmoide em torno do mesentério com obstrução e isquemia. Causa frequente de obstrução em idosos e institucionalizados.',
            apresentacao: 'Distensão abdominal progressiva assimétrica + obstipação + dor + sinais de obstrução. RX abdômen: alça em "grão de café" ou "ômega". TC confirma.',
            criterios: ['RX abdômen: alça sigmoide dilatada em "grão de café". TC abdominal com contraste: torção mesentérica ("sinal do redemoinho")'],
            exames: ['RX abdômen em pé (urgente)', 'TC abdômen com contraste', 'Hemograma + Lactato (isquemia?)'],
            tratamento: 'Sem sinais de isquemia/peritonite: destorção endoscópica (colonoscopia ou retossigmoidoscopia). Com isquemia/peritonite: cirurgia de urgência (ressecção + colostomia — Hartmann).',
            diferenciais: ['Obstrução intestinal por aderência', 'Megacólon tóxico (DII)', 'Obstrução por neoplasia', 'Pseudo-obstrução colônica (Síndrome de Ogilvie)'],
            alertas: ['Sinal do "grão de café": RX clássico mas pode não estar presente', 'Recorrência após destorção endoscópica: 40-80% — sigmoidectomia eletiva após 1° episódio', 'Volvo de ceco: menos frequente, cirurgia é único tratamento'],
            perola: 'Colonoscopia descompressiva no volvo sem isquemia: alívio imediato com inserção de sonda de descompressão — evita cirurgia de urgência.',
            especialidade: 'Cirurgia'
          },
        ]
      },
      {
        sintoma: 'Urgências Vasculares',
        doencas: [
          {
            id: 'aaa-roto', nome: 'Aneurisma de Aorta Abdominal Roto', cid: 'I71.3',
            descricao: 'Ruptura de aneurisma da aorta abdominal. Mortalidade >80% (pré e pós-hospitalar). Emergência cirúrgica imediata.',
            apresentacao: 'Tríade clássica (50%): dor abdominal/lombar intensa de início súbito + massa abdominal pulsátil + hipotensão. Pode mimetizar cólica renal.',
            criterios: ['TC abdômen: confirma e localiza. Instável: diretamente para cirurgia sem esperar TC'],
            exames: ['TC abdômen com contraste (se estável)', 'US abdominal ponto-de-cuidado (identifica aneurisma + líquido)', 'Hemograma + tipo sanguíneo + coagulograma', 'Acesso venoso calibroso × 2 imediato'],
            tratamento: 'Hipotensão permissiva (PA sistólica 50-70mmHg até cirurgia). Cirurgia aberta ou endovascular (EVAR) de urgência. UTI pós-operatório.',
            diferenciais: ['Cólica nefrética', 'Dissecção de aorta', 'Pancreatite aguda', 'IAM inferior'],
            alertas: ['Idoso com dor lombar aguda + hipotensão: AAA roto até prova contrária', 'NÃO dar analgesia potente antes de confirmar cirurgia — pode mascarar instabilidade hemodinâmica', 'US no pronto-socorro: masa aórtica >3cm = aneurisma'],
            perola: 'AAA >5,5cm em homem ou >5cm em mulher: indicação de reparo eletivo (ruptura anual: 25%). <4cm: observar com US a cada 2-3 anos.',
            especialidade: 'Cirurgia Vascular'
          },
          {
            id: 'isquemia-mmii', nome: 'Isquemia Aguda de Membros Inferiores', cid: 'I74.3',
            descricao: 'Oclusão arterial aguda de MMII por embolismo (FA) ou trombose in situ (aterosclerose). Os 6 Ps.',
            apresentacao: 'Os 6 Ps: Pain (dor intensa), Pallor (palidez), Pulselessness (ausência de pulso), Paresthesia (parestesia), Paralysis (paralisia), Poikilothermia (frialdade). Início súbito.',
            criterios: ['Clínico (6 Ps) + US Doppler urgente. Angiografia (planejar revascularização)'],
            exames: ['US Doppler arterial (urgente)', 'Angiografia (pré-operatória)', 'ECG (FA — fonte embólica?)', 'Coagulograma', 'Lactato + CK (rabdomiólise se revascularização tardia)'],
            tratamento: 'Anticoagulação imediata: heparina não fracionada IV (bolus 5000U + infusão). Embolectomia cirúrgica (Fogarty) ou trombólise intraarterial (tPA). Revascularização em <6h.',
            diferenciais: ['TVP (venoso, não perde pulso)', 'Dissecção de aorta (dor torácica + deficit bilateral)', 'Síndrome compartimental'],
            alertas: ['Síndrome de reperfusão após revascularização: hipercalemia + mioglobinúria + IRA — hidratação + bicarbonato', 'Fasciotomia profilática se isquemia >6h antes da revascularização', 'FA é a principal fonte de êmbolo arterial periférico'],
            perola: 'Embolismo vs. trombose: embolismo = início súbito + sem história de claudicação + FA. Trombose = início gradual + histórico de claudicação + aterosclerose.',
            especialidade: 'Cirurgia Vascular'
          },
        ]
      },
      {
        sintoma: 'Trauma',
        doencas: [
          {
            id: 'trauma-abdominal', nome: 'Trauma Abdominal Fechado', cid: 'S39',
            descricao: 'Lesão de órgãos abdominais por trauma contuso (acidente automobilístico, queda). Baço e fígado: mais lesionados.',
            apresentacao: 'Dor abdominal pós-trauma, equimose abdominal (sinal do cinto — "seat belt sign"), rigidez abdominal, hipotensão. Lesão de baço: dor em ombro esquerdo (sinal de Kehr).',
            criterios: ['Mecanismo de trauma + clínica + imagem. FAST (ultrassom ponto de cuidado): líquido livre intraperitoneal'],
            exames: ['FAST (ultrassom abdominal - imediato no trauma)', 'TC abdômen com contraste (estável hemodinâmicamente)', 'Hemograma seriado + Hematócrito + Lactato', 'Urina (hematúria = lesão renal/vesical?)'],
            tratamento: 'Protocolo ATLS: A-B-C-D-E. Instável com FAST positivo: laparotomia exploradora urgente. Estável: TC + conduta cirúrgica ou conservadora conforme grau da lesão. Dano control surgery em instável.',
            diferenciais: ['Trauma torácico (hemotórax)', 'Fratura de bacia (hematoma retroperitoneal)', 'Ruptura de aorta traumática'],
            alertas: ['Lesão de bexiga por fratura de pelve: uretrocistografia', 'Lesão de diafragma: pode ser assintomática inicialmente', 'Transfusão maciça: protocolo 1:1:1 (hemácias:plasma:plaquetas)'],
            perola: 'Sinal de Kehr: dor referida no ombro esquerdo em hemoperitônio (sangue irrita nervo frênico). Patognomônico de líquido subfrênico esquerdo — pensar em lesão de baço.',
            especialidade: 'Cirurgia/Medicina de Urgência'
          },
          {
            id: 'pneumotorax-hiper', nome: 'Pneumotórax Hipertensivo', cid: 'J93.0',
            descricao: 'Ar no espaço pleural com mecanismo valvar causando colapso pulmonar e desvio do mediastino. Emergência imediata.',
            apresentacao: 'Dispneia intensa + hipotensão + distensão venosa jugular + ausência de MV no hemitórax afetado + desvio traqueal para o lado oposto. Taquicardia. Cianose.',
            criterios: ['Diagnóstico CLÍNICO — não aguardar RX para tratar'],
            exames: ['Diagnóstico clínico. RX após descompressão. FAST pulmonar (ausência de deslizamento pleural)'],
            tratamento: 'IMEDIATO: agulha grossa no 2° EIC linha medioclavicular (descompressão por agulha). Seguida de drenagem torácica definitiva (5° EIC linha axilar anterior).',
            diferenciais: ['Hemotórax maciço (macicez + veias colabadas)', 'Tamponamento cardíaco (sem desvio traqueal, bulhas abafadas)', 'Choque hemorrágico'],
            alertas: ['NÃO aguardar exame de imagem — tratar clinicamente', 'Ventilação com pressão positiva em pneumotórax simples pode causar hipertensivo', 'Desvio de traqueia é sinal tardio — não esperar para intervir'],
            perola: 'Mnemônico ATOM para causas de obstrução de débito cardíaco no trauma: A=ar (pneumotórax hipertensivo), T=tamponamento, O=obstrução de veia cava, M=maciço de hemotórax.',
            especialidade: 'Medicina de Urgência/Cirurgia de Trauma'
          },
          {
            id: 'colangite-aguda', nome: 'Colangite Aguda (Charcot/Reynolds)', cid: 'K83.0',
            descricao: 'Infecção bacteriana das vias biliares por obstrução (cálculo, estenose, tumor). Emergência cirúrgica. Mortalidade >40% sem drenagem biliar.',
            apresentacao: 'Tríade de Charcot: febre com calafrios + icterícia + dor em HD. Pêntade de Reynolds (grave): + hipotensão + alteração mental (sepse biliar).',
            criterios: ['Tóquio Guidelines 2018: febre/sinais de inflamação + colestase + imagem com obstrução biliar'],
            exames: ['Hemograma (leucocitose)', 'Bilirrubinas + FA + GGT (elevadas)', 'TGO/TGP (elevadas)', 'Hemocultura (bacteriemia em 50%)', 'US abdominal (dilatação biliar + cálculos)', 'TC abdome (melhor para via biliar distal)', 'CPRE diagnóstica e terapêutica'],
            tratamento: 'ATB IV imediato: cefalosporina 3ª geração + metronidazol (ou piperacilina-tazobactam). Drenagem biliar: CPRE + esfincterotomia (1ª escolha). Alternativa: drenagem percutânea transhepática. Colecistectomia eletiva após resolução.',
            diferenciais: ['Colecistite aguda (Murphy +, sem icterícia importante)', 'Hepatite viral (sem dor cólica, sem calafrios)', 'Abscesso hepático', 'Coledocolitíase sem infecção'],
            alertas: ['Pêntade de Reynolds: indicação de CPRE de URGÊNCIA', 'NUNCA cirurgia aberta na colangite aguda — drenagem endoscópica tem menor mortalidade', 'Escala de Tokyo: classifica gravidade (I-III) e guia timing da drenagem'],
            perola: 'Tríade de Charcot = colangite. Pêntade de Reynolds = colangite GRAVE. A 4ª e 5ª características (hipotensão + confusão) indicam sepse biliar — drenar nas próximas horas.',
            especialidade: 'Cirurgia/Gastroenterologia'
          },
          {
            id: 'apendicite', nome: 'Apendicite Aguda', cid: 'K37',
            descricao: 'Inflamação do apêndice vermiforme. Causa mais comum de abdome agudo cirúrgico. Pico entre 10-30 anos. Principal causa: obstrução por fecalito.',
            apresentacao: 'Dor migratória: periumbilical → FID (McBurney). Náusea + vômito + anorexia + febre baixa. Defesa abdominal em FID. Sinais clínicos: Blumberg (dor à descompressão), Rovsing (dor em FID ao comprimir FIE), Psoas (dor em extensão do quadril), Obturador.',
            criterios: ['Escore de Alvarado ≥7: suspeita alta (dor em FID, migração, febre, náusea, leucocitose, desvio à esq. Escore de Alvarado + TC confirma)'],
            exames: ['Hemograma (leucocitose com desvio)', 'PCR', 'β-hCG (mulher em idade fértil — excluir ectópica)', 'US abdome (sensibilidade 70-80% — operador dependente)', 'TC abdome com contraste (padrão ouro: sensibilidade 94%, especificidade 95%)', 'Urina (EAS para excluir cólica nefrética)'],
            tratamento: 'Cirurgia: apendicectomia laparoscópica (padrão ouro). ATB profilático: cefazolina + metronidazol pré-operatório. Perfurada: ATB pós-op (cobertura polimicrobiana). Abscesso >3cm: drenagem percutânea + ATB + apendicectomia intervalar em 6-8 semanas.',
            diferenciais: ['Cólica nefrética direita', 'Gravidez ectópica (direita)', 'Doença inflamatória pélvica (mulher)', 'Diverticulite de Meckel', 'Ileíte terminal (Crohn)', 'Tumor de ceco'],
            alertas: ['Apendicite na gestação: US como 1ª imagem (sem radiação). TC se inconclusivo — risco de apendicite > risco de radiação', 'Criança e idoso: apresentação atípica frequente — risco de perfuração maior', 'Alvarado ≤3: baixa suspeita. 4-6: intermediário. ≥7: alta probabilidade'],
            perola: 'Sinal de Rovsing: palpação em FIE causa dor em FID = peritônio em FID irritado. Indica inflamação localizada peritoneal periapendicular.',
            especialidade: 'Cirurgia Geral'
          },
          {
            id: 'hernia-incarcercerada', nome: 'Hérnia Abdominal Encarcerada / Estrangulada', cid: 'K46.0',
            descricao: 'Hérnia encarcerada: conteúdo preso sem retorno espontâneo (irredutível). Estrangulada: comprometimento vascular do conteúdo herniário = isquemia. Emergência cirúrgica.',
            apresentacao: 'Hérnia previamente redutível que se torna irredutível + dor + eritema local. Encarcerada: dor + irredutibilidade. Estrangulada: + febre + leucocitose + sinais de obstrução intestinal + isquemia de alça.',
            criterios: ['Clínico + imagem. Encarcerada: hérnia irredutível + sintomas. Estrangulada: + comprometimento vascular (febre, peritonite, acidose)'],
            exames: ['US da região (hérnia + conteúdo)', 'TC abdome (obstrução, isquemia)', 'Hemograma + lactato + PCR', 'RX abdome em pé (obstrução: níveis hidroaéreos)'],
            tratamento: 'Encarcerada: tentativa de redução manual (taxis) — APENAS se sem sinais de estrangulamento. Estrangulada: cirurgia de urgência. Hérnia inguinal: herniorrafia laparoscópica (TAPP/TEP). Alça isquêmica: ressecção + anastomose. ATB perioperatório.',
            diferenciais: ['Linfadenopatia inguinal', 'Abscesso de parede', 'Lipoma', 'Torção ovariana (feminino)', 'Torção testicular (masculino, hérnia inguinal)'],
            alertas: ['NUNCA tentar reduzir se suspeita de estrangulamento (isquemia, febre, leucocitose, peritonite)', 'Hérnia de Richter: encarceramento de apenas a borda antimesentérica — sintomas de obstrução ausentes, mas isquemia presente', 'Hérnia femoral: mais frequente em mulheres, alto risco de encarceramento — indicação eletiva de reparo'],
            perola: 'Hérnia femoral vs. inguinal: femoral = abaixo do ligamento inguinal + lateral à veia femoral. Menor e mais tracionável = mais propensa ao encarceramento apesar do tamanho pequeno.',
            especialidade: 'Cirurgia Geral'
          },
          {
            id: 'isquemia-mesenterica', nome: 'Isquemia Mesentérica Aguda', cid: 'K55.0',
            descricao: 'Interrupção súbita do fluxo sanguíneo intestinal. Causas: embolia arterial (50%, FA), trombose arterial (20%), vasospasmo (não oclusiva, 20%), trombose venosa (10%). Alta mortalidade sem diagnóstico precoce.',
            apresentacao: 'Dor abdominal intensa súbita "desproporcional ao exame físico" (característica). FA + dor abdominal aguda em idoso = embolia mesentérica. Fase tardia: peritonite + necrose + sepse.',
            criterios: ['TC com contraste (AngioTC de aorta/mesentérica): oclusão vascular + pneumatose intestinal + gás na porta. Angiografia mesentérica: padrão ouro para oclusão.'],
            exames: ['TC abdome com contraste IV urgente (AngioTC)', 'Lactato sérico (elevado = isquemia)', 'Hemograma + coagulograma + ureia + creatinina', 'D-dímero', 'RX abdome (tardio: pneumatose, gás porta)', 'ECG (FA como causa)'],
            tratamento: 'Suporte: hidratação IV + heparina sistêmica (evitar extensão do trombo). Embolectomia cirúrgica (ouro padrão) ou trombólise intra-arterial (endovascular). Ressecção do intestino inviável. Fasciotomia pós-revascularização. Segunda cirurgia em 24-48h (second-look).',
            diferenciais: ['Pancreatite aguda', 'Apendicite', 'Diverticulite', 'Cólica renal', 'Dissecção de aorta abdominal', 'Oclusão intestinal mecânica'],
            alertas: ['"Pain out of proportion" = isquemia mesentérica: dor intensa + exame físico benigno inicialmente — NÃO subestimar', 'Anticoagulação imediata: heparina IV mesmo antes de definir o tipo de oclusão', 'Mortalidade >60% sem tratamento em tempo. Cada hora aumenta a mortalidade'],
            perola: 'FA + idoso + dor abdominal súbita intensa + exame físico "benigno" = embolia mesentérica. TC urgente + cirurgião + heparinização. Não aguardar peritonite para operar.',
            especialidade: 'Cirurgia Vascular/Medicina de Urgência'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 16. GERIATRIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Geriatria',
    icone: '👴',
    sintomas: [
      {
        sintoma: 'Fragilidade e Mobilidade',
        doencas: [
          {
            id: 'sindrome-fragilidade', nome: 'Síndrome da Fragilidade', cid: 'R54',
            descricao: 'Estado de vulnerabilidade fisiológica caracterizado por reserva reduzida e resistência diminuída a estressores. Critérios de Fried: perda de peso não intencional, exaustão autorreferida, baixo nível de atividade física, lentidão da marcha, fraqueza muscular (preensão palmar).',
            apresentacao: 'Idoso com ≥3 critérios de Fried = frágil. 1-2 critérios = pré-frágil. Associado a quedas, hospitalização e mortalidade.',
            criterios: ['Critérios de Fried: perda de peso ≥4,5 kg/ano, exaustão, baixa atividade, lentidão da marcha, fraqueza por dinamometria', '≥3 critérios = frágil; 1-2 = pré-frágil; 0 = robusto'],
            exames: ['Avaliação Geriátrica Ampla (AGA)', 'Teste de velocidade da marcha (normal ≥0,8 m/s)', 'Dinamometria (força de preensão)', 'Mini Avaliação Nutricional (MAN)', 'Exames laboratoriais: hemograma, albumina, vitamina D, TSH'],
            tratamento: 'Exercício multicomponente (aeróbico + resistência + equilíbrio). Suplementação proteica e vitamina D. Revisão de medicamentos. Tratamento de comorbidades.',
            diferenciais: ['Sarcopenia', 'Depressão', 'Hipotireoidismo', 'Anemia', 'Doença de Parkinson'],
            alertas: ['Fragilidade não é envelhecimento normal — é condição tratável e reversível na pré-fragilidade', 'AGA deve incluir: cognição, humor, mobilidade, nutrição, medicamentos, suporte social', 'Idoso frágil tem risco muito aumentado de desfechos adversos em qualquer procedimento'],
            perola: 'Velocity de marcha < 0,8 m/s é o critério mais preditivo de fragilidade e mortalidade no idoso. Teste simples, rápido e de alto valor prognóstico.',
            especialidade: 'Geriatria'
          },
          {
            id: 'sarcopenia', nome: 'Sarcopenia', cid: 'M62.5',
            descricao: 'Síndrome caracterizada por perda progressiva e generalizada de massa muscular esquelética e força, associada a risco de desfechos adversos. Diagnóstico: baixa força + baixa massa ou desempenho muscular reduzido (critérios EWGSOP2).',
            apresentacao: 'Fraqueza muscular (força de preensão < 27 kg homens / < 16 kg mulheres), lentidão da marcha, dificuldade em levantar da cadeira, redução de massa muscular na DEXA.',
            criterios: ['Força muscular reduzida (dinamometria abaixo do ponto de corte)', 'Quantidade/qualidade muscular reduzida (DEXA ou bioimpedância)', 'Desempenho físico reduzido (velocidade de marcha < 0,8 m/s ou SPPB ≤ 8)'],
            exames: ['Dinamometria (força de preensão)', 'DEXA (composição corporal)', 'Bioimpedância', 'Short Physical Performance Battery (SPPB)', 'Teste de caminhada 6 metros'],
            tratamento: 'Exercício resistido (musculação) é o pilar do tratamento. Suplementação proteica (1,2-1,5 g/kg/dia). Vitamina D se deficiente. Tratamento das causas de base.',
            diferenciais: ['Fragilidade (conceitos sobrepostos)', 'Caquexia (perda de peso involuntária em doença crônica)', 'Miopatias inflamatórias', 'Hipotireoidismo'],
            alertas: ['Sarcopenia e obesidade podem coexistir (obesidade sarcopênica) — IMC normal não descarta', 'Cada quilograma de massa muscular perdido aumenta mortalidade independentemente', 'Proteína não deve ser restrita no idoso sem indicação específica (ex: DRC grave)'],
            perola: 'Exercício resistido 2-3×/semana é o único tratamento com evidência robusta para ganho de massa e força muscular em idosos. Nunca é tarde para começar.',
            especialidade: 'Geriatria'
          },
          {
            id: 'quedas-idoso', nome: 'Quedas Recorrentes no Idoso', cid: 'W19',
            descricao: 'Queda = deslocamento não intencional do corpo para nível inferior. Causa frequente de lesões graves, institucionalização e morte em idosos. Multifatorial.',
            apresentacao: 'Idoso com ≥2 quedas em 12 meses ou 1 queda com lesão grave. Fatores intrínsecos (fraqueza, visão, cognição, hipotensão ortostática) e extrínsecos (ambiente).',
            criterios: ['Anamnese detalhada: circunstância, frequência, horário, sintomas associados', 'Exame físico: marcha, equilíbrio (Timed Up and Go test — anormal > 12 segundos)', 'Avaliação do ambiente domiciliar'],
            exames: ['Teste Timed Up and Go (TUG)', 'Revisão de medicamentos (polifarmácia)', 'PA em ortostase (hipotensão ortostática)', 'Acuidade visual', 'ECG (síncope vs queda)'],
            tratamento: 'Exercício multicomponente (equilíbrio + força). Revisão e redução de medicamentos. Adaptação do ambiente. Vitamina D se deficiente. Terapia ocupacional.',
            diferenciais: ['Síncope', 'Epilepsia', 'AIT/AVC', 'Hipotensão ortostática', 'Doença de Parkinson'],
            alertas: ['Perguntar sobre quedas em TODA consulta do idoso (não relatam espontaneamente por medo de institucionalização)', 'BZD, anti-hipertensivos, antidepressivos tricíclicos e anti-histamínicos aumentam risco de quedas', 'TUG > 20 segundos = alto risco de queda e dependência'],
            perola: 'Programa de exercício de Tai Chi reduz incidência de quedas em 55% em idosos da comunidade. Custo-efetividade superior a qualquer medicação.',
            especialidade: 'Geriatria'
          },
          {
            id: 'ulcera-pressao', nome: 'Úlcera por Pressão (Escara)', cid: 'L89',
            descricao: 'Lesão localizada da pele/tecidos subjacentes por pressão, cisalhamento ou fricção. Ocorre em proeminências ósseas. Estágios I-IV + instageable + DTI.',
            apresentacao: 'Estágio I: eritema não branqueável. Estágio II: perda parcial da derme. Estágio III: perda total da pele (até fáscia). Estágio IV: exposição de osso/tendão/músculo.',
            criterios: ['Classificação NPUAP/EPUAP por estágio', 'Escala de Braden para risco (≤18 = risco; <9 = risco muito alto)'],
            exames: ['Avaliação clínica da ferida (tamanho, profundidade, exsudato, odor)', 'Culturas se infecção suspeita', 'Albumina sérica (desnutrição)', 'Hemograma'],
            tratamento: 'Prevenção: alívio da pressão (decúbito cada 2h), cuidados com pele, nutrição adequada. Tratamento: limpeza com SF 0,9%, curativo oclusivo úmido, desbridamento se necrose, antibiótico se infecção, cirurgia em estágio IV.',
            diferenciais: ['Úlcera venosa', 'Úlcera arterial', 'Pé diabético', 'Herpes zoster'],
            alertas: ['Osteomielite deve ser suspeitada em úlcera profunda que não cicatriza — RM para diagnóstico', 'Posição sentada cria pressão isquiática maior que decúbito dorsal — reposicionar frequentemente', 'Prevenção é muito mais eficaz e barata que tratamento'],
            perola: 'Escala de Braden avalia: percepção sensorial, umidade, atividade, mobilidade, nutrição, cisalhamento. Cada ponto a menos = mais risco. Usar em toda internação.',
            especialidade: 'Geriatria/Enfermagem'
          },
          {
            id: 'sindrome-imobilismo', nome: 'Síndrome do Imobilismo', cid: 'M62.3',
            descricao: 'Conjunto de complicações decorrentes da imobilidade prolongada no idoso. Afeta múltiplos sistemas e é causa de morbimortalidade significativa.',
            apresentacao: 'Perda muscular (2-5%/dia de imobilidade), contraturas, osteoporose acelerada, trombose, úlceras, pneumonia aspirativa, constipação, depressão, delirium.',
            criterios: ['Diagnóstico clínico pela história de imobilização + presença de complicações'],
            exames: ['Avaliação funcional completa', 'Densitometria óssea', 'Doppler MMII (TVP)', 'Raio-X tórax (pneumonia)'],
            tratamento: 'Mobilização precoce é a medida mais importante. Fisioterapia motora + respiratória. Terapia ocupacional. Prevenção de úlceras. Profilaxia de TVP. Nutrição adequada.',
            diferenciais: ['Depressão (recusa de mobilização)', 'Dor (causa de imobilidade)', 'Paresia/plegia (neurológica)'],
            alertas: ['Um dia de repouso no leito em idoso = perda de 1-2% de força muscular — mobilizar PRECOCEMENTE', 'Delirium piora muito com imobilismo — ambos se retroalimentam', 'Alta hospitalar sem reabilitação → institucionalização em 30% dos casos'],
            perola: 'Síndrome pós-UTI: 30-50% dos idosos sobreviventes de UTI desenvolvem comprometimento cognitivo e funcional persistente. Reabilitação precoce é fundamental.',
            especialidade: 'Geriatria'
          },
          {
            id: 'osteoporose-senil', nome: 'Osteoporose no Idoso', cid: 'M81',
            descricao: 'Doença esquelética caracterizada por baixa massa óssea e deterioração da microarquitetura, com aumento do risco de fraturas. Tipo I (pós-menopausa) e Tipo II (senil).',
            apresentacao: 'Frequentemente assintomática até a fratura. Fraturas típicas: vértebras, colo femoral, rádio distal, úmero proximal. Perda de altura, cifose torácica (dorso de viúva).',
            criterios: ['Densitometria óssea (DEXA): T-score ≤ -2,5 = osteoporose; -2,5 a -1,0 = osteopenia', 'Fratura por fragilidade independente do T-score'],
            exames: ['DEXA coluna lombar + fêmur proximal', 'FRAX (ferramenta de cálculo de risco de fratura)', 'Ca, P, PTH, 25-OH vitamina D, TSH', 'Marcadores de remodelação (CTX, P1NP)'],
            tratamento: 'Cálcio 1.200 mg/dia + vitamina D 800-2000 UI/dia. Bisfosfonatos (alendronato 70 mg/semana 1ª linha). Denosumabe, teriparatida, romosozumabe em casos selecionados.',
            diferenciais: ['Osteomalácia', 'Mieloma múltiplo', 'Hiperparatireoidismo', 'Osteoporose secundária (corticoide, hipogonadismo)'],
            alertas: ['Osteoporose corticosteróide: risco de fratura começa com dose ≥5 mg/dia de prednisona por ≥3 meses', 'Alendronato: tomar em jejum, permanecer em pé 30 min — osteonecrorse de mandíbula é rara mas grave', 'Fratura de vértebra pode ser assintomática — perda de altura ≥4 cm sugere fratura vertebral'],
            perola: 'Fratura de quadril em idoso tem mortalidade de 20-30% em 1 ano. Em 50% dos sobreviventes, não recuperam mobilidade pré-fratura. Prevenção é custo-efetiva.',
            especialidade: 'Geriatria/Reumatologia'
          },
          {
            id: 'osteoartrite', nome: 'Osteoartrite (Artrose)', cid: 'M15',
            descricao: 'Doença degenerativa das articulações caracterizada por perda de cartilagem, esclerose subcondral e formação de osteófitos. Principal causa de dor crônica e incapacidade no idoso.',
            apresentacao: 'Dor mecânica (piora com uso, melhora com repouso), rigidez matinal < 30 min, crepitação, deformidade articular. Joelhos (gonartrose), quadril (coxartrose), mãos (nódulos de Heberden e Bouchard).',
            criterios: ['ACR 2012: clínica + imagem (Rx: diminuição do espaço articular + osteófitos + esclerose subcondral)'],
            exames: ['Rx articulações comprometidas', 'VHS/PCR (normais ou levemente aumentados)', 'Líquido sinovial: não inflamatório (< 2000 células)'],
            tratamento: 'Não farmacológico: exercício (fortalecimento muscular), perda de peso (reduz carga), fisioterapia, órteses. Farmacológico: paracetamol, AINE tópico/oral, duloxetina. Injeção intra-articular: corticoide (curto prazo), hialuronato. Cirurgia: artroplastia em doença grave.',
            diferenciais: ['Artrite reumatoide (rigidez matinal > 1h, simétrica, FR+)', 'Artrite gotosa', 'Artrite séptica', 'Condrocalcinose'],
            alertas: ['AINE em idoso: risco gastrointestinal, renal e cardiovascular — usar dose mínima e por menor tempo possível', 'Paracetamol preferível a AINE em idosos com comorbidades', 'Injeção de corticoide intra-articular: máximo 3-4× por ano (cartilagem)'],
            perola: 'Exercício aquático (hidroginástica, natação) é excelente para artrose: reduz carga articular e melhora força. Melhor tolerado que exercício em solo.',
            especialidade: 'Reumatologia/Geriatria'
          },
          {
            id: 'polimialgia-reumatica', nome: 'Polimialgia Reumática', cid: 'M35.3',
            descricao: 'Doença inflamatória do idoso (> 50 anos) com dor e rigidez em cinturas escapular e pélvica. Frequentemente associada à arterite de células gigantes (ACG).',
            apresentacao: 'Rigidez matinal > 45 min + dor bilateral nas cinturas (ombros, pescoço, quadril). Início relativamente agudo. VHS > 40 mm/h. Resposta dramática a corticoide (diagnóstico terapêutico).',
            criterios: ['ACR/EULAR 2012: idade ≥50 + dor bilateral nas cinturas + VHS/PCR elevados + pelo menos 1 ponto de score adicional'],
            exames: ['VHS (geralmente > 50-100 mm/h)', 'PCR elevado', 'Hemograma: anemia normocítica leve', 'FA levemente aumentada', 'USG (bursites bilaterais subdeltoidianas/subacromiais)'],
            tratamento: 'Prednisona 12,5-25 mg/dia → redução gradual ao longo de 1-2 anos. Metotrexato como poupador de corticoide em casos recidivantes.',
            diferenciais: ['Arterite de células gigantes (cefaleia + amaurose + artéria temporal)', 'Artrite reumatoide do idoso', 'Mieloma múltiplo', 'Neoplasia', 'Hipotireoidismo'],
            alertas: ['Sempre investigar arterite de células gigantes (biópsia da artéria temporal se sintomas cranianos)', 'Resposta ao corticoide deve ser rápida (24-72h): sem melhora = questionar diagnóstico', 'Risco de recidiva ao reduzir corticoide: reduzir lentamente (2,5 mg/mês)'],
            perola: 'Se PMR + cefaleia temporal + perda visual transitória = arterite de células gigantes. Corticoide em ALTA dose (60 mg/dia) imediatamente para salvar a visão.',
            especialidade: 'Reumatologia/Geriatria'
          },
          {
            id: 'hipotensao-ortostatica', nome: 'Hipotensão Ortostática', cid: 'I95.1',
            descricao: 'Queda de PA ≥20 mmHg sistólica ou ≥10 mmHg diastólica dentro de 3 min após assumir a postura ortostática. Causa importante de tontura, síncope e quedas no idoso.',
            apresentacao: 'Tontura, visão turva, fraqueza e pré-síncope ao levantar. Piora após refeições (hipotensão pós-prandial), ao sol, com exercício.',
            criterios: ['Medição da PA deitado e após 1 e 3 min em pé: queda ≥20/10 mmHg = HO'],
            exames: ['PA ortostática em diferentes momentos', 'ECG (FA, bloqueios)', 'Holter/loop recorder', 'Tilt test em casos selecionados', 'Revisão de medicamentos (causa mais comum)'],
            tratamento: 'Suspender ou reduzir medicamentos causadores (diuréticos, anti-hipertensivos, alfa-bloqueadores, antidepressivos). Medidas não-farmacológicas: meias de compressão, hidratação, levantar devagar, elevar cabeceira. Fludrocortisona ou midodrina em casos refratários.',
            diferenciais: ['Síncope vasovagal', 'Arritmia', 'Desidratação', 'Insuficiência adrenal', 'Disautonomia'],
            alertas: ['Revisão de medicamentos é a primeira medida — mais de 50% dos casos têm causa medicamentosa', 'Medir PA em pé em TODO idoso com queixa de tontura ou queda', 'Anti-hipertensivos agressivos em idoso frequentemente causam HO e quedas'],
            perola: 'A meta de PA no idoso frágil (>80 anos) é PAS 130-150 mmHg — tratar excessivamente causa mais dano que a hipertensão em si.',
            especialidade: 'Geriatria/Cardiologia'
          },
          {
            id: 'fratura-fragilidade', nome: 'Fratura por Fragilidade', cid: 'M84.3',
            descricao: 'Fratura decorrente de trauma mínimo (queda da própria altura ou menor) em portador de osteoporose. Principais sítios: vértebras, colo femoral, rádio distal, úmero proximal.',
            apresentacao: 'Fratura de colo femoral: dor inguinal + rotação externa + encurtamento do MMII. Fratura vertebral: dor lombar aguda após esforço mínimo, perda de altura, cifose progressiva.',
            criterios: ['Diagnóstico clínico + Rx confirmando fratura por mecanismo mínimo', 'Pesquisa de osteoporose pós-fratura (DEXA + lab)'],
            exames: ['Rx da região acometida', 'DEXA (T-score)', 'Ca, P, vitamina D, PTH', 'Proteinograma (descartar mieloma)', 'RM vértebra se suspeita de fratura aguda'],
            tratamento: 'Fratura de colo femoral: cirurgia em < 48h (osteossíntese ou artroplastia). Fratura vertebral: analgesia + colar/colete ortopédico + mobilização precoce + bisfosfonato.',
            diferenciais: ['Fratura traumática', 'Metástase óssea', 'Mieloma múltiplo', 'Osteomielite'],
            alertas: ['Fratura de quadril: cirurgia em < 48h reduz mortalidade em 20-30%', 'Toda fratura por fragilidade indica tratamento de osteoporose (INDEPENDENTE do T-score)', 'Programas de prevenção secundária (FLS — Fracture Liaison Service) reduzem re-fraturas em 40%'],
            perola: '"Treat the hip, treat the bones, treat the falls" — fratura de quadril deve disparar investigação de osteoporose E risco de quedas para prevenir a próxima fratura.',
            especialidade: 'Geriatria/Ortopedia'
          },
        ]
      },
      {
        sintoma: 'Alterações Cognitivas e Neurológicas',
        doencas: [
          {
            id: 'delirium', nome: 'Delirium (Síndrome Confusional Aguda)', cid: 'F05',
            descricao: 'Síndrome neuropsiquiátrica de início agudo com distúrbio de atenção, consciência e cognição. Flutuante, reversível, causa subjacente identificável. Indicador de gravidade sistêmica.',
            apresentacao: 'Início agudo (horas a dias), flutuação, atenção prejudicada. Hiperativo (agitação), hipoativo (letargia — mais comum e frequentemente não diagnosticado) ou misto.',
            criterios: ['CAM (Confusion Assessment Method): início agudo + atenção flutuante + pensamento desorganizado ± alteração de consciência', 'Sensibilidade 94%, especificidade 89%'],
            exames: ['CAM + CAM-ICU (UTI)', 'Hemograma, eletrólitos, ureia, creatinina, glicemia, TFH, TSH', 'Urina tipo I + urocultura', 'Rx tórax, ECG', 'TC crânio se déficit focal ou trauma'],
            tratamento: 'Tratar a CAUSA (infecção, desidratação, dor, retenção urinária, constipação, privação de sono). Medidas não-farmacológicas: reorientação, mobilização, higiene do sono, evitar contenção. Haloperidol em doses baixas SE agitação grave.',
            diferenciais: ['Demência (crônica, sem flutuação aguda)', 'Psicose (sem causa orgânica identificável)', 'Depressão (sem desorientação)', 'AVC (déficit focal)'],
            alertas: ['NUNCA atribuir delirium à "demência" sem investigar causa orgânica', 'BZD pioram o delirium — evitar (exceto em abstinência alcoólica)', 'Delirium hipoativo é frequentemente não diagnosticado e tem pior prognóstico'],
            perola: 'Delirium em idoso hospitalizado aumenta mortalidade em 2-4×, duplica tempo de internação e está associado a declínio cognitivo persistente em 40% dos casos.',
            especialidade: 'Geriatria/Medicina de Urgência'
          },
          {
            id: 'alzheimer', nome: 'Doença de Alzheimer', cid: 'G30',
            descricao: 'Demência degenerativa progressiva. Patologia: placas senis (beta-amiloide) e emaranhados neurofibrilares (tau). Principal causa de demência (60-80%).',
            apresentacao: 'Início insidioso com perda de memória recente (episódica). Progressão: desorientação, afasia, apraxia, agnosia. Fase avançada: total dependência, disfagia, óbito por pneumonia aspirativa.',
            criterios: ['NIA-AA 2011: síndrome clínica de demência (amnésia + outro domínio) + padrão sugestivo de Alzheimer (início insidioso, progressão gradual)'],
            exames: ['Mini-Mental (MEEM), MoCA', 'TC/RM crânio (atrofia hipocampal)', 'PET-FDG (hipometabolismo têmporo-parietal)', 'Biomarcadores LCR (beta-amiloide 42↓, tau total↑)', 'Exclusão de causas tratáveis: TSH, vitamina B12, VDRL, HIV'],
            tratamento: 'Sintomático: inibidores de colinesterase (donepezila, rivastigmina, galantamina) em leve-moderada. Memantina em moderada-grave. Não há tratamento modificador de doença aprovado no Brasil (lecanemab não disponível).',
            diferenciais: ['Demência vascular', 'DCL', 'DFT', 'Depressão (pseudodemência)', 'Hipotireoidismo', 'Deficiência de B12', 'Hidrocefalia de pressão normal'],
            alertas: ['Nunca dizer ao paciente que "tem Alzheimer" sem avaliação completa", diagnosticar causa tratável antes', 'Comunicação do diagnóstico ao paciente e família requer cuidado especial', 'Alucinações visuais proeminentes no início = DCL (não Alzheimer) — EVITAR antipsicóticos'],
            perola: 'Regra dos 3D no idoso com declínio cognitivo: Delirium (agudo, flutuante), Depressão (pseudodemência, anedonia), Demência (crônica, progressiva). Sempre excluir delirium primeiro.',
            especialidade: 'Geriatria/Neurologia'
          },
          {
            id: 'demencia-vascular', nome: 'Demência Vascular', cid: 'F01',
            descricao: 'Segunda causa de demência. Relacionada a lesões cerebrovasculares (AVCs múltiplos, doença de pequenos vasos). Início abrupto, progressão em degraus, flutuação.',
            apresentacao: 'Início abrupto após AVC ou declínio em degraus. Déficits focais associados. Predomínio de déficits executivos e de velocidade de processamento vs memória (diferente do Alzheimer).',
            criterios: ['NINDS-AIREN: demência + doença cerebrovascular documentada + relação temporal entre AVC e início da demência'],
            exames: ['RM crânio (lacunas múltiplas, leucoaraiose, infartos corticais)', 'Perfil de risco cardiovascular: HbA1c, lipídeos, PA', 'Doppler de carótidas', 'Ecocardiograma'],
            tratamento: 'Não há tratamento específico. Controle agressivo de fatores de risco cardiovascular (PA, DM, dislipidemia, tabagismo). AAS se indicado. Inibidores de colinesterase têm evidência limitada.',
            diferenciais: ['Alzheimer (memória episódica proeminente, sem fatores vasculares)', 'Depressão vascular', 'Encefalopatia de Binswanger'],
            alertas: ['Controle de PA no idoso com DV: alvo < 130/80 mmHg, mas cuidado com hipotensão ortostática', 'Progressão em degraus com flutuação = DV até prova em contrário', 'Prevenção secundária de AVC é o tratamento mais eficaz'],
            perola: 'Na prática, demência mista (Alzheimer + vascular) é a forma mais comum encontrada em estudos de autópsia. Tratar os dois componentes.',
            especialidade: 'Geriatria/Neurologia'
          },
          {
            id: 'demencia-corpos-lewy', nome: 'Demência com Corpos de Lewy (DCL)', cid: 'G31.83',
            descricao: 'Terceira causa de demência. Depósitos de alfa-sinucleína (corpos de Lewy) no córtex. Sobreposição com doença de Parkinson.',
            apresentacao: 'Tríade: (1) alucinações visuais complexas e vívidas, (2) parkinsonismo, (3) flutuação cognitiva marcada. Distúrbio comportamental do sono REM (RBD: agir sonhos). Hipersensibilidade a antipsicóticos.',
            criterios: ['McKeith 2017: demência progressiva + ≥2 características essenciais (alucinações visuais + parkinsonismo + flutuação + RBD) OU 1 essencial + 1 biomarcador indicativo'],
            exames: ['SPECT DaTSCAN (redução de dopamina nos gânglios da base)', 'Polissonografia (RBD)', 'EEG (ondas lentas com variações)', 'RM (padrão de atrofia diferente do Alzheimer)'],
            tratamento: 'Inibidores de colinesterase (rivastigmina tem evidência). Levodopa em baixa dose para parkinsonismo. NUNCA antipsicóticos típicos (clorpromazina, haloperidol): reação grave em 50%.',
            diferenciais: ['Doença de Parkinson com demência', 'Alzheimer', 'Psicose funcional (idoso mais jovem)'],
            alertas: ['CONTRAINDICAÇÃO ABSOLUTA de antipsicóticos típicos e de alta potência em DCL — risco de morte', 'Quetiapina em baixa dose é o antipsicótico mais seguro se necessário', 'Alucinações visuais em idoso com demência = pensar em DCL antes de Alzheimer'],
            perola: 'O RBD (distúrbio comportamental do sono REM) pode preceder a demência em 10-15 anos. Quando paciente "encena os sonhos" e bate no parceiro — investigar alfa-sinucleinopatia.',
            especialidade: 'Neurologia/Geriatria'
          },
          {
            id: 'parkinson-idoso', nome: 'Doença de Parkinson', cid: 'G20',
            descricao: 'Doença neurodegenerativa por perda de neurônios dopaminérgicos na substância negra. Segunda doença neurodegenerativa mais comum após Alzheimer.',
            apresentacao: 'Tétrade clássica: tremor de repouso (4-6 Hz, "conta-moedas"), bradicinesia, rigidez (roda dentada), instabilidade postural. Início unilateral e progressão gradual. Sinal de Myerson (não extingue). Micrografia.',
            criterios: ['UK PD Brain Bank: bradicinesia + pelo menos 1 de: rigidez, tremor de repouso 4-6 Hz, instabilidade postural. + pelo menos 3 critérios de suporte + critérios de exclusão negativos'],
            exames: ['Diagnóstico clínico', 'RM crânio (excluir Parkinsonismo secundário)', 'DaTSCAN (reduçao dopamina)', 'Urofluxometria (disfunção autonômica)', 'Avaliação de deglutição'],
            tratamento: 'Levodopa/carbidopa (mais eficaz). Agonistas dopaminérgicos (pramipexol, rotigotina). MAO-B inibidores (rasagilina). Fisioterapia (marcha, equilíbrio). Fonoaudiologia (deglutição, fala). DBS em casos avançados.',
            diferenciais: ['Parkinsonismo vascular', 'DCL', 'PSP (Progressive Supranuclear Palsy)', 'MSA', 'Parkinsonismo induzido por drogas (haloperidol, metoclopramida)'],
            alertas: ['Metoclopramida e domperidona BLOQUEIAM dopamina — pioram parkinsonismo', 'Ortopedia deve ser avisada: Parkinson contraindica certos anestésicos', 'Falls prevention é crucial — risco muito elevado de fratura'],
            perola: 'Parkinson sintomático começa quando 50-70% dos neurônios dopaminérgicos já foram perdidos. Fase pré-motora (anosmia, constipação, RBD) precede em anos.',
            especialidade: 'Neurologia/Geriatria'
          },
          {
            id: 'avc-isquemico-idoso', nome: 'AVC Isquêmico no Idoso', cid: 'I63',
            descricao: 'Interrupção do fluxo sanguíneo cerebral por oclusão arterial. Idosos têm maior prevalência de FA, estenose carotídea e aterotrombose como causas.',
            apresentacao: 'FAST: Face assimétrica, Arm (fraqueza de braço), Speech (dificuldade de fala), Time (tempo é cérebro). Déficits neurológicos focais de início súbito.',
            criterios: ['TC (excluir hemorrágico) + RM DWI (confirmar isquemia aguda)', 'NIHSS para quantificar gravidade'],
            exames: ['TC crânio sem contraste URGENTE', 'RM DWI/FLAIR', 'Angiotomografia (oclusão de grande vaso)', 'ECG + Holter (FA)', 'Ecocardiograma', 'Doppler carótidas'],
            tratamento: 'Trombólise IV (rt-PA 0,9 mg/kg) se < 4,5h e sem contraindicação. Trombectomia mecânica se oclusão de grande vaso até 24h em selecionados. Anticoagulação para FA (após 2 semanas em AVC extenso). Estatina intensiva. Reabilitação precoce.',
            diferenciais: ['AVC hemorrágico', 'AIT', 'Hipoglicemia', 'Crise epiléptica (pós-ictal)', 'Enxaqueca com aura', 'Tumor cerebral'],
            alertas: ['A cada 30 min de atraso, 2 milhões de neurônios morrem — TIME IS BRAIN', 'Não baixar PA na fase aguda do AVCi (exceto PA > 185/110 para rt-PA)', 'AF é a causa cardioembólica mais comum — anticoagulação reduz recorrência em 65%'],
            perola: 'AVC é a principal causa de incapacidade funcional no Brasil. Unidade de AVC reduz mortalidade em 25% e incapacidade em 30% vs enfermaria geral.',
            especialidade: 'Neurologia/Medicina de Urgência'
          },
          {
            id: 'depressao-idoso', nome: 'Depressão no Idoso', cid: 'F32',
            descricao: 'Transtorno depressivo maior no idoso tem apresentação atípica: somatização, hipocondria, pseudodemência. Subdiagnosticada e subtratada. Fator de risco independente para demência.',
            apresentacao: 'Queixas somáticas múltiplas, retraimento social, anorexia, perda de peso. Raramente choro ou tristeza explícita. Pseudodemência depressiva: déficit cognitivo que melhora com antidepressivo.',
            criterios: ['GDS (Geriatric Depression Scale) ≥5/15 = depressão provável', 'DSM-5: ≥5 sintomas × ≥2 semanas'],
            exames: ['GDS-15', 'TSH (hipotireoidismo mimetiza depressão)', 'Vitamina B12', 'Hemograma', 'TC crânio se suspeita de demência'],
            tratamento: 'ISRS de escolha no idoso (sertralina, escitalopram — boa tolerabilidade). Antidepressivos tricíclicos: EVITAR (anticolinérgicos, risco de queda e arritmia). Psicoterapia (TCC). Eletroconvulsoterapia em casos graves refratários.',
            diferenciais: ['Demência (Alzheimer com apatia)', 'Hipotireoidismo', 'Anemia', 'Dor crônica', 'Doença de Parkinson (apatia)'],
            alertas: ['Perguntar diretamente sobre suicídio — idoso masculino com depressão têm alta taxa de suicídio completado', 'EVITAR amitriptilina, imipramina, nortriptilina (Criterios de Beers)', 'Isolamento social é fator de risco independente para depressão e mortalidade no idoso'],
            perola: 'Pseudodemência depressiva: paciente se queixa muito do esquecimento ("não consigo lembrar de nada"), diferente da demência real (nega o problema). Melhora com antidepressivo.',
            especialidade: 'Geriatria/Psiquiatria'
          },
          {
            id: 'insonia-idoso', nome: 'Insônia Crônica no Idoso', cid: 'G47.0',
            descricao: 'Dificuldade de iniciar ou manter o sono, ou sono não reparador, ≥3 noites/semana por ≥3 meses, com impacto diurno. Prevalência de 30-50% em idosos.',
            apresentacao: 'Dificuldade de iniciar o sono, múltiplos despertares noturnos, despertar precoce. Sonolência diurna, irritabilidade, deficit cognitivo. Idosos têm sono menos profundo e mais fragmentado como parte do envelhecimento normal.',
            criterios: ['Critérios DSM-5 + impacto no funcionamento diurno', 'Polissonografia se suspeita de SAOS ou síndrome das pernas inquietas'],
            exames: ['Agenda do sono (2 semanas)', 'Polissonografia se indicada', 'TSH, hemograma (excluir causas médicas)', 'GDS (depressão como causa)'],
            tratamento: 'TCC-I (Terapia Cognitivo-Comportamental para Insônia) é o TRATAMENTO DE PRIMEIRA LINHA. Higiene do sono. Terapia de restrição do sono. EVITAR BZD e Z-drugs (risco de quedas, dependência, delirium). Melatonina ou mirtazapina em baixa dose como alternativas.',
            diferenciais: ['SAOS (ronco, apneias, sonolência diurna)', 'Síndrome das pernas inquietas', 'Depressão', 'Dor crônica', 'Noctúria'],
            alertas: ['BZD e "Z-drugs" (zolpidem, zopiclona) são especialmente PERIGOSOS no idoso: critérios de Beers os contraindicam', 'Dipirona sedativa e anti-histamínicos: efeito anticolinérgico — confusão, retenção urinária, quedas', 'Sonolência diurna excessiva em idoso = investigar SAOS'],
            perola: 'TCC-I tem eficácia igual ao zolpidem a curto prazo e SUPERIOR a longo prazo, sem efeitos adversos. Modalidade presencial, digital ou guiada por terapeuta.',
            especialidade: 'Geriatria/Psiquiatria'
          },
          {
            id: 'epilepsia-idoso', nome: 'Epilepsia de Início Tardio', cid: 'G40',
            descricao: 'Nova epilepsia após os 60 anos. Causas: AVC (mais comum), tumor, trauma craniano, demência, distúrbios metabólicos. Apresentação frequentemente atípica.',
            apresentacao: 'Crise focal com generalização secundária é a mais comum. Crises não convulsivas frequentes — estado de mal epiléptico não convulsivo pode mimetizar delirium.',
            criterios: ['Diagnóstico clínico + EEG', 'RM crânio (investigar causa estrutural)'],
            exames: ['EEG (urgente se suspeita de EMNC)', 'RM crânio', 'Eletrólitos, glicemia, Ca, Mg (causas metabólicas)', 'TC crânio (urgência)', 'Nível sérico de antiepiléptico se em uso'],
            tratamento: 'Tratar causa de base. Antiepiléptico (lamotrigina e levetiracetam preferidos no idoso — menor interação medicamentosa). Evitar fenitoína (interações + efeitos adversos). Valproato com cautela (hepatotoxicidade).',
            diferenciais: ['Síncope (sem confusão pós-ictal)', 'AIT (< 24h, déficit focal)', 'Delirium', 'AVC', 'Hipoglicemia'],
            alertas: ['Não diagnosticar epilepsia sem EEG — síncope e AIT são os diagnósticos diferenciais mais importantes', 'Fenitoína: interações farmacocinéticas múltiplas e fenômenos atáxicos no idoso — evitar', 'Estado de mal não convulsivo: pode ser a causa de "delirium" refratário'],
            perola: 'Epilepsia de início tardio exige investigação de causa estrutural (RM + angiografia se necessário). AVC é a causa em 50% dos casos.',
            especialidade: 'Neurologia/Geriatria'
          },
          {
            id: 'polifarmacia', nome: 'Polifarmácia e Prescrição Inapropriada no Idoso', cid: 'Z79',
            descricao: 'Uso concomitante de ≥5 medicamentos. Prevalente em idosos com múltiplas comorbidades. Causa de interações, reações adversas, quedas, delirium e hospitalização.',
            apresentacao: 'Tontura, confusão, quedas, retenção urinária, constipação, hipotensão — frequentemente atribuídos a "envelhecimento" mas são reações medicamentosas.',
            criterios: ['Critérios de Beers (AGS): lista de medicamentos potencialmente inapropriados para ≥65 anos', 'Critérios STOPP/START (europeus): medicamentos a evitar e a iniciar'],
            exames: ['Revisão sistemática de todos os medicamentos (conciliação medicamentosa)', 'Dosagem sérica de medicamentos de janela terapêutica estreita (digoxina, fenitoína, lítio)'],
            tratamento: 'Deprescribing (retirada deliberada e supervisionada): identificar medicamentos sem indicação, duplicidades, interações. Reavaliação periódica. Educação do paciente.',
            diferenciais: ['Doença nova vs reação adversa a medicamento', 'Sempre suspeitar de RAM em qualquer sintoma novo no idoso polifarmacológico'],
            alertas: ['TODA nova queixa no idoso polifarmacológico pode ser reação adversa a medicamento', 'BZD, anticolinérgicos, AINEs, opióides: alto risco no idoso — Critérios de Beers', 'Digoxina: toxicidade pode ocorrer mesmo com nível sérico "normal" em idoso (menor volume de distribuição)'],
            perola: 'A cada medicamento novo no idoso: "Qual o objetivo? Qual o benefício esperado? Qual o risco? Posso retirar algo?" — Medicina geriátrica é também a arte de NÃO prescrever.',
            especialidade: 'Geriatria/Farmacologia'
          },
        ]
      },
      {
        sintoma: 'Incontinência e Disfunção Pélvica',
        doencas: [
          {
            id: 'incontinencia-urinaria', nome: 'Incontinência Urinária no Idoso', cid: 'R32',
            descricao: 'Perda involuntária de urina. Tipos: urgência (bexiga hiperativa), esforço (assoalho pélvico), mista, transbordamento, funcional. Afeta 30-50% das mulheres idosas e 15-30% dos homens.',
            apresentacao: 'Urgência: escapes com urgência miccional. Esforço: escapes ao tossir, espirrar, exercício. Transbordamento: escapes frequentes + bexiga palpável (HBP ou bexiga neurogênica).',
            criterios: ['Anamnese: tipo, frequência, volume, gatilhos', 'Diário miccional por 3 dias', 'Exame físico pélvico', 'Urinálise (excluir ITU)'],
            exames: ['Urina tipo I + urocultura', 'Resíduo pós-miccional (ultrassom)', 'Urodinâmica em casos complexos', 'PSA se HBP suspeita'],
            tratamento: 'Urgência: treinamento vesical + antimuscarínicos (oxibutinina — cuidado com anticolinérgico no idoso) ou mirabegron. Esforço: fisioterapia do assoalho pélvico (Kegel) ± cirurgia. Transbordamento: tratar causa (HBP → alfa-bloqueador ou cirurgia).',
            diferenciais: ['ITU (urgência aguda)', 'Vaginite atrófica (irritação vulvar)', 'Fístula vesicovaginal', 'Tumor vesical', 'Estenose uretral'],
            alertas: ['Anticolinérgicos para IU de urgência pioram cognição em idosos com demência — preferir mirabegron', 'Incontinência não é "normal" do envelhecimento — tratar sempre que incomoda', 'Hematúria + IU urgência = investigar tumor vesical'],
            perola: 'IU é causa de depressão, isolamento social, infecções cutâneas e quedas no idoso. Abordar ativamente — paciente raramente relata espontaneamente por vergonha.',
            especialidade: 'Geriatria/Urologia'
          },
          {
            id: 'disfagia-idoso', nome: 'Disfagia no Idoso', cid: 'R13',
            descricao: 'Dificuldade de deglutição. Causa de desnutrição e pneumonia aspirativa. Prevalente em idosos com AVC, demência, doença de Parkinson e doenças neuromusculares.',
            apresentacao: 'Tosse durante ou após a alimentação, engasgos, voz "molhada", sensação de parada do alimento. Pneumonias de repetição em lobo inferior direito.',
            criterios: ['EAD (Eating Assessment Tool — EAT-10 ≥3 = disfagia)', 'Teste de deglutição clínico (fonoaudiologia)', 'Videodeglutograma (padrão ouro)'],
            exames: ['Videodeglutograma (confirma aspiração e tipo de disfagia)', 'Rx tórax (pneumonia aspirativa)', 'TC crânio (causa neurológica)', 'Endoscopia digestiva (causas esofágicas)'],
            tratamento: 'Fonoterapia (manobras de deglutição, adaptação da consistência — dieta pastosa/líquida espessada). Nutrição enteral se aspiração grave. Tratamento da causa de base.',
            diferenciais: ['Acalásia', 'Câncer de esôfago', 'Esôfago de Barrett', 'Globus faríngeo (sem disfagia real)'],
            alertas: ['Pneumonias de repetição em idoso = investigar aspiração silente (sem tosse)', 'Idoso com AVC: fonoaudiologia antes de qualquer dieta oral', 'Engrossante de liquidos: indicar o grau correto (IDDSI)'],
            perola: 'Aspiração silente (sem tosse) ocorre em 40% dos idosos com disfagia pós-AVC. O videodeglutograma é o único exame que a detecta com segurança.',
            especialidade: 'Fonoaudiologia/Geriatria'
          },
          {
            id: 'desnutricao-idoso', nome: 'Desnutrição e Caquexia no Idoso', cid: 'E46',
            descricao: 'Desnutrição: déficit de macro e/ou micronutrientes. Caquexia: perda de massa muscular e gordura associada a doença crônica com inflamação. Ambas aumentam mortalidade.',
            apresentacao: 'Perda de peso involuntária > 5% em 3 meses ou > 10% em 6 meses. Redução do apetite, fadiga, perda de força. IMC < 22 kg/m² é considerado baixo para idosos.',
            criterios: ['GLIM 2018: ≥1 critério fenotípico (perda de peso, IMC, massa muscular) + ≥1 critério etiológico (ingestão reduzida, inflamação/doença)'],
            exames: ['Mini Avaliação Nutricional (MAN)', 'Albumina (< 3,5 g/dL), pré-albumina (mais sensível)', 'Contagem total de linfócitos', 'Vitamina D, B12, zinco, ferro'],
            tratamento: 'Suplementação oral hipercalórica e hiperproteica (proteína 1,2-1,5 g/kg/dia). Tratar causas (depressão, disfagia, medicamentos). Suporte nutricional enteral se ingestão oral insuficiente. Nutrição parenteral raramente indicada.',
            diferenciais: ['Câncer oculto', 'Depressão', 'Disfagia', 'Doença intestinal (DII, doença celíaca)', 'Hipotireoidismo'],
            alertas: ['Perda de peso ≥5% em 3 meses em idoso = investigar câncer, depressão e disfagia', 'Síndrome de realimentação: risco de hipofosfatemia grave ao realimentar desnutrido grave — monitorar P, Mg, K', 'Albumina baixa é preditor independente de mortalidade e complicações pós-cirúrgicas'],
            perola: '"Anorexia do envelhecimento" é real mas sempre investigar: depressão, disfagia, polifarmácia, dentição ruim, isolamento social — todas causas tratáveis.',
            especialidade: 'Geriatria/Nutrição'
          },
          {
            id: 'maus-tratos-idoso', nome: 'Maus-tratos ao Idoso', cid: 'T74.1',
            descricao: 'Qualquer ação ou omissão intencional que cause dano a idoso. Tipos: físico, psicológico, sexual, financeiro, negligência. Prevalência subestimada: 10-15% dos idosos sofrem alguma forma.',
            apresentacao: 'Lesões em locais incomuns, hematomas em diferentes estágios, desnutrição, higiene precária, medo ao examinar na presença do cuidador, relato inconsistente com os achados.',
            criterios: ['Avaliação clínica sistematizada', 'Escala de Avaliação de Maus-tratos (EMS)', 'Notificação compulsória obrigatória'],
            exames: ['Documentação fotográfica das lesões', 'Rx esqueleto se lesões múltiplas', 'Hemograma, coagulograma (para diferenciar hematomas)', 'Avaliação cognitiva (idoso com demência é mais vulnerável)'],
            tratamento: 'Notificação compulsória ao Conselho do Idoso + SINAN. Avaliação do local de moradia. Afastamento do agressor se necessário. Assistência social. Orientação jurídica (Lei do Idoso — 10.741/2003).',
            diferenciais: ['Osteoporose com fraturas espontâneas', 'Coagulopatia', 'Quedas acidentais'],
            alertas: ['Estatuto do Idoso (Lei 10.741/2003): maus-tratos ao idoso são crime', 'Médico que não notifica comete infração — dever legal e ético', 'Cuidador com sobrecarga (Burnout do cuidador) é fator de risco para maus-tratos — intervir antes'],
            perola: '"Elder abuse" é mais frequente por FAMILIAR PRÓXIMO (cônjuge, filhos) do que por estranhos. Dependência financeira e cognitiva do idoso são os principais fatores de risco.',
            especialidade: 'Geriatria/Assistência Social'
          },
          {
            id: 'hbp-benigna', nome: 'Hiperplasia Prostática Benigna (HPB)', cid: 'N40',
            descricao: 'Crescimento benigno da próstata que causa obstrução infravesical. Presente histologicamente em 80% dos homens com 80 anos.',
            apresentacao: 'Sintomas obstrutivos (jato fraco, hesitância, esvaziamento incompleto) e irritativos (urgência, noctúria, polaciúria). Pontuação pelo IPSS (International Prostate Symptom Score).',
            criterios: ['IPSS ≥8 + exame retal + PSA + urofluxometria', 'IPSS: 0-7 leve, 8-19 moderado, 20-35 grave'],
            exames: ['PSA (descartar câncer de próstata)', 'Urofluxometria (fluxo < 15 mL/s = sugestivo)', 'Resíduo pós-miccional (ultrassom)', 'Ureia e creatinina (uropatia obstrutiva)', 'Urina tipo I'],
            tratamento: 'Leve (IPSS ≤7): watchful waiting. Moderado-grave: alfa-bloqueador (tansulosina, alfuzosina) + inibidor 5-alfa-redutase (finasterida) se próstata grande. Cirurgia (RTUP) se refratário, hematúria, ITU recorrente, hidronefrose.',
            diferenciais: ['Câncer de próstata', 'Estenose uretral', 'Bexiga neurogênica', 'Infecção urinária'],
            alertas: ['Alfa-bloqueadores causam hipotensão ortostática — risco de quedas no idoso', 'Retenção urinária aguda: sondar com urgência (cateter de Foley) + urologia', 'PSA elevado pode ser HPB, prostatite ou câncer — sempre investigar'],
            perola: 'Tansulosina (alfa-1 seletivo para próstata) tem menos hipotensão sistêmica que doxazosina. Preferível em idoso com hipotensão ortostática.',
            especialidade: 'Urologia/Geriatria'
          },
          {
            id: 'cataratas', nome: 'Catarata', cid: 'H26',
            descricao: 'Opacidade do cristalino, principal causa de cegueira reversível no mundo. Relacionada ao envelhecimento (senil), DM, corticoide, trauma e UV.',
            apresentacao: 'Visão turva progressiva, sensibilidade aumentada ao brilho (glare), diplopia monocular, halos ao redor das luzes. Exame: reflexo vermelho diminuído ou ausente.',
            criterios: ['Exame oftalmológico: lâmpada de fenda', 'Acuidade visual: MAVC < 20/40 geralmente indica cirurgia'],
            exames: ['Acuidade visual com correção (MAVC)', 'Biomicroscopia (lâmpada de fenda)', 'Pressão intraocular (glaucoma associado)', 'Ecobiometria pré-operatória'],
            tratamento: 'Cirúrgico: facoemulsificação + lente intraocular (LIO). Indicação: acuidade visual comprometida com impacto na QV. Não há tratamento clínico eficaz.',
            diferenciais: ['Glaucoma (campo visual)', 'Degeneração macular (visão central)', 'Retinopatia diabética', 'Uveíte'],
            alertas: ['DM aumenta risco de edema macular pós-cirúrgico — controle glicêmico pré-op', 'Anticoagulantes e AAS geralmente mantidos (risco cirúrgico baixo)', 'Não atrasar cirurgia: catarata causa quedas, depressão e isolamento'],
            perola: 'Facoemulsificação ambulatorial dura ~15 minutos e tem taxa de sucesso > 98%. É uma das cirurgias com melhor custo-benefício em medicina. Recuperação rápida.',
            especialidade: 'Oftalmologia'
          },
          {
            id: 'dmri', nome: 'Degeneração Macular Relacionada à Idade (DMRI)', cid: 'H35.3',
            descricao: 'Principal causa de perda visual irreversível em maiores de 50 anos nos países desenvolvidos. Afeta mácula (visão central). Forma seca (80%) e úmida/exsudativa (20%, mais grave).',
            apresentacao: 'Perda central de visão (escotoma central), metamorfopsia (distorção — retas parecem curvas, Amsler grid alterada). Visão periférica preservada.',
            criterios: ['Fundoscopia: drusas, atrofia macular, neovascularização', 'Retinografia + OCT (tomografia de coerência óptica)'],
            exames: ['Teste de Amsler (metamorfopsia)', 'OCT macular (padrão ouro — neovascularização subretiniana)', 'Angiofluoresceinografia (forma úmida)'],
            tratamento: 'Seca: suplementação AREDS2 (vitamina C, E, zinco, luteína, zeaxantina) retarda progressão. Úmida: anti-VEGF intravítreo (bevacizumabe, ranibizumabe, aflibercept) — tratamento mais eficaz para estabilizar ou melhorar visão.',
            diferenciais: ['Maculopatia diabética', 'Membrana epirretiniana', 'Buraco macular', 'Retinopatia por cloroquina'],
            alertas: ['Anti-VEGF deve ser iniciado PRECOCEMENTE na DMRI úmida — cada injeção atrasada aumenta perda visual permanente', 'Paciente com DMRI: baixa visão não é cegueira — adaptar ambiente e usar auxílios ópticos', 'Tabagismo é o fator de risco modificável mais importante para DMRI'],
            perola: 'Teste de Amsler em casa: paciente tapa 1 olho, olha para ponto central da grade. Se linhas aparecerem tortas ou área escura — agendar oftalmologia urgente (DMRI úmida).',
            especialidade: 'Oftalmologia'
          },
          {
            id: 'presbiacusia', nome: 'Presbiacusia', cid: 'H91.1',
            descricao: 'Perda auditiva neurossensorial bilateral simétrica relacionada ao envelhecimento. Afeta frequências altas inicialmente. Presente em 25% dos 65-74 anos e 50% dos > 75 anos.',
            apresentacao: 'Dificuldade de entender fala em ambientes ruidosos, pedir repetição frequentemente, aumento do volume TV. Bilateral, simétrica, progressiva, sem dor ou zumbido significativo.',
            criterios: ['Audiometria tonal: perda neurossensorial descendente (frequências altas)'],
            exames: ['Otoscopia (excluir rolha de cerume)', 'Audiometria tonal e vocal', 'Logoaudiometria', 'Imitanciometria'],
            tratamento: 'Aparelho de Amplificação Sonora Individual (AASI) — principal tratamento. Implante coclear em perdas severas/profundas. Reabilitação audiológica. Comunicação adaptada.',
            diferenciais: ['Otosclerose', 'Neurinoma do acústico (unilateral)', 'Trauma acústico (ocupacional)', 'Ototoxicidade (aminoglicosídeos, cisplatina)'],
            alertas: ['Presbiacusia está associada a declínio cognitivo acelerado — tratar ativamente', 'AASI no SUS: idoso tem direito via lei. Encaminhar para CER (Centro de Especialidades)', 'Comunicar-se com o presbiacúsico: falar de frente, lentamente, não gritar'],
            perola: 'Cada 10 dB de perda auditiva aumenta o risco de demência em 20%. AASI reduz esse risco. A audição é um sentido frequentemente negligenciado no envelhecimento.',
            especialidade: 'Otorrinolaringologia/Geriatria'
          },
        ]
      },
      {
        sintoma: 'Cardiovascular e Respiratório no Idoso',
        doencas: [
          {
            id: 'hfpef', nome: 'Insuficiência Cardíaca com FE Preservada (HFpEF)', cid: 'I50.3',
            descricao: 'IC com fração de ejeção ≥50%, predominante em mulheres idosas, obesas, hipertensas e diabéticas. Disfunção diastólica. Representa 50% dos casos de IC.',
            apresentacao: 'Dispneia aos esforços, ortopneia, edema de MMII. FE normal no ecocardiograma. BNP/NT-proBNP elevados. Difícil distinção clínica da IC sistólica.',
            criterios: ['FE ≥ 50% + evidência de disfunção diastólica + BNP/NT-proBNP elevados'],
            exames: ['Ecocardiograma com doppler tecidual', 'BNP/NT-proBNP', 'Rx tórax', 'ECG', 'Holter (FA frequente)'],
            tratamento: 'Controle de fatores de risco (PA, peso, DM). Diurético para congestão. SGLT2 (empagliflozina, dapagliflozina) reduziram hospitalização. Reabilitação cardíaca.',
            diferenciais: ['IC sistólica (FE < 40%)', 'DPOC (dispneia)', 'TEP', 'Hipertensão pulmonar'],
            alertas: ['BNP pode ser falsamente baixo na HFpEF obesa', 'Diurético com cautela — risco de hipotensão e piora renal no idoso', 'SGLT2 são o primeiro tratamento a reduzir hospitalização na HFpEF'],
            perola: 'SGLT2 inibidores (empagliflozina, dapagliflozina) são o primeiro tratamento a reduzir hospitalização na HFpEF. Aprovados para essa indicação após 2021.',
            especialidade: 'Cardiologia/Geriatria'
          },
          {
            id: 'fa-idoso', nome: 'Fibrilação Atrial no Idoso', cid: 'I48',
            descricao: 'Arritmia supraventricular mais comum no idoso. Prevalência de 10% acima dos 80 anos. Principal fator de risco para AVC cardioembólico (risco 5× maior).',
            apresentacao: 'Frequentemente assintomática. Sintomas: palpitação, dispneia, fadiga. Pulso irregularmente irregular. Deficit de pulso.',
            criterios: ['ECG: ausência de onda P + intervalos RR irregulares'],
            exames: ['ECG', 'Holter (FA paroxística)', 'Ecocardiograma', 'TSH', 'Escore CHA₂DS₂-VASc'],
            tratamento: 'Anticoagulação: CHA₂DS₂-VASc ≥2 = anticoagular (DOAC preferível a warfarina). Controle de frequência: betabloqueador ou diltiazem.',
            diferenciais: ['Flutter atrial', 'Extrassístoles frequentes', 'Taquicardia atrial multifocal'],
            alertas: ['Nunca usar aspirina no lugar de anticoagulante para prevenção de AVC na FA', 'Warfarina: INR lábil e interações múltiplas — preferir DOAC', 'CHA₂DS₂-VASc ≥2 = anticoagular independente da idade isolada'],
            perola: 'CHA₂DS₂-VASc: CHF, HAS, Idade≥75 (2pts), DM, AVC prévio (2pts), Doença Vascular, Idade 65-74, Sexo feminino. ≥2 pontos = anticoagular.',
            especialidade: 'Cardiologia/Geriatria'
          },
          {
            id: 'estenose-aortica', nome: 'Estenose Aórtica no Idoso', cid: 'I35.0',
            descricao: 'Degeneração calcificante da valva aórtica. Principal doença valvar no idoso. Quando sintomática, sobrevida média sem tratamento: 2-3 anos.',
            apresentacao: 'Tríade: angina, síncope, dispneia (IC). Sopro sistólico ejetivo em foco aórtico irradiando para carótidas. Pulso parvus et tardus.',
            criterios: ['Ecocardiograma: área valvar < 1,0 cm² (grave) + gradiente médio > 40 mmHg + velocidade máxima > 4 m/s'],
            exames: ['Ecocardiograma Doppler', 'Cateterismo cardíaco', 'TC multicorte (planejamento TAVI)'],
            tratamento: 'Sintomática grave: cirurgia (SAVR) ou TAVI em pacientes de alto risco cirúrgico. Assintomática com FE normal: seguimento com eco anual.',
            diferenciais: ['Cardiomiopatia hipertrófica obstrutiva', 'Esclerose aórtica (sem gradiente)', 'Estenose pulmonar'],
            alertas: ['Síncope com sopro sistólico = investigar EA grave', 'Vasodilatadores contraindicados na EA grave sintomática (hipotensão)', 'TAVI expandiu indicações para pacientes antes inoperáveis'],
            perola: 'Quando EA "cansa o coração" (síncope), sobrevida sem cirurgia é 2-3 anos. O sopro pode desaparecer na EA muito grave (baixo fluxo).',
            especialidade: 'Cardiologia'
          },
          {
            id: 'sincope-idoso', nome: 'Síncope no Idoso', cid: 'R55',
            descricao: 'Perda transitória de consciência por hipoperfusão cerebral. Causas: reflexa (vasovagal), ortostática, cardíaca. No idoso, causas ortostática e cardíaca são mais frequentes.',
            apresentacao: 'Perda súbita de consciência com queda. Pródromo (sudorese, palidez) sugere vasovagal. Sem pródromo = cardíaca.',
            criterios: ['Avaliação inicial: ECG, PA ortostática, anamnese detalhada'],
            exames: ['ECG', 'Holter ou monitor de eventos', 'PA ortostática', 'Ecocardiograma se suspeita cardíaca'],
            tratamento: 'Vasovagal: manobras físicas, hidratação. Ortostática: revisar medicamentos, meias de compressão. Cardíaca: tratar arritmia.',
            diferenciais: ['Epilepsia', 'Hipoglicemia', 'AIT', 'Queda mecânica'],
            alertas: ['Síncope de esforço = avaliar estenose aórtica e miocardiopatia hipertrófica', 'ECG com QT longo ou bloqueio bifascicular = alto risco cardíaco', 'Síncope + fraturas = risco de vida — prevenir recorrência'],
            perola: 'No idoso, síncope vasovagal clássica é menos frequente. Sempre investigar causa ortostática (medicamentos) e cardíaca antes de classificar como vasovagal.',
            especialidade: 'Cardiologia/Geriatria'
          },
          {
            id: 'pneumonia-aspirativa', nome: 'Pneumonia Aspirativa', cid: 'J69.0',
            descricao: 'Pneumonia por aspiração de conteúdo orofaríngeo. Predominante em idosos com disfagia, AVC, demência ou rebaixamento de consciência.',
            apresentacao: 'Quadro de pneumonia com predomínio em lobos inferiores (LID). No idoso: pode ser insidiosa com apenas declínio funcional.',
            criterios: ['Clínica + fator predisponente + Rx com consolidação em lobo inferior'],
            exames: ['Rx tórax', 'TC tórax', 'Escarro + hemocultura', 'Avaliação de deglutição'],
            tratamento: 'Antibiótico cobrindo anaeróbios: amoxicilina-clavulanato ou ceftriaxona + metronidazol. Cabeceira elevada 30-45°. Avaliação da disfagia.',
            diferenciais: ['Pneumonia comunitária', 'Abscesso pulmonar', 'Neoplasia com pneumonia obstrutiva'],
            alertas: ['Higiene oral rigorosa reduz pneumonia aspirativa em 40%', 'Sonda nasogástrica NÃO previne aspiração', 'Cabeceira 30-45° durante e após alimentação é obrigatória'],
            perola: 'Pneumonia no LID em idoso acamado = aspirativa até prova em contrário. Anaeróbios da orofaringe são os mais frequentes.',
            especialidade: 'Geriatria/Infectologia'
          },
          {
            id: 'itu-recorrente-idoso', nome: 'ITU Recorrente no Idoso', cid: 'N39.0',
            descricao: '≥3 episódios em 12 meses. Mais frequente em mulheres idosas. Bacteriúria assintomática é comum e NÃO requer tratamento.',
            apresentacao: 'Disúria, polaciúria. No idoso: frequentemente apresenta delirium, queda ou piora funcional SEM sintomas urinários típicos.',
            criterios: ['Urina tipo I + urocultura (> 100.000 UFC/mL) com SINTOMAS'],
            exames: ['Urina tipo I + urocultura e antibiograma', 'USG vias urinárias', 'Urodinâmica se incontinência associada'],
            tratamento: 'Tratar episódio agudo conforme antibiograma (5-7 dias). Profilaxia: estrógeno vaginal, antibiótico em dose baixa, vacina para E. coli.',
            diferenciais: ['Bacteriúria assintomática (NÃO tratar)', 'Vaginite atrófica', 'Urolitíase'],
            alertas: ['Bacteriúria assintomática em idoso: NÃO TRATAR — gera resistência sem benefício', 'Delirium em idoso sem causa óbvia = coletar urina', 'Estrógeno vaginal local é seguro mesmo com histórico de CA de mama'],
            perola: 'Bacteriúria assintomática em idosas: prevalência 20-50%. Tratar APENAS se sintomas presentes. Antibiótico desnecessário cria resistência sem benefício.',
            especialidade: 'Geriatria/Urologia'
          },
          {
            id: 'anemia-idoso', nome: 'Anemia no Idoso', cid: 'D64.9',
            descricao: 'Hb < 13 g/dL em homens e < 12 g/dL em mulheres. Prevalência de 10-20% na comunidade e 40-60% em hospitalizados. Causas: ferropriva, doença crônica, deficiência de B12.',
            apresentacao: 'Fadiga, dispneia, tontura, palidez, piora de IC e angina. Frequentemente atribuída ao envelhecimento.',
            criterios: ['Hemograma + reticulócitos + VCM (microcítica = ferropriva; macrocítica = B12/folato; normocítica = doença crônica)'],
            exames: ['Hemograma + reticulócitos', 'Ferro sérico, ferritina, TIBC', 'B12, folato', 'TSH', 'Pesquisa de sangue oculto'],
            tratamento: 'Ferropriva: sulfato ferroso + investigar sangramento (colonoscopia). B12: cianocobalamina IM. Transfusão: Hb < 7 ou < 8 com sintomas cardiovasculares.',
            diferenciais: ['Mielodisplasia', 'Mieloma múltiplo', 'Leucemia'],
            alertas: ['Anemia ferropriva em idoso = investigar sangramento oculto (colonoscopia)', 'Não transfundir liberalmente — alvo Hb 7-8 g/dL em estável', 'Anemia normocítica grave em idoso = excluir mielodisplasia'],
            perola: 'Anemia no idoso sempre tem causa tratável. Hemograma + ferro/ferritina + B12 + TSH. Anemia corrigida melhora cognição, força e qualidade de vida.',
            especialidade: 'Geriatria/Hematologia'
          },
        ]
      },
      {
        sintoma: 'Metabólico e Dor Crônica no Idoso',
        doencas: [
          {
            id: 'dm-idoso', nome: 'Diabetes no Idoso', cid: 'E11',
            descricao: 'DM2 no idoso exige metas glicêmicas individualizadas. Hipoglicemia é mais perigosa que hiperglicemia moderada no idoso frágil.',
            apresentacao: 'Frequentemente assintomático. SHHNC (Síndrome Hiperglicêmica Hiperosmolar Não Cetótica) é emergência típica do idoso.',
            criterios: ['Glicemia jejum ≥ 126 mg/dL × 2 vezes OU HbA1c ≥ 6,5%'],
            exames: ['Glicemia jejum', 'HbA1c', 'TFG', 'Microalbuminúria', 'Fundo de olho'],
            tratamento: 'Metas: HbA1c 7-7,5% (saudável), 7,5-8% (múltiplas comorbidades), 8-8,5% (frágil). Metformina 1ª linha. SGLT2/GLP1 reduzem eventos CV. Evitar sulfonilureias (hipoglicemia).',
            diferenciais: ['LADA (DM1 tardio)', 'Hiperglicemia por corticoide', 'Hemocromatose'],
            alertas: ['HbA1c < 6,5% em idoso frágil = hipoglicemias perigosas', 'Sulfonilureias em idoso = alto risco de hipoglicemia — evitar', 'SHHNC: osmolaridade > 320 + glicemia > 600 sem cetose — repor volume lentamente'],
            perola: 'Em idosos frágeis com demência, evitar hipoglicemia é prioridade. Meta HbA1c 8-8,5% é aceitável e segura nesse contexto.',
            especialidade: 'Endocrinologia/Geriatria'
          },
          {
            id: 'dor-cronica-idoso', nome: 'Dor Crônica no Idoso', cid: 'R52',
            descricao: 'Dor persistente > 3 meses. Prevalência de 50-80% em idosos. Causas: osteoartrite, neuropatia, dor lombar. Subdiagnosticada e subtratada.',
            apresentacao: 'Dor articular, lombar, neuropática. Frequentemente acompanhada de depressão, insônia e redução de mobilidade.',
            criterios: ['Avaliação por EVA, escala de faces, PAINAD (para pacientes com demência)'],
            exames: ['Avaliação funcional e de qualidade de vida', 'Investigação etiológica conforme localização'],
            tratamento: 'Não-farmacológico: fisioterapia, exercício, TCC para dor. Farmacológico: paracetamol (1ª linha), duloxetina/gabapentina (neuropática). Opióide: cautela, dose mínima.',
            diferenciais: ['Depressão (amplifica dor)', 'Somatização', 'Dor oncológica'],
            alertas: ['AINE prolongado em idoso: risco gastrointestinal e renal — usar com proteção', 'Opióide em idoso: sempre prescrever laxativo junto (constipação intensa)', 'PAINAD: escala para dor em demente não-verbal'],
            perola: 'Idoso com demência frequentemente não verbaliza dor. Agitação e recusa de cuidados pode ser dor não tratada. Tentar paracetamol regular pode resolver comportamentos difíceis.',
            especialidade: 'Geriatria/Medicina da Dor'
          },
          {
            id: 'constipacao-idoso', nome: 'Constipação Crônica no Idoso', cid: 'K59.0',
            descricao: 'Prevalência de 30-40% em idosos. Causas: dieta pobre em fibras, imobilidade, polifarmácia (opioides, anticolinérgicos, cálcio), hipotireoidismo.',
            apresentacao: 'Esforço evacuatório, fezes endurecidas, distensão abdominal. Impactação fecal causa diarreia paradoxal.',
            criterios: ['Critérios de Roma IV: ≥2 por ≥6 meses: esforço, fezes endurecidas, sensação incompleta, < 3 evacuações/sem'],
            exames: ['Toque retal (impactação)', 'TSH', 'Ca sérico', 'Colonoscopia se: >50 anos sem rastreio, hematoquezia'],
            tratamento: 'Hidratação + fibras (25 g/dia). Laxativos osmóticos (PEG = 1ª linha). Supositório/enema se impactação. Revisar medicamentos constipantes.',
            diferenciais: ['Câncer colorretal', 'Hipotireoidismo', 'Hipercalcemia', 'SII'],
            alertas: ['Fibras sem hidratação adequada piora constipação', 'Diarreia paradoxal = impactação fecal — desimpactar manualmente', 'Mudança recente do hábito intestinal > 50 anos = colonoscopia'],
            perola: 'PEG (polietilenoglicol) é o laxativo de primeira escolha no idoso: eficaz, sem absorção, sem meteorismo. Melhor que lactulose.',
            especialidade: 'Geriatria/Gastroenterologia'
          },
          {
            id: 'desidratacao-idoso', nome: 'Desidratação no Idoso', cid: 'E86',
            descricao: 'Idosos têm menor percepção de sede e menor capacidade renal de concentração. Alta morbimortalidade quando grave.',
            apresentacao: 'Confusão, fraqueza, mucosa oral seca, oligúria, taquicardia. Grave: rebaixamento de consciência, choque.',
            criterios: ['Osmolaridade sérica > 295 mOsm/kg + Na > 145 mEq/L (desidratação hipertônica)'],
            exames: ['Eletrólitos, ureia, creatinina', 'Osmolaridade sérica', 'Densidade urinária'],
            tratamento: 'Leve-moderada: hidratação oral. Grave: SG 5% IV (para hipernatremia) ou SF 0,9% IV. Corrigir sódio lentamente (máx 10-12 mEq/L/dia).',
            diferenciais: ['Sepse', 'Insuficiência adrenal', 'SHHNC'],
            alertas: ['Correção rápida de hipernatremia → edema cerebral', 'Idoso em diurético: monitorar eletrólitos semanalmente', 'Oferecer líquidos ativamente — idoso não pede água mesmo desidratado'],
            perola: 'Calor + idoso em casa sem ar-condicionado + confusão = desidratação por golpe de calor. Urgência médica: resfriar, hidratar, monitorar.',
            especialidade: 'Geriatria/Medicina de Urgência'
          },
          {
            id: 'hidrocefalia-pn', nome: 'Hidrocefalia de Pressão Normal (HPN)', cid: 'G91.2',
            descricao: 'Tríade clássica: distúrbio de marcha + demência + incontinência urinária com hidrocefalia e pressão do LCR normal. Causa potencialmente reversível de demência.',
            apresentacao: 'Marcha apráxica (passos curtos, base alargada, "colada ao chão"), incontinência urinária de urgência e, tardiamente, demência frontal.',
            criterios: ['TC/RM: hidrocefalia desproporcional aos sulcos corticais', 'Tap test (punção de alívio 40-50 mL LCR): melhora da marcha = confirma e prediz resposta à derivação'],
            exames: ['TC ou RM crânio', 'Punção lombar (tap test + análise do LCR)', 'Neuropsicologia'],
            tratamento: 'Derivação ventrículo-peritoneal (DVP). Melhora a marcha em 70%, incontinência em 60% e cognição em 50%. Quanto mais precoce, melhor.',
            diferenciais: ['Doença de Parkinson', 'Alzheimer', 'Demência vascular'],
            alertas: ['Tap test positivo = encaminhar para neurocirurgia rapidamente', 'TC de crânio deve ser solicitada em todo idoso com demência para excluir HPN', 'DVP: risco de infecção e hiperdrenagem — acompanhamento com neurocirurgia'],
            perola: 'Mnemônico "Wet, Wobbly, Wacky": incontinência (Wet), distúrbio de marcha (Wobbly), demência (Wacky). A marcha melhora primeiro após derivação.',
            especialidade: 'Neurologia/Neurocirurgia'
          },
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════
  // 17. ORTOPEDIA E TRAUMATOLOGIA
  // ═══════════════════════════════════════════════
  {
    sistema: 'Ortopedia e Traumatologia',
    icone: '🦴',
    sintomas: [
      {
        sintoma: 'Patologia da Coluna Vertebral',
        doencas: [
          {
            id: 'hernia-disco-lombar', nome: 'Hérnia de Disco Lombar', cid: 'M51.1',
            descricao: 'Protrusão ou extrusão do núcleo pulposo através do ânulo fibroso, comprimindo raízes nervosas. Mais comum em L4-L5 e L5-S1.',
            apresentacao: 'Lombalgia + radiculopatia (lombociatalgia): dor em faixa irradiando pela face posterior do membro inferior até o pé. Piora ao sentar, tossir, espirrar (Valsalva). Lasègue positivo (elevação da perna estendida).',
            criterios: ['Clínica compatível + sinal de Lasègue positivo (< 60° = hérnia)', 'RM lombar: confirma localização, nível e grau de compressão'],
            exames: ['RM coluna lombar (padrão ouro)', 'Eletroneuromiografia (quantifica dano neurológico)', 'TC lombar (alternativa à RM)'],
            tratamento: 'Conservador (90% resolvem): repouso relativo, AINE, corticoide oral em pulsoterapia, fisioterapia. Infiltração epidural de corticoide. Cirurgia (discectomia) se: déficit neurológico progressivo, síndrome da cauda equina, falha de 6-12 semanas.',
            diferenciais: ['Estenose do canal lombar', 'Síndrome piriforme', 'Artropatia facetária', 'Tumor raquidiano', 'Herpes zoster pré-eruptivo'],
            alertas: ['Síndrome da cauda equina: incontinência urinária/fecal + anestesia em sela + fraqueza bilateral = CIRURGIA DE EMERGÊNCIA', 'Déficit motor progressivo: não aguardar 6 semanas — cirurgia precoce', 'RM lombar na maioria dos adultos assintomáticos mostra "alterações" — correlacionar com clínica'],
            perola: 'Lasègue: com paciente deitado, elevar MMII estendido. Positivo se reproduz dor ciática < 60°. Sensibilidade 80%, especificidade 60% para hérnia.',
            especialidade: 'Ortopedia/Neurocirurgia'
          },
          {
            id: 'estenose-canal-lombar', nome: 'Estenose do Canal Lombar', cid: 'M48.0',
            descricao: 'Estreitamento do canal vertebral por osteófitos, ligamento amarelo hipertrofiado e espondiloartrose. Causa claudicação neurogênica.',
            apresentacao: 'Claudicação neurogênica: dor bilateral em MMII ao caminhar, aliviada ao sentar/curvar-se para frente (diferente da vascular). Melhora ao subir escadas (flexão lombar). Idoso que "para para descansar ao caminhar" e faz compras em carrinho (flexão).',
            criterios: ['TC ou RM: diâmetro anteroposterior do canal < 10 mm (grave), < 12 mm (relativo)'],
            exames: ['RM coluna lombar (padrão ouro)', 'TC lombar', 'Eletroneuromiografia', 'Doppler MMII (excluir claudicação vascular)'],
            tratamento: 'Conservador: fisioterapia, AINE, infiltrações epidurais. Cirurgia (descompressão + artrodese) em: claudicação grave, déficit neurológico, falha do conservador.',
            diferenciais: ['Claudicação vascular (piora ao caminhar, melhora em pé paradinha, doppler alterado)', 'Hérnia de disco', 'Polineuropatia'],
            alertas: ['Distinguir claudicação neurogênica (melhora em flexão) de vascular (qualquer parada melhora) é fundamental para o tratamento', 'Doppler MMII normal + claudicação = neurogênica até prova em contrário', 'Cirurgia tem bom resultado se sintomas correlacionam com imagem'],
            perola: 'Teste de diferenciação: paciente pedala bicicleta (flexão lombar) sem dor = claudicação neurogênica. Pedalar é impossível na claudicação vascular.',
            especialidade: 'Ortopedia/Neurocirurgia'
          },
          {
            id: 'hernia-disco-cervical', nome: 'Hérnia de Disco Cervical', cid: 'M50.1',
            descricao: 'Protrusão discal no segmento cervical, comprimindo raízes cervicais (radiculopatia) ou medula espinhal (mielopatia). Mais comum em C5-C6 e C6-C7.',
            apresentacao: 'Cervicalgia + braquialgia: dor irradiando para o ombro e braço ipsilateral. Parestesias, fraqueza nos territórios acometidos. Mielopatia: marcha espástica, hiperreflexia, sinal de Babinski, incontinência.',
            criterios: ['RM cervical (hérnia, grau de compressão radicular e medular)', 'Sinal de Spurling (compressão do forame — reproduz a dor no braço)'],
            exames: ['RM coluna cervical (padrão ouro)', 'Eletroneuromiografia', 'RX cervical (alinhamento, osteófitos)'],
            tratamento: 'Radiculopatia sem déficit: conservador (fisioterapia, AINE, colar cervical). Mielopatia: cirurgia (ACDF — artrodese cervical anterior ou laminoplastia) independente da gravidade.',
            diferenciais: ['Síndrome do ombro', 'Síndrome do túnel cubital', 'Esclerose lateral amiotrófica', 'Tumores do plexo braquial'],
            alertas: ['Mielopatia cervical é indicação cirúrgica independente de gravidade — progressão pode ser catastrófica', 'Trauma cervical + alteração neurológica: imobilização com colar rígido antes de qualquer movimento', 'Sinal de Lhermitte (choque ao flexionar pescoço) = irritação medular cervical'],
            perola: 'Mielopatia cervical: "mãos torpes" (dificuldade em abotoar, pegar objetos pequenos) + marcha espástica em idoso = RM cervical urgente. É frequentemente cirúrgica.',
            especialidade: 'Ortopedia/Neurocirurgia'
          },
          {
            id: 'espondilodiscite', nome: 'Espondilodiscite Infecciosa', cid: 'M46.3',
            descricao: 'Infecção do disco intervertebral e corpos vertebrais adjacentes. Causas: bacteriana (S. aureus 50%), micobacteriana (Mal de Pott), fúngica. Via hematogênica.',
            apresentacao: 'Lombalgia ou dorsalgia de caráter inflamatório (piora noturna e com repouso), febre, rigidez local. Progressão: colapso vertebral, compressão medular.',
            criterios: ['RM coluna: lesão em dois corpos vertebrais adjacentes + disco (hipersinal T2)', 'Biópsia percutânea guiada por TC (definição etiológica)', 'Hemocultura (positiva em 30-50%)'],
            exames: ['RM coluna (melhor sensibilidade)', 'Hemoculturas seriadas', 'PCR, VHS (elevados)', 'Biópsia percutânea guiada por TC'],
            tratamento: 'Antibiótico IV por 6-12 semanas (S. aureus: oxacilina ou vancomicina). Mal de Pott: esquema RIPE 6-12 meses. Imobilização com colete. Cirurgia se abscesso epidural, instabilidade ou déficit neurológico.',
            diferenciais: ['Espondiloartrose avançada', 'Neoplasia vertebral', 'Fratura vertebral por osteoporose', 'Artrite inflamatória'],
            alertas: ['Abscesso epidural é complicação grave — progressão rápida para déficit neurológico permanente', 'Mal de Pott: tuberculose vertebral pode ocorrer sem TB pulmonar ativa', 'Biópsia é necessária antes de iniciar antibiótico sempre que possível'],
            perola: 'Dor lombar + febre + PCR muito elevado = espondilodiscite até prova em contrário. RM com gadolínio é o exame de escolha (100% sensível na fase aguda).',
            especialidade: 'Ortopedia/Infectologia'
          },
          {
            id: 'fratura-vertebral', nome: 'Fratura Vertebral por Compressão', cid: 'M48.5',
            descricao: 'Fratura em cuneiforme do corpo vertebral por trauma axial em osso osteoporótico. Mais comum em T12 e L1 (coluna toracolombar). Pode ser assintomática ou causar dor aguda incapacitante.',
            apresentacao: 'Dor lombar ou dorsal aguda após esforço mínimo (tossir, espirrar, levantar peso leve). Progressiva cifose, perda de altura. Frequentemente encontrada incidentalmente em Rx.',
            criterios: ['Rx (lateral): diminuição de altura do corpo vertebral', 'RM: distingue fratura aguda de crônica (edema = aguda)', 'DEXA: confirma osteoporose subjacente'],
            exames: ['RM coluna (distingue aguda vs crônica)', 'TC (detalhes da fratura — instabilidade)', 'DEXA', 'Ca, P, PTH, vitamina D'],
            tratamento: 'Analgesia, imobilização com colete (TLSO). Vertebroplastia/cifoplastia em dor refratária. Cálcio + vitamina D + bisfosfonato obrigatórios. Fisioterapia após fase aguda.',
            diferenciais: ['Metástase vertebral', 'Mieloma múltiplo', 'Espondilodiscite', 'Tumor ósseo primário'],
            alertas: ['Múltiplas fraturas vertebrais em osteoporose confirmada: excluir mieloma (proteinograma + SPEP)', 'Cifoplastia tem melhor resultado que vertebroplastia (menos extravasamento de cimento)', 'Sempre iniciar tratamento de osteoporose após 1ª fratura vertebral'],
            perola: 'Perda de ≥4 cm de altura em relação à estatura máxima = investigar fraturas vertebrais assintomáticas por RM. Frequentes e com impacto na qualidade de vida.',
            especialidade: 'Ortopedia/Reumatologia'
          },
        ]
      },
      {
        sintoma: 'Lesões de Membros Inferiores',
        doencas: [
          {
            id: 'fratura-quadril', nome: 'Fratura do Colo do Fêmur', cid: 'S72.0',
            descricao: 'Fratura proximal do fêmur no idoso osteoporótico após queda. Tipos: subcapital, transcervical, basicervical. Alta mortalidade em 1 ano (20-30%).',
            apresentacao: 'Dor inguinal intensa, impotência funcional, rotação externa do membro, encurtamento do MMII. Crepitação à mobilização passiva. Idoso que cai e não consegue levantar.',
            criterios: ['Rx pelve AP + perfil do quadril', 'RM se Rx negativo e alta suspeita (fratura oculta)'],
            exames: ['Rx pelve AP (rotina)', 'RM quadril (fratura oculta — RM negativa exclui)', 'TC quadril (compreensão do traço)', 'Pré-operatório completo'],
            tratamento: 'Cirurgia em < 48h (reduz mortalidade). Fratura intracapsular: artroplastia parcial (Austin Moore) ou total. Fratura extracapsular (intertrocantérica/subtrocantérica): osteossíntese (DHS, haste cefalomedular).',
            diferenciais: ['Contusão pélvica', 'Fratura de pelve', 'Luxação de quadril', 'Coxartrose com crise álgica'],
            alertas: ['Cirurgia em < 48h reduz mortalidade e complicações — não aguardar melhora clínica para operar', 'Tromboprofilaxia obrigatória (HBPM) por 35 dias em artroplastia de quadril', 'Mobilização precoce (24h pós-op) é fundamental para prevenir síndrome do imobilismo'],
            perola: 'Fratura de quadril no idoso: 20% morrem em 1 ano, 50% não recuperam mobilidade pré-fratura. É uma das cirurgias ortopédicas com maior impacto em saúde pública.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'lca', nome: 'Lesão do Ligamento Cruzado Anterior (LCA)', cid: 'S83.5',
            descricao: 'Ruptura do LCA por trauma (rotação + valgo do joelho), geralmente em esportes. Principal causa de instabilidade do joelho em jovens.',
            apresentacao: 'Mecanismo: mudança brusca de direção sem contato ou trauma direto. Estalido + dor + hemartrose aguda. Sinal de Lachman positivo (translação anterior da tíbia com joelho 20-30° de flexão).',
            criterios: ['Lachman test (sensibilidade 85%, especificidade 94%)', 'Pivot-shift test (específico, melhor sob anestesia)', 'RM joelho (confirma e avalia lesões associadas — menisco, cartilagem)'],
            exames: ['RM joelho (lesão LCA + lesões associadas)', 'Rx joelho AP + perfil (fratura de Segond = avulsão da tíbia lateral, patognomônica)'],
            tratamento: 'Conservador: fisioterapia em paciente sedentário ou idoso. Cirúrgico: reconstrução com enxerto (tendão patelar, isquiotibiais, grácil) em atletas e pacientes jovens ou com instabilidade funcional.',
            diferenciais: ['Lesão meniscal (dor na interlinha, bloqueio)', 'Lesão do LCP', 'Contusão do joelho', 'Fratura oculta do planalto tibial'],
            alertas: ['Hemartrose aguda do joelho em jovem após trauma = lesão intra-articular séria (LCA, menisco, fratura) até prova em contrário', 'Lachman teste > Gaveta anterior: mais sensível e pode ser feito na fase aguda', 'Retorno ao esporte após reconstrução do LCA: mínimo 9-12 meses'],
            perola: 'Fratura de Segond (avulsão da tíbia lateral no Rx) é patognomônica de lesão do LCA. Sinal radiográfico simples que indica RM obrigatória.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'gonartrose', nome: 'Gonartrose (Artrose do Joelho)', cid: 'M17',
            descricao: 'Degeneração da cartilagem articular do joelho. Principal causa de dor crônica e incapacidade funcional em adultos > 50 anos. Compartimento medial é mais afetado.',
            apresentacao: 'Dor mecânica (atividade piora, repouso alivia), rigidez matinal < 30 min, crepitação, deformidade em varo (pernas arqueadas), derrame articular. Redução progressiva da amplitude de movimento.',
            criterios: ['ACR: dor no joelho + RX com osteófitos + ≥1 de: >50 anos, rigidez < 30 min, crepitação'],
            exames: ['Rx joelho AP em ortostatismo + perfil + axial de patela (Merchant)', 'Escala de Kellgren-Lawrence (I-IV) para estadiamento'],
            tratamento: 'Perda de peso (cada 1 kg perdido = 4 kg menos de carga no joelho). Exercício (fortalecimento de quadríceps). AINE tópico/oral. Joelheira. Viscosuplementação (hialuronato IA). Artroplastia total de joelho em estágio avançado.',
            diferenciais: ['Artrite reumatoide (bilateral, simétrica, marcadores inflamatórios)', 'Artrite séptica (monoartrite aguda, febre)', 'Meniscopatia', 'Tendinite patelar'],
            alertas: ['AINE prolongado no idoso = risco gastrointestinal e renal — usar protetor e por menor tempo possível', 'Injeção de corticoide no joelho: alívio rápido mas limitar a 3-4×/ano (cartilagem)', 'Artroplastia de joelho tem 95% de satisfação a 10 anos — não adiar desnecessariamente em doença grave'],
            perola: 'Quadríceps forte é o melhor "amortecedor" do joelho. Cada 1% de aumento de força no quadríceps reduz o risco de artrose em 4%. Exercício > qualquer medicamento.',
            especialidade: 'Ortopedia/Reumatologia'
          },
          {
            id: 'sindrome-compartimental', nome: 'Síndrome Compartimental Aguda', cid: 'T79.6',
            descricao: 'Aumento da pressão dentro de um compartimento osteofascial não distensível, comprometendo a perfusão tecidual. Emergência ortopédica com risco de isquemia permanente.',
            apresentacao: '6 Ps: Pain (dor intensa desproporcional), Paresthesia, Paralysis, Pallor, Pulselessness, Poikilothermia (frios). Dor à extensão passiva dos dedos é o sinal mais precoce e sensível.',
            criterios: ['Clínica suspeita → medição da pressão compartimental (normal < 30 mmHg)', 'Pressão > 30 mmHg OU pressão diastólica - pressão compartimental < 30 mmHg = fasciotomia'],
            exames: ['Medição de pressão compartimental (Stryker ou agulha)', 'Mioglobinúria (rabdomiólise)', 'CK elevada'],
            tratamento: 'FASCIOTOMIA DE EMERGÊNCIA imediata. Remoção de gesso. Monitorização de IRA por mioglobinúria. Hidratação vigorosa.',
            diferenciais: ['Isquemia por lesão vascular', 'TVP', 'Celulite/fasciíte necrotizante', 'Contusão muscular grave'],
            alertas: ['Fasciotomia não pode aguardar — após 6h de síndrome compartimental: necrose muscular irreversível', 'A presença de pulso periférico NÃO exclui síndrome compartimental', 'Gesso muito apertado é a causa mais comum pós-fratura — sempre verificar pulsos e sensibilidade'],
            perola: 'Dor à extensão passiva dos dedos após trauma em membro = sinal de alerta para síndrome compartimental. Não confundir com dor no foco da fratura.',
            especialidade: 'Ortopedia/Medicina de Urgência'
          },
          {
            id: 'fratura-tornozelo', nome: 'Fratura de Tornozelo', cid: 'S82.4',
            descricao: 'Fratura unimaleolar, bimaleolar ou trimaleolar por inversão ou eversão forçada. Classificação de Weber (A, B, C) guia o tratamento.',
            apresentacao: 'Dor, edema e equimose no tornozelo após trauma. Incapacidade de apoiar. Crepitação. Regras de Ottawa identificam quem precisa de Rx (alto valor preditivo negativo).',
            criterios: ['Regras de Ottawa: Rx se dor na ponta do maléolo + ≥1 de: incapacidade de apoiar 4 passos imediatamente após trauma, dor à palpação dos 6 cm posteriores de ambos os maléolos', 'Classificação de Weber (A: abaixo da sindesmose, B: na sindesmose, C: acima da sindesmose)'],
            exames: ['Rx tornozelo (AP + perfil + mortise)'],
            tratamento: 'Weber A estável: bota imobilizadora ou órtese + apoio com carga precoce. Weber B instável + Weber C: cirurgia (osteossíntese com placas e parafusos).',
            diferenciais: ['Entorse do tornozelo', 'Fratura do calcâneo', 'Fratura de Lisfranc', 'Ruptura do tendão de Aquiles'],
            alertas: ['Fratura bimaleolar: articulação do tornozelo fica instável — sempre cirúrgica', 'Retirar joias e calçado apertado imediatamente — edema progride rapidamente', 'Fratura de Jones (base do 5º metatarso): palpação específica da base do 5º metatarso (Ottawa)'],
            perola: 'Regras de Ottawa têm sensibilidade ~100% e especificidade 40%: são excelentes para EXCLUIR fratura e evitar Rx desnecessário, não para confirmar.',
            especialidade: 'Ortopedia/Medicina de Urgência'
          },
          {
            id: 'lesao-manguito', nome: 'Síndrome do Manguito Rotador', cid: 'M75.1',
            descricao: 'Lesão dos tendões do manguito rotador (supraespinhal, infraespinhal, subescapular, redondo menor) por trauma agudo, degeneração crônica ou impacto subacromiais. Causa mais comum de dor no ombro.',
            apresentacao: 'Dor no ombro (região deltóide), piora ao elevar o braço, perda de força. Arco doloroso 60-120° (impacto). Testes clínicos: Neer, Hawkins, Jobe (supraespinhal), Pata (infraespinhal).',
            criterios: ['USG ombro (triagem) ou RM ombro (padrão ouro) — confirma localização e extensão da lesão'],
            exames: ['RM ombro (lesão parcial vs total, tamanho)', 'USG ombro (operador-dependente, boa sensibilidade)', 'Rx ombro (migração superior da cabeça femoral em lesão maciça)'],
            tratamento: 'Conservador 6-12 semanas (fisioterapia, AINE, infiltração de corticoide). Cirurgia (reparo artroscópico) em: lesão total traumática aguda, falha conservadora, lesão em atleta.',
            diferenciais: ['Capsulite adesiva (ombro congelado)', 'Artrose glenoumeral', 'Instabilidade do ombro', 'Tendinite calcária', 'Neuropatia cervical'],
            alertas: ['Corticoide intra-articular: máximo 3 injeções/ano — mais acelera degeneração do tendão', 'Diagnóstico diferencial com hérnia cervical (braquialgia, sinal de Spurling positivo)', 'Ruptura maciça do manguito + migração superior: artroplastia reversa do ombro'],
            perola: 'Teste de Jobe (supraespinhal): paciente eleva braço a 90° em escápula (30° de anteflexão), polegar para baixo. Examinador aplica resistência. Dor/fraqueza = lesão do supraespinhal.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'luxacao-ombro', nome: 'Luxação Glenoumeral Anterior', cid: 'S43.0',
            descricao: 'Deslocamento da cabeça do úmero para posição anterior ao glênio. Representa 95% das luxações de ombro. Mecanismo: abdução + rotação externa forçada.',
            apresentacao: 'Dor intensa + deformidade (ombro quadrado, perda do contorno deltóide), posição em abdução e rotação externa. Impotência funcional. Possível lesão do nervo axilar (sensibilidade no deltóide).',
            criterios: ['Rx ombro AP + Y-scapular (ou Velpeau): confirma luxação e exclui fratura associada'],
            exames: ['Rx ombro AP + Y (confirmar luxação + lesão de Hill-Sachs e Bankart)', 'RM ombro após redução (lesão labral, manguito)'],
            tratamento: 'Redução fechada imediata: técnica de Cunningham (sem sedação), Milch, Kocher. Sedação/analgesia se necessário. Radiografia pós-redução. Tipoia 1-3 semanas. Fisioterapia.',
            diferenciais: ['Fratura de úmero proximal', 'Fratura-luxação', 'Lesão do manguito rotador', 'Fratura do processo coracoide'],
            alertas: ['Avaliar nervo axilar antes e após redução (sensibilidade face lateral do ombro)', 'Rx pré-redução é obrigatório — fratura do úmero muda a técnica e o risco', 'Luxação recidivante (> 3 episódios): Bankart cirúrgico para estabilização'],
            perola: 'Lesão de Hill-Sachs (impactação posterior da cabeça umeral) + Bankart (lesão do labrum anterior) = par clássico na luxação anterior. RM pós-redução define necessidade de cirurgia.',
            especialidade: 'Ortopedia/Medicina de Urgência'
          },
          {
            id: 'sindrome-tunel-carpo', nome: 'Síndrome do Túnel do Carpo', cid: 'G56.0',
            descricao: 'Compressão do nervo mediano no túnel do carpo. Causa mais comum de neuropatia compressiva dos membros superiores. Associada a DM, hipotireoidismo, gravidez, artrite reumatoide.',
            apresentacao: 'Parestesias e dor noturna nos 3½ dedos radiais (polegar, indicador, médio, ½ anelar). Sinal de Tinel (parestesia ao percutir o carpo), Phalen (parestesia ao flexionar punho 60 seg). Atrofia tenar em casos avançados.',
            criterios: ['Eletroneuromiografia (padrão ouro): latência distal sensorial do nervo mediano > 3,5 ms'],
            exames: ['Eletroneuromiografia (confirma e quantifica)', 'TSH (hipotireoidismo como causa)', 'Glicemia (DM)', 'Rx punho (artropatia)'],
            tratamento: 'Conservador: órtese noturna de punho em posição neutra, infiltração de corticoide no túnel. Cirúrgico (liberação do ligamento transverso do carpo) se: falha conservadora, déficit motor, atrofia tenar.',
            diferenciais: ['Radiculopatia C6-C7 (cervicalgia + sinal de Spurling)', 'Fenômeno de Raynaud', 'Neuropatia diabética difusa', 'Síndrome do pronador'],
            alertas: ['Atrofia tenar = nervos já comprometidos a longo prazo — cirurgia urgente para evitar sequela permanente', 'Hipotireoidismo é causa tratable de STC — TSH antes de qualquer tratamento', 'Infiltração de corticoide: alívio temporário (6 meses) — útil para diagnóstico e temporização'],
            perola: 'Phalen test: paciente flete os punhos por 60 seg (posição de "rezar" invertido). Parestesia nos 3½ dedos radiais = positivo. Sensibilidade 75%, especificidade 82%.',
            especialidade: 'Ortopedia/Neurologia'
          },
          {
            id: 'osteomielite', nome: 'Osteomielite Aguda', cid: 'M86.0',
            descricao: 'Infecção óssea. Hematogênica (criança, idoso, imunossuprimido), por contiguidade (pós-cirurgia, pé diabético) ou inoculação direta (trauma). S. aureus: 60-80% dos casos.',
            apresentacao: 'Dor óssea localizada + febre + edema + eritema. Em crianças: febre + recusa de andar/usar o membro. No idoso: apresentação mais insidiosa sem febre evidente.',
            criterios: ['RM (padrão ouro): edema medular (hipossinal T1, hipersinal T2+STIR)', 'Cintilografia óssea (triagem — antes de RM disponível)', 'Biópsia óssea (definição do agente)'],
            exames: ['RM osso afetado (padrão ouro)', 'Hemoculturas seriadas (positivas em 30-40%)', 'PCR, VHS (elevados)', 'Rx (tardio: lise óssea só aparece 10-21 dias após infecção)', 'Biópsia óssea percutânea (se hemocultura negativa)'],
            tratamento: 'Antibiótico IV por 4-6 semanas (oxacilina se MSSA; vancomicina se MRSA ou alergia). Cirurgia se: abscesso subperiosteal, osteomielite crônica com sequestro, falha antibiótica.',
            diferenciais: ['Celulite (sem envolvimento ósseo)', 'Artrite séptica', 'Tumor ósseo', 'Fratura de estresse'],
            alertas: ['Antibiótico ANTES da biópsia se sepse ou instabilidade — mas colher hemoculturas antes', 'Osteomielite crônica: sequestro ósseo deve ser desbridado cirurgicamente — antibiótico sozinho não cura', 'Pé diabético + úlcera profunda: sempre pensar em osteomielite (teste da sonda — atingir osso = confirmado)'],
            perola: 'Regra da sonda no pé diabético: introduzir sonda (probe-to-bone test) na úlcera — se tocar osso, sensibilidade 89% para osteomielite. RM confirma.',
            especialidade: 'Ortopedia/Infectologia'
          },
          {
            id: 'artrite-septica', nome: 'Artrite Séptica', cid: 'M00',
            descricao: 'Infecção articular bacteriana. Emergência ortopédica — destruição articular rápida em 24-48h. Causas: hematogênica (S. aureus, gonococo), pós-operatória, extensão osteomielite.',
            apresentacao: 'Monoartrite aguda febril: articulação edemaciada, quente, eritematosa, muito dolorosa, com limitação intensa. Joelho (50%), quadril (20%), ombro (10%).',
            criterios: ['Artrocentese com análise do líquido sinovial: leucócitos > 50.000/mm³ (com > 90% PMN), Gram e cultura positivos'],
            exames: ['Artrocentese e análise do LS (URGENTE)', 'Hemocultura', 'PCR, VHS', 'Rx articulação (tardio)', 'USG (guia punção em quadril)'],
            tratamento: 'Lavagem articular cirúrgica (artroscopia ou artrotomia) URGENTE + antibiótico IV (oxacilina ± cefazolina; cobrir gonococo com ceftriaxona). Imobilização temporária + fisioterapia precoce.',
            diferenciais: ['Artrite gotosa (hiperuricemia, cristais no LS)', 'Artrite reumatoide em surto', 'Hemartrose traumática', 'Doença de Lyme (viagem endêmica)'],
            alertas: ['Artrite séptica de quadril em criança: URGÊNCIA CIRÚRGICA — compromete vascularização epifisária em horas (necrose da cabeça femoral)', 'Gonocócica em jovem sexualmente ativo: artrite migratória + tenossinovite + pápulas pustulosas', 'Não administrar corticoide intra-articular sem antes descartar infecção'],
            perola: 'Quatro critérios de Kocher para artrite séptica de quadril na criança: febre, recusa de apoio, VHS > 40 mm/h, leucócitos > 12.000. 4/4 = 99% de probabilidade de artrite séptica.',
            especialidade: 'Ortopedia/Infectologia'
          },
          {
            id: 'fratura-exposta', nome: 'Fratura Exposta (Aberta)', cid: 'S52.90',
            descricao: 'Fratura com comunicação entre o foco e o meio externo, expondo o osso a contaminação. Graus de Gustilo-Anderson (I, II, IIIa, IIIb, IIIc) guiam tratamento e prognóstico.',
            apresentacao: 'Osso visível ou ferida sobre o foco de fratura. Pode ser "de dentro para fora" (fragmento perfura pele) ou trauma direto. Contaminação por gramínea, solo, matéria fecal agrava o prognóstico.',
            criterios: ['Classificação de Gustilo-Anderson: grau I (< 1 cm, limpa), II (1-10 cm), IIIa-IIIc (> 10 cm ou comprometimento vascular)'],
            exames: ['Rx da região (extensão da fratura)', 'TC se cominuição complexa', 'Doppler ou angiografia se suspeita de lesão vascular (IIIc)'],
            tratamento: 'Cobertura antibiótica imediata (cefazolina + gentamicina ± penicilina se solo contaminado). Antitetânica. Desbridamento cirúrgico em < 6h. Fixação externa provisória. Cobertura de partes moles.',
            diferenciais: ['Fratura fechada com bolha hemorrágica', 'Ferida contaminada sem fratura'],
            alertas: ['Antibiótico IMEDIATO no pronto-socorro (cefazolina IV) — cada hora atrasa e aumenta risco de infecção', 'Desbridamento em < 6h: regra clássica. Evidências recentes: qualidade do desbridamento > tempo', 'IIIc (comprometimento vascular): cirurgião vascular + ortopedista simultâneos'],
            perola: 'Fratura exposta por gramínea ou solo = cobertura obrigatória para Clostridium tetani e perfringens. Amputação ainda supera as taxas de infecção em Gustilo IIIb/c mal tratadas.',
            especialidade: 'Ortopedia/Medicina de Urgência'
          },
          {
            id: 'metastase-ossea', nome: 'Metástase Óssea', cid: 'C79.5',
            descricao: 'Disseminação de neoplasias para o esqueleto. Tumores primários mais comuns: mama, próstata, pulmão, rim, tireoide (mnemônico: BPuRiT). Osso é o 3º sítio metastático mais comum.',
            apresentacao: 'Dor óssea persistente, progressiva, noturna, pior ao repouso. Fratura patológica. Hipercalcemia. Compressão medular. Locais frequentes: coluna, pelve, costelas, fêmur proximal.',
            criterios: ['Rx: lesão lítica (pulmão, rim) ou blástica (próstata) ou mista', 'Cintilografia óssea: triagem (sensível, pouco específica)', 'RM: melhor para coluna e compressão medular'],
            exames: ['Cintilografia óssea (triagem)', 'Rx locais sintomáticos', 'RM coluna se suspeita de compressão', 'TC tórax-abdome-pelve (investigar primário)', 'Ca, P, FA, PSA, mammografia'],
            tratamento: 'Analgesia (opióide em dor óssea grave). Bisfosfonatos/denosumabe (eventos esqueléticos). Radioterapia paliativa local. Cirurgia em fratura patológica ou iminente (> 50% cortical). Tratamento do tumor primário.',
            diferenciais: ['Mieloma múltiplo (lesões líticas difusas, SPEP)', 'Osteomielite', 'Linfoma ósseo', 'Tumor ósseo primário (raro em adultos)'],
            alertas: ['Síndrome de compressão medular: dor lombar + fraqueza de MMII + incontinência = emergência — corticoide + RM urgente + radioterapia/cirurgia', 'Hipercalcemia maligna: náusea, constipação, confusão, poliúria — hidratação + bisfosfonato IV', 'Fêmur com lesão > 50% cortical: profilaxia cirúrgica ANTES da fratura (muito melhor que tratar fratura patológica)'],
            perola: 'Mnemônico BPuRiT para metástases ósseas: Breast (mama), Prostate (próstata), unRiT (rins + tireoide). Pulmão em qualquer nível. Próstata e mama juntas = 60% de todas as metástases ósseas.',
            especialidade: 'Ortopedia/Oncologia'
          },
          {
            id: 'doenca-paget', nome: 'Doença de Paget Óssea', cid: 'M88',
            descricao: 'Remodelação óssea desordenada com reabsorção excessiva seguida por formação óssea anormal, resultando em osso frágil e deformado. Etiologia desconhecida (viral? genética?).',
            apresentacao: 'Frequentemente assintomático (FA elevada + Rx acidental). Quando sintomático: dor óssea, deformidades (curvaturas dos ossos longos, crânio em "bola de canhão"), surdez de condução (ossos do ouvido), compressão nervosa.',
            criterios: ['Fosfatase alcalina elevada (aumentada 10-50×)', 'Cintilografia óssea (triagem — lesões pagéticas hipercaptantes)', 'Rx característico: "cotton wool" no crânio, cortical espessada'],
            exames: ['Fosfatase alcalina total e óssea', 'Cintilografia óssea total', 'Rx das lesões ativas', 'Marcadores de remodelação (CTX, P1NP)'],
            tratamento: 'Bisfosfonatos (zoledronato IV 5 mg dose única = tratamento de escolha). Indicação: dor, FA > 3× LSN, risco de complicações. Acompanhamento com FA a cada 3-6 meses.',
            diferenciais: ['Metástases ósseas blásticas', 'Linfoma ósseo', 'Hiperparatireoidismo', 'Osteoporose'],
            alertas: ['Sarcoma pagético: complicação rara mas grave (1% dos casos) — dor subitamente piora em paciente com Paget estável', 'FA elevada isolada em adulto > 50 anos = Paget até prova em contrário', 'Deficiência de vitamina D e Ca antes de bisfosfonato (risco de hipocalcemia grave)'],
            perola: 'Crânio "em bola de canhão" ou "mancha de algodão" (cotton-wool skull) na Rx + FA muito elevada = Paget quase confirmado. Zoledronato normaliza FA em 90% dos casos.',
            especialidade: 'Reumatologia/Ortopedia'
          },
          {
            id: 'osteossarcoma', nome: 'Osteossarcoma', cid: 'C40',
            descricao: 'Tumor ósseo maligno primário mais comum em crianças e adolescentes (2ª-3ª décadas). Localização preferencial: metáfise distal do fêmur, proximal da tíbia e do úmero.',
            apresentacao: 'Dor óssea localizada persistente, piora noturna. Massa palpável local. Limitação funcional. Pode ter história de trauma recente (que não "causou" o tumor mas o descobriu).',
            criterios: ['Rx: destruição óssea + reação periosteal ("sol nascente" ou triângulo de Codman)', 'RM: extensão medular e partes moles', 'Biópsia incisional (diagnóstico definitivo)'],
            exames: ['Rx (lesão lítica/blástica + reação periosteal)', 'RM (extensão local)', 'TC tórax (metástases pulmonares — sítio mais frequente)', 'Biópsia (diagnóstico histológico)', 'FA (elevada)', 'LDH (valor prognóstico)'],
            tratamento: 'Quimioterapia neoadjuvante (MAP: metotrexato + adriamicina + cisplatina) → cirurgia com margens (cirurgia com preservação de membro em 90%) → quimioterapia adjuvante.',
            diferenciais: ['Sarcoma de Ewing (criança mais nova, diáfise, febre)', 'Osteossarcoma periosteal (menos agressivo)', 'Cisto ósseo aneurismático', 'Osteomielite'],
            alertas: ['Biópsia deve ser realizada por cirurgião oncológico (planejamento do trajeto para não comprometer cirurgia definitiva)', 'Trauma não causa osteossarcoma — mas pode revelar tumor preexistente', 'Sobrevida em 5 anos com QT + cirurgia: 65-70% (melhorou de 20% antes da quimioterapia)'],
            perola: '"Sol nascente" (sunburst pattern) = espículas ósseas perpendiculares ao córtex no Rx. Triângulo de Codman = elevação do periósteo. Ambos são sinais radiográficos do osteossarcoma.',
            especialidade: 'Ortopedia Oncológica/Oncologia Pediátrica'
          },
          {
            id: 'displ-quadril', nome: 'Displasia do Desenvolvimento do Quadril (DDQ)', cid: 'Q65',
            descricao: 'Desenvolvimento anormal da articulação coxofemoral durante a vida fetal ou pós-natal. Espectro: subluxação, luxação. Diagnóstico precoce = tratamento simples e eficaz.',
            apresentacao: 'Recém-nascido: manobras de Ortolani (redução com clique) e Barlow (luxação provocada). Lactente: assimetria de pregas cutâneas glúteas, sinal de Galeazzi (encurtamento do fêmur). Criança em andamento: claudicação, hiperlordose, marcha de Trendelenburg.',
            criterios: ['Ultrassom de quadril: exame de escolha até 4-6 meses (ângulo alfa < 60° = displasia)', 'Rx pelve AP: após 6 meses (núcleo de ossificação visível)'],
            exames: ['USG quadril bilateral até os 4-6 meses', 'Rx pelve AP após 6 meses', 'RM em casos complexos'],
            tratamento: 'RN a 6 meses: arnês de Pavlik (redução e manutenção). 6-18 meses: redução fechada + espica gessada. > 18 meses: redução cirúrgica aberta. Tardio (> 2 anos): osteotomia.',
            diferenciais: ['Artrite séptica do quadril', 'Trocânter coxa vara', 'Paralisia cerebral', 'Doença de Perthes'],
            alertas: ['Triagem universal com USG: RN com fator de risco (apresentação pélvica, história familiar, oligoâmnio)', 'Diagnóstico tardio = cirurgia maior e sequelas (artrose precoce)', 'Arnês de Pavlik por 23h/dia — compliance da família é fundamental'],
            perola: 'Manobra de Ortolani: abdução do quadril + compressão anterior do trocânter = clique de redução (luxação reduzindo). Barlow: adução + compressão posterior = clique de luxação.',
            especialidade: 'Ortopedia Pediátrica'
          },
          {
            id: 'pe-equinovaro', nome: 'Pé Torto Congênito (Pé Equinovaro Congênito)', cid: 'Q66.0',
            descricao: 'Deformidade congênita do pé com componentes de equino, varo, aduto e supinação. Incidência 1-2/1000 nascidos vivos. Bilateral em 50%. Pode ser isolado ou associado a síndromes.',
            apresentacao: 'Pé em posição de "taco de golfe" ao nascimento. Não corrigível passivamente. Diagnóstico pré-natal (USG morfológico com 20 semanas).',
            criterios: ['Diagnóstico clínico ao nascimento', 'Score de Pirani (0-6) avalia gravidade e guia tratamento'],
            exames: ['Avaliação clínica neonatal', 'USG morfológico fetal (diagnóstico pré-natal)', 'Rx (após 3 meses para avaliar progresso)'],
            tratamento: 'Método de Ponseti: série de gessos seriados semanais (5-7 gessos) → tenotomia percutânea do calcâneo em 90% → bota de Denis-Browne por 4 anos. Resultado excelente em > 90%.',
            diferenciais: ['Pé metatarso aduto (só adução, tratamento com palmilhas)', 'Artrogripose (rigidez múltiplas articulações)', 'Espinha bífida (pé neurológico)'],
            alertas: ['Iniciar método de Ponseti nas primeiras 2 semanas de vida — quanto mais precoce, menor resistência dos tecidos', 'Recidiva é comum se bota de Denis-Browne não usada corretamente — orientar os pais rigorosamente', 'Pé torto bilateral assimétrico grave = investigar espinha bífida oculta'],
            perola: 'Método de Ponseti revolucionou o tratamento: 95% de correção completa com gessamento + tenotomia, evitando cirurgias extensas. O ortopedista Hugh Ponseti desenvolveu o método nos anos 1950.',
            especialidade: 'Ortopedia Pediátrica'
          },
        ]
      },
      {
        sintoma: 'Lesões de Tendões e Partes Moles',
        doencas: [
          {
            id: 'epicondilite-lateral', nome: 'Epicondilite Lateral (Cotovelo do Tenista)', cid: 'M77.1',
            descricao: 'Tendinose do extensor radial do carpo na inserção no epicôndilo lateral. Causa mais comum de dor lateral no cotovelo. Relacionada a movimentos repetitivos de extensão do punho.',
            apresentacao: 'Dor no epicôndilo lateral irradiando pelo antebraço, piora ao apertar a mão e estender o punho. Teste de Cozen positivo (dorsiflexão do punho contra resistência reproduz a dor).',
            criterios: ['Diagnóstico clínico: dor ao teste de Cozen + dor à palpação do epicôndilo lateral'],
            exames: ['USG (espessamento tendinoso, calcificações)', 'RM (grau de lesão tendinosa)'],
            tratamento: 'Conservador (90%): repouso relativo, fisioterapia excêntrica, órtese de cotovelo, AINE tópico. Infiltração de corticoide (alívio curto prazo). PRP (Platelet Rich Plasma). Cirurgia em refratários.',
            diferenciais: ['Epicondilite medial (golfer)', 'Compressão do nervo radial (síndrome do túnel radial)', 'Artrose do cotovelo'],
            alertas: ['Corticoide no tendão: alívio rápido mas piora a longo prazo (degeneração tendinosa) — limitar a 1-2 injeções', 'Exercícios excêntricos são a base do tratamento — melhor evidência a longo prazo', 'PRP tem evidência crescente mas ainda controversa'],
            perola: 'Exercício excêntrico de Tyler: rolo de toalha esticado lentamente com punho em flexão. 3 séries × 15 repetições, 3×/dia. Superior ao repouso e ao corticoide a longo prazo.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'epicondilite-medial', nome: 'Epicondilite Medial (Cotovelo do Golfista)', cid: 'M77.0',
            descricao: 'Tendinose dos flexores do punho na inserção no epicôndilo medial. Menos comum que a lateral. Associada a flexão e pronação repetitiva do antebraço.',
            apresentacao: 'Dor no epicôndilo medial irradiando pelo antebraço medial. Piora à flexão e pronação do punho contra resistência. Pode associar neuropatia do nervo ulnar.',
            criterios: ['Diagnóstico clínico: dor à palpação do epicôndilo medial + teste de flexão do punho contra resistência'],
            exames: ['USG ou RM (lesão tendinosa)', 'Eletroneuromiografia (neuropatia ulnar associada)'],
            tratamento: 'Repouso, fisioterapia, AINE tópico. Infiltração. Cirurgia em refratários.',
            diferenciais: ['Epicondilite lateral', 'Síndrome do túnel cubital (neuropatia ulnar)', 'Instabilidade do ligamento colateral medial'],
            alertas: ['Avaliar neuropatia ulnar associada (parestesias no 4º e 5º dedos)', 'Infiltração de corticoide medial: risco de lesão do nervo ulnar — técnica rigorosa', 'Retorno ao esporte: mínimo 6-8 semanas de tratamento'],
            perola: 'Cotovelo do golfista e tenista são tendinoses (degeneração) e não tendinites (inflamação). Por isso, AINE são menos eficazes a longo prazo e exercícios excêntricos são superiores.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'tendinite-aquiles', nome: 'Tendinopatia do Tendão de Aquiles', cid: 'M76.6',
            descricao: 'Degeneração do tendão de Aquiles por uso repetitivo (corrida, saltos). Tendinopatia da porção média (6 cm acima da inserção) ou insercional.',
            apresentacao: 'Dor posterior no tornozelo, rigidez matinal, espessamento palpável do tendão, dor à compressão lateral (arco 2-7 cm acima da inserção).',
            criterios: ['Diagnóstico clínico + USG (espessamento tendinoso, hipervascularização no Power Doppler)'],
            exames: ['USG (tendinopatia, ruptura parcial)', 'RM (ruptura total, casos cirúrgicos)'],
            tratamento: 'Exercícios excêntricos de Alfredson (calcanhar sobe/desce pela borda do degrau). Fisioterapia. Órtese com calço de calcanhar. PRP. Cirurgia em refratários.',
            diferenciais: ['Ruptura do tendão de Aquiles (deficiência de plantiflexão, Thompson negativo)', 'Bursite retrocalcânea', 'Síndrome de Haglund'],
            alertas: ['Corticoide intratendinoso no Aquiles é contraindicado — risco de ruptura espontânea', 'Ruptura do Aquiles: Thompson test (apertar panturrilha — sem plantiflexão = ruptura)', 'Fluoroquinolonas aumentam risco de ruptura do Aquiles — evitar em atletas'],
            perola: 'Protocolo de Alfredson: calcanhar sobe pela borda do degrau (concêntrico) e desce lentamente (excêntrico) com joelho estendido E fletido. 3×15 repetições 2× ao dia. 12 semanas.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'bursite-trocanterica', nome: 'Bursite Trocantérica (Síndrome da Dor Lateral do Quadril)', cid: 'M70.6',
            descricao: 'Inflamação da bursa trocantérica ou tendinopatia do glúteo médio/mínimo. Principal causa de dor lateral do quadril em mulheres de meia-idade.',
            apresentacao: 'Dor na face lateral do quadril irradiando pela coxa lateral, piora ao deitar sobre o lado afetado, cruzar as pernas, subir escadas. Sensibilidade à palpação do trocânter maior.',
            criterios: ['Diagnóstico clínico: dor lateral do quadril + sensibilidade trocânter + reprodução da dor ao abdução resistida'],
            exames: ['USG (bursite, tendinopatia do glúteo médio)', 'RM (melhor para tendões)'],
            tratamento: 'Fisioterapia (fortalecimento do glúteo médio), modificação de atividades. Infiltração de corticoide na bursa (alívio rápido). PRP em tendinopatia do glúteo médio.',
            diferenciais: ['Artrose do quadril (dor inguinal, limitação de rotação)', 'Radiculopatia L2-L4', 'Meralgia parestésica (nervo femorocutâneo)'],
            alertas: ['Evitar cruzar as pernas e apoiar o quadril contra superfícies duras', 'Infiltração guiada por USG tem melhor resultado que às cegas', 'Tendinopatia do glúteo médio pode ser confundida com artrose de quadril — USG diferencia'],
            perola: 'O nome "bursite trocantérica" está sendo substituído por "síndrome da dor lateral do quadril" — frequentemente é tendinopatia do glúteo médio e não inflamação da bursa.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'tendinite-patelar', nome: 'Tendinite Patelar (Joelho do Saltador)', cid: 'M76.5',
            descricao: 'Tendinopatia do tendão patelar na inserção inferior da patela. Típica de atletas de salto (basquete, vôlei). Sobrecarga crônica.',
            apresentacao: 'Dor no polo inferior da patela, piora ao agachar, subir escadas, saltar. Sensibilidade à palpação do polo inferior. Crepitação.',
            criterios: ['Diagnóstico clínico + USG (espessamento e hipovascularização do tendão patelar)'],
            exames: ['USG (espessamento, tendinopatia)', 'RM (grau de lesão)'],
            tratamento: 'Exercícios excêntricos (agachamento no plano inclinado — protocolo de Purdam). Modificação de atividades. Fisioterapia. PRP. Cirurgia em refratários.',
            diferenciais: ['Síndrome femoropatelar', 'Doença de Osgood-Schlatter (adolescente)', 'Condromalácia patelar'],
            alertas: ['Corticoide no tendão patelar: contraindicado — risco de ruptura espontânea', 'Não confundir com SFP (dor generalizada na patela vs polo inferior)', 'Retorno ao esporte: somente quando sem dor ao agachamento com carga'],
            perola: 'Agachamento unipodal declinado (declino de 25°) é superior ao agachamento convencional para tendinopatia patelar: maior carga excêntrica no tendão.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'sindrome-femoropatelar', nome: 'Síndrome Femoropatelar (SFP)', cid: 'M22.2',
            descricao: 'Dor peripatelar por malalinhamento ou sobrecarga da articulação femoropatelar. Causa mais comum de dor no joelho em adolescentes e adultos jovens.',
            apresentacao: 'Dor anterior e peripatelar do joelho, piora ao agachar, sentar por tempo prolongado ("sinal do cinema"), subir/descer escadas. Crepitação. Alívio ao estender o joelho.',
            criterios: ['Diagnóstico clínico: dor anterior do joelho + sinal do cinema + compressão patelar dolorosa'],
            exames: ['Rx joelho axial (Merchant) — inclinação ou subluxação patelar', 'RM (condromalácia, lesão cartilagem)'],
            tratamento: 'Fisioterapia: fortalecimento do quadríceps (VMO), glúteo médio e core. Palmilha com suporte medial. Taping da patela. AINE. Cirurgia raramente necessária.',
            diferenciais: ['Tendinite patelar (polo inferior)', 'Condromalácia patelar (lesão cartilaginosa)', 'Artrose femoropatelar (idosos)', 'Plica sinovial'],
            alertas: ['Fraqueza de glúteo médio e quadríceps são as causas biomecânicas mais comuns', 'Palmilha com suporte longitudinal medial pode ser muito eficaz', 'Cirurgia de realinhamento patelar: apenas em casos selecionados com malalinhamento significativo'],
            perola: '"Sinal do cinema": dor ao ficar sentado por muito tempo com joelho fletido. Alivio ao estender o joelho (sair do cinema). Clássico e patognomônico da SFP.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'capsulite-adesiva', nome: 'Capsulite Adesiva (Ombro Congelado)', cid: 'M75.0',
            descricao: 'Fibrose e contratura da cápsula articular glenoumeral. Causa limitação progressiva de toda a amplitude de movimento do ombro. Evolui em 3 fases: dolorosa, de rigidez, de resolução.',
            apresentacao: 'Dor progressiva no ombro + limitação crescente de todos os movimentos. Fase de rigidez: movimento muito limitado, dor reduzida. Resolução espontânea em 1-3 anos.',
            criterios: ['Clínico: limitação global do ombro (especialmente rotação externa) + dor', 'RM (excluir ruptura do manguito)'],
            exames: ['RM ombro (espessamento capsular, descartar outras patologias)', 'USG ombro'],
            tratamento: 'Fase dolorosa: AINE, fisioterapia suave, infiltração de corticoide intra-articular. Fase de rigidez: mobilização progressiva, hidrodistensão. Cirurgia (liberação artroscópica) em refratários.',
            diferenciais: ['Tendinite do manguito rotador', 'Artrose glenoumeral', 'Síndrome do impacto'],
            alertas: ['DM aumenta risco e piora prognóstico da capsulite adesiva (controle glicêmico rigoroso)', 'Mobilização forçada na fase aguda piora o quadro — respeitar a dor', 'Resolução espontânea em 1-3 anos, mas com sequela de rigidez residual em 40%'],
            perola: 'Cápsula articular do ombro (recesso axilar) fica fibrosada e retraída. Hidrodistensão: injeção de SF sob pressão para romper aderências — eficaz na fase de rigidez.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'cisto-baker', nome: 'Cisto de Baker (Cisto Poplíteo)', cid: 'M71.2',
            descricao: 'Coleção de líquido sinovial na fossa poplítea, geralmente comunicando com a articulação do joelho através da bursa semimembranosa-gastrocnêmia.',
            apresentacao: 'Massa palpável na fossa poplítea, dor ou desconforto posterior no joelho. Piora ao estender ou fletir o joelho. Rotura: dor aguda na panturrilha (mimetiza TVP).',
            criterios: ['USG de fossa poplítea (coleção anecoica/hipoecoica comunicando com a articulação)'],
            exames: ['USG fossa poplítea (diagnóstico e guia de aspiração)', 'RM joelho (lesão associada — menisco, cartilagem)'],
            tratamento: 'Tratar a causa intra-articular (meniscopatia, artrose, artrite). Aspiração guiada por USG + corticoide. Cirurgia raramente necessária (ressecção do cisto).',
            diferenciais: ['TVP (Doppler venoso)', 'Aneurisma da artéria poplítea', 'Lipoma', 'Sarcoma (massa dura, crescimento rápido)'],
            alertas: ['Rotura do cisto de Baker mimetiza TVP — Doppler venoso para diferenciação', 'Tratar causa intra-articular = cisto desaparece na maioria dos casos', 'RM joelho é necessária para investigar a causa (menisco, cartilagem)'],
            perola: 'Cisto de Baker roto: hematoma em formato de crescente abaixo do maléolo medial (sinal da lua crescente). Doppler venoso para excluir TVP.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'dedo-gatilho', nome: 'Dedo em Gatilho (Tenossinovite Estenosante)', cid: 'M65.3',
            descricao: 'Inflamação e estreitamento da bainha do tendão flexor, causando bloqueio do deslizamento. O tendão fica preso ao passar pelo nódulo inflamatório.',
            apresentacao: 'Crepitação e dificuldade de dobrar/estender o dedo. Estalo ao fletir/estender. Fase avançada: bloqueio em flexão que requer extensão passiva (força). Dor à palpação da polpa.',
            criterios: ['Diagnóstico clínico: crepitação + bloqueio ao deslizamento do tendão flexor'],
            exames: ['USG (espessamento da polia A1, nódulo tendinoso)'],
            tratamento: 'Fase leve: infiltração de corticoide na bainha (70-80% de resolução). Fase grave ou recidivante: tenotomia percutânea ou cirurgia aberta (liberação da polia A1).',
            diferenciais: ['Artrite reumatoide (múltiplos dedos, simétrico)', 'Dupuytren (contratura palmar)', 'Artrose interfalangeana'],
            alertas: ['DM é fator de risco importante — controle glicêmico pode prevenir recorrência', 'Corticoide na bainha: máximo 2-3 injeções (atrofia cutânea, hipopigmentação)', 'Tenotomia percutânea por USG: eficaz e menos invasiva que cirurgia aberta'],
            perola: 'Infiltração de corticoide na bainha do flexor: taxa de sucesso 70-80% em primeira injeção. Segunda injeção reduz para 50%. Após duas falhas = cirurgia.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'de-quervain', nome: 'Síndrome de De Quervain', cid: 'M65.4',
            descricao: 'Tenossinovite estenosante do 1º compartimento extensor (extensor longo e abdutor curto do polegar). Frequente em puérperas, lactantes e trabalhadores manuais.',
            apresentacao: 'Dor no processo estiloide radial irradiando pelo polegar e antebraço. Sinal de Finkelstein positivo (polegar envolto pelos dedos + desvio ulnar do punho reproduz a dor).',
            criterios: ['Diagnóstico clínico: dor no estiloide radial + Finkelstein positivo'],
            exames: ['USG (espessamento da bainha, líquido peritendinoso)'],
            tratamento: 'Órtese imobilizando polegar e punho. Infiltração de corticoide no 1º compartimento (80% de sucesso). Cirurgia se refratário.',
            diferenciais: ['Artrose do trapézio-metacarpo (rizartrose)', 'Síndrome do cruzamento', 'Fratura do escafoide'],
            alertas: ['Puérpera com dor no polegar ao segurar o bebê = De Quervain até prova em contrário', 'Infiltração: evitar injeção subcutânea (hipopigmentação) — intratendinosa é a correta', 'Órtese deve imobilizar o polegar EM ABDUÇÃO e o punho (evitar posição de pinça)'],
            perola: 'Sinal de Finkelstein: não confundir com de Eichhoff (polegar envolto pelos dedos, não o polegar em oposição). Finkelstein é qualquer manobra que reproduza a dor ao desvio ulnar.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'fratura-radio-distal', nome: 'Fratura do Rádio Distal (Fratura de Colles)', cid: 'S52.5',
            descricao: 'Fratura mais comum do punho, geralmente por queda sobre a mão estendida. Fratura de Colles: desvio dorsal do fragmento distal (deformidade em "garfo"). Típica em idosas com osteoporose.',
            apresentacao: 'Dor intensa no punho + deformidade (punho em "garfo" de jantar, "baioneta"). Edema, equimose. Frequentemente bilateral na osteoporose (queda de ambos os lados).',
            criterios: ['Rx punho AP + perfil (confirma fratura e desvio)'],
            exames: ['Rx punho AP + perfil', 'TC punho (cominuição, fratura intra-articular)', 'DEXA (osteoporose associada)'],
            tratamento: 'Estável sem desvio: tala gessada 4-6 semanas. Com desvio: redução fechada + gesso ou fixação cirúrgica (placa volar — padrão atual).',
            diferenciais: ['Fratura do escafoide (snuffbox dolorosa)', 'Luxação do carpo', 'Fratura do processo estiloide', 'Entorse do punho'],
            alertas: ['Toda fratura de rádio distal em pós-menopausa = investigar osteoporose (DEXA)', 'Fratura intra-articular ou muito cominuta = cirurgia (resultado melhor com placa volar)', 'Complicações: síndrome do túnel do carpo, rigidez, artrose do punho'],
            perola: 'Fratura de Colles é o sinal-sentinela da osteoporose na mulher pós-menopausa. É a fratura que precede a fratura de quadril em anos — oportunidade de prevenir.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'fratura-clavicular', nome: 'Fratura da Clavícula', cid: 'S42.0',
            descricao: 'Fratura mais comum do cíngulo escapular. 80% no terço médio. Mecanismo: queda sobre o ombro ou braço estendido. Frequente em ciclistas e pedestres atropelados.',
            apresentacao: 'Dor, edema e deformidade na clavícula após trauma. Omoplata caída, apoio do braço (atitude antálgica). Crepitação. Ombro encurtado anteriorizado.',
            criterios: ['Rx ombro AP + incidência cefálica da clavícula'],
            exames: ['Rx clavícula (AP + angulado 15-20° cefálico)', 'TC (avaliação cirúrgica — encurtamento, cominuição)'],
            tratamento: 'Terço médio não deslocada: tipoia 3-6 semanas. Terço médio deslocada com encurtamento > 2 cm ou cominuição: cirurgia (placa + parafusos). Terço lateral: operatória se instável.',
            diferenciais: ['Luxação acromioclavicular (dor no acrômio)', 'Luxação esterno-clavicular', 'Fratura de úmero proximal'],
            alertas: ['Verificar pulso e sensibilidade do membro (lesão neurovascular associada — plexo braquial, artéria subclávia)', 'Pseudartrose do terço médio em encurtamento > 2 cm não operado', 'Tipoia não "reduz" a fratura — apenas imobiliza e controla a dor'],
            perola: 'Maioria das fraturas de clavícula consolidam com tipoia. Critérios cirúrgicos: encurtamento > 2 cm, cominuição, pele comprometida, fraturas bilaterais ou flutuante.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'fratura-calcaneo', nome: 'Fratura do Calcâneo', cid: 'S92.0',
            descricao: 'Fratura mais comum do tarso. Mecanismo: queda de altura (impacto axial). Alta energia. Frequentemente bilateral e associada a fraturas vertebrais e de pelve.',
            apresentacao: 'Dor intensa no calcanhar, edema, equimose plantar bilateral característica ("sinal do calcanhar"). Impotência funcional. Pé alargado e achatado.',
            criterios: ['Rx calcanhar (AP + perfil — ângulo de Böhler < 20° = fratura)'],
            exames: ['Rx calcanhar (perfil — ângulo de Böhler e Gissane)', 'TC calcanhar (extensão intra-articular, cirurgia)', 'RX coluna lombar e pelve (fraturas associadas)'],
            tratamento: 'Intra-articular deslocada: controverso. Conservador: elevação + gelo + gesso/órtese. Cirurgia: redução aberta + fixação interna em selecionados (risco de deiscência na diabetes e fumantes).',
            diferenciais: ['Fratura de talus', 'Entorse do tornozelo', 'Tendinite do Aquiles', 'Fratura por estresse do calcanhar'],
            alertas: ['Sempre Rx coluna lombar após fratura de calcâneo por queda de altura (30% tem fratura vertebral associada)', 'DM e tabagismo: aumentam muito complicações cirúrgicas — tratamento conservador preferível', 'Síndrome compartimental do pé pode ocorrer — monitorar'],
            perola: 'Ângulo de Böhler: linha do tubérculo posterior ao ponto mais alto do processo anterior + linha ao ponto mais alto da cúpula articular. Normal 20-40°. Achatado = fratura.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'meralgia-parestetica', nome: 'Meralgia Parestésica', cid: 'G57.1',
            descricao: 'Compressão ou estiramento do nervo femorocutâneo lateral no ligamento inguinal. Causa parestesias na face anterolateral da coxa.',
            apresentacao: 'Queimor, dormência e parestesias na face anterolateral da coxa (não medial — não é nervo crural). Piora ao ficar em pé ou caminhar, melhora ao sentar. Sem fraqueza muscular.',
            criterios: ['Diagnóstico clínico: distribuição sensitiva do nervo femorocutâneo lateral + sem déficit motor', 'EMG/condução nervosa (confirma se necessário)'],
            exames: ['Eletroneuromiografia', 'USG do ligamento inguinal (compressão)'],
            tratamento: 'Perda de peso. Evitar roupas ou cintos apertados. Analgésicos. Infiltração perineural de corticoide. Cirurgia (neurólise ou neurectomia) em casos refratários.',
            diferenciais: ['Radiculopatia L2-L3 (com fraqueza e reflexos alterados)', 'Artrose do quadril (dor inguinal)', 'Bursite trocantérica (face lateral do quadril)'],
            alertas: ['Gravidez e obesidade são causas frequentes — resolver o fator causal', 'Sem fraqueza muscular (diferente da radiculopatia)', 'Meralgia = nervo puramente sensitivo — fraqueza aponta para outro diagnóstico'],
            perola: 'Meralgia parestésica é frequente em grávidas (útero comprime o nervo inguinal) e em quem usa calças muito apertadas. Sem tratamento, tende à resolução espontânea após o parto ou após perder peso.',
            especialidade: 'Neurologia/Ortopedia'
          },
        ]
      },
      {
        sintoma: 'Trauma e Urgências Ortopédicas',
        doencas: [
          {
            id: 'fratura-pelve', nome: 'Fratura de Pelve', cid: 'S32.8',
            descricao: 'Alta energia (atropelamento, queda de altura) ou fragilidade óssea (idoso). O anel pélvico é estrutura tridimensional — instabilidade vertical é a mais grave (Tile C). Risco de hemorragia massiva.',
            apresentacao: 'Dor pélvica intensa, instabilidade ao comprimir a pelve, incapacidade de caminhar. Choque hemorrágico (pelve "contém" 4-6 L de sangue). Hematoma perineal e escrotal.',
            criterios: ['Rx pelve AP (triagem)', 'TC pelve (estadiamento, planejamento cirúrgico)', 'Classificação de Tile/AO (A: estável, B: parcialmente instável, C: completamente instável)'],
            exames: ['Rx pelve AP (urgência)', 'TC pelve + abdome (lesões associadas)', 'Angiografia (embolização se sangramento ativo)'],
            tratamento: 'Choque + fratura instável: ressuscitação + cinta pélvica de emergência (reduz anel e controla sangramento) + embolização angiográfica ou empacotamento cirúrgico. Fixação definitiva: fixador externo ou ORIF.',
            diferenciais: ['Luxação de quadril', 'Fratura de acetábulo', 'Lesão do plexo lombossacral'],
            alertas: ['Cinta pélvica de emergência deve ser aplicada no grande trocânter (não na crista ilíaca)', 'Urinar + fratura de pelve = suspeita de lesão uretral (não sondar sem uretroscopia)', 'Instabilidade pélvica: mortalidade de 10-30% principalmente por hemorragia'],
            perola: 'Pelve instável + choque = catástrofe. "Damage control" pélvico: cinta pélvica + angioembolização é mais eficaz que fixação cirúrgica imediata para controle do sangramento.',
            especialidade: 'Ortopedia/Cirurgia do Trauma'
          },
          {
            id: 'lesao-medular', nome: 'Lesão Medular Aguda', cid: 'S14',
            descricao: 'Trauma da medula espinhal causando déficit neurológico permanente ou transitório. Causas: trauma vertebral (fratura-luxação), ferimento por arma branca/fogo, compressão por hematoma/abscesso.',
            apresentacao: 'Completa: ausência total de função motora e sensitiva abaixo do nível da lesão. Incompleta: alguma função preservada (melhor prognóstico). Choque medular: hipotensão + bradicardia nas primeiras horas.',
            criterios: ['Classificação ASIA (A-E): A = completa, B-D = incompleta, E = normal'],
            exames: ['RM coluna (padrão ouro — compressa, hematoma, luxação)', 'TC coluna (avaliação óssea)', 'ASIA score na admissão e sequencialmente'],
            tratamento: 'Imobilização imediata (colar rígido + prancha). RM urgente. Cirurgia de descompressão em < 24h (melhor resultado nas lesões incompletas). Metilprednisolona em protocolo: CONTROVERSO (protocolo NASCIS 2 abandonado em muitos centros).',
            diferenciais: ['AVC medular', 'Síndrome de Guillain-Barré (ascendente, sem trauma)', 'Tumor raquidiano compressivo'],
            alertas: ['Imobilização cervical em TODO politraumatizado até exclusão de lesão cervical por TC', 'Metilprednisolona: não é mais recomendada de rotina — decisão individualizada', 'Choque medular vs choque hipovolêmico: medular tem bradicardia (diferente do hemorrágico com taquicardia)'],
            perola: 'Lesão medular incompleta tem muito melhor prognóstico. Síndrome centromedular (mais comum): fraqueza predomina nos membros superiores, preserva sacral.',
            especialidade: 'Ortopedia/Neurocirurgia'
          },
          {
            id: 'embolia-gordurosa', nome: 'Síndrome de Embolia Gordurosa', cid: 'T79.1',
            descricao: 'Embolização de glóbulos de gordura medular para a circulação pulmonar e sistêmica após fratura de ossos longos (fêmur, tíbia) ou cirurgia ortopédica. Tríade: hipóxia + confusão + petéquias.',
            apresentacao: 'Latência de 24-72h após fratura. Tríade de Gurd: insuficiência respiratória + alteração neurológica + petéquias (conjuntiva, pescoço, axilas). Febre. Anemia.',
            criterios: ['Critérios de Gurd: 1 critério maior + 4 menores', 'Critérios maiores: petéquias, hipóxia, confusão. Critérios menores: febre, anemia, taquicardia, êmbolos na retina'],
            exames: ['Gasometria (hipóxia)', 'Rx tórax (infiltrado bilateral)', 'TC crânio (exclusão AVC)', 'Fundoscopia (êmbolos gordurosos)'],
            tratamento: 'Suporte: O2, VNI ou VM se necessário. Estabilização precoce da fratura (cirurgia em < 24h reduz incidência). Não há tratamento específico.',
            diferenciais: ['TEP (D-dímero elevado, angioTC)', 'SARA (pneumonia, sepse como causa)', 'AVC (déficit focal)'],
            alertas: ['Estabilização cirúrgica precoce da fratura é a melhor prevenção', 'Petéquias em conjuntiva e pescoço são transitórias e podem ser perdidas', 'Gordura na urina (urinálise com Sudan III) apoia o diagnóstico'],
            perola: 'Fratura de fêmur + confusão após 48h = embolia gordurosa até prova em contrário. Gasometria + Rx tórax urgentes. A hipóxia frequentemente precede os sintomas neurológicos.',
            especialidade: 'Ortopedia/Terapia Intensiva'
          },
          {
            id: 'luxacao-cotovelo', nome: 'Luxação do Cotovelo', cid: 'S53.1',
            descricao: 'Segunda luxação mais comum após o ombro. Geralmente posterior (queda sobre mão estendida). Pode associar fratura da cabeça do rádio ou do coronoide (terrible triad).',
            apresentacao: 'Dor intensa + deformidade posterior do cotovelo + flexão em 45°. Impotência funcional. Avaliar nervo ulnar e artéria braquial.',
            criterios: ['Rx cotovelo (AP + perfil) confirma luxação e pesquisa fratura associada'],
            exames: ['Rx cotovelo AP + perfil (luxação + fraturas)', 'TC (fraturas associadas)', 'Doppler se suspeita vascular'],
            tratamento: 'Redução fechada sob sedação + Rx pós-redução. Tipoia 1-2 semanas. Mobilização precoce. Cirurgia se fratura associada (terrible triad).',
            diferenciais: ['Fratura de úmero distal', 'Fratura-luxação Monteggia', 'Fratura do olécrano'],
            alertas: ['Avaliar pulso radial e sensibilidade ANTES e APÓS redução', 'Terrible triad (luxação + fratura radial + fratura coronoide): cirurgia obrigatória', 'Imobilização prolongada causa rigidez — mobilizar precocemente'],
            perola: 'Posição de redução da luxação posterior: flexão do cotovelo + tração em linha + pressão anterior no olécrano. Redução com sensação de clique característico.',
            especialidade: 'Ortopedia/Medicina de Urgência'
          },
          {
            id: 'fratura-escafoide', nome: 'Fratura do Escafoide', cid: 'S62.0',
            descricao: 'Fratura mais comum do carpo. Alta energia em adultos jovens. Risco de necrose avascular (polo proximal tem vascularização precária, de distal para proximal).',
            apresentacao: 'Dor na tabaqueira anatômica (fossa entre longo extensor do polegar e extensor curto) após queda sobre punho estendido. Rx inicial pode ser NEGATIVA em 20% dos casos.',
            criterios: ['Dor na tabaqueira anatômica após trauma = fratura de escafoide até prova em contrário', 'RM (padrão ouro quando Rx negativa)'],
            exames: ['Rx punho AP + perfil + incidência do escafoide', 'RM punho se Rx negativa e clínica positiva (confirma fratura oculta)', 'TC (planejamento cirúrgico)'],
            tratamento: 'Terço distal/médio não deslocada: gesso espica polegar 8-12 semanas. Deslocada ou polo proximal: cirurgia (parafuso canulado).',
            diferenciais: ['Entorse do punho', 'Fratura do rádio distal', 'Síndrome de De Quervain', 'Doença de Kienböck (lunato)'],
            alertas: ['Rx negativa NÃO exclui fratura de escafoide — RM se dor persiste na tabaqueira', 'Tratamento tardio = necrose avascular + pseudartrose + artrose do punho', 'Fumo retarda consolidação (hipóxia tecidual) — orientar cessação'],
            perola: 'Regra de ouro: qualquer queda sobre o punho com dor na tabaqueira anatômica = tratar como fratura de escafoide (gesso) até RM excluir. Rx falso-negativo em 20%.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'perthes', nome: 'Doença de Legg-Calvé-Perthes', cid: 'M91.1',
            descricao: 'Osteonecrose avascular idiopática da cabeça femoral em crianças (4-10 anos, meninos). Isquemia transitória → necrose → revascularização → remodelação.',
            apresentacao: 'Claudicação indolor ou pouco dolorosa, limitação de movimentos do quadril (especialmente abducão e rotação interna). Rx inicial pode ser normal — cintilografia confirma precoce.',
            criterios: ['Rx: esclerose, fragmentação, colapso da epífise femoral', 'RM (estágio precoce antes do Rx)'],
            exames: ['Rx pelve AP + lateral de rã (Lauenstein)', 'RM quadril (fase precoce)', 'Cintilografia óssea (fase pré-radiográfica)'],
            tratamento: 'Contenção da cabeça femoral no acetábulo (melhora remodelação). Fisioterapia. Órtese de abdução. Cirurgia (osteotomia femoral ou pélvica) em casos graves (> 50% de colapso, > 8 anos).',
            diferenciais: ['Artrite séptica do quadril (febre, urgência)', 'Sinovite transitória (autolimitada, Rx normal)', 'Epifisiolise femoral (adolescente obeso)', 'Displasia do quadril'],
            alertas: ['Crianças > 8 anos ao diagnóstico têm pior prognóstico (menos tempo de remodelação)', 'Não confundir com sinovite transitória (RNM e cintilografia diferem)', 'Longo prazo: artrose do quadril na vida adulta em 30-50%'],
            perola: 'Sinal de Gage (Rx): radiolucência em V no quadrante ântero-lateral da epífise. Calcificações laterais ao acetábulo. Ambos são sinais de mau prognóstico em Perthes.',
            especialidade: 'Ortopedia Pediátrica'
          },
          {
            id: 'epifisiolise', nome: 'Epifisiolise Femoral Proximal (EFP)', cid: 'M93.0',
            descricao: 'Deslizamento da epífise femoral pelo disco fisário em adolescentes obesos. Emergência ortopédica — deslizamento agudo causa necrose avascular.',
            apresentacao: 'Adolescente obeso (10-16 anos) com dor no quadril/joelho e claudicação. Dor no joelho pode ser referida (nervo obturador). Limitação de rotação interna, sinal de Drehmann (rotação externa na flexão).',
            criterios: ['Rx pelve AP + Lauenstein: deslizamento da epífise (sinal da sorvete caindo do cone)'],
            exames: ['Rx pelve AP + perfil de rã (Lauenstein) bilateral', 'RM (confirma e avalia vascularização)'],
            tratamento: 'EMERGÊNCIA: repouso + cirurgia imediata. Fixação in situ com parafuso canulado (sem reduzir o deslizamento — risco de necrose). Profilaxia do lado contralateral discutida.',
            diferenciais: ['Doença de Perthes (menor)', 'Sinovite transitória', 'Artrite séptica', 'Tumores pélvicos'],
            alertas: ['Não tentar reduzir o deslizamento — aumenta o risco de necrose avascular', 'Dor no joelho em adolescente obeso = fazer Rx do quadril bilateral', 'Bilateral em 20-40% dos casos — considerar fixação profilática contralateral'],
            perola: 'EFP aguda com deslizamento grave: maior risco de necrose avascular. Deslizamento crônico leve (< 30°): melhor prognóstico e menor risco de complicações.',
            especialidade: 'Ortopedia Pediátrica'
          },
          {
            id: 'osgood-schlatter', nome: 'Doença de Osgood-Schlatter', cid: 'M92.5',
            descricao: 'Osteocondrose por tração do tendão patelar na tuberosidade tibial em adolescentes em fase de crescimento. Microavulsões repetidas da apófise.',
            apresentacao: 'Adolescente em estirão de crescimento (10-15 anos) com dor e edema na tuberosidade tibial anterior, piora com esportes (saltos, agachamentos). Dor à palpação local.',
            criterios: ['Diagnóstico clínico: adolescente em crescimento + dor/edema na tuberosidade tibial + piora com esportes'],
            exames: ['Rx joelho lateral (irregularidade da apófise, fragmento ósseo)', 'USG (espessamento do tendão, fragmentos)'],
            tratamento: 'Autolimitada (resolução com o fechamento da fise). Repouso relativo, gelo, AINE. Fisioterapia. Raramente cirurgia (remoção do fragmento em adultos sintomáticos).',
            diferenciais: ['Síndrome femoropatelar', 'Tendinite patelar', 'Doença de Sinding-Larsen-Johansson (polo inferior da patela)'],
            alertas: ['Doença autolimitada que resolve com fechamento da placa de crescimento', 'Evitar atividades que exacerbem a dor — não proibir totalmente (descondiciona)', 'Raro em adultos: fragmento ósseo persistente que requer cirurgia'],
            perola: 'Osgood-Schlatter: 30% bilateral. Frequente em atletas adolescentes. Não é grave — tranquilizar pais e paciente. Resolve ao fechar a epífise (18-20 anos).',
            especialidade: 'Ortopedia Pediátrica'
          },
          {
            id: 'escoliose-idiopatica', nome: 'Escoliose Idiopática do Adolescente', cid: 'M41.1',
            descricao: 'Curvatura lateral da coluna > 10° (Cobb), com rotação vertebral, no adolescente. Etiologia desconhecida. Mais comum em meninas.',
            apresentacao: 'Assimetria dos ombros, omoplatas e quadris. Gibosidade costal ao teste de Adams (inclinação para frente com joelhos estendidos). Geralmente indolor.',
            criterios: ['Rx coluna total AP: ângulo de Cobb > 10° com rotação vertebral'],
            exames: ['Rx coluna total (AP + perfil — ângulo de Cobb, maturidade de Risser)', 'RM se: < 10 anos, dor noturna, déficit neurológico, curva atípica'],
            tratamento: 'Cobb 10-20°: observação a cada 6 meses. Cobb 20-40° em crescimento: colete de Boston (23h/dia). Cobb > 40-50° ou progressão rápida: cirurgia (artrodese + instrumentação).',
            diferenciais: ['Escoliose neuromuscular (PCI, distrofias)', 'Escoliose congênita (hemivértebra)', 'Escoliose dolorosa (tumor, espondilodiscite — RM obrigatória)'],
            alertas: ['Escoliose dolorosa em < 10 anos: SEMPRE fazer RM (tumor, malformação de Chiari, siringomielia)', 'Colete eficaz somente em esqueleto imaturo (Risser 0-2) — inútil em adulto', 'Curvas > 50° em adultos progridem 1°/ano independente de crescimento'],
            perola: 'Teste de Adams: inclinação anterior do tronco com joelhos estendidos. Gibosidade costal (assimetria do tórax) indica rotação vertebral — distingue escoliose estrutural de postural.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'neuroartropatia-charcot', nome: 'Neuroartropatia de Charcot', cid: 'M14.6',
            descricao: 'Destruição articular progressiva por neuropatia sensitiva. Causas: DM (mais comum), hanseníase, tabes dorsalis. Perda da sensação protetora + trauma repetitivo = destruição óssea progressiva.',
            apresentacao: 'Articulação edemaciada, quente, eritematosa, com deformidade, SEM DOR (ou dor desproporcional à destruição). Pé de Charcot: colapso do arco plantar, pé em "bota".',
            criterios: ['Rx: "5Ds" — Distension, Dislocation, Debris, Destruction, Disorganization', 'RM: fase aguda (edema medular) vs crônica (esclerose, deformidade)'],
            exames: ['Rx (destruição, deformidade)', 'RM (diferencia de osteomielite — difícil)', 'Cintilografia + leucócitos marcados (osteomielite vs Charcot)'],
            tratamento: 'Fase aguda: imobilização rígida (gesso de contato total) até esfriar. Fase crônica: palmilha personalizada, calçado ortopédico. Cirurgia: artrodese em casos selecionados.',
            diferenciais: ['Artrite séptica/osteomielite (febre, leucocitose)', 'Artrite inflamatória', 'Osteonecrose avascular'],
            alertas: ['DM + pé quente/edemaciado/eritematoso = Charcot até prova em contrário (não celulite)', 'Distinção Charcot vs osteomielite é extremamente difícil — pode coexistir', 'Gesso de contato total redistribui a carga e permite a consolidação'],
            perola: '"Pé quente, edemaciado, vermelho com deformidade SEM DOR em diabético" = Charcot. A ausência de dor diferencia do infeccioso, onde a dor é intensa.',
            especialidade: 'Ortopedia/Endocrinologia'
          },
        ]
      },
      {
        sintoma: 'Ortopedia do Pé, Ombro e Coluna',
        doencas: [
          {
            id: 'hallux-valgus', nome: 'Hallux Valgus (Joanete)', cid: 'M20.1',
            descricao: 'Desvio lateral do hálux com desvio medial do primeiro metatarso (metatarsus primus varus). Proeminência óssea medial (bunion). Mais comum em mulheres e usuárias de calçados de bico estreito.',
            apresentacao: 'Deformidade visível do hálux, dor na cabeça do 1º metatarso, calosidade medial. Progressiva. Pode causar bursita e artrose da MTP.',
            criterios: ['Rx pé em carga: ângulo HV > 15°, ângulo intermetatarsal 1-2 > 9°'],
            exames: ['Rx pé AP + oblíquo em ortostatismo'],
            tratamento: 'Conservador (leve-moderado): palmilha de separação digital, calçado largo. Cirurgia (moderado-grave): osteotomia de Chevron, Scarf ou procedimento de Lapidus (artrodese TMT).',
            diferenciais: ['Artrite reumatoide (poliarticular)', 'Gota (1ª MTP — podagra)', 'Bursite do hálux'],
            alertas: ['Cirurgia não é estética — indicada para dor significativa resistente ao conservador', 'Escolha do procedimento depende do grau de deformidade (ângulos radiológicos)', 'Complicações: recorrência, rigidez, transferência de carga, infecção'],
            perola: 'Hallux valgus > 40°: geralmente necessita osteotomia basal ou artrodese TMT (Lapidus) — osteotomia de Chevron (distal) é insuficiente para grandes deformidades.',
            especialidade: 'Ortopedia do Pé e Tornozelo'
          },
          {
            id: 'fascite-plantar', nome: 'Fascite Plantar', cid: 'M72.2',
            descricao: 'Inflamação/degeneração da fáscia plantar na inserção no calcâneo. Causa mais comum de dor no calcanhar. Associada a obesidade, esportes de impacto, pé plano/cavo.',
            apresentacao: 'Dor em queimor no calcanhar medial, pior nos primeiros passos pela manhã ou após repouso prolongado (sinal da "primeira passos"). Dor à palpação do tubérculo medial do calcâneo.',
            criterios: ['Diagnóstico clínico: dor plantar + piora nos primeiros passos + dor à palpação do tubérculo calcâneo'],
            exames: ['USG (espessamento da fáscia > 4 mm)', 'RM (casos refratários)', 'Rx calcâneo (esporão calcâneo — associado mas não causa)'],
            tratamento: 'Conservador (95%): alongamento do Aquiles e da fáscia, palmilha de suporte de arco, AINE, perda de peso. Infiltração de corticoide (guiada por USG). PRP. ESWT (ondas de choque). Cirurgia raramente.',
            diferenciais: ['Fratura por estresse do calcâneo (corredores)', 'Neuroma de Baxter (nervo plantar lateral)', 'Artrite inflamatória (bilateral)', 'Artrite séptica do calcâneo (febre)'],
            alertas: ['Esporão calcâneo presente em 50% dos assintomáticos — NÃO é a causa da dor', 'Corticoide local: risco de ruptura da fáscia e atrofia da gordura plantar — máximo 1-2 injeções', 'Tratamento conservador por 6-12 meses antes de considerar cirurgia'],
            perola: 'Dor piora nos primeiros passos mas melhora com o caminhar (diferente de fratura por estresse que piora com atividade). O alongamento do Aquiles é o tratamento mais eficaz — tensão da fáscia via cadeia posterior.',
            especialidade: 'Ortopedia do Pé e Tornozelo'
          },
          {
            id: 'sindrome-impacto-ombro', nome: 'Síndrome do Impacto do Ombro', cid: 'M75.1',
            descricao: 'Compressão do manguito rotador (supraespinal) no espaço subacromial durante a elevação do braço. Espectro: bursite subacromial → tendinite → ruptura parcial → ruptura total.',
            apresentacao: 'Dor no ombro lateral-anterior, piora ao elevar o braço (entre 60-120° — arco doloroso). Dor noturna ao deitar sobre o ombro. Testes de Neer e Hawkins positivos.',
            criterios: ['Clínico: arco doloroso + Neer/Hawkins positivos', 'RM (estadiamento da lesão do manguito)'],
            exames: ['Rx ombro AP + axial + outlet (acromionização, morfologia do acrômio)', 'RM ombro (lesão do manguito, bursite)', 'USG ombro (dinâmico, guia de infiltração)'],
            tratamento: 'Fase 1 (inflamação): AINE, fisioterapia, infiltração subacromial de corticoide. Fase 2 (fortalecimento): rotadores e deltóide. Cirurgia: acromioplastia artroscópica + reparo do manguito se ruptura.',
            diferenciais: ['Capsulite adesiva (limitação global)', 'Artrose acromioclavicular', 'Instabilidade glenoumeral', 'Radiculopatia cervical C5-C6'],
            alertas: ['Ruptura completa do supraespinal: fraqueza na abdução (diferente da tendinite)', 'Infiltração subacromial: confirma diagnóstico e alivia dor — não cura', 'Acrômio tipo III (em gancho): maior risco de ruptura do manguito'],
            perola: 'Teste de Neer: braço em rotação interna + elevação forçada pelo examinador = impacto do supraespinal no acrômio. Hawkins: cotovelo em 90° + rotação interna = comprime o supraespinal no ligamento coracoacromial.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'espondilolistese', nome: 'Espondilolistese', cid: 'M43.1',
            descricao: 'Deslizamento anterior de uma vértebra sobre a inferior. Ístmica (ruptura do istmo — jovens atletas, L5-S1) ou degenerativa (artrose facetária — idosos, L4-L5).',
            apresentacao: 'Dor lombar com ou sem radiculopatia. Degrau palpável na coluna lombar. Graus I-IV (Meyerding: < 25%, 25-50%, 50-75%, > 75%). Radiculopatia: L5 (ístmica) ou L4-L5 (degenerativa).',
            criterios: ['Rx coluna lombar em perfil: deslizamento + grau de Meyerding', 'TC (lise do istmo — fractura de fadiga)', 'RM (compressão radicular, disco)'],
            exames: ['Rx coluna lombar AP + perfil (em ortostatismo)', 'TC (istmo)', 'RM (raízes nervosas, disco)'],
            tratamento: 'Grau I-II: conservador (fisioterapia, fortalecimento core, AINE). Grau III-IV ou refratário com radiculopatia: cirurgia (artrodese instrumentada L4-S1 + descompressão).',
            diferenciais: ['Hérnia de disco lombar (sem degrau vertebral)', 'Estenose do canal lombar', 'Tumor vertebral', 'Espondilodiscite'],
            alertas: ['Jovem com dor lombar ao hiperextender (ginasta, nadador de costas) = suspeita de espondilólise/espondilolistese', 'TC em jovem para detectar a fratura do istmo (Rx pode ser negativa)', 'Espondilolistese degenerativa em L4-L5: causa de estenose do canal adquirida em idosos'],
            perola: 'Espondilólise: fratura do pars interarticularis (istmo). "Colarinho de cachorro" na incidência oblíqua do Rx. Causa a espondilolistese. Em ginastas e nadadores de costas.',
            especialidade: 'Ortopedia/Coluna'
          },
          {
            id: 'bursite-olecrano', nome: 'Bursite do Olécrano', cid: 'M70.2',
            descricao: 'Inflamação da bursa olecraniana (superficial, posterior do cotovelo). Causas: trauma repetitivo (apoio), infecciosa (Staph aureus) ou inflamatória (gota, AR).',
            apresentacao: 'Tumefação posterior ao cotovelo, flutuante, com ou sem dor. Bursite séptica: eritema + calor + dor + febre. Tranquilizar: raramente limita movimento do cotovelo.',
            criterios: ['Clínico: tumefação olecraniana + flutuação', 'Punção: líquido (aspecto, cultura, células, cristais)'],
            exames: ['Punção diagnóstica (urgente se suspeita de infecção)', 'USG (confirma e guia punção)', 'Rx (calcificações, erosões na gota/AR)'],
            tratamento: 'Traumática: AINE, proteção, aspiração se volumosa. Séptica: aspiração + antibiótico (cefalexina VO / oxacilina EV). Refratária/crônica: bursectomia cirúrgica.',
            diferenciais: ['Artrite séptica do cotovelo (dor à mobilização)', 'Celulite (sem flutuação)', 'Gota/pseudogota (cristais na punção)', 'Artrite reumatoide (nódulos reumatoides)'],
            alertas: ['Séptica: não injetar corticoide — risco de abscessar', 'Punção diagnóstica obrigatória sempre que há sinais inflamatórios', 'Antibiótico empírico cobre Staph aureus (cefalexina ou oxacilina)'],
            perola: 'Regra: bursite olecraniana quente/vermelha/dolorosa = séptica até prova em contrário. Punção + cultura + Gram + contagem de células. Leucócitos > 50.000 = infecção.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'luxacao-acromioclavicular', nome: 'Luxação Acromioclavicular', cid: 'S43.1',
            descricao: 'Lesão dos ligamentos acromioclavicular e coracoclavicular por trauma direto no acrômio (queda sobre o ombro). Classificação de Rockwood I-VI (I: entorse, II: subluxação, III-VI: luxação).',
            apresentacao: 'Dor no acrômio após trauma, sinal de "tecla de piano" (clavícula distal elevada e redutível), Step-off palpável. Impotência funcional do ombro.',
            criterios: ['Rx ombro AP (estressada com peso no punho) + comparativa com ombro sadio — diferença na distância coracoclavicular'],
            exames: ['Rx bilateral dos ombros em carga (comparativa)', 'TC (luxação posterior — Rockwood V-VI)'],
            tratamento: 'Rockwood I-II: tipoia 1-2 semanas, fisioterapia. Rockwood III: controverso (pode ser conservador em não-ativos). Rockwood IV-VI: cirurgia (redução + fixação coracoclavicular).',
            diferenciais: ['Fratura da clavícula', 'Luxação glenoumeral', 'Síndrome do impacto do ombro'],
            alertas: ['Rockwood III: tratar conservadoramente em primeira instância (resultados comparáveis ao cirúrgico a longo prazo)', 'Rockwood V-VI: sinal de penetração da clavícula na pele = urgência cirúrgica', 'Atletas de arremesso e levantamento de peso podem necessitar cirurgia em Rockwood III'],
            perola: 'Sinal do "piano key": pressionar a clavícula distal eleva-a (como uma tecla de piano) e ao soltar desce. Indica luxação acromioclavicular grau III ou maior.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'fratura-patela', nome: 'Fratura da Patela', cid: 'S82.0',
            descricao: 'Mecanismo: trauma direto (joelhada) ou contração violenta do quadríceps (fratura indireta). Importante: lesão do aparelho extensor do joelho.',
            apresentacao: 'Dor intensa no joelho, hemartrose, impotência funcional. Incapacidade de elevar o membro estendido (ruptura do mecanismo extensor). Palpação do traço de fratura.',
            criterios: ['Rx joelho AP + perfil (fratura e grau de diástase)'],
            exames: ['Rx joelho AP + perfil', 'TC (fraturas cominutas, planejamento cirúrgico)'],
            tratamento: 'Não deslocada (< 2-3 mm diástase): gesso ou órtese em extensão 6 semanas. Deslocada: cirurgia (cerclagem em tensão — parafusos + fio de Kirschner em "8").',
            diferenciais: ['Ruptura do tendão quadricipital', 'Ruptura do tendão patelar', 'Hemartrose sem fratura'],
            alertas: ['Teste de extensão do joelho: se não consegue elevar o membro estendido = extensores comprometidos (fratura deslocada ou ruptura tendinosa)', 'Patela bipartita: incidência oblíqua e bordas escleróticas distinguem da fratura aguda', 'Reabilitação precoce = recuperação mais rápida'],
            perola: 'Fratura de patela: "joelhada" (trauma direto) vs contração violenta. Fratura transversa por contração é mais deslocada e frequentemente necessita cirurgia.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'sindrome-tibial-anterior', nome: 'Síndrome de Estresse Tibial Medial (Canelite)', cid: 'M76.8',
            descricao: 'Dor na face posteromedial da tíbia por sobrecarga do periósteo e osso cortical, em corredores e recrutas militares (overuse). Pode progredir para fratura por estresse.',
            apresentacao: 'Dor difusa na face medial da tíbia ao longo do terço médio e distal, piora com atividade física progressiva, melhora com repouso. Sensibilidade difusa à palpação.',
            criterios: ['Diagnóstico clínico: corredor/atleta + dor difusa na tíbia medial que melhora com repouso'],
            exames: ['Rx (geralmente normal — exclui fratura)', 'Cintilografia óssea (capta difusamente — vs ponto único na fratura por estresse)', 'RM (edema periostal e medular)'],
            tratamento: 'Repouso relativo (cross-training: natação/ciclismo). Palmilha com suporte de arco. Gelo. Retorno gradual à corrida. Fortalecimento. Análise de pisada.',
            diferenciais: ['Fratura por estresse da tíbia (dor focal, Rx tardio positivo)', 'Síndrome compartimental crônica de esforço (dor após distância fixa, melhora ao parar)', 'Trombose venosa profunda'],
            alertas: ['Canelite que não melhora com 2-3 semanas de repouso = suspeita de fratura por estresse (RM)', 'Fratura por estresse do córtex ANTERIOR da tíbia: alto risco de fratura completa — suspender toda atividade', 'Análise biomecânica da pisada pode revelar causa'],
            perola: '"Linha de dor": fratura por estresse = ponto focal de dor (tipo agulhada). Canelite = dor difusa. RM distingue as duas — edema medular focal vs difuso.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'fratura-umero-proximal', nome: 'Fratura do Úmero Proximal', cid: 'S42.2',
            descricao: 'Terceira fratura mais comum em idosos após rádio distal e quadril. Mecanismo: queda sobre braço estendido ou trauma direto. Classificação de Neer (fragmentos: cabeça, troquiter, troquine, diáfise).',
            apresentacao: 'Dor intensa no ombro, edema e equimose difusa (hematoma desce pelo braço). Impotência funcional. Verificar nervo axilar (sensibilidade no deltóide lateral).',
            criterios: ['Rx ombro AP + Grashey + lateral'],
            exames: ['Rx ombro AP + perfil + axial', 'TC 3D (planejamento cirúrgico em fraturas complexas)'],
            tratamento: 'Neer 1 parte (não deslocada): tipoia 3-4 semanas + fisioterapia precoce. 2-3 partes: controverso (placa vs conservador). 4 partes ou cabeça destruída: prótese de ombro (artroplastia).',
            diferenciais: ['Luxação glenoumeral', 'Fratura da clavícula', 'Síndrome do impacto do ombro'],
            alertas: ['Verificar nervo axilar: sensibilidade na face lateral do deltóide + teste de contração do deltóide', 'Necrose avascular da cabeça umeral: fraturas de 3-4 partes têm alto risco', 'Osteoporose associada: DEXA + tratamento (vitamina D, bifosfonatos)'],
            perola: 'Fratura de 4 partes: cabeça, grande e pequeno trocânter e diáfise todos fragmentados. Risco de necrose avascular > 50% — prótese é preferível à fixação interna em idosos.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'condrossarcoma', nome: 'Condrossarcoma', cid: 'C41',
            descricao: 'Tumor ósseo maligno de origem cartilaginosa. Segundo tumor primário ósseo mais comum. Graus I-III (bem, moderada, pouco diferenciado). Resistente à quimio e radioterapia — cirurgia é o tratamento.',
            apresentacao: 'Adultos 40-70 anos. Dor progressiva + massa óssea. Locais: pelve, fêmur proximal, úmero proximal, costelas. Calcificações em "pipoca" no Rx.',
            criterios: ['Rx (calcificações intratumorais em "pipoca" ou "arco e anel")', 'RM (extensão, relação com estruturas)', 'Biópsia (grau histológico)'],
            exames: ['Rx (calcificações)', 'TC torax-abdome-pelve (estadiamento)', 'RM local (extensão)', 'Cintilografia óssea (lesões múltiplas)', 'Biópsia excisional ou incisional guiada'],
            tratamento: 'Ressecção cirúrgica com margens amplas (único tratamento curativo). Quimioterapia e radioterapia: ineficazes para grau I-II. Grau III (desdiferenciado): pode responder à quimio.',
            diferenciais: ['Encondroma (benigno, < 5 cm, assintomático)', 'Osteossarcoma (jovem, matriz óssea)', 'Metástase óssea (história de neoplasia primária)', 'Cisto ósseo aneurismático'],
            alertas: ['Encondroma que cresce, dói ou tem nova captação na cintilografia = suspeita de condrossarcoma secundário', 'Biópsia ANTES da ressecção definitiva para planejamento', 'Margens positivas: alta taxa de recorrência local e metástase'],
            perola: 'Condrossarcoma é resistente à QT e RT. A cirurgia com margens amplas é a ÚNICA chance de cura. Por isso o planejamento pré-operatório é crítico.',
            especialidade: 'Oncologia Ortopédica'
          },
          {
            id: 'displasia-quadril', nome: 'Displasia do Desenvolvimento do Quadril (DDQ)', cid: 'Q65',
            descricao: 'Desenvolvimento anormal da articulação coxofemoral: acetábulo raso + cabeça femoral subluxada ou luxada. Causa: fatores mecânicos (apresentação pélvica, oligodrâmnio, primogênito) + genéticos.',
            apresentacao: 'RN: assimetria de pregas + limitação de abdução + testes de Ortolani (redução clique) e Barlow (luxação clique). Criança: claudicação de Trendelenburg bilateral (luxação bilateral = marcha de pato).',
            criterios: ['RN < 4 meses: USG do quadril (Graf — ângulo alfa < 60° = displásico)', 'Criança > 4 meses: Rx pelve AP (índice acetabular, luxação)'],
            exames: ['USG quadril neonatal (< 4 meses)', 'Rx pelve AP (> 4-6 meses — Hilgenreiner, Perkins, Shenton)', 'TC/RM (pré-operatório)'],
            tratamento: 'RN-6 meses: arnês de Pavlik (23h/dia) — 95% de sucesso. 6-18 meses: redução fechada + artrogrma + gesso. > 18 meses: redução aberta ± osteotomia. Adulto: artroscopia ou prótese.',
            diferenciais: ['Fratura de clavícula (pseudoparalisia), Artrite séptica', 'Epifisiolise (adolescente)', 'Paralisia cerebral (espasticidade)'],
            alertas: ['Triagem universal com USG em fatores de risco: pélvica, gemelar, história familiar', 'Arnês de Pavlik: não forçar — risco de necrose avascular se colocado incorretamente (flexão > 100°)', 'Diagnóstico tardio = tratamento mais complexo e pior prognóstico'],
            perola: 'Ortolani: "O" de Open/Outward — membro abduzido → clique de redução da luxação. Barlow: "B" de Back/Backward — membro aduzido → clique de luxação. Ortolani é raro após 3 meses (tecidos encurtam).',
            especialidade: 'Ortopedia Pediátrica'
          },
          {
            id: 'luxacao-glenoumeral', nome: 'Luxação Glenoumeral Anterior', cid: 'S43.0',
            descricao: 'Luxação mais comum do corpo (45-50% de todas as luxações). Mecanismo: abdução + rotação externa + extensão forçada. Lesão de Bankart (lábio anterior) em 85-97%.',
            apresentacao: 'Dor intensa + deformidade do ombro (perda do contorno deltóideo, saliência do acrômio, posição antálgica em abdução e rotação externa). Incapacidade de aduzir ou rotar internamente.',
            criterios: ['Rx ombro AP + lateral + axial (posição da cabeça umeral, lesão de Hill-Sachs)'],
            exames: ['Rx ombro AP + axilar lateral (antes da redução)', 'Rx pós-redução (confirma e exclui fratura)', 'RM (avalia Bankart, Hill-Sachs, manguito — se refratário ou recorrente)'],
            tratamento: 'Redução fechada (Stimson, Cunningham, Milch). Tipoia 2-4 semanas. Fisioterapia. Cirurgia (Bankart artroscópico): jovem atleta com primeiro episódio ou recorrente.',
            diferenciais: ['Fratura do úmero proximal', 'Síndrome do impacto', 'Luxação posterior (rara — crise convulsiva, eletrocussão)'],
            alertas: ['Verificar nervo axilar (sensibilidade deltóide + abdução) antes e após redução', 'Lesão de Hill-Sachs (fissura posterior da cabeça) em 35-40% — visível na rotação interna do Rx', 'Luxação recorrente em < 25 anos: cirurgia após primeiro episódio tem melhor resultado que tratamento conservador'],
            perola: 'Taxa de recorrência após primeira luxação: > 90% em < 20 anos, 60% entre 20-40 anos, < 10% em > 40 anos. Jovem atleta de contato = cirurgia de Bankart após primeiro episódio.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'sindrome-compartimental-cronica', nome: 'Síndrome Compartimental Crônica de Esforço', cid: 'M79.3',
            descricao: 'Aumento da pressão intracompartimental durante o exercício por espaço fascial rígido que não acomoda o aumento de volume muscular (edema + hipertrofia). Diferente da aguda (sem isquemia permanente).',
            apresentacao: 'Dor, aperto e parestesias em compartimento específico da perna (anterior mais comum) após distância fixa de corrida. Melhora rápida em 15-30 min após cessar o exercício. Recorre ao retomar.',
            criterios: ['Manometria compartimental: pressão pré-exercício > 15 mmHg, pós-exercício (1 min) > 30 mmHg, ou pós-exercício (5 min) > 20 mmHg'],
            exames: ['Manometria compartimental (exigência diagnóstica)', 'RM dinâmica (sinal de edema intramuscular)', 'Cintilografia óssea (excluir fratura por estresse)'],
            tratamento: 'Conservador (raramente eficaz): modificação de atividade. Fasciotomia cirúrgica: tratamento definitivo (abertura da fáscia do compartimento afetado).',
            diferenciais: ['Canelite (dor difusa na tíbia, melhora com repouso)', 'Fratura por estresse (dor focal)', 'Doença vascular periférica (> 50 anos, claudicação vascular)'],
            alertas: ['Manometria é obrigatória para confirmação diagnóstica', 'Fasciotomia tem 90% de sucesso — tratamento definitivo', 'Não confundir com síndrome compartimental aguda (emergência cirúrgica)'],
            perola: 'Dor crônica que começa SEMPRE à mesma distância, que PARA ao cessar e que recorre ao recomeçar = síndrome compartimental crônica. A distância é reprodutível.',
            especialidade: 'Ortopedia/Medicina Esportiva'
          },
          {
            id: 'fratura-umero-diafise', nome: 'Fratura da Diáfise do Úmero', cid: 'S42.3',
            descricao: 'Trauma direto ou queda. Risco de lesão do nervo radial (nervo mais frequentemente lesado em fraturas de ossos longos — 18% das fraturas diafisárias do úmero).',
            apresentacao: 'Dor intensa no braço, deformidade, encurtamento. Verificar nervo radial: extensão do punho (mão caída = radial lesado), sensibilidade no dorso da primeira comissura.',
            criterios: ['Rx úmero AP + perfil (traço de fratura, alinhamento)'],
            exames: ['Rx úmero AP + perfil', 'EMG (neuropraxia vs axonotmese — se déficit neurológico)'],
            tratamento: 'Não cirúrgico (maioria): colete funcional de Sarmiento (após tipoia inicial 1 semana). Cirurgia: fratura aberta, associada a lesão vascular, sem redução, politrauma.',
            diferenciais: ['Fratura patológica (tumor, metástase)', 'Lesão neoplásica', 'Fratura do colo do úmero'],
            alertas: ['Radial palsy após fratura da diáfise: 70-90% recupera espontaneamente (neuropraxia) — observar 3-4 meses antes de EMG/exploração cirúrgica', 'Colete funcional de Sarmiento: excelente para o terço médio — 90-95% de consolidação', 'Não operar déficit de radial em fratura fechada aguda (a menos que lesão vascular associada)'],
            perola: 'Nervo radial cruza a diáfise umeral em espiral (sulco radial). Fratura do terço médio-distal lesa o radial. Recuperação em 90% com tratamento conservador.',
            especialidade: 'Ortopedia'
          },
          {
            id: 'pe-plano', nome: 'Pé Plano Adquirido do Adulto', cid: 'M21.4',
            descricao: 'Colapso do arco longitudinal medial por insuficiência do tibial posterior. Causa principal: tendinite e ruptura progressiva do tibial posterior. Comum em mulheres de meia-idade, obesas, diabéticas.',
            apresentacao: 'Tríade: dor medial no tornozelo, pé plano progressivo, deformidade em valgo do retropé. Sinal de "muitos dedos" (demasiados dedos visíveis por lateral). Incapacidade de fazer a ponta dos pés unipodal.',
            criterios: ['Clínico: pé plano adquirido + dor medial + insuficiência do tibial posterior', 'RM: degeneração/ruptura do tibial posterior'],
            exames: ['Rx pé em carga (perda do arco)', 'RM tornozelo (tendão tibial posterior)', 'USG (espessamento, ruptura parcial)'],
            tratamento: 'Estágio I (tenossinovite): AINE, órtese, fisioterapia. Estágio II (ruptura parcial + pé plano flexível): órtese + cirurgia (tenorrafia + osteotomia). Estágio III (pé plano rígido): artrodese tripla.',
            diferenciais: ['Pé plano congênito (criança)', 'Artrite reumatoide', 'Coalizão tarsal', 'Neuropatia de Charcot'],
            alertas: ['Tibial posterior rompido = progressão inevitável sem tratamento cirúrgico', 'Estágio III (pé rígido + artrose): artrodese é a única solução', 'DM + neuropatia: Charcot de pé plano (avaliar sensibilidade plantão)'],
            perola: '"Muitos dedos" lateral: normalmente 1-2 dedos visíveis. Pé plano com insuficiência do tibial posterior: 3-4 dedos visíveis por rotação e abdução do retropé.',
            especialidade: 'Ortopedia do Pé e Tornozelo'
          },
        ]
      },
    ]
  },
]




