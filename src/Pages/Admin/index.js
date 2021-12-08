import React, {useState, useEffect} from 'react';
import Header from '../../Components/Header';

import axios from "../../services/axios";
import { Center, Container, Label, Left, Right, Wrap } from './style';

export default function Admin() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async()=> {
            const res = await (await axios.get('/user')).data;
            setData(res);
            setLoading(false);
        })();
    }, []);

    if(loading){
        return null;
    }

    return (
        <>
            <Header />
            <Container>
                {data.map(List)}
            </Container>
        </>
    )
}

const List = ({_id, email, senha}, index) => {
    const handleClick = async({target}, id) => {
        const removeUser = await (await axios.delete(`/user/${id}`)).status;
        alert("Usuário removiado!")
    }

    

    return(
        <Wrap style={{background: (index % 2) === 0 ?  "#f1f1f1" : "#f9f9f9", display: email === "lucaspema@gmail.com" ? "none" : "flex"}} key={index}>
          <Left>
            <Label>Email:</Label>
            <Label style={{fontWeight: "500"}}>{email}</Label>
          </Left>
          <Center>
            <Label style={{textAlign: "center", margin: "0 auto"}} onClick={(e) => handleClick(e, _id)}>Apagar</Label>
          </Center>
          <Right>
            <Label>Senha:</Label>
            <Label style={{fontWeight: "500"}}>{senha}</Label>
          </Right>
        </Wrap>
    )
} 