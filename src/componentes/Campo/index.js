import { useState } from "react"
import "./Campo.css"



const Campo = (props) =>{
    const placeholderModificar = `${props.placeholder}...`
//destructuracion para dale el type text al input por defecto
    const {type = "text"} =props


    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)

    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input  placeholder={placeholderModificar} required={props.required} value={props.valor} onChange={manejarCambio} type={type}/>
    </div>
}

export default Campo