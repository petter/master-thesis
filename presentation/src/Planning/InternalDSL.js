import React from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  UnorderedList,
  ListItem,
} from "spectacle";
import Code from "../components/Code";

const InternalDSL = () => (
  <>
    <Slide>
      <Heading>Internal DSL</Heading>
      <Appear>
        <UnorderedList>
          <ListItem>Done by Axelsen and Krogdahl in Groovy - GroovyPT</ListItem>
          <ListItem>Done by Stordahl in Boo - BooPT</ListItem>
          <Appear>
            <ListItem>
              Groovy and Boo has access to compile time transformations - JS
              does not
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              GroovyPT used Meta Object Protocol - we can use prototypes
            </ListItem>
          </Appear>
        </UnorderedList>
      </Appear>
    </Slide>
    <Slide>
      <Heading>Internal DSL</Heading>
      <Text>We need functionality for:</Text>
      <UnorderedList>
        <ListItem>Defining templates</ListItem>
        <ListItem>Renaming classes and class attributes</ListItem>
        <ListItem>Instantiating templates</ListItem>
        <ListItem>Merging classes</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Internal DSL - defining templates</Heading>
      <Code language="typescript">{`
            class T1 {
                static A = class {
                    i = 0;
                }
            }
        `}</Code>
    </Slide>
    <Slide>
      <Heading>Internal DSL - renaming</Heading>
      <Code language="typescript">{`
            class T1 {
                static A = class {
                    i = 0;
                }
            }

            const classRef = T1.A;
            delete T1.A;
            T1.B = classRef;
        `}</Code>
    </Slide>
    <Slide>
      <Heading>Internal DSL - renaming</Heading>
      <Code language="typescript">{`
            class T1 {
                static B = class {
                    i = 0;
                }
            }
        `}</Code>
    </Slide>
    <Slide>
      <Heading>Internal DSL - renaming problem</Heading>
      <Code language="typescript">{`
            class T1 {
                static A = class {
                    i = 0;
                }
                static X = class {
                    f() {
                        return new A();
                    }
                }
            }

            // renaming A to B
            const classRef = T1.A;
            delete T1.A;
            T1.B = classRef;
        `}</Code>
    </Slide>
    <Slide>
      <Heading>Internal DSL - renaming problem</Heading>
      <Code language="typescript">{`
            class T1 {
                static B = class {
                    i = 0;
                }
                static X = class {
                    f() {
                        return new A();
                    }
                }
            }
        `}</Code>
    </Slide>
    <Slide>
      <Heading>Internal DSL - renaming problem</Heading>
      <Code language="typescript">{`
            const x = new T1.X();
            x.f(); // ReferenceError: A is not defined 
        `}</Code>
    </Slide>
    <Slide>
      <Heading>Internal DSL - instantiating tempaltes</Heading>
      <Code language="typescript">{`
            class T2 {
                static A = class {};
            }

            const P = class {};
            for (let attr of Object.keys(T2)) {
                P[attr] = T2[attr];
            }
      `}</Code>
    </Slide>
    <Slide>
      <Heading>Internal DSL - merging classes</Heading>
      <UnorderedList>
        <ListItem>Union of the classes' fields</ListItem>
        <ListItem>Union of the classes' prototypes</ListItem>
      </UnorderedList>
    </Slide>
  </>
);

export default InternalDSL;
