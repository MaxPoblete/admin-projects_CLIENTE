import React from 'react';
import Login from './components/auth/login';
import NuevaCuenta from  './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';



import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/TareaState';
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/authContext/authState'



import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return(
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
              <Route exact path="/proyectos" component={Proyectos}/>
            </Switch>
          </Router>
        </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
    );
  }

export default App;
