export const MNEMONICS = [
  {
    id: 'samu',
    nome: 'SAMU — Reconhecimento de AVC',
    letras: [
      { letra: 'S', significado: 'Súbito', detalhe: 'Início súbito dos sintomas' },
      { letra: 'A', significado: 'Assimetria', detalhe: 'Assimetria facial ou de membros' },
      { letra: 'M', significado: 'Mudança na fala', detalhe: 'Disartria, afasia ou confusão na fala' },
      { letra: 'U', significado: 'Um braço cai', detalhe: 'Teste do braço: um braço cai ao levantar os dois' },
    ],
    acao: 'Se ≥1 sinal presente: ligar para o SAMU (192) imediatamente',
    fluxograma: ['Identificar sinal SAMU', 'Ligar 192', 'Não dar comida/água/medicação', 'Anotar hora do início', 'Ir ao hospital de referência (AVC)'],
    contexto: 'Triagem pré-hospitalar de AVC',
    especialidade: 'Neurologia'
  },
  {
    id: 'abcde',
    nome: 'ABCDE — Avaliação do Politraumatizado (ATLS)',
    letras: [
      { letra: 'A', significado: 'Airway', detalhe: 'Via aérea + controle cervical: avaliar, abrir (chin-lift/jaw-thrust), proteger coluna' },
      { letra: 'B', significado: 'Breathing', detalhe: 'Ventilação e oxigenação: SatO2, FR, ausculta, tratar pneumotórax tensão imediatamente' },
      { letra: 'C', significado: 'Circulation', detalhe: 'Hemorragia e perfusão: PA, FC, controle de sangramento com pressão direta' },
      { letra: 'D', significado: 'Disability', detalhe: 'Status neurológico: Glasgow, AVPU, pupilas, glicemia' },
      { letra: 'E', significado: 'Exposure', detalhe: 'Expor o paciente (despir) e controlar hipotermia — examine frente e dorso' },
    ],
    acao: 'Executar ABCDE nesta ORDEM. Não avance sem tratar problema encontrado no passo anterior.',
    fluxograma: ['A: Via aérea segura?', 'B: Respira adequadamente?', 'C: Sangramento controlado?', 'D: Neurológico estável?', 'E: Outras lesões identificadas?'],
    contexto: 'Trauma — avaliação primária',
    especialidade: 'Emergência / Cirurgia'
  },
  {
    id: 'move',
    nome: 'MOVE — Primeiros Passos em Qualquer Emergência',
    letras: [
      { letra: 'M', significado: 'Monitor', detalhe: 'Monitorar: ECG, PA, SatO2, FR, temperatura' },
      { letra: 'O', significado: 'Oxigênio', detalhe: 'Oferecer O2 se SatO2 <95% ou em qualquer emergência' },
      { letra: 'V', significado: 'Veia', detalhe: 'Acesso venoso periférico calibroso (≥18G) + coleta de exames' },
      { letra: 'E', significado: 'Exames', detalhe: 'Solicitar exames urgentes: ECG, hemograma, metabólico, coagulação, tipagem, imagens' },
    ],
    acao: 'Executar MOVE simultaneamente ao avaliar o paciente em qualquer emergência',
    fluxograma: ['Ligar monitor', 'O2 se necessário', 'Acesso venoso + coleta', 'Pedir exames + imagens'],
    contexto: 'Qualquer emergência — primeiros passos',
    especialidade: 'Emergência'
  },
  {
    id: 'opqrst',
    nome: 'OPQRST — Avaliação Completa da Dor',
    letras: [
      { letra: 'O', significado: 'Onset (Início)', detalhe: 'Quando começou? Súbito ou gradual? Estava fazendo o quê?' },
      { letra: 'P', significado: 'Provocation/Palliation', detalhe: 'O que piora? O que melhora? (esforço, repouso, posição)' },
      { letra: 'Q', significado: 'Quality (Qualidade)', detalhe: 'Como é a dor? (aperto, queimação, pontada, cólica)' },
      { letra: 'R', significado: 'Radiation (Irradiação)', detalhe: 'A dor irradia para algum lugar? (MSE, mandíbula, dorso, ombro)' },
      { letra: 'S', significado: 'Severity (Intensidade)', detalhe: 'Escala 0-10. Piora ou melhora com o tempo?' },
      { letra: 'T', significado: 'Time (Tempo)', detalhe: 'Há quanto tempo? Contínua ou em crise? Episódios anteriores?' },
    ],
    acao: 'Usar OPQRST para caracterizar qualquer dor — apresentar de forma estruturada na estação',
    fluxograma: ['Início', 'Provocação/alívio', 'Qualidade', 'Irradiação', 'Severidade 0-10', 'Tempo'],
    contexto: 'Anamnese — caracterização de qualquer sintoma',
    especialidade: 'Geral'
  },
  {
    id: '6h5t',
    nome: '6H + 5T — Causas Reversíveis de PCR (Hs e Ts)',
    letras: [
      { letra: 'H₁', significado: 'Hipóxia', detalhe: 'Garantir via aérea pérvia e ventilação adequada' },
      { letra: 'H₂', significado: 'Hipovolemia', detalhe: 'Repor volemia agressivamente — cristaloide 2L rápido' },
      { letra: 'H₃', significado: 'Hipocalemia/Hipercalemia', detalhe: 'Dosar K+ e corrigir — K+ alto: Ca gluconato, bicarbonato, insulina/glicose' },
      { letra: 'H₄', significado: 'Hipotermia', detalhe: 'Aquecimento ativo — não declarar óbito até normotérmico e em PCR' },
      { letra: 'H₅', significado: 'H+ (Acidose)', detalhe: 'Bicarbonato se pH <7,1 confirmado ou PCR prolongada' },
      { letra: 'H₆', significado: 'Hipoglicemia', detalhe: 'Dextrose 50% 40-80mL IV — glicemia capilar imediata' },
      { letra: 'T₁', significado: 'Tensão (Pneumotórax)', detalhe: 'Hipertimpanismo + desvio traqueal = punção imediata 2º EIC linha médioclavicular' },
      { letra: 'T₂', significado: 'Tamponamento cardíaco', detalhe: 'Abafamento de bulhas + estase jugular + hipotensão (tríade de Beck) = pericardiocentese' },
      { letra: 'T₃', significado: 'Tóxicos', detalhe: 'Intoxicação (opioide → naloxona, BZD → flumazenil, TCA → bicarbonato)' },
      { letra: 'T₄', significado: 'Trombose coronária', detalhe: 'IAM — trombolítico se não há RCE após 10 min de RCP' },
      { letra: 'T₅', significado: 'Trombose pulmonar (TEP)', detalhe: 'Eco durante PCR + alteplase 50mg bolus se confirmado' },
    ],
    acao: 'Investigar causas reversíveis DURANTE a RCP — não interromper compressões',
    fluxograma: ['Iniciar RCP', 'Identificar ritmo (FV/TVSP vs AESP/Asistolia)', 'Investigar 6H+5T', 'Tratar causa reversível encontrada'],
    contexto: 'Parada cardiorrespiratória — durante a RCP',
    especialidade: 'Emergência'
  },
  {
    id: '4ts',
    nome: '4T\'s — Hemorragia Pós-Parto (HPP)',
    letras: [
      { letra: 'T₁', significado: 'Tônus', detalhe: 'Atonia uterina (causa mais comum — 70%). Massagem uterina, ocitocina 10UI IM, metilergometrina' },
      { letra: 'T₂', significado: 'Trauma', detalhe: 'Lacerações do canal (colo, vagina, períneo), hematomas, rotura uterina' },
      { letra: 'T₃', significado: 'Tecido', detalhe: 'Retenção placentária ou de fragmentos placentários — revisão manual do útero' },
      { letra: 'T₄', significado: 'Trombina', detalhe: 'Coagulopatia (CID, pré-eclâmpsia, embolia amniótica). Repor fatores, FFP, crioprecipitado' },
    ],
    acao: 'Identificar T causador e tratar especificamente — HPP: perda >500mL parto normal / >1000mL cesárea',
    fluxograma: ['Avaliar tônus uterino', 'Inspecionar canal de parto', 'Revisar placenta/fragmentos', 'Solicitar coagulograma se persistente'],
    contexto: 'Pós-parto imediato com sangramento excessivo',
    especialidade: 'Gineco-Obstetrícia'
  },
  {
    id: 'mudpiles',
    nome: 'MUDPILES — Acidose Metabólica com Anion Gap Aumentado',
    letras: [
      { letra: 'M', significado: 'Metanol', detalhe: 'Intoxicação por metanol (bebida destilada falsificada) — cegueira + acidose' },
      { letra: 'U', significado: 'Uremia (Renal)', detalhe: 'IRA ou IRC avançada — acúmulo de ácidos não mensuráveis' },
      { letra: 'D', significado: 'DKA (Cetoacidose)', detalhe: 'Diabetes tipo 1 descompensada — corpos cetônicos' },
      { letra: 'P', significado: 'Propileno Glicol', detalhe: 'Veículo de medicações IV (lorazepam, etomidato) em doses altas' },
      { letra: 'I', significado: 'Isoniazida / Ferro', detalhe: 'Intoxicação por INH ou ferro ferroso — convulsão + acidose' },
      { letra: 'L', significado: 'Lactato (Ácido láctico)', detalhe: 'Choque de qualquer causa, hipóxia, metformina, linezolida' },
      { letra: 'E', significado: 'Etileno Glicol', detalhe: 'Anticongelante — cristais de oxalato na urina, IRA' },
      { letra: 'S', significado: 'Salicilatos', detalhe: 'Intoxicação por AAS — zumbido + hiperventilação + acidose' },
    ],
    acao: 'Calcular Anion Gap (Na - Cl - HCO3). Se AG > 12-14 mEq/L = investigar MUDPILES',
    fluxograma: ['Calcular AG', 'AG alto: MUDPILES', 'AG normal: HARDASS (diarreia, RTA, etc)', 'Tratar causa específica'],
    contexto: 'Acidose metabólica — diferencial diagnóstico',
    especialidade: 'Nefrologia / Emergência'
  },
  {
    id: 'sample',
    nome: 'SAMPLE — Anamnese Rápida em Emergência',
    letras: [
      { letra: 'S', significado: 'Sinais e Sintomas', detalhe: 'Queixa principal: o que está sentindo agora?' },
      { letra: 'A', significado: 'Alergias', detalhe: 'Alergia a medicamentos? Especificar (penicilina, AAS, látex)' },
      { letra: 'M', significado: 'Medicamentos', detalhe: 'Uso de anticoagulantes, antidiabéticos, anti-hipertensivos, drogas?' },
      { letra: 'P', significado: 'Passado Médico', detalhe: 'Doenças prévias, cirurgias, internações, gravidez?' },
      { letra: 'L', significado: 'Last meal (Última refeição)', detalhe: 'Quando comeu pela última vez? (importante para anestesia/sedação)' },
      { letra: 'E', significado: 'Evento (o que levou)', detalhe: 'Como e quando iniciou? O que estava fazendo?' },
    ],
    acao: 'Coletar SAMPLE em <2 min em qualquer emergência — enquanto monitora e acessa',
    fluxograma: ['Sintomas', 'Alergias', 'Medicamentos', 'Passado médico', 'Última refeição', 'Evento desencadeante'],
    contexto: 'Anamnese de emergência — pré-hospitalar e UPA',
    especialidade: 'Emergência'
  },
  {
    id: 'ciampeds',
    nome: 'CIAMPEDS — Avaliação da Criança em Emergência',
    letras: [
      { letra: 'C', significado: 'Cianose', detalhe: 'Saturação, cor, causa (cardíaca vs respiratória)' },
      { letra: 'I', significado: 'Insuficiência respiratória', detalhe: 'Esforço, tiragem, stridor, batimento asa nariz' },
      { letra: 'A', significado: 'Alterações de consciência', detalhe: 'AVPU, Glasgow adaptado, irritabilidade em lactente' },
      { letra: 'M', significado: 'Medicamentos e tóxicos', detalhe: 'Intoxicação acidental? Dose errada? Drogas domiciliares?' },
      { letra: 'P', significado: 'Palidez', detalhe: 'Anemia, choque, doença hematológica?' },
      { letra: 'E', significado: 'Enantema/Exantema', detalhe: 'Petéquias = meningococcemia até prova contrária' },
      { letra: 'D', significado: 'Desidratação', detalhe: 'Turgor, fontanela, mucosas, diurese — classify leve/moderada/grave' },
      { letra: 'S', significado: 'Sepse', detalhe: 'Febre + taquicardia + alteração de consciência = sepse pediátrica' },
    ],
    acao: 'Avaliar CIAMPEDS em toda criança com triagem de alto risco',
    fluxograma: ['Triângulo de Avaliação Pediátrica (TAP)', 'ABCDE pediátrico', 'CIAMPEDS', 'Definir conduta'],
    contexto: 'Emergência pediátrica',
    especialidade: 'Pediatria'
  },
  {
    id: 'avpu',
    nome: 'AVPU — Nível de Consciência Rápido',
    letras: [
      { letra: 'A', significado: 'Alert (Alerta)', detalhe: 'Paciente alerta, orientado' },
      { letra: 'V', significado: 'Voice (Responde a voz)', detalhe: 'Responde quando chamado' },
      { letra: 'P', significado: 'Pain (Responde a dor)', detalhe: 'Só responde a estímulo doloroso (pressão no esterno)' },
      { letra: 'U', significado: 'Unresponsive (Sem resposta)', detalhe: 'Sem resposta a qualquer estímulo — coma' },
    ],
    acao: 'AVPU é triagem rápida. Se ≤P, fazer Glasgow completo e TC de crânio.',
    fluxograma: ['AVPU inicial', 'Se A: reavalie em 30 min', 'Se V ou P: Glasgow, glicemia, TC', 'Se U: IOT imediata'],
    contexto: 'Triagem e avaliação primária de consciência',
    especialidade: 'Emergência'
  },
  {
    id: 'fast',
    nome: 'FAST — Reconhecimento de AVC (versão americana)',
    letras: [
      { letra: 'F', significado: 'Face (Rosto)', detalhe: 'Assimetria facial — pedir para sorrir' },
      { letra: 'A', significado: 'Arms (Braços)', detalhe: 'Um braço cai — pedir para levantar ambos' },
      { letra: 'S', significado: 'Speech (Fala)', detalhe: 'Fala arrastada, confusa ou impossível' },
      { letra: 'T', significado: 'Time (Tempo)', detalhe: 'Anotar hora de início e ir ao hospital IMEDIATAMENTE' },
    ],
    acao: 'Time is brain: cada minuto de PCR = 1,9 milhão de neurônios mortos',
    fluxograma: ['Identificar sinal FAST', 'Anotar hora exata do início', 'Ir ao hospital (não esperar)', 'Comunicar ao hospital: paciente com AVC en route'],
    contexto: 'Reconhecimento pré-hospitalar de AVC',
    especialidade: 'Neurologia'
  },
  {
    id: 'acnes',
    nome: 'ACNES — Causas de Abdome Agudo Cirúrgico',
    letras: [
      { letra: 'A', significado: 'Apendicite', detalhe: 'Dor periumbilical que migra para FID, náusea, febre baixa. McBurney +' },
      { letra: 'C', significado: 'Colecistite', detalhe: 'Dor em QSD após refeição gordurosa. Murphy +. Ultrassom diagnóstico' },
      { letra: 'N', significado: 'Necrose/Volvo', detalhe: 'Obstrução com isquemia — dor intensa desproporcional ao exame físico' },
      { letra: 'E', significado: 'Estrangulamento de hérnia', detalhe: 'Hérnia irredutível + dor + sem eliminação de gases = emergência cirúrgica' },
      { letra: 'S', significado: 'Sangramento/Perfuração', detalhe: 'Peritonite difusa, abdome em tábua = perfuração. Cirurgia imediata' },
    ],
    acao: 'Todo abdome agudo cirúrgico: dieta zero, acesso venoso, cirurgião imediato',
    fluxograma: ['Dor abdominal', 'Anamnese + exame físico', 'Identificar sinal peritoneal', 'Examinar cirurgião', 'Imagens: US / TC'],
    contexto: 'Dor abdominal intensa — diagnóstico diferencial',
    especialidade: 'Cirurgia Geral'
  },
  {
    id: 'abcde-ana',
    nome: 'ABCDE da Anafilaxia',
    letras: [
      { letra: 'A', significado: 'Adrenalina', detalhe: '0,3–0,5 mg IM na face ântero-lateral da coxa — PRIMEIRO passo sempre' },
      { letra: 'B', significado: 'Barriga (posição)', detalhe: 'Deitar com pernas elevadas (exceto se dispneia — sentar)' },
      { letra: 'C', significado: 'Chamar ajuda + O2', detalhe: 'Ligar 192, O2 suplementar, monitorar' },
      { letra: 'D', significado: 'Dipirona? Não — Anti-H1 + H2', detalhe: 'Anti-histamínico e corticoide são ADJUVANTES — não substituem adrenalina' },
      { letra: 'E', significado: 'Expansão volêmica', detalhe: 'SF 0,9% 500–1000 mL IV rápido se hipotensão. Repetir se necessário' },
    ],
    acao: 'Adrenalina IM é o único tratamento que salva vidas em anafilaxia. Nunca atrasar.',
    fluxograma: ['Suspeitar: urticária + dispneia + hipotensão', 'Adrenalina IM 0,3-0,5 mg', 'O2, decúbito, acesso venoso', 'Anti-H1+H2, corticoide', 'Observar 4-6h ou UTI'],
    contexto: 'Reação anafilática — emergência',
    especialidade: 'Emergência / Alergologia'
  },
  {
    id: 'stopp',
    nome: 'STOPP — Triagem de Medicamentos Potencialmente Inapropriados no Idoso',
    letras: [
      { letra: 'S', significado: 'Sedativos/Hipnóticos', detalhe: 'Benzodiazepínicos: risco de quedas, delirium, depressão respiratória' },
      { letra: 'T', significado: 'TCA (Antidepressivos tricíclicos)', detalhe: 'Amitriptilina, imipramina: arritmia, hipotensão ortostática, retenção urinária' },
      { letra: 'O', significado: 'Opioides fortes sem laxante', detalhe: 'Morfina, fentanil, oxicodona: sempre associar laxante profilático' },
      { letra: 'P', significado: 'Proibidos (AINEs em IR ou UGI)', detalhe: 'AINEs com CrCl <30 ou história de úlcera: contraindicados' },
      { letra: 'P', significado: 'Prolongadores de QT', detalhe: 'Haloperidol, azitromicina, fluorquinolonas: risco de torsades de pointes' },
    ],
    acao: 'Em idosos: sempre revisar medicações com STOPP ao prescrever',
    fluxograma: ['Listar medicamentos', 'Verificar contra critérios STOPP', 'Suspender ou ajustar', 'Monitorar'],
    contexto: 'Prescrição segura no idoso',
    especialidade: 'Geriatria / Clínica Médica'
  },
]
