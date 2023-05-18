import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import ProductsView from "./views/ProductsView";
import DetailsView from "./views/DetailsView";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context/CartContext";
import CartView from "./views/CartView";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/shopping-cart" element={<CartView />}></Route>
          <Route path="/" element={<ProductsView />}></Route>
          <Route path="/color/:category" element={<ProductsView />}></Route>
          <Route path="/card/:id" element={<DetailsView />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
