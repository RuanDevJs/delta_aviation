import styled from "styled-components";

export const Container = styled.section`
    .slick-slider {
        overflow-y: hidden;
    }
`;

export const Line = styled.div`
    margin-top: 50px;

    button {
        position: relative;
        margin: 0 auto 20px auto;
        display: block;
        z-index: 1000;
    }
`;

export const Product = styled.section`
    display: flex !important;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    background: #fff;
    border-top: 1px solid #f2f2f2;
    padding: 20px 0;
    cursor: pointer;
    outline: 0;
    
    img {
        display: block;
        border-radius: 12px;
        height: 220px;
    }

    button {
        margin-top: 10px;
        padding: 10px;
    }

    a {
        text-align: center;
    }
`;


export const ProductTitle = styled.h2`
    font-weight: 300;
    font-size: 24px;
    color: #c2c2c2;
    padding: 8px 0 0px 0;
`;

export const ProductRate = styled.p`
    font-weight: 900;
    font-size: 22px;
    color: #55C1C3;
    margin-top: 5px;
`;