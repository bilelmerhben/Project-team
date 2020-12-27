import React from "react";
import { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="test1">
        <div className="div1 container-lg">
   
 
      <h1>Contactez-nous</h1>
      <form  >
         <table class="form-style">
            <tr>
               <td>
                  <label>
                     Votre nom <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <input type="text" name="name" class="long"/>
                  <span class="error" id="errorname"></span>
               </td>
            </tr>
            <tr>
               <td>
                  <label>
                     Votre adresse e-mail <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <input type="email" name="email" class="long"/>
                  <span class="error" id="erroremail"></span>
               </td>
            </tr>
            <tr>
               <td>
                  <label>
                     Message <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <textarea name="message" class="long field-textarea"></textarea>
                  <span class="error" id="errormsg"></span>
               </td>
            </tr>
            <tr>
               <td></td>
               <td>
                  <input type="submit" value="Valider"/>      
                  <input type="reset" value="Annuler"/> 
               </td>
            </tr>
         </table>
      </form>

            </div>
       </div>

    );
  }
}
export default Contact;
