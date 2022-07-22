import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

import './styles.css';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  submitButtonText = "Создать заявку",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

 

  return (
    <Container className="form-container">
            <Form action={formAction} method={formMethod} className="form">
              <div className="input-column">
                <div className="from-input">
                <span className="send">Отправляете:</span>
                <div className="input">
                <Input type="text" name="crypto" placeholder="BTC"  />
                <div className="currency-select"> <ul className="select">
                  <li className="selected">BTC</li>
                  <li>ETH</li>
                  <li>DASH</li>
                  <li>DOGE</li>
                  <li>LTC</li>
                  </ul>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" class="arrow" data-v-31e47d53="">
                    <defs>
                      <path id="arrow-down-tr_svg__a" d="M1268.003 522.66l1.888-1.888 3.776 3.776 3.769-3.769 1.88 1.881-5.656 5.657z"></path>
                  </defs>
                  <use href="#arrow-down-tr_svg__a" transform="translate(-1267.5 -520)"></use>
                  </svg>
                  </div>
                  </div>
                </div>
              </div>
              <span className="exchange-rate">Курс обмена 1 BTC = 23526.61844298 USDT</span>
              <div className="input-column">
                <div className="to-input">
                <span className="get">Получаете:</span>
                <div className="input">
                <Input type="text" name="money" placeholder="USD" />
                <div className="currency-select"> <ul className="select">
                  <li className="selected">USD</li>
                  <li>UAH</li>
                  <li>EUR</li>
                  </ul>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" class="arrow" data-v-31e47d53="">
                    <defs>
                      <path id="arrow-down-tr_svg__a" d="M1268.003 522.66l1.888-1.888 3.776 3.776 3.769-3.769 1.88 1.881-5.656 5.657z"></path>
                  </defs>
                  <use href="#arrow-down-tr_svg__a" transform="translate(-1267.5 -520)"></use>
                  </svg>
                  </div>
                  </div>
                </div>
              </div>
              <div className="input-column">
              <div className="input">
                <Input type="text" name="subject" placeholder="ФИО получателя" />
                </div>
              </div>
              <div className="input-column">
              <div className="input">
                <Input type="text" name="wallet" placeholder="Номер кошелька" />
                </div>
              </div>
              <div className="error-text">Минимальная сумма для конвертации 0.00219701 BTC</div>
              <div className="converter-content">
                <Input type="checkbox" name="policy" />
                <label>Я согласен на обработку персональных данных и принимаю правила обмена</label>
              </div>
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
    </Container>
  );
};
