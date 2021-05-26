import React from 'react';
import { Slide, Heading, UnorderedList, ListItem, Grid } from 'spectacle';

const Evaluation = () => (
    <>
        <Slide>
            <Heading>Evaluation</Heading>
            <UnorderedList>
                <Grid gridTemplateRows="1fr 1fr 1fr 1fr" gridAutoFlow="column">
                    <ListItem>Parallel extension</ListItem>
                    <ListItem>Hierachy preservastion</ListItem>
                    <ListItem>Renaming</ListItem>
                    <ListItem>Multiple uses</ListItem>
                    <ListItem>Type parameterization</ListItem>
                    <ListItem>Class merging</ListItem>
                    <ListItem>Collection-level type-checking</ListItem>
                </Grid>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Parallel extension</Heading>
        </Slide>
        <Slide>
            <Heading>Hierachy preservastion</Heading>
        </Slide>
        <Slide>
            <Heading>Renaming</Heading>
        </Slide>
        <Slide>
            <Heading>Multiple uses</Heading>
        </Slide>
        <Slide>
            <Heading>Type parameterization</Heading>
        </Slide>
        <Slide>
            <Heading>Class merging</Heading>
        </Slide>
        <Slide>
            <Heading>Collection-level type-checking</Heading>
        </Slide>
    </>
);

export default Evaluation;