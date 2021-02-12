# Constraints in PTj vs PTS

## PTj

from source-to-source

- Nested class definitions are not allowed. Exempt from this rule are anonymous nested classes created within method definitions.
- Access  modifiers  (public, private, protected)  are not used.  Every definition thus has default access.
- Explicit  constructor  declarations  in  template  classes are not allowed (but calling the implicit constructors,e.g. `new C()`, is permitted).
- Static declarations are not allowed, neither are references to static declarations (methods, variables), e.g.from the Java standard library.
- Generic class or method definitions are not allowed.
- Covariant  return  types  in  the  signatures  of  method overrides are not allowed.
- In  addition  to  ordinary  classes,  templates  may  also contain:
  – Instantiations  of  other  templates  in  the  form  of `inst` statements (see below).
  – Additions to classes from instantiated templates declared with an `adds` clause (see example below) in  the  instantiating  template/package;  this  con-struct  is  called  an addition  class.
  For  each  instantiated  template  class,  there  can  be  at  most one  addition  class,  and  the  addition  class  must have the same name as the instantiated template class.
  
## PTS