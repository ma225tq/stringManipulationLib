Jag är lite dålig på att läsa långa instruktioner och skrev det mesta innan jag läst hela kapitel 2 och kapitel 3 i boken. Missade även helt att det skulle vara objektorienterat som jag skrev på Slack. Koden hade nog blivit enklare om den är uppdelad i klasser efter liknande funktioner. En kommentar per funktion om vad som förväntas av in- och output är nog inte heller fel om man ska släppa det som bibliotek, vilket jag inte hunnit.

Jag tycker dock att jag lärt mig en hel del av boken och workshopen. 

Alla funktioner har felhantering för att verifiera att inputen är av rätt typ. (JavaScript är ju underbart på det sättet.) Detta hade kunnat brytas ut till egna funktioner så slipper man alla fula kodblock med felhantering. (DO ONE THING!) Dessutom är felmeddelandena lite inkonsekventa. Ibland står det “string must be a String” och ibland “Input must be a string”. 

# Kapitel 2

| Namn på funktion / variabel | Reflektion |
|----------|----------|
| [moveChar](./src/moveChar.js)  | Det är inte tydligt vad den gör mer än “flytta ett tecken”. Vad det betyder är rätt oklart. Tanken är att man ska kunna välja ett tecken i en sträng och flytta den ett bestämt antal steg, antingen åt höger eller vänster. Kanske hade moveCharacterInString varit ett mer “intention-revealing” namn. Att förkorta “character” till “char” är även det diskuterbart, även om det är en känd förkortning. (Avoid mental mapping, readers shouldn’t have to mentally translate your names.) Det uppstod intressant nog en liten diskussion huruvida man skulle uttala det “schar” eller “cár” som början på “character” under code reviewen. Alltså kom vi in på ytterligare en regel, use pronounceable names.  |
| [removeChar](./src/removeChar.js)  | removeCharacterFromString är tydligare.   |
| alphabeticalOrder m.fl  | Vissa funktion-namn är substantiv och vissa verb. Funktioner bör ju enbart vara verb. T.ex alphabeticalOrder och alla funktioner som heter slutar på -case; camelCase, kebabCase m.fl. sortStringsByFirstLetter respektive ändra till att sluta på -casify hade varit bättre. Eller kanske bara convertToWhateverCase (det var ju inget fel med längre namn enligt boken) om casify låter för töntigt.   |
| manipulatedString  | Används som variiabelnamn i flera funktioner. Det säger inte så mycket, det borde stå hur den blivit “manipulerad”. Även result är ett dåligt namn som inte säger någonting.  |
| result  | Återigen ett intetsägande variabelnamn.  |

# Kapitel 3

| Namn på funktion | Reflektion |
|----------|----------|
| [lineBreakAfterEachWord](./src/lineBreakAfterEachWord.js)  | Förutom valideringen som borde brytas ut gör funktionen bara en sak. Bra längd. (Kort.) Dåligt namn, inget verb. addLineBreakAfterEachWord hade varit bättre.  |
| [moveChar](./src/moveChar.js)  | Funktionen har sina brister, t.ex krävs 4 argument. Dödssynd enligt kapitel 3 och jag håller med om att det blir krångligt. Den gör mer än en sak; validerar, hittar indexen för tecknet att flytta och flyttar det sedan. Det borde kanske vara fler funktioner eller en klass enligt boken. Den är även längre än 20 rader, även utan valideringen. |
|   [capitalizeFirstLetter](./src/capitalizeFirstLetter.js) | Bra namn, skvallrar om intention och har ett verb. Gör en sak förutom felhanteringen. Använder endast ett argument. |
|  [replaceChar](./src/capitalizeFirstLetter.js) | Återigen valideringen som behöver brytas ut. 3 argument är mycket men jag ser inte hur jag skulle lösa det på annat sätt. |
|  Alla funktioner | Alla funktioner saknar sidoeffekter, d.v.s. de gör inte ändringar på det som skickas in direkt utan processar det i funktionen och returnerar något nytt. |
