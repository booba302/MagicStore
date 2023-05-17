import React, { Fragment, useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import { CartContext } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import ItemCountComponent from "../components/ItemCount/ItemCountComponent";

const nameCollection = "products";

const DetailsView = (props) => {
  const { id: documentId } = useParams();
  const [qty, setQty] = useState(0);
  const { addToCart } = useContext(CartContext);

  const [data] = useFirestore({ nameCollection, documentId });
  const { name, img, description, price } = data;

  const addCard = (qty) => {
    setQty(qty);
    addToCart(data, qty); 
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default DetailsView;
