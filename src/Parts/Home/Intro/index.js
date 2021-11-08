import React from "react";
import Button from "../../../Components/Button";

import Lottie from "react-lottie";

import icon from "../../../assets/lotties/57545-plane.json";
import { Contaienr, Left, Right, Subtitle, Title } from "./style";

export default function Intro() {
  return (
    <Contaienr>
      <Left>
        <Title style={{ color: "#c2c2c2", fontWeight: "200" }}>
          Produtos de Alta Qualidade
          <Title style={{ fontSize: "50px" }}>Delta Aviation Store</Title>
        </Title>
        <Subtitle>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
          beatae fugit laborum quos repellat nisi tempora consectetur obcaecati
          numquam aspernatur assumenda omnis vel, voluptas in eveniet odit
          reprehenderit eos rerum fuga?
        </Subtitle>
        <Button>Comprar</Button>
      </Left>
      <Right>
        <Lottie
          options={{
            animationData: icon,
            autoplay: true,
          }}
          width={460}
          height={360}
          style={{ borderRadius: "50px" }}
        />
      </Right>
    </Contaienr>
  );
}
