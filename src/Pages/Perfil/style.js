import styled, { keyframes } from "styled-components";

const Animate = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-50px,0,0);
    }
    to{
        opacity: 1;
        transform: translate3d(0px,0,0);
    }
`;

export const Container = styled.div`
    max-width: 960px;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    p {
        font-weight: 300;
        color: #c8c8c8;
        padding: 10px 0;
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 500;
    color: #55C1C3;
`;

export const Wrap = styled.div`
    width: 320px;
    margin: 12px 0;
    padding: 20px 0;
    opacity: 0;

    &.active {
        opacity: 1;
        animation: ${Animate} 0.5s forwards;
    }
`;

export const Input = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 2px solid #c2c2c2;
    outline: 0;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    padding: 12px;
    transition: 0.3s ease-out;
    
    &:hover {
        transition: 0.3s ease-in;
        border-bottom: 2px solid #55C1C3;
    }
`;