import React from "react";
import './Stilos.css';
import logo from './imagenes/Logo-nombre.png';

function Header() {
    return (
        <nav className="nav">
            <div className="logoContent">
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
        </nav>
    );
}

export default Header;

