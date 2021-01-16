import React from 'react';

const Barra = () =>{
    return(
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Max Poblete</span></p>
        
            <nav className="nav-principal">
                <a href="#!">Cerrar Session</a>
            </nav>
        </header>
    );
}
export default Barra;