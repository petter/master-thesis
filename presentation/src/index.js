import React from 'react';
import ReactDOM from 'react-dom';

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes
} from 'spectacle';
import Background from './background';
import Introduction from './Introduction';

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
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
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
          <Heading>Package Template Script</Heading>
          <Heading fontSize="3em" fontWeight="normal">An Implementation of Package Templates in TypeScript</Heading>
      </FlexBox>
    </Slide>
    <Introduction />
    <Background />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
