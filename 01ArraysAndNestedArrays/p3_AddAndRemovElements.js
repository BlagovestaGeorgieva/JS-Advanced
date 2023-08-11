function addAndRemoveElements(input) {

    let newArr = [];

    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'add') {
            newArr.push(i + 1);
        } else if (input[i] === 'remove') {
            newArr.pop();
        }
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
