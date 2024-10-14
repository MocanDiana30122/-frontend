import React, { useState } from "react";
import "./Medici.css";
import ProgramareForm from "./ProgramareForm"; // Import the ProgramareForm component

const Medici = () => {
    const [medici, setMedici] = useState(mediciData); // State for the list of doctors
    const [medicDeschis, setMedicDeschis] = useState(null); // State for the opened doctor details
    const [showProgramareForm, setShowProgramareForm] = useState(false); // State for showing the programare form

    // Function to open or close the details of a doctor
    const toggleDetaliiMedic = (medic) => {
        if (medicDeschis === medic) {
            // If the current doctor is already open, close it
            setMedicDeschis(null);
            setShowProgramareForm(false);
        } else {
            // Otherwise, open the details for the respective doctor
            setMedicDeschis(medic);
            setShowProgramareForm(false); // Hide the form when opening a different doctor's details
        }
    };

    // Function to open the programare form
    const handleProgramareClick = () => {
        setShowProgramareForm(!showProgramareForm);
    };

    return ( <
        div className = "medici-container" >
        <
        h1 > Medicii Noștri < /h1>{" "} <
        div className = "medici-list-container" >
        <
        div className = "medici-list" > { " " } {
            medici.map((medic, index) => ( <
                div key = { index }
                className = { `medic-item ${
                medic === medicDeschis ? "deschis" : ""
              }` } >
                <
                img src = { medic.imagine }
                alt = { medic.nume }
                />{" "} <
                h2 > { medic.nume } < /h2> <p> {medic.specializare} </p > { /* Displaying the doctor's details only if it is open */ } { " " } {
                    medic === medicDeschis && ( <
                        div className = "detalii-medic" >
                        <
                        p > { medic.descriere } < /p>{" "} <
                        button className = "programare-button"
                        onClick = { handleProgramareClick } >
                        { " " } {
                            showProgramareForm
                                ?
                                "Închide Formular" :
                                "Programare"
                        } { " " } <
                        /button>{" "} { showProgramareForm && < ProgramareForm / > } { " " } <
                        /div>
                    )
                } { /* Button to open/close the doctor's details */ } { " " } <
                button className = "detalii-button"
                onClick = {
                    () => toggleDetaliiMedic(medic) } >
                { " " } {
                    medic === medicDeschis ?
                        "Ascunde Detalii" :
                        "Vezi Detalii"
                } { " " } <
                /button>{" "} <
                /div>
            ))
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

const mediciData = [{
        nume: "Dr. Diana Mocan",
        imagine: "https://i.ibb.co/MZDxw3g/dia.jpg",
        specializare: "Cardiologie",
        descriere: "Dr. Diana Mocan este un cardiolog cu o vastă experiență în diagnosticarea și tratarea bolilor cardiovasculare.",
    },
    {
        nume: "Dr. Ias Alex",
        imagine: "https://i.ibb.co/BLypsf0/ias.jpg",
        specializare: "Urologie",
        descriere: "Dr. Ias Alex este un urolog cu o expertiză deosebită în tratamentul afecțiunilor sistemului musculoscheletic.",
    },
    {
        nume: "Dr. Negoita Matilda",
        imagine: "https://i.ibb.co/j3J5mXb/matii.jpg",
        specializare: "Neurologie",
        descriere: "Dr. Negoita Matilda este un neurolog cu o vastă experiență în diagnosticarea și tratarea bolilor neurologice.",
    },
    {
        nume: "Dr. Moldovan Dan",
        imagine: "https://i.ibb.co/0nxTPVB/moldo.jpg",
        specializare: "Ortopedie",
        descriere: "Dr. Moldovan Dan este un ortoped cu o expertiză deosebită în tratamentul afecțiunilor sistemului musculoscheletic.",
    },
    {
        nume: "Dr. Lupaescu Tabita",
        imagine: "https://i.ibb.co/FYvDmYd/tbt.jpg",
        specializare: "Medicina Generala",
        descriere: "Dr. Lupaescu Tabita este un medic generalist cu o experiență vastă în îngrijirea pacienților de toate vârstele.",
    },
];

export default Medici;