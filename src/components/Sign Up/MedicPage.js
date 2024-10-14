import React, { useState } from "react";
import "./MedicPage.css";

const MedicPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            setError("Email și parola sunt obligatorii.");
            return;
        }

        if (email.endsWith("@medic.ro")) { // Verificăm dacă adresa de email se încheie cu "@medic.ro"
            // Deschide funcționalitatea specială pentru medici
            alert("Bine ați venit, doctorule!");
            return;
        }

        console.warn(email, password);
        setError("");
    };

    return (
        <div className="medic-page-container">
            <h1 className="medic-page-title">Pagină specială pentru medici</h1>
            <input
                type="email"
                placeholder="Enter Email"
                className="inputBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter Password"
                className="inputBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleLogin} className="appButton" type="button">
                Login
            </button>
        </div>
    );
};

export default MedicPage;
