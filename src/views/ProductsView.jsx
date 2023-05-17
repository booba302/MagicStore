import React, { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
import CardComponent from "../components/Card/CardComponent";

const nameCollection = "products";

const ProductView = (props) => {
  const { category } = useParams();

  const options = useMemo(() => {
    const _optionwithFilters = {
      nameCollection,
      filters: { where: ["color", "==", category] },
    };
    const _optionWithOutFilters = { nameCollection };
    return category ? _optionwithFilters : _optionWithOutFilters;
  }, [category]);

  const [data, loading] = useFirestore(options);

  return (
    <div className="cards-container">
      {loading ? (
        <h1>Estamos cargando los productos</h1>
      ) : (
        data.map((product, index) => {
          return (
            <div key={index}>
              <CardComponent
                showInfo
                data={product}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default memo(ProductView);
