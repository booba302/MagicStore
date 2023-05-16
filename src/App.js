import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import ProductsView from "./views/ProductsView";
import DetailsView from "./views/DetailsView";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ProductsView />}></Route>
        <Route path="/color/:category" element={<ProductsView />}></Route>
        <Route path="/card/:id" element={<DetailsView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
