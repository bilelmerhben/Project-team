import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../Css/Test1.css";
import temperature from "../img/temperature.png";
import toux from "../img/toux.png";

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
        <a href="javascript:history.back()">
        Retour
        
        &nbsp;
        
      </a>
        <p className="questionsTitle">
          Ces dernières 48 heures, quelle a été votre température la plus élevée
          ?
        </p>
        <form action="/Test1/Question2">
          <p className="questionsIndication">Remplissez le champ : </p>
          <div className="questionsOptions">
            <p className="customText">
              <input
                class="input-text"
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
            </p>
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
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">La température</div>
        <div class="card-body ">
          <img src={temperature} class="im" alt="temp" />
          <p class="card-text">
            -La température se mesure avec un thermomètre.Le thermomètre indique
            un nombre,c'est la température de votre corps.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question2() {
  return (
    <div className="test1">
      <div className="div1 container-lg">
        <h4>Question 2 sur 22</h4>
        <p className="questionsTitle">
          Ces derniers jours, avez-vous une toux ou votre toux habituelle
          s’est-elle modifiée ?
        </p>
        <form action="/Test1/Question3">
          <p className="questionsIndication">Sélectionnez une option :</p>
          <div className="questionsOptions">
            <p>
              OUI :<input type="radio" name="radio" required />
            </p>
            <p>
              NON :<input type="radio" name="radio" required />{" "}
            </p>
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">La toux</div>
        <div class="card-body ">
          <img src={toux} class="im" alt="toux" />
          <p class="card-text">
            - Une augmentation de votre toux veut dire que vous toussez plus que
            d'habitude.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question3() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />

        <h4>Question 3 sur 22</h4>

        <p className="questionsTitle">
          Ces derniers jours, avez-vous noté une perte ou une forte diminution
          de votre goût ou de votre odorat ?
        </p>
        <form action="/Test1/Question4">
          <p className="questionsIndication">Sélectionnez une option :</p>
          <div className="questionsOptions">
            <p>
              OUI :<input type="radio" name="radio" required />
            </p>
            <p>
              NON :<input type="radio" name="radio" required />{" "}
            </p>
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div
          class="card border-info mb-3 mb-3 container-lg"
          style={{ maxWidth: 500 }}
        >
          <div class="card-header">La perte du goût</div>
          <div class="card-body ">
            <img src="" class="im" alt="" />
            <p class="card-text">
              - La perte du goût, c'est quand vous ne pouvez plus reconnaître le
              goût d'un aliment.Par exemple, le poulet a le même goût que le
              poisson.
            </p>
          </div>
        </div>
        <div
          class="card border-info mb-3 mb-3 container-lg"
          style={{ maxWidth: 500 }}
        >
          <div class="card-header">La perte de l'odorat</div>
          <div class="card-body ">
            <img src="" class="im" alt="" />
            <p class="card-text">
              - La perte de l'odorat, c'est quand vous ne sentez plus les
              odeurs.Par exemple, vous ne pouvez plus sentir l'odeur du poulet
              qui sort du four.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Question4() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />

        <h4>Question 4 sur 22</h4>

        <p className="questionsTitle">
          Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs
          musculaires et/ou des courbatures inhabituelles et/ou des maux de tête
          inhabituels ?
        </p>
        <form action="/Test1/Question5">
          <p className="questionsIndication">Sélectionnez une option :</p>
          <div className="questionsOptions">
            OUI :
            <input type="radio" name="radio" required />
            NON :<input type="radio" name="radio" required /> <br />
            <input
              class="btn btn-primary bt1"
              type="submit"
              name="submit"
              value=" Enregistrer et Continuer"
            />
          </div>
        </form>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div
          class="card border-info mb-3 mb-3 container-lg"
          style={{ maxWidth: 500 }}
        >
          <div class="card-header">Le mal de gorge</div>
          <div class="card-body ">
            <img src="" class="im" alt="" />
            <p class="card-text">
              - Un mal de gorge,c’est quand vous ressentez un irritation ou une
              gêne au niveau de votre gorge.
            </p>
          </div>
        </div>
        <div
          class="card border-info mb-3 mb-3 container-lg"
          style={{ maxWidth: 500 }}
        >
          <div class="card-header">La courbaturet</div>
          <div class="card-body ">
            <img src="" class="im" alt="" />
            <p class="card-text">
              -La courbature, c'est une douleur musculaire.On peut ressentir des
              courbatures quand on a fait trop de sport ou quand on est
              malade.Les muscles du corps sont fatigués,donc ils font mal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Question5() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <h4>Question 5 sur 22</h4>
        <p className="questionsTitle">
          - Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3
          selles molles.
        </p>
        <form action="/Test1/Question6">
          Sélectionnez une option : OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">La diarrhée</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            - La diarrhée, c'est aller aux toilettes plus souvent que
            d'habitude.Il faut être allé aux toilettes au moins 3 fois dans la
            journée.La consistance de votre caca est molle ou liquide.La
            quantité est plus importante.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question6() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 6 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Ces derniers jours, avez-vous une fatigue inhabituelle ?
        </p>
        <form action="/Test1/Question7">
          <p className="questionsIndication">Sélectionnez une option :</p> OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">La fatigue inhabituelle</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -La fatigue inhabituelle, c'est une forme de fatigue que vous n'avez
            pas l'habitude de ressentir.Votre corps est plus faible.Les douleurs
            liées à cette fatigue sont plus importantes.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question7() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 7 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de
          la journée ?
        </p>
        <form action="/Test1/Question8">
          <p className="questionsIndication">Sélectionnez une option :</p> OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">Le repos</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -La fatigue que vous ressentez est tellement importante que vous
            avez besoin de vous reposer souvent.Vous vous reposez la moitié de
            la journée.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question8() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 8 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous
          alimenter ou de boire ?
        </p>
        <form action="/Test1/Question9">
          <p className="questionsIndication">Sélectionnez une option :</p> OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">L'impossibilité de manger ou de boire</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Être dans l'impossibilité de manger ou de boire,c'est que vous
            n'arrivez plus à avaler ni nourriture ni boisson.Vous ressentez du
            dégoût quand vous voyez de la nourriture.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question9() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 9 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Ces dernières 24 heures, avez-vous noté un manque de souffle
          inhabituel lorsque vous parlez ou faites un petit effort ?
        </p>
        <form action="/Test1/Question10">
          <p className="questionsIndication">Sélectionnez une option :</p> OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">Le manque de souffle</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Un manque de souffle est inhabituel,quand vous avez plus de mal à
            respirer que les autres jours.Par exemple vous êtes plus essouflé
            quand vous parlez ou quand vous montez l'escalier.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question10() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 10 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Quel est votre âge ? Ceci, afin de calculer un facteur de risque
          spécifique.
        </p>
        <form action="/Test1/Question11">
          <p className="questionsIndication">Remplissez le champ :</p>{" "}
          <input
            class="input"
            type="number"
            name="Age"
            placeholder=" Age"
            min="1"
            max="110"
            step="1"
            autoComplete
            autoFocus
            required
          />{" "}
          :Ans <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">L'âge</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Votre âge peut être un facteur de risque.Un facteur de risque est
            quelque chose qui augmente la possibilité d’avoir une maladie.Plus
            votre âge est élevé et plus vous êtes fragile.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question11() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 11 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Quel est votre taille ? Afin de calculer l’indice de masse
          corporelle qui est un facteur influençant le risque de complications
          de l’infection.
        </p>
        <form action="/Test1/Question12">
          <p className="questionsIndication">Remplissez le champ :</p>{" "}
          <input
            class="input"
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
          Cm <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 700 }}
      >
        <div class="card-header">La taille</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Vous avez votre taille en vous mesurant des pieds à la tête.Votre
            poids et votre taille sont des facteurs de risque.Il faut calculer
            votre Indice de Masse Corporelle (IMC).L’IMC donne votre corpulence
            en faisant un calcul avec votre poids et votre taille.L’IMC permet
            de dire si vous être trop gros ou trop maigre,et donc plus ou moins
            fragile.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question12() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 12 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Quel est votre poids ? Afin de calculer l’indice de masse corporelle
          qui est un facteur influençant le risque de complications de
          l’infection.
        </p>
        <form action="/Test1/Question13">
          <p className="questionsIndication">Remplissez le champ :</p>{" "}
          <input
            class="input"
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
          <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 700 }}
      >
        <div class="card-header">Le poids</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Vous avez votre poids en vous pesant sur une balance.Votre poids et
            votre taille sont des facteurs de risque.Il faut calculer votre
            Indice de Masse Corporelle (IMC).L’IMC donne votre corpulence en
            faisant un calcul avec votre poids et votre taille.L’IMC permet de
            dire si vous être trop gros ou trop maigre,et donc plus ou moins
            fragile.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question13() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 13 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Avez-vous des antécédents de maladie cardiovasculaire : hypertension
          artérielle compliquée (avec complications cardiaques, rénales),
          accident vasculaire cérébral, maladie coronaire (infarctus), chirurgie
          cardiaque, insuffisance cardiaque avec essoufflement au moindre effort
          ?
        </p>
        <form action="/Test1/Question14">
          OUI :<input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required />
          Je sais pas :<input type="radio" name="radio" required />
          <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div
          class="card border-info mb-3 mb-3 container-lg"
          style={{ maxWidth: 500 }}
        >
          <div class="card-header">L'hypertension artérielle</div>
          <div class="card-body ">
            <img src="" class="im" alt="" />
            <p class="card-text">
              -Une hypertension artérielle mal équilibrée,c'est une augmentation
              trop importante de la tension artérielle.La circulation du sang
              est trop rapide,donc le sang exerce une trop forte pression sur
              les artères.
            </p>
          </div>
        </div>
        <div
          class="card border-info mb-3 mb-3 container-lg"
          style={{ maxWidth: 500 }}
        >
          <div class="card-header">La maladie cardiaque ou vasculaire</div>
          <div class="card-body ">
            <img src="" class="im" alt="" />
            <p class="card-text">
              -L'augmentation de la tension artérielle peut entraîner des
              maladies cardiaques ou vasculaires,c'est-à-dire des maladies du
              cœur.Ces maladies sont liées à un mauvais fonctionnement du cœur
              ou des vaisseaux sanguins qui alimentent le cœur.Le cœur est un
              muscle,ce muscle devient faible.Cette maladie nécessite un
              traitement qu'on appelle traitement cardiologique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Question14() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 14 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Avez-vous un diabète mal équilibré ou avec des complications (yeux,
          reins) ?
        </p>
        <form action="/Test1/Question15">
          OUI :<input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 700 }}
      >
        <div class="card-header">Le diabète</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Être diabétique c'est avoir trop de sucre dans le sang.Quand vous
            avez du diabète, c'est que votre corps ne sait plus réguler le sucre
            dans le sang.Il a des difficultés à utiliser le sucre consommé.Ce
            n'est pas parce que vous avez mangé trop de sucre.
            <br />
            Le sucre est nécessaire au fonctionnement de votre corps.Si votre
            corps n'utilise pas bien ce sucre,il reste dans votre sang.Le
            diabète abîme les autres organes et on peut avoir des maladies.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question15() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 15 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Avez-vous un cancer évolutif sous traitement (hors hormonothérapie)
          ?
        </p>
        <form action="/Test1/Question16">
          OUI :<input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 750 }}
      >
        <div class="card-header">Le cancer</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Le cancer, c'est une maladie liée à une trop grande et trop rapide
            multiplication des cellules dans le corps.Elles sont donc trop
            nombreuses et inutiles au fonctionnement du corps.Elles sont
            cancéreuses.Ces cellules cancéreuses peuvent toucher différentes
            parties du corps,par exemple l'estomac, les poumons, les seins, la
            peau, les os,ect... Il faut répondre oui à cette question,si vous
            avez encore un cancer,ou vous avez eu un cancer il y a 3 ans
            maximum.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question16() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 16 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Avez-vous une maladie respiratoire chronique (bronchopneumopathie
          obstructive, asthme sévère, fibrose pulmonaire, syndrome d’apnées du
          sommeil, mucoviscidose) ou êtes-vous suivi par un pneumologue ?
        </p>
        <form action="/Test1/Question17">
          OUI :<input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required />
          <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div
          class="card border-info mb-3 mb-3 container-lg"
          style={{ maxWidth: 500 }}
        >
          <div class="card-header">La maladie respiratoire</div>
          <div class="card-body ">
            <img src="" class="im" alt="" />
            <p class="card-text">
              -Une maladie respiratoire, c'est une maladie qui empêche de bien
              respirer.Cette maladie touche les organes qui sont nécessaires
              pour la respiration comme les poumons.Par exemple, on est vite
              essouflé quand on fait du sport et on tousse.
            </p>
          </div>
        </div>
        <div
          class="card border-info mb-3 mb-3 container-lg"
          style={{ maxWidth: 500 }}
        >
          <div class="card-header">Le pneumologue</div>
          <div class="card-body ">
            <img src="" class="im" alt="" />
            <p class="card-text">
              -Un pneumologue, c'est le médecin des poumons,et des maladies
              liées aux poumons.Quand on a une maladie respiratoire,on va voir
              le pneumologue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Question17() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 17 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Avez-vous une insuffisance rénale chronique avec besoin de faire de
          la dialyse ?
        </p>
        <form action="/Test1/Question18">
          <p className="questionsIndication">Sélectionnez une option :</p> OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 750 }}
      >
        <div class="card-header">L'insuffisance rénale chronique</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Une insuffisance rénale chronique, c'est une maladie des reins.Les
            reins ne fonctionnent plus correctement,ils filtrent mal le sang.Les
            reins n'éliminent plus les déchets qui sont dans le sang.Les déchets
            sont de plus en plus nombreux dans le sang,et le corps
            s'empoisonne.Ça nécessite un traitement par une dialyse.Une dialyse
            est une machine qui peut filtrer le sang.La dialyse filtre le sang à
            la place des reins de la personne.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question18() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 18 sur 22</h4>
        </Link>
        <p className="questionsTitle">- Avez-vous une cirrhose ?</p>
        <form action="/Test1/Question19">
          <p className="questionsIndication">Sélectionnez une option :</p> OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 750 }}
      >
        <div class="card-header">La maladie chronique du foie</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -La maladie chronique du foie,c'est lorsque notre foie ou une partie
            de notre foie ne fonctionne plus.Le foie nettoie le sang et donc le
            corps,et fabrique ce qui est essentiel pour la digestion et pour la
            bonne santé des muscles, de la peau, des os.Par exemple quand on
            boit beaucoup d'alcool ça peut abîmer notre foie.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question19() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 19 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Êtes-vous une femme enceinte au 3ème trimestre de votre grossesse ?
        </p>
        <form action="/Test1/Question20">
          <p className="questionsIndication">Sélectionnez une option : </p>OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required />
          Non applicable :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header">Enceinte</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Une femme est enceinte quand elle attend un bébé.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question20() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 20 sur 22</h4>
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
        <form action="/Test1/Question21">
          <p className="questionsIndication">Sélectionnez une option : </p>OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required />
          Je sais pas :<input type="radio" name="radio" required /> <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 800 }}
      >
        <div class="card-header">Les défenses immunitaires</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Les défenses immunitaires, ce sont les défenses du corps.Le corps a
            un système qui le protège contre toutes les infections, des microbes
            : bactéries, virus, etc... C'est le système immunitaire.Si vous avez
            une maladie qui diminue vos défenses immunitaires,vous avez plus de
            risque de tomber malade,car le corps gère déjà une autre
            infection,il a du mal à se protéger.
          </p>
        </div>
      </div>
    </div>
  );
}

function Question21() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 21 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Avez-vous une drépanocytose homozygote (forme majeure) ou bénéficié
          d’une splénectomie (ablation de la rate) à cause de la drépanocytose ?
        </p>
        <form action="/Test1/Question22">
          <p className="questionsIndication">Sélectionnez une option :</p>OUI :
          <input type="radio" name="radio" required />
          NON :<input type="radio" name="radio" required /> <br />
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

function Question22() {
  return (
    <div className="test1">
      <div className="div1 container-lg ">
        <br />
        <Link>
          <h4>Question 22 sur 22</h4>
        </Link>
        <p className="questionsTitle">
          - Quel est le code postal de votre résidence actuelle ? Cette
          information nous permet de réaliser un suivi épidémiologique.
        </p>
        <form>
          <p className="questionsIndication">Remplissez le champ :</p>{" "}
          <input
            class="input"
            type="number"
            name="Code Postal"
            placeholder="code"
            min="1000"
            max="9999"
            step="1"
            autoComplete
            autoFocus
            required
          />{" "}
          :Votre code postal <br />
          <input
            type="checkbox"
            name="check"
            onClick={() => console.log("e.value")}
          />{" "}
          : Je suis en dehors de la Tunisie ou je ne souhaite pas répondre.
          <br />
          <input
            class="btn btn-primary bt1"
            type="submit"
            name="submit"
            value=" Enregistrer et Continuer"
          />
        </form>
      </div>
      <div
        class="card border-info mb-3 mb-3 container-lg"
        style={{ maxWidth: 700 }}
      >
        <div class="card-header">Le code postal</div>
        <div class="card-body ">
          <img src="" class="im" alt="" />
          <p class="card-text">
            -Votre code postal est sur votre adresse.Il permet d'identifier le
            département et la ville où vous habitez.Le code postal est composé
            de 4 chiffres.Par exemple pour Tunis c'est le 1002 , pour Ariana
            c'est le 2080.
          </p>
        </div>
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
