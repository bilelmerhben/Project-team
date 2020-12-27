import React, { Component } from "react";
import "../Css/Profile.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class ProfileLabo extends Component{
  constructor() {
    super();
    this.state = {
      
      labo: {},
    };
  }
  componentDidMount(){
    const email = window.location.href.substring(40)
    fetch('http://localhost:5000/api/users/getthis/labo',{ 
      headers: {
        'Content-Type': 'application/json',
      },
     method : 'POST',
     body : JSON.stringify({email:email})

  })
    .then(response =>  response.json())
    .then(res => {this.setState({labo:res}) ;console.log(this.state.labo)})
    .catch(err=> console.log(err))
  }
  render(){
    const { user } = this.props.auth;

    
  return (
    <div className="container emp-profile">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Informations du Labo</h5>
            
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="tab-content profile-tab">
            <div
              className="tab-pane fade show active" >
              
              <div className="row">
                <div className="col-md-6">
                  <label>Nom du Labo</label>
                </div>
                <div className="col-md-6">
                  <p>{this.state.labo.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{this.state.labo.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Description</label>
                </div>
                <div className="col-md-6">
                  <p> {this.state.labo.description}</p>
                </div>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>

  <br /><br/>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Calendrier des rendez-vous</h5>

            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="tab-content profile-tab">
            <div className="tab-pane fade show active" >
              
              
              
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}}
ProfileLabo.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(ProfileLabo);