import React from "react";
import { NavLink } from "react-router-dom";

const OptionNavBarComponent = (props) => {
  const { category } = props;
  
  return (
    <NavLink to={`/color/${category}`}>
      <li>{category.toUpperCase()}</li>
    </NavLink>  
  );
};

export default OptionNavBarComponent;
