import styled from "styled-components";

export const Produtos = styled.section`
    padding: 50px 0;
    margin: 20px 0;

    a {
        display: block;
        text-align: center;
    }
`;

export const Title = styled.h1`
   font-size: 32px;
   max-width: 960px;
   margin: 10px auto;
   color: #55C1C3; 
   font-weight: 900;
   text-transform: capitalize;

   @media (max-width: 728px){
    text-align: center;
    padding: 10px 0;
   }
}
`;

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 728px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }
`;

export const Wrap = styled.div`
    width: 300px;
    margin-bottom: 20px;
`;

export const Image = styled.img`
    max-width: 100%
    display: block;
    object-fit: cover;
    border-radius: 4px;
    height: 320px;
`;

export const ProductTitle = styled.h1`
    padding: 10px 0 0 0;
    font-size: 20px;
    font-weight: 300;
    color: #c1c1c1;
`;

export const ProductPrice = styled.p`
    padding: 5px 0;
    font-size: 32px;
    font-weight: 300;
    color: #c1c1c1;
`;