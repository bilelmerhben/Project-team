import React, { Component } from "react";
import {  withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser, registerLabo } from "../actions/authActions";
import classnames from "classnames";
import "../Css/connexion.css";
class Inscription extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      description: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      appointments:[{User:{name:"",lastname:"",email:""},time:null}],
      visiblePatient: true,
      tel : "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      tel :this.state.tel,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  onSubmitLabo = e => {
    e.preventDefault();
    const newLabo = {
      name: this.state.name,
      description: this.state.description,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      appointments:this.state.appointments,
      tel :this.state.tel,
    };
    this.props.registerLabo(newLabo, this.props.history);

  };

  render() {
    const { errors } = this.state;
    var visiblePatient = this.state.visiblePatient;
    return (
      
      <div className="container-fluid mt-5">
       
        <br />
        <br />
        <br />
        
        
        <div className="sign-in-card">
            <div className="row text-center">
              <div className="inscri col "><button className="btn-inscri"
          onClick={() => this.setState({visiblePatient:true,errors:{}})}>
          Patient
        </button></div>
             
              <div className="inscri-1 col "><button className="btn-inscri-1" onClick={() =>this.setState({visiblePatient:false,errors:{}})}>
          Laboratoire
        </button></div>
            </div>
        <div
          className={classnames("sign-in-card ", {
            invisible: visiblePatient !== true,
          })}
        >
          
          </div>
          <form
            className="needs-validation login-content"
            noValidate
            onSubmit={this.onSubmit}
          >
            <h1>Inscrivez-vous en tant que patient</h1>
            <hr />
            <div className="form-row">
              <div className="col-md mb-3">
                <label htmlFor="validationCustom01">Nom</label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.lastname,
                  })}
                  id="name"
                  placeholder="Nom"
                  value={this.state.name}
                  onChange={this.onChange}
                  required
                />
                <p className="text-danger">{errors.lastname} </p>
              </div>
              <div className="col-md mb-3">
                <label htmlFor="validationCustom02">Prénom</label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.name,
                  })}
                  id="lastname"
                  placeholder="Prénom"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  required
                />
                <p className="text-danger">{errors.name} </p>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md mb-3">
                <label htmlFor="validationCustom03">Email</label>
                <input
                  type="email"
                  className={classnames("form-control", {
                    "is-invalid": errors.email,
                  })}
                  id="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Email"
                  required
                />
                <p className="text-danger">{errors.email} </p>
              </div>
              <div className="col-md mb-3">
                <label htmlFor="validationCustom03">Numéro de téléphone</label>
                <input
                  type="number"
                  className={classnames("form-control", {
                    "is-invalid": errors.tel,
                  })}
                  id="tel"
                  value={this.state.tel}
                  onChange={this.onChange}
                  placeholder="Numéro de téléphone"
                  required
                />
                <p className="text-danger">{errors.tel} </p>
              </div></div>
              <div className="form-row">
              <div className="col-md mb-3">
                <label htmlFor="validationCustom04">Mot de passe</label>
                <input
                  type="password"
                  className={classnames("form-control", {
                    "is-invalid": errors.password,
                  })}
                  id="password"
                  placeholder="mot de passe"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
                <p className="text-danger">{errors.password} </p>
              </div>
             
              <div className="col-md mb-3">
                <label htmlFor="validationCustom04">
                  Confirmer votre mot de passe
                </label>
                <input
                  type="password"
                  className={classnames("form-control", {
                    "is-invalid": errors.password2,
                  })}
                  id="password2"
                  placeholder="mot de passe"
                  value={this.state.password2}
                  onChange={this.onChange}
                  required
                />
                <p className="text-danger">{errors.password2} </p>
              </div>
            </div>
            <button type="submit" className="inscription-1">
              Valider
            </button>
          </form>
        </div>
                    
        <div
          className={classnames("sign-in-card ", {
            invisible: visiblePatient === true,
          })}
        > 
        <div className="row text-center">
      
              <div className="inscri-1 col "><button className="btn-inscri-1"
          onClick={() => this.setState({visiblePatient:true,errors:{}})}>
          Patient
        </button></div>
              
              <div className="inscri col"><button className="btn-inscri" onClick={() =>this.setState({visiblePatient:false,errors:{}})}>
          Laboratoire
        </button></div>
            </div>
          <form
            className="needs-validation login-content"
            noValidate
            onSubmit={this.onSubmitLabo}
          >
            <h1>Inscrivez-vous en tant que laboratoire</h1>
            <hr />

            <div className="form-row">
              <div className="col-md mb-3">
                <label htmlFor="validationCustom01">Nom du laboratoire</label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.name,
                  })}
                  id="name"
                  placeholder="Nom du laboratoire"
                  value={this.state.name}
                  onChange={this.onChange}
                  required
                />
                <p className="text-danger">{errors.name} </p>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md mb-3">
                <label htmlFor="validationCustom03">Email</label>
                <input
                  type="email"
                  className={classnames("form-control", {
                    "is-invalid": errors.email, 
                  })}
                  id="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Email"
                  required
                />
                <p className="text-danger">{errors.email} </p>
              </div>
              <div className="col-md mb-3">
                <label htmlFor="validationCustom03">Numéro de téléphone</label>
              
                <input
                  type="number"
                  className={classnames("form-control", {
                    "is-invalid": errors.tel,
                  })}
                  id="tel"
                  value={this.state.tel}
                  onChange={this.onChange}
                  placeholder="Numéro de téléphone"
                  required
                />
                <p className="text-danger">{errors.tel} </p>
              </div></div>
              <div className="form-row">
              <div className="col-md mb-3">
                <label htmlFor="validationCustom04">Mot de passe</label>
                <input
                  type="password"
                  className={classnames("form-control", {
                    "is-invalid": errors.password,
                  })}
                  id="password"
                  placeholder="mot de passe"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
                <p className="text-danger">{errors.password} </p>
              </div>
              <div className="col-md mb-3">
                <label htmlFor="validationCustom04">
                  Confirmer votre mot de passe
                </label>
                <input
                  type="password"
                  className={classnames("form-control", {
                    "is-invalid": errors.password2,
                  })}
                  id="password2"
                  placeholder="mot de passe"
                  value={this.state.password2}
                  onChange={this.onChange}
                  required
                />
                <p className="text-danger">{errors.password2} </p>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md mb-3">
                <label htmlFor="validationCustom04">Description</label>
                <textarea
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.description,
                  })}
                  id="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChange}
                  required
                  rows="5"
                  cols="40"
                ></textarea>
                <p className="text-danger">{errors.description} </p>
              </div>
            </div>
            <button type="submit" className="inscription-1">
              Valider
            </button>
          </form>
        </div>
        </div>
    
    );
  }
}
Inscription.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser, registerLabo })(
  withRouter(Inscription)
);
