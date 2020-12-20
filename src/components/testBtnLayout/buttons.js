import React, { Component } from "react";
import Box from "./Box";
import test from "../../img/test.png";
import labo from "../../img/Labo.png";
import surv from "../../img/surv.png";
class Btns extends Component {
  render() {
    return (
      <div className="container box1">
        <div className="row justify-content-md-center mx-0">
          <div className="col px-0 text-center">
            <Box
              classname={"sub1"}
              img={test}
              title={"Test d'Orientation"}
              text={
                "J'ai été exposé au COVID-19 ou pense l'étre.Je ressens des symptomes.Quelle conduite tenir? "
              }
              lien={"/Test1/Question1"}
            />
          </div>
          <div className="col px-0 text-center">
            <Box
              classname={"sub2"}
              img={surv}
              title={"Auto-Surveillance"}
              text={
                "Je suis porteur des symptomes du COVID-19 et j'ai déja consulté.Si mon médecin me le recommande,j'utilise cet outil. "
              }
              lien={"/Auto-Surveillance"}
            />
          </div>
          <div className="col px-0 text-center">
            <Box
              classname={"sub3"}
              img={labo}
              title={"Laboratoire plus Proche"}
              text={"Cliquez ici pour consulter les informations sur le laboratoire le plus proche de chez vous "}
              lien={"/Laboratoires"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Btns;
