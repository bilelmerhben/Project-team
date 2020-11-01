import React, { Component } from "react";
import "../Css/button.css";
function Button (props){
  
    return (
      
 <div className={props.className}>
    
    <button>{props.text}</button>
 </div>
 
    );
  }
  export default Button;