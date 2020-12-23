import React, { Component } from "react";
import "../Css/connexion.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

class Connexion extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); 
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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
    this.props.loginUser(userData);
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
            className={classnames("form-control", {
        "is-invalid": errors.email
      })} 
            id="email"
            aria-describedby="emailHelp"
            placeholder="Entrer email"
            onChange={this.onChange}
            value={this.state.email}
          />
                      <p className="text-danger">{errors.email} </p>
                      <p className="text-danger">{} </p>

        </div>
        <div className="form-group margin-input">
          <label htmlFor="exampleInputPassword1">Mot de passe</label>
          <input
            type="password"
            className={classnames("form-control", {
        "is-invalid": errors.password
      })} 
            id="password"
            placeholder="Mot de passe"
            onChange={this.onChange}
            value={this.state.password}

          />
                      <p className="text-danger">{errors.password} </p>

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
Connexion.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Connexion);
