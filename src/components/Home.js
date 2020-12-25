import React from "react";
import Btns from "./testBtnLayout/buttons";
import "../Css/Home.css";
import Conseils from "./Conseils";

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
      <Conseils />
    </div>
  );
}
export default Home;
