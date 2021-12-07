import React, { useCallback, useEffect, useState } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";

import useLocalStorage from "../../hooks/useLocalStorage";
import axios from "../../services/axios";
import { Container, Input, Title, Wrap } from "./style";

export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const id = useLocalStorage("id");

  useEffect(() => {
    if (!loading) {
      const item = document.querySelectorAll(".wrap");
      item.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("active");
        }, 300 * index);
      });
    }
  }, [loading]);

  useEffect(() => {
    (async () => {
      const [rows] = (await axios.get(`/user/${id}`)).data;
      setData(rows);
      setLoading(false);
    })();
  }, [id]);

  const handleClick = async() => {
    setLoading(true);
    const rows = await axios.put(`/user/${data._id}`, {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
    });
    setLoading(false);
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Minha Conta</Title>
        <Wrap className="wrap">
          <Input
            placeholder={data.nome}
            type="text"
            onChange={(e) => setData({ ...data, nome: e.target.value })}
          />
        </Wrap>
        <Wrap className="wrap">
          <Input
            placeholder={data.email}
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Wrap>
        <Wrap className="wrap">
          <Input
            placeholder="Sua senha"
            type="password"
            onChange={(e) => setData({ ...data, senha: e.target.value })}
          />
        </Wrap>
        <Button onClick={handleClick}>Editar</Button>
      </Container>
    </>
  );
}
