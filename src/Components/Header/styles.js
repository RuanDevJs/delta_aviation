import styled from "styled-components";
import { Link } from "react-router-dom";

export const Announcement = styled.header`
    padding: 15px;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const AnnouncementLink = styled(Link)`
    font-size: 12px;
    font-weight: 300;
    color: #C2C2C2;
    text-transform: uppercase;
    padding: 0 1px;

    @media (max-width: 728px){
        font-size: 20px;
    }
`;

export const NameLink = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    color: #C2C2C2;
    text-transform: capitalize;
    padding: 0 15px;
`;

export const Container = styled.header`
    padding: 20px;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-rap: wrap;
    
`;

export const Left = styled.div`
    flex: 1;

    @media (max-width: 728px) {
        & {
            display: flex;
            justify-content: center;
        }
    }
`;

export const Image = styled.img`
    max-with: 100%;
    display: block
    margin: 0 auto;
`;

export const Center = styled.div`
    flex: 1;
    @media (max-width: 728px) {
        & {
            display: none;
        }
    }
`;

export const Wrap = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

export const Menu = styled.li`
    margin: 0 5px;
`; 

export const MenuLink = styled(Link)`
    display: block;
    font-weight: 300;
    font-size: 18px;
    color: #c2c2c2;
    transition: 0.3s ease-out;

    &:hover {
        color: #55C1C3;
        transition: 0.3s ease-in;
    }
`; 

export const Right = styled.div`
    flex: 1;
    margin-left: 50px;

    @media (max-width: 728px) {
        & {
            display: none;
        }
    }
`;

export const Search = styled.input`
    background: #f2f2f2;
    width: 60%;

    @media (max-width: 728px) {
        & {
            display: block;
            margin: 0 auto;
        }
    }
`;

export const Input = styled.input`
    width: 80%;
    background: #f9f9f9;
    outline: 0;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    color: #222;
`;