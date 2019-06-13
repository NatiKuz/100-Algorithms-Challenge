// Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(inputArray: string[]): string[] {
    let longestLength = 0;
    const longestWords = string[];

    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    inputArray.forEach((word: string) => {
        if(word.length === longestLength) {
            longestWords.puch(word);
        }
    });

    return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));