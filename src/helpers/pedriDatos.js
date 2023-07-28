//archivo de funciones a utilizar

import data from "../data/data.json";

//funcion para pedir datos del json usando promesas
export const pedirDatos = () => {

    return new Promise((resolve, reject) =>{
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

//funcion para traer item por id
export const pedirItemPorId = (id) => {

    return new Promise((resolve, reject) =>{
        //traer podructo por id usando find
        const item = data.find((el) => el.id === id); 

        if( item ){
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }

    })
}