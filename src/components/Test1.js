import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../Css/Test1.css";

import toux from "../img/toux.png";
import temperature from "../img/temperature.png";
import informations from "../img/informations.png";
import gout from "../img/gout.png";
import odorat from "../img/odorat.png";
import courbature from "../img/courbature.png";
import gorge from "../img/gorge.png";
import diarhee from "../img/diarhee.png";
import immunite from "../img/immunite.png";
import enceinte from "../img/enceinte.png";
import foie from "../img/foie.png";
import dialyse from "../img/dialyse.png";
import respire from "../img/respire.png";
import pneumologue from "../img/pneumologue.png";
import diabete from "../img/diabete.png";
import cardiaque from "../img/cardiaque.png";
import hypertention from "../img/hypertention.png";
import poids from "../img/poids.png";
import taille from "../img/taille.png";
import age from "../img/age.png";
import souffle from "../img/souffle.png";
import impossible from "../img/impossible.png";
import fatigue from "../img/fatigue.png";
import cancer from "../img/cancer.png";

class Test1 extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/Test1/Question1" component={Question1} />
          <Route path="/Test1/Question2" component={Question2} />
          <Route path="/Test1/Question3" component={Question3} />
          <Route path="/Test1/Question4" component={Question4} />
          <Route path="/Test1/Question5" component={Question5} />
          <Route path="/Test1/Question6" component={Question6} />
          <Route path="/Test1/Question7" component={Question7} />
          <Route path="/Test1/Question8" component={Question8} />
          <Route path="/Test1/Question9" component={Question9} />
          <Route path="/Test1/Question10" component={Question10} />
          <Route path="/Test1/Question11" component={Question11} />
          <Route path="/Test1/Question12" component={Question12} />
          <Route path="/Test1/Question13" component={Question13} />
          <Route path="/Test1/Question14" component={Question14} />
          <Route path="/Test1/Question15" component={Question15} />
          <Route path="/Test1/Question16" component={Question16} />
          <Route path="/Test1/Question17" component={Question17} />
          <Route path="/Test1/Question18" component={Question18} />
          <Route path="/Test1/Question19" component={Question19} />
          <Route path="/Test1/Question20" component={Question20} />
          <Route path="/Test1/Question21" component={Question21} />
          <Route path="/Test1/Question22" component={Question22} />
        </Switch>
      </div>
    );
  }
}

function Question1() {
  return (
    <div className="test1 ">
      <div className="div1 container-lg   ">
        <h4>Question 1 sur 22</h4>
        <form action="/Test1/Question2">
          <div className="question">
            <p className="questionsTitle">
              Ces dernières 48 heures, quelle a été votre température la plus
              élevée ?
            </p>
            <p className="questionsIndication">Remplissez le champ : </p>
            <div className="questionsOptions">
              <div className="customText">
                <input
                  className="input-text"
                  type="number"
                  name="Temperature"
                  placeholder="37.0"
                  min="34"
                  max="42"
                  step="0.1"
                  autoComplete
                  autoFocus
                  required
                />
                degrés
              </div>
            </div>
          </div>
          <br />
          <input
            class=" btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={temperature} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La temperature</p>
            <p>
              La <b>température</b> se mesure avec un thermomètre.</p>
              <p>Le thermomètre indiqueun nombre</p>
            <p>c'est la température de votre corps.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question2() {
  return (
    <div className="test1">
      <div className="div1 container-lg">
<<<<<<< HEAD
        <h4>Question 2 sur 22</h4>

=======
        <h4>Question 2 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        <p className="questionsTitle">
          Ces derniers jours, avez-vous une toux ou votre toux habituelle
          s’est-elle modifiée ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question3">
          <div className="question">
            <p className="questionsTitle">
              Ces derniers jours, avez-vous une toux ou votre toux habituelle
              s’est-elle modifiée ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div><br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={toux} alt="Icone toux" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La toux</p>
            <p>
              Une augmentation de votre <b>toux</b> veut dire
            </p>
            <p>que vous toussez plus que d'habitude.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="logo falc" />
        </div>
      </div><br/>
    </div>
  );
}

function Question3() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />

        <h4>Question 3 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>

        <form action="/Test1/Question4">
          <div className="question">
            <p className="questionsTitle">
              Ces derniers jours, avez-vous noté une perte ou une forte
              diminution de votre goût ou de votre odorat ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />

            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={gout} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La perte du goût</p>
            <p>
              La <b>perte du goût</b>, c'est quand vous ne pouvez plus reconnaître le goût d'un aliment.</p>
              <p>Par exemple, le poulet a le même goût que le poisson.</p>
          </div>
        </div><hr/>
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={odorat} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La perte de l'odorat</p>
            <p>
              La <b>perte de l'odorat</b>,c'est quand vous ne sentez plus les odeurs.</p>
              <p>Par exemple, vous ne pouvez plus sentir l'odeur du poulet qui sort du four.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question4() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />

        <h4>Question 4 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>

        <form action="/Test1/Question5">
          <div className="question">
            <p className="questionsTitle">
              Ces derniers jours, avez-vous eu un mal de gorge et/ou des
              douleurs musculaires et/ou des courbatures inhabituelles et/ou des
              maux de tête inhabituels ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={gorge} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">Le mal de gorge</p>
            <p>
            Le <b>mal de gorge</b>,</p>
            <p>c’est quand vous ressentez un irritation</p>
              <p>ou une gêne au niveau de votre gorge.</p>
          </div>
        </div><hr/>
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={courbature} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La courbature</p>
            <p>
              La <b> courbature</b>, c'est une douleur musculaire.</p>
              <p>On peut ressentir des courbatures</p>
              <p>quand on a fait trop de sport ou quand on est malade.</p>
              <p>Les muscles du corps sont fatigués,donc ils font mal</p>
           
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question5() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 5 sur 22</h4>
=======
        <br />
        <h4>Question 5 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        <p className="questionsTitle">
          - Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3
          selles molles.
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question6">
          <div className="question">
            <p className="questionsTitle">
              Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins
              3 selles molles.
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={diarhee} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La diarrhée</p>
            <p>
              La <b>diarrhée</b> c'est aller aux toilettes plus souvent que  d'habitude</p>
              <p>Il faut être allé aux toilettes au moins 3 fois dans la journée</p>
            <p>La consistance de votre caca est molle ou liquide.</p>
            <p>La quantité est plus importante.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
     
    </div>
  );
}

function Question6() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 6 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 6 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Ces derniers jours, avez-vous une fatigue inhabituelle ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question7">
          <div className="question">
            <p className="questionsTitle">
              Ces derniers jours, avez-vous une fatigue inhabituelle ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={fatigue} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La fatigue inhabituelle</p>
            
            <p>La <b>fatigue inhabituelle</b>, c'est une forme de fatigue</p>
              <p>que vous n'avez pas l'habitude de ressentir.</p>
            <p>Votre corps est plus faible.</p>
            <p>Les douleurs liées à cette fatigue sont plus importantes.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question7() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 7 sur 22</h4>

=======
        <br />
        <Link>
          <h4>Question 7 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de
          la journée ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question8">
          <div className="question">
            <p className="questionsTitle">
              Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié
              de la journée ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      
    </div>
  );
}

function Question8() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 8 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 8 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous
          alimenter ou de boire ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question9">
          <div className="question">
            <p className="questionsTitle">
              Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous
              alimenter ou de boire ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
       
      </div> <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={impossible} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">L'impossibilité de manger ou de boire</p>
            <p>
            Être dans<b> l'impossibilité de manger ou de boire</b> ,</p>
              <p>c'est que vous n'arrivez plus à avaler ni nourriture ni boisson.</p>
            <p>Vous ressentez du dégoût quand vous voyez de la nourriture.</p>

          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question9() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 9 sur 22</h4>

=======
        <br />
        <Link>
          <h4>Question 9 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Ces dernières 24 heures, avez-vous noté un manque de souffle
          inhabituel lorsque vous parlez ou faites un petit effort ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question10">
          <div className="question">
            <p className="questionsTitle">
              Ces dernières 24 heures, avez-vous noté un manque de souffle
              inhabituel lorsque vous parlez ou faites un petit effort ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={souffle} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">Le manque de souffle</p>
            <p>
            Un manque de  <b>souffle est inhabituel</b> ,</p>
              <p>quand vous avez plus de mal à respirer que les autres jours.</p>
            <p>Par exemple vous êtes plus essouflé quand vous parlez</p>
            <p>ou quand vous montez l'escalier.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question10() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 10 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 10 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Quel est votre âge ? Ceci, afin de calculer un facteur de risque
          spécifique.
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question11">
          <div className="question">
            <p className="questionsTitle">
              Quel est votre âge ? Ceci, afin de calculer un facteur de risque
              spécifique.
            </p>
            <p className="questionsIndication">Remplissez le champ : </p>
            <div className="questionsOptions">
              <div className="customText">
                <input
                  className="input-text"
                  type="number"
                  name="Age"
                  placeholder=" Age"
                  min="1"
                  max="110"
                  step="1"
                  autoComplete
                  autoFocus
                  required
                />
                ans
              </div>
            </div>
          </div>
          <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
       
      </div> <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={age} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">L'âge</p>
            <p>
              Votre<b>âge</b> peut être un <b>facteur de risque</b></p>
              <p>Un facteur de risque est quelque chose qui augmente la possibilité d’avoir une maladie.</p>
            <p>Plus votre âge est élevé

et plus vous êtes fragile..</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question11() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 11 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 11 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Quel est votre taille ? Afin de calculer l’indice de masse
          corporelle qui est un facteur influençant le risque de complications
          de l’infection.
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question12">
          <div className="question">
            <p className="questionsTitle">
              Quel est votre taille ? Afin de calculer l’indice de masse
              corporelle qui est un facteur influençant le risque de
              complications de l’infection
            </p>
            <p className="questionsIndication">Remplissez le champ : </p>
            <div className="questionsOptions">
              <div className="customText">
                <input
                  className="input-text"
                  type="number"
                  name="Taille"
                  placeholder="Taille"
                  min="80"
                  max="250"
                  step="1"
                  autoComplete
                  autoFocus
                  required
                />{" "}
                cm{" "}
              </div>
            </div>
          </div>
          <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
       
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={taille} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La taille</p>
            <p>
            Vous avez votre  <b>taille</b> en vous mesurant des pieds à la tête.</p>
            <br/>
              <p>Votre poids et votre taille sont des facteurs de risque.

Il faut calculer votre <b>Indice de Masse Corporelle (IMC)</b>.</p>
            <p>L’IMC donne votre corpulence en faisant un calcul

avec votre poids et votre taille.</p>
            <p>L’IMC permet de dire

si vous être trop gros ou trop maigre,

et donc plus ou moins fragile.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question12() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 12 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 12 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Quel est votre poids ? Afin de calculer l’indice de masse corporelle
          qui est un facteur influençant le risque de complications de
          l’infection.
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question13">
          <div className="question">
            <p className="questionsTitle">
              Quel est votre poids ? Afin de calculer l’indice de masse
              corporelle qui est un facteur influençant le risque de
              complications de l’infection.
            </p>
            <p className="questionsIndication">Remplissez le champ : </p>
            <div className="questionsOptions">
              <div className="customText">
                {" "}
                <input
                  className="input-text"
                  type="number"
                  name="Poids"
                  placeholder="Poids"
                  min="20"
                  max="250"
                  step="1"
                  autoComplete
                  autoFocus
                  required
                />
                Kg
              </div>
            </div>
          </div>
          <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={poids} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">Le poids</p>
            <p>
            Vous avez votre<b>poids</b>en vous pesant sur une balance.</p>
              <br/>
              <p> Votre poids et votre taille sont des facteurs de risque.</p>
            <p>Il faut calculer votre <b>Indice de Masse Corporelle (IMC)</b>.</p>
            <p>La quantité est plus importante.</p>
            <p>L’IMC donne votre corpulence en faisant un calcul avec votre poids et votre taille.</p>
          <p>L’IMC permet de dire

si vous être trop gros ou trop maigre,et donc plus ou moins fragile.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question13() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 13 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 13 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Avez-vous des antécédents de maladie cardiovasculaire : hypertension
          artérielle compliquée (avec complications cardiaques, rénales),
          accident vasculaire cérébral, maladie coronaire (infarctus), chirurgie
          cardiaque, insuffisance cardiaque avec essoufflement au moindre effort
          ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question14">
          <div className="question">
            <p className="questionsTitle">
              Avez-vous des antécédents de maladie cardiovasculaire :
              hypertension artérielle compliquée (avec complications cardiaques,
              rénales), accident vasculaire cérébral, maladie coronaire
              (infarctus), chirurgie cardiaque, insuffisance cardiaque avec
              essoufflement au moindre effort ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Je ne sais pas <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
   
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={hypertention} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">L'hypertension artérielle</p>
            <p>
              Une <b>hypertension artérielle</b>, mal équilibrée,</p>
              <p>c'est une augmentation trop importante de la tension artérielle.</p>
              <p>La circulation du sang est trop rapide,</p>
              <p>donc le sang exerce une trop forte pression sur les artères.</p>
          </div>
        </div><hr/>
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={cardiaque} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La maladie cardiaque ou vasculairet</p>
            <p>
            L'augmentation de la tension artérielle

peut entraîner des <b>maladies cardiaques ou vasculaires</b>,

c'est-à-dire des maladies du cœur.</p>
              <p>Ces maladies sont liées à un mauvais fonctionnement du cœur ou des vaisseaux sanguins qui alimentent le cœur.</p>
          <p>Le cœur est un muscle,

ce muscle devient faible.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question14() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 14 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 14 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Avez-vous un diabète mal équilibré ou avec des complications (yeux,
          reins) ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question15">
          <div className="question">
            <p className="questionsTitle">
              Avez-vous un diabète mal équilibré ou avec des complications
              (yeux, reins) ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={diabete} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">Le diabète</p>
            <p>
              Être <b>diabètique</b> c'est avoir trop de sucre dans le sang.</p>
              <p>Quand vous avez du diabète, c'est que votre corps</p>
            <p>ne sait plus réguler le sucre dans le sang.</p>
            <p>Il a des difficultés à utiliser le sucre consommé.</p>
            <p>Ce n'est pas parce que vous avez mangé trop de sucre.</p>
            <br/>
            <p>Le sucre est nécessaire au fonctionnement de votre corps.</p>
            <p>Si votre corps n'utilise pas bien ce sucre,

il reste dans votre sang.</p>
<br/>
<p>Le diabète abîme les autres organes

et on peut avoir des maladies.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question15() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 15 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 15 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Avez-vous un cancer évolutif sous traitement (hors hormonothérapie)
          ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question16">
          <div className="question">
            <p className="questionsTitle">
              Avez-vous un cancer évolutif sous traitement (hors
              hormonothérapie) ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={cancer} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">Le cancer</p>
            <p>
              Le <b>cancer</b> c'est une maladie

liée à une trop grande et trop rapide multiplication des cellules dans le corps.</p>
              <p>Elles sont donc trop nombreuses

et inutiles au fonctionnement du corps.</p>
            <p>Elles sont cancéreuses.</p>
            <br/>
            <p>Ces cellules cancéreuses peuvent toucher différentes parties du corps,</p>
            <p>par exemple l'estomac, les poumons, les seins, la peau, les os, ...</p>
            <br/>
            <p>Il faut répondre oui à cette question,</p>
            <p>si vous avez encore un cancer,</p>
            <p>ou vous avez eu un cancer il y a 3 ans maximum.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question16() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 16 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 16 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Avez-vous une maladie respiratoire chronique (bronchopneumopathie
          obstructive, asthme sévère, fibrose pulmonaire, syndrome d’apnées du
          sommeil, mucoviscidose) ou êtes-vous suivi par un pneumologue ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question17">
          <div className="question">
            <p className="questionsTitle">
              Avez-vous une maladie respiratoire chronique (bronchopneumopathie
              obstructive, asthme sévère, fibrose pulmonaire, syndrome d’apnées
              du sommeil, mucoviscidose) ou êtes-vous suivi par un pneumologue ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={respire} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La maladie respiratoire</p>
            <p>
              Une<b> maladie respiratoire</b>,  c'est une maladie

qui empêche de bien respirer.</p>
              <p>Cette maladie touche les organes

qui sont nécessaires pour la respiration

comme les poumons.</p>
<p>Par exemple, on est vite essouflé

quand on fait du sport et on tousse.</p>
          </div>
        </div><hr/>
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={pneumologue} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">Le pneumologue</p>
            <p>
              Un <b> pneumologue</b>,c'est le médecin des poumons,et des maladies liées aux poumons.</p>
              <p>Quand on a une maladie respiratoire,

on va voir le pneumologue.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question17() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 17 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 17 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Avez-vous une insuffisance rénale chronique avec besoin de faire de
          la dialyse ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question18">
          <div className="question">
            <p className="questionsTitle">
              Avez-vous une insuffisance rénale chronique avec besoin de faire
              de la dialyse ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={dialyse} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">L'insuffisance rénale chronique</p>
            <p>
              Une <b>insuffisance rénale chronique</b>  c'est une maladie des reins.</p>
              <p>Les reins ne fonctionnent plus correctement, ils filtrent mal le sang.</p>
            <p>Les reins n'éliminent plus les déchets qui sont dans le sang.</p>
            <p>Les déchets sont de plus en plus nombreux dans le sang,et le corps s'empoisonne.</p>
            <p>Ça nécessite un traitement par une <b>dialyse</b>.</p>
            <p>Une dialyse est une machine qui peut filtrer le sang.</p>
            <p>La dialyse filtre le sang à la place des reins de la personne.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question18() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 18 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 18 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">- Avez-vous une cirrhose ?</p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question19">
          <div className="question">
            <p className="questionsTitle">Avez-vous une cirrhose ?</p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={foie} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">La maladie chronique du foie</p>
            <p>
              La <b>maladie chronique du foie</b> c'est lorsque notre foie ou une partie de notre foie ne fonctionne plus.</p>
              <br/>
              <p>Le foie nettoie le sang et donc le corps,et fabrique ce qui est essentiel pour la digestion</p>
            <p>et pour la bonne santé des muscles, de la peau, des os.</p>
            <p>Par exemple quand on boit beaucoup d'alcool ça peut abîmer notre foie.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question19() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 19 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 19 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Êtes-vous une femme enceinte au 3ème trimestre de votre grossesse ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question20">
          <div className="question">
            <p className="questionsTitle">
              Ces derniers jours, avez-vous une toux ou votre toux habituelle
              s’est-elle modifiée ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non applicable <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={enceinte} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">Enceinte</p>
            <p>
              Une femme est <b>enceinte</b> quand elle attend un bébé.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question20() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 20 sur 22</h4>
=======
        <br />
        <Link>
          <h4>Question 20 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Avez-vous une immunodépression, par exemple : médicamenteuse
          (chimiothérapie anti cancéreuse, traitement immunosuppresseur,
          biothérapie et/ou corticothérapie à dose immunosuppressive depuis plus
          de 15 jours) ,Infection à VIH non contrôlée ou avec des CD4 200/mm3 ,
          consécutive à une greffe d’organe solide ou de cellules souches
          hématopoïétiques , liée à une hémopathie maligne en cours de
          traitement ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question21">
          <div className="question">
            <p className="questionsTitle">
              Avez-vous une immunodépression, par exemple : médicamenteuse
              (chimiothérapie anti cancéreuse, traitement immunosuppresseur,
              biothérapie et/ou corticothérapie à dose immunosuppressive depuis
              plus de 15 jours) ,Infection à VIH non contrôlée ou avec des CD4
              200/mm3 , consécutive à une greffe d’organe solide ou de cellules
              souches hématopoïétiques , liée à une hémopathie maligne en cours
              de traitement ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Je ne sais <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="banner-form">
        <div className="banner-form-row">
          <div className="banner-form-icon">
            <img src={immunite} alt="" />
          </div>
          <div className="banner-form-informations">
            <p className="banner-form-title">Les défenses immunitaires</p>
            <p>
              Les <b> défenses immunitaires</b> ce sont les défenses du corps.</p>
              <p>Le corps a un système qui le protège contre</p>
            <p>toutes les infections, des microbes : bactéries, virus, ...</p>
            <p>C'est le système immunitaire.</p>
            <br/>
            <p>Si vous avez une maladie qui diminue vos défenses immunitaires,</p>
            <p>vous avez plus de risque de tomber malade,</p>
            <p>car le corps gère déjà une autre infection,</p>
            <p>il a du mal à se protéger.</p>
          </div>
        </div>
        <div className="banner-form-logo2">
          <img src={informations} alt="" />
        </div>
      </div><br/>
    </div>
  );
}

function Question21() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 21 sur 22</h4>

=======
        <br />
        <Link>
          <h4>Question 21 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Avez-vous une drépanocytose homozygote (forme majeure) ou bénéficié
          d’une splénectomie (ablation de la rate) à cause de la drépanocytose ?
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form action="/Test1/Question22">
          <div className="question">
            <p className="questionsTitle">
              Avez-vous une drépanocytose homozygote (forme majeure) ou
              bénéficié d’une splénectomie (ablation de la rate) à cause de la
              drépanocytose ?
            </p>
            <p className="questionsIndication">Sélectionnez une option :</p>
            <div className="questionsOptions">
              <div className="flex-direction-row">
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Oui <span className="hover-border"></span>
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="radio-input" type="radio" name="radio" required />
                  <label id="label-radio">
                    Non <span className="hover-border"></span>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
       
      </div>
      
    </div>
  );
}

function Question22() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
<<<<<<< HEAD
        <h4>Question 22 sur 22</h4>

=======
        <br />
        <Link>
          <h4>Question 22 sur 22</h4><a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        </Link>
        <p className="questionsTitle">
          - Quel est le code postal de votre résidence actuelle ? Cette
          information nous permet de réaliser un suivi épidémiologique.
        </p>
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
        <form>
          <div className="question">
            <p className="questionsTitle">
              Quel est le code postal de votre résidence actuelle ? Cette
              information nous permet de réaliser un suivi épidémiologique.
            </p>
            <p className="questionsIndication">Remplissez le champ :</p>{" "}
            <div className="questionsOptions">
              <div className="customText">
                <input
                  className="input-text"
                  type="number"
                  name="Code Postal"
                  placeholder="code"
                  min="1000"
                  max="9999"
                  step="1"
                  autoComplete
                  autoFocus
                />{" "}
                votre code postal
              </div>{" "}
            </div>
            <br />
            <input
              className="check-box"
              type="checkbox"
              name="check"
              onClick={() => console.log("e.value")}
            />
            Je suis en dehors de la Tunisie ou je ne souhaite pas répondre.
          </div>
          <br />

          <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
     
    </div>
  );
}

export {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
  Question13,
  Question14,
  Question15,
  Question16,
  Question17,
  Question18,
  Question19,
  Question20,
  Question21,
  Question22,
};
export default Test1;
