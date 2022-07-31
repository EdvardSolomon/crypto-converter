import React from "react";
import tw from "twin.macro";
import HeaderBase, { NavLinks, NavLink } from "components/headers/light.js";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import SimplePrimaryBackground from "components/testimonials/SimplePrimaryBackground";

import './styles.css';

const Header = tw(HeaderBase)`max-w-none`;


export default ({
  heading = "СЕРВИС КАЧЕСТВЕННЫХ И БЫСТРЫХ ОБМЕНОВ КРИПТОВАЛЮТ 24/7",
  description = "Мы — это большая профессиональная команда клиентской поддержки, обращаясь к нам, вы всегда можете рассчитывать на лучший сервис и быстрое проведение сделки",
  features = ["Круглосуточный обмен", "Обменяем за 15 минут", "Лучшая крипто-поддрежка"],

}) => {
  const navLinks = [
    <NavLinks className="navigation" key={1}>
      <NavLink href="/#">ВОПРОСЫ И ОТВЕТЫ</NavLink>
      <NavLink href="/#">ПРАВИЛА</NavLink>
      <NavLink href="/#">КОНТАКТЫ</NavLink>
      <NavLink href="/#">Telegram</NavLink>
    </NavLinks>
  ];
  return (
    <>
      <Header className="header" links={navLinks} />
      <Container >
        <ContentWithVerticalPadding className="underRow">
            <SimplePrimaryBackground/>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};
