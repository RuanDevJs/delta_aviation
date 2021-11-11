import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import icon from "../../assets/images/icons/img.svg";

import {
  Announcement,
  AnnouncementLink,
  Center,
  Container,
  Image,
  Input,
  Left,
  Menu,
  MenuLink,
  NameLink,
  Right,
  Search,
  Wrap,
} from "./styles";

import gns530 from "../../assets/images/product/unknown (2).svg";
import pneu from "../../assets/images/product/pneu.png";
import seletoraC152 from "../../assets/images/product/unknown.png";
import compensador from "../../assets/images/product/compensador.png";
import Governador from "../../assets/images/product/governador.png";
import pt6 from "../../assets/images/product/pt6.png";
import Boostpump from "../../assets/images/product/boots.png";
import Cremalheira from "../../assets/images/product/cremalheira.png";
import { UserContext } from "../../Contexts/User";
import Button from "../Button";
import ButtonBuy from "../ButtonBuy";

export default function Header() {
  const [productValue, setProductValue] = useState();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const inputRef = useRef();
  const { authenticated, logOut } = useContext(UserContext);

  const userId = useMemo(() => {
    const id = window.localStorage.getItem("id");
    if (id) {
      return id;
    }
  }, []);

  useEffect(() => {
    (async () => {
      if(userId){
        try {
          const data = await (
            await fetch(`https://api-deltaavitation.herokuapp.com/user/${userId}`)
          ).json();
          setName(data[0].nome);
          setLoading(false);
        } catch {
          setLoading(false);
        }
      }
    })();
  }, []);

  const menu = [
    {
      title: "Home",
    },
    {
      title: "Sobre",
    },
    {
      title: "Produtos",
    },
    {
      title: "Contato",
    },
  ];
  const data = [
    {
      title: "GNS 530",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: gns530,
    },
    {
      title: "Pneu 235x45",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: pneu,
    },
    {
      title: "Seletora c152",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: seletoraC152,
    },
    {
      title: "Compensador lateral",
      subtitle: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati
            numquam aspernatur assumenda omnis vel, voluptas in eveniet odit
            reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: compensador,
    },
    {
      title: "Embandeirador",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Governador,
    },
    {
      title: "PT6",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: pt6,
    },
    {
      title: "Cremalheira",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Cremalheira,
    },
    {
      title: "Boostpump",
      subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et explicabo
            beatae fugit laborum quos repellat nisi tempora consectetur obcaecati numquam aspernatur assumenda omnis vel, voluptas in eveniet odit reprehenderit eos rerum fuga?`,
      preco: 50000,
      image: Boostpump,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    window.location = `/produto/${productValue}`;
  }

  return (
    <>
      <Announcement>
        {!loading && authenticated ? (
          <>
            <NameLink to="/painel">{name}</NameLink>
            <ButtonBuy onClick={logOut}>Sair</ButtonBuy>
          </>
        ) : (
          <>
            <AnnouncementLink to="/login">Login | </AnnouncementLink>{" "}
            <AnnouncementLink to="/cadastro"> Cadastro</AnnouncementLink>
          </>
        )}
      </Announcement>
      <Container>
        <Left>
          <Link to="/">
            <Image src={icon} />
          </Link>
        </Left>
        <Center>
          <Wrap>
            {menu.map(({ title }) => {
              return (
                <Menu key={title}>
                  <MenuLink to={`/${title === "Home" ? "" : title}`}>
                    {title}
                  </MenuLink>
                </Menu>
              );
            })}
          </Wrap>
        </Center>
        <Right>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              type="text"
              ref={inputRef}
              onChange={(e) => setProductValue(e.target.value)}
            />
          </form>
        </Right>
      </Container>
    </>
  );
}
