import React, { Component } from "react";
import Box from "../components/Box";
import Button from "../components/Button";

function Test (props){
  
    return (
       
 <div className={props.className}>
     <Box className="box1"/>
      <Button className ="but" text="Démarrer le Test"/>
 </div>
        
    );
  }
  export default Test;