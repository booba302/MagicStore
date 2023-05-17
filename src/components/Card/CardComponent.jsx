import React, { useContext } from "react";
import ButtonComponent from "../Buttons/ButtonComponent";
import { CartContext } from "../../context/CartContext";

const CardComponent = (props) => {
  const { data, cantidad, showInfo, showDelete } = props;
  const { id, name, img, price, quantity } = data;
  const { delToCart } = useContext(CartContext);

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat(" ...")
      : value;
  };

  const removeThisCard = () => {
    delToCart(data);
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
        <h3>
          {cantidad ? cantidad + " " +quantity: ""}
        </h3>
        <h3>
          {isNaN(quantity * price)
            ? " "
            : "Total: " + (quantity * price).toFixed(2) + "$"}
        </h3>
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
