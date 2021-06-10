import React from 'react';
import { Slide, Heading, UnorderedList, ListItem } from 'spectacle';

const Agenda = () => (
    <Slide>
        <Heading>Agenda</Heading>
        <UnorderedList fontSize="2em">
            <ListItem>Introduction</ListItem>
            <ListItem>Background</ListItem>
            <ListItem>The PTS langauge</ListItem>
            {/* <ListItem>Project planning</ListItem> */}
            <ListItem>Implementation</ListItem>
            <ListItem>Evaluation and discussion</ListItem>
            <ListItem>Concluding remarks</ListItem>
        </UnorderedList>
    </Slide>
);

export default Agenda;