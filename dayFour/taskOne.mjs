import { input, example } from './input.mjs';

const partOne = (input) => {
    const lines = input.split('\n');
    let sum = 0;

    lines.forEach((line) =>{
        const numbers = line.split(':')[1].trim();
        const validNumbers = numbers.split('|')[0].trim().split(' ').filter((number) => number).map((number) => number);
        const scratchedNumbers = numbers.split('|')[1].trim().split(' ').filter((number) => number).map((number) => number);
        let valid = 0;

        validNumbers.forEach((number) => {
            if (scratchedNumbers.includes(number)) {
                if (valid === 0) valid++;
                else valid += valid;
            }
        });
        sum += valid;
    });
    console.log(sum);
}

partOne(example);
partOne(input);