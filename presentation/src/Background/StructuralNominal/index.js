import React from "react";
import { Slide, Heading } from "spectacle";
import Nominal from "./Nominal";
import Structural from "./Structural";

const StructuralNominal = () => (
  <>
    <Slide>
      <Heading>Nominal and structural type systems</Heading>
    </Slide>
    <Nominal />
    <Structural />
  </>
);

export default StructuralNominal;
