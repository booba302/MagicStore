import React, { useContext } from "react";
import CardComponent from "../components/Card/CardComponent";
import GeneralContext from "../context/GeneralContext";

const CartView = (props) => {
  const { car } = useContext(GeneralContext);

  const simpleCar = [
    ...car
      .reduce((mp, o) => {
        const key = JSON.stringify([
          o.id,
          o.name,
          o.description,
          o.img,
          o.price,
          o.color,
          o.amount,
        ]);
        if (!mp.has(key)) mp.set(key, { ...o, count: 0 });
        mp.get(key).count++;
        return mp;
      }, new Map())
      .values(),
  ];

  console.log(simpleCar);

  return (
    <div className="cards-container">
      {simpleCar.map((card, index) => {
        return (
          <div key={index}>
            <CardComponent showDelete data={card} cantidad="Cantidad: " />
          </div>
        );
      })}
    </div>
  );
};

export default CartView;
