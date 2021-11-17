import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "../services/axios";

export default function useAuthenticate(){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const id = localStorage.getItem("id");

        if(id){
            setLoading(false);
            setAuthenticated(true);
        }

    }, []);

    async function Login({email, senha}){
        
        const rows = await (await axios.post("/login", {
            email: email,
            senha: senha
        })).data;
        
        return rows;
    }

    async function StoreUser({nome, email, senha}){
        try{
            const rows = await (await axios.post("/user", {
                email: email,
                nome: nome,
                senha: senha
            })).data;
            
            return rows;
        }catch(e){
            return e;
        }
    }

    function logOut(){
        setAuthenticated(false);
        window.localStorage.removeItem("id");
        history.push("/login");
    }

    return {Login, authenticated, loading, logOut, setAuthenticated, StoreUser}
}