import React from 'react';
import lucas from "../../assets/images/sobre/Rectangle 24.svg";
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
                    <img src={lucas} alt="Lucas Pema"/>
                    <Name>Thiago Dolan</Name>
                    <WrapTitle>CEO</WrapTitle>
                </Wrap>
                <Wrap>
                    <img src={lucas} alt="Lucas Pema"/>
                    <Name>Lucas Pema</Name>
                    <WrapTitle>Marketing</WrapTitle>
                </Wrap>
                <Wrap>
                    <img src={lucas} alt="Lucas Pema"/>
                    <Name>Caique Delgado</Name>
                    <WrapTitle>Desenvolvedor</WrapTitle>
                </Wrap>
                <Wrap>
                    <img src={lucas} alt="Lucas Pema"/>
                    <Name>Caique Delgado</Name>
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
