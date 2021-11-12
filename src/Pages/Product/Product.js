import React, { useEffect, useMemo, useState } from "react";
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

import Button from "../../Components/Button";
import { ProductPrice } from "../../Parts/Home/Produtos/style";

function Product() {
  const [name, setName] = useState("");
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const userId = useMemo(() => {
    const id = window.localStorage.getItem("id");
    if (id) {
      return id;
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if(userId.length){
          const data = await (
            await fetch(`https://api-deltaavitation.herokuapp.com/user/${userId}`)
          ).json();
          setName(data[0].nome);
          setLoading(false);
        }
      } catch {
        setLoading(false);
      }
    })();
  }, []);

  const data = [
    {
      title: "GNS 530",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: "5000",
      image: gns530,
    },
    {
      title: "Pneu 235x45",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: "2.500",
      image: pneu,
    },
    {
      title: "Seletora c152",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: "3.000",
      image: seletoraC152,
    },
    {
      title: "Compensador lateral",
      subtitle: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati
            numquam aspernatur assumenda omnis vel, voluptas in eveniet odit
            reprehenderit eos rerum fuga?`,
      preco: "30.000",
      image: compensador,
    },
    {
      title: "Embandeirador",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: "5.000",
      image: Governador,
    },
    {
      title: "PT6",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: "256.000",
      image: pt6,
    },
    {
      title: "Cremalheira",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: "4.000",
      image: Cremalheira,
    },
    {
      title: "Boostpump",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: "5.000",
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

  if (!loading && !value) {
    return <Redirect to="/*" />;
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
            <ProductPrice
              style={{
                color: "#c2c2c2",
                fontWeight: 300,
                marginBottom: "10px",
              }}
            >
              R$ {value.preco},00
            </ProductPrice>
            <Subtitle>{value.subtitle}</Subtitle>
            {!loading && name.length? (
               <a
               href={`https://wa.me/5531993944304?text=Olá! Me chamo ${name} e gostaria de auxílio para finalizar minha compra.`}
             >
               Comprar
             </a>
            ) : (
              <a
                href={`https://wa.me/5531993944304?text=Olá! Gostaria de auxílio para finalizar minha compra.`}
              >
                Comprar
              </a>
            )}
          </Right>
        </Container>
      )}
    </>
  );
}

export default Product;
