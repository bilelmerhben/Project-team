import React from "react";
import "../../Css/box.css";

export default function Box({ title, classname, img , text }) {

  return (

    <div className={classname}>
      <img src={img} alt={""} />
      <h4 classname={classname}>{title}</h4>
  <p>{text}</p>
    </div>

  )
}


