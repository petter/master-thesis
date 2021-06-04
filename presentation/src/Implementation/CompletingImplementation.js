import React from "react";
import { Slide, Heading, UnorderedList, ListItem, CodeSpan } from "spectacle";

const CompletingImplementation = () => (
  <>
    <Slide>
      <Heading>Completing implementation</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>addto</CodeSpan> statements
        </ListItem>
        <ListItem>Finding all declarations and references</ListItem>
        <ListItem>Supporting multi file programs</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>
        <CodeSpan>addto</CodeSpan> statements
      </Heading>
    </Slide>
    <Slide>
      <Heading>Finding all declarations and references</Heading>
    </Slide>
    <Slide>
      <Heading>Supporting multi file programs</Heading>
    </Slide>
  </>
);

export default CompletingImplementation;
