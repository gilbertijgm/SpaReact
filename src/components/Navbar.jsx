import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from './CardWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/inicio" className="logo"><h1>Spa</h1></Link>
        <ul className='menu-horizontal'>
            <li><Link to="/" className="">Inicio</Link></li>
            
            <li>
              <Link  className="">Productos</Link>
              <ul className='menu-vertical'>
                <li><Link to="/productos/velas" className="">Velas</Link></li>
                <li><Link to="/productos/cuidados diarios" className="">Cuidados Diarios</Link></li>
                <li><Link to="/productos/productos para masajes" className="">Crema para Masaje</Link></li>
              </ul>
            </li>
            <li><Link to="/contacto" className="">Contacto</Link></li>
            <li><CardWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar