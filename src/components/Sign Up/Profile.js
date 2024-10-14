import React, { useState, useEffect } from "react";


const ProfilePage = () => {
    const [programari, setProgramari] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch programarile utilizatorului din backend
        const fetchProgramari = async () => {
            try {
                const email= localStorage.getItem("email");
                const response = await fetch(`http://localhost:5000/programariget?email=${email}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch programari.");
                }
                const data = await response.json();
                setProgramari(data);
            } catch (error) {
                setError(error.message || "An error occurred while fetching programari.");
            }
        };

        fetchProgramari();
    }, []);

    return (
        <div className="profile-container">
            <h1 className="profile-title">Profile</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="programari-list">
                <h2>Programări existente:</h2>
                <ul>
                {programari.map(programare => (
                 <li key={programare.id}>
                    <p>Pacient: {programare.Nume} {programare.Prenume}</p>
                        <p>Data: {programare.Data}</p>
                        <p>Telefon: {programare.Telefon}</p>
                        <p>Serviciu: {programare.Serviciu}</p>
                        
                        
             </li>
            ))}

                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;
