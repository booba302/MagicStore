import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ErrorView = () => {
  return (
    <Fragment>
      <div className="text-center error">
        <h1>La carta que estás buscando no existe.</h1>
        <NavLink to="/">
          <button className="btn btn-outline-primary btn-sm">Volver</button>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default ErrorView;
