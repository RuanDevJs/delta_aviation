import React from 'react'
import Header from '../../Components/Header';
import Categorias from '../../Parts/Home/Categoria';
import Intro from '../../Parts/Home/Intro';
import Produtos from '../../Parts/Home/Produtos';
import Recomendacao from '../../Parts/Home/Recomendacao';

function Home() {
    return (
        <>
            <Header />
            <Intro />
            <Categorias />
            <Produtos />
            <Recomendacao />
        </>
    )
}

export default Home;
