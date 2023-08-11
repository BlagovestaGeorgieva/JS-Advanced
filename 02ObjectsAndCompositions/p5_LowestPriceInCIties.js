function lowestPriceInCities(input) {

    let result = {};

    for (let i = 0; i < input.length; i++) {

        let [town, product, price] = input[i].split(' | ');
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = [price, town];
        } else {
            if (price < result[product][0]) {
                result[product] = [price, town];
            }
        }
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key][0]} (${result[key][1]})`);
    }
}

lowestPriceInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);