import "./main.css"
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import {  CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Tratamientos from "./components/Tratamientos";

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/inicio" element={<Inicio />}></Route>
                <Route path="/tratamientos" element={<Tratamientos />} />
                <Route path="/productos" element={<ItemListContainer />}/>
                <Route path="/productos/:categoria" element={<ItemListContainer />}/>
                <Route path="/item/:id" element={<ItemDetailContainer  />}/>
                <Route path="/contacto" element={<Contacto />}></Route>
                <Route path="/carrito" element={<Carrito />}></Route>
            </Routes>
        </BrowserRouter>
      </CartProvider> 
    </div>
  );
}

export default App;
