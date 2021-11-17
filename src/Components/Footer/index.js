import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "../../services/axios";

import { Home, Book, Phone, Person, Close } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { Footer, Wrap } from "./style";
import { UserContext } from "../../Contexts/User";

export default function Footers() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const {logOut, authenticated} = useContext(UserContext);

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

  function handleClick(e) {
    e.preventDefault();
    logOut();
  }

  return (
    <Footer>
      {!loading && authenticated ? (
        <Wrap>
          <Person htmlColor="#51C8C2" />
          <a href="#" to="/painel" onClick={handleClick}>
            {name}
          </a>
        </Wrap>
      ) : (
        <Wrap>
          <Person htmlColor="#51C8C2" />
          <Link to="/login">login</Link>
        </Wrap>
      )}

      <Wrap>
        <Home htmlColor="#51C8C2" />
        <Link to="/">Home</Link>
      </Wrap>
      {!loading && authenticated ? (
        <Wrap>
          <Person htmlColor="#51C8C2" />
          <a href="#" onClick={handleClick}>
            Sair
          </a>
        </Wrap>
      ) : (
        <Wrap>
          {" "}
          <Phone htmlColor="#51C8C2" />
          <Link to="/contato">Contato</Link>
        </Wrap>
      )}
    </Footer>
  );
}
