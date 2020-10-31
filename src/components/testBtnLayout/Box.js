import React, {Component} from "react";
import "../../Css/box.css";

export class Box extends React.Component{
  render(){
    return (
      
 <div className={this.props.classname}>
    <img src={this.props.img}/>
    <h2>{this.props.text}</h2>
   
 </div>
 
    );
  }
}

