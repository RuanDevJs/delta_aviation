import React from 'react';
import { Link } from 'react-router-dom';

import product_img_1 from "../../../assets/images/product/unknown (2).svg";
import Button from '../../../Components/ButtonBuy';
import { Container, Image, ProductPrice, ProductTitle, Produtos, Title, Wrap } from "./style";

function Produto() {
    const data = [
        {
            title: "GNS 530",
            img: product_img_1,
            preco: 50000
        },
        {
            title: "GNS 530",
            img: product_img_1,
            preco: 50000
        },
        {
            title: "GNS 530",
            img: product_img_1,
            preco: 50000
        },
        {
            title: "GNS 530",
            img: product_img_1,
            preco: 50000
        },
        {
            title: "GNS 530",
            img: product_img_1,
            preco: 50000
        },
        {
            title: "GNS 530",
            img: product_img_1,
            preco: 50000
        }
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
                            <Button as={Link} to={`/produto/${title.split(' ').join('')}`}>Comprar</Button>
                        </Wrap>
                    )
                })}
            </Container>
        </Produtos>
    )
}

export default Produto;
