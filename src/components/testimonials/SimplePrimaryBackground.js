import React, {useState} from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";


const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

export default ({
  subheading = "",
  heading = "Crypto Converter",
  description = "PAYMENT OF THE APPLICATION №102",
  testimonials = [
    {
      customerName: "David Hanson",
      customerProfile: "CEO, Koalify",
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.85&w=256&h=256&q=80",
      quote:
        "We have been using servana for about 2 years. And in that time we have had no problem at all. The user interface is really simple to use. Our services scale automatically and we never have to worry about downtimes. is as described."
    },
    {
      customerName: "Serena Davis",
      customerProfile: "Founder, Travana",
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80",
      quote:
        "We are delighted with the quality and performance of the servers that servana provides. The uptime is amazing and the internet connection is great for the price we are paying."
    },
    {
      customerName: "Timothy Burr",
      customerProfile: "CTO, Coronax",
      imageSrc:
        "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=256&h=256&q=80",
      quote:
        "It has been 8 months since we have switched to servana and it has nothing but an amazing experience. The cost is affordable, support is great, uptime is as described."
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
          <div className="step2-input">
          <div className="step2-input-text">
              " Net: "
              <nav className="wallet_network" id="wallet_network">BTC</nav>
            </div>
          </div>
          <div className="step2-input">
            <div className="step2-input-text">
              " Wallet number "
              <span className="currency_symbol_crypto"></span>
              ":"
              <nav className="number_wallet_cripto" id="wallet_crypto_carrency">bc1qwmq6gxdw3ngq5ulajlldk22xs34rgntuy09v0f</nav>
            </div>
          </div>
          <div className="step2-input">
          <div className="step2-input-text">
              " Sum: "
              <span className="sum_for_crypto_carrency" id="summ_crypto_carrency">1</span>
            </div>
            </div>
        </HeadingContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
