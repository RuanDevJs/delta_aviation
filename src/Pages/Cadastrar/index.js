import React, { useContext, useState } from "react";
import { useHistory } from "react-router";

import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Message from "../../Components/Message";
import { UserContext } from "../../Contexts/User.js";

import { Container, Input, Label, Wrap } from "./style";

export default function Cadastrar() {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const [loading, setLoading] = useState(false);
  const [text, setText] = useState(null);
  const history = useHistory();

  const { StoreUser, setAuthenticated } = useContext(UserContext);

  async function CreateUser() {
    const rows = await StoreUser({ nome, email, senha });
    setLoading(true);

    if (rows._id) {
      setLoading(false);
      setAuthenticated(true);
      window.localStorage.setItem("id", rows._id);
      history.push("/");
    } else {
      setLoading(false);
      setText("Este e-mail já existe!");
    }
  }

  return (
    <>
      <Header />
      <section id="cadastro">
        <Container>
        <Wrap>
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Seu nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </Wrap>
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
          <Button onClick={CreateUser}>Entrar</Button>
          {loading && <p>Carregando</p>}
          {!loading && <Message text={text} />}
        </Container>
      </section>
    </>
  );
}
