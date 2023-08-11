function extractIncreasingSubsequence(input) {

    let newArr = [];
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {

        if (input[i] >= biggestNumber) {
            biggestNumber = input[i];
            newArr.push(biggestNumber);
        }
    }

    return newArr;
}

extractIncreasingSubsequence([1, 20, 3, 2, 15, 6, 1]);