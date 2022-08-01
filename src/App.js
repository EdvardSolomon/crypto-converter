import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import tw from "twin.macro";

import HeaderBase, { NavLinks, NavLink } from "components/headers/light.js";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from 'components/features/ThreeColWithSideImage.js';
import Faq  from 'components/faqs/SingleCol.js';
import GetStarted from "components/cta/GetStarted";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";

import './styles.css';



import ComponentRenderer from "ComponentRenderer.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FinishPayment from "pages/Finish-payment";
import MainLandingPage from "MainLandingPage";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  const Header = tw(HeaderBase)`max-w-none`;
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
    <div className="wrapper">
    <Header className="header" links={navLinks} />
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/main">
          <MainLandingPage />
        </Route>
        <Route path="/thank-you">
          <ThankYouPage />
        </Route>
        <Route path="/order">
        <FinishPayment />
        </Route>
        <Route path="/">
          <Hero />
          <Features />
          <Faq />
          <GetStarted />
        </Route>
      </Switch>
    </Router>
    </div>
    <MiniCenteredFooter />
    </>
  );
}