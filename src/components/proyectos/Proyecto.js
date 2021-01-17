import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContex';

import TareaContext from '../../context/tareas/TareaContext';


const Proyecto = ({proyecto}) =>{

    //Obteniendo el estado proyecto
    const proyectosContex  = useContext(ProyectoContext);
    const {proyectoActual} = proyectosContex;

        //Obtener las tareas del proyecto
        const tareasContext  = useContext(TareaContext);
        const {obtenerTareas} = tareasContext;

    // funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); //filtrar por proyecto actual
        obtenerTareas(id); //Filtrar las tareas cuando se de click
    }

    return(
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}

export default Proyecto;