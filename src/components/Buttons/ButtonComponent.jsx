import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ButtonComponent = ({showDelete,showInfo,removeThisCard,idProduct}) => {

  return (
    <Fragment>
      {showDelete ? (
        <button className="btn btn-danger btn-sm" onClick={removeThisCard}>
          x
        </button>
      ) : (
        ""
      )}
      {showInfo ? (
        <NavLink to={`/card/${idProduct}`}>
          <button className="btn btn-outline-success btn-sm">+ info</button>
        </NavLink>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ButtonComponent;
