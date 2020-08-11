import React from 'react';
import './Stilos.css';

function PortadaImg (){
    return(
        <div className="totalPortada">
            <div className="totalportadaContainer">
                <div className="tituloPortadaContainer">
                    <h1 className="titulosPortadah1">Hola, soy Ana Maria</h1>
                    <h2 className="titulosPortadah2">Profesor de Lengua Castellana</h2>
                </div>
                <div className="buttonPortada">
                    <button>Saber más ...</button> 
                </div>
            </div>
        </div>
    );
}

export default PortadaImg;