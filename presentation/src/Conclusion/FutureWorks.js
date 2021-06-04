import React from "react";
import { Slide, Heading, UnorderedList, Appear, ListItem } from "spectacle";

const FutureWorks = () => (
  <>
    <Slide>
      <Heading>Future work</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Finish the PTS compiler</ListItem>
        </Appear>
        <Appear>
          <ListItem>Improve compiler error messages</ListItem>
        </Appear>
        <Appear>
          <ListItem>Make syntax highlighting for PTS</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  </>
);

export default FutureWorks;
