test: it should take a text and discern if three separate lines are present
code:
expected output:

```
// A syllable is formed by at least one vowel (a, e, i, o, u, y).
// Divide the syllable between two same consonants.
// Divide between two vowels that make two sounds.
// Use prefixes and suffixes to separate syllables.
// Compound nouns are always divided between the two words.
// should have three lines
// 5-7-5

// if is separted by a comma- to make that into an element in an array
function syllableCounter(line1, line2, line3) {
let trimmedString1 = line1.trim();
let letterArray1 = trimmedString1.split();
let syllableCount = 0;

for (let i =0; i <= letterArray.length; i++) {
 if(letterArray[i] === 'a' || 'e' || 'i' || 'o' || 'u' || 'u' || 'y') {
 syllableCount ++;
    }
     if (syllableCount === 5) {
         return true;
                }
            }
            let trimmedString2 = line2.trim();
    let letterArray2 = trimmedString2.split();
    for (let j =0; j <= letterArray2.length; j++) {
        if(letterArray2[j] === 'a' || 'e' || 'i' || 'o' || 'u' || 'u' || 'y') {
            syllableCount ++;
        }
        if (syllableCount === 7) {
            return true;
        }
    }

    let trimmedString3 = line3.trim();
    let letterArray3 = trimmedString3.split();
    for (let k =0; k <= letterArray3.length; k++) {
        if(letterArray2[k] === 'a' || 'e' || 'i' || 'o' || 'u' || 'u' || 'y') {
            syllableCount ++;
        }
        if (syllableCount === 5) {
            return true;
        }
    }
    if (line1 === true && line2 === true && line3 === true) {
        return "it's a haiku!";
    }
    }
```