import React, { Component } from "react";
import "../Css/Navbar.css";



export default class Navbar extends Component {
  render() {
    return (
     
  <nav className="navbar shadow  bg-white rounded fixed-top navbar-expand-lg navbar-light background-color:#6e6e6e">
  
  
  
  <div className="collapse navbar-collapse pt-0 pb-0 mt-0 mb-2" id="navbarText">
    <a className="navbar-brand " href="/"></a>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item rounded ">
        <a className="nav-link" href="/"> Testez-Vous </a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="/Auto-Surveillance">Auto-Surveillance</a>
      </li>
      <li className="nav-item rounded">
        <a className="nav-link" href="/Laboratoires">Laboratoires</a>
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
    <button class="btn btn-outline-success  " href="/Connexion">Connectez-vous !</button>
   
  </div>
</nav>

      
    );
  }
}
