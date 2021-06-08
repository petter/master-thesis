import React from "react";
import { Slide, Heading, UnorderedList, Appear, ListItem, OrderedList } from "spectacle";

const ClosingTemplates = () => (
  <>
    <Slide>
      <Heading>Closing templates</Heading>
      <OrderedList>
        <Appear><ListItem>Create correctly scoped AST</ListItem></Appear>
        <Appear><ListItem>Transform nodes to reference nodes</ListItem></Appear>
        <Appear><ListItem>Perform the rename</ListItem></Appear>
        <Appear><ListItem>Go back to the original AST</ListItem></Appear>
        <Appear><ListItem>Merge classes</ListItem></Appear>
      </OrderedList>
    </Slide>
  </>
);

export default ClosingTemplates;
