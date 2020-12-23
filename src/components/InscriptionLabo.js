import React, { Component } from "react";
import {  withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerLabo } from "../actions/authActions";
import classnames from "classnames";

class InscriptionLabo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      email: "",
      password: "",
      password2: "",
      appointments:[],
      errors: {},
      
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newLabo = {
      name: this.state.name,
      description: this.state.description,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerLabo(newLabo, this.props.history);
  };

  render() {
    const { errors } = this.state;
    
    return (
 
       

        <div
          className="sign-in-card "
        
        >
          <form
            className="needs-validation login-content"
            noValidate
            onSubmit={this.onSubmit}
          >
            <h1>Inscrivez-vous</h1>
            <hr />

            <div className="form-row">
              <div className="col-md mb-3">
                <label htmlFor="validationCustom01">Nom du labo</label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.name,
                  })}
                  id="name"
                  placeholder="Nom"
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
            <button type="submit" className="inscription">
              Valider
            </button>
          </form>
        </div>
    );
  }
}

InscriptionLabo.propTypes = {
  registerLabo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerLabo })(
  withRouter(InscriptionLabo)
);
