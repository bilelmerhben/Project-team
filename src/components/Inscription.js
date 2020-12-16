
import React from "react"

export default function Inscription (){
    return(
        <div className="lab container-sm">
           <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required/>
      
    </div>
    <div class="col-md mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required/>
      
    </div>
 
  </div>
  <div class="form-row">
    <div class="col-md mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required/>
      
    </div>
    <div class="col-md mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required/>
      
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
  <button class="btn btn-primary" type="submit">Valider l'inscription</button>
</form>



        </div>
    )
}