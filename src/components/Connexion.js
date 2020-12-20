import React from "react";
import "../Css/connexion.css";

function Connexion() {
  return (
    <div className="login-card">
      <div className="login-content">
      <h1>Connectez-vous</h1>
      <form>
      <hr/>
      <div className="form-group ">
        <div>
          <input type="radio" value="None" id="radioOne" name="account" checked />
          <label for="radioOne" className="radio1" >Personnel</label>
          <input type="radio" value="None" id="radioTwo" name="account" />
          <label for="radioTwo" className="radio1">Professionnel</label>
        </div>
      </div>
        <div className="form-group margin-input">
        <label for="InputEmail1">Adresse Email</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
            placeholder="Entrer email"
          />
        </div>
        <div class="form-group margin-input">
          <label for="exampleInputPassword1">Mot de passe</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Mot de passe"
          />
        </div>
        
        <button type="submit" className="connecter">
          Valider
        </button>
        <div className="form-group pt-2">
          <a type="button" className="inscription" href="/Inscription">
            S'inscrire
          </a>
        </div>
      </form>
      </div>
    </div>
  );
}
export default Connexion;
