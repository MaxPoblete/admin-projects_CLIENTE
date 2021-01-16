import React, { Fragment } from 'react';
import Tarea  from '../tareas/Tarea';

const ListadoTareas= () => {

    const tareasProyecto = [

        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Hosting', estado: false},
        {nombre: 'Elegir Plataforma de pago', estado: true},
    ]
    return(
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? 
                (<li className="tarea"><p>no hay tareas</p></li>)
                :
                tareasProyecto.map(tarea => (
                    <Tarea
                      tarea={tarea}
                    />
                ))
                }
            </ul>

            <button
            type="button"
            className="btn btn-eliminar"
            >Eliminar Proyecto</button>
        </Fragment>
    );
}

export default ListadoTareas