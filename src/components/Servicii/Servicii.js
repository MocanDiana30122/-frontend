import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './Servicii.css';

const Servicii = () => {
    const [servicii, setServicii] = useState(serviciiData);

    const toggleDetalii = (index) => {
        const updatedServicii = servicii.map((serviciu, i) => {
            if (i === index) {
                serviciu.deschis = !serviciu.deschis;
            }
            return serviciu;
        });
        setServicii(updatedServicii);
    };

    return ( <
            div className = "servicii-container" >
            <
            div className = "servicii-header" >
            <
            h1 > Serviciile Noastre < /h1> <
            p > Descoperiți serviciile noastre medicale de înaltă calitate < /p> < /
            div > <
            div className = "servicii-list" > {
                servicii.map((serviciu, index) => ( <
                        motion.div key = { index }
                        className = "serviciu-item"
                        id = { `serviciu-${index}` }
                        whileHover = {
                            { scale: 1.1 }
                        }
                        whileTap = {
                            { scale: 0.9 }
                        }
                        onClick = {
                            () => toggleDetalii(index)
                        } >
                        <
                        h2 > { serviciu.titlu } < /h2> {
                        serviciu.deschis && ( <
                            motion.div className = "detalii"
                            initial = {
                                { opacity: 0 }
                            }
                            animate = {
                                { opacity: 1 }
                            }
                            exit = {
                                { opacity: 0 }
                            }
                            transition = {
                                { duration: 0.5 }
                            } >
                            <
                            p > { serviciu.descriere } < /p> <
                            ul > {
                                serviciu.proceduri.map((procedura, i) => ( <
                                    li key = { i } >
                                    <
                                    strong > { procedura.nume } < /strong>: {procedura.descriere} - Preț: {procedura.pret} RON < /
                                    li >
                                ))
                            } <
                            /ul> < /
                            motion.div >
                        )
                    } <
                    /motion.div>
                ))
        } <
        /div> < /
    div >
);
}

const serviciiData = [{
        titlu: 'Consultații Medicale',
        descriere: 'Beneficiați de consultații medicale online sau în persoană cu medici specializați în diferite domenii.',
        proceduri: [
            { nume: 'Consultație generală', descriere: 'O evaluare generală a stării de sănătate', pret: 150 },
            { nume: 'Consultație cardiologică', descriere: 'Evaluarea stării cardiovasculare', pret: 200 },
            { nume: 'Consultație dermatologică', descriere: 'Evaluarea problemelor de piele', pret: 180 }
        ],
        deschis: false // Initial, niciun serviciu nu este deschis
    },
    {
        titlu: 'Analize de Laborator',
        descriere: 'Efectuăm o gamă largă de analize de laborator pentru diagnosticul și monitorizarea diferitelor afecțiuni.',
        proceduri: [
            { nume: 'Hemogramă completă', descriere: 'Analiză a sângelui pentru a evalua numărul celulelor sanguine', pret: 100 },
            { nume: 'Test de glicemie', descriere: 'Evaluarea nivelului de zahăr din sânge', pret: 80 },
            { nume: 'Test de funcție hepatică', descriere: 'Evaluarea funcției ficatului', pret: 120 }
        ],
        deschis: false
    },
    {
        titlu: 'Tratamente Personalizate',
        descriere: 'Beneficiați de tratamente personalizate și planuri de îngrijire adaptate nevoilor și condițiilor dumneavoastră specifice.',
        proceduri: [
            { nume: 'Terapie fizică', descriere: 'Sesiuni de exerciții fizice adaptate nevoilor individuale', pret: 80 },
            { nume: 'Terapie cognitiv-comportamentală', descriere: 'Sesiuni de terapie pentru gestionarea stresului și anxietății', pret: 150 },
            { nume: 'Terapie nutrițională', descriere: 'Sesiuni de consiliere pentru un stil de viață sănătos', pret: 120 }
        ],
        deschis: false
    },
    {
        titlu: 'Tratament Ortopedic',
        descriere: 'Servicii de diagnostic și tratament pentru afecțiuni ortopedice, inclusiv fracturi, entorse și leziuni sportive.',
        proceduri: [
            { nume: 'Consultație ortopedică', descriere: 'Evaluare specializată a problemelor musculo-scheletice', pret: 180 },
            { nume: 'Imobilizare ghipsată', descriere: 'Aplicarea gipsului pentru stabilizarea fracturilor', pret: 250 },
            { nume: 'Terapie de reabilitare', descriere: 'Programe personalizate de reabilitare pentru recuperarea funcției fizice', pret: 200 }
        ],
        deschis: false
    },
    {
        titlu: 'Consultații Neurologice',
        descriere: 'Servicii de diagnostic și tratament pentru afecțiuni neurologice, inclusiv dureri de cap, migrene și tulburări de somn.',
        proceduri: [
            { nume: 'Consultație neurologică', descriere: 'Evaluare detaliată a simptomelor și istoricului medical', pret: 160 },
            { nume: 'EEG (electroencefalogramă)', descriere: 'Test pentru a evalua activitatea electrică a creierului', pret: 220 },
            { nume: 'RMN (rezonanță magnetică nucleară)', descriere: 'Imagistică pentru diagnosticul afecțiunilor neurologice', pret: 300 }
        ],
        deschis: false
    },
    {
        titlu: 'Servicii de Psihoterapie',
        descriere: 'Consultații și terapii pentru gestionarea problemelor de sănătate mentală și îmbunătățirea bunăstării emoționale.',
        proceduri: [
            { nume: 'Sesiuni de consiliere individuală', descriere: 'Soluții personalizate pentru problemele mentale', pret: 150 },
            { nume: 'Terapie de grup', descriere: 'Participarea la sesiuni de terapie cu alți pacienți', pret: 100 },
            { nume: 'Terapie prin artă', descriere: 'Explorarea emoțiilor și a gândurilor prin mijloace creative', pret: 120 }
        ],
        deschis: false
    },
    {
        titlu: 'Servicii de Nutriție și Dietetică',
        descriere: 'Consultații specializate pentru planificarea unui regim alimentar sănătos și gestionarea greutății corporale.',
        proceduri: [
            { nume: 'Evaluare nutrițională', descriere: 'Analiza dietei și a obiceiurilor alimentare', pret: 80 },
            { nume: 'Plan de alimentație personalizat', descriere: 'Crearea unui plan alimentar adaptat nevoilor individuale', pret: 100 },
            { nume: 'Sesiuni de consiliere nutrițională', descriere: 'Sfaturi și suport pentru atingerea obiectivelor de sănătate', pret: 120 }
        ],
        deschis: false
    },
    {
        titlu: 'Servicii de Fizioterapie',
        descriere: 'Tratamente pentru recuperarea funcției fizice și îmbunătățirea mobilității și forței musculare.',
        proceduri: [
            { nume: 'Exerciții de reabilitare', descriere: 'Sesiuni de antrenament pentru recuperarea funcției musculare', pret: 90 },
            { nume: 'Terapie manuală', descriere: 'Manipulare și mobilizare pentru ameliorarea durerii și a rigidității', pret: 120 },
            { nume: 'Ultrasunete terapeutice', descriere: 'Utilizarea ultrasunetelor pentru tratarea leziunilor musculare și articulare', pret: 110 }
        ],
        deschis: false
    },
    {
        titlu: 'Servicii de Medicină Preventivă',
        descriere: 'Consultații și teste pentru prevenirea bolilor și promovarea sănătății generale.',
        proceduri: [
            { nume: 'Teste de screening', descriere: 'Analize și teste pentru depistarea precoce a problemelor de sănătate', pret: 80 },
            { nume: 'Vaccinări', descriere: 'Imunizare împotriva bolilor infecțioase și a altor afecțiuni', pret: 60 },
            { nume: 'Consiliere pentru stil de viață sănătos', descriere: 'Sfaturi și ghiduri pentru obiceiuri de viață sănătoase', pret: 100 }
        ],
        deschis: false
    },
    {
        titlu: 'Chirurgie Generală',
        descriere: 'Beneficiați de intervenții chirurgicale de calitate în diferite domenii ale chirurgiei generale.',
        proceduri: [
            { nume: 'Chirurgie abdominală', descriere: 'Intervenții chirurgicale pentru afecțiuni ale organelor abdominale', pret: 1500 },
            { nume: 'Chirurgie endocrină', descriere: 'Intervenții chirurgicale pentru afecțiuni ale glandelor endocrine', pret: 1800 },
            { nume: 'Chirurgie de colon', descriere: 'Intervenții chirurgicale pentru afecțiuni ale colonului', pret: 2000 }
        ],
        deschis: false
    },
    {
        titlu: 'Imunizări și Vaccinări',
        descriere: 'Beneficiați de imunizări și vaccinări pentru prevenirea bolilor infecto-contagioase.',
        proceduri: [
            { nume: 'Vaccin gripal', descriere: 'Vaccinare pentru prevenirea gripei sezoniere', pret: 50 },
            { nume: 'Vaccin HPV', descriere: 'Vaccinare pentru prevenirea infecției cu virusul HPV', pret: 100 },
            { nume: 'Vaccin MMR', descriere: 'Vaccinare pentru prevenirea rujeolei, rubeolei și oreionului', pret: 120 }
        ],
        deschis: false
    },
    {
        titlu: 'Medicină Preventivă',
        descriere: 'Beneficiați de servicii de medicină preventivă pentru prevenirea bolilor și promovarea sănătății pe termen lung.',
        proceduri: [
            { nume: 'Screeninguri de sănătate', descriere: 'Evaluări periodice pentru identificarea precoce a problemelor de sănătate', pret: 120 },
            { nume: 'Consultanță în stil de viață sănătos', descriere: 'Sesiuni de consiliere pentru promovarea unui stil de viață sănătos și echilibrat', pret: 100 },
            { nume: 'Vaccinări și imunizări', descriere: 'Vaccinări pentru protejarea împotriva bolilor infecto-contagioase', pret: 80 }
        ],
        deschis: false
    }
];

export default Servicii;