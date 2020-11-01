import React from "react";

import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import "./Css/App.css";

function App() {
  
  return (
    
    <div className="App">

      <Navbar/>
      <Box className="box1"/>
      <Button className ="but" text="Démarrer le Test"/>



     
    </div>
  );
}

export default App;
