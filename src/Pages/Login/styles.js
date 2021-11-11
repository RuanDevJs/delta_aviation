import styled from "styled-components";

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const Wrap = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    margin: 20px 0;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 500;
    color: #55C1C3;
    padding: 10px 0 5px 0;
`;

export const Input = styled.input`
    width: 280px;
    padding: 15px 10px;
    background: #f9f9f9;
    outline: 0;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    box-shadow: 6px 6px 6px rgba(0,0,0,16%);
    font-size: 16px;
    font-weight: 700;
    color: #888;
`;

