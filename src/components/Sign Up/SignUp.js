import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(""); 

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, []);

    // Validation function to check for whitespace
    const hasWhiteSpace = (input) => {
        return /\s/.test(input);
    };

    const collectData = async () => {
        // Trim input values to remove leading and trailing whitespace
        
        // Check if any input field contains whitespace
        if (hasWhiteSpace(name) || hasWhiteSpace(email) || hasWhiteSpace(password) || hasWhiteSpace(confirmPassword)) {
            setError("Spaces are not allowed in any field.");
            return;
        }

        if (!name || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Password and confirm password do not match.");
            return;
        }

        try {
            let result = await fetch("http://localhost:5000/signup", {
                method: 'POST',
                body: JSON.stringify({ name: name, email: email, password: password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!result.ok) {
                const errorData = await result.json();
                throw new Error(errorData.message || `HTTP error! status: ${result.status}`);
            }

            result = await result.json();
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/');
        } catch (error) {
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                console.error("Network error or server is not running:", error);
                setError("Network error or server is not running. Please try again later.");
            } else {
                console.error("There was an error with the sign-up process:", error);
                setError(error.message || "There was an error with the sign-up process. Please try again.");
            }
        }
    };

    return (
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <input
                type="text"
                placeholder="Enter Name"
                className="inputBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <input
                type="password"
                placeholder="Confirm Password"
                className="inputBox"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={collectData} className="appButton" type="button">
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;
