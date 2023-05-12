import NavBarComponent from "./components/NavBar/NavBarComponent";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ProductView from "./views/ProductsView";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBarComponent />
      <ProductView />
    </Fragment>
  );
}

export default App;
