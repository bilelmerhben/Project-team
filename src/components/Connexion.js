import React from "react"


 function Connexion (){
    
    return (
       
        <div className="lab card pt-5 align-items-center dark ">
            <form>
                <div className="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
  <div class="form-check pb-2">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
  <button type="submit" class="btn btn-primary">Valider</button>
  <div className="form-group pt-2">
  <a type="button" class="btn btn-success" href="/Inscription">S'inscrire</a>
        </div></form>
        </div>
               )
               }
         export default Connexion;