import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { Error404 } from "./components/error404";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Productos" />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer />}
          />
          <Route
            path="/items/:id"
            element={<ItemDetailContainer greeting="Productos" />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;