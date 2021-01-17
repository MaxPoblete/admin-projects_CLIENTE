import React,{useContext, useState, useEffect} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContex';

import TareaContext from '../../context/tareas/TareaContext';


const FormTarea = () =>{

    //extraer si un proyecto esta activo
    const proyectosContex  = useContext(ProyectoContext);
    const {proyecto} = proyectosContex;

    //Obtener las tareas del proyecto
    const tareasContext  = useContext(TareaContext);
    const {tareaSeleccionada,  errorTarea, agregarTarea,
    validarTarea , obtenerTareas, actualizarTarea, limpiarTarea} = tareasContext;

    //effect que detecta una tarea seleccionada para editar
    useEffect(() =>{
        if(tareaSeleccionada !== null){
            guardarTarea(tareaSeleccionada)
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    },[tareaSeleccionada])

    //state del formulario 
    const [tarea, guardarTarea] = useState({
        nombre:''
    })

    const {nombre} = tarea;

    //si no hay proyectos 
    if(!proyecto) return null;

    //array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto

    //leer los datos del formulario 
    const handlerChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value 
        })
    }

    const onsubmit = e =>{
        e.preventDefault();

        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        // se revisa si la accion es editar o agregar
        if(tareaSeleccionada === null){
            //agregar la nueva tarea al state
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else{
            //ectualizar tarea existente
            actualizarTarea(tarea)

            //elimina tarea seleccionada del state
            limpiarTarea();
        }

        //Obtener las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // reiniciar el from
        guardarTarea({
            nombre: ''
        })
    }

    return(
        <div className="formulario">
            <form
                onSubmit={onsubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handlerChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaSeleccionada? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errorTarea? <p className="mensaje error">el 
            nombre de la tarea es Obligatorio</p> : null}
        </div>
    );
}
export default FormTarea;