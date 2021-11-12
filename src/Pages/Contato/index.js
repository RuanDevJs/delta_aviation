import React from "react";
import Lottie from "react-lottie";

import svg from "../../assets/lotties/57545-plane.json";

import Button from "../../Components/Button";
import Header from "../../Components/Header";

import { Container, Input, Label, Left, Right, Wrap } from "./styles";

export default function Contato() {
  return (
    <>
      <Header />
      <Container>
        <Left>
        <Wrap>
          <Label>Nome</Label>
          <Input type="text" placeholder="Seu nome" />
        </Wrap>
        <Wrap>
          <Label>Assunto</Label>
          <Input type="password" placeholder="Qual o assunto ?" />
        </Wrap>
        <Wrap>
          <Label>Mensagem</Label>
          <Input as="textarea" type="password" placeholder="Qual o assunto ?" />
        </Wrap>
        <Button>Enviar</Button>
        </Left>
        <Right>
        <Lottie
            options={{
                animationData: svg
            }}
            height={460}
            width={460}
            isClickToPauseDisabled={true}
        />
        </Right>
      </Container>
    </>
  );
}
