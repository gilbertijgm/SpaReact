//Este componente se encarga de pedir la informacion y setear los productos en un estado

import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../helpers/pedriDatos'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {


    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos"); // creamos un estado para cambiar el titulo de las categorias al hacer click
    const categoria = useParams().categoria; //capturamos el parametro en categoria

    useEffect(() => {
      
      const productoRef = collection(db, "productos");

      const q = categoria ? query(productoRef, where("categoria", "==", categoria)) : productoRef;

      getDocs(q)
      .then((resp) => {
          setProductos(
            resp.docs.map((doc) => {
              return {...doc.data(), id: doc.id}
            })
          )
          setTitulo(categoria);
      })

    }, [categoria])
    


  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer