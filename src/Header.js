import React from "react";
import './stilosHeader.css';
import logo from './imagenes/Logo.png';

function Header() {
    return (
        <div className="app-header">
            <div className="contentLogo">
                <a href="/"><img src={logo} alt="Profe-Ana" className="img"/></a>
            </div>
            <div className="content-listas">
                <div className="listas">
                    <a href="/" className="list"><b>ENTRAR</b></a>
                    <a href="/" className="list"><b>INICIO</b></a>
                    <a href="/" className="list"><b>BLOG</b></a>
                    <a href="/" className="list"><b>SOBRE MI</b></a>
                </div>
            </div>
        </div>
    );
}

export default Header;

