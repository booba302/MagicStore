import React, { Fragment, useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import { CartContext } from "../context/CartContext";
import ItemCountComponent from "../components/ItemCount/ItemCountComponent";
import { ToastContainer, toast } from "react-toastify";
import ErrorView from "./ErrorView";

const nameCollection = "products";

const DetailsView = (props) => {
  const { id: documentId } = useParams();
  const [qty, setQty] = useState(0);
  const { addToCart } = useContext(CartContext);

  const [data, loading, response, error] = useFirestore({
    nameCollection,
    documentId,
  });
  const { name, img, description, price } = data;

  const notify = (qty) =>
    toast.success("Se ha agregado " + name + " x" + qty + " al carrito!", {
      position: "bottom-right",
      theme: "dark",
    });

  const addCard = (qty) => {
    setQty(qty);
    addToCart(data, qty);
    notify(qty);
  };

  return (
    <Fragment>
      {loading ? (
        <h1 className="text-center">El producto está cargando</h1>
      ) : error ? (
        <ErrorView />
      ) : (
        <div className="cards-container">
          <div className="card-details card">
            <div className="card-title">
              <h2>{name}</h2>
            </div>
            <div className="card-info">
              <div className="card-img">
                <img src={img} alt="" />
              </div>
              <div className="card-text">
                <p>{description}</p>
              </div>
            </div>
            <div className="card-price">
              <h3>Precio: {price}$</h3>
            </div>
            <div className="card-btns">
              <div className="btn-info">
                {qty > 0 ? (
                  <NavLink to="/shopping-cart">
                    <button className="btn btn-outline-success btn-sm">
                      Terminar Compra
                    </button>
                  </NavLink>
                ) : (
                  <ItemCountComponent
                    initial={1}
                    stock={10}
                    onAdd={addCard}
                  ></ItemCountComponent>
                )}
                <ToastContainer />
              </div>
              <div className="btn-buy">
                <NavLink to="/">
                  <button className="btn btn-outline-primary btn-sm">
                    Volver
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DetailsView;
