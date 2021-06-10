import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  FullScreen,
  Progress,
  Slide,
  Deck,
  Box,
} from "spectacle";
import Agenda from "./Agenda";
import Background from "./Background";
import Conclusion from "./Conclusion";
import EvaluationDiscussion from "./EvaluationDiscussion";
import Implementation from "./Implementation";
import Introduction from "./Introduction";
import Planning from "./Planning";
import TheLanguage from "./TheLanguage";
import Usage from "./Usage";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Package Template Script</Heading>
        <Heading fontSize="3em" fontWeight="normal">
          An Implementation of Package Templates in TypeScript
        </Heading>
      </FlexBox>
    </Slide>
    <Agenda />
    <Introduction />
    <Background />
    <TheLanguage />
    {/* <Planning /> */}
    <Implementation />
    <Usage />
    <EvaluationDiscussion />
    <Conclusion />
    <Slide backgroundColor="black"></Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
