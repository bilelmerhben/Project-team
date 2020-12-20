import React from "react";
import Btns from "./testBtnLayout/buttons";
import "../Css/Home.css";
import conseil from "../img/conseil.png";
import icon1cons from "../img/icon1cons.png";

function Home() {
  return (
    <div className="container-fluid ">
      <div className="container-fluid firstLayerHome">
      <div className="firstLayerHome pt-3 mt-5">
        <div className="container">
              <div className="tp-caption">Welcome to</div>
              <div className="tp-caption">CoronaVirus.tn</div>

        </div>
        <div className="buttons">
          <Btns />
        </div>
      </div>
      </div>
      <div className="container-fluid secondLayerHome" style={{width:1200}}>

      <div className="contenu" >
        
        <h1 id="titre">MÉDICAMENTS</h1><br/>
        <h1 id="question">
          Vous avez actuellement un traitement médicamenteux et vous présentez
          des symptômes du COVID-19 ?
        </h1><br/><br/>
        <div className="symptome">
          <p>Fièvre, fatigue, maux de tête, toux et maux de gorge, courbatures,
          gêne respiratoire.<br/>Pour vérifier si un médicament présente un risque
          d’aggraver vos symptômes :</p>
        </div><br/><br/>
          <div className="site ">
        <h5>Visitez Notre Site :</h5>
        <a href="https://www.covid19-medicaments.com/" >
         <p class="btnclass"><span  style={{color:"rgb(141, 235, 208)"}}>Covid19</span>
          <span  style={{color:"rgb(69, 187, 235)"}}>-medicaments.com</span>
          </p> </a>
          </div>
      </div>
    </div>
    <div className="thirdLayerHome container-fluid ">
      <img src={conseil} href="conseil" style={{width:300,height:100}}/>
      
        <h1>Comment se protéger et protéger les autres au quotidien ?</h1>
        <img src={icon1cons} href="" />
       <h5>Respectez au maximum les mesures de distanciation sociales.</h5>
       <h5>Portez un masque.</h5>
       <h5>Limitez les interactions sociales, certaines personnes transmettent le virus sans en ressentir les symptômes.</h5>
       <h5>Lavez-vous très régulièrement les mains.</h5>
       <h5>Toussez ou éternuez dans votre coude ou dans un mouchoir.</h5>
       <h5>Saluez sans serrer la main, n'embrassez personne.</h5>
       <h5>Utilisez un mouchoir à usage unique et jetez-le.</h5>
    </div>
    </div>
  );
}
export default Home;
