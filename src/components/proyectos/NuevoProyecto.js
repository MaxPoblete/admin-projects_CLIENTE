import React, { Fragment,useState } from 'react';

const NuevoProyecto = () =>{

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

        //agregar al state

        //reiniciar el form
    }

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>
            
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
        </Fragment>
    );
}

export default NuevoProyecto;