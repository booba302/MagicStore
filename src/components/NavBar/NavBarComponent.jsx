import React, { memo, useContext, useMemo } from "react";
import logo from "./logo.png";
import useFirestore from "../../utils/useFirestore";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const nameCollection = "categories";

const NavBarComponent = (props) => {
  const { cart } = useContext(CartContext);
  const [data] = useFirestore({ nameCollection });

  const qtyCart = cart.reduce((acc, act) => acc + act.quantity, 0);

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
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
          {qtyCart}
        </div>
      </NavLink>
    </div>
  );
};

export default memo(NavBarComponent);
