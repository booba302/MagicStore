import React, { Fragment, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import BuyComponent from "../components/Buy/BuyComponent";

const CartView = (props) => {
  const { cart } = useContext(CartContext);

  let total = 0;

  cart.forEach((card) => {
    total = total + card.price * card.quantity;
  });

  return (
    <Fragment>
      <div className="cards-container">
        <BuyComponent
        showDelete
         />
      </div>
      <div className="total">
        <h2>{cart.length > 0 ? "Total a pagar: "+total.toFixed(2)+"$": ""}</h2>
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
