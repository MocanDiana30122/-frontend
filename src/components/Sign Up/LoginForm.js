import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 

    const handleLogin = async () => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        // Validation: Check for whitespace
        if (/\s/.test(trimmedEmail) || /\s/.test(trimmedPassword)) {
            setError("Spaces are not allowed in email or password.");
            return;
        }

        // Validation: Check if fields are empty
        if (!trimmedEmail || !trimmedPassword) {
            setError("Email and password are required.");
            return;
        }

        try {
            let response = await fetch("http://localhost:5000/login", {
                method: 'POST',
                body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log("Response:", data); // Log the response

            if (!response.ok) {
                throw new Error(data.message || "Login failed.");
            }

            // Login successful, handle user authentication (e.g., store token in localStorage)
            console.log("Login successful:", data);
            localStorage.setItem("user", JSON.stringify(data)); // Stocare în localStorage
            navigate('/');
            // Redirect to dashboard or homepage
        } catch (error) {
            setError(error.message || "An error occurred while logging in. Please try again.");
        }
        localStorage.setItem("email", trimmedEmail); // Stocare nume utilizator în localStorage

    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
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

export default LoginForm;
