import React from "react";
import {Link,Route} from "react-router-dom";
import "../../Css/box.css";
import Test1 from "../Test1";

export default function Box({ title, classname, img , text,lien }) {

  return (
   


    <div className={classname}>
       <img src={img} alt={""} />
       <h4 classname={classname}>
       <Link to={lien}>
       {title}
       </Link>
       </h4>
       <p>{text}</p>
       
    </div>
 


  )
}


