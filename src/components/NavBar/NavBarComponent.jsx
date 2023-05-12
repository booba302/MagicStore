import React, { memo, useContext } from "react";
import logo from "./logo.png";
import useFirestore from "../../utils/useFirestore";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const nameCollection = "categories";

const NavBarComponent = () => {
  const [data] = useFirestore({ nameCollection });

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>The Great Henge</h1>
      </div>
      <ListOptionNavBarComponent categories={data} />
      <div className="cart">
        <FontAwesomeIcon icon={faCartShopping} />
        10
      </div>
    </div>
  );
};

export default NavBarComponent;
