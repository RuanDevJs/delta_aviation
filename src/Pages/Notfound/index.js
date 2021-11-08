import React from 'react';
import icon from "../../assets/lotties/57545-plane.json";

import Lottie from "react-lottie";
import Header from '../../Components/Header';
import Categorias from '../../Parts/Home/Categoria';

export default function Notfound() {
    return (
        <>
            <Header />
            <Lottie 
                options={{
                    animationData: icon
                }}
                isClickToPauseDisabled={true}
                height={320}
                width={420}
            />
            <p style={{textAlign: "center", fontWeight: "300", color: "#c2c2c2", fontSize: "32px"}}>Not found</p>
        </>
    )
}
