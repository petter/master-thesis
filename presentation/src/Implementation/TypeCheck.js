import React from "react";
import { Slide, Heading, OrderedList, Appear, ListItem } from "spectacle";

const TypeCheck = () => (
  <>
    <Slide>
      <Heading>Template type-check</Heading>
      <OrderedList>
        <Appear><ListItem>Run code-generation on the closed templates/packages</ListItem></Appear>
        <Appear><ListItem>Run the resulting output through TypeScript compiler</ListItem></Appear>
      </OrderedList>
    </Slide>
  </>
);

export default TypeCheck;
