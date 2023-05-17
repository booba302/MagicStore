import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import ProductsView from "./views/ProductsView";
import DetailsView from "./views/DetailsView";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import GeneralContext from "./context/GeneralContext";
import CartView from "./views/CartView";

function App() {
  const [car, setCar] = useState([]);

  const addToCar = (card) => {
    setCar([...car, card]);
  };

  const delToCar = (card) => {
    const newCar = car.filter((_card) => _card.id !== card.id);
    setCar(newCar); 
  };

  return (
    <GeneralContext.Provider value={{ addToCar, car, delToCar }}>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/shopping-car" element={<CartView />}></Route>
          <Route path="/" element={<ProductsView />}></Route>
          <Route path="/color/:category" element={<ProductsView />}></Route>
          <Route path="/card/:id" element={<DetailsView />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;
