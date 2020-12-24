import React from "react";
import "../Css/Profile.css";

function ProfilePatient() {
  return (
    <div className="container emp-profile">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Informations du patient</h5>

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
                  <label>Id du patient</label>
                </div>
                <div className="col-md-6">
                  <p>123</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Nom</label>
                </div>
                <div className="col-md-6">
                  <p>Nom du patient</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>patient@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Telephone</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
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
            <h5>Informations du rendez-vous</h5>

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
                  <p> Labo abc</p>
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
                  <label>Telephone</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Date du rendez-vous</label>
                </div>
                <div className="col-md-6">
                  <p>Le 12/01/2012</p>
                  <a className="btn bt" href="">Modifier date du rendez-vous</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
export default ProfilePatient;