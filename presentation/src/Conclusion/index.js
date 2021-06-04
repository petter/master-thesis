import React from "react";
import { Slide, Heading } from "spectacle";
import Contribution from "./Contribution";
import ResearchQuestions from "./ResearchQuestions";

const Conclusion = () => (
  <>
    <Slide>
      <Heading>Concluding remarks</Heading>
    </Slide>
    <ResearchQuestions />
    <Contribution />
  </>
);

export default Conclusion;
