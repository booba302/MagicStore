import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ButtonComponent from "../Buttons/ButtonComponent";

const BuyComponent = (props) => {
  const { showInfo, showDelete } = props;
  const { cart, delToCart } = useContext(CartContext);

  let total = 0;

  cart.forEach((card) => {
    total = total + card.price * card.quantity;
  });

  return (
    <div className="cart-detail container">
      {cart.length === 0 ? (
        <h1 className="text-center">No hay productos en el carrito</h1>
      ) : (
        <div className="row">
          <div className="col-7 container">
            {cart.map((card, index) => {
              return (
                <div key={index} className="row cart-cards">
                  <div className="col-1">
                    <ButtonComponent
                      showInfo={showInfo}
                      showDelete={showDelete}
                      idProduct={card.id}
                      removeThisCard={() => {
                        delToCart(card);
                      }}
                    />
                  </div>
                  <div className="col-2">
                    <img src={card.img} alt="" width="70" />
                  </div>
                  <div className="col-7">
                    <h3>{card.name}</h3>
                    <h3>Precio: {card.price.toFixed(2)}$</h3>
                    <h3>Cantidad en carrito: {card.quantity}</h3>
                  </div>
                  <div className="col-2">
                    <h3>Total: {(card.price * card.quantity).toFixed(2)}$</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-5 container">
            <form action="">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="name">Nombres:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nombres"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="lastname">Apellidos:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Apellidos"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Teléfono"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico: </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Correo electrónico:"
                />
                <label htmlFor="email-confirm">
                  Repetir correo electrónico:{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email-confirm"
                  aria-describedby="emailHelp"
                  placeholder="Repetir Correo electrónico"
                />
              </div>
              <div className="total">
                <h2>
                  {cart.length > 0
                    ? "Total a pagar: " + total.toFixed(2) + "$"
                    : ""}
                </h2>
                <button type="submit" className="btn btn-outline-success btn-sm">
                Comprar
              </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyComponent;
