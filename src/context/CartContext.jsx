import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

//verificar si hay algo guardado en el localstorage y si no lo hay que devuelva un array vacio
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        //hacemos un array que es igual al carrito que teniamos antes de apretar el boton y luego verificamos con el el metodo find si el producto que queremos agregar esta en el array
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
            setCarrito(nuevoCarrito);
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    }
    const precioTotal = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

    return (
        <CartContext.Provider value={{
            carrito, 
            agregarAlCarrito, 
            cantidadEnCarrito, 
            precioTotal, 
            vaciarCarrito
            }}>
            {children}
        </CartContext.Provider>
    )
}