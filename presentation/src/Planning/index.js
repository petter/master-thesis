import React from "react";
import { Slide, Heading, UnorderedList, ListItem, Appear } from "spectacle";

import TypeScriptVSJavaScript from "./TypeScriptVSJavaScript";
import Requirements from "./Requirements";
import InternalDSL from "./InternalDSL";

const Planning = () => (
  <>
    <Slide>
      <Heading>Planning</Heading>
    </Slide>
    <TypeScriptVSJavaScript />
    <Requirements />
    <Slide>
      <Heading>Approaches</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Implementing as internal DSL</ListItem>
        </Appear>
        <Appear>
          <ListItem>Making a preprocessor for TS compiler</ListItem>
        </Appear>
        <Appear>
          <ListItem>Making a compiler plugin/transform</ListItem>
        </Appear>
        <Appear>
          <ListItem>Making a fork of TS compiler</ListItem>
        </Appear>
        <Appear>
          <ListItem>Making a custom compiler</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <InternalDSL />
  </>
);

export default Planning;
