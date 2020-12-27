import React, { Component } from "react";
import "../Css/Navbar.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";




class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
};
  render() {
    return (
     
  <nav className="navbar shadow  bg-white rounded fixed-top navbar-expand-lg navbar-light background-color:#6e6e6e">
  <div className="collapse navbar-collapse pt-0 pb-0 mt-0 mb-2" id="navbarText">
    <a className="navbar-brand " href="/">{}</a>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item rounded ">
        <a className="nav-link" href="/Test1/Question1"> Testez-Vous </a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="/Auto-Surveillance">Auto-Surveillance</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="/Laboratoires" hidden={this.props.auth.user.category==='Labo'}>Laboratoires</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="/Covid-19?">Covid-19?</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="/Protégez-vous">Protégez-vous</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="/Dons">Dons</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="/Contactez-nous">Contactez-nous</a>
      </li>
    </ul>
    <div className="Buttons-nav">
    <a className="btn connecter  " href="/Connexion" onClick={this.props.auth.isAuthenticated===true ? this.onLogoutClick :null}> {this.props.auth.isAuthenticated===true ? 'Déconnexion' : 'Se connecter'}</a>
    <a className="btn inscription  " href={this.props.auth.user.category==='patient'?'/ProfilePatient':
                                           this.props.auth.user.category==='Labo'?'/ProfileLabo':'/Inscription' }>
                                             {this.props.auth.user.category==='patient'?'':
                                           this.props.auth.user.category==='Labo'?'/ProfileLabo':'/Inscription' }</a>

    </div>
  </div>
</nav>

      
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);