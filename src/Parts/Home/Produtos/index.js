import React from 'react';
import { Link } from 'react-router-dom';

import gns530 from "../../../assets/images/product/unknown (2).svg";
import pneu from "../../../assets/images/product/pneu.png";
import seletoraC152 from "../../../assets/images/product/unknown.png";
import compensador from "../../../assets/images/product/compensador.png";
import Governador from "../../../assets/images/product/governador.png";
import pt6 from "../../../assets/images/product/pt6.png";
import Boostpump from "../../../assets/images/product/boots.png";
import Cremalheira from "../../../assets/images/product/cremalheira.png";

import Button from '../../../Components/ButtonBuy';
import { Container, Image, ProductPrice, ProductTitle, Produtos, Title, Wrap } from "./style";

function Produto() {
    const data = [
        {
            title: "GNS 530",
            img: gns530,
            preco: 50000
        },
        {
            title: "Pneu 235x45",
            img: pneu,
            preco: 50000
        },
        {
            title: "Seletora c152",
            img: seletoraC152,
            preco: 50000
        },
        {
            title: "Compensador lateral",
            img: compensador,
            preco: 50000
        },
        {
            title: "Embandeirador",
            img: Governador,
            preco: 50000
        },
        {
            title: "PT6",
            img: pt6,
            preco: 50000
        },
        {
            title: "Boostpump",
            img: Boostpump,
            preco: 50000
        },
        {
            title: "Cremalheira",
            img: Cremalheira,
            preco: 50000
        },
        {
            title: "GNS 530",
            img: gns530,
            preco: 50000
        },
    ]
    return (
        <Produtos>
            <Title>Disponíveis</Title>
            <Container>
                {data.map(({title, preco,img}, index) => {
                    return(
                        <Wrap key={index}>
                            <Image src={img} />
                            <ProductTitle>{title}</ProductTitle>
                            <ProductPrice>R$ {preco},00</ProductPrice>
                            <Button as={Link} to={`/produto/${title}`}>Comprar</Button>
                        </Wrap>
                        
                    )
                })}
            </Container>
        </Produtos>
    )
}

export default Produto;
