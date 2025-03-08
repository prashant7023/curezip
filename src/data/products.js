const products = [
    {
        id: 1,
        name: "CARNYMP-Q10",
        slug: "carnymp-q10",
        // image: "/products/carnymp-q10.png",
        shortDescription: "L-Carnitine, Ubiquinone & Selenium Softgel Capsules",
        fullDescription:
            "CARNYMP-Q10 combines L-Carnitine, Ubiquinone (Coenzyme Q10), and Selenium in softgel capsules to support heart health, energy production, and antioxidant protection.",
        composition: "Each softgel capsule contains L-Carnitine, Ubiquinone (Coenzyme Q10), and Selenium.",
        indications: "Supports cardiovascular health, energy metabolism, and provides antioxidant protection.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 2,
        name: "CURECIUM",
        slug: "curecium",
        // image: "/products/curecium.png",
        shortDescription: "Calcium & Calcitriol Softgel Capsules",
        fullDescription:
            "CURECIUM softgel capsules contain Calcium and Calcitriol to support bone health, calcium absorption, and overall skeletal system maintenance.",
        composition: "Each softgel capsule contains Calcium and Calcitriol (Vitamin D3).",
        indications: "For prevention and treatment of calcium deficiency, osteoporosis, and vitamin D deficiency.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 3,
        name: "RD-BEST DSR",
        slug: "rd-best-dsr",
        // image: "/products/rd-best-dsr.png",
        shortDescription: "Rabeprazole Sodium (EC) & Domperidone (SR) Capsules",
        fullDescription:
            "RD-BEST DSR combines Rabeprazole Sodium (enteric-coated) and Domperidone (sustained-release) for comprehensive management of gastric disorders.",
        composition: "Each capsule contains Rabeprazole Sodium (EC) and Domperidone (SR).",
        indications:
            "For treatment of gastroesophageal reflux disease (GERD), peptic ulcers, and related gastric disorders.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 4,
        name: "TBR HEAL-D",
        slug: "tbr-heal-d",
        // image: "/products/tbr-heal-d.png",
        shortDescription: "Trypsin, Bromelain, Rutoside Trihydrate & Diclofenac Sodium Tablets",
        fullDescription:
            "TBR HEAL-D combines proteolytic enzymes (Trypsin and Bromelain) with Rutoside Trihydrate and Diclofenac Sodium to provide anti-inflammatory and analgesic effects.",
        composition: "Each tablet contains Trypsin, Bromelain, Rutoside Trihydrate, and Diclofenac Sodium.",
        indications:
            "For management of pain and inflammation in various conditions including post-operative states, injuries, and inflammatory disorders.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 5,
        name: "TBR HEAL-FORTE",
        slug: "tbr-heal-forte",
        // image: "/products/tbr-heal-forte.png",
        shortDescription: "Trypsin, Bromelain & Rutoside Trihydrate Tablets",
        fullDescription:
            "TBR HEAL-FORTE contains proteolytic enzymes (Trypsin and Bromelain) with Rutoside Trihydrate to provide anti-inflammatory effects without NSAID components.",
        composition: "Each tablet contains Trypsin, Bromelain, and Rutoside Trihydrate.",
        indications:
            "For management of inflammation and edema in various conditions including post-operative states, injuries, and inflammatory disorders.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 6,
        name: "FEROZIP",
        slug: "ferozip",
        // image: "/products/ferozip.png",
        shortDescription: "Ferrous Ascorbate, Folic Acid & Zinc Tablets",
        fullDescription:
            "FEROZIP combines Ferrous Ascorbate with Folic Acid and Zinc to provide comprehensive support for iron deficiency anemia and overall hematological health.",
        composition: "Each tablet contains Ferrous Ascorbate, Folic Acid, and Zinc.",
        indications:
            "For prevention and treatment of iron deficiency anemia, especially during pregnancy and other high-demand states.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 7,
        name: "MONTRACE-LC",
        slug: "montrace-lc",
        shortDescription: "Montelukast 10mg & Levocetrizine HCL 5mg",
        fullDescription:
            "MONTRACE-LC combines Montelukast and Levocetrizine HCL for effective management of allergic rhinitis and asthma.",
        composition: "Each tablet contains Montelukast 10mg and Levocetrizine HCL 5mg.",
        indications: "For management of allergic rhinitis and asthma.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 8,
        name: "NAVAVIT",
        slug: "navavit",
        shortDescription: "Mecobalamin 1500mcg, Alpha Lipoic Acid 100mg, Benfotiamine 150mcg, Folic Acid 1.5mg, Chromium-Polynicotinate 200mcg, Inositol 100mg, Pyridoxine 3mg, Vitamin D3 1000IU & Calcium Carbonate 500mg",
        fullDescription:
            "NAVAVIT is a comprehensive multivitamin formulation designed to support nerve health and overall well-being.",
        composition: "Each tablet contains Mecobalamin 1500mcg, Alpha Lipoic Acid 100mg, Benfotiamine 150mcg, Folic Acid 1.5mg, Chromium-Polynicotinate 200mcg, Inositol 100mg, Pyridoxine 3mg, Vitamin D3 1000IU & Calcium Carbonate 500mg.",
        indications: "For nerve health and overall well-being.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 9,
        name: "PARADOWN SP",
        slug: "paradown-sp",
        shortDescription: "Aceclofenac 100mg, Serratiopeptidase 15mg & Paracetamol 325mg",
        fullDescription:
            "PARADOWN SP is formulated to provide relief from pain and inflammation in various conditions.",
        composition: "Each tablet contains Aceclofenac 100mg, Serratiopeptidase 15mg & Paracetamol 325mg.",
        indications: "For relief from pain and inflammation.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 10,
        name: "ZIFLAX-O",
        slug: "ziflax-o",
        shortDescription: "Cefixime 200mg & Ofloxacin 200mg",
        fullDescription:
            "ZIFLAX-O is a combination antibiotic used to treat a variety of bacterial infections.",
        composition: "Each tablet contains Cefixime 200mg & Ofloxacin 200mg.",
        indications: "For treatment of bacterial infections.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 11,
        name: "ZIPCLAVE-625",
        slug: "zipclave-625",
        shortDescription: "Amoxycillin 500mg & Clavulanic Acid 125mg",
        fullDescription:
            "ZIPCLAVE-625 is a broad-spectrum antibiotic used to treat various bacterial infections.",
        composition: "Each tablet contains Amoxycillin 500mg & Clavulanic Acid 125mg.",
        indications: "For treatment of bacterial infections.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 12,
        name: "ZIPNEXA-MF",
        slug: "zipnexa-mf",
        shortDescription: "Tranexamic Acid 500mg & Mefenamic Acid 250mg",
        fullDescription:
            "ZIPNEXA-MF is used to manage heavy menstrual bleeding and pain.",
        composition: "Each tablet contains Tranexamic Acid 500mg & Mefenamic Acid 250mg.",
        indications: "For management of heavy menstrual bleeding and pain.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 13,
        name: "ZIPTHRIN",
        slug: "zipthrin",
        shortDescription: "Azithromycin 500mg",
        fullDescription:
            "ZIPTHRIN is an antibiotic used to treat a variety of bacterial infections.",
        composition: "Each tablet contains Azithromycin 500mg.",
        indications: "For treatment of bacterial infections.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 14,
        name: "ZIFLAX-OZ",
        slug: "ziflax-oz",
        shortDescription: "Ofloxacin 200mg & Ornidazole 500mg",
        fullDescription:
            "ZIFLAX-OZ is a combination antibiotic used to treat a variety of bacterial and protozoal infections.",
        composition: "Each tablet contains Ofloxacin 200mg & Ornidazole 500mg.",
        indications: "For treatment of bacterial and protozoal infections.",
        dosage: "As directed by healthcare professional.",
    },
    {
        id: 15,
        name: "PARADOWN",
        slug: "paradown",
        shortDescription: "Aceclofenac 100mg & Paracetamol 325mg",
        fullDescription:
            "PARADOWN is formulated to provide relief from pain and inflammation in various conditions.",
        composition: "Each tablet contains Aceclofenac 100mg & Paracetamol 325mg.",
        indications: "For relief from pain and inflammation.",
        dosage: "As directed by healthcare professional.",
    },
]

export default products; 