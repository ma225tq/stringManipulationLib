Jag är lite dålig på att läsa långa instruktioner och skrev det mesta innan jag läst hela kapitel 2 och kapitel 3 i boken. Missade även helt att det skulle vara objektorienterat som jag skrev på Slack. Koden hade nog blivit enklare om den är uppdelad i klasser efter liknande funktioner. En kommentar per funktion om vad som förväntas av in- och output är nog inte heller fel om man ska släppa det som bibliotek, vilket jag inte hunnit.

Jag tycker dock att jag lärt mig en hel del av boken och workshopen. 

Min namngivning är okej på en del funktioner, men det jag hade ändrat i efterhand är bl.a.:

moveChar - Det är inte tydligt vad den gör mer än “flytta ett tecken”. Vad det betyder är rätt oklart. Tanken är att man ska kunna välja ett tecken i en sträng och flytta den ett bestämt antal steg, antingen åt höger eller vänster. Kanske hade moveCharacterInString varit ett mer “intention-revealing” namn. Funktionen i övrigt har också sina brister, t.ex krävs 4 argument. Dödssynd enligt kapitel 3 och jag håller med om att det blir krångligt. 

Även removeChar. removeCharacterFromString är tydligare. 

Vissa funktion-namn är substantiv och vissa verb. Funktioner bör ju enbart vara verb. T.ex alphabeticalOrder och alla funktioner som heter slutar på -case; camelCase, kebabCase m.fl. sortStringsByFirstLetter respektive ändra till att sluta på -casify hade varit bättre. Eller kanske bara convertToWhateverCase (det var ju inget fel med längre namn enligt boken) om casify låter för töntigt. 

Att förkorta “character” till “char” är även det diskuterbart, även om det är en känd förkortning. (Avoid mental mapping, readers shouldn’t have to mentally translate your names.) Det uppstod intressant nog en liten diskussion huruvida man skulle uttala det “schar” eller “cár” som början på “character” under code reviewen. Alltså kom vi in på ytterligare en regel, use pronounceable names. 

Alla funktioner har felhantering för att verifiera att inputen är av rätt typ. (JavaScript är ju underbart på det sättet.) Detta hade kunnat brytas ut till egna funktioner så slipper man alla fula kodblock med felhantering. (DO ONE THING!) Dessutom är felmeddelandena lite inkonsekventa. Ibland står det “string must be a String” och ibland “Input must be a string”. 


I många funktioner har jag en variabel som heter manipulatedString. Det säger inte så mycket, det borde stå hur den blivit “manipulerad”. Även result är ett dåligt namn som inte säger någonting.

|  Function name              | Test method(s)                                                         
|-----------------------------|--------------------------------------------------------------------------------|--------------------|
| camelCase                   | Checked conversion to camelCase for various different inputs.                           | 
|                             | Tested error handling for inputs of incorrect types.                                   |                    |
| capitalizeFirstLetter       | Checked capitalization of first letter for various different strings.                    | 
                           | Tested error handling for inputs of incorrect types.                                   |                    |
| countWords                  | Checked the word count of strings.                                                 | 
|                             | Tested error handling for inputs of incorrect types.                                   |                    |
| kebabCase                   | Checked conversion to kebab-case for various inputs.                           |
|                             | Tested error handling for inputs of incorrect types.                                   |                    |
| lineBreakAfterEachWord      | Checked if a line break was added after each word.                             | 
|                             | Tested error handling for inputs of incorrect types.                                   |                    |
| numberedList                | Checked if a number was added before each word.                                |
|                             | Tested error handling for inputs of incorrect types                                   |                    |
| removeChar                  | Checked removal of specified character from a string.                          |
|                             | Tested error handling for inputs of incorrect types.   |                    |
| removeWhiteSpaces           | Checked removal of all white spaces from a string.                             |
|                             | Tested error handling for inputs of incorrect types.                                   |                    |
| snakeCase                   | Checked conversion to snake_case for various inputs.                       |
|                             | Tested error handling for inputs of incorrect types.                                 |                    |
| titleCase                   | Checked capitalization of the first letter of each word, exluding specified words.                       | Passed     |
|                             | Tested error handling for inputs of incorrect types.                                   |                    |
| truncate                    | Checked truncation of a string to the given length.                            |
|                             | Tested error handling for inputs of incorrect types.                                 |                    |

