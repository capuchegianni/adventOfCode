import { input, example } from './input.mjs';

const partOne = (input) => {
    const categories = input.split('\n\n');
    const seeds = categories[0].split(':')[1].trim().split(' ').map((seed) => parseInt(seed));

    categories.shift();
    categories.forEach((category) => {
        const lines = category.split(':\n')[1].split('\n');
        const modified = new Array(4).fill(false);

        lines.forEach((line) => {
            const [destination, source, range] = line.split(' ').map((number) => parseInt(number));

            seeds.forEach((seed, index) => {
                if (seed >= source && seed < source + range && !modified[index]) {
                    seeds[index] = seed - (source - destination);
                    modified[index] = true;
                }
            });
        });
    });
    console.log(Math.min(...seeds));
}

partOne(example);
partOne(input);

// On a 4 nombres importants: gauche, milieu, droite, seed
// Si la seed est dans la range (genre milieu = 50, droite = 48, donc 50-97)
// On a la différence milieu - gauche (si gauche = 52, donc 50 - 52 = -2)
// Si seed = 79 par exemple, on an newVal = seed - différence = 79 - -2 = 81
// Si seed = 72 donc hors de la range 50-97, on a newVal = seed
// et ainsi de suite jusqu'à la dernière catégorie