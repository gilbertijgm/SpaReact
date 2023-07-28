//Este componente se encarga de mostrar la informacion de item por id


import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../helpers/pedriDatos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ( ) => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    
    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) =>{
                setItem(res);
            })
    }, [id])
    
    
  return (
    <div>
        {
            item && <ItemDetail item={item} />
        }
    </div>
  )
}

export default ItemDetailContainer