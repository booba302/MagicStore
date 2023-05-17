import React, { memo, useContext, useMemo } from "react";
import logo from "./logo.png";
import useFirestore from "../../utils/useFirestore";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import GeneralContext from "../../context/GeneralContext";

const nameCollection = "categories";

const NavBarComponent = (props) => {
  const { car } = useContext(GeneralContext);
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
      <NavLink to="/shopping-car">
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
          {car.length}
        </div>
      </NavLink>
    </div>
  );
};

export default memo(NavBarComponent);
