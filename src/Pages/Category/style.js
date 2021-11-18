import styled from "styled-components";

export const Categorias = styled.section`
  padding: 50px 0;
`;

export const Title = styled.h1`
  font-size: 32px;
  max-width: 80%;
  margin: 10px auto;
  color: #55c1c3;
  font-weight: 900;
  text-transform: capitalize;

  @media (max-width: 728px){
    & {
      text-align: center;
      font-size: 45px;
      margin-bottom: 20px;
    }

  }
`;

export const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap;
    gap: 20px;

    @media (max-width: 728px){
      & {
        flex-direction: column;
        text-align: center;
      }

      a {
        margin: 10px auto;
      }
    }
`;

export const Wrap = styled.div`
  flex: 1 1 50%;

  h2 {
    padding: 10px 0 0 0;
    font-size: 32px;
    font-weight: 300;
    color: #c1c1c1;
  }

  img {
    max-width: 320px;
    display: block;
    object-fit: cover;
    border-radius: 4px;
    height: 320px;
  }

  button {
    margin: 10px 0;
  }

  p {
    padding: 5px 0;
    font-size: 22px;
    font-weight: 300;
    color: #c1c1c1;
  }

  a.buy{
    display: block;
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
    text-align: center;

    &:hover {
      transition: .2s ease-in;
      background: #51C8C2;
    }
  }
`;
