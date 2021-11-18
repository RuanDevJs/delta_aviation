import React from 'react';
import pema from "../../assets/images/sobre/Pema.jpeg";
import dolan from "../../assets/images/sobre/Dolan.jpeg";
import caique from "../../assets/images/sobre/Caique.jpeg";
import flavio from "../../assets/images/sobre/Flavio.jpeg";

import Footers from '../../Components/Footer';
import Header from '../../Components/Header';

import { Container, Name, SectionTitle, Title, Wrap, WrapTitle } from './style';

export default function Sobre() {
    return (
        <>
            <Header />
            <section className="ptb-50">
            <Title>
                Sobre
            </Title>
            <Container>
                <Wrap>
                    <img src={dolan} alt="Thiago Dolan"/>
                    <Name>Thiago Dolan</Name>
                    <WrapTitle>CEO</WrapTitle>
                </Wrap>
                <Wrap>
                    <img src={pema} alt="Lucas Pema"/>
                    <Name>Lucas Pema</Name>
                    <WrapTitle>Marketing</WrapTitle>
                </Wrap>
                <Wrap>
                    <img src={caique} alt="Caique"/>
                    <Name>Caique Delgado</Name>
                    <WrapTitle>Desenvolvedor</WrapTitle>
                </Wrap>
                <Wrap>
                    <img src={flavio} alt="Flavio"/>
                    <Name>Flavio Gontijo</Name>
                    <WrapTitle>CEO</WrapTitle>
                </Wrap>
                <Wrap size="65% !important">
                    <SectionTitle>Sobre nós</SectionTitle>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptatibus similique voluptatum nihil eos quis voluptas error sunt quod incidunt, at perferendis iusto voluptatem aliquam facilis tenetur? Laudantium harum temporibus quo vitae recusandae, quas odit eligendi soluta eveniet at. Blanditiis, eum temporibus! Culpa ad blanditiis sed eaque libero illum officiis animi minima quia assumenda molestiae facilis nemo cupiditate nam voluptate temporibus, dolorem, et perferendis quibusdam magnam voluptatum saepe? Mollitia nulla ducimus tenetur necessitatibus sit voluptas cupiditate earum excepturi maxime est.</p>
                </Wrap>
            </Container>
        </section>
        <Footers />
        </>
    )
}
