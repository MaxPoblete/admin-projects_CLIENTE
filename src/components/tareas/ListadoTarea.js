import React, { Fragment, useContext } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Tarea  from '../tareas/Tarea';
import ProyectoContext from '../../context/proyectos/ProyectoContex';
import TareaContext from '../../context/tareas/TareaContext';



const ListadoTareas= () => {

    //extraer proyectos de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const {proyecto, eliminarProyecto} = proyectoContext;

    //Obtener las tareas del proyecto
    const tareasContext  = useContext(TareaContext);
    const {tareasProyecto} = tareasContext;
    
    //si no hay proyectos 
    if(!proyecto) return <h2>selecciona un proyecto</h2>

    const [proyectoActual] = proyecto


    //Eliminar un Proyecto
    const onclickEliminar = () =>{
        eliminarProyecto(proyectoActual.id);
    }

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onclickEliminar}
                >Eliminar Proyecto
            </button>
            
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? 
                (<li className="tarea"><p>no hay tareas</p></li>)
                :
                <TransitionGroup>
                {tareasProyecto.map(tarea => (
                    <CSSTransition
                    key={tarea.id}
                    timeout={300}
                    classNames="tarea"
                    >
                        <Tarea
                        tarea={tarea}
                    />
                    </CSSTransition>
                ))}
                </TransitionGroup>
                }
            </ul>

        </Fragment>
    );
}

export default ListadoTareas