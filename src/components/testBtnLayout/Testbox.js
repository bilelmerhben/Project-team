import React from  "react";
import "../../Css/testbox.css";
function Testbox({props,img,classname,text,title}) {

return(
    <div className={classname}>
      <img src={img} alt={""} />
      <h4 classname={classname}>{title}</h4>
       <p>{text}</p>
    </div>
);

}
export default Testbox;
 