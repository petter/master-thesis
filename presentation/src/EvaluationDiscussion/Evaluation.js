import React from 'react';
import { Slide, Heading, Text, UnorderedList, ListItem, Grid, Appear, CodeSpan } from 'spectacle';

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
            <Text>Should be able to make additions in parallel</Text>
            <UnorderedList>
                <Appear><ListItem><strong>This requirement is met</strong></ListItem></Appear>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Hierachy preservastion</Heading>
            <Text>Transformations should preserve inheritance patterns</Text>
            <UnorderedList>
                <Appear><ListItem><strong>This requirement is met</strong></ListItem></Appear>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Renaming</Heading>
            <Text>Should allow for renaming classes and class attributes</Text>
            <UnorderedList>
                {/* <Appear><ListItem></ListItem></Appear>
                <Appear><ListItem></ListItem></Appear> */}
                <Appear><ListItem><strong>This requirement is <em>partially</em> met</strong></ListItem></Appear>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Multiple uses</Heading>
            <Text>Should be possible to re-use templates several times, where each use is kept independent</Text>
            <UnorderedList>
                <Appear><ListItem><strong>This requirement is met</strong></ListItem></Appear>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Type parameterization</Heading>
            <Text>Should be possible to assume the existence of a type, and at instantiation give an actual parameter for the type</Text>
            <UnorderedList>
                <Appear><ListItem>Not implemented</ListItem></Appear>
                <Appear><ListItem><strong>This requirement is <em>NOT</em> met</strong></ListItem></Appear>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Class merging</Heading>
            <Text>Should allow for merging of classes</Text>
            <UnorderedList>
                <Appear><ListItem>Merging of classes is done properly</ListItem></Appear>
                <Appear><ListItem><CodeSpan>addto</CodeSpan>-statements are not complete</ListItem></Appear>
                <Appear><ListItem><strong>This requirement is <em>partially</em> met</strong></ListItem></Appear>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Collection-level type-checking</Heading>
            <Text>Should type-check each template</Text>
            <UnorderedList>
                <Appear><ListItem><strong>This requirement is met</strong></ListItem></Appear>
            </UnorderedList>
        </Slide>
        <Slide>
            <Heading>Evaluation conclusion</Heading>
            <Text>Supports the most essential parts of PT, but still some parts unfinished</Text>
        </Slide>
    </>
);

export default Evaluation;