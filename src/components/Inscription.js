import React, { Component } from "react";
import {  withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import InscriptionLabo from "./InscriptionLabo";

class Inscription extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      visiblePatient: false,
      visibleLabo: false,
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
    const newUser = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    var visiblePatient = this.state.visiblePatient;
    var visibleLabo = this.state.visibleLabo;
    console.log(visiblePatient);
    return (
      <div className="container-fluid mt-5">
        <br />
        <br />
        <br />
        <button
          onClick={() => this.state.visibleLabo?
            this.setState({visibleLabo:!visibleLabo,visiblePatient: !visiblePatient}):
            this.setState({ visiblePatient: !visiblePatient })}
        >
          patient
        </button>
        <button onClick={() => this.state.visiblePatient?
            this.setState({visiblePatient:!visiblePatient,visibleLabo: !visibleLabo}):
            this.setState({ visibleLabo: !visibleLabo })}
        >
          Labo
        </button>
        <div
          className={classnames("sign-in-card ", {
            invisible: visiblePatient !== true,
          })}
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
                <label htmlFor="validationCustom01">Nom</label>
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
              <div className="col-md mb-3">
                <label htmlFor="validationCustom02">Prénom</label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.lastname,
                  })}
                  id="lastname"
                  placeholder="Prénom"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  required
                />
                <p className="text-danger">{errors.lastname} </p>
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
            <button type="submit" className="inscription">
              Valider
            </button>
          </form>
        </div>

        <div
          className={classnames("sign-in-card ", {
            invisible: visibleLabo !== true,
          })}
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
        <div
          className={classnames("sign-in-card ", {
            invisible: visibleLabo !== true,
          })}
        >
          <InscriptionLabo />
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
export default connect(mapStateToProps, { registerUser })(
  withRouter(Inscription)
);
