import React from "react";
import Btns from "./testBtnLayout/buttons";
import "../Css/Home.css";

function Home() {
  return (
    <div className="container-fluid ">
      <div className="container-fluid firstLayerHome">
      <div className="firstLayerHome ">
        <div className="container">
              <div className="tp-caption home">Welcome to</div>
              <div className="tp-caption ">CoronaVirus.tn</div>

        </div>
        
          <Btns />
       
      </div>
      </div>
      <div className="container-fluid secondLayerHome">

      <div className="secondLayerHome">
        
        <h3>MÉDICAMENTS</h3>
        <h1>
          Vous avez actuellement un traitement médicamenteux et vous présentez
          des symptômes du COVID-19 ?
        </h1>
        <h5>
          Fièvre, fatigue, maux de tête, toux et maux de gorge, courbatures,
          gêne respiratoire. Pour vérifier si un médicament présente un risque
          d’aggraver vos symptômes :
        </h5>
        <button>Covid19 - medicaments.com</button>
      </div>
    </div>
    </div>
  );
}
export default Home;
