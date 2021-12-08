import styled from "styled-components";

export const Container = styled.div`
    max-width: 960px;
    margin: 20px auto;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    jusitfy-content: space-between;
    fles-wrap: wrap;
    width: 100%;
    padding: 20px 0;
    background: #f2f2f2;
    transition: .3s ease-in;  
    cursor: pointer;     
    
    &:nth-child(1){
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }


    &:hover{
        transition: 0.3s ease-in;
        background: #55CCC0 !important;
    }

    &:hover span {
        color: white;
    }
`;

export const Label = styled.span`
    display: block;
    font-size: 15px;
    font-weight: 300;
    color: #c1c1c1;
    margin-right: 10px;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    fles-wrap: wrap;
    padding: 20px;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    fles-wrap: wrap;
    padding: 20px;
`;

export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    fles-wrap: wrap;
    padding: 20px;
    text-align: center;
`;