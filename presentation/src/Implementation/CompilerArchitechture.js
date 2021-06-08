import React from "react";
import { Slide, Heading, FlexBox, Grid } from "spectacle";

const Box = ({children}) => (
  <FlexBox backgroundColor="#eee" padding="2em" color="black" borderRadius="5px">{children}</FlexBox>
)

const CompilerArchitechture = () => (
  <>
    <Slide>
      <Heading>Compiler architechture</Heading>
      <FlexBox>
        <Grid width="fit-content" gridTemplateColumns="1fr" gridGap=".5em">
          <Box>Lexer/Parser</Box> 
          <Box>Parse Tree -> AST</Box> 
          <Box>Closing templates</Box> 
          <Box>Template type check</Box> 
          <Box>Code generation</Box> 
        </Grid>
      </FlexBox>
    </Slide>
  </>
);

export default CompilerArchitechture;
