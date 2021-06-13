import React from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  UnorderedList,
  ListItem,
  CodeSpan,
} from "spectacle";
import Code from "../components/Code";

const TheLanguage = () => (
  <>
    <Slide>
      <Heading>The PTS programming language</Heading>
      <UnorderedList>
        <Appear><ListItem>A superset of TypeScript</ListItem></Appear>
      <Appear><ListItem>
        <Text>Adds functionality for:</Text>
        <UnorderedList>
          <ListItem>Defining packages and templates</ListItem>
          <ListItem>Instantiating templates</ListItem>
          <ListItem>Renaming</ListItem>
          <ListItem>Additions</ListItem>
        </UnorderedList>
      </ListItem></Appear>
      </UnorderedList>
    </Slide>
    {/* <Slide>
      <Heading>PTS - defining packages and templates</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Templates - <CodeSpan>template</CodeSpan>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Packages
            <UnorderedList>
              <ListItem>
                <CodeSpan>package</CodeSpan> - reserved
              </ListItem>
              <ListItem>
                <CodeSpan>module</CodeSpan> - reserved
              </ListItem>
              <ListItem>
                <CodeSpan>pack</CodeSpan> - OK
              </ListItem>
            </UnorderedList>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>PTS - instantiating templates</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>inst</CodeSpan> - OK
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>PTS - renaming</Heading>
      <Code language="java">{`inst T with A => B (i -> j);`}</Code>
      <UnorderedList>
        <ListItem>
          <CodeSpan>inst</CodeSpan> - OK
        </ListItem>
        <ListItem>
          <CodeSpan>with</CodeSpan> - reserved
          <UnorderedList>
            <ListItem>
              <CodeSpan>{"{ }"}</CodeSpan> - OK
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <CodeSpan>=></CodeSpan> - reserved
          <UnorderedList>
            <ListItem>
              <CodeSpan>-></CodeSpan> - OK
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>PTS - additions</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>addto</CodeSpan> - OK
        </ListItem>
      </UnorderedList>
    </Slide> */}
    <Slide>
      <Heading>PTS - example program</Heading>
      <Code language="typescript">{`
            template T {
                class A {
                    i = 0;
                }
            }

            pack P {
                interface I { ... }
                inst T { A -> B (i -> j) };
                addto B implements I {
                    x = this.j;
                }
            }`}</Code>
    </Slide>
  </>
);

export default TheLanguage;
