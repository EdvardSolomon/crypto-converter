import React from "react";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import Form from "../forms/TwoColContactUsWithIllustrationFullForm.js";


const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-primary-900 leading-snug xl:text-6xl`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;


export default ({
  heading = "СЕРВИС КАЧЕСТВЕННЫХ И БЫСТРЫХ ОБМЕНОВ КРИПТОВАЛЮТ 24/7",
  description = "Мы — это большая профессиональная команда клиентской поддержки, обращаясь к нам, вы всегда можете рассчитывать на лучший сервис и быстрое проведение сделки",
  features = ["Круглосуточный обмен", "Обменяем за 15 минут", "Лучшая крипто-поддержка"],

}) => {
  return (
    <>
      <Container >
        <ContentWithVerticalPadding className="underRow">
          <Row className="row">
            <TextColumn className="text-column">
              <Heading className="heading-test">{heading}</Heading>
              <Description className="mainDescript">{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText className="mainDescript">{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <Form />
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};
