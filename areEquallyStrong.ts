// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), 
// and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.
function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest ===friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10)); // true
console.log(areEquallyStrong(15, 10, 15, 10)); // true
console.log(areEquallyStrong(15, 10, 15, 9)); // false
