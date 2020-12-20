import React, { Component } from "react";
import "../Css/surveillance.css";
import back from "../img/back.png";
const obj = {
  question: [
    " Question 1 sur 9",
    " Question 2 sur 9",
    " Question 3 sur 9",
    " Question 4 sur 9",
    " Question 5 sur 9",
    " Question 6 sur 9",
    " Question 7 sur 9",
    " Question 8 sur 9",
    " Question 9 sur 9",
  ],
  titre: [
    "Si vous (ou votre proche) ressentez un manque de souffle quand vous parlez ou faites un petit effort, comment cela a-t-il évolué depuis hier (ou depuis la dernière connexion) ?",
    "Comment vous (ou votre proche) vous sentez-vous par rapport à hier (ou depuis la dernière connexion) ?",
    "Quelle a été la température maximale des 24 dernières heures ?",
    "Ressentez-vous (ou votre proche) des maux de tête intolérables qui résistent aux médicaments anti-douleurs (dont paracétamol) depuis hier (ou depuis la dernière connexion) ?",
    "Depuis hier (ou depuis la dernière connexion), avez-vous eu (ou votre proche) de la diarrhée (3 selles molles par jour ou plus) ou des vomissements importants ?",
    "Est-ce que l’aspect des crachats lors de la toux s’est modifié (aspect coloré jaune ou orangé ou sanglant) depuis hier (ou depuis la dernière connexion) ?",
    'Êtes-vous (ou votre proche) dans l"impossibilité de vous alimenter ou de boire DEPUIS 24 HEURES OU PLUS ?',
    "Avez-vous noté l’apparition d’une forte somnolence ou d’une confusion ces dernières heures ?",
    "Comment votre moral et votre niveau d’anxiété (ou celui de votre proche) ont évolué depuis hier (ou depuis la dernière connexion) ?",
  ],
  contenu: [
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Remplissez le champ :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
    "Sélectionnez une option :",
  ],
  label: ["Mieux", "Stable", "Un peu moins bien", "Beaucoup moins bien"],
};
class Surveillance extends Component {
  state = {
    count: 0,
  };
  changequestion = (e) => {
    e.preventDefault();
    if (this.state.count < 9) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };
  comeback = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  render() {
    return (
<<<<<<< HEAD
      <div>
        {this.state.count == 9 ? (
          <div
            className="card-body cad card border-info mb-3 mb-3 container-lg"
            style={{ maxWidth: 900, marginTop: 200 }}
          >
            <p class="card-text">
              La recommandation affichée peut évoluer suivant les informations
              en provenance des autorités de santé et des chercheurs. Elle ne
              constitue pas un avis médical. En cas de doute, demandez conseil à
              votre médecin ou pharmacien.
            </p>
            <p class="card-text">
              Votre situation nécessite l'avis immédiat d'un médecin.Contactez
              immédiatement votre médecin traitant par téléphone pour lui faire
              part de votre situation et organiser un rendez-vous de
              consultation. Vous pouvez également essayer d'obtenir un
              rendez-vous de téléconsultation.Si vous n'arrivez pas à joindre un
              médecin rapidement pour lui détailler vos symptômes, appelez le
              190.
            </p>
          </div>
        ) : (
          <div className="surveille  container-lg">
            <img
              className="fleche"
              onClick={this.comeback}
              src={back}
              alt=""
            ></img>
            <h4 className="d-inline">{obj.question[this.state.count]}</h4>
            <h5>{obj.titre[this.state.count]}</h5>
            <h5>{obj.contenu[this.state.count]}</h5>
            <br />
            <form className="inp  " onSubmit={this.changequestion}>
              {this.state.count == 0 ? (
                <div>
                  <input
                    className="mr-2  "
                    type="radio"
                    name="radio"
                    required
                  />
                  <label>{obj.label[0]}</label>
                  <br />
                  <input className="mr-2 " type="radio" name="radio" required />
                  <label>{obj.label[1]}</label>
                  <br />
                  <input className="mr-2 " type="radio" name="radio" required />
                  <label>{obj.label[2]}</label>
                  <br />
                  <input className="mr-2 " type="radio" name="radio" required />
                  <label>{obj.label[3]}</label>
                  <br />
                </div>
              ) : this.state.count == 1 ? (
                <div>
                  <input
                    className="mr-2 "
                    type="radio"
                    name="radio2"
                    required
                  />
                  <label>{obj.label[0]}</label>
                  <br />
                  <input
                    className="mr-2 "
                    type="radio"
                    name="radio2"
                    required
                  />
                  <label>{obj.label[1]}</label>
                  <br />
                  <input
                    className="mr-2 "
                    type="radio"
                    name="radio2"
                    required
                  />
                  <label>{obj.label[2]}</label>
                  <br />
                  <input
                    className="mr-2 "
                    type="radio"
                    name="radio2"
                    required
                  />
                  <label>{obj.label[3]}</label>
                  <br />
                </div>
              ) : this.state.count == 2 ? (
                <div>
                  <input
                    type="number"
                    name="Temperature"
                    placeholder="37.0"
                    min="34"
                    max="42"
                    step="0.1"
                    autoComplete
                    autoFocus
                    required
                  />{" "}
                  :Degrés <br />
                </div>
              ) : this.state.count == 3 ? (
                <div>
                  OUI : <input type="radio" name="radio" required />
                  NON : <input type="radio" name="radio" required />
                </div>
              ) : this.state.count == 4 ? (
                <div>
                  {" "}
                  OUI : <input type="radio" name="radio" required />
                  NON : <input type="radio" name="radio" required />
                </div>
              ) : this.state.count == 5 ? (
                <div>
                  {" "}
                  OUI : <input type="radio" name="radio" required />
                  NON : <input type="radio" name="radio" required />
                </div>
              ) : this.state.count == 6 ? (
                <div>
                  {" "}
                  OUI : <input type="radio" name="radio" required />
                  NON : <input type="radio" name="radio" required />
                </div>
              ) : this.state.count == 7 ? (
                <div>
                  OUI : <input type="radio" name="radio" required />
                  NON : <input type="radio" name="radio" required />
                </div>
              ) : this.state.count == 8 ? (
                <div>
                  <input className="mr-2 " type="radio" name="radio" required />
                  <label>{obj.label[0]}</label>
                  <br />
                  <input className="mr-2 " type="radio" name="radio" required />
                  <label>{obj.label[1]}</label>
                  <br />
                  <input className="mr-2 " type="radio" name="radio" required />
                  <label>{obj.label[2]}</label>
                  <br />
                  <input className="mr-2 " type="radio" name="radio" required />
                  <label>{obj.label[3]}</label>
                  <br />
                </div>
              ) : (
                <></>
              )}
              {this.state.count == 9 ? (
                <></>
              ) : (
                <input
                  className="bt  btn btn-primary"
                  type="submit"
                  name="submit"
                  value="Continuer"
                />
              )}
            </form>
          </div>
        )}
      </div>
    );
  }
=======
     <div>
        {(this.state.count ===9)?(<div className="card-body cad card border-info mb-3 mb-3 container-lg"
style={{ maxWidth: 900 ,marginTop:200}}>
  <p className="card-text">
  La recommandation affichée peut évoluer suivant les informations en provenance des autorités de santé et des chercheurs. Elle ne constitue pas un avis médical. En cas de doute, demandez conseil à votre médecin ou pharmacien.
  </p>
  <p className="card-text">
  Votre situation nécessite l'avis immédiat d'un médecin.Contactez immédiatement votre médecin traitant par téléphone pour lui faire part de votre situation et organiser un rendez-vous de consultation. Vous pouvez également essayer d'obtenir un rendez-vous de téléconsultation.Si vous n'arrivez pas à joindre un médecin rapidement pour lui détailler vos symptômes, appelez le 190.</p>
</div>):(
 <div className="surveille  container-lg">
    <img className="fleche" onClick={this.comeback} src={back} alt=""></img>
    <h4 className="d-inline">{obj.question[this.state.count]}</h4>
   <h5>{obj.titre[this.state.count]}</h5>
   <h5>{obj.contenu[this.state.count]}</h5><br/>
<form className="inp  " onSubmit={this.changequestion}>

   {(this.state.count ===0)?( <div >
<input className="mr-2  " type="radio" name="radio" required /><label>{obj.label[0]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[1]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[2]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[3]}</label><br/>
</div> ):((this.state.count ===1) ? (
          <div>
          <input className="mr-2 " type="radio" name="radio2" required /><label>{obj.label[0]}</label><br/>
          <input className="mr-2 " type="radio" name="radio2" required /><label>{obj.label[1]}</label><br/>
          <input className="mr-2 " type="radio" name="radio2" required /><label>{obj.label[2]}</label><br/>
          <input className="mr-2 " type="radio" name="radio2" required /><label>{obj.label[3]}</label><br/>
          </div>):(  (this.state.count ===2) ? 
           (<div>
                <input type="number" name="Temperature" placeholder="37.0" min="34" max="42" step="0.1" autoComplete autoFocus required /> :Degrés <br />             
           </div> )
           :(   (this.state.count ===3) ?
                (<div> 
                 OUI : <input type="radio" name="radio" required />
                   NON : <input type="radio" name="radio" required />
                 </div>)
            :((this.state.count ===4) ?
            (<div> OUI : <input type="radio" name="radio" required />
            NON : <input type="radio" name="radio" required />
            </div>)
            :((this.state.count ===5) ?(<div> OUI : <input type="radio" name="radio" required />
            NON : <input type="radio" name="radio" required />
            </div>):((this.state.count ===6)?(<div> OUI : <input type="radio" name="radio" required />
            NON : <input type="radio" name="radio" required />
            </div>):((this.state.count ===7) ?(<div>OUI : <input type="radio" name="radio" required />
            NON : <input type="radio" name="radio" required /></div>) :( 
(this.state.count ===8) ? (<div><input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[0]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[1]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[2]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[3]}</label><br/></div>):(
   <></>
)))))))))}
  {(this.state.count ===9)?(<></>):
(<input  className="bt  btn btn-primary" type="submit" name="submit" value="Continuer" /> )}
           
</form>

   
</div>)}
 </div>   
    )
   }
>>>>>>> 4d070095faf0b582bf0aa55695bfe16dbc189d0a
}
export default Surveillance;
