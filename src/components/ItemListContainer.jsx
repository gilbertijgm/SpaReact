//Este componente se encarga de pedir la informacion y setear los productos en un estado

import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../helpers/pedriDatos'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {


    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos"); // creamos un estado para cambiar el titulo de las categorias al hacer click
    const categoria = useParams().categoria; //capturamos el parametro en categoria

    useEffect(() => {
      pedirDatos()
      .then((res) =>{
        if(categoria){
          setProductos(res.filter((prod) => prod.categoria === categoria)); //hacemos el filtro de nuestro bd para ver si existe y seteralo
          setTitulo(categoria); //seteamos el titulo para que cambien en la vista
        } else{
          setProductos(res); //si no setea todos los productos
          setTitulo("Productos"); //si no se queda el titulo productos
        }
      })
    }, [categoria])
    


  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer