import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

 import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Header from 'components/headers/light.js';
import Features from 'components/features/ThreeColWithSideImage.js';
import Faq  from 'components/faqs/SingleCol.js';
import GetStarted from "components/cta/GetStarted";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";


import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/thank-you">
          <ThankYouPage />
        </Route>
        <Route path="/">
          <div className="wrapper">
          <Hero />
          <Features />
          <Faq />
          <GetStarted />
          </div>
          <MiniCenteredFooter />
        </Route>
      </Switch>
    </Router>
  );
}