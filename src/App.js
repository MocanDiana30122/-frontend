import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Acasa from "./components/Acasa/Acasa";
import QuizPage from "./components/Asistent Virtual/QuizPage";
import Footer from "./components/Footer/Footer";
import Medici from "./components/Medici/Medici";
import Nav from "./components/Nav";
import Servicii from "./components/Servicii/Servicii";
import AuthForm from "./components/Sign Up/AuthForm";
import Profile from "./components/Sign Up/Profile";
import PrivateComponent from './PrivateComponent';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                <Route element={<PrivateComponent />}>
                    
                    <Route path="/servicii" element={<Servicii />} />
                    <Route path="/medici" element={<Medici />} />
                    <Route path="/asistent-virtual" element={<QuizPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path = "/logout" element = {<h1>logout</h1>} />
                    </Route>
                    <Route path="/signup" element={<AuthForm />} />
                    <Route path="/login" element={<AuthForm />} />
                    <Route path="/" element={<Acasa />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
