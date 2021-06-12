import React from "react";
import { Slide, Heading, UnorderedList, Appear, ListItem, Notes } from "spectacle";

const Discussion = () => (
  <>
    {/* <Slide>
            <Heading>Discussion</Heading>
        </Slide> */}
    <Slide>
      <Heading>Structural vs. nominal</Heading>
    </Slide>
    <Slide>
      <Heading>Nominal advantages</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Subtypes</ListItem>
        </Appear>
        <Appear>
          <ListItem>Runtime type-checking</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Structural advantages</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Arguably tidier and more elegant</ListItem>
        </Appear>
        <Appear>
          <ListItem>More general functions/classes</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <ul>
          <li>Malayeri og Aldrich</li> 
          <li>Gjennomsnittlig strukturell type: 3.5 metoder</li> 
          <li>Gjennomsnittlig nominell type: 37.8 metoder</li> 
        </ul>
      </Notes>
    </Slide>
    <Slide>
      <Heading>Which better fits PT?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Structural fits with the theme of PT</ListItem>
        </Appear>
        <Appear>
          <ListItem>Nominal is seemingly less problematic</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  </>
);

export default Discussion;
