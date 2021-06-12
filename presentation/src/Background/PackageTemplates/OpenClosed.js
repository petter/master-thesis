import React from 'react';
import { Slide, Heading, Text } from 'spectacle';
import Code from '../../components/Code';

const OpenClosed = () => (
    <>
        <Slide>
            <Heading>Open and closed templates</Heading>
            <Text>Closed = No instantiation or addition statements</Text>
        </Slide>
        <Slide>
            <Heading>Closed template</Heading>
            <Code language="java">{`
                template T {
                    class A { ... } 
                } 
            `}</Code>
        </Slide>
        <Slide>
            <Heading>Open template</Heading>
            <Code language="java">{`
                template T1 {
                    class A { ... } 
                }

                template T2 {
                    inst T1;
                }
            `}</Code>
        </Slide>
        <Slide>
            <Heading>Open template - now closed</Heading>
            <Code language="java">{`
                template T1 {
                    class A { ... } 
                }

                template T2 {
                    class A { ... } 
                }
            `}</Code>
        </Slide>
        {/* <Slide>
            <Heading>Can't contain cyclic instantiations</Heading>
            <Code language="java">{`
                template T1 {
                    inst T2;
                }

                template T2 {
                    inst T1;
                }
            `}</Code>
        </Slide> */}
        {/* <Slide>
            <Heading>Can't contain cyclic instantiations - transitive</Heading>
            <Code language="java">{`
                template T1 {
                    inst T2;
                }

                template T2 {
                    inst T3;
                }

                template T3 {
                    inst T1;
                }
            `}</Code>
        </Slide> */}
    </>
);

export default OpenClosed;