import React from "react";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import SimplePrimaryBackground from "components/testimonials/SimplePrimaryBackground";

import './styles.css';

function FinishPayment() {

  return (
    <>
      <Container >
        <ContentWithVerticalPadding className="underRow">
            <SimplePrimaryBackground/>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
  };

  export default FinishPayment;