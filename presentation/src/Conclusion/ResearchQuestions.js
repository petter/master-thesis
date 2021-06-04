import React from "react";
import { Slide, Heading, Text } from "spectacle";

const ResearchQuestions = () => (
  <>
    <Slide>
      <Heading>Research questions</Heading>
    </Slide>
    <Slide>
      <Heading>RQ1</Heading>
      <Text>
        How does the language mechanism Package Templates fit into TypeScript?
      </Text>
    </Slide>
    <Slide>
      <Heading>RQ2</Heading>
      <Text>
        Does structural typing change how the core of Package Templates works?
      </Text>
    </Slide>
    <Slide>
      <Heading>RQ3</Heading>
      <Text>
        Will having PT in a structurally typed language have any notable
        advantages or disadvantages over having it in a nominally typed
        language?
      </Text>
    </Slide>
  </>
);

export default ResearchQuestions;
