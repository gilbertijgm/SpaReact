//este componente se encarga de mostrar los datos del producto

import React from 'react'
import { Link } from 'react-router-dom'

function Item( {producto} ) {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo} />

        <div>
            <h4>{producto.titulo}</h4>
            <p className="categoria">Categoria: {producto.categoria}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`} >Ver mas</Link>
        </div>
    </div>
  )
}

export default Item