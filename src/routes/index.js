import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home'
import Sobre from '../pages/sobre'
import NotFound from '../pages/notFound'


const Routes = () => {
    return(
        <Switch>
            
            <Route exact path='/'>
                <Home/>
            </Route>
            
            <Route>
                <NotFound/>
            </Route>

        </Switch>
    )
}

export default Routes