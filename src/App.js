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
import ProfilePatient from "./components/ProfilePatient";
import ProfileLabo from "./components/ProfileLabo";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./Inscription";
  }
}


function App() {
 
  return (
    <Provider store={store}>
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
       <Route  path="/ProfilePatient" component={ProfilePatient} />
       <Route  path="/ProfileLabo" component={ProfileLabo} />
       <Route  path="/dons" component={Dons} />

       </Switch>
      
      
    </div>


    </BrowserRouter>
    </Provider>
     
      
  );
}

export default App;
