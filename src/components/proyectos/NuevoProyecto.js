import React, { Fragment,useState, useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContex';

const NuevoProyecto = () =>{

    //Obteniendo el estado del formulario
    const proyectosContex  = useContext(ProyectoContext);
    const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError}
     = proyectosContex;

 
    //state proyecto
    const [proyecto, guardarProyecto]= useState({
        nombre:''
    });

    //lee el contenido del input 
    const onchageProyecto = (e) =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : [e.target.value]
        });
    }

    const{nombre} = proyecto;

    //cuando el usuario envie el proyecto
    const onsubmitProyecto = e =>{
        e.preventDefault();

        //validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto)

        //reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }
   

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >Nuevo Proyecto

            </button>
            
            {formulario ?
            
            (
                <form
                className="formulario-nuevo-proyecto"
                onSubmit={onsubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onchageProyecto}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="agregar Proyecto"
                />

            </form>
            )
            :null
            }

            { errorformulario?
            <p className="mensaje error">El Nombre del Proyecto es Obligatorio</p>
            : null
            } 
        </Fragment>
    );
}

export default NuevoProyecto;