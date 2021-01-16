import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/ProyectoContex';


const ListadoProyectos = () =>{

    //extraer proyectos de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectoContext;

    //obtener proyectos cuando carga el componente
    useEffect(() =>{
        obtenerProyectos();
    },[]);
    
    //revisar si proyecto tiene contenido
    if(proyectos.length === 0) return null

 
    return(
        <ul className="listado-proyecto">
            {proyectos.map(proyecto =>(
                <Proyecto
                 key={proyecto.id}
                 proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;