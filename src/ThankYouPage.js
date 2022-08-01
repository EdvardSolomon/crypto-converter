import React from "react";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import "./thankStyles.css";
import { useHistory } from "react-router-dom";

/* Hero */
const Row = tw.div`flex`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const Heading = tw(HeadingBase)`text-center text-primary-900 leading-snug`;
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  const history = useHistory();

  const returnToTheMain = () => {
    history.push('/');
  }

  return (
      <Container>
          <HeroRow>
            <Heading className="header">Thank You!</Heading>
            <div className="order" tw="mt-12 text-center">
             Ваш запрос скоро будет обработан.
            </div>
            <div className="option" tw="mt-12 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus sed mauris ac tempus. Vestibulum non consequat mi, sit amet pulvinar arcu
              <div tw="mt-12 flex flex-col items-center">
              <SubmitButton type="submit" onClick={returnToTheMain}>Вернуться на главную страницу</SubmitButton>
              </div>
            </div>
          </HeroRow>
      </Container>
  );
};
