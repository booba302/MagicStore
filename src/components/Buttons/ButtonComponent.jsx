import React from "react";

const ButtonComponent = (props) => {
  const {name, className} = props;

  return (    
    <button
      type="button"
      className={className}
    >
      {name}
    </button>
  );
};

export default ButtonComponent;
