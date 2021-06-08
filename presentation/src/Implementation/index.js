import React from "react";
import { Slide, Heading } from "spectacle";
import Parser from "./Parser";
import CompilerArchitechture from "./CompilerArchitechture";
import ParseTreeToAST from "./ParseTreeToAST";
import ClosingTemplates from "./ClosingTemplates";
import TypeCheck from "./TypeCheck";
import CodeGeneration from "./CodeGeneration";
import CompletingImplementation from "./CompletingImplementation";

const Implementation = () => (
  <>
    <Slide>
      <Heading>Implementation</Heading>
    </Slide>
    <CompilerArchitechture />
    <Parser />
    <ParseTreeToAST />
    <ClosingTemplates />
    <TypeCheck />
    <CodeGeneration />
    <CompletingImplementation />
  </>
);

export default Implementation;
