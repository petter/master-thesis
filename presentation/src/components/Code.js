import React from 'react';
import { CodePane } from 'spectacle';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const Code = (props) => (
    <CodePane theme={tomorrow} {...props} />
)

export default Code;