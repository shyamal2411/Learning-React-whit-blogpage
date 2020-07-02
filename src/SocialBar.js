import React from "react";
import facebookico from "./imagenes/facebook.svg";
import whatsappico from "./imagenes/whatsapp.svg";
import twitterico from "./imagenes/twitter.svg";
import instagramico from "./imagenes/instagram.svg";
import './stilosSocialBar.css'

function SocialBar() {
    return (
        <div className="icon">
            <a href="/" alt="facebookicon" className="iconlist"><img src={facebookico}/></a>
            <a href="/" alt="whatsappicon" className="iconlist"><img src={whatsappico}/></a>
            <a href="/" alt="twittericon" className="iconlist"><img src={twitterico}/></a>
            <a href="/" alt="instagramicon" className="iconlist"><img src={instagramico}/></a>
        </div>
    );
}

export default SocialBar;