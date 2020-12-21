import React from "react";
import { BrowserRouter , Route ,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Surveillance from "./components/Surveillance";
import Laboratoire from "./components/Laboratoire";
import Covid19 from "./components/Covid19";
import Proteger from "./components/Proteger";
import Dons from "./components/Dons";
import Contact from "./components/Contact";
import Connexion from "./components/Connexion";
import Test1 from "./components/Test1";
import Inscription from "./components/Inscription";
import Footer from "./components/Footer";

function App() {
 
  return (
    <BrowserRouter>

    <div className="App">
       <Navbar/>
       <Switch>
       <Route  exact path="/" component={Home} />
       <Route  path="/Test1/Question1" component={Test1} />
       <Route  path="/Auto-Surveillance" component={Surveillance} />
       <Route  path="/Laboratoires" component={Laboratoire} />
       <Route  path="/Covid-19?" component={Covid19} />
       <Route  path="/Protégez-vous" component={Proteger} />
       <Route  path="/Dons" component={Dons} />
       <Route  path="/Contactez-nous" component={Contact} />
       <Route  path="/Connexion" component={Connexion} />
       <Route  path="/Inscription" component={Inscription} />
       <Route  path="/Test1" component={Test1} />
       </Switch>
       <Footer />
    </div>


    </BrowserRouter>
     
      
  );
}

export default App;
