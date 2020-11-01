import React, { Component } from "react";
import {Box} from "./Box";
import test from '../../img/temperature-sensor.png'

class Btns extends Component{
    render(){
    return(
        <div className="container box1">
            <div className="row">
                <div className="col">
        <Box classname={"sub1"} img={test} text={"Tester VOUS"}/>
        </div>
        <div className="col">
        <Box classname={"sub2"} img={test} text={"Tester VOUS"}/>
        </div>
        <div className="col">
        <Box classname={"sub3"} img={test} text={"Tester VOUS"}/>
        </div>
        
</div>
        </div>
    )}
}

export default Btns;