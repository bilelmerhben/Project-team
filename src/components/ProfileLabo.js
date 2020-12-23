import React from "react";
import "../Css/Profile.css";

function ProfileLabo() {
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
                  <p>Labo abc</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>Laboabc@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Description</label>
                </div>
                <div className="col-md-6">
                  <p> onzepinvpqjbvqeprinv</p>
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
}
export default ProfileLabo;
