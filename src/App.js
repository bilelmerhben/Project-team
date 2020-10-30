import React from "react";
import Carousel from 'react-elastic-carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/slider";
import Navbar from "./components/Navbar";
import Box from "./components/Box";

import "./Css/App.css";

function App() {
  const breakPoints =[
    {width : 1300 , itemsToShow:1},
];
  return (
    
    <div className="App">

      <Navbar/>
      <p>Hello</p>
      <Carousel class="cars" breakPoints={breakPoints}>
            <Card src ="/img2.jpg"/>
            <Card src ="/img3.png"/>
            <Card src ="/img1.jpg"/>
           
      
      </Carousel>
  
      <Box/>
      



      <footer>Footer</footer>
    </div>
  );
}

export default App;
