import React from "react";
import "./container"
function conseils(title,image,container){
    return(
        <div>
            <h1>{title}</h1>
            <div className="row">
                <div className="col">
                {image}
                </div>
                <div className="col">
                {container}
                </div>
            </div>
        </div>
    )
}
export default conseils