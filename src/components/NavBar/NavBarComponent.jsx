import React, { memo, useContext, useMemo } from "react";
import logo from "./logo.png";
import useFirestore from "../../utils/useFirestore";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CardWidgetComponent from "../CardWidget/CardWidgetComponent";

const nameCollection = "categories";

const NavBarComponent = (props) => {
  const { qtyCart } = useContext(CartContext);
  const [data] = useFirestore({ nameCollection });

  const dataProcess = useMemo(() => {
    const categoriesObject = data.length !== 0 ? data[0] : [];
    return "category" in categoriesObject ? categoriesObject.category : [];
  }, [data]);

  return (
    <div className="navbar">
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>The Great Henge</h1>
        </div>
      </NavLink>
      <ListOptionNavBarComponent categories={dataProcess} />
      <NavLink to="/shopping-cart">
        <CardWidgetComponent quantity={qtyCart} />
      </NavLink>
    </div>
  );
};

export default memo(NavBarComponent);
