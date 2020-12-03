import React from "react";
import {Link} from "react-router-dom";
import "../../Css/box.css";


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


