import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";

import Header from "../../Components/Header";
import { Container, Left, Right, Image, Title, Subtitle } from "./styles";

import gns530 from "../../assets/images/product/unknown (2).svg";
import pneu from "../../assets/images/product/pneu.png";
import seletoraC152 from "../../assets/images/product/unknown.png";
import compensador from "../../assets/images/product/compensador.png";
import Governador from "../../assets/images/product/governador.png";
import pt6 from "../../assets/images/product/pt6.png";
import Boostpump from "../../assets/images/product/boots.png";
import Cremalheira from "../../assets/images/product/cremalheira.png";
import Categoria from "../../Parts/Home/Categoria";
import Button from "../../Components/Button";
import Produto from "../../Parts/Home/Produtos";
import Categorias from "../../Parts/Home/Categoria";
import { ProductPrice } from "../../Parts/Home/Produtos/style";

function Product() {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const data = [
    {
      title: "GNS530",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: gns530,
    },
    {
      title: "Pneu 235x45",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: pneu,
    },
    {
      title: "Seletora c152",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: seletoraC152,
    },
    {
      title: "Compensador lateral",
      subtitle: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati
            numquam aspernatur assumenda omnis vel, voluptas in eveniet odit
            reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: compensador,
    },
    {
      title: "Embandeirador",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Governador,
    },
    {
      title: "PT6",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: pt6,
    },
    {
      title: "Cremalheira",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Cremalheira,
    },
    {
      title: "Boostpump",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Boostpump,
    },
  ];

  useEffect(() => {
    const dataProduct = data.find(({ title }) => {
      return title === id;
    });
    setLoading(false);
    setValue(dataProduct);
  }, []);

  if(!loading && !value){
    return(
      <Redirect to="/"/>
    )
  }

  return (
    <>
      <Header />
      {loading && <p></p>}
      {!loading && (
        <Container>
          <Left>
            <Image src={value.image} />
          </Left>
          <Right>
            <Title>{value.title}</Title>
            <ProductPrice style={{ color: "#c2c2c2", fontWeight: 300, marginBottom: "10px" }}>
              R$ {value.preco},00
            </ProductPrice>
            <Subtitle>{value.subtitle}</Subtitle>
            <Button>Comprar</Button>
          </Right>
        </Container>
      )}
    </>
  );
}

export default Product;
