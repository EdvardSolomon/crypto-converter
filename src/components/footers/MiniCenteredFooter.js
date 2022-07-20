import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.svg";
import { ReactComponent as TelegramIcon } from "../../images/tg.svg";
import tgLogo from "../../images/tg.png";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Название обменника</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Условия обмена</Link>
            <Link href="#">Контакты</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://youtube.com">
              <TelegramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText> СЕРВИС КАЧЕСТВЕННЫХ И БЫСТРЫХ ОБМЕНОВ КРИПТОВАЛЮТ 24/7
© Все права защищены. Copyright © 2015 - 2022
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
