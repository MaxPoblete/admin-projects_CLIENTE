import React, { useReducer } from 'react';

import {v4 as uuid} from 'uuid'

import proyectoContext from './ProyectoContex';
import proyectoReducer from './ProyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
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
        errorformulario: false
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
        proyecto.id = uuid;

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

    return (
        <proyectoContext.Provider
        value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorformulario: state.errorformulario,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError
            
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;