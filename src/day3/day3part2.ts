import { data } from './data.day3';

const bitCriteria = (array: number[][], position: number, mostCommonValue: boolean) => {
    let countOnes = array.filter((x) => x[position] == 1).length;
    let countZeros = array.filter((x) => x[position] == 0).length;
    //console.log(`ones: ${countOnes}, zeros: ${countZeros}`);
    if (mostCommonValue) {
        if (countOnes >= countZeros) {
            return array.filter((row) => row[position] == 1);
        } else {
            return array.filter((row) => row[position] == 0);
        }
    } else {
        if (countOnes < countZeros) {
            return array.filter((row) => row[position] == 1);
        } else {
            return array.filter((row) => row[position] == 0);
        }
    }
};

export const getOxygenGeneratorRating = (array: number[][]) => {
    let oxygenGeneratorRating = '';

    let position = 0;
    while (array.length > 1) {
        array = bitCriteria(array, position, true);
        //console.log(array.length);
        position += 1;
    }

    oxygenGeneratorRating = array[0].join('');

    return parseInt(oxygenGeneratorRating, 2);
};

export const getCO2ScrubberRating = (array: number[][]) => {
    let co2ScrubberRating = '';

    let position = 0;
    while (array.length > 1) {
        array = bitCriteria(array, position, false);
        //console.log(array.length);
        position += 1;
    }

    co2ScrubberRating = array[0].join('');

    return parseInt(co2ScrubberRating, 2);
};

export const getLifeSupportRating = (array: number[][]) => {
    return getOxygenGeneratorRating(array) * getCO2ScrubberRating(array);
};

export const day3part2 = (input: number[][]) => getLifeSupportRating(data);

/*
--- Part Two ---

Next, you should verify the life support rating, which can be determined by
multiplying the oxygen generator rating by the CO2 scrubber rating.

Both the oxygen generator rating and the CO2 scrubber rating are values that can
be found in your diagnostic report - finding them is the tricky part. Both
values are located using a similar process that involves filtering out values
until only one remains. Before searching for either rating value, start with the
full list of binary numbers from your diagnostic report and consider **just the
first bit** of those numbers. Then:

  - **Keep only numbers selected by the bit criteria** for the type of rating
    value for which you are searching. Discard numbers which do not match the
    bit criteria.
  - If you only have one number left, stop; this is the rating value for which
    you are searching.
  - Otherwise, repeat the process, considering the next bit to the right.

The bit criteria depends on which type of rating value you want to find:

  - To find **oxygen generator rating**, determine the most common value (0 or
    1) in the current bit position, and keep only numbers with that bit in that
    position. If 0 and 1 are equally common, keep values with a 1 in the
    position being considered.
  - To find **CO2 scrubber rating**, determine the least common value (0 or 1)
    in the current bit position, and keep only numbers with that bit in that
    position. If 0 and 1 are equally common, keep values with a 0 in the
    position being considered.

Use the binary numbers in your diagnostic report to calculate the oxygen
generator rating and CO2 scrubber rating, then multiply them together. What is
the life support rating of the submarine? (Be sure to represent your answer in
decimal, not binary.)
*/
