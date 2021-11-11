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
        
        if(rows.length){
            setLoading(false);
            setAuthenticated(true);
            window.localStorage.setItem("id", rows[0]._id);
            history.push("/");
        }else{
            setLoading(false);
            setAuthenticated(true);
            return "Email/Senha não existe!";
        }
    }

    function logOut(){
        setAuthenticated(false);
        window.localStorage.removeItem("id");
    }

    return {Login, authenticated, loading, logOut}
}