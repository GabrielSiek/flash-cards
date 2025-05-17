
export interface Remedio {
    nome: string,
    explicacao: string
}

export const emptyRemedio: Remedio = {
    nome: "",
    explicacao: ""
}


export const remedios: Remedio[] = [
    // Hipolipemiantes
    { nome: "Sinvastatina", explicacao: "Reduz colesterol LDL, inibe HMG-CoA redutase." },
    { nome: "Atorvastatina", explicacao: "Estatina potente para dislipidemias mistas." },
    { nome: "Rosuvastatina", explicacao: "Estatina com alta potência e longa meia-vida." },
    { nome: "Ezetimiba", explicacao: "Inibe absorção intestinal de colesterol." },
    { nome: "Genfibrozila", explicacao: "Reduz triglicerídeos, ativa PPAR-alfa." },
  
    // Diabetes Mellitus
    { nome: "Metformina", explicacao: "Reduz produção hepática de glicose." },
    { nome: "Gliclazida", explicacao: "Estimula liberação de insulina pelo pâncreas." },
    { nome: "Glimepirida", explicacao: "Sulfonilureia usada no DM2, ação prolongada." },
    { nome: "Empagliflozina", explicacao: "Promove excreção de glicose pela urina (SGLT2)." },
    { nome: "Metformina", explicacao: "Diminui a produção de glicose pelo fígado e melhora o uso pelos tecidos." },
    { nome: "Insulina NPH", explicacao: "Insulina de ação intermediária." },
    { nome: "Insulina glargina", explicacao: "Insulina basal de longa duração." },
  
    // Anticoncepcionais
    { nome: "Pílulas combinadas", explicacao: "E+P Inibe pico de LH." },
    { nome: "Mini pílulas", explicacao: "P Lactantes, CED, enxaqueca." },
    { nome: "Pilula do dia seguinte", explicacao: "P pra carai, emergencial, até 72 horas." },
  
    // Anti-hipertensivos
    { nome: "Captopril", explicacao: "Inibidor da ECA, reduz formação de angiotensina II." },
    { nome: "Metildopa", explicacao: "Agonista alfa 2 central, grávidas." },
    { nome: "Losartana", explicacao: "Bloqueia receptor AT1 da angiotensina II." },
    { nome: "Anlodipino", explicacao: "Bloqueador de canal de cálcio, vasodilatador." },
    { nome: "Hidroclorotiazida", explicacao: "Diurético tiazídico, reduz volemia." },
    { nome: "Espironolactona", explicacao: "Antagonista da aldosterona, poupador de potássio." },
    { nome: "Propranolol", explicacao: "Beta-bloqueador não seletivo, reduz FC e PA." },
    { nome: "Dihidropiridínicos", explicacao: "Bloqueia canais de cálcio, vaso-seletivo." },
    { nome: "Não Dihidropiridínicos", explicacao: "Bloqueia canais de cálcio, cardio-seletivo." },

  
    // Insuficiência cardíaca e angina
    { nome: "Furosemida", explicacao: "Diurético de alça, reduz congestão em IC." },
    { nome: "Carvedilol", explicacao: "Beta-bloqueador usado na IC." },
    { nome: "Digoxina", explicacao: "Aumenta contratilidade cardíaca (inotrópico)." },
    { nome: "Dinitrato de isossorbida", explicacao: "Vasodilatador para angina." },
    { nome: "Mononitrato de isossorbida", explicacao: "Reduz pré e pós-carga no coração." },
    { nome: "Ivabradina", explicacao: "Reduz FC sem afetar contratilidade." },
  
    // Antitireoidianos
    { nome: "Propiltiouracil", explicacao: "Inibe síntese e conversão periférica do T4 em T3." },
    { nome: "Metimazol", explicacao: "Inibe a organificação do iodo na tireoide." },
    { nome: "Levotiroxina", explicacao: "Converte T4 sintético em T3." },
    { nome: "Liotironina", explicacao: "Hormônio sintético T3, emergência." },

  
    // Antiaterotrombóticos
    { nome: "AAS (ácido acetilsalicílico)", explicacao: "Inibe agregação plaquetária (COX-1)." },
    { nome: "Clopidogrel", explicacao: "Inibe receptor ADP nas plaquetas." },
    { nome: "Varfarina", explicacao: "Antagonista da vitamina K, anticoagulante oral." },
    { nome: "Heparina", explicacao: "Ativa antitrombina III, anticoagulação rápida." },
    { nome: "Enoxaparina", explicacao: "Heparina de baixo peso molecular, mais previsível." },
  
    // Opioides
    { nome: "Morfina", explicacao: "Analgesia potente via receptores opioides." },
    { nome: "Tramadol", explicacao: "Opioide fraco com ação serotoninérgica." },
    { nome: "Fentanil", explicacao: "Opioide sintético potente, ação rápida." },
    { nome: "Codeína", explicacao: "Opioide leve, usado para dor moderada e tosse." },
    { nome: "Naloxona", explicacao: "Antagonista puro." },
  
    // Anti-inflamatórios não esteroides (AINEs)
    { nome: "Ibuprofeno", explicacao: "Inibe COX, anti-inflamatório e analgésico." },
    { nome: "Dipirona", explicacao: "Inibe prostaglandina, tromboxona e cox, não grávidas." },
    { nome: "Diclofenaco", explicacao: "AINE potente para dor e inflamação." },
    { nome: "Nimesulida", explicacao: "AINE seletivo para COX-2." },
    { nome: "Cetoprofeno", explicacao: "AINE com boa ação analgésica." },
    { nome: "Meloxicam", explicacao: "Preferencial por COX-2, menor risco gástrico." }
  ];
  
