import { input, example } from './input.mjs';

const isSymbol = (lines, index, i) => {
    const symbols = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (index === 0) {
        if (i === 0) {
            if (!symbols.includes(lines[index + 1][i])) return true;
            if (!symbols.includes(lines[index][i + 1])) return true;
            if (!symbols.includes(lines[index + 1][i + 1])) return true;
            return false;
        } else if (i === lines[index].length - 1) {
            if (!symbols.includes(lines[index + 1][i])) return true;
            if (!symbols.includes(lines[index][i - 1])) return true;
            if (!symbols.includes(lines[index + 1][i - 1])) return true;
            return false;
        } else {
            if (!symbols.includes(lines[index + 1][i])) return true;
            if (!symbols.includes(lines[index][i - 1])) return true;
            if (!symbols.includes(lines[index][i + 1])) return true;
            if (!symbols.includes(lines[index + 1][i - 1])) return true;
            if (!symbols.includes(lines[index + 1][i + 1])) return true;
            return false;
        }
    } else if (index === lines.length - 1) {
        if (i === 0) {
            if (!symbols.includes(lines[index - 1][i])) return true;
            if (!symbols.includes(lines[index][i + 1])) return true;
            if (!symbols.includes(lines[index - 1][i + 1])) return true;
            return false;
        } else if (i === lines[index].length - 1) {
            if (!symbols.includes(lines[index - 1][i])) return true;
            if (!symbols.includes(lines[index][i - 1])) return true;
            if (!symbols.includes(lines[index - 1][i - 1])) return true;
            return false;
        } else {
            if (!symbols.includes(lines[index - 1][i])) return true;
            if (!symbols.includes(lines[index][i - 1])) return true;
            if (!symbols.includes(lines[index][i + 1])) return true;
            if (!symbols.includes(lines[index - 1][i - 1])) return true;
            if (!symbols.includes(lines[index - 1][i + 1])) return true;
            return false;
        }
    } else {
        if (i === 0) {
            if (!symbols.includes(lines[index + 1][i])) return true;
            if (!symbols.includes(lines[index][i + 1])) return true;
            if (!symbols.includes(lines[index + 1][i + 1])) return true;
            return false;
        } else if (i === lines[index].length - 1) {
            if (!symbols.includes(lines[index + 1][i])) return true;
            if (!symbols.includes(lines[index][i - 1])) return true;
            if (!symbols.includes(lines[index + 1][i - 1])) return true;
            return false;
        } else {
            if (!symbols.includes(lines[index - 1][i])) return true;
            if (!symbols.includes(lines[index + 1][i])) return true;
            if (!symbols.includes(lines[index][i - 1])) return true;
            if (!symbols.includes(lines[index][i + 1])) return true;
            if (!symbols.includes(lines[index - 1][i - 1])) return true;
            if (!symbols.includes(lines[index - 1][i + 1])) return true;
            if (!symbols.includes(lines[index + 1][i - 1])) return true;
            if (!symbols.includes(lines[index + 1][i + 1])) return true;
            return false;
        }
    }
}

const partOne = (input) => {
    const lines = input.split('\n');
    let sum = 0;

    lines.forEach((line, index) => {
        let number = '';
        let hasSymbol = false;

        for (let i = 0; i < line.length; i++) {
            if (!isNaN(line[i])) {
                number += line[i];
                if (!hasSymbol && isSymbol(lines, index, i)) hasSymbol = true;
                if (!line[i + 1] && hasSymbol) sum += parseInt(number);
            } else {
                if (number && hasSymbol) sum += parseInt(number);
                number = '';
                hasSymbol = false;
            }
        }
    });
    console.log(sum);
}

partOne(example);
partOne(input);