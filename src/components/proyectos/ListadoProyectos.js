import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/ProyectoContex';
import {CSSTransition, TransitionGroup} from 'react-transition-group'


const ListadoProyectos = () =>{

    //extraer proyectos de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectoContext;

    //obtener proyectos cuando carga el componente
    useEffect(() =>{
        obtenerProyectos();
        // eslint-disable-next-line 
    },[]);
    
    //revisar si proyecto tiene contenido
    if(proyectos.length === 0) return <p><strong>No hay Proyectos, Comienza creando Uno</strong></p>

 
    return(
        <ul className="listado-proyecto">
            <TransitionGroup>
            {proyectos.map(proyecto =>(
                <CSSTransition
                key={proyecto.id}
                timeout={200}
                classNames="tarea"
                >
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;