import React from "react";
import { Slide, Heading, UnorderedList, ListItem, Appear } from "spectacle";

const TypeScriptVSJavaScript = () => (
  <>
    <Slide>
      <Heading>TypeScript vs. JavaScript</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>The type-checking requirement</ListItem>
        </Appear>
        <Appear>
          <ListItem>Safe renaming</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  </>
);

export default TypeScriptVSJavaScript;
