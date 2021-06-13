import React from "react";
import { Slide, Appear, Heading, Text, UnorderedList, ListItem } from "spectacle";
import Code from '../components/Code'

const Parser = () => (
  <>
    <Slide>
      <Heading>Lexer/Parser</Heading>
      <Text>We will use a parser generator</Text>
    </Slide>
    <Slide>
      <Heading>Tree-sitter</Heading>
      <UnorderedList>
        <Appear><ListItem>General purpose parser generator</ListItem></Appear>
        <Appear><ListItem>Commonly used for syntax highligthing and language servers</ListItem></Appear>
        <Appear><ListItem>Allows for extending grammars</ListItem></Appear>
      </UnorderedList>
    </Slide>
    {/* <Slide>
      <Heading>Tree-sitter</Heading>
      <Code language="javascript" highlightRanges={[[1,1], [6,6]]}>{`
        module.exports = grammar(require('tree-sitter-typescript/...'), {
          name: 'pts',
          rules: {
            template_declaration: $ =>  seq('template', $.identifier, $.package_template_body),
            package_declaration: $ =>  seq('pack', $.identifier, $.package_template_body),
            _declaration: ($, previous) => choice(previous, $.template_declaration, $.pacakge_declaration)
            ...
          }
        });
      `}</Code>
    </Slide> */}
  </>
);

export default Parser;
