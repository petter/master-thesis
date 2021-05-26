import React from 'react';
import { Slide, Heading, Text } from 'spectacle';
import Code from '../../components/Code';

const Structural = () => (
    <>
        <Slide>
            <Heading>Structural</Heading>
            <Text>Types tied to the structure of the object</Text>
            <Code language="typescript">{`
                const a : { i: number } = { i: 1 };
            `}</Code>
        </Slide>
    </>
);

export default Structural;