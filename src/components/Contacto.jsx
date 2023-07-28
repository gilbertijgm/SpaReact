import React from 'react'
import { useForm } from "react-hook-form"

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        alert("Hola "+
        data.nombre+" tu consulta fue enviada. En breve te responderemos por medio de tu WhatsApp: "+
        data.telefono+" o a tu correo: "+data.email+". Gracias!!")
  
    }

  return (
    <div className='container'>
        <h1 className="main-title">Contacto</h1>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>

            <input type='text' placeholder='Nombre y Apellido' {...register("nombre")} />
            <input type='number' placeholder='1182974728' {...register("telefono")} />
            <input type='email' placeholder='ejemplo@gmail.com' {...register("email")} />

            <textarea name="" id="" cols="30" rows="10" placeholder='escribe tu mensaje o consulta'
            {...register("mensaje")} />

            <button className="enviar" type='submit' >Enviar</button>

        </form>
    </div>
  )
}

export default Contacto