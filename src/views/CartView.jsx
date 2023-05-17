import React, { Fragment, useContext } from "react";
import CardComponent from "../components/Card/CardComponent";
import GeneralContext from "../context/GeneralContext";
import { NavLink } from "react-router-dom";

const CartView = (props) => {
  const { car } = useContext(GeneralContext);

  const simpleCar = [
    ...car
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
  ];

  let total = 0;

  simpleCar.forEach((card) => {
    delete card.amount;
    total = total + card.price * card.quantity;
    console.log(total)
  });

  return (
    <Fragment>
      <div className="cards-container">
        {simpleCar.map((card, index) => {
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
