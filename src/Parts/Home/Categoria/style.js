import styled, { keyframes } from "styled-components";

export const Categoria = styled.section`
    margin-top: 50px;
    padding: 50px;

    .slick-slider {
        overflow-y: hidden;
    }

    .slick-slide {
        border-radius: 50px;
        outline: 0;
    }

`;

export const Title = styled.h2`
    font-size: 32px;
    max-width: 960px;
    margin: 10px auto;
    color: #55C1C3; 
    font-weight: 300;
    text-transform: capitalize;
`;

export const CategoryArea = styled.div`
    padding: 30px;
    margin: 0 10px;
    
    border-radius: 50px;
    transition: .3s ease-out;
    cursor: pointer;
    outline: 0;

    &:hover {
        
        transition: .3s ease-in;
    }

    div {
        border-radius: 50px;
    }

    img {
        height: 220px;
        border-radius: 12px;
    }
`;

export const CategoryTitle = styled.h2`
    font-size: 32px;
    font-weight: 300;
    color: #c2c2c2;
    width: 300px;
    text-align: center;
    padding: 10px 0;
    letter-spacing: 1.5px;
`;