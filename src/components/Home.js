import React from "react";
import Btns from "./testBtnLayout/buttons";
import "../Css/Home.css";

function Home() {
  return (
      <div className="container">
    <div className="firstLayerHome pt-3 mt-5">
      <div className="container">
        <div className="tp-loop-wrap">
          <div className="tp-mask-wrap ">
            <div className="tp-caption">Welcome to</div>
          </div>
        </div>
        <div className="tp-loop-wrap">
          <div className="tp-mask-wrap">
            <div className="tp-caption">CoronaVirus.tn</div>
          </div>
        </div>
      </div>
      <div className="bottons">
        <Btns />
      </div>
    </div>
    <div className="secondLayerHome">
        <h1>hello second layer home</h1>
    </div>
    </div>
    
  );
}
export default Home;
