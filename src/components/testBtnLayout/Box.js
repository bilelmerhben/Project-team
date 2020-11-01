import React from "react";
import "../../Css/box.css";

export function Box({ text, classname, img }) {

  return (

    <div className={classname}>
      <img src={img} alt={""} />
      <h2>{text}</h2>
    </div>

  )
}


