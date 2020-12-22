
import React, { Component } from "react"

class Inscription extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      lastname:this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
  };



  render(){
    const { errors } = this.state;


    return(
        <div className="sign-in-card">
           <form className="needs-validation login-content" noValidate onSubmit={this.onSubmit} >
           <h1>Inscrivez-vous</h1>
           <hr/>
  <div className="form-row">
    <div className="col-md mb-3">
      <label htmlFor="validationCustom01">Nom</label>
      <input 
      type="text" 
      className="form-control" 
      id="name" 
      placeholder="Nom" 
      error={errors.name} 
      value={this.state.name} 
      onChange={this.onChange} 
      required/>
      
    </div>
    <div className="col-md mb-3">
      <label htmlFor="validationCustom02">Prénom</label>
      <input 
      type="text" 
      className="form-control" 
      id="lastname" 
      placeholder="Prénom"
      error={errors.lastname} 
      value={this.state.lastname} 
      onChange={this.onChange}  
      required/>
      
    </div>
 
  </div>
  <div className="form-row">
    <div className="col-md mb-3">
      <label htmlFor="validationCustom03">Email</label>
      <input 
      type="email" 
      className="form-control" 
      id="email" 
      error={errors.email} 
      value={this.state.email} 
      onChange={this.onChange}  
      placeholder="Email" 
      required/>
      
    </div>
    <div className="col-md mb-3">
      <label htmlFor="validationCustom04">Mot de passe</label>
      <input 
      type="password" 
      className="form-control" 
      id="password" 
      placeholder="mot de passe" 
      error={errors.password} 
      value={this.state.password} 
      onChange={this.onChange}
      required/>
      
    </div>
    <div className="col-md mb-3">
      <label htmlFor="validationCustom04">Confirmer votre mot de passe</label>
      <input 
      type="password" 
      className="form-control" 
      id="password2" 
      placeholder="mot de passe" 
      error={errors.password2} 
      value={this.state.password2} 
      onChange={this.onChange}
      required/>
      
    </div>
    
  </div>
  <button type="submit" className="inscription">
          Valider
        </button>
</form>



        </div>
    )
}}
export default Inscription;