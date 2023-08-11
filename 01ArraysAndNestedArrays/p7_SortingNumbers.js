function sortingNumbers(input) {

    let sortedArray = input.sort((a, b) => a - b);
    let output = [];

    while (sortedArray.length !== 0) {

        let smallestNumber = sortedArray.shift();
        output.push(smallestNumber);
        let biggestNumber = sortedArray.pop();
        output.push(biggestNumber);
    }

    return output;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);