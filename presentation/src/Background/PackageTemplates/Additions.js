
import React from 'react'
import { Slide, Heading } from 'spectacle';
import Code from '../../components/Code';

const Additions = () => (
    <>
        <Slide>
            <Heading>
                Additions
            </Heading>
            <Code language="java">{`
                template T {
                    class A {
                        int i = 0;
                    }
                }

                package P {
                    inst T;
                    interface I {
                        void f();
                    }
                    addto A implements I {
                        void f() { 
                            System.out.println(this.i);
                        }
                    }
                }
            `}</Code>
        </Slide>
        <Slide>
            <Heading>
                Additions
            </Heading>
            <Code language="java">{`
                package P {
                    interface I {
                        void f();
                    }
                    class A implements I {
                        int i = 0;
                        void f() {
                            System.out.println(this.i);
                        }
                    }
                }
            `}</Code>
        </Slide>
    </>
);

export default Additions;