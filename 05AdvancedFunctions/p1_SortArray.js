function sortArray(input, param) {

    if (param == 'asc') {
        input.sort((a, b) => a - b);
    } else {
        input.sort((a, b) => b - a);
    }

    return input;
}

sortArray([14, 7, 17, 6, 8], 'asc');