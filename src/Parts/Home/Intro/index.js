import React, { useEffect, useState, useRef } from "react";
import Button from "../../../Components/Button";

import Lottie from "react-lottie";

import icon from "../../../assets/lotties/57545-plane.json";
import { Contaienr, Left, Right, Subtitle, Title } from "./style";
import CustomLink from "../../../Components/CustomLink";

export default function Intro() {
  const button = useRef();
  useEffect(() => {
    const animate = document.querySelectorAll("[data-animate]");
    animate.forEach((el, index) => {
        el.classList.add("active");
    });
  }, []);

  function handleClick(e){
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const distanceScrollElement = document.querySelector(href).offsetTop;

    window.scrollBy({
      top: distanceScrollElement,
      behavior: 'smooth'
    })
  }

  return (
    <Contaienr>
      <Left>
        <Title style={{ color: "#c2c2c2", fontWeight: "200" }} data-animate>
          Produtos de Alta Qualidade
          <Title as="p" style={{ fontSize: "50px" }} data-animate>Delta Aviation Store</Title>
        </Title>
        <Subtitle data-animate>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
          beatae fugit laborum quos repellat nisi tempora consectetur obcaecati
          numquam aspernatur assumenda omnis vel, voluptas in eveniet odit
          reprehenderit eos rerum fuga?
        </Subtitle>
        <CustomLink href="#produtos" onClick={handleClick}>Comprar</CustomLink>
      </Left>
      <Right  data-animate>
        <Lottie
          options={{
            animationData: icon,
            autoplay: true,
          }}
          isClickToPauseDisabled={true}
          width={460}
          height={360}
          style={{ borderRadius: "50px" }}
        />
      </Right>
    </Contaienr>
  );
}
