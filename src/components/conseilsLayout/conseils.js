import react from react;
import "./container"
function conseils(props){
    return(
        <div>
            <h1>{this.props.title}</h1>
            <div className="row">
                <div className="col">
                {this.props.image}
                </div>
                <div className="col">
                {props.container}
                </div>
            </div>
        </div>
    )
}
export default conseils