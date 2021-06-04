import React from "react";
import { Slide, Heading } from "spectacle";
import Contribution from "./Contribution";
import ResearchQuestions from "./ResearchQuestions";
import FutureWorks from "./FutureWorks";
import InRetrospect from "./InRetrospect";

const Conclusion = () => (
  <>
    <Slide>
      <Heading>Concluding remarks</Heading>
    </Slide>
    <ResearchQuestions />
    <InRetrospect />
    <Contribution />
    <FutureWorks />
  </>
);

export default Conclusion;
