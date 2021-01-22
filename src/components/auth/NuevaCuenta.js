import React,{useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/authContext/authContext'

const NuevaCuenta  = (props) => {

    //extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;

    //en caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() =>{
        if(autenticado){
            props.history.push('/proyectos')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    },[mensaje, autenticado, props.history]);

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

        if(nombre.trim() === '' ){
            mostrarAlerta('Ingrese nombre Es Obligaririo', 'alerta-error');
            return;
        }
        if(email.trim() === '' ){
            mostrarAlerta('Ingrese Email Es Obligaririo', 'alerta-error');
            return;
        }
        if(password.trim() === '' ){
            mostrarAlerta('Ingrese Password Es Obligaririo', 'alerta-error');
            return;
        }
        //password minimo de 6 carecteres
        if(password.length < 6 ){
            mostrarAlerta('La password debe tener al menos 6 caracteres','alerta-error')
            return;
        }

        //los dos password sean iguales 
        if(confirmar.trim() === ''){
            mostrarAlerta('ingrese confirmar password','alerta-error');
        }
        if(confirmar !== password){
            mostrarAlerta('Los password no coinciden ','alerta-error');
        }else{
            mostrarAlerta('agregando cuentan', 'alerta-ok')
        }

        //pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })
    }

    return(
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
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