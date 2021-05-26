import React from 'react';
import { Slide, Heading } from 'spectacle';
import Nominal from './Nominal';
import Structural from './Structural';

const StructuralNominal = () => (
    <>
        <Slide>
            <Heading>Structural and nominal type systems</Heading>
        </Slide>
        <Structural />
        <Nominal />
    </>
);

export default StructuralNominal;