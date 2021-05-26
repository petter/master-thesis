import React from 'react'
import { Slide, Heading } from "spectacle";

import Code from '../../components/Code';
import Additions from './Additions';
import InstantiationSlide from './InstantiationSlide';
import Merging from './Merging';
import OpenClosed from './OpenClosed';
import Renaming from './Renaming';
import RequiredTypes from './RequiredTypes';

const PackageTemplates = () => (
    <>
        <Slide>
            <Heading>Defining Packages and Package Templates</Heading>
            <Code language="java">{`
                template T {
                    interface I { ... }
                    class A implements I { ... }
                }

                package P {
                    class B { ... }
                }
            `}</Code>
        </Slide>
        <InstantiationSlide />
        <Renaming />
        <Additions />
        <Merging />
        <RequiredTypes />
        <OpenClosed />
    </>
)

export default PackageTemplates;