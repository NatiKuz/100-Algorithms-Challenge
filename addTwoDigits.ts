// You are given a two-digit integer n. Return the sum of its digits.
function addTwoDigits(n: any): number {
    const nums = n.toString().split('');

    return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29)); // 11