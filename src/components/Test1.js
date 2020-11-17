import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import "../Css/Test1.css";

class Test1 extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/Test1" component={Question1} />
                    <Route path="/Test1/Question2" component={Question2} />
                    <Route path="/Test1/Question3" component={Question3} />
                    <Route path="/Test1/Question4" component={Question4} />
                    <Route path="/Test1/Question5" component={Question5} />
                    <Route path="/Test1/Question6" component={Question6} />
                    <Route path="/Test1/Question7" component={Question7} />
                    <Route path="/Test1/Question8" component={Question8} />
                    <Route path="/Test1/Question9" component={Question9} />
                    <Route path="/Test1/Question10" component={Question10} />
                    <Route path="/Test1/Question11" component={Question11} />
                    <Route path="/Test1/Question12" component={Question12} />
                    <Route path="/Test1/Question13" component={Question13} />
                    <Route path="/Test1/Question14" component={Question14} />
                    <Route path="/Test1/Question15" component={Question15} />
                    <Route path="/Test1/Question16" component={Question16} />
                    <Route path="/Test1/Question17" component={Question17} />
                    <Route path="/Test1/Question18" component={Question18} />
                    <Route path="/Test1/Question19" component={Question19} />
                    <Route path="/Test1/Question20" component={Question20} />
                    <Route path="/Test1/Question21" component={Question21} />
                    <Route path="/Test1/Question22" component={Question22} />

                </Switch>
            </div>

        )
    }
}

function Question1() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question1 sur 22</p></Link>
                <p>Ces dernières 48 heures, quelle a été votre température la plus élevée ?</p>
                <form action="/Test1/Question2">
                    Remplissez le champ : <input type="number" name="Temperature" placeholder="37.0" min="34" max="42" step="0.1" autoComplete autoFocus required /> :Degrés <br />
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>
    );
}



function Question2() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question2 sur 22</p></Link>
                <p>Ces derniers jours, avez-vous une toux ou votre toux habituelle s’est-elle modifiée ?</p>
                <form action="/Test1/Question3">
                    Sélectionnez une option :
            OUI :<input type="radio" name="radio" required />
            NON :<input type="radio" name="radio" required />  <br />  <br />
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question3() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question3 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question4">
                    Sélectionnez une option :
                OUI :<input type="radio" name="radio" required />
                NON :<input type="radio" name="radio" required />  <br />  <br />
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question4() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 4 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question5">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question5() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 5 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question6">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question6() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 6 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question7">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question7() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 7 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question8">
                   
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question8() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 8 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question9">
                   
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question9() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 9 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question10">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question10() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 10 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question11">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question11() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 11 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question12">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question12() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 12 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question13">
                
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question13() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 13 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question14">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question14() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 14 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question15">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question15() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 15 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question16">
                   
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question16() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 16 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question17">
                   
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question17() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 17 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question18">
                    
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question18() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 18 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question19">
                 
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question19() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 19 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question20">
                   
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question20() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 20 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question21">
                   
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question21() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 21 sur 22</p></Link>
                <p></p>
                <form action="/Test1/Question22">
              
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}

function Question22() {

    return (
        <div className="test1">
            <div className="div1">
                <br /><Link><p>Question 22 sur 22</p></Link>
                <p></p>
                <form >
                
                    <input id="bt1" type="submit" value=" Enregistrer et Continuer" name="submit" />
                </form>
            </div>
            <div className="div2">div2</div>
        </div>

    );
}





export { Question1, Question2, Question3,Question4,Question5,Question6,Question7,Question8,Question9,Question10,Question11,Question12,Question13,Question14,Question15,Question16,Question17,Question18,Question19,Question20,Question21,Question22};
export default Test1;
