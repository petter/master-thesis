import React from "react";
import { Slide, Heading, UnorderedList, ListItem, Appear } from "spectacle";

const CustomCompiler = () => (
  <>
    <Slide>
      <Heading>Custom compiler</Heading>
      <UnorderedList>
        <ListItem>Viable if we target TypeScript</ListItem>
        <Appear>
          <ListItem>
            Targeting TypeScript would allow us to ignore most TypeScript
            specifics
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  </>
);

export default CustomCompiler;
