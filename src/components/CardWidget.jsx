import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CardWidget = () => {

    const { cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
      <ul className='menu-horizontal'>
        <li><Link to="/carrito" className="">
        Carrito
        <span className="">{cantidadEnCarrito()}</span>
        </Link></li>
      </ul>
       
    </div>
  )
}

export default CardWidget