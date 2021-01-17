import React , {useReducer}from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';

import {v4 as uuid} from 'uuid'


import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            {id:1, nombre: 'Elegir Plataforma web', estado: true, proyectoId : 1},
            {id:2, nombre: 'Elegir Colores iniciales', estado: false, proyectoId : 2},
            {id:3, nombre: 'Elegir Hosting en aws', estado: false, proyectoId : 3},
            {id:4, nombre: 'Elegir Plataforma de pago', estado: true, proyectoId : 4},
            {id:5, nombre: 'Elegir Plataforma movile', estado: true, proyectoId : 3},
            {id:6, nombre: 'Elegir Colores home', estado: false, proyectoId : 3},
            {id:7, nombre: 'Elegir Hosting ', estado: false, proyectoId : 1},
            {id:8, nombre: 'Elegir Plataforma de pago', estado: true, proyectoId : 2}
        ],
        tareasProyecto: null,
        errorTarea: false,
        tareaSeleccionada: null
    }

    //creando dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    //crear funciones 

    // obtener tareas de un proyecto
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload : proyectoId
        })
    }

    //agregar una tarea a proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuid();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //valida y mustra un error 
    const validarTarea = () =>{
        dispatch({
            type: VALIDAR_TAREA,
        })
    }

    //eliminar tarea 
    const eliminartarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //cambiar estado de tarea
    const cambiarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //extrae una tarea para edicion
    const guardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //edita modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type : ACTUALIZAR_TAREA,
            payload : tarea
        })
    }

    //elimina tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    return(
        <TareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasProyecto: state.tareasProyecto,
            errorTarea: state.errorTarea,
            tareaSeleccionada: state.tareaSeleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminartarea,
            cambiarEstadoTarea,
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea
        }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;
