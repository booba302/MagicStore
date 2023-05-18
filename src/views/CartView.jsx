import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import BuyComponent from "../components/Buy/BuyComponent";

const CartView = (props) => {

  return (
    <Fragment>
      <div className="cards-container">
        <BuyComponent
        showDelete
         />
      </div>      
      <div className="card-btns">
        <div className="btn-buy">
          <NavLink to="/">
            <button className="btn btn-outline-primary btn-sm">Volver</button>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default CartView;
