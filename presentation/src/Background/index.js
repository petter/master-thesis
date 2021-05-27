import React from 'react'
import {Slide, FlexBox, Heading} from 'spectacle';

import PackageTemplates from "./PackageTemplates";
import StructuralNominal from './StructuralNominal';
import TypeScript from './TypeScript';

const Background = () => (
    <>
        <Slide>
            <FlexBox height="100%" flexDirection="column">
                <Heading>Background</Heading>
            </FlexBox>
        </Slide>
        <PackageTemplates />
        <TypeScript />
        <StructuralNominal />
    </>
)

export default Background;