import { input, example } from './input.mjs';

const partTwo = (input) => {
    const lines = input.split('\n');
    const cardInstances = new Array(lines.length).fill(1);

    lines.forEach((line, index) => {
        const numbers = line.split(':')[1].trim();
        const validNumbers = numbers.split('|')[0].trim().split(' ').filter((number) => number).map((number) => number);
        const scratchedNumbers = numbers.split('|')[1].trim().split(' ').filter((number) => number).map((number) => number);
        const matchCount = scratchedNumbers.filter((number) => validNumbers.includes(number)).length;

        if (matchCount) {
            for (let i = index + 1; i <= index + matchCount; i++) {
                cardInstances[i] += cardInstances[index];
            }
        }
    });

    console.log(cardInstances.reduce((acc, curr) => acc + curr, 0));
}

partTwo(example);
partTwo(input);