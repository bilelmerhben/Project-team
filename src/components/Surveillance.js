import React, { Component } from "react";
import "../Css/surveillance.css";
import back from "../img/back.png";
const obj={
   question:['  Question 1 sur 10','Question 2 sur 10','Question 3 sur 10'],
   titre:['Si vous (ou votre proche) ressentez un manque de souffle quand vous parlez ou faites un petit effort, comment cela a-t-il évolué depuis hier (ou depuis la dernière connexion) ?','Comment vous (ou votre proche) vous sentez-vous par rapport à hier (ou depuis la dernière connexion) ?','Quelle a été la température maximale des 24 dernières heures ?'],
   contenu:['Sélectionnez une option :','Sélectionnez une option :','Remplissez le champ :'],
   label:['Mieux','Stable','Un peu moins bien','Beaucoup moins bien']   
}
class Surveillance extends Component{
  state={
     count:0
  }
   changequestion =(e)=>{
      e.preventDefault();
      if(this.state.count <2){
         this.setState(
           {
            count:this.state.count + 1
           });}}
           comeback =()=>{
           
            if(this.state.count >0){
               this.setState(
                 {
                  count:this.state.count - 1
                 });
                            }}
render(){
    return (
       
 <div className="surveille">
    <img className="fleche" onClick={this.comeback} src={back} alt=""></img>
    <h4 className="d-inline">{obj.question[this.state.count]}</h4>
   <h5>{obj.titre[this.state.count]}</h5>
   <h5>{obj.contenu[this.state.count]}</h5><br/>
<form  onSubmit={this.changequestion}>

   {this.state.count ==0?( <div>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[0]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[1]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[2]}</label><br/>
<input className="mr-2 " type="radio" name="radio" required /><label>{obj.label[3]}</label><br/>
</div> ):(this.state.count ==1 ? (
    <div>
   <input className="mr-2 " type="radio" name="radio2" required /><label>{obj.label[0]}</label><br/>
   <input className="mr-2 " type="radio" name="radio2" required /><label>{obj.label[1]}</label><br/>
   <input className="mr-2 " type="radio" name="radio2" required /><label>{obj.label[2]}</label><br/>
   <input className="mr-2 " type="radio" name="radio2" required /><label>{obj.label[3]}</label><br/>
   </div>):(   <div> Remplissez le champ : <input class="input" type="number" name="Temperature" placeholder="37.0" min="34" max="42" step="0.1" autoComplete autoFocus required /> :Degrés <br />
                   
                    </div> ))}
  
<input  type="submit" name="submit" value="Enregistrer et Continuer" /> 
           
</form>

 </div>    
    )
   }
}
export default Surveillance;
