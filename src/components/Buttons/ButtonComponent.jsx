import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ButtonComponent = ({
  showDelete,
  showInfo,
  removeThisCard,
  idProduct,
  name,
}) => {
  const MySwal = withReactContent(Swal);
  const confirmDelete = () => {
    Swal.fire({
      title: "¿Deseas eliminar " + name + " del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "¡El producto ha sido eliminado!",
          "",
          "success"
        );
        removeThisCard();
      }
    });
  };
  return (
    <Fragment>
      {showDelete ? (
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={confirmDelete}
        >
          x
        </button>
      ) : (
        ""
      )}
      {showInfo ? (
        <NavLink to={`/card/${idProduct}`}>
          <button className="btn btn-outline-success btn-sm">+ info</button>
        </NavLink>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ButtonComponent;
