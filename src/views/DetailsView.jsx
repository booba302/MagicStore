import React, { Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import ButtonComponent from "../components/Buttons/ButtonComponent";

const nameCollection = "products";

const DetailsView = (props) => {
  const { id: documentId } = useParams();

  const [data] = useFirestore({ nameCollection, documentId });
  const {name, img, description, price, amount} = data;

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
              <ButtonComponent
                className="btn btn-outline-primary"
                name="Comprar"
              />
            </div>
            <div className="btn-buy">
              <NavLink to="/">
                <ButtonComponent
                  className="btn btn-outline-danger"
                  name="Volver"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsView;
