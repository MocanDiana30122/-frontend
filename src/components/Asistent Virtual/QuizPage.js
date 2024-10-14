import React, { useEffect, useRef, useState } from "react";
import "./QuizPage.css";
const QuizPage = () => {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);


    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(scrollToBottom, [messages]);

    const handleAskQuestion = () => {
        const newMessages = [...messages, { text: question, sender: "user" }];
        let responseText = "Nu înțeleg întrebarea.";


        if (question.toLowerCase().includes("buna")) {
            responseText = "Buna! Cu ce pot să fiu de folos?";
        } else if (question.toLowerCase().includes("ce este un virus")) {
            responseText = "Un virus este un agent infecțios microscop, care poate infecta celulele organismelor vii.";
        } else if (question.toLowerCase().includes("ce este un vaccin")) {
            responseText = "Un vaccin este un preparat biologic care oferă imunitate activă împotriva unei boli specifice.";
        } else if (question.toLowerCase().includes("care sunt simptomele unei răceli")) {
            responseText = "Simptomele comune ale unei răceli includ nas înfundat, durere în gât, tuse și febră ușoară.";
        } else if (question.toLowerCase().includes("ce este hipertensiunea")) {
            responseText = "Hipertensiunea este o afecțiune în care forța sângelui împotriva pereților arterelor este prea mare.";
        } else if (question.toLowerCase().includes("cum se tratează diabetul")) {
            responseText = "Diabetul se tratează printr-o combinație de dietă, exerciții fizice și medicamente, inclusiv insulină.";
        } else if (question.toLowerCase().includes("ce este cancerul")) {
            responseText = "Cancerul este o boală în care celulele anormale se divid necontrolat și pot invada alte țesuturi.";
        } else if (question.toLowerCase().includes("care sunt simptomele unei alergii")) {
            responseText = "Simptomele alergiilor pot include strănut, mâncărimi, nas înfundat și erupții cutanate.";
        } else if (question.toLowerCase().includes("ce este astmul")) {
            responseText = "Astmul este o afecțiune cronică a căilor respiratorii care provoacă dificultăți de respirație.";
        } else if (question.toLowerCase().includes("cum se transmite gripa")) {
            responseText = "Gripa se transmite prin picături de salivă sau secreții nazale de la o persoană infectată.";
        } else if (question.toLowerCase().includes("ce este colesterolul")) {
            responseText = "Colesterolul este o substanță grasă produsă de ficat și găsită în anumite alimente.";
        } else if (question.toLowerCase().includes("ce sunt probioticele")) {
            responseText = "Probioticele sunt microorganisme vii care oferă beneficii pentru sănătatea digestivă.";
        } else if (question.toLowerCase().includes("ce este artrita")) {
            responseText = "Artrita este inflamația unei sau mai multor articulații, provocând durere și rigiditate.";
        } else if (question.toLowerCase().includes("ce este anemia")) {
            responseText = "Anemia este o afecțiune în care sângele nu are suficiente celule roșii sănătoase.";
        } else if (question.toLowerCase().includes("cum se tratează migrena")) {
            responseText = "Migrena se tratează prin medicamente specifice, odihnă și evitarea factorilor declanșatori.";
        } else if (question.toLowerCase().includes("ce este osteoporoza")) {
            responseText = "Osteoporoza este o afecțiune în care oasele devin fragile și predispuse la fracturi.";
        } else if (question.toLowerCase().includes("care sunt simptomele unei infecții urinare")) {
            responseText = "Simptomele unei infecții urinare includ durere la urinare, nevoia frecventă de a urina și urină tulbure.";
        } else if (question.toLowerCase().includes("ce este o hernie")) {
            responseText = "O hernie apare atunci când un organ împinge printr-un punct slab în mușchii sau țesuturile care îl înconjoară.";
        } else if (question.toLowerCase().includes("cum se previne gripa")) {
            responseText = "Gripa poate fi prevenită prin vaccinare anuală, spălarea frecventă a mâinilor și evitarea contactului cu persoanele bolnave.";
        } else if (question.toLowerCase().includes("ce este hepatita")) {
            responseText = "Hepatita este o inflamație a ficatului, adesea cauzată de o infecție virală.";
        }

        newMessages.push({ text: responseText, sender: "bot" });
        setMessages(newMessages);
        setQuestion("");
    };

    return ( <
        div className = "quiz-page" >
        <
        h1 > Asistent Virtual < /h1> <
        div className = "chat-window" > {
            messages.map((msg, index) => ( <
                div key = { index }
                className = { `chat-message ${msg.sender === "user" ? "user-message" : "bot-message"}` } > { msg.text } <
                /div>
            ))
        } <
        div ref = { messagesEndRef }
        style = {
            { float: "left", clear: "both" } }
        /> <
        /div> <
        div className = "input-area" >
        <
        input type = "text"
        value = { question }
        onChange = {
            (e) => setQuestion(e.target.value) }
        placeholder = "Ask me anything..." / >
        <
        button onClick = { handleAskQuestion } > Ask < /button> <
        /div> <
        /div>
    );

};

export default QuizPage;