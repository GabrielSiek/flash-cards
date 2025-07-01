
export interface Card {
    content: string,
    definition: string
}

export const emptyCard: Card = {
    content: "",
    definition: ""
}


export const cards: Card[] = [
    // Antidepressivos
    { content: "ISRS", definition: "citalopran, escitalopram, fluoxetina, fluvoxamina, paroxetina e setralina" },
    { content: "IRSN", definition: "desvenlafaxina, duloxetina, levo e milnacipran, venlafaxina" },
    { content: "Moduladores serotonina", definition: "nefazedona e trazodona" },
    { content: "ADTs", definition: "amitriptilina, clomipramina (EF. ANTICOLINÉRGICOS, DOR CRÔNICA)" },
    { content: "Atípicos", definition: "bupropiona, mirtazapina (BUPRO -> TABAGISMO; MIRTA -> ENGORDA)" },
    { content: "IMAO", definition: "isocarboxazida, fenilzina, tranicilpromina (DEP RESISTENTE AO TTO)" },

    // Ansiolíticos
    { content: "ISRS E IRSN (ansiedade)", definition: "usar BD junto por MV longa" },
    { content: "ADTs (ansiedade)", definition: "inicia dose baixa e vai aumentando; ef anticolinérgicos" },
    { content: "Benzodiazepínicos", definition: "AGO GABA -> clonazepam (rivotril), diazepam" },
    { content: "Flumazenil", definition: "ANTÍDOTO para intoxificação por BD" },
    { content: "Atípicos (ansiedade)", definition: "buspirona -> ñ seda, ñ interage c/ álcool, ñ induz dependência" },
    { content: "B-blocks (propranolol)", definition: "ñ usar em pacientes com broncoespasmo" },
    { content: "Anti-Hista (hidroxizina)", definition: "dá sono, irrita, dificuldade p/ concentrar" },
    { content: "Fitoterápicos", definition: "AGO GABAA, GLUTAMATO -> kava-kava; sintomas extrapiramidais" },

    // Hipolipemiantes
    { content: "Sinvastatina", definition: "Reduz colesterol LDL, inibe HMG-CoA redutase." },
    { content: "Atorvastatina", definition: "Estatina potente para dislipidemias mistas." },
    { content: "Rosuvastatina", definition: "Estatina com alta potência e longa meia-vida." },
    { content: "Ezetimiba", definition: "Inibe absorção intestinal de colesterol." },
    { content: "Genfibrozila", definition: "Reduz triglicerídeos, ativa PPAR-alfa." },

    // Opioides
    { content: "Morfina", definition: "Analgesia potente via receptores opioides." },
    { content: "Tramadol", definition: "Opioide fraco com ação serotoninérgica." },
    { content: "Fentanil", definition: "Opioide sintético potente, ação rápida." },
    { content: "Codeína", definition: "Opioide leve, usado para dor moderada e tosse." },
    { content: "Naloxona", definition: "Antagonista puro." },
    { content: "Metadona", definition: "MV longa; síndrome abstinência." },

    // Corticoides
    { content: "Glicorticoides naturais", definition: "cortisol e hidrocortisona" },
    { content: "Glicocorticoides sintéticos", definition: "prednisolona, betametasona, dexametasona, prednisona" },
    { content: "Mineralocorticoides naturais", definition: "aldosterona" },
    { content: "Mineralocorticoides sintéticos", definition: "fludrocortisona" },
    { content: "MA e EA glicocorticoides", definition: "receptores INTRACELULARES; hiperglicemia (diabetes), dist musc, + infecções, Cushing, osteoporose" },
    { content: "MA e EA mineralocorticoides", definition: "receptores CITOPLASMÁTICOS; ret hídrica, hipocalcemia, HA, dist musc" },

    // Antibióticos
    { content: "Penicilinas (G e V, amoxi, ampici, meti. oxaciclina)", definition: "inibem síntese parede celular;  Gram+ | alguns Gram- | estreptococos | estafilococos" },
    { content: "Cefalosporinas (cefalozina, cefaclor, ceftriaxona, cefepima)", definition: "inibem síntese parede celular; 1ª geração: Gram+ | E. coli | Klebsiella / 2ª geração: Gram+ | Gram- | anaeróbios / 3ª geração: Gram- | meningite | Ceftazidima → Pseudomonas / 4ª geração: Gram+ | Gram- | Pseudomonas / 5ª geração: MRSA | Gram+ | Gram-" },
    { content: "Carbapenêmicos (imipenem)", definition: "inibem síntese parede celular (USO HOSPITALAR); Gram+ | Gram- | Pseudomonas | ESBL | anaeróbios" },
    { content: "Monobactâmicos (aztreonam)", definition: "inibem síntese parede celular; Gram- aeróbios | Pseudomonas" },
    { content: "Glicopeptídeos (vancomicina)", definition: "inibem síntese parede celular (HOMEM VERMELHO POR HISTAMINA); Gram+ | MRSA | enterococos | infecções graves" },
    { content: "Inibidores B-lactamase (ácido clavulânico, sulbactam)", definition: "inibem enzima b-lactamase" },
    { content: "Lipopeptídeos (polimixina B)", definition: "rompe membrana celular (DETERGENTE; AUMENTA PERM)" },
    { content: "Tetraciclinas (tetra, doxi, mino, tigeciclina)", definition: "ligam-se subunidade 30s ribossomo (N/V, FOTOSSENSIBILIDADE, ESOFAGITE; Gram+ | Gram- | atípicos | zoonoses | acne" },
    { content: "Macrolídeos (eritro, azitro, claritro e roxitromicina)", definition: "ligam-se subunidade 50s; Gram+ | atípicos (Mycoplasma, Chlamydia) | respiratórios" },
    { content: "Cloranfenicol", definition: "liga-se subunidade 50s (SÍNDROME BB CINZENTO)" },
    { content: "Oxazolidinona (linezolida)", definition: "liga-se subunidade 50s (SUPRE MO, ESCURECE DENTES); Gram+ resistentes | MRSA | VRE" },
    { content: "Lincosamida (clindamicina)", definition: "liga-se subunidade 50s (COLITE PSEUDOMEMBRANOSA); Gram+ | anaeróbios | infecções ósseas/pele" },
    { content: "Aminoglicosídeos (genta, amica, tobramicina)", definition: "ligam-se subunidade 30s (OTO E NEFROTOXICIDADE); Gram- aeróbios | Pseudomonas | sinergia com beta-lactâmicos" },
    { content: "Sulfonamidas (sulfa. prata, sulfadiazina, sulfometoxazol)", definition: "inibem produção ácido fólico (ANTA COMP PABA, OTO/NEFROTOX, STEVEN-JOHNSON); Gram+ | Gram-[] | UTIs | MRSA comunitário" },
    { content: "Bactrim", definition: "sulfametoxazol + trimetropina (x ácido fólico)" },
    { content: "Quinolonas (nor, cipro, levo, moxi, oflo, lome, gemifloxacino)", definition: "inibem DNA girase -> topoisomerases II e IV (ITU, 1h ANTES OU 2h DEPOIS COMIDA, TENDINOPATIA, ALT HUMOR); Gram+ | Gram- | Pseudomonas (Cipro) | atípicos | urinário/respiratório" },
    { content: "Fosfomicina", definition: "Inibe MurA (sínt parede) -> SEGURA NA GESTAÇÃO" },
    { content: "Rifamicinas (rifampcina)", definition: "inibe RNA polimerase (TGI, COR ALARANJADA);" },

    // Anti-histamínicos
    { content: "Anti-H1 clássicos (difenidramina, hidroxizina, meclizina, dimenidrato)", definition: "movimento, enjoo, vômito - causam sedação" },
    { content: "Anti-H1 periféricos (desloratadina, acrivastatina, cetirizina)", definition: "não-sedativos" },
    { content: "Anti-H1: dimenidrato + doxilamina", definition: "GRÁVIDAS" },

    // Antiácidos e mucroprotetores
    { content: "Antiácidos absorvíveis", definition: "bicarbonato e citrato de sódio (GERAM ALCALOSE); carbonato de cálcio (ação abs ñ significativa)" },
    { content: "Antiácidos não absorvíveis", definition: "hidróxidos de magnésio (gosto ruim) e alumínio (muito pum)" },
    { content: "Mucroprotetores (sucralfato, sais de b., misoprostol)", definition: "barreira física na úlcera, estimulam prostaglandinas, anti H. pylori (sais)" },
    { content: "Anti-H2 (cime, famo, nizatidina)", definition: "bloqueiam H2; diminuem prod. ácido estomacal" },
    { content: "IBPs", definition: "ome, panto, lanso e dexlanzoprazol (DIMINUEM B12)" },

    // Antivirais (herpes) 
    { content: "Aciclovir", definition: "compete pela DNA-polimerase viral com trifosfato de desoxiguanosina; quebra a cadeia" },
    { content: "Foscarnete", definition: "inibe irreversivelmente a DNA e RNA-polimerase viral" },

// Antifúngicos 
    { content: "Anfotericina B", definition: "ação na membrana celular" },
    { content: "Terbinafrina", definition: "inibe síntese ergosterol; + rápido (ESCOLHA)" },
    { content: "Cetoconazol e Miconazol", definition: "inibem síntese ergosterol (inozólicos)" },
    { content: "Fluxonazol", definition: "inibe síntese ergosterol (triozólico)" },
    { content: "Azólicos têm menos efeitos colaterais, porque...", definition: "+ afinidade com a C14-a-demetilase" },
];

