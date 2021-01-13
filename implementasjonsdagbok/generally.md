# Generally PTS

## Class fields

For å holde språket og implementasjon vil jeg ikke tillate annet en "identifiers" som gyldige class fields.
Tillater ikke computed_propery_names, da vi ikke kan evaluere navnet ved kompileringstid, og vi kan derfor ikke rename de.

Kan kanskje tillate strings som propertynavn, men da må jeg også `a["property"]`, og ikke bare `a.property`. Dette vil aldri bli helt riktig siden vi kan ha et expression, som vi ikke kan rename, `a[1 + 2]`

### Lovlig

```javascript
class A {
    i = 0;

    function f() {
        return 1;
    }
}
```

### Ikke lovlig

Altså, selv om det under er gyldig i TypeScript, vil jeg ikke tillate dette i PTS.

```javascript
class B {
  "illegal attribute name" = 2;
  "😎" = "sunglasses"; // string as property name
  [new A()] = 321; // computed_propery_name
}
```
