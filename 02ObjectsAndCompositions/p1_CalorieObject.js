function calorieObject(input) {

    let listOfFood = {};

    for (let i = 0; i < input.length; i += 2) {

        listOfFood[input[i]] = Number(input[i + 1]);
    }

    console.log(listOfFood);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);