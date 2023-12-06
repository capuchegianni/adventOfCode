import { input, example } from './input.mjs';

const partTwo = (input) => {
    const categories = input.split('\n\n');
    const seedsToParse = categories[0].split(':')[1].trim().split(' ');
    let minSeed = 0;

    for (let i = 0; i < seedsToParse.length; i += 2) {
        for (let number = 0; number < Number(seedsToParse[i + 1]); number++) {
            let seed = number + Number(seedsToParse[i]);

            const first = categories.shift();
            categories.forEach((category) => {
                const lines = category.split(':\n')[1].split('\n');
                let modified = false;

                lines.forEach((line) => {
                    const [destination, source, range] = line.split(' ').map((number) => parseInt(number));

                    if (seed >= source && seed < source + range && !modified) {
                        seed = seed - (source - destination);
                        modified = true;
                    }
                });
            });
            categories.unshift(first);
            if (minSeed === 0) {
                minSeed = seed;
            } else {
                if (minSeed > seed) minSeed = seed;
            }
        }
    }
    console.log(minSeed);
}

// partTwo(example);
partTwo(input);

// procéder les seeds une par une sans les stocker et garder à chaque tour uniquement le résultat le plus petit dans une variable