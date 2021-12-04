import { data } from './day2.data';

export const func = (horizontal_position: number, depth: number, aim: number, instructions: string[]) => {
    for (let i = 0; i < instructions.length; i++) {
        let [direction, units] = instructions[i].split(' ');
        switch (direction) {
            case 'forward':
                horizontal_position += Number(units);
                depth += aim * Number(units);
                break;
            case 'down':
                aim += Number(units);
                break;
            case 'up':
                aim -= Number(units);
                break;
        }
    }
    return horizontal_position * depth;
};

export const day2part2 = (input: string[]) => func(0, 0, 0, data);

/*
--- Part Two ---

Based on your calculations, the planned course doesn't seem to make any sense.
You find the submarine manual and discover that the process is actually slightly
more complicated.

In addition to horizontal position and depth, you'll also need to track a third
value, aim, which also starts at 0. The commands also mean something entirely
different than you first thought:

    - down X increases your aim by X units.
    - up X decreases your aim by X units.
    - forward X does two things:
        - It increases your horizontal position by X units.
        - It increases your depth by your aim multiplied by X.

Again note that since you're on a submarine, down and up do the opposite of what
you might expect: "down" means aiming in the positive direction.
*/
