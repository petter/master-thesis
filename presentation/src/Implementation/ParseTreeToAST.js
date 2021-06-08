import React from "react";
import { Slide, Appear, Heading, UnorderedList, ListItem } from "spectacle";

const ParseTreeToAST = () => (
  <>
    <Slide>
      <Heading>Transform parse tree to simpler AST</Heading>
      <Appear>
        <UnorderedList>
          <ListItem>node type</ListItem>
          <ListItem>text</ListItem>
          <ListItem>children</ListItem>
        </UnorderedList>
      </Appear>
    </Slide>
  </>
);

export default ParseTreeToAST;
