import React, { Component ,useState } from "react";
import Container1 from "../Container1";
import "../../Css/BtnTest.css";
import { motion } from "framer-motion";
function BtnTest (props){
    const [show,setShow] = useState(false);
    const closeModalHandler = () => setShow(false); 
    return (
       
 <div className={props.className}>
     <motion.button 
      initial={{ scale: 3}}
      animate={{ rotate: 360, scale:1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
     onClick= {() => setShow(true)}  type="button" class="btn  btn-warning but">Démarrer le Test</motion.button>
     <Container1 show={show} close={closeModalHandler} />
 </div>
        
    );
  }
  export default BtnTest;