import React from "react";
import { BrowserRouter , Route ,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";

import Test from "./components/Test";
import Surveillance from "./components/Surveillance";
import Laboratoire from "./components/Laboratoire";
import Question from "./components/Question";
import Proteger from "./components/Proteger";
import Dons from "./components/Dons";
import Contact from "./components/Contact";

import "./Css/App.css";


function App() {
 
  return (
    <BrowserRouter>

    <div className="App">
       <Navbar/>
       <Switch>
       <Route  path="/" component={Test} />
       <Route  path="/Auto-Surveillance" component={Surveillance} />
       <Route  path="/Laboratoires" component={Laboratoire} />
       <Route  path="/Covid-19?" component={Question} />
       <Route  path="/Protégez-vous" component={Proteger} />
       <Route  path="/Dons" component={Dons} />
       <Route  path="/Contactez-nous" component={Contact} />
       </Switch>
     
      
      
    </div>


    </BrowserRouter>
     
      
  );
}

export default App;
