import React from "react";
import facebookico from "./imagenes/facebook.svg";
import whatsappico from "./imagenes/whatsapp.svg";
import twitterico from "./imagenes/twitter.svg";
import instagramico from "./imagenes/instagram.svg";
import './stilosSocialBar.css'

function SocialBar() {
    return (
        <div className="icon">
            <div className="socialMedia">
            <a href="/" className="iconlist"><img src={facebookico} alt="facebookicon"/></a>
            <a href="/" className="iconlist"><img src={whatsappico} alt="whatsappicon"/></a>
            <a href="/" className="iconlist"><img src={twitterico} alt="twittericon"/></a>
            <a href="/" className="iconlist"><img src={instagramico} alt="instagramicon"/></a>
            </div>
        </div>
    );
}

export default SocialBar;