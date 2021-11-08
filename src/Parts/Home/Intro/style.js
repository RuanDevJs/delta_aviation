import styled from "styled-components";

export const Contaienr = styled.div`
    max-width: 960px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
`;

export const Left = styled.div`
    flex: 1 1 460px;
    max-width: 460px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 900;
    color: #55C1C3;
`;

export const Subtitle = styled.p`
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5em;
    margin-top: 10px;
    color: #c2c2c2;
    margin-bottom: 20px;
`;

export const Right = styled.div`
    flex: 1;
`;