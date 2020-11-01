import React from "react";
import ReactDOM from 'react-dom';
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
       <Route exact path="/" component={Test} />
       <Route exact path="/Auto-Surveillance" component={Surveillance} />
       <Route exact path="/Laboratoires" component={Laboratoire} />
       <Route exact path="/Covid-19?" component={Question} />
       <Route exact path="/Protégez-vous" component={Proteger} />
       <Route exact path="/Dons" component={Dons} />
       <Route exact path="/Contactez-nous" component={Contact} />
       </Switch>
     
      
      
    </div>


    </BrowserRouter>
     
      
  );
}

export default App;
