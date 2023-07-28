import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () =>{
      vaciarCarrito();
    }

  return (
    <div className='container'>
        <h1 className="main-title">Carrito</h1>
        
        {
            carrito.map((producto) => (
                <div key={producto.id}> 
                    <h3>{producto.titulo}</h3>
                    <p>Precio Unit: ${producto.precio}</p>
                    <p>Precio total: ${producto.precio * producto.cantidad}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <br />
                </div>    
            ))
        }

        { 
          carrito.length > 0 ? 
          <>
          <h2>Precio Total: ${precioTotal()}</h2>
          <button className="agregar-al-carrito" onClick={handleVaciar}>Vaciar</button>
          </> :
          <h3>El carrito esta Vacio</h3>
        }
        
    </div>
  )
}

export default Carrito