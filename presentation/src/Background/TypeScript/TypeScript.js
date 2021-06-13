import React from 'react';
import { Slide, Heading, UnorderedList, ListItem } from 'spectacle';

const TypeScript = () => (
    <>
        <Slide>
            <Heading>TypeScript</Heading>
            <UnorderedList>
                <ListItem>
                    Superset of JavaScript
                    <UnorderedList>
                        <ListItem>Multi paradigm</ListItem>
                        <ListItem>Prototype based OO</ListItem>
                    </UnorderedList>
                    </ListItem>
                <ListItem>Adds static type definitions</ListItem>
                <ListItem>Structural type system</ListItem>
            </UnorderedList>
        </Slide>
    </>
);

export default TypeScript;