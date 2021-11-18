import styled from "styled-components";

export const Footer = styled.footer`
    position: fixed;
    top: 100;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    background: #f2f2f2;
    display: none;
    justify-content: center;
    align-items: flex-start;
    z-index: 1000;
    text-align: center;
    @media (max-width: 728px){
        & {
            display: flex;
        }   
    }
`;

export const Wrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    jusrtify-content: center;
    padding: 0 30px;
    text-align: center;


    a {
        display: block;
        padding: 5px 0;
        text-align: center;

        font-weight: 300;
        font-size: 18px;
        color: #c2c2c2;
    }
`;