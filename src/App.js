import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';



function App() {
  const [mostarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Frotn End",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Daniel Vallecillo",
    puesto:"Instructor",
    fav: true
    },
    {
    id: uuid(),
    equipo:"Frotn End",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Oscar Vallecillo",
    puesto:"Instructor",
    fav: false
    },
    {
    id: uuid(),
    equipo:"Devops",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Daniel Vallecillo",
    puesto:"Instructor",
    fav: false
    },
    {
    id: uuid(),
    equipo:"Devops",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Oscar Vallecillo",
    puesto:"Instructor",
    fav: true
    },
    {
    id: uuid(),
    equipo:"Programacion",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Juan Manuel",
    puesto:"Instructor",
    fav: false
    },
    {
    id: uuid(),
    equipo:"Data Science",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Doris Aguilar",
    puesto:"Instructor",
    fav: false
    },
    {
    id: uuid(),
    equipo:"Data Science",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Greysi Rodriguez",
    puesto:"Instructor",
    fav: false
    },
    {
    id: uuid(),
    equipo:"Móvil",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Daniel Vallecillo",
    puesto:"Instructor",
    fav: true
    },
    {
    id: uuid(),
    equipo:"Innovacion y Gestión",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Daniela Maria",
    puesto:"Instructor",
    fav: false
    },
    {
    id: uuid(),
    equipo:"UX y Diseño",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Daniel Vallecillo",
    puesto:"Instructor",
    fav: false
    },
   {
    id: uuid(),
    equipo:"UX y Diseño",
    foto:"https://github.com/Danyy-7.png",
    nombre:"Rosa Meleno",
    puesto:"Instructor",
    fav: false
   }])

  const [equipos, actualizarequipos] = useState([
  
      {
        id: uuid(),
        titulo: "Programacion",
        colorPrimario:"#57C278", 
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo:"Frotn End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2"
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8"
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario:"#FAE9F5h"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9"
      },
      {
        id: uuid(),
        titulo:"Innovacion y Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario:"#FFEEDF"
      } 
    ])


  const cambiarMostrar = () =>{
    actualizarMostrar(!mostarFormulario)
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
    return
  }

  //eliminar colaborador 

  const eliminarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)

  }

  //actualizar color de equipo

  const actualizarColor = (color, id) =>{
    console.log('actualizar: ', color, id)
    const equiposActualizado = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarequipos(equiposActualizado)
  }

  //crear Equipo

  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarequipos([...equipos,{...nuevoEquipo, id: uuid()}])
  }


  //like

  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador

    })

    actualizarColaboradores(colaboradoresActualizados)

  }

  

  return (
    <div>
      <Header/>

      { 
        mostarFormulario &&  <Formulario
          equipos={equipos.map((equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
       }
     
     <MiOrg cambiarMostrar={cambiarMostrar}/>
     
      {
        equipos.map((equipo)=> <Equipo
         datos={equipo} 
         key={equipo.titulo}
         colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
         eliminarColaborador={eliminarColaborador}
         actualizarColor={actualizarColor}
         like={like}
        /> 
        )
      }

      <Footer/>


    </div>
  );
}

export default App;
