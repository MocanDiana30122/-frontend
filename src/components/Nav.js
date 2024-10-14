import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Nav.css";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate(); // Use useNavigate hook
    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    };
    return (
        <div className="nav-container">
            <div className="logo">VirtualMed</div>
            <ul className="nav-ul">
                <li><Link to="/" className="nav-link">Acasa</Link></li>
                <li><Link to="/servicii" className="nav-link">Servicii</Link></li>
                <li><Link to="/medici" className="nav-link">Medici</Link></li>
                <li><Link to="/asistent-virtual" className="nav-link">Asistent Virtual</Link></li>
                <li><Link to="/profile" className="nav-link">Profile</Link></li>
                <li>
                    {auth ? (
                        <button onClick={logout} className="nav-link">Logout</button>
                    ) : (
                        <Link to="/signup" className="nav-link">Login</Link>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Nav;
