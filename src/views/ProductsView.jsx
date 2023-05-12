import React, { memo, useContext, useMemo } from "react";
import useFirestore from "../utils/useFirestore";
import CardComponent from "../components/Card/CardComponent";

const nameCollection = "products";

const ProductView = (props) => {
  const [data] = useFirestore({ nameCollection });

  return (
    <div className="cards-container">
      {data.map((product, index) => {
        return (
          <CardComponent key={index} data={product}/>
        );
      })}
    </div>
  );
};

export default ProductView;
