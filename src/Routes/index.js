import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from '../Pages/Home';
import Notfound from '../Pages/Notfound';
import Product from '../Pages/Product/Product';
import Categorias from '../Parts/Home/Categoria';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/produto/:id" component={Product} />
            <Route path="/categoria/:type" component={Categorias} />
            <Route component={Notfound} />
        </Switch>
    )
}
