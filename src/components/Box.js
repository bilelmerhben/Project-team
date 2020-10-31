import React, { Component } from "react";
import "../Css/box.css";
function Box  (props){
  
    return (
      
 <div class={props.classname}>
    <img>{props.img}</img>
    <h2>{props.text}</h2>
 </div>
 
    );
  }
  export default Box;

