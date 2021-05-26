import React from 'react';
import { Slide, Heading, UnorderedList, Appear, ListItem } from 'spectacle';

const Contribution = () => (
    <>
        <Slide>
            <Heading>Contribution</Heading>
            <UnorderedList>
                <Appear>
                    <ListItem>The PTS compiler</ListItem>
                </Appear>
                <Appear>
                    <ListItem>The PTS parser</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Approach experience</ListItem>
                </Appear>
            </UnorderedList>
        </Slide>
    </>
);

export default Contribution;