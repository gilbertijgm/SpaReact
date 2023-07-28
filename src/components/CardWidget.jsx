import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CardWidget = () => {

    const { cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
       <li><Link to="/carrito" className="">
        Carrito
        <span className="numerito">{cantidadEnCarrito()}</span>
        </Link></li>
    </div>
  )
}

export default CardWidget