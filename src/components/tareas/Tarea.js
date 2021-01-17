import React,{useContext} from 'react';
import TareaContext from '../../context/tareas/TareaContext';
import ProyectoContext from '../../context/proyectos/ProyectoContex';


const Tarea = ({tarea}) => {

    //Obtener las tareas del proyecto
    const tareasContext  = useContext(TareaContext);
    const {eliminartarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareasContext;

    //extraer si un proyecto esta activo
    const proyectosContex  = useContext(ProyectoContext);
    const {proyecto} = proyectosContex;


    //extraer el proyecto 
    const [proyectoActual] = proyecto;
    console.log(proyectoActual.id)

    //funcion para eliminar tarea cuando el usuario presione eliminar 
    const tareaEliminar = (id) => {
        eliminartarea(id);
        obtenerTareas(proyectoActual.id)
        
    }
    //funcion que modifica el estado de las tareas
    const cambiarEstado = () => {
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    //seleccionar tarea actual cuando el usuario decea editarla 
    const seleccionarTarea = (tarea) => {
        guardarTareaActual(tarea);
        
    }

    return(
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado?
                (
                    <button
                        type="text"
                        className="completo"
                        onClick={() => cambiarEstado(tarea)}
                    >completo </button>
                )
                :
                (
                    <button
                        type="text"
                        className="incompleto"
                        onClick={() => cambiarEstado(tarea)}
                    >Incompleto </button>
                ) 
            
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea) }
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;