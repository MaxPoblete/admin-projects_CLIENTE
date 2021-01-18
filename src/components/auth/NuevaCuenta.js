import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const NuevaCuenta  = () => {

    //state para iniciar session
    const[usuario, guardarUsuario]= useState({
        nombre:'',
        email: '',
        password:'',
        confirmar:''

    });

    // extraer de usuario 
    const {nombre, email, password, confirmar}= usuario;


    const onChange = (e) =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario quiere iniciar session
    const onsubmit = e => {
        e.preventDefault();

        //validar que no haya campos basios

        //password minimo de 6 carecteres

        //los dos password sean iguales 

        //pasarlo al action
    }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Una Cuenta</h1>
                <form
                onSubmit={onsubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirma">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Registrar"></input>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Inicio Session
                </Link>

            </div>
        </div>
    );
}
export default NuevaCuenta;