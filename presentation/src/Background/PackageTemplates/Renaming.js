import React from 'react'
import { Slide, Heading } from 'spectacle';
import Code from '../../components/Code';

const Renaming = () => (
    <>
        <Slide>
            <Heading>
                Renaming
            </Heading>
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
            <Heading>
                Renaming
            </Heading>
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
            <Heading>
                Renaming
            </Heading>
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