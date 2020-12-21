
import React from "react"

export default function Inscription (){
    return(
        <div className="sign-in-card">
           <form className="needs-validation login-content" novalidate>
           <h1>Inscrivez-vous</h1>
           <hr/>
  <div className="form-row">
    <div className="col-md mb-3">
      <label for="validationCustom01">Nom</label>
      <input type="text" className="form-control" id="validationCustom01" placeholder="Nom" required/>
      
    </div>
    <div className="col-md mb-3">
      <label for="validationCustom02">Prénom</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Prénom"  required/>
      
    </div>
 
  </div>
  <div className="form-row">
    <div className="col-md mb-3">
      <label for="validationCustom03">Email</label>
      <input type="email" className="form-control" id="validationCustom03" placeholder="Email" required/>
      
    </div>
    <div className="col-md mb-3">
      <label for="validationCustom04">Mot de passe</label>
      <input type="password" className="form-control" id="validationCustom04" placeholder="mot de passe" required/>
      
    </div>
    <div className="col-md mb-3">
      <label for="validationCustom04">Confirmer votre mot de passe</label>
      <input type="password" className="form-control" id="validationCustom04" placeholder="mot de passe" required/>
      
    </div>
    
  </div>

</form>



        </div>
    )
}