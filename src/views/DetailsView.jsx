import React, { Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import ButtonComponent from "../components/Buttons/ButtonComponent";

const nameCollection = "products";

const DetailsView = (props) => {
  const { id: documentId } = useParams();

  const [data] = useFirestore({ nameCollection, documentId });

  return (
    <Fragment>
      <div className="card-details">
        <div className="card-title">
          <h2>{data.name}</h2>
        </div>
        <div className="card-info">
            <div className="card-img">
              <img src={data.img} alt="" />
            </div>
            <div className="card-text">
              <p>{data.description}</p>
            </div>
        </div>
        <div className="card-price">
          <h3>Precio: {data.price}$</h3>
        </div>
        <div className="card-btns">
          <div className="btn-info">
            <ButtonComponent
              className="btn btn-outline-success"
              name="comprar"
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
    </Fragment>
  );
};

export default DetailsView;
