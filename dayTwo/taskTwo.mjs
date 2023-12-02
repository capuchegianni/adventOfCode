import { input, example } from './input.mjs';

const partTwo = (input) => {
    const lines = input.split("\n");
    let total = 0;

    lines.forEach((line) => {
        const hands = line.split(":").splice(1, 1)[0].split(';');
        const max = {
            red: 0,
            green: 0,
            blue: 0
        };

        hands.forEach((hand) => {
            const cubes = hand.split(",");

            cubes.forEach((cube) => {
                const number = cube.trim().split(" ")[0].trim();
                const color = cube.trim().split(" ")[1].trim();

                if (max[color] < number) max[color] = Number(number);
            });
        });
        total += (Number(max.red) * Number(max.green) * Number(max.blue));
    });
    console.log(total);
}

partTwo(example);
partTwo(input);