import axios from "axios";
import React, { useContext, useState } from "react";

import Button from "../../Components/Button";
import Header from "../../Components/Header";
import {UserContext} from "../../Contexts/User.js";

import { Container, Input, Label, Wrap } from "./styles";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);  

  const {Login} = useContext(UserContext);

  async function Authenticate(){
    const rows = await Login({email, senha});
  }

  return (
    <>
      <Header />
      <section id="login">
        <Container>
          <Wrap>
            <Label>Email</Label>
            <Input type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} />
          </Wrap>
          <Wrap>
            <Label>Senha</Label>
            <Input type="password" placeholder="Sua senha" onChange={(e) => setSenha(e.target.value)} />
          </Wrap>
          <Button onClick={Authenticate}>Entrar</Button>
        </Container>
      </section>
    </>
  );
}
