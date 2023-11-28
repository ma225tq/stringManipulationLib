# Kapitel 2

Kapitlet berör mest vikten av meningsfulla namn inom programmering. Ett namn på en variabel bör avslöja vad den representerar utan att man ska behöva gissa eller dra slutsats av kontexten. Detta gör att man snabbare kan förstå koden och därmed lättare underhålla den. Ett exempel från boken är en variabel som ska innehålla information om hur lång tid som gått sedan något initierats; ett bra namn på en sådan skulle kunna vara "daysSinceCreation" eller "elapsedTimeInDays", istället för något vagt såsom "time" eller "data".

Man bör undvika reserverade ord i programmeringsssammanhang då dessa kan vara vilseledande. T.ex vore det olämpligt att döpa en variabel till List om det inte är en liststruktur.

Namngivningen bör vara konsekvent och koncis utan att den är otillräckligt beskrivande. Man får inga pluspoäng av påhittade förkortningar. Samtidigt ska man inte använda ordvitsar eller internskämt.

| Namn på funktion / variabel | Reflektion |
|----------|----------|
| [moveChar](./src/moveChar.js)  | Det är inte tydligt vad den gör mer än “flytta ett tecken”. Vad det betyder är rätt oklart. Tanken är att man ska kunna välja ett tecken i en sträng och flytta den ett bestämt antal steg, antingen åt höger eller vänster. Kanske hade moveCharacterInString varit ett mer “intention-revealing” namn. Att förkorta “character” till “char” är även det diskuterbart, även om det är en känd förkortning. ("Avoid mental mapping, readers shouldn’t have to mentally translate your names".) Det uppstod intressant nog en liten diskussion huruvida man skulle uttala det “schar” eller “cár” som början på “character” under code reviewen. Alltså kom vi in på ytterligare en regel, "use pronounceable names".  |
| [removeChar](./src/removeChar.js)  | removeCharacterFromString är tydligare.   |
| alphabeticalOrder m.fl  | Vissa funktion-namn är substantiv och vissa verb. Funktioner bör ju enbart vara verb. T.ex alphabeticalOrder och alla funktioner som heter slutar på -case; camelCase, kebabCase m.fl. sortStringsByFirstLetter respektive ändra till att sluta på -casify hade varit bättre. Eller kanske bara convertToWhateverCase (det var ju inget fel med längre namn enligt boken) om casify låter för töntigt.   |
| manipulatedString  | Används som variabelnamn i flera funktioner. Det säger inte så mycket, det borde stå hur den blivit “manipulerad”. Även result är ett dåligt namn som inte säger någonting. ("Use descriptive names") |
| result  | Återigen ett intetsägande variabelnamn.  ("Use descriptive names") |
| wordsNotToCapitalize | Namnet är "Intention-revealing" och undviker onödiga förkortningar eller förvirrande likheter med andra variabelnamn / reserverade ord. |


# Kapitel 3

Kapitlet handlar om funktioner, deras namn och funktionalitet. En bra funktion är enligt boken så kort som möjligt och tar så få argument som möjligt. (Gärna inga alls.) För många argument gör funktionen svår att förstå. Funktionen ska endast göra en sak, och göra den bra. Detta ger lättöverskådlig och återanvändbar kod. Namnet ska vara ett beskrivande verb och återigen finns inga pluspoäng för förkortningar. 
Funktionen ska helst inte ha sidoeffekter eller uppträda oförutsägbart på annat sätt.

| Namn på funktion | Reflektion |
|----------|----------|
| [lineBreakAfterEachWord](./src/lineBreakAfterEachWord.js)  | Förutom valideringen som borde brytas ut gör funktionen bara en sak. Bra längd. ("functions should be small..") Dåligt namn, inget verb. addLineBreakAfterEachWord hade varit bättre.  |
| [moveChar](./src/moveChar.js)  | Funktionen har sina brister, t.ex krävs 4 argument. Dödssynd enligt kapitel 3 och jag håller med om att det blir krångligt. ("More than three [arguments] (polyadic) requires very special justification—and then shouldn’t be used anyway.") Den gör mer än en sak; validerar, hittar indexen för tecknet att flytta och flyttar det sedan. Det borde kanske vara fler funktioner eller en klass enligt boken. Den är även längre än 20 rader, även utan valideringen. |
|   [capitalizeFirstLetter](./src/capitalizeFirstLetter.js) | Bra namn, skvallrar om intention och har ett verb. ("Intention-revealing". )Gör en sak förutom felhanteringen. ("Do one thing"; "error handling is one thing".) Använder endast ett argument.  |
|  [replaceChar](./src/capitalizeFirstLetter.js) | Återigen valideringen som behöver brytas ut. 3 argument är mycket men jag ser inte hur jag skulle lösa det på annat sätt. |
|  Alla funktioner | Alla funktioner saknar sidoeffekter, d.v.s. de gör inte ändringar på det som skickas in direkt utan processar det i funktionen och returnerar något nytt. Alla funktioner har även någon typ av felhantering där ett felmeddelande returneras, vilket är dåligt både av anledningen att funktioner ska göra en sak ("error handling is one thing") och att de bör kasta undantag istället för att returnera felkoder. Det blir även en blandning av abstraktionsnivåer. ("One level of abstraction per function".) Det är även samma kod på många ställen. ("Don't repeat yourself)|
| alphabeticalOrder | Funktionen gör mer än en sak. Den validerar indata, sorterar arrayen och formaterar resultatet. ("Do one thing".) Namnet är inte ett verb. 


# Workshop

Några förslag på förbättringar / kritik jag fick under code-reviewen var;

Gruppera funktionerna i klasser för liknande funktioner. Det finns till exempel flera funktioner som ändrar case på strängen och dessa skulle kunna bilda en klass. 

Det är rätt många funktioner som behöver importeras vilket kan vara jobbigt.
(Detta är löst till L3 genom att alla är importerade till index.js.)

Det uppstod en liten diskussion i huruvida "char" ska uttalas "schar" eller "cár" som i början på "character". Att förkorta det till char är kanske onödigt.

Funktionen moveChar är dessutom för komplicerad och tar för många argument.

Felhanteringen skulle kunna brytas ut då det är en del upprepning i varje funktion.

Det finns inga kommentarer.

