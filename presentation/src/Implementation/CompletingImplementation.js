import React from "react";
import { Slide, Heading, UnorderedList, ListItem, CodeSpan, Appear } from "spectacle";

const CompletingImplementation = () => (
  <>
    <Slide>
      <Heading>Completing implementation</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>addto</CodeSpan> statements
        </ListItem>
        <ListItem>Identifying and transforming all declarations and references</ListItem>
        <ListItem>Supporting multi file programs</ListItem>
      </UnorderedList>
    </Slide>
    {/* <Slide>
      <Heading>
        <CodeSpan>addto</CodeSpan> statements
      </Heading>
      <UnorderedList>
        <Appear><ListItem><CodeSpan>addto</CodeSpan> needs to override attributes</ListItem></Appear>
        <Appear><ListItem>Hacky: Append <CodeSpan>addto</CodeSpan>-bodies to the bottom of classes</ListItem></Appear>
        <Appear><ListItem>Good: Create more advanced representations for classes</ListItem></Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Identifying and transforming all declarations and references</Heading>
      <UnorderedList>
        <ListItem>Will require us to perform more advanced semantic analysis</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Supporting multi file programs</Heading>
      <UnorderedList>
        <ListItem>Could likeley be done by a simple preprocessor</ListItem>
      </UnorderedList>
    </Slide> */}
  </>
);

export default CompletingImplementation;
