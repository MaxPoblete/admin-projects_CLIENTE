import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const Login  = () => {

    //state para iniciar session
    const[usuario, guardarUsuario]= useState({
        email: '',
        password:''
    });

    // extraer de usuario 
    const {email, password}= usuario;


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

        //pasarlo al action
    }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>iniciar session</h1>
                <form
                onSubmit={onsubmit}
                >
                    
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

                    <div className="">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="iniciar session"></input>
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}
export default Login;