import React from "react"
export var inputCase =(name,type,textExt,textInt,classname) => {
    return(
    <label>{textExt}
    <input className={classname} name={name} type={type} value={textInt}></input>
    </label>
    
    
    )

}
export var submitButton = (textInt,classname) => {
    return(
        <button classname={classname}>{textInt}</button>
    )
}

export var Connexion =()=>{
    return(
        <div>
            <form>
                <inputCase name="Email" type="email" textExt="Email" textInt="Entrer votre E-mail" classname="input"/>
                <inputCase name="Password" type="password" textExt="Mot de passe" textInt="Entrer votre mot de passe" classname="input"/>
                <submitButton textInt="Valider" classname="btn"/>
            </form>
        </div>
    )
}