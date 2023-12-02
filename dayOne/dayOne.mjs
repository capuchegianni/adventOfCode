import { inputPartOne, inputPartTwo } from "./input.mjs";

const partOne = (input) => {
    const lines = input.split("\n");
    let sum = 0;

    lines.forEach((line) => {
        const numbers = [];

        for (let i = 0; i < line.length; i++) {
            if (line[i] >= 0 && line[i] <= 9) {
                numbers.push(parseInt(line[i]));
            }
        }
        if (!numbers.length) return;
        if (numbers.length === 1) {
            const number = Number(`${numbers[0]}${numbers[0]}`);

            sum += number;
            return;
        }
        if (numbers.length > 1) {
            const number = Number(`${numbers[0]}${numbers[numbers.length - 1]}`);

            sum += number;
            return;
        }
    });
    console.log(sum);
}

const partTwo = (input) => {
    const lines = input.split("\n");
    let sum = 0;

    lines.forEach((line) => {
        const numbers = detectNumbers(line);

        if (!numbers.length) return;
        if (numbers.length === 1) {
            const number = Number(`${numbers[0]}${numbers[0]}`);

            sum += number;
            return;
        }
        if (numbers.length > 1) {
            const number = Number(`${numbers[0]}${numbers[numbers.length - 1]}`);

            sum += number;
            return;
        }
    });
    console.log(sum);
}

const detectNumbers = (line) => {
    const numbers = [];
        let substring = "";
        const numbersAsString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const numbersAsNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

        for (let i = 0; i < line.length; i++) {
            substring += line[i];
            numbersAsNumber.forEach((number) => {
                if (substring.includes(number)) {
                    numbers.push(number);
                    substring = line[i];
                }
            });
            numbersAsString.forEach((number) => {
                if (substring.includes(number)) {
                    numbers.push(number.replace('one', '1')
                        .replace('two', '2')
                        .replace('three', '3')
                        .replace('four', '4')
                        .replace('five', '5')
                        .replace('six', '6')
                        .replace('seven', '7')
                        .replace('eight', '8')
                        .replace('nine', '9'));
                    substring = line[i];
                }
            });
        }
    return numbers;
}

partOne(inputPartOne);
partTwo(inputPartTwo);
