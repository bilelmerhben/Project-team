import React from "react";
import "../../Css/box.css";


export default function Box({ title, classname, img , text,lien }) {

  return (
   


    <div className={classname}>
       <br/>
       <img src={img} alt={""} />
       <br/><br/>
       <h4 classname={classname}>
       <a href={lien}  style={{textDecoration:"none", color:"white"}} >
       {title}
       </a>
       </h4>
       <br/>
       <p>{text}</p>
       
    </div>
 


  )
}


