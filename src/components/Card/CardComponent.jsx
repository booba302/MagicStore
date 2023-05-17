import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../Buttons/ButtonComponent";
import GeneralContext from "../../context/GeneralContext";

const CardComponent = (props) => {
  const { data, showInfo, showDelete } = props;
  const { id, name, img, price, amount } = data;
  const { delToCar } = useContext(GeneralContext);

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };

  const removeThisCard = () => {
    delToCar(data);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h2>{showShortValue(name, 18)}</h2>
        </div>
      </div>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-price">
        <h3>Precio: {price}$</h3>
      </div>
      <div className="card-amount">
        <h3>Cantidad en existencia: {amount}</h3>
      </div>
      <div className="card-btns">
        <ButtonComponent
          showInfo={showInfo}
          showDelete={showDelete}
          idProduct={id}
          removeThisCard={removeThisCard}
        />
      </div>
    </div>
  );
};

export default CardComponent;
