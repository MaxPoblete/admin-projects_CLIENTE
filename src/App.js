import React from 'react';
import Login from './components/auth/login';
import NuevaCuenta from  './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/ProyectoState';

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'

function App() {
  return(
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path="/proyectos" component={Proyectos}/>
        </Switch>
      </Router>
    </ProyectoState>
    );
  }

export default App;
