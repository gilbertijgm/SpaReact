import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from './CardWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/inicio" className="logo"><h1>Spa</h1></Link>
        <ul className='menu-horizontal'>
            <li><Link to="/inicio" className="">Inicio</Link></li>
            <li><Link to="/tratamientos" className="">Tratamientos</Link></li>
            <li>
              <Link to="/productos" className="">Productos</Link>
              <ul className='menu-vertical'>
                <li><Link to="/productos/pequeña" className="">pequeña</Link></li>
                <li><Link to="/productos/grande" className="">grande</Link></li>
                <li><Link to="/productos/personalizada" className="">personalizada</Link></li>
              </ul>
            </li>
            <li><Link to="/contacto" className="">Contacto</Link></li>
            <li><CardWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar