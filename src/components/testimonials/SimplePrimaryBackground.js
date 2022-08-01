import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container} from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { UseData } from "components/contexts/DataContext";
import { useCountdown } from "helpers/useCountdown";
import CountdownTimer from "helpers/CountdownTimer";


const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100 rounded-lg`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;
const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const LinksContainer = tw(ColumnContainer)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row `;
const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(Link)`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;

export default ({
  heading = "Crypto Converter",
  description = "PAYMENT OF THE APPLICATION №102",
 
}) => {

  const { data } = UseData();
  const ONE_HOUR_IN_MS = 1*1*60*60*1000;
  const NOW_IN_MS = new Date().getTime();

  const timerDate = NOW_IN_MS + ONE_HOUR_IN_MS;


  return (
    <PrimaryBackgroundContainer>
      <div className="container-order">
          <Heading className="header">{heading}</Heading>
          <Description>{description}</Description>
          <div className="rest_steps">
          <div className="step2-input">
          <div className="step2-input-text">
              Net:
              <br></br>
              <nav className="wallet_network" id="wallet_network">{data.currency1}</nav>
            </div>
          </div>
          <div className="step2-input">
            <div className="step2-input-text">
              Wallet number
              <span className="currency_symbol_crypto"> {data.currency1}</span>
                :
              <br></br>
              <nav className="number_wallet_cripto" id="wallet_crypto_carrency">bc1qwmq6gxdw3ngq5ulajlldk22xs34rgntuy09v0f</nav>
            </div>
          </div>
          <div className="step2-input">
          <div className="step2-input-text">
              Sum:
              <br></br>
              <span className="sum_for_crypto_carrency" id="summ_crypto_carrency">{data.amount1}</span>
            </div>
            </div>
            <nav className="timer_countdown">
              Make payment within:
              <CountdownTimer targetDate={timerDate} />
            </nav>
            <LinksContainer className='LinksContainerTest'>
            <PrimaryLink className="paid_button">I paid</PrimaryLink>
            </LinksContainer>
            </div>
      </div>
    </PrimaryBackgroundContainer>
  );
};
