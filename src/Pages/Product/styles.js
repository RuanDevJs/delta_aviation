import styled, { keyframes } from "styled-components";

const animate = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0,-50px,0);
    }
    top{
        opacity: 1;
        transform: translate3d(0,0px,0);
    }
`;

export const Container = styled.section`
  max-width: 960px;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  animation: ${animate} 0.5s forwards;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;

  a {
    display: block;
    text-align: center;
    padding: 20px;
    background: #55C1C3;
    border-radius: 50px;
    border: 0;
    outline: 0;
    width: 220px;
    font-size: 24px;
    font-weight: 700;
    color: #f9f9f9;
    text-transform: uppercase;
    transition: .2s ease-out;
    cursor: pointer;
  }

  a:hover {
    transition: .2s ease-in;
    background: #51C8C2;
  }
`;

export const Image = styled.img`
  border-radius: 12px;
  height: 320px;
  width: 420px;
`;

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
    color: #55C1C3;
    padding: 10px 0 5px 0;
`;

export const Subtitle = styled.h1`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5em;
    color: #c2c2c2;
    padding: 10px 0 5px 0;
    margin-bottom: 10px;
`;