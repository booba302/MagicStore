import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ButtonComponent from "../Buttons/ButtonComponent";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const collectionOrders = "orders";

const BuyComponent = (props) => {
  const { showInfo, showDelete } = props;
  const { cart, delToCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  let total = 0;

  cart.forEach((card) => {
    total = total + card.price * card.quantity;
  });

  const addOrder = (e) => {
    const name = e.target.elements.name.value;
    const lastname = e.target.elements.lastname.value;
    const phone = e.target.elements.phone.value;
    const email = e.target.elements.email.value;
    const confirmEmail = e.target.elements.confirmEmail.value;

    if (email === confirmEmail) {
      const newOrder = {
        client: {
          name,
          lastname,
          phone,
          email,
        },
        cards: cart,
        date: new Date().toLocaleString("es-CL"),
      };
      const db = getFirestore();
      const orderCollection = collection(db, collectionOrders);
      addDoc(orderCollection, newOrder).then(({ id }) => {
        Swal.fire({
          title: "¿Desea confirmar la compra?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              name +
                " " +
                lastname +
                ", " +
                "tu compra fue registrada con éxito!",
              "ID: " + id,
              "success"
            );
            clearCart();
            navigate("/");
          }
        });
      });
    } else {
      const MySwal = withReactContent(Swal);
      Swal.fire("Los correos no coinciden", "", "error");
    }
  };

  const actionBuy = (e) => {
    e.preventDefault();
    addOrder(e);
  };

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
                      name={card.name}
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
            <form action="" onSubmit={actionBuy}>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="name">Nombres:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Nombres"
                      required
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
                      required
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
                  required
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
                  required
                />
                <label htmlFor="email-confirm">
                  Repetir correo electrónico:{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="confirmEmail"
                  aria-describedby="emailHelp"
                  placeholder="Repetir Correo electrónico"
                  required
                />
              </div>
              <div className="total">
                <h2>
                  {cart.length > 0
                    ? "Total a pagar: " + total.toFixed(2) + "$"
                    : ""}
                </h2>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-sm"
                >
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
