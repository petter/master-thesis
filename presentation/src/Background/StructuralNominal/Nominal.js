import React from 'react';
import { Slide, Heading, Text } from 'spectacle';
import Code from '../../components/Code';

const Nominal = () => (
    <>
        <Slide>
            <Heading>Nominal</Heading>
            <Text>Types tied to a name</Text>
            <Code language="java">{`
                class A {
                    String s = "some string";
                }
            `}</Code>
        </Slide>
    </>
);

export default Nominal;