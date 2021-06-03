import React from "react";
import { Slide, Heading, UnorderedList, ListItem, Appear } from "spectacle";

const Plugin = () => (
  <>
    <Slide>
      <Heading>TypeScipt compiler plugin</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            TypeScript compiler plugins only alter the editing experience
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Babel</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Allows for syntax transformation during compilation
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Does not allow parser plugins</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  </>
);

export default Plugin;
