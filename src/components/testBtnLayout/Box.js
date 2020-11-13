import React from "react";
import {Link} from "react-router-dom";
import "../../Css/box.css";

export default function Box({ title, classname, img , text,lien }) {

  return (
<Link to={lien}>
    <div className={classname}>
       <img src={img} alt={""} />

      <h4 classname={classname}>
       {title}
      </h4>

      <p>{text}</p>

    </div>
    </Link>
  )
}


