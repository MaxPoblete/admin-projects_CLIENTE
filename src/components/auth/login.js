import React from 'react';

const Login  = () => {

    const onChange = () =>{
        
    }
    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>iniciar session</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tu Email"
                            onChange={onChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;