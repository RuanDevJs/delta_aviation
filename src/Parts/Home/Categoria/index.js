import React from "react";
import Slider from "react-slick";

import categoria_image from "../../../assets/images/category/preco-aeronaves-monomotor-01.png";
import bimotor from "../../../assets/images/category/skycourier_3_free_big.png";
import turbopropulsor from "../../../assets/images/category/novo-turboelice-da-embraer-tpng-nasce-adaptado-para-novas-tecnologias-e-com-experiencia-de-jato-1631885866035_v2_450x337.png";
import jato from "../../../assets/images/category/images.png";

import { Categoria, CategoryArea, CategoryTitle, Title } from "./style";
import { Link } from "react-router-dom";

function Categorias() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  const categoria = [
    {
      title: "Monomotor",
      image: categoria_image,
    },
    {
      title: "Bimotor",
      image: bimotor,
    },
    {
      title: "Turbopropulsor",
      image: turbopropulsor,
    },
    {
      title: "Jato",
      image: jato,
    },
  ];

  return (
    <Categoria>
      <Title>Categorias</Title>
      <Slider {...settings} pauseOnFocus>
        {categoria.map(({ title, image }) => {
          return (
            <CategoryArea key={title}>
              <img src={image} alt={title} />
              <CategoryTitle as={Link} to={`/categoria/${title}`} style={{textAlign: "center", display: "block"}}>
                {title}
              </CategoryTitle>
            </CategoryArea>
          );
        })}
      </Slider>
    </Categoria>
  );
}

export default Categorias;
