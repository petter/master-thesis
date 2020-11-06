
Her er et utkast til en BNF-grammatikk for PT i TS.

```
<template_declaration> ::= "template" <identifier> <package_template_body> ;
<package_declaration> ::= "package" <identifier> <package_template_body> ;
<package_template_body> ::= "{" { <package_template_body_decl> } "}" ;
<package_template_body_decl> ::= <inst_statement> 
                               | <addto_statement> 
                               | <class_declaration> 
                               | <interface_declaration> ;

<inst_statement> ::= "inst" <identifier> 
                            [ "{" <class_renaming> { "," <class_renaming> } "}" ] ";" ;
<class_renaming> ::= <rename> [ "(" <rename> { "," <rename> } ")" ] ;
<rename> ::= <identifier> "->" <identifier> ;
<addto_statement> ::= "addto" <identifier> <class_body> ";" ;
```

Ikke-terminalene `<identifier>`, `<class_declaration>`, `<class_body>` og `<interface_declaration>` er ikke-terminaler fra JS(ESTree) og TS([typescript 1.8](https://javascript.xgqfrms.xyz/pdfs/TypeScript%20Language%20Specification.pdf), ikke lenger oppdatert) grammatikkene.

Tenker å bruke [tree-sitter](https://tree-sitter.github.io/tree-sitter/) da det virker som at det er det enkleste, med tanke på å utvide typescript-grammatikken.
Ser at det er mulig å utvide en grammatikk ved å spesifisere den som base grammar ved definisjon av grammatikk;

```javascript
grammar(require('tree-sitter-typescript/typescript/grammar'), {
    ...
});
```

