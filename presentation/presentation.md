# PTS

## Introduction

### Research questions

## Background

### PT

#### Intro

Package Templates is a language mechanism for large scale code re-use in OO languages.
Proposed by Krogdahl in 2001, Generic Packages

#### Defining packages and templates

#### Instantiating templates

#### Renaming

Kan rename klasser og klasse attributter.
Spesifiser at med attributter menes både fields og methods.

#### Additions

Extend class with attributes and interfaces.
Equal attribute signature = override.

#### Merging

same name = merge

#### Required Types

RT kan ha både nominelle og strukturelle constraints.
RT kan propageres.
Må gi aktuell parameter i pakker.

#### Open and closed templates

closed = no inst or addto
open templates can instantiate other open templates, as long as this does not lead to cyclic instantiations.
open templates will be closed at compile time.

### TypeScript

#### JavaScript

Mid-90s websites were only static.
JavaScript was created to solve this, by NetScape.
IE reacted and created a similar language JScript.
Feature war mellom IE og NetScape Navigator.

JavaScript har prototype-basert OO.

#### ECMAScript

JavaScript was inteded as an interpreted language, so the feature war meant that websites would not necessarily work across browsers, as the intended JavaScript might work differently in different browsers.
NetScape handed the language over to ECMA in order for it to be standardized.

#### Node.js

Runtime outside the browser with extra features such as access to the filesystem and listening to HTTP requests.

#### TypeScript

Superset of JavaScript with addition of static type definitions.
Used for type-checking program and for docs.

### Nominal vs. Structural

Nominal = types in name only.
All type relations are explicitly stated through either implementing interfaces or super-/subclass relations.

Structural = types based on the structure of the object. Types do not necessarily have explicitly stated relations, but can still conform to each other.

## The Language - PTS

Vi skal utvide typescript gramatikken, trenger da ekstra syntaks for:

- pakker
- templater
- Inst
- renaming
  - with
  - klasse
  - attributt
- additions

### Example program

## Planning

### TypeScript vs JavaScript

- Being able to type-check templates is one of the requirements for PT, this can be done in TS, not in JS.
- Renaming can't be safely performed in a dynamically typed language, often need to determine type in order to find references.

There have been done research into dynamic variants of PT, however since PT has a lot of properties designed around a strong type system we will go for TypeScript.

### Requirements for our approach

- The ability to add custom syntax
- Enable us to semantic analysis

Desired trait:

- Enable us to create a loosely coupled implementation. That is we want to implement the features of PT loosely coupled with whatever is implementing TS, so that updates to TS will not necessarily break our implementation.

### Approaches

- Implementing as internal DSL
- Making a preprocessor for TS compiler
- Making a compiler plugin/transform
- Making a fork of TS compiler
- Making a custom compiler

#### Implementing as internal DSL

Previously done by Axelsen and Krogdahl in Groovy and by Stordahl in Boo, where both utilized their languages' meta-programming capabilities.
Both of these projects' languages enabled them to do compile-time transformations, which we can't do in TS/JS.
Groovy used MOP, JS has similar prototype-based OO.
Could utilize this to implement it.

#### Making a preprocessor for TS compiler

We will define PP as a "dumb compiler".
PP only does textual transformations on the source code without knowledge of the underlying language, while compiler does more advanced analysis and requires knowledge of the language.
Since we need to do semantic analysis in order to perform safe renaming we can't make a simple PP.

#### Making a compiler plugin/transform

Would probably be best as we would get a loosely coupled implementaiton.

##### TS Compiler

Only supports plugins altering the editing experience, so this will not be a viable approach.
If the TS compiler later enables compile time plugins this might be a viable approach as we could potentially get a loosely coupled implementation, and still have access to most of the TypeScript compilers features, such as semantic analysis, etc.

##### Babel

Babel is a transpiler built around plugins.
However, the plugins do not have access to tokenizer/parser, so we can't add custom syntax, making this approach not viable.

#### Making a fork of TS compiler

Similar project has been done by Isene in the Roslyn compiler for C#, so it is possible, however, as Isene was not able to complete the implementation and found out that a project such as this is better fit for a group of two, we will not be going for the same strategy.

#### Making a custom compiler

If we target TS we could ignore most of the TS specific parts of the compiler, and only focus on the PT parts.
This could therefore be a viable solution.

#### Conclusion

custom compiler

## Implementation

### Parser Generator

#### Tree-sitter

Fairly new parser generator used by many such as Github, VSCode.
Commonly used for language servers and syntax highlighting.

Tree-sitter allows for extending grammars, so we will utilize this for our grammar, since it is an extension of TS.

Look at example of grammar.

### Compiler architecthure

parser -> parse tree to AST -> closing templates -> type-check -> code generation

### Parse tree to AST

Need to do it because the parse tree is weird, due to tree-sitter using NAN instead of N-api.

### Closing templates

- Scope AST
- Transform references to RefNodes
- Perform the rename
- Go back to original AST
- Merge classes (and addto)

### Type check

Generate code for each template and package and run TS compiler on the output.

### Code generation

Combine leaf nodes textual representation for packages and remove templates.

Use prettier to get nicely formatted TypeScript, optionally use TypeScript compiler to produce JS.

### Completing the implementation

#### Addto

Need to implement overriding of attributes.

Hacky way = just append addtos at the bottom of classes with @ts-ignore.

Good way = More advanced AST transformation for classes and addtos that are aware of their attributes.

#### Finding all declarations and references

Most can probably be done similar to how it is done in the current implementation.
A lot of it does require more advanced semantic analysis in order to determine what are true references.
We currently ignore explicitly stated types for reference identification.

#### Support multi file programs

Might need custom syntax, could likely just create a preprocessor.

## Using PTS

Demo install with npm

Show Pokemon example

## Evaluation

We will see if our the PTS language and our implementation fulfills the requirement of PT.

### The requirements of PT

- Parallel extension
- Hierarchy preservation
- Renaming
- Multiple uses
- Type parameterization
- Class merging
- Collection-level type-checking

#### Parallel extension

Make additions in parallel and reference the additions as if they were already part of the implementation.

#### Hierarchy preservation

Any transformations made such as class merging and additions should not affect the inheritance hierachy.

#### Renaming

Should be possible to rename classes and class attributes.

#### Multiple uses

It should be possible to inst templates several times, and each instantiation should be independent of each other. Renamed to one instantiation should not affect other inst and so on.

#### Type parameterization

RT.

#### Class merging

Should be possible to merge classes.
Union of attributes.

#### Collection-level type-checking

Should be possible to perform colelction-level type-checking.
This helps in verifying that the produced program is also type-safe.

### Do we fulfill the requirements?

#### Parallel extension

Yes.
We fail when we should fail and succeed when we should succeed.

#### Hierarchy preservation

Yes.
The "class declaration signature" (class A extends C) are also merged during class merging, and we therefore always preserve all of the stated relations.

#### Renaming

Kind of, since we haven't implemented all reference types we will not be able to rename everything.
We are also wrongly renaming some things, since we are ignoring the explicitly stated types.

#### Multiple uses

Yes.
This was achieved due to our strong focus on immutability during implementation, so that instantiations would always be kept independent.

#### Type parameterization

Not a focus for this thesis.
Partly because we can achieve some of the functionality through empty classes in templates, but mostly because our project already had enough PT functionality to focus on.

#### Class merging

Partly, we do merge classes and addto's but we do not correctly perform overrides, yet.

#### Collection-level type-checking

Yes, this is done in the type-check stage of the compiler as discussed previously.

## Discussion - structural vs nominal

### Advantages of Nominal

#### Subtypes

Subtype relations are trivial to check, as all subtype relations are explcititly stated, while in structural type systems this has to be structurally checked for each subtype relation.

#### Runtime type-checking

Often runtime-object in nominall typed langauges are tagged with their type.
This makes it cheap to do instanceof checks or upcasts.

### Advantages of Structural

#### Arguably tidier and more elegant

Types contain all information needed to understand it, while nominal types are just names in a global collection of names.

#### More general functions/classes

Malayeri and Aldrich's study showed that by utilizing structural typing in some common open source Java projects the typed could become more general, where the average structural type contained 3.5 methods, while the average nominal type contained 37.8 methods.

### Disadvantage of Structural

#### Spurious subsumption

Since structural types are not confined to explicit relations we could potentially get unwanted functionality by using a type-safe value in a context it is not intended to be used.

### Which better fits PT?

Both have strong use cases.
Structural typing might fit better with the overall theme of re-use, however it also has some disadvantages in PT such as with renaming.

Nominal PT as of now leads to a less problematic language mechanism, where you at least are able to "fix" all errors made during renaming.
Nominal PT has been researched more than structural PT, so it is expected that it would have a more complete feature set.
Further research into structural PT could potentially fix some of the quirks we have seen now.

## Contributions

We have contributed:

- The PTS language
- The PTS compiler
- The PTS parser
- Expereience in approaching such projects

## Concluding remarks

### Research questions

#### RQ1:

PT benefits from TS's ecosystem.

- npm

There are also some disadvantages such as the renaming quirks we have talked about.

#### RQ2:

While renames of all references to classes and attributes are still performed, the references are not necessarily the same.
Since objects in structurally typed languages not necessarily have the same explicit relation to the classes it was constructed from, they might also not be references.
This results in renaming of objects possibly breaking a program.

Code example

#### RQ3:

- Structural typing fits nicely fit the overall theme of PT.
- Structural typing gives the programmer more flexability than with nominal typing.

### In retrospect

We should probably have opted to go for TS compiler fork as our approach, as it might seem that correctly identifying all references will require quite a lot of semantic analysis, which we would have gotten for free in a fork of the TS compiler.

### Future works

- Finishing the PTS compiler
- Improve compiler error messages
- Make syntax highlighting for PTS
