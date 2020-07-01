import React from "react";
import './App.css';

function Header() {
    return (
        <div className="app-header">
            <div className="logo">
            	<a href="#" alt="Profe-Ana"><img src="../public\Recurso-1.png"></img></a>
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

