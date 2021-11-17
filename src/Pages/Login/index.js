import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";

import Button from "../../Components/Button";
import Footers from "../../Components/Footer";
import Header from "../../Components/Header";
import Message from "../../Components/Message";
import { UserContext } from "../../Contexts/User.js";

import { Container, Input, Label, Wrap } from "./styles";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState(null);
  const history = useHistory();

  const { Login, setAuthenticated } = useContext(UserContext);

  async function Authenticate() {
    const rows = await Login({ email, senha });
    setLoading(true);

    if (rows.length) {
      setText('');
      setLoading(false);
      setAuthenticated(true);
      window.localStorage.setItem("id", rows[0]._id);
      history.push('/');
    } else {
      setLoading(false);
      setText("Email/senha não existe!");
    }
  }

  return (
    <>
      <Header />
      <section id="login">
        <Container>
          <Wrap>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Wrap>
          <Wrap>
            <Label>Senha</Label>
            <Input
              type="password"
              placeholder="Sua senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </Wrap>
          <Button onClick={Authenticate}>Entrar</Button>
          {loading && <p>Carregando</p>}
          {!loading && <Message text={text}/> }
        </Container>
      </section>
      <Footers />
    </>
  );
}
