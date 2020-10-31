import React, { Component } from "react";
import "../Css/Navbar.css";



export default class Navbar extends Component {
  render() {
    return (
     
  <nav className="navbar shadow  bg-white rounded fixed-top navbar-expand-lg navbar-light background-color:#6e6e6e">
  
  
  
  <div className="collapse navbar-collapse pt-0 pb-0 mt-0 mb-0" id="navbarText">
    <a className="navbar-brand pb-2 mb-2"></a>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item rounded-top pb-2 ">
        <a className="nav-link" href="#"> Testez-Vous </a>
      </li>
      <li className="nav-item rounded-top pb-2">
        <a className="nav-link" href="#">Auto-Surveillance</a>
      </li>
      <li className="nav-item rounded-top pb-2">
        <a className="nav-link" href="#">Laboratoires</a>
      </li>
      <li className="nav-item rounded-top pb-2">
        <a className="nav-link" href="#">Covid-19?</a>
      </li>
      <li className="nav-item rounded-top pb-2">
        <a className="nav-link" href="#">Protégez-vous</a>
      </li>
      <li className="nav-item rounded-top pb-2">
        <a className="nav-link" href="#">Dons</a>
      </li>
      <li className="nav-item rounded-top pb-2">
        <a className="nav-link" href="#">Contactez-nous</a>
      </li>
    </ul>
    <button class="btn btn-outline-success  mb-2" >Connectez-vous !</button>
   
  </div>
</nav>

      
    );
  }
}
