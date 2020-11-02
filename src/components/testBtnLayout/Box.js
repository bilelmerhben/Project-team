import React from "react";
import "../../Css/box.css";

export function Box({ text, classname, img }) {

  return (

    <div className={classname}>
      <img src={img} alt={""} />
      <p classname={classname}>{text}</p>
    </div>

  )
}


