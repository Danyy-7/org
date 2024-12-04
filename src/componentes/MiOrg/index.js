import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{

    // const [mostar,actualizarMostrar] = useState(true)

    // const manejarClick = () =>{
    //     console.log("mostar/ocultar elemnto", !mostar)
    //     actualizarMostrar(!mostar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg