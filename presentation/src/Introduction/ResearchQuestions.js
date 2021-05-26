import React from 'react';
import { Slide, Heading, Text, UnorderedList, ListItem, Appear, FlexBox } from 'spectacle';

const ResearchQuestions = () => (
    <>
        <Slide>
            <Heading>Research questions</Heading>
            <UnorderedList>
                <Appear>
                    <ListItem >
                        <strong>RQ1</strong>: How does the language mechanism Package Templates fit into TypeScript?
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem >
                        <strong>RQ2</strong>: Does structural typing change how the core of Package Templates works?
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem >
                        <strong>RQ3</strong>: Will having PT in a structurally typed language have any notable advantages or disadvantages over having it in a nominally typed language?
                    </ListItem>
                </Appear>
            </UnorderedList>
        </Slide>
    </>
);

export default ResearchQuestions;