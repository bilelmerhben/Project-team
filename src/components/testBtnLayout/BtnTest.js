import React, { Component ,useState } from "react";
import Container1 from "../Container1";
import "../../Css/BtnTest.css";

function Contact (props){
    const [show,setShow] = useState(false);
    const closeModalHandler = () => setShow(false); 
    return (
       
 <div className={props.className}>
     <button  onClick= {() => setShow(true)}  type="button" class="btn btn-warning but">Démarrer le Test</button>
     <Container1 show={show} close={closeModalHandler} />
 </div>
        
    );
  }
  export default Contact;