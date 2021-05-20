//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';


//Componentes
import App from './App';

import Datos from './components/Datos';
import Informacion from './components/Informacion';
import Suscripcion from './components/Suscripcion';
import Page404 from './components/Page404';


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/datos" component={Datos} />
            <Route exact path="/informacion" component={Informacion} />
            <Route exact path="/" component={Suscripcion} />
            <Route exact component={Page404} />
        </Switch>
    </App>

export default AppRoutes;

