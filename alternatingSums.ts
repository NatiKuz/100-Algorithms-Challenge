// Several people are standing in a row and need to be divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people.
// Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.


function alternatingSums(a: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((element, index) => {
        if(index % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    });

    return[evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));  // [ 180, 105 ]