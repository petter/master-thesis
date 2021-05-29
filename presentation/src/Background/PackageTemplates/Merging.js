import React from "react";
import { Slide, Heading, Text, UnorderedList, ListItem } from "spectacle";
import Code from "../../components/Code";

const Merging = () => (
  <>
    <Slide>
      <Heading>Class merging</Heading>
      <UnorderedList>
        <ListItem>Equal names = merge</ListItem>
        <ListItem>Union of attributes</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Class merging</Heading>
      <Code language="java">{`
                template T {
                    class A {
                        int i = 0;
                    }
                } 

                package P {
                    inst T;
                    inst T with A => A (i -> j);
                }
            `}</Code>
    </Slide>
    <Slide>
      <Heading>Class merging</Heading>
      <Code language="java">{`
                package P {
                    class A {
                        int i = 0;
                        int j = 0;
                    }
                }
            `}</Code>
    </Slide>
  </>
);

export default Merging;
