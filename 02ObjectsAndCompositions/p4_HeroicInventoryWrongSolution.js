function heroicInventory(input) {

    let heroes = {};
    let result = [];

    for (let i = 0; i < input.length; i++) {
        heroes = {};
        let currentHero = input[i].split(' / ');
        let currentName = currentHero[0];
        let currentLevel = Number(currentHero[1]);

        heroes.name = currentName;
        heroes.level = currentLevel;

        if (currentHero.length > 2) {
            let currentItems = currentHero[2].split(', ');
            let itemsArray = [];

            for (let i = 0; i < currentItems.length; i++) {
                itemsArray.push(currentItems[i]);
            }
            
            heroes.items = itemsArray;
        }

        result.push(heroes);
    }

    let parsedArray = JSON.stringify(result);
    console.log(parsedArray);
}

heroicInventory(['Isacc / 25 ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);