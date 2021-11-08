import React from "react";
import { Link } from "react-router-dom";
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
  Right,
  Search,
  Wrap,
} from "./styles";

export default function Header() {
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
  return (
    <>
      <Announcement>
        <AnnouncementLink to="/login">Login | </AnnouncementLink>
        <AnnouncementLink to="/login"> Cadastro</AnnouncementLink>
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
                  <MenuLink>{title}</MenuLink>
                </Menu>
              );
            })}
          </Wrap>
        </Center>
        <Right>
            <Input type="text" />
        </Right>
      </Container>
    </>
  );
}
