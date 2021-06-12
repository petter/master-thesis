import React from "react";
import { Slide, Heading, Text, Notes } from "spectacle";

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
      <Notes>
        <ul>
          <li>Benefits from pt</li>
          <li>Due to structural typing and the prototypebased nature of JS OO it could be hard to determine references</li>
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>RQ2</Heading>
      <Text>
        Does structural typing change how the core of Package Templates works?
      </Text>
      <Notes>No, but what a reference is changes</Notes>
    </Slide>
    <Slide>
      <Heading>RQ3</Heading>
      <Text>
        Will having PT in a structurally typed language have any notable
        advantages or disadvantages over having it in a nominally typed
        language?
      </Text>
      <Notes>
        <h3>Advantages</h3>
        <ul>
          <li>Structural typing fits with the overall theme of PT, namely re-use</li>
          <li>Structural typing was also seen as a necessity for type paramterization in PT</li>
        </ul>
        <h3>Disadvantages</h3>
        <ul>
          <li>Could lead to more problems than in nominal</li>
        </ul>
      </Notes>
    </Slide>
  </>
);

export default ResearchQuestions;
