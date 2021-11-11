import React, { useEffect, useState } from "react";

import { Redirect, useParams } from "react-router";
import { Categorias, Container, Title, Wrap } from "./style";

import gns530 from "../../assets/images/product/unknown (2).svg";
import pneu from "../../assets/images/product/pneu.png";
import seletoraC152 from "../../assets/images/product/unknown.png";
import compensador from "../../assets/images/product/compensador.png";
import Governador from "../../assets/images/product/governador.png";
import pt6 from "../../assets/images/product/pt6.png";
import Boostpump from "../../assets/images/product/boots.png";
import Cremalheira from "../../assets/images/product/cremalheira.png";
import Header from "../../Components/Header";
import Button from "../../Components/Button";

export default function Categoria() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const data = [
    {
      title: "GNS 530",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
              beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: gns530,
      categoria: "Monomotor",
    },
    {
      title: "Pneu 235x45",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
              beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: pneu,
      categoria: "Monomotor",
    },
    {
      title: "Seletora c152",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
              beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: seletoraC152,
      categoria: "Monomotor",
    },
    {
      title: "Compensador lateral",
      subtitle: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
              beatae fugit laborum quos repellat nisi tempora consectetur obcaecati
              numquam aspernatur assumenda omnis vel, voluptas in eveniet odit
              reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: compensador,
      categoria: "Bimotor",
    },
    {
      title: "Embandeirador",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
              beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Governador,
      categoria: "Bimotor",
    },
    {
        title: "GNS 530",
        subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
                beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
        preco: 50000,
        image: gns530,
        categoria: "Bimotor",
      },
    {
      title: "PT6",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
              beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: pt6,
      categoria: "Turbopropulsor",
    },
    {
      title: "Cremalheira",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
              beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Cremalheira,
      categoria: "Turbopropulsor",
    },
    {
      title: "Boostpump",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
              beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Boostpump,
      categoria: "Turbopropulsor",
    },
  ];

  useEffect(() => {
    const filterProducts = data.filter(({ categoria }) => {
      return categoria === category;
    });

    setProducts(filterProducts);
    setLoading(false);
  }, []);

  if(!loading && products.length <= 0){
    return(
      <Redirect to="/*" />
    )
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Categorias>
        <Title>{category}</Title>
        <Container>
          {products.map(({ title, image, preco }) => {
            return (
              <Wrap>
                <img src={image} alt={title}/>
                <h2>{title}</h2>
                <p>R$ {preco},00</p>
                <Button>Comprar</Button>
              </Wrap>
            );
          })}
        </Container>
      </Categorias>
    </>
  );
}
