import React, { useState } from "react";
import "./AuthForm.css";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

const AuthForm = () => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin((prevShowLogin) => !prevShowLogin);
    };

    return ( <
        div className = "container" >
        <
        div className = "form-container" > { " " } { showLogin ? < LoginForm / > : < SignUp / > } { " " } <
        button className = "switch-button"
        onClick = { toggleForm } > { " " } {
            showLogin
                ?
                "Don't have an account? Sign Up" :
                "Already have an account? Login"
        } { " " } <
        /button>{" "} <
        /div>{" "} <
        /div>
    );
};

export default AuthForm;