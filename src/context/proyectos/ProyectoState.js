import React, { useReducer } from 'react';

import {v4 as uuid} from 'uuid'

import proyectoContext from './ProyectoContex';
import proyectoReducer from './ProyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
}from '../../types';


const ProyectoState = props =>{

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual'},
        { id: 2, nombre: 'Intranet'},
        { id: 3, nombre: 'Diseño de Sitios Web'},
        { id: 4, nombre: 'API REST nodeJS'}
    ]
    
    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null
    }

    //dispaches para ejecupar las aciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //serie de funciones para CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    // obtener los proyectos 
    const obtenerProyectos = () =>{
        dispatch({
            type :OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //agregar nuevo proyecto
    const agregarProyecto = proyecto => {

        //agregar id A proyecto
        proyecto.id = uuid();

        //insertar el proyecto en el state
        dispatch({
            type:AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //validar formulario por errores
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Eliminar Proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
        value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorformulario: state.errorformulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
            
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;