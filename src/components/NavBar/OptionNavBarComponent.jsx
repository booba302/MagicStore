import React from "react";
import { NavLink } from "react-router-dom";

const OptionNavBarComponent = (props) => {
  const { category } = props;
  return <li id={category.id}>{category.category.toUpperCase()}</li>;
};

export default OptionNavBarComponent;
