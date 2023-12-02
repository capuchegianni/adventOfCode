import { input, example } from './input.mjs';

const partOne = (input) => {
    const totalCubes = {
        red: 12,
        green: 13,
        blue: 14
    };
    const lines = input.split("\n");
    let total = 0;

    lines.forEach((line) => {
        const hands = line.split(":").splice(1, 1)[0].split(';');
        const gameNumber = line.split(':')[0].split(' ')[1];
        const valid = hands.every((hand) => {
            const cubes = hand.split(",");

            return cubes.every((cube) => {
                const number = cube.trim().split(" ")[0].trim();
                const color = cube.trim().split(" ")[1].trim();

                return totalCubes[color] >= number;
            }) === true;
        });

        if (valid) total += Number(gameNumber);
    });
    console.log(total);
}

partOne(example);
partOne(input);