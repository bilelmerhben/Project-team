import React from "react";

export default function Inscription() {
  return (
    <div className="sign-in-card">
      <form className="needs-validation login-content">
        <h1>Inscrivez-vous</h1>
        <hr />
        <div className="form-row">
          <div className="col-md mb-3">
            <label htmlFor="validationCustom01">Nom</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Nom"
              required
            />
          </div>
          <div className="col-md mb-3">
            <label htmlFor="validationCustom02">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Prénom"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md mb-3">
            <label htmlFor="validationCustom03">Email</label>
            <input
              type="email"
              className="form-control"
              id="validationCustom03"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-md mb-3">
            <label htmlFor="validationCustom04">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="validationCustom"
              placeholder="mot de passe"
              required
            />
          </div>
          <div className="col-md mb-3">
            <label htmlFor="validationCustom04">
              Confirmer votre mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom"
              placeholder="mot de passe"
              required
            />
          </div>
        </div>
        <button type="submit" className="inscription">
          Valider
        </button>
      </form>
    </div>
  );
}
