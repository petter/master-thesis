import React from "react";
import {
  Appear,
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  CodeSpan,
} from "spectacle";
import Code from "../../components/Code";

const Renaming = () => (
  <>
    <Slide>
      <Heading>Renaming</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            <Text>Classes</Text>
            <UnorderedList>
              <ListItem>
                <CodeSpan>A => B</CodeSpan>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Class attributes</Text>
            <UnorderedList>
              <ListItem>
                <CodeSpan>i -> j</CodeSpan>
              </ListItem>
              <ListItem>
                <CodeSpan>f(int, int) -> g(int, int)</CodeSpan>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Renaming - the Graph template</Heading>
      <Code language="java">{`
                template Graph {
                    class Node { ... }
                    class Edge {
                        Node getNodeFrom() { ... }
                        Node getNodeTo() { ... }
                    }
                    class Graph { ... }
                }
            `}</Code>
    </Slide>
    <Slide>
      <Heading>Renaming - adapting the Graph template</Heading>
      <Code language="java">{`
                package RoadMap {
                    inst Graph with
                        Node => City,
                        Edge => Road
                            (getNodeFrom() -> getStartingCity(),
                             getNodeTo() -> getDestinationCity()),
                        Graph => RoadSystem;
                }
            `}</Code>
    </Slide>
    <Slide>
      <Heading>Renaming - Result of adaptation</Heading>
      <Code language="java">{`
                package RoadMap {
                    class City { ... }
                    class Road {
                        City getStartingCity() { ... }
                        City getDestinationCity() { ... }
                    }
                    class RoadSystem { ... }
                }
            `}</Code>
    </Slide>
  </>
);

export default Renaming;
