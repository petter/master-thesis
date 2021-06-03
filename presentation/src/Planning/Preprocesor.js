import React from "react";
import {
  Appear,
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "spectacle";

const Preprocesor = () => (
  <>
    <Slide>
      <Heading>Preprocesor</Heading>
      <Text>Are we able to implement PT through a preprocessor?</Text>
      <UnorderedList>
        <Appear>
          <ListItem>We define preprocessor as "dumb compiler"</ListItem>
        </Appear>
        <Appear>
          <ListItem>Need semantic analysis for safe renaming</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  </>
);

export default Preprocesor;
