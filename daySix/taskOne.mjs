import { example, input } from "./input.mjs";

const partOne = (input) => {
    const lines = input.split('\n');
    const time = lines[0].split(':')[1].trim().split(' ').filter((num) => num).map((num) => parseInt(num));
    const distance = lines[1].split(':')[1].trim().split(' ').filter((num) => num).map((num) => parseInt(num));
    const results = [];

    for (let i = 0; i < time.length; i++) {
        let better = 0;

        for (let j = 0; j <= time[i]; j++) {
            if (j * (time[i] - j) > distance[i]) better++;
        }
        results.push(better);
    }
    console.log(results.reduce((acc, curr) => acc * curr));
}

partOne(example)
partOne(input)