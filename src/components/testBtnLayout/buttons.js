import React, { Component } from "react";
import {Box} from "./Box";
import test from '../../img/temperature-sensor.png'

class Btns extends Component{
    render(){
    return(
        <div className="container text-center box1">
            <div className="row justify-content-md-center mx-0">
                <div className="col px-0 text-center">
        <Box classname={"sub1"} img={test} title={"TEST"} text={"Some text "}/>
        </div>
        <div className="col px-0 text-center">
        <Box classname={"sub2"} img={test} title={"TEST"} text={"Some text "}/>
        </div >
        <div className="col px-0 text-center">
        <Box classname={"sub3"} img={test} title={"TEST"} text={"Some text "}/>
        </div>
      

        
</div>
        </div>
    )}
}

export default Btns;
