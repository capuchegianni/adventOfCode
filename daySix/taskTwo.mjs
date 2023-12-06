import { example, input } from "./input.mjs";

const partTwo = (input) => {
    const lines = input.split('\n');
    const time = parseInt(lines[0].split(':')[1].trim().split(' ').filter((num) => num).join(''));
    const distance = parseInt(lines[1].split(':')[1].trim().split(' ').filter((num) => num).join(''));
    let better = 0;

    for (let j = 0; j <= time; j++) {
        if (j * (time - j) > distance) better++;
    }
    console.log(better)
}

partTwo(example)
partTwo(input)