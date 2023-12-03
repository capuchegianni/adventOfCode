import { input, example } from './input.mjs';

const isSymbol = (lines, index, i) => {
    const symbols = ['*'];

    if (symbols.includes(lines[index - 1]?.[i])) return { x: index - 1, y: i, value: 0 };
    if (symbols.includes(lines[index + 1]?.[i])) return { x: index + 1, y: i, value: 0 };
    if (symbols.includes(lines[index]?.[i - 1])) return { x: index, y: i - 1, value: 0 };
    if (symbols.includes(lines[index]?.[i + 1])) return { x: index, y: i + 1, value: 0 };
    if (symbols.includes(lines[index - 1]?.[i - 1])) return { x: index - 1, y: i - 1, value: 0 };
    if (symbols.includes(lines[index - 1]?.[i + 1])) return { x: index - 1, y: i + 1, value: 0 };
    if (symbols.includes(lines[index + 1]?.[i - 1])) return { x: index + 1, y: i - 1, value: 0 };
    if (symbols.includes(lines[index + 1]?.[i + 1])) return { x: index + 1, y: i + 1, value: 0 };
    return null;
}

const partTwo = (input) => {
    const lines = input.split('\n');
    const numbers = [];
    let sum = 0;
    const usedNumbers = [];

    lines.forEach((line, index) => {
        let number = '';
        let hasSymbol = false;

        for (let i = 0; i < line.length; i++) {
            if (!isNaN(line[i])) {
                number += line[i];
                if (!hasSymbol) {
                    const found = isSymbol(lines, index, i);

                    if (found) {
                        numbers.push(found);
                        hasSymbol = true;
                    }
                }
                if (!line[i + 1] && hasSymbol) numbers[numbers.length - 1].value = parseInt(number);
            } else {
                if (number && hasSymbol) numbers[numbers.length - 1].value = parseInt(number);
                number = '';
                hasSymbol = false;
            }
        }
    });
    numbers.forEach((number) => {
        numbers.forEach((num) => {
            if (number.x === num.x && number.y === num.y && number.value !== num.value && !usedNumbers.find((used) => used.number === num.value && used.num === number.value)) {
                sum += number.value * num.value;
                usedNumbers.push({ number: number.value, num: num.value });
            }
        });
    });
    console.log(sum);
}

partTwo(example);
partTwo(input);