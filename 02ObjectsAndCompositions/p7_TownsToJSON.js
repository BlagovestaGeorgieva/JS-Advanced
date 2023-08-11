function townsToJSON(input) {

    let finalOutput = [];
    let towns = {};

    let headings = input.shift();
    let [town, latitude, longitude] = headings.split(' | ');
    town = town.slice(2);
    longitude = longitude.slice(0, longitude.length - 2);

    for (let i = 0; i < input.length; i++) {
        towns = {};

        let [currentTown, currentLatitude, currentLongitude] = input[i].split(' | ');
        currentTown = currentTown.slice(2);
        currentLongitude = currentLongitude.slice(0, currentLongitude.length - 2);
        currentLatitude = Number(currentLatitude);
        currentLongitude = Number(currentLongitude);

        towns[town] = currentTown;
        towns[latitude] = Number(currentLatitude.toFixed(2));
        towns[longitude] = Number(currentLongitude.toFixed(2));

        finalOutput.push(towns);
    }

    let parsedArray = JSON.stringify(finalOutput);
    console.log(parsedArray);
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);