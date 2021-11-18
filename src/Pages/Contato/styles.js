import styled from "styled-components";

export const Container = styled.section`
    max-width: 960px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    button {
        displaY: block;
        margin: 0 auto 90px auto;
    }
`;

export const Wrap = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    margin: 20px 0;

    @media (max-width: 728px){
        align-items: center;
    }
`;

export const Label = styled.label`
    font-size: 32px;
    font-weight: 200;
    color: #c2c2c2;
    padding: 10px 0 5px 0;
`;

export const Input = styled.input`
    width: 300px;
    padding: 15px 10px;
    background: #f9f9f9;
    outline: 0;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 300;
    color: #333;
`;

export const Left = styled.div`
    flex: 1;
`;

export const Right = styled.div`
    flex: 1;

    @media (max-width: 728px){
        display: none;
    }
`;