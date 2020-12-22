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
    "Si vous(ou votre proche) ressentez un manque de souffle quand vous parlez ou faites un petit effort, comment cela a-t-il évolué depuis hier (ou depuis la dernière connexion) ?",
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
      <div className="test1">
        {this.state.count === 9 ? (
          <div
            className="card-body cad card border-info mb-3 mb-3 container-lg"
            style={{ maxWidth: 900, marginTop: 200 }}
          >
            <p className="card-text">
              La recommandation affichée peut évoluer suivant les informations
              en provenance des autorités de santé et des chercheurs. Elle ne
              constitue pas un avis médical. En cas de doute, demandez conseil à
              votre médecin ou pharmacien.
            </p>
            <p className="card-text">
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
          <div className="div1 container-lg">
            <div className="question">          
              <h4>
                <img
                className="fleche"
                onClick={this.comeback}
                src={back}
                alt=""
              ></img>
              {obj.question[this.state.count]}
              </h4><br/>
              
              <p className="questionsTitle">{obj.titre[this.state.count]}</p>
              <p className="questionsIndication">
                {obj.contenu[this.state.count]}{" "}
              </p>

              <form className=" " onSubmit={this.changequestion}>
                {this.state.count === 0 ? (
                  <div className="questionsOptions2">
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[0]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[1]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[2]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[3]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 2 ***********************************************************/
                this.state.count === 1 ? (
                  <div className="questionsOptions2">
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[0]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[1]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[2]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[3]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 3 ***********************************************************/
                this.state.count === 2 ? (
                  <div className="questionsOptions">
                    <div className="customText">
                      <input
                        className="input-text"
                        type="number"
                        name="Temperature"
                        placeholder="37.0"
                        min="36"
                        max="42"
                        step="0.1"
                        autoFocus
                        required
                      />
                      degrés
                    </div>
                  </div>
                ) : 
/***************************************************** Question 4 ***********************************************************/
                this.state.count === 3 ? (
                  <div className="questionsOptions">
                    <div className="flex-direction-row">
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Oui <span className="hover-border"></span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 5 ***********************************************************/
                this.state.count === 4 ? (
                  <div className="questionsOptions">
                    <div className="flex-direction-row">
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Oui <span className="hover-border"></span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 6 ***********************************************************/
                this.state.count === 5 ? (
                  <div className="questionsOptions">
                    <div className="flex-direction-row">
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Oui <span className="hover-border"></span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 7 ***********************************************************/
                this.state.count === 6 ? (
                  <div className="questionsOptions">
                    <div className="flex-direction-row">
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Oui <span className="hover-border"></span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                ) : 
/***************************************************** Question 8 ***********************************************************/
                this.state.count === 7 ? (
                  <div className="questionsOptions">
                    <div className="flex-direction-row">
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Oui <span className="hover-border"></span>
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          id="radio-input"
                          type="radio"
                          name="radio"
                          required
                        />
                        <label id="label-radio">
                          Non <span className="hover-border"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                ) :
/***************************************************** Question 9 ***********************************************************/
                this.state.count === 8 ? (
                  <div className="questionsOptions2">
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[0]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[1]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[2]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        className="m-2"
                        type="radio"
                        name="radio"
                        id="radio-input"
                        required
                      />
                      <label id="label-radio">
                        {obj.label[3]}
                        <span className="hover-border"></span>
                      </label>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.count === 9 ? (
                  <></>
                ) : (
                  <div>
                    <br />
                    <input
                      className="btn btn-primary bt1"
                      type="submit"
                      name="submit"
                      value="Continuer"
                    />
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Surveillance;
