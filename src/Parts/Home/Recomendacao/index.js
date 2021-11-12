import React from "react";
import Button from "../../../Components/Button";

import compensador from "../../../assets/images/product/compensador.png";
import Governador from "../../../assets/images/product/governador.png";
import pt6 from "../../../assets/images/product/pt6.png";
import Boostpump from "../../../assets/images/product/boots.png";
import Slider from "react-slick";

import { Container, Line, Product, ProductRate, ProductTitle } from "./style";
import ButtonBuy from "../../../Components/ButtonBuy";
import { Link } from "react-router-dom";

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
      title: "Compensador lateral",
      img: compensador,
      preco: "30.000",
  },
  {
      title: "Embandeirador",
      img: Governador,
      preco: "5.000",
  },
  {
      title: "PT6",
      img: pt6,
      preco: "256.000",
  },
  {
      title: "Boostpump",
      img: Boostpump,
      preco: "5.000",
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
              <Link to={`/produto/${title}`}>
              <img src={img} alt={title} width={300} />
                            </Link>
              
              <ProductTitle>{title}</ProductTitle>
              <ProductRate>5/5</ProductRate>
              <ButtonBuy as={Link} to={`/produto/${title}`}>Comprar</ButtonBuy>
            </Product>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Recomendacao;
