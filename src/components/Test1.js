import React, { Component } from 'react';
import "../Css/Test1.css";

export default class Test1 extends Component {
    render() {
        return (
            <div className="test1 d-flex flex-column bd-highlight mb-3">
                <div  class="p-2 bd-highlight">div1</div>
                <div  class="p-2 bd-highlight">
                    <button>Enregistrer et Continuer</button>
                </div>
                <div  class="p-2 bd-highlight">div2</div>
            </div>
        )
    }
}
