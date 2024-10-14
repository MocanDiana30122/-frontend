import React, { useState } from 'react';
import './ProgramareForm.css';

const ProgramareForm = () => {
    const [formData, setFormData] = useState({
        data: '',
        ora: '',
        nume: '',
        prenume: '',
        telefon: '',
        serviciu: '',
        email: ''
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Elimină spațiile goale din valoare
        const trimmedValue = value.trim();
        setFormData({...formData, [name]: trimmedValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifică dacă există spații goale în formData
        const formValues = Object.values(formData);
        if (formValues.some(value => value === '')) {
            setError('Toate câmpurile sunt obligatorii. Vă rugăm să completați toate câmpurile.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/programari', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Programare realizată cu succes!');
            setError("");
            setFormData({
                data: '',
                ora: '',
                nume: '',
                prenume: '',
                telefon: '',
                serviciu: '',
                email: ''
            }); // Resetează valorile formularului după trimiterea cu succes
        } catch (error) {
            console.error('There was an error submitting the form:', error);
            alert('A apărut o eroare. Vă rugăm să încercați din nou mai târziu.');
        }
    };

    return (
        <div className="programare-form-container">
            <h2>Formular de Programare</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Data:
                    <input type="date" name="data" value={formData.data} onChange={handleChange} required />
                </label>
                <label>
                    Ora:
                    <input type="time" name="ora" value={formData.ora} onChange={handleChange} required />
                </label>
                <label>
                    Nume:
                    <input type="text" name="nume" value={formData.nume} onChange={handleChange} required />
                </label>
                <label>
                    Prenume:
                    <input type="text" name="prenume" value={formData.prenume} onChange={handleChange} required />
                </label>
                <label>
                    Telefon:
                    <input type="tel" name="telefon" value={formData.telefon} onChange={handleChange} required />
                </label>
                <label>
                    Serviciu:
                    <input type="text" name="serviciu" value={formData.serviciu} onChange={handleChange} required />
                </label>
                <label>
                    Email
                    <input type="text" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <input type="submit" value="Trimite" />
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default ProgramareForm;
