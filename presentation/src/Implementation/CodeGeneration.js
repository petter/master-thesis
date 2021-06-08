import React from "react";
import { Slide, Heading, OrderedList, Appear, ListItem } from "spectacle";

const CodeGeneration = () => (
  <>
    <Slide>
      <Heading>Code generation</Heading>
      <OrderedList>
        <Appear><ListItem>Combine leaf nodes textual representation</ListItem></Appear>
        <Appear><ListItem>Format with prettier</ListItem></Appear>
        <Appear><ListItem>Optional: Transpile to JS with TS compiler</ListItem></Appear>
      </OrderedList>
    </Slide>
  </>
);

export default CodeGeneration;
