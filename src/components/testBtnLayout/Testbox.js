import React from  "react";
import {Link} from "react-router-dom";
import "../../Css/testbox.css";
import { motion } from "framer-motion";

function Testbox({img,classname,text,title,top}) {

return(
  
  <motion.div
    className={classname}
    whileHover={{ scale: 1.2, rotate: 360 }}
   
  >
      <img src={img} alt={""} />
      <h4><Link to={top}><button className="bt2">{title}</button></Link></h4>
       <p>{text}</p>
     
  </motion.div>
  
    
    
    
);

}
export default Testbox;


 