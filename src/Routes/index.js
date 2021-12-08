import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from '../Pages/Home';
import Notfound from '../Pages/Notfound';
import Product from '../Pages/Product/Product';
import Categorias from '../Pages/Category';
import Login from '../Pages/Login';
import Cadastrar from '../Pages/Cadastrar';
import Sobre from '../Pages/Sobre';
import Contato from '../Pages/Contato';
import Footer from '../Components/Footer';
import Perfil from '../Pages/Perfil';
import Admin from '../Pages/Admin';

export default function Routes() {
    return (
        <>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/produto/:id" component={Product} />
            <Route path="/categoria/:category" component={Categorias} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastrar} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
            <Route path="/user/:name" component={Perfil} />
            <Route path="/admin" component={Admin} />
            <Route component={Notfound} />
            </Switch>
        </>
        
    )
}
