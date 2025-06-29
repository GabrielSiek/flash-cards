
export interface Card {
    content: string,
    definition: string
}

export const emptyCard: Card = {
    content: "",
    definition: ""
}


export const cards: Card[] = [
    // Hipolipemiantes
    { content: "Sinvastatina", definition: "Reduz colesterol LDL, inibe HMG-CoA redutase." },
    { content: "Atorvastatina", definition: "Estatina potente para dislipidemias mistas." },
    { content: "Rosuvastatina", definition: "Estatina com alta potência e longa meia-vida." },
    { content: "Ezetimiba", definition: "Inibe absorção intestinal de colesterol." },
    { content: "Genfibrozila", definition: "Reduz triglicerídeos, ativa PPAR-alfa." },
  
    // Diabetes Mellitus
    { content: "Metformina", definition: "Reduz produção hepática de glicose, obesos." },
    { content: "Gliclazida", definition: "Estimula liberação de insulina pelo pâncreas." },
    { content: "Glimepirida", definition: "Sulfonilureia usada no DM2, ação prolongada." },
    { content: "Empagliflozina", definition: "Promove excreção de glicose pela urina (SGLT2)." },
    { content: "Metformina", definition: "Diminui a produção de glicose pelo fígado e melhora o uso pelos tecidos." },
    { content: "Insulina NPH", definition: "Insulina de ação intermediária." },
    { content: "Insulina glargina", definition: "Insulina basal de longa duração." },
  
    // Anticoncepcionais
    { content: "Pílulas combinadas", definition: "E+P Inibe pico de LH." },
    { content: "Mini pílulas", definition: "P Lactantes, CED, enxaqueca." },
    { content: "Pilula do dia seguinte", definition: "P pra carai, emergencial, até 72 horas." },
  
    // Anti-hipertensivos
    { content: "Captopril", definition: "Inibidor da ECA, reduz formação de angiotensina II." },
    { content: "Metildopa", definition: "Agonista alfa 2 central, grávidas." },
    { content: "Losartana", definition: "Bloqueia receptor AT1 da angiotensina II." },
    { content: "Anlodipino", definition: "Bloqueador de canal de cálcio, vasodilatador." },
    { content: "Hidroclorotiazida", definition: "Diurético tiazídico, reduz volemia." },
    { content: "Espironolactona", definition: "Antagonista da aldosterona, poupador de potássio." },
    { content: "Propranolol", definition: "Beta-bloqueador não seletivo, reduz FC e PA." },
    { content: "Dihidropiridínicos", definition: "Bloqueia canais de cálcio, vaso-seletivo." },
    { content: "Não Dihidropiridínicos", definition: "Bloqueia canais de cálcio, cardio-seletivo." },

  
    // Insuficiência cardíaca e angina
    { content: "Furosemida", definition: "Diurético de alça, reduz congestão em IC." },
    { content: "Carvedilol", definition: "Beta-bloqueador usado na IC." },
    { content: "Digoxina", definition: "Aumenta contratilidade cardíaca (inotrópico)." },
    { content: "Dinitrato de isossorbida", definition: "Vasodilatador para angina." },
    { content: "Mononitrato de isossorbida", definition: "Reduz pré e pós-carga no coração." },
    { content: "Ivabradina", definition: "Reduz FC sem afetar contratilidade." },
  
    // Antitireoidianos
    { content: "Propiltiouracil", definition: "Inibe síntese e conversão periférica do T4 em T3." },
    { content: "Metimazol", definition: "Inibe a organificação do iodo na tireoide." },
    { content: "Levotiroxina", definition: "Converte T4 sintético em T3." },
    { content: "Liotironina", definition: "Hormônio sintético T3, emergência." },

  
    // Antiaterotrombóticos
    { content: "AAS (ácido acetilsalicílico)", definition: "Inibe agregação plaquetária (COX-1)." },
    { content: "Clopidogrel", definition: "Inibe receptor ADP nas plaquetas." },
    { content: "Varfarina", definition: "Antagonista da vitamina K, anticoagulante oral." },
    { content: "Heparina", definition: "Ativa antitrombina III, anticoagulação rápida." },
    { content: "Enoxaparina", definition: "Heparina de baixo peso molecular, mais previsível." },
  
    // Opioides
    { content: "Morfina", definition: "Analgesia potente via receptores opioides." },
    { content: "Tramadol", definition: "Opioide fraco com ação serotoninérgica." },
    { content: "Fentanil", definition: "Opioide sintético potente, ação rápida." },
    { content: "Codeína", definition: "Opioide leve, usado para dor moderada e tosse." },
    { content: "Naloxona", definition: "Antagonista puro." },
  
    // Anti-inflamatórios não esteroides (AINEs)
    { content: "Ibuprofeno", definition: "Inibe COX, anti-inflamatório e analgésico." },
    { content: "Dipirona", definition: "Inibe prostaglandina, tromboxano e cox, não grávidas; anti-pirético e analgésico." },
    { content: "Diclofenaco", definition: "AINE potente para dor e inflamação." },
    { content: "Nimesulida", definition: "AINE seletivo para COX-2." },
    { content: "Cetoprofeno", definition: "AINE com boa ação analgésica." },
    { content: "Meloxicam", definition: "Preferencial por COX-2, menor risco gástrico." }
  ];
  
