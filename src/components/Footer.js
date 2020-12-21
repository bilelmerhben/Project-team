import { imageOverlay } from "leaflet";

import React from "react";
import corona from "../img/logo.png";
import "../Css/footer.css";
import adresse from "../img/adresse.png"; 
import mail from "../img/mail.png";
import tel from "../img/tel.png";

function Footer() {
  return (
    <div className="container-fluid">
        <div  className="footer-top-holder">
        <div className="footer-left-alignement">
            <div className="left-description">
                <div className="logo-footer">
                    <img className="img-footer "src={corona} alt=""/>
                </div>
                <div className="text-footer">
                    <span className="span-text">CoronaVirus.tn est un site Web Tunisien qui pourra vous orienter ..</span>
                </div><br/>
                <div className="info">
                <div className="adresse">
                    <img className="logo-info" src={adresse} alt=""/><span className="span-text"> Ariana nahj tekup</span>
                </div><br/>
                <div className="tel">
                    <img className="logo-info" src={tel} alt=""/><span className="span-text"> +216 52 340 988</span>
                </div><br/>
                <div className="mail">
                    <img className="logo-info" src={mail} alt=""/><span className="span-text"> CoronaVirus@corona.tn</span>
                </div>
                </div>
            </div>
            </div>
            <div className="footer-right-alignement">
                <div className="right-description">
                    <div className="right-title">
                       <div className="contact">
                           <span className="span-text">Contactez-nous</span>
                       </div>
                    </div>

                </div>
            </div>

        
        </div>
    </div>
  );
}

export default Footer;
