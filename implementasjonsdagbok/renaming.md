# Renaming

## Skop

### Hva er en variabel?

- Bare en string?
- En referanse til en type?


### Hva må vi vite om en variabel for renaming

- Navn
- Om den er instans av en klasse, og i så fall hvilken

#### Eksempler på variabeldefinisjoner

```typescript
let a = 0;
```

Her er det ikke viktig for oss å vite typen, da denne ikke påvirker renaming noe.

---

```typescript
let a = new A();
```

Her må vi vite at variabelen `a` er av type `A`, da metoder eller felter i `A` kan bli renamet og vi må derfor 

---

```typescript

```
