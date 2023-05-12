import React from "react";

const CardComponent = (props) => {
  const { data } = props;
  const { id, name, desciption, img, price, amount } = data;
  return (
    <div className="card">
      <div className="card-title">
        <h2>{name}</h2>
      </div>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-price">
        <h3>Precio: {price}$</h3>
      </div>
      <div className="card-btns">
        <div className="card-info">
          <button type="button" className="btn btn-outline-danger">
            +info
          </button>
        </div>
        <div className="card-buy">
          <button type="button" className="btn btn-outline-success">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
