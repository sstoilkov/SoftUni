function arrayManipulator(array, commands) {

    for (i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ');

        if (command[0] === 'add') {
            array.splice(command[1], 0, Number(command[2]))
        }

        else if (command[0] === 'addMany') {
            let index = 0;
            for (j = 2; j < command.length; j++) {
                array.splice(command[1] + index, 0, Number(command[j]))
                index++;
            }

        }

        else if (command[0] === 'contains') {

            if (array.includes(Number(command[1]))) {
                console.log(array.indexOf(Number(command[1])))
            } else {
                console.log(-1)
            }
        }
        else if (command[0] === 'remove') {
            array.splice(command[1], 1)
        }

        else if (command[0] === 'shift') {

            for (j = 0; j < command[1]; j++) {
                array.push(array[j]);
                array.splice(0, 1)
            }
        }

        else if (command[0] === 'sumPairs') {

            let newArr = [];
            let counter = 0;
            for (j = 0; j < array.length; j += 2) {
                let result = array[j] + array[j + 1]
                if (isNaN(result)) {
                    break;
                }
                newArr.splice(counter, 0, result)
                counter++;
            } array = newArr;
        }

        else if (command[0] === 'print') {
            let result = `[ ${array.join(', ')} ]`
            console.log(result)
            break;
        }
    }
}

arrayManipulator(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
)