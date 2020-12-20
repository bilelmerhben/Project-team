
import React from "react"

export default function Inscription (){
    return(
        <div className="sign-in-card">
           <form class="needs-validation login-content" novalidate>
           <h1>Inscrivez-vous</h1>
           <hr/>
  <div class="form-row">
    <div class="col-md mb-3">
      <label for="validationCustom01">Nom</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="Nom" required/>
      
    </div>
    <div class="col-md mb-3">
      <label for="validationCustom02">Prénom</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Prénom"  required/>
      
    </div>
 
  </div>
  <div class="form-row">
    <div class="col-md mb-3">
      <label for="validationCustom03">Email</label>
      <input type="email" class="form-control" id="validationCustom03" placeholder="Email" required/>
      
    </div>
    <div class="col-md mb-3">
      <label for="validationCustom04">Mot de passe</label>
      <input type="password" class="form-control" id="validationCustom04" placeholder="mot de passe" required/>
      
    </div>
    <div class="col-md mb-3">
      <label for="validationCustom04">Confirmer votre mot de passe</label>
      <input type="password" class="form-control" id="validationCustom04" placeholder="mot de passe" required/>
      
    </div>
    
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      
    </div>
  </div>
  <button class="inscription" type="submit">Valider l'inscription</button>
</form>



        </div>
    )
}