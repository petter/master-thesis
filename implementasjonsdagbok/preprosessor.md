# pp

Har nå implementert en PTS -> TS transform som gjør om PTS-tre til ts string, men kanskje bedre å gjøre om et PTS-tre til et TS-tre og dermed bruke en simpel pretty printer for å få ut ts-fil.
Ved å gjøre om PTS-tre til TS-string så får jeg ikke jobbet like godt med trestrukturen, og må dermed gjøre litt hacky løsning på fjerning av visse elementer. 
    eks. for å gjøre om en package_declaration til gyldig ts må jeg fjerne de tre første barna til package_declaration, istedenfor å traversere nedover treet og finne de delene jeg vil ha. En endring i grammatikken vil dermed breake denne løsningen.
