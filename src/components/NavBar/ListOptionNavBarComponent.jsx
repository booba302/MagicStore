import React from "react";
import OptionNavBarComponent from "./OptionNavBarComponent";

const ListOptionNavBarComponent = (props) => {
  const { categories } = props;
console.log(categories)
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
            return(
                <OptionNavBarComponent key={index} category={category} />
            )
        })}
      </ul>
    </div>
  );
};

export default ListOptionNavBarComponent;
