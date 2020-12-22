import React, { Component } from "react";
import "../Css/connexion.css";

class Connexion extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
  };


  render(){
    const { errors } = this.state;

  return (
    <div className="login-card">
      <div className="login-content">
      <h1>Connectez-vous</h1>
      <form noValidate onSubmit={this.onSubmit}>
      <hr/>
      <div className="form-group ">
        <div className="row">
          <div className="col">
          <input 
          type="radio" 
          value="None" 
          id="radioOne" 
          name="account"  />
          <label htmlFor="radioOne" className="radio1" >Patient</label> </div>
          <div className="col">
          <input 
          type="radio" 
          value="None" 
          id="radioTwo" 
          name="account" />
          <label htmlFor="radioTwo" className="radio1">Laboratoire</label></div>
        </div>
      </div>
        <div className="form-group margin-input">
        <label htmlFor="InputEmail1">Adresse Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Entrer email"
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
          />
        </div>
        <div className="form-group margin-input">
          <label htmlFor="exampleInputPassword1">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Mot de passe"
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}

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
}
export default Connexion;
