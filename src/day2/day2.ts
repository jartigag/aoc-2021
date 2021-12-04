import { data } from './day2.data';

export const func = (horizontal_position: number, depth: number, instructions: string[]) => {
    for (let i = 0; i < instructions.length; i++) {
        let [direction, units] = instructions[i].split(' ');
        switch (direction) {
            case 'forward':
                horizontal_position += Number(units);
                break;
            case 'down':
                depth += Number(units);
                break;
            case 'up':
                depth -= Number(units);
                break;
        }
    }
    return horizontal_position * depth;
};

export const day2 = (input: string[]) => func(0, 0, data);

/*
--- Day 2: Dive! ---

Now, you need to figure out how to pilot this thing.

It seems like the submarine can take a series of commands like forward 1, down
2, or up 3:
  - forward X increases the horizontal position by X units.
  - down X increases the depth by X units.
  - up X decreases the depth by X units.

Note that since you're on a submarine, down and up affect your depth, and so
they have the opposite result of what you might expect.

The submarine seems to already have a planned course (your puzzle input). You
should probably figure out where it's going.
*/
