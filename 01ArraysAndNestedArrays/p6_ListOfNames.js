function listOfNames(names) {

    let newList = names.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < newList.length; i++) {
        console.log(`${i + 1}.${newList[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);