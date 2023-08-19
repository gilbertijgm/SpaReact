import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import {collection, addDoc} from "firebase/firestore";
import {db} from '../firebase/config';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })

    }

    if(pedidoId){
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Numero de pedido: {pedidoId}</p>
                <Link className="ver-mas" to="/" >Volver al Inicio</Link>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1 className="main-title">Finalizar Compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>

                <input type='text' placeholder='Nombre y Apellido' {...register("nombre")} />
                <input type='number' placeholder='1182974728' {...register("telefono")} />
                <input type='email' placeholder='ejemplo@gmail.com' {...register("email")} />

                <button className="enviar" type='submit' >Comprar</button>

            </form>
        </div>
    )
}

export default Checkout