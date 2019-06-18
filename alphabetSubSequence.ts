// Check whether the given string is a subsequence of the plaintext alphabet.
function alphabetSubSequence(s: string): boolean {
    const chars: string[] = s.split('');
    const charValues: number[] = [];

    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0))
    });
    console.log(new Set(charValues));
    if (new Set(charValues).size !== charValues.length) {
        return false;
    }

    for(let i = 0; i < charValues.length; i++) {
        if(charValues[i] >= charValues[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log(alphabetSubSequence('zab')); // Set { 122, 97, 98 }
                                        // false
console.log(alphabetSubSequence('effg'));  // Set { 101, 102, 103 }
                                        // false
console.log(alphabetSubSequence('cdce'));  // Set { 99, 100, 101 }
                                        // false
console.log(alphabetSubSequence('ace'));  // Set { 97, 99, 101 }
                                        // true
console.log(alphabetSubSequence('bxz'));  // Set { 98, 120, 122 }
                                        // true