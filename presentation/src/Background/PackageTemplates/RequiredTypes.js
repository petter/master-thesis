import React from "react";
import { Slide, Heading, Text, UnorderedList, ListItem } from "spectacle";
import Code from "../../components/Code";

const RequiredTypes = () => (
  <>
    <Slide>
      <Heading>Required types</Heading>
      <UnorderedList>
        <ListItem>Extension of PT by Axelsen</ListItem>
        <ListItem>Generic types at collection level</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Required types</Heading>
      <Code language="java">{`
                required type R { }
            `}</Code>
    </Slide>
    <Slide>
      <Heading>Required types</Heading>
      <Text>
        Can be constrained by giving both nominal and structural types
      </Text>
      <Code language="java">{`
                required type R extends Runnable { }
                required type R { void f(); }
                required type R extends Runnable { void f(); }
            `}</Code>
    </Slide>
    <Slide>
      <Heading>Required types</Heading>
      <Code language="java">{`
                template ListOf {
                    required type R { }
                    class Node {
                        Node next;
                        R data;
                    }

                    class List {
                        Node first, last;
                    }
                }

                package P {
                    class Person {
                        String name;
                    }

                    inst ListOf with R <= Person;
                }
            `}</Code>
    </Slide>
    <Slide>
      <Heading>Required types</Heading>
      <Code language="java">{`
                package P {
                    class Person {
                        String name;
                    }

                    inst ListOf with R <= Person;
                }
            `}</Code>
    </Slide>
    <Slide>
      <Heading>Required types - propagated</Heading>
      <Code language="java">{`
                template T {
                    inst ListOf;
                }
            `}</Code>
    </Slide>
  </>
);

export default RequiredTypes;
