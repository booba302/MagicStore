import React, { Fragment, useContext } from "react";
import CardComponent from "../components/Card/CardComponent";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const CartView = (props) => {
  const { cart } = useContext(CartContext);

  /* const simpleCar = [
    ...cart
      .reduce((mp, o) => {
        const key = JSON.stringify([
          o.id,
          o.name,
          o.description,
          o.img,
          o.price,
          o.color,
          o.amount,
        ]);
        if (!mp.has(key)) mp.set(key, { ...o, quantity: 0 });
        mp.get(key).quantity++;
        return mp;
      }, new Map())
      .values(),
  ]; */

  let total = 0;

  cart.forEach((card) => {
    delete card.amount;
    total = total + card.price * card.quantity;
  });

  return (
    <Fragment>
      <div className="cards-container">
        {cart.map((card, index) => {
          return (
            <div key={index}>
              <CardComponent
                showDelete
                data={card}
                cantidad="En el carrito: "
              />
            </div>
          );
        })}
      </div>
      <div className="total">
        <h2>Total a pagar: {total.toFixed(2)}$</h2>
      </div>
      <div className="card-btns">
        <div className="btn-info">
          <button className="btn btn-outline-success btn-sm">Comprar</button>
        </div>
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
