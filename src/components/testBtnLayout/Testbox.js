import React from  "react";
import {Link} from "react-router-dom";
import "../../Css/testbox.css";
function Testbox({img,classname,text,title,top}) {

return(
    <div className={classname}>
      <img src={img} alt={""} />
      <h4>  <Link to={top}><button>{title}</button></Link>   </h4>
       <p>{text}</p>
    </div>
);

}
export default Testbox;
 