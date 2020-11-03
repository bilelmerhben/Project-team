import React, { Component } from "react";
import "../Css/Container1.css";

function Container1 ({props,show,close}){
  
    return (
       
 <div 
     className="contain1" 
     style ={{
      opacity : show ? '1' :'0'
            }}
 >
    
        <p>Etapes du Test---En cours du modification</p>
        <button  onClick={close} type="button" class="btn btn-info">Close</button>
     
 </div>
        
    );
  }
  export default Container1;