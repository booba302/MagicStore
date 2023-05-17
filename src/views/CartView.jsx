import React, { useContext } from "react";
import CardComponent from "../components/Card/CardComponent";
import GeneralContext from "../context/GeneralContext";

const CartView = (props) => {
  const { car } = useContext(GeneralContext);

  return (
    <div className="cards-container">
        {car.map((product, index) => {
          return (
            <div key={index}>
              <CardComponent showDelete data={product} />
            </div>
          );
        })}
    </div>
  );
};

export default CartView;
