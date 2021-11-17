import styled, { keyframes } from "styled-components";

export const Categoria = styled.section`
    margin-top: 50px;
    padding: 50px;

    .slick-slider {
        overflow-y: hidden;
    }

    .slider-mobile {
        display: none;
    }

    .slick-slide {
        border-radius: 50px;
        outline: 0;
    }

    @media (max-width: 728px){
        .slider-desktop {
            display: none;
        }

        .slider-mobile {
            display: block;
        }
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    max-width: 960px;
    margin: 10px auto;
    color: #55C1C3; 
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 728px){
        text-align: center
    }
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

    @media (max-width: 728px){
        & {
            padding: 0;
            margin: 0 5px;
            border-radius: 14px;
        }

        div {
            border-radius: 14px;
        }

        img {
            height: 220px;
            border-radius: 50px;
            object-fit: cover;
        }
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

    @media (max-width: 728px){
        display: none !important;
    }
`;