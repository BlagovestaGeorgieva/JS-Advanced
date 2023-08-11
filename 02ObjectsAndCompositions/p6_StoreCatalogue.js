function storeCatalogue(input) {

    let sortedArray = input.sort((a, b) => a.localeCompare(b));

    let currentLetter = '';
    let previousLetter = '';

    for (let i = 0; i < sortedArray.length; i++) {

        let [product, price] = sortedArray[i].split(' : ');
        price = Number(price);

        let splittedProduct = product.split('');
        currentLetter = splittedProduct[0];

        if (currentLetter !== previousLetter) {
            console.log(currentLetter);
            previousLetter = currentLetter;
        }
        console.log(`  ${splittedProduct.join('')}: ${price}`);
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);