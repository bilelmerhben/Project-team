import React, { Component } from "react";
import "../Css/Container1.css";
import Testbox from "./testBtnLayout/Testbox";


function Container1 ({show,close}){
  
    return (
       
 <div 
     className="contain1 d-flex justify-content-around"
     style ={{
      opacity : show ? '1' :'0'
            }}
 >
        
       
        <Testbox classname={"bo1 p-2 bd-highlight"}  title={"TEST1"} />
        <Testbox classname={"bo2 p-2 bd-highlight"}  title={"TEST2"} />
        <Testbox classname={"bo3 p-2 bd-highlight"} top={"/Laboratoires"} title={"Laboratoire le plus proche"} />
        <button  onClick={close} type="button" class="btn btn-info bt1 p-2 bd-highlight ">Close</button>

     
 </div>
        
    );
  }
  export default Container1;