import React from "react";
import "./Acasa.css";

const Acasa = () => {
    return ( <
        div className = "acasa-container" >
        <
        header className = "header" >
        <
        h1 > Bun venit la VirtualMed < /h1> <
        p > Asistentul tău medical pentru consultări < /p> <
        /header> <
        section className = "features" >
        <
        h2 > Beneficiați de < /h2> <
        ul >
        <
        li > 24 / 7 Suport Medical < /li> <
        li > Consultări Virtuale < /li> <
        li > Acces la ultimele inovații în medicină < /li> <
        li > Sfaturi personalizate despre sănătate < /li> <
        /ul> <
        /section> <
        section className = "about" >
        <
        h2 > Despre noi < /h2> <
        div className = "medical-icons" >
        <
        div className = "image-container" >
        <
        img id = "image1"
        src = "https://i.ibb.co/RbP64J1/images.jpg"
        alt = "images" /
        >
        <
        /div> <
        p >
        Bine ați venit pe platforma VirtualMed, un hub online pentru servicii medicale inovatoare și consultații personalizate.Noi ne angajăm să oferim acces la cele mai recente informații medicale,
        tratamente avansate și expertiză specializată pentru sănătatea și bunăstarea dumneavoastră.Cu o echipă de profesioniști medicali dedicați și tehnologii de vârf, VirtualMed vă oferă o experiență convenabilă și sigură pentru întrebările și nevoile dumneavoastră medicale.Începeți călătoria dumneavoastră către o viață sănătoasă și informată astăzi cu VirtualMed!
        <
        /p> <
        p > Domeniile noastre de activitate sunt: Pneumologie, Ortopedie, Neurologie < /p> <
        div className = "image-container" >
        <
        img id = "image2"
        src = "https://i.ibb.co/0jmGZmf/images-2.jpg"
        alt = "images-2" /
        >
        <
        img src = "https://i.ibb.co/ZYvQkqh/download-2.jpg"
        alt = "download-2" /
        >
        <
        img src = "https://i.ibb.co/5xT0RLB/download.jpg"
        alt = "download" /
        >
        <
        img src = "https://i.ibb.co/pvcxRQM/images-1.jpg"
        alt = "images-1" /
        >
        <
        /div> <
        /div> <
        /section> <
        footer className = "footer" >
        <
        p > ©2024 VirtualMed.Toate drepturile rezervate. < /p> <
        /footer> <
        /div>
    );
};

export default Acasa;