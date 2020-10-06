# Approaches

There is in general three approaches we can take:

- TypeScript preprocessor
- TypeScript fork
- "Typescript Compiler plugin / Transform"

**Hypothesis:**
Writing a plugin / transform seems to be the correct way to go, as this will enable us to add our language extension without depending too much on the implementation of the language. 
Loosely coupled.
Will make it easier to keep the language up-to-date as the compiler is separate from our implementation.

## TypeScript Compiler Preprocessor

## Forking the TypeScript Compiler

## Writing a custom transformer / plugin

Although the TypeScript compiler does not support compile-time plugins / transforms there are a lot of alternatives that do support this:

- Babel
- ttypescript
- ts-loader / awesome-typescript-loader
- ts-node

### Babel

Widely used. The primary target of Babel is JavaScript, however it does have plugins for TypeScript, which we could depend on.

After trying to write a simple Babel-plugin it is not as nice as I first thought, as it does still force me to fork the babel-parser in order to have custom syntax.
One of the main reasons for choosing a plugin approach is to get a loosely coupled system, however having to changing the babel-parser no longer makes it as loosely coupled.

It is also not as easy as I had hoped to make a plugin, as there is a severe lack of documentation, and it seems that most babel-plugins heavily takes use of internal utils and helpers, which is hard to use as a third party.

### ttypescript

tsc alt

### ts-loader / Awesome TypeScript Loader

For webpack

### ts-node

Runtime / REPL