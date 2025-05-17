
export interface Remedio {
    nome: string,
    explicacao: string
}

export const emptyRemedio: Remedio = {
    nome: "",
    explicacao: ""
}


export const remedios: Remedio[] = [
    { nome: "Paracetamol", explicacao: "Analgésico e antipirético. Usado para dor leve e febre." },
    { nome: "Ibuprofeno", explicacao: "AINE. Alivia dor, febre e inflamação." },
    { nome: "Dipirona", explicacao: "Analgésico e antipirético. Eficaz para febre alta." },
    { nome: "Amoxicilina", explicacao: "Antibiótico betalactâmico. Combate infecções bacterianas." },
    { nome: "Azitromicina", explicacao: "Antibiótico macrolídeo. Usado para infecções respiratórias." },
    { nome: "Ceftriaxona", explicacao: "Cefalosporina de 3ª geração. Infecções graves." },
    { nome: "Omeprazol", explicacao: "Inibidor da bomba de prótons. Reduz a acidez gástrica." },
    { nome: "Ranitidina", explicacao: "Antagonista H2. Diminui secreção gástrica ácida." },
    { nome: "Salbutamol", explicacao: "Broncodilatador beta-2. Alívio rápido em crises asmáticas." },
    { nome: "Losartana", explicacao: "Antagonista da angiotensina II. Anti-hipertensivo." },
    { nome: "Enalapril", explicacao: "IECA. Reduz pressão e protege o coração." },
    { nome: "Hidroclorotiazida", explicacao: "Diurético tiazídico. Diminui a pressão arterial." },
    { nome: "Furosemida", explicacao: "Diurético de alça. Usado em edema e insuficiência cardíaca." },
    { nome: "Metformina", explicacao: "Biguanida. Controla glicemia no diabetes tipo 2." },
    { nome: "Glibenclamida", explicacao: "Sulfonilureia. Estimula liberação de insulina." },
    { nome: "Insulina", explicacao: "Hormônio hipoglicemiante. Essencial no diabetes tipo 1." },
    { nome: "Prednisona", explicacao: "Corticoide. Anti-inflamatório e imunossupressor." },
    { nome: "Dexametasona", explicacao: "Corticoide potente. Usado em inflamações e choque." },
    { nome: "Diazepam", explicacao: "Benzodiazepínico. Sedativo, ansiolítico e anticonvulsivante." },
    { nome: "Clonazepam", explicacao: "Benzodiazepínico. Usado em epilepsia e ansiedade." },
    { nome: "Sertralina", explicacao: "ISRS. Antidepressivo e ansiolítico." },
    { nome: "Fluoxetina", explicacao: "ISRS. Usado em depressão e TOC." },
    { nome: "Haloperidol", explicacao: "Antipsicótico típico. Transtornos psicóticos e agitação." },
    { nome: "Risperidona", explicacao: "Antipsicótico atípico. Esquizofrenia e bipolaridade." },
    { nome: "Olanzapina", explicacao: "Antipsicótico atípico. Transtornos de humor." },
    { nome: "Morfina", explicacao: "Opioide forte. Dor intensa e cuidados paliativos." },
    { nome: "Tramadol", explicacao: "Opioide fraco. Dor moderada a intensa." },
    { nome: "Codeína", explicacao: "Opioide leve. Analgésico e antitussígeno." },
    { nome: "Lidocaína", explicacao: "Anestésico local. Também usado em arritmias." },
    { nome: "Adrenalina", explicacao: "Aumenta FC e PA. Usada em parada cardíaca e anafilaxia." },
    { nome: "Atropina", explicacao: "Anticolinérgico. Aumenta FC e reduz secreções." },
    { nome: "Propranolol", explicacao: "Beta-bloqueador. Reduz PA, FC e ansiedade." },
    { nome: "Metoprolol", explicacao: "Beta-1 seletivo. Anti-hipertensivo e antiarrítmico." },
    { nome: "Verapamil", explicacao: "Bloqueador de canais de cálcio. Antiarrítmico e anti-hipertensivo." },
    { nome: "AAS", explicacao: "Antiagregante plaquetário. Prevenção de eventos cardiovasculares." },
    { nome: "Clopidogrel", explicacao: "Antiagregante. Inibe ativação plaquetária." },
    { nome: "Heparina", explicacao: "Anticoagulante. Previne trombos em uso hospitalar." },
    { nome: "Varfarina", explicacao: "Anticoagulante oral. Prevenção de AVC em FA." },
    { nome: "Alprazolam", explicacao: "Ansiolítico. Benzodiazepínico de ação curta." },
    { nome: "Carbamazepina", explicacao: "Anticonvulsivante. Usado em epilepsia e neuralgia." },
    { nome: "Fenitoína", explicacao: "Anticonvulsivante. Controle de crises epilépticas." },
    { nome: "Levotiroxina", explicacao: "Hormônio tireoidiano. Tratamento do hipotireoidismo." },
    { nome: "Propiltiouracil", explicacao: "Antitireoidiano. Usado no hipertireoidismo." },
    { nome: "Domperidona", explicacao: "Procinético. Alivia náuseas e melhora esvaziamento gástrico." },
    { nome: "Metoclopramida", explicacao: "Antiemético e procinético. Náuseas e refluxo." },
    { nome: "Ondansetrona", explicacao: "Antiemético potente. Náuseas induzidas por quimioterapia." },
    { nome: "Nitroglicerina", explicacao: "Vasodilatador. Usado em angina." },
    { nome: "Sildenafil", explicacao: "Vasodilatador. Disfunção erétil e hipertensão pulmonar." },
    { nome: "Lorazepam", explicacao: "Benzodiazepínico. Ansiedade e insônia." }
];
