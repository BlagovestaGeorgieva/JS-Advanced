function magicMatrices(input) {

    let isMagic = true;
    let sum = input[0].reduce((a, b) => a + b);

    for (let i = 1; i < input.length; i++) {

        let currentSum = input[i].reduce((a, b) => a + b);

        if (currentSum !== sum) {
            isMagic = false;
            break;
        }
    }

    for (let i = 0; i < input.length; i++) {

        let currentSum = 0;

        for (let j = 0; j < input.length; j++) {
            currentSum += input[j][i];
        }

        if (currentSum !== sum) {
            isMagic = false;
            break;
        }
    }

    if (isMagic) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices([[4, 1, 6],
[6, 5, 4],
[5, 5, 5]]);