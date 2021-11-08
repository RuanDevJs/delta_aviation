import React from "react";
import Button from "../../../Components/Button";

import product_img_1 from "../../../assets/images/product/unknown (2).svg";
import Slider from "react-slick";

import { Container, Line, Product, ProductRate, ProductTitle } from "./style";
import ButtonBuy from "../../../Components/ButtonBuy";

function Recomendacao() {
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
  };

  const data = [
    {
      title: "GNS 530",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "Pneu 235x45",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "Seletora c152",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "Compensador lateral",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "GPS",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "Embandeirador",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "PT6",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "Boostpump",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "Cremalheira",
      img: product_img_1,
      preco: 50000,
    },
    {
      title: "GPS",
      img: product_img_1,
      preco: 50000,
    },
  ];

  return (
    <Container id="recomendacao">
      <Line>
        <Button style={{ borderRadius: "4px", width: "260px" }}>
          Recomendação
        </Button>
      </Line>
      <Slider {...settings} focusOnSelect>
        {data.map(({ title, img }, index) => {
          return (
            <Product key={index}>
              <img src={img} alt={title} />
              <ProductTitle>{title}</ProductTitle>
              <ProductRate>5/5</ProductRate>
              <ButtonBuy>Comprar</ButtonBuy>
            </Product>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Recomendacao;
