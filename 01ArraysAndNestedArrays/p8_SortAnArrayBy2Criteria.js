function sortByCriteria(input) {

    let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    console.log(sortedArray.join('\n'));
}

sortByCriteria(['alpha', 'beta', 'gamma']);