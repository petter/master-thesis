import React from 'react'
import { Slide, Heading} from "spectacle";
import Code from '../../components/Code';


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
    </>
)

export default PackageTemplates;