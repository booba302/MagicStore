import React from "react";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../Buttons/ButtonComponent";

const CardComponent = (props) => {
  const { data } = props;
  const { id, name, img, price } = data;

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };

  return (
    <div className="card">
      <div className="card-title">
        <h2>{showShortValue(name, 20)}</h2>
      </div>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-price">
        <h3>Precio: {price}$</h3>
      </div>
      <div className="card-btns">
        <div className="card-info">
          <NavLink to={`/card/` + id}>
            <ButtonComponent name="+info" className="btn btn-outline-danger" />
          </NavLink>
        </div>
        <div className="card-buy">
          <ButtonComponent name="Comprar" className="btn btn-outline-success" />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
