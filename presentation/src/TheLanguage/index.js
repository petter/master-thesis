import React from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  UnorderedList,
  ListItem,
} from "spectacle";

const TheLanguage = () => (
  <>
    <Slide>
      <Heading>The PTS programming language</Heading>
      <Appear>
        <Text>Need syntax for the following:</Text>
        <UnorderedList>
          <ListItem> Defining packages and templates</ListItem>
          <ListItem>Instantiating templates</ListItem>
          <ListItem>Renaming</ListItem>
          <ListItem>Additions</ListItem>
        </UnorderedList>
      </Appear>
    </Slide>
  </>
);

export default TheLanguage;
