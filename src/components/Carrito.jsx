import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
                <img src={producto.imagen} alt={producto.titulo} className="img-carrito" />
                    <h3>{producto.titulo}</h3>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Precio Unit: ${producto.precio}</p>
                    <p>Precio total: ${producto.precio * producto.cantidad}</p>
                    <br />
                </div>    
            ))

            
        }

        { 
          carrito.length > 0 ? 
          <>
          <h2>Precio Total: ${precioTotal()}</h2>
          <button className="agregar-al-carrito" onClick={handleVaciar}>Vaciar</button>
          <Link to="/checkout" >Finalizar Compra</Link>
         
          </> :
          <h3>El carrito esta Vacio</h3>
        }
         <br />
    </div>
  )
}

export default Carrito