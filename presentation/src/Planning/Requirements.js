import React from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Appear,
} from "spectacle";

const Requirements = () => (
  <>
    <Slide>
      <Heading>Planning - requirements</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Need ability to add custom syntax</ListItem>
        </Appear>
        <Appear>
          <ListItem>Semantic anlaysis</ListItem>
        </Appear>
      </UnorderedList>
      <Appear>
        <Text>Desired trait:</Text>
        <UnorderedList>
          <ListItem>Loosely coupled implementation</ListItem>
        </UnorderedList>
      </Appear>
    </Slide>
  </>
);

export default Requirements;
