import React from 'react'
import { Slide, Heading } from 'spectacle';
import Code from '../../components/Code';

const InstantiationSlide = () => { 
    return (
        <>
            <Slide>
                <Heading>
                    Instantiating templates
                </Heading>
                <Code language="java">{`
                    template T {
                        class A {
                            int i = 0;
                        }
                    }

                    package P {
                        inst T;
                        class B {
                            int j = 0;
                        }
                    }
                `}</Code>
            </Slide>
            <Slide>
                <Heading>
                    Instantiating templates
                </Heading>
                <Code language="java" highlightRanges={[8,10]}>{`
                    template T {
                        class A {
                            int i = 0;
                        }
                    }

                    package P {
                        class A {
                            int i = 0;
                        }
                        class B {
                            int j = 0;
                        }
                    }
                `}</Code>
            </Slide>
        </>
    );
}

export default InstantiationSlide;