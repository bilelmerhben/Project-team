import React, { Component } from "react";
import "../Css/Navbar.css";
import {logo} from "../img/logo.png";


export default class Navbar extends Component {
  render() {
    return (
     
  <nav className="navbar shadow  bg-white rounded fixed-top navbar-expand-lg navbar-light background-color:#6e6e6e">
  
  
  <a className="navbar-brand"></a>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item rounded ">
        <a className="nav-link" href="#"> Testez-Vous </a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="#">Auto-Surveillance</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="#">Laboratoires</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="#">Covid-19?</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="#">Protégez-vous</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="#">Dons</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="#">Contactez-nous</a>
      </li>
    </ul>
    <button class="btn btn-outline-success my-2 my-sm-0" >Connectez-vous!</button>
   
  </div>
</nav>

      
    );
  }
}
