import React from "react";
import Btns from "./testBtnLayout/buttons";
import "../Css/Home.css";
import conseil from "../img/healthcare.png";
import distance from "../img/social-distancing.png";
import mask from "../img/mask.png";
import home from "../img/home.png";
import hands from "../img/wash-your-hands.png";
import cough from "../img/cough.png";
import hi from "../img/hi.png";
import tissue from "../img/tissue-paper.png";

function Home() {
  return (
    <div className="container-fluid ">
      <div className="container-fluid firstLayerHome">
        <div className="firstLayerHome ">
          <div className="container">
            <div className="tp-caption home">
              <center>
                <p> Bienvenue à CoronaVirus.tn</p>
              </center>
            </div>
            <br />
            <br />
            <center>
              <div>
                <h2>Informer, Analyser et Orienter</h2>
                <p>
                  Des outils créés par l'Alliance Digitale contre le COVID-19 et
                  mis à la disposition de tous les citoyens, gratuitement, dans
                  le respect de leur vie privée.
                </p>
              </div>
            </center>
          </div>
          <Btns />
        </div>
      </div>
      
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-lg-4 align-items-center justify-content-center d-flex lg-padding-right-60">
            <div className="section-advices-icon">
              <img
                src={conseil}
                href="conseil"
                style={{ width: 200, height: 250 }}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8 col-lg-7 offset-md-1 offset-lg-0">
            <h2 className="title">
              <span className="category">Conseils </span> <hr />
              Comment se protéger et protéger les autres au quotidien ?
            </h2>
            <ul className="list-icon">
              <li className="list-icon-item">
                <img src={distance} alt="" />

                <span>
                  <strong> Respectez au maximum </strong> les mesures de
                  distanciation sociales.
                </span>
              </li>
              <li className="list-icon-item">
                <img src={mask} alt="" />

                <span>
                  <strong> Portez un masque. </strong>
                </span>
              </li>
              <li className="list-icon-item">
                <img src={home} alt="" />

                <span>
                  <strong> Limitez les interactions sociales </strong>,
                  certaines personnes transmettent le virus sans en ressentir
                  les symptômes.
                </span>
              </li>
              <li className="list-icon-item">
                <img src={hands} alt="" />

                <span>
                  Lavez-vous
                  <strong> très régulièrement </strong>
                  les mains.
                </span>
              </li>
              <li className="list-icon-item">
                <img src={cough} alt="" />

                <span>
                  Toussez ou éternuez
                  <strong> dans votre coude ou dans un mouchoir. </strong>
                </span>
              </li>{" "}
              <li className="list-icon-item">
                <img src={hi} alt="" />

                <span>
                  Saluez
                  <strong> sans serrer la main, n'embrassez personne. </strong>
                </span>
              </li>{" "}
              <li className="list-icon-item">
                <img src={tissue} alt="" />

                <span>
                  Utilisez un
                  <strong> mouchoir à usage unique </strong>
                  et jetez-le.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
