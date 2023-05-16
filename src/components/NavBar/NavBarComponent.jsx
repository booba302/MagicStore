import React, { memo, useContext, useMemo } from "react";
import logo from "./logo.png";
import useFirestore from "../../utils/useFirestore";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const nameCollection = "categories";

const NavBarComponent = (props) => {
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
      <div className="cart">
        <FontAwesomeIcon icon={faCartShopping} />
        10
      </div>
    </div>
  );
};

export default memo(NavBarComponent);
