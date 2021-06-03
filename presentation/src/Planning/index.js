import React from "react";
import { Slide, Heading, UnorderedList, ListItem, Appear } from "spectacle";

import TypeScriptVSJavaScript from "./TypeScriptVSJavaScript";
import Requirements from "./Requirements";
import InternalDSL from "./InternalDSL";
import Preprocesor from "./Preprocesor";
import TSFork from "./TSFork";
import CustomCompiler from "./CustomCompiler";
import Plugin from "./Plugin";

const Planning = () => (
  <>
    <Slide>
      <Heading>Planning</Heading>
    </Slide>
    <TypeScriptVSJavaScript />
    <Requirements />
    <Slide>
      <Heading>Approaches</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Implementing as internal DSL</ListItem>
        </Appear>
        <Appear>
          <ListItem>Making a preprocessor for TS compiler</ListItem>
        </Appear>
        <Appear>
          <ListItem>Making a compiler plugin/transform</ListItem>
        </Appear>
        <Appear>
          <ListItem>Making a fork of TS compiler</ListItem>
        </Appear>
        <Appear>
          <ListItem>Making a custom compiler</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <InternalDSL />
    <Preprocesor />
    <Plugin />
    <TSFork />
    <CustomCompiler />
    <Slide>
      <Heading>Approach conclusion</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Internal DSL: We are not able to rename properly</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Preprocessor: Won't be able to perform safe renamings
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Compiler plugin: Either not access to parser or compile time
            transformations at all
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            TypeScript compiler fork: A task better fit for two or more people
          </ListItem>
        </Appear>
        <Appear>
          <ListItem fontWeight="bold">
            Custom compiler: Seemingly the only viable option
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  </>
);

export default Planning;
