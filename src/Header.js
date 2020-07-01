import React from "react";
import './App.css';
//import logo from '../public/Recurso-1.png';

function Header() {
    return (
        <div className="app-header">
            <div className="logo">
            	<a href="#" alt="Profe-Ana"><img src=""></img></a>
            </div>
            <div>
                <div>
                    <a href="" className="list">ENTRAR</a>
                    <a href="" className="list">INICIO</a>
                    <a href="" className="list">BLOG</a>
                    <a href="" className="list">SOBRE MI</a>
                </div>
            </div>
        </div>
    );
}

export default Header;

