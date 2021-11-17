import styled from "styled-components";

export const Container = styled.div`
    max-width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    @media (max-width: 728px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    max-width: 80%;
    margin: 5px auto;
    color: #55C1C3; 
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    padding: 10px 0;
`;

export const Wrap = styled.div`
    width: ${({size}) => size ? size : "30%"};
    margin-bottom: 45px;

    @media (max-width: 728px){
      width: 320px;
      margin-left: 30px;
    }

    p {
        font-size: 20px;
        font-weight: 200;
        color: #c1c1c1;
    }
`;

export const Name = styled.h2`
    padding: 10px 0 10px 0;
    font-size: 32px;
    font-weight: 200;
    text-align: center;
    color: #c1c1c1;
`;

export const WrapTitle = styled.h2`
    padding: 12px;
    background: #55C1C3;
    border-radius: 50px;
    border: 0;
    outline: 0;
    width: 220px;
    margin: 0 auto;
    font-size: 24px;
    font-weight: 900;
    color: #f9f9f9;
    text-transform: uppercase;
    transition: .2s ease-out;
    cursor: pointer;
    text-align: center;
`;

export const SectionTitle = styled.h2`
    font-size: 50px;
    font-weight: 200;
    color: #55C1C3;
    transition: .2s ease-out;
    cursor: pointer;
    padding: 5px 0;
`;