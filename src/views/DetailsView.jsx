import React, { Fragment, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import GeneralContext from "../context/GeneralContext";

const nameCollection = "products";

const DetailsView = (props) => {
  const { id: documentId } = useParams();
  const { addToCar } = useContext(GeneralContext);

  const [data] = useFirestore({ nameCollection, documentId });
  const { id, name, img, description, price, amount } = data;

  const addCard = () => {
    addToCar(data);
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
          <div className="card-amount">
            <h3>Cantidad en existencia: {amount}</h3>
          </div>
          <div className="card-btns">
            <div className="btn-info">
              <button
                onClick={addCard}
                className="btn btn-outline-success btn-sm"
              >
                Comprar
              </button>
            </div>
            <div className="btn-buy">
              <NavLink to="/">
                <button
                  className="btn btn-outline-primary btn-sm"
                >
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
