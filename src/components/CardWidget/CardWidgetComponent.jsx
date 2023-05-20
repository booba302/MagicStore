import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CardWidgetComponent(props) {
  const { quantity } = props;
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faCartShopping} />
      {quantity}
    </div>
  );
}

export default CardWidgetComponent;
