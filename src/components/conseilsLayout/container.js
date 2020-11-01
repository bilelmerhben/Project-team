import React from "react";

function container(props){
    return(
        <div className="container p-3 my-3 border">
            <img>{props.image}</img>
            <h3>{props.text}</h3>
        </div>


    )}
    export default container;